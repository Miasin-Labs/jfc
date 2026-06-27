use crate::commands::prelude::*;
use jfc_session::{CommitHit, SessionHit};
use std::path::Path;

const DEFAULT_CONTEXT_SEARCH_LIMIT: usize = 10;
const SESSION_CONTEXT_WINDOW: usize = 2;
const MAX_COMMITS_SEARCHED: usize = 250;

enum ContextSearchHit {
    Session(SessionHit),
    Commit(CommitHit),
}

pub(super) async fn cmd_ctx_search(
    state: &mut EngineState,
    _parts: &[&str],
    text: &str,
    _tx: Option<&mpsc::Sender<EngineEvent>>,
) {
    state.messages.push(ChatMessage::user(text.to_owned()));
    let query = command_query_text(text);
    if query.is_empty() {
        state.messages.push(ChatMessage::assistant(
            "Usage: `/ctx-search <query>` searches prior sessions and git commits.".into(),
        ));
        return;
    }

    let cwd = PathBuf::from(&state.cwd);
    let exclude_session = state.current_session_id.as_ref().map(|id| id.as_str());
    let hits = collect_context_hits(&cwd, query, exclude_session, DEFAULT_CONTEXT_SEARCH_LIMIT);
    state
        .messages
        .push(ChatMessage::assistant(format_context_search_results(
            query, &hits,
        )));
}

fn command_query_text(text: &str) -> &str {
    let trimmed = text.trim();
    let Some(idx) = trimmed.find(char::is_whitespace) else {
        return "";
    };
    trimmed[idx..].trim()
}

fn collect_context_hits(
    repo_root: &Path,
    query: &str,
    exclude_session: Option<&str>,
    limit: usize,
) -> Vec<ContextSearchHit> {
    let session_hits = jfc_session::search_sessions_excluding(
        query,
        limit,
        SESSION_CONTEXT_WINDOW,
        exclude_session,
    )
    .into_iter()
    .map(ContextSearchHit::Session);
    let commit_hits = jfc_session::search_commits(repo_root, query, limit, MAX_COMMITS_SEARCHED)
        .into_iter()
        .map(ContextSearchHit::Commit);

    let mut hits = Vec::with_capacity(limit);
    let mut sessions = session_hits.peekable();
    let mut commits = commit_hits.peekable();
    while hits.len() < limit && (sessions.peek().is_some() || commits.peek().is_some()) {
        if let Some(hit) = sessions.next() {
            hits.push(hit);
            if hits.len() >= limit {
                break;
            }
        }
        if let Some(hit) = commits.next() {
            hits.push(hit);
        }
    }
    hits
}

fn format_context_search_results(query: &str, hits: &[ContextSearchHit]) -> String {
    if hits.is_empty() {
        return format!("No prior session or git commit context matched `{query}`.");
    }
    let mut body = format!("Context search results for `{query}`:\n\n");
    for (index, hit) in hits.iter().enumerate() {
        match hit {
            ContextSearchHit::Session(hit) => {
                body.push_str(&format!(
                    "{}. [message] session `{}` msg={} updated={}\n   {}\n   title: {}\n\n",
                    index + 1,
                    hit.session_id,
                    hit.match_index,
                    hit.updated_at,
                    truncate_line(&hit.snippet, 240),
                    truncate_line(&hit.title, 120),
                ));
            }
            ContextSearchHit::Commit(hit) => {
                body.push_str(&format!(
                    "{}. [git_commit] `{}` {}\n   {}\n   {}\n\n",
                    index + 1,
                    hit.short_hash,
                    hit.date.chars().take(10).collect::<String>(),
                    truncate_line(&hit.subject, 160),
                    truncate_line(&hit.snippet, 240),
                ));
            }
        }
    }
    body.push_str(
        "Use `/resume <session_id>` for a session hit or `git show <sha>` for a commit hit.",
    );
    body
}

fn truncate_line(text: &str, max_chars: usize) -> String {
    let normalized = text.split_whitespace().collect::<Vec<_>>().join(" ");
    let mut chars = normalized.chars();
    let mut out: String = chars.by_ref().take(max_chars).collect();
    if chars.next().is_some() {
        out.push_str("...");
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;
    use jfc_provider::{EventStream, ModelInfo, Provider, ProviderMessage, StreamOptions};
    use std::process::Command;
    use std::sync::Arc;

    struct KnowledgeDbEnvGuard {
        prior: Option<std::ffi::OsString>,
        _dir: tempfile::TempDir,
    }

    impl KnowledgeDbEnvGuard {
        fn new() -> Self {
            let dir = tempfile::tempdir().expect("tempdir");
            let prior = std::env::var_os("JFC_KNOWLEDGE_DB");
            // SAFETY: Category 13, library contract. These tests construct the
            // guard only inside serial test cases before starting async work,
            // so the guard owns this environment override until Drop restores it.
            unsafe { std::env::set_var("JFC_KNOWLEDGE_DB", dir.path().join("knowledge.db")) };
            Self { prior, _dir: dir }
        }
    }

    impl Drop for KnowledgeDbEnvGuard {
        fn drop(&mut self) {
            // SAFETY: Category 13, library contract. The matching serial test
            // still owns the process environment mutation, and this restores the
            // exact prior value before the next serial test can enter.
            unsafe {
                match &self.prior {
                    Some(prior) => std::env::set_var("JFC_KNOWLEDGE_DB", prior),
                    None => std::env::remove_var("JFC_KNOWLEDGE_DB"),
                }
            }
        }
    }

    fn git(dir: &Path, args: &[&str]) {
        let status = Command::new("git")
            .args([
                "-c",
                "core.hooksPath=",
                "-c",
                "commit.gpgsign=false",
                "-c",
                "tag.gpgsign=false",
            ])
            .arg("-C")
            .arg(dir)
            .args(args)
            .status()
            .expect("git should run");
        assert!(status.success(), "git {args:?} failed");
    }

    fn temp_repo() -> tempfile::TempDir {
        let dir = tempfile::tempdir().expect("tempdir");
        let path = dir.path();
        git(path, &["init", "-q"]);
        git(path, &["config", "user.email", "t@t"]);
        git(path, &["config", "user.name", "t"]);
        std::fs::write(path.join("context.txt"), "context").expect("write fixture");
        git(path, &["add", "."]);
        git(
            path,
            &[
                "commit",
                "-q",
                "-m",
                "fix: repair context body overflow\n\nStops request_too_large loops.",
            ],
        );
        dir
    }

    struct TestProvider;

    impl jfc_provider::seal::Sealed for TestProvider {}

    #[async_trait::async_trait]
    impl Provider for TestProvider {
        fn name(&self) -> &str {
            "test"
        }

        fn available_models(&self) -> Vec<ModelInfo> {
            Vec::new()
        }

        async fn stream(
            &self,
            _messages: Vec<ProviderMessage>,
            _options: &StreamOptions,
        ) -> anyhow::Result<EventStream> {
            Ok(Box::pin(futures::stream::empty()))
        }
    }

    #[test]
    #[serial_test::serial]
    fn collect_context_hits_returns_git_commit_when_session_db_empty_regression() {
        let _env = KnowledgeDbEnvGuard::new();
        let repo = temp_repo();

        let hits = collect_context_hits(repo.path(), "request_too_large", None, 10);

        assert!(
            matches!(hits.first(), Some(ContextSearchHit::Commit(hit)) if hit.snippet.contains("request_too_large"))
        );
    }

    #[test]
    fn format_context_search_results_is_bounded_and_actionable_normal() {
        let hit = ContextSearchHit::Commit(CommitHit {
            short_hash: "abc1234".to_owned(),
            date: "2026-06-27T00:00:00Z".to_owned(),
            subject: "fix: repair context body overflow".to_owned(),
            snippet: "Stops request_too_large loops.".to_owned(),
        });

        let formatted = format_context_search_results("request_too_large", &[hit]);

        assert!(formatted.contains("[git_commit] `abc1234`"));
        assert!(formatted.contains("git show <sha>"));
    }

    #[tokio::test]
    #[serial_test::serial]
    async fn ctx_search_command_returns_git_context_through_slash_surface_regression() {
        let _env = KnowledgeDbEnvGuard::new();
        let repo = temp_repo();
        let mut state = EngineState::new(Arc::new(TestProvider), "test-model");
        state.cwd = repo.path().display().to_string();

        cmd_ctx_search(
            &mut state,
            &["/ctx-search", "request_too_large"],
            "/ctx-search request_too_large",
            None,
        )
        .await;

        let body = state
            .messages
            .last()
            .map(|message| {
                message
                    .parts
                    .iter()
                    .map(|part| part.text_only())
                    .collect::<String>()
            })
            .unwrap_or_default();
        assert!(body.contains("[git_commit]"));
        assert!(body.contains("request_too_large"));
    }
}

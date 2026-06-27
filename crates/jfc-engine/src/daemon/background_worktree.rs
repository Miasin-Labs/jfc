use std::path::{Path, PathBuf};

use super::registry::record_background_agent_log;
use super::state::BackgroundAgentLaunch;

pub(super) type BackgroundWorktree = (crate::worktrees::WorktreeInfo, PathBuf, Option<String>);

pub(super) enum BackgroundIsolation {
    Proceed(Option<BackgroundWorktree>, Option<PathBuf>),
    FailClosed(String),
}

pub(super) async fn prepare_background_worktree(
    launch: &BackgroundAgentLaunch,
) -> BackgroundIsolation {
    if launch.task_input.isolation.as_deref() != Some("worktree") {
        return BackgroundIsolation::Proceed(None, None);
    }

    let name = format!(
        "agent-{}",
        launch
            .task_id
            .replace("toolu_", "")
            .chars()
            .take(8)
            .collect::<String>()
    );
    let repo_root = match crate::worktrees::find_repo_root_async(&launch.cwd).await {
        Ok(root) => root,
        Err(e) => {
            record_background_agent_log(
                &launch.task_id,
                &format!(
                    "[worktree] failed to resolve git root from {}: {e}; using cwd",
                    launch.cwd.display()
                ),
            );
            launch.cwd.clone()
        }
    };
    match crate::worktrees::create_worktree_async(&repo_root, &name).await {
        Ok(info) => {
            let path = PathBuf::from(&info.path);
            record_background_agent_log(
                &launch.task_id,
                &format!("[worktree] created {}", path.display()),
            );
            let origin = crate::changeset::ChangeOrigin {
                task_id: Some(launch.task_id.clone()),
                agent_id: launch
                    .task_input
                    .subagent_type
                    .clone()
                    .or_else(|| Some("background".to_string())),
                session_id: launch.parent_session_id.clone(),
            };
            let change_id =
                crate::changeset::open_for_worktree(&repo_root, &info.path, &info.branch, &origin)
                    .await;
            BackgroundIsolation::Proceed(Some((info, repo_root, change_id)), Some(path))
        }
        Err(e) => match crate::changeset::isolation_fallback() {
            crate::changeset::IsolationFallback::FailClosed => {
                let msg = format!(
                    "[worktree] creation failed ({e}); isolation is fail-closed - \
                     refusing to run in the main checkout"
                );
                record_background_agent_log(&launch.task_id, &msg);
                BackgroundIsolation::FailClosed(msg)
            }
            crate::changeset::IsolationFallback::AllowCwd => {
                record_background_agent_log(
                    &launch.task_id,
                    &format!("[worktree] failed to create worktree: {e}; using cwd (fail-open)"),
                );
                BackgroundIsolation::Proceed(None, None)
            }
        },
    }
}

pub(super) async fn finish_background_worktree(
    task_id: &str,
    worktree_info: Option<BackgroundWorktree>,
) {
    let Some((wt, repo_root, change_id)) = worktree_info else {
        return;
    };
    if let Some(ref cid) = change_id {
        crate::changeset::finalize_for_worktree(&repo_root, cid, &wt.path).await;
    }
    let dirty = match tokio::process::Command::new("git")
        .arg("-C")
        .arg(&wt.path)
        .arg("status")
        .arg("--porcelain")
        .output()
        .await
    {
        Ok(out) if out.status.success() => !out.stdout.is_empty(),
        Ok(out) => {
            record_background_agent_log(
                task_id,
                &format!(
                    "[worktree] git status failed; preserving {}: {}",
                    wt.path,
                    String::from_utf8_lossy(&out.stderr)
                ),
            );
            true
        }
        Err(e) => {
            record_background_agent_log(
                task_id,
                &format!(
                    "[worktree] git status spawn failed; preserving {}: {e}",
                    wt.path
                ),
            );
            true
        }
    };
    if dirty {
        record_background_agent_log(
            task_id,
            &format!(
                "[worktree-preserved] path={} branch={} inspect=\"cd {} && git diff\"",
                wt.path, wt.branch, wt.path
            ),
        );
        return;
    }
    let wt_name = Path::new(&wt.path)
        .file_name()
        .and_then(|name| name.to_str())
        .unwrap_or("");
    match crate::worktrees::remove_worktree_async(&repo_root, wt_name).await {
        Ok(_) => {
            record_background_agent_log(task_id, &format!("[worktree-removed] path={}", wt.path))
        }
        Err(e) => record_background_agent_log(
            task_id,
            &format!("[worktree] cleanup failed for {}: {e}", wt.path),
        ),
    }
}

use super::DiffView;

#[derive(Clone, Debug)]
pub struct LargeText {
    pub content: String,
    pub line_count: usize,
    pub byte_count: usize,
}

impl LargeText {
    pub const COLLAPSE_LINES: usize = 500;
    pub const COLLAPSE_BYTES: usize = 30_720;

    pub fn new(content: String) -> Self {
        let line_count = content.lines().count();
        let byte_count = content.len();
        Self {
            content,
            line_count,
            byte_count,
        }
    }

    pub fn should_collapse(text: &str) -> bool {
        text.len() > Self::COLLAPSE_BYTES || text.lines().count() > Self::COLLAPSE_LINES
    }

    pub fn size_label(&self) -> String {
        let kb = self.byte_count as f64 / 1024.0;
        format!("{} lines · {:.1} KB", self.line_count, kb)
    }
}

#[derive(Clone, Debug)]
pub enum ToolOutput {
    Text(String),
    LargeText(LargeText),
    Diff(DiffView),
    FileContent {
        path: String,
        content: String,
        language: String,
    },
    Command {
        stdout: String,
        stderr: String,
        exit_code: Option<i32>,
    },
    FileList(Vec<String>),
    /// Anthropic server-side tool result (e.g. `web_search_tool_result`).
    /// The runtime never produces these locally — they arrive on a
    /// `StreamEvent::ServerToolResult` event and get attached to the
    /// originating `server_tool_use` ToolCall so that:
    ///
    ///   * the renderer can show the actual results instead of a stub
    ///     "🔍 Executed server-side by Anthropic" placeholder;
    ///   * `build_provider_messages_with_tool_results` re-emits the
    ///     block byte-faithfully on resend (cli.js v142:441375) instead
    ///     of fabricating a synthetic user `tool_result` (which would
    ///     break the server-side sampling loop's resumption logic per
    ///     cli.js v142:7057).
    ///
    /// `content` is the raw JSON value Anthropic returned (array of
    /// `{title,url}` for web_search, `{error_code,...}` on failure,
    /// etc.) so future server-tool result shapes round-trip without
    /// code changes.
    ServerToolResult {
        tool_kind: jfc_provider::ServerToolResultKind,
        content: serde_json::Value,
    },
    Empty,
}

/// Public wrapper around `format_server_tool_result_text` so the
/// renderer and tool-blocks module (which live outside `types::tool`)
/// can use the same formatting rules without duplicating the cli.js
/// consumer logic.
pub fn format_server_tool_result_text_public(
    tool_kind: &jfc_provider::ServerToolResultKind,
    content: &serde_json::Value,
) -> String {
    format_server_tool_result_text(tool_kind, content)
}

/// Render a server-side tool result (e.g. `web_search_tool_result`) as
/// human-readable text. Mirrors the v142 cli.js consumer at line
/// 394261 (`Bt_`): an array of `{title, url}` objects renders as a
/// bulleted list; an error wrapper (`{error_code: ...}`) renders as a
/// short error line.
///
/// The original JSON `content` is preserved on the
/// `ToolOutput::ServerToolResult` variant for byte-faithful resend;
/// this function is only for display + log.
fn format_server_tool_result_text(
    tool_kind: &jfc_provider::ServerToolResultKind,
    content: &serde_json::Value,
) -> String {
    use jfc_provider::ServerToolResultKind;
    // Error variant first — Anthropic wraps failures in
    // `{ "error_code": "..." }` rather than an array.
    if let Some(obj) = content.as_object() {
        if let Some(code) = obj.get("error_code").and_then(|v| v.as_str()) {
            return format!("[{wire} error] {code}", wire = tool_kind.wire_type());
        }
    }
    match tool_kind {
        ServerToolResultKind::WebSearch => {
            let Some(items) = content.as_array() else {
                return format!(
                    "[web_search_tool_result] (non-array content: {})",
                    content.to_string().chars().take(200).collect::<String>()
                );
            };
            if items.is_empty() {
                return "[web_search_tool_result] no results".to_owned();
            }
            let mut out = format!("Web search returned {} result(s):\n", items.len());
            for item in items {
                let title = item
                    .get("title")
                    .and_then(|v| v.as_str())
                    .unwrap_or("(no title)");
                let url = item
                    .get("url")
                    .and_then(|v| v.as_str())
                    .unwrap_or("(no url)");
                out.push_str(&format!("  • {title}\n    {url}\n"));
            }
            out
        }
        ServerToolResultKind::CodeExecution
        | ServerToolResultKind::WebFetch
        | ServerToolResultKind::Other(_) => format!(
            "[{wire}]\n{content}",
            wire = tool_kind.wire_type(),
            content = serde_json::to_string_pretty(content).unwrap_or_else(|_| content.to_string())
        ),
    }
}

impl ToolOutput {
    /// Mirror of the wire-format truncation cap in `stream.rs`
    /// (`MAX_TOOL_RESULT_CHARS`). The API only ever sees a tool result
    /// shortened to this many bytes, so the local token estimate must cap
    /// here too — otherwise a 500KB Read output makes `compact_level` think
    /// the context is full when the API only received 30KB of it. That
    /// mismatch is what made compaction trigger on every tool batch with a
    /// large file in it.
    /// Matches Claude Code v2.1.131's per-tool default cap (`yIK = 5e4` in
    /// the deob bundle). Was 30KB; 50KB lets a Read on a typical source
    /// file land entirely in the head slice without triggering the
    /// truncation marker, while still keeping the per-result wire size
    /// bounded so a single tool call can't blow a 1M-token request.
    pub const APPROX_LEN_CAP: usize = 50_000;

    pub fn approx_text_len(&self) -> usize {
        let raw = match self {
            Self::Text(s) => s.len(),
            Self::LargeText(lt) => lt.byte_count,
            Self::Diff(d) => d
                .hunks
                .iter()
                .flat_map(|h| &h.lines)
                .map(|l| l.content.len())
                .sum(),
            Self::FileContent { content, .. } => content.len(),
            Self::Command { stdout, stderr, .. } => stdout.len() + stderr.len(),
            Self::FileList(files) => files.iter().map(|f| f.len()).sum(),
            Self::ServerToolResult { content, .. } => {
                serde_json::to_string(content).map(|s| s.len()).unwrap_or(0)
            }
            Self::Empty => 0,
        };
        raw.min(Self::APPROX_LEN_CAP)
    }

    pub fn text_only(&self) -> String {
        match self {
            Self::Text(s) => s.clone(),
            Self::LargeText(lt) => format!("[large: {}]", lt.size_label()),
            Self::Diff(d) => format!("{} (+{}/-{})", d.file_path, d.additions, d.deletions),
            Self::FileContent { path, .. } => format!("[file: {}]", path),
            Self::Command {
                stdout,
                stderr,
                exit_code,
            } => {
                let code = exit_code
                    .map(|c| c.to_string())
                    .unwrap_or_else(|| "?".into());
                format!(
                    "exit={} stdout={}B stderr={}B",
                    code,
                    stdout.len(),
                    stderr.len()
                )
            }
            Self::FileList(files) => format!("{} files", files.len()),
            Self::ServerToolResult { tool_kind, content } => {
                format_server_tool_result_text(tool_kind, content)
            }
            Self::Empty => String::new(),
        }
    }

    pub fn to_display_string(&self) -> String {
        match self {
            Self::Text(s) => s.clone(),
            Self::LargeText(lt) => lt.content.clone(),
            Self::Diff(d) => format!("{} (+{}/-{})", d.file_path, d.additions, d.deletions),
            Self::FileContent { path, content, .. } => {
                format!("{} ({} chars)", path, content.len())
            }
            Self::Command {
                stdout, exit_code, ..
            } => {
                let code = exit_code
                    .map(|c| c.to_string())
                    .unwrap_or_else(|| "?".into());
                let preview = if stdout.len() > 100 {
                    format!("{}...", &stdout[..stdout.floor_char_boundary(100)])
                } else {
                    stdout.clone()
                };
                format!("exit={}: {}", code, preview)
            }
            Self::FileList(files) => format!("{} files", files.len()),
            Self::ServerToolResult { tool_kind, content } => {
                format_server_tool_result_text(tool_kind, content)
            }
            Self::Empty => "[empty]".into(),
        }
    }

    pub fn to_api_text(&self) -> String {
        match self {
            Self::LargeText(lt) => lt.content.clone(),
            other => other.to_display_string(),
        }
    }
}

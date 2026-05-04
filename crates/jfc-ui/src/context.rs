use std::path::{Path, PathBuf};

/// Walk from `start` upward to filesystem root looking for CLAUDE.md.
/// Returns (path, content) of the first one found, or None.
pub fn find_claude_md(start: &Path) -> Option<(PathBuf, String)> {
    let mut dir = start.to_path_buf();
    loop {
        let candidate = dir.join("CLAUDE.md");
        if let Ok(content) = std::fs::read_to_string(&candidate) {
            if !content.trim().is_empty() {
                return Some((candidate, content));
            }
        }
        match dir.parent() {
            Some(parent) if parent != dir => dir = parent.to_path_buf(),
            _ => break,
        }
    }
    None
}

pub fn build_system_prompt(claude_md: Option<&str>) -> Option<String> {
    let base = claude_md?.trim();
    if base.is_empty() {
        return None;
    }
    Some(base.to_owned())
}

//! Auto-generate a short, human-readable title from the first meaningful
//! submitted prompt.
//!
//! The request starts with the first real prompt rather than waiting for an
//! assistant EndTurn, so a refused or interrupted stream still gets a stable
//! identity. The default
//! `display_title` fallback truncates the user's first line, which is
//! usually fine but loses meaning for long prompts ("can you help me
//! with the…" → "can you help me with the…"). A Haiku call replaces
//! that with something like "Refactor auth middleware".
//!
//! Persistence happens in the engine event handler, where `/rename` can win
//! atomically over an in-flight AI result.

use jfc_provider::{
    ModelId, Provider, ProviderContent, ProviderMessage, ProviderRole, StreamOptions,
};
use std::sync::Arc;

const MAX_TITLE_CHARS: usize = 60;

/// Build the prompt asking the model for a 3–7 word title from the first prompt.
fn build_request(first_user: &str) -> Vec<ProviderMessage> {
    let user_truncated: String = first_user.chars().take(800).collect();
    let body = format!(
        "Create a concise 3–7 word session title for this request. Preserve \
         distinctive project or product names. No punctuation or emoji. Return \
         exactly one JSON object with a string field named title.\n\n\
         Request: {user_truncated}"
    );
    vec![ProviderMessage {
        role: ProviderRole::User,
        content: vec![ProviderContent::Text(body)],
    }]
}

/// Generate a title. Best-effort; callers own persistence and live-state updates.
pub async fn generate_title(
    provider: Arc<dyn Provider>,
    model: ModelId,
    first_user: String,
) -> Option<String> {
    let messages = build_request(&first_user);
    let opts = StreamOptions::new(model.as_str())
        .system("You generate concise, descriptive session titles.")
        .max_tokens(60);

    let resp = match provider.complete(messages, &opts).await {
        Ok(r) => r,
        Err(e) => {
            tracing::debug!(
                target: "jfc::session_naming",
                error = %e,
                "title generation failed (provider.complete)"
            );
            return None;
        }
    };

    let title = title_from_response(&resp.content);
    if title.is_empty() {
        tracing::debug!(target: "jfc::session_naming", "model returned empty title");
        return None;
    }

    Some(title)
}

fn title_from_response(raw: &str) -> String {
    let candidate = serde_json::from_str::<serde_json::Value>(raw)
        .ok()
        .and_then(|value| {
            value
                .get("title")
                .and_then(serde_json::Value::as_str)
                .map(str::to_owned)
        })
        .unwrap_or_else(|| raw.to_owned());
    sanitize(&candidate)
}

/// Strip quotes, trailing punctuation, and excess whitespace; clamp
/// length to MAX_TITLE_CHARS.
fn sanitize(raw: &str) -> String {
    let mut s = raw.trim().to_owned();
    // Strip surrounding quotes if present.
    for q in ['"', '\'', '`', '“', '”'] {
        s = s.trim_matches(q).trim().to_owned();
    }
    // Drop leading "Title:" prefix if the model returned the prompt label.
    for prefix in ["Title:", "title:", "TITLE:"] {
        if let Some(rest) = s.strip_prefix(prefix) {
            s = rest.trim().to_owned();
        }
    }
    // Single line only.
    if let Some(line) = s.lines().next() {
        s = line.to_owned();
    }
    // Trailing punctuation.
    s = s
        .trim_end_matches(['.', ',', ';', ':', '!', '?'])
        .to_owned();
    // Length cap.
    if s.chars().count() > MAX_TITLE_CHARS {
        s = s.chars().take(MAX_TITLE_CHARS).collect();
    }
    s.trim().to_owned()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sanitize_strips_quotes_normal() {
        assert_eq!(sanitize("\"Refactor auth\""), "Refactor auth");
        assert_eq!(sanitize("'Add caching'"), "Add caching");
        assert_eq!(sanitize("`Fix bug`"), "Fix bug");
    }

    #[test]
    fn sanitize_strips_title_prefix_normal() {
        assert_eq!(sanitize("Title: Refactor auth"), "Refactor auth");
        assert_eq!(sanitize("title: add tests"), "add tests");
    }

    #[test]
    fn sanitize_strips_trailing_punctuation_normal() {
        assert_eq!(sanitize("Refactor auth."), "Refactor auth");
        assert_eq!(sanitize("Add tests!"), "Add tests");
    }

    #[test]
    fn sanitize_clamps_long_titles_robust() {
        let long = "A".repeat(100);
        let out = sanitize(&long);
        assert!(out.chars().count() <= MAX_TITLE_CHARS);
    }

    #[test]
    fn sanitize_handles_multiline_robust() {
        assert_eq!(sanitize("First line\nSecond line"), "First line");
    }

    #[test]
    fn sanitize_empty_is_empty_robust() {
        assert_eq!(sanitize(""), "");
        assert_eq!(sanitize("   "), "");
    }

    #[test]
    fn build_request_truncates_long_inputs_robust() {
        let long_user = "u".repeat(2000);
        let req = build_request(&long_user);
        assert_eq!(req.len(), 1);
        // The combined prompt should not contain the full 2000-char inputs.
        let body_len: usize = req[0]
            .content
            .iter()
            .map(|c| match c {
                ProviderContent::Text(t) => t.len(),
                _ => 0,
            })
            .sum();
        // Instructions plus a truncated 800-character user prompt.
        assert!(
            body_len < 1600,
            "body length {body_len} exceeds expected cap"
        );
    }

    #[test]
    fn structured_title_response_is_unwrapped_normal() {
        assert_eq!(
            title_from_response(r#"{"title":"Diagnose Frozen Streams"}"#),
            "Diagnose Frozen Streams"
        );
    }
}

//! AutoSearchHints — formatting recall hints for auto-injection into context.

use serde::{Deserialize, Serialize};

// ─── Types ──────────────────────────────────────────────────────────────────

/// Source of a recall hint.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum HintSource {
    Memory {
        category: String,
    },
    Session {
        date: String,
        file_ref: Option<String>,
    },
    GitCommit {
        sha: String,
    },
}

/// A recall hint with score.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecallHint {
    pub source: HintSource,
    pub content: String,
    pub score: f32,
}

// ─── Functions ──────────────────────────────────────────────────────────────

/// Format hints as `<!-- recall: ... -->` HTML comments.
pub fn format_hint(hints: &[RecallHint]) -> String {
    if hints.is_empty() {
        return String::new();
    }

    let mut out = String::new();
    for hint in hints {
        let source_label = match &hint.source {
            HintSource::Memory { category } => format!("memory:{}", category),
            HintSource::Session { date, file_ref } => {
                if let Some(f) = file_ref {
                    format!("session:{}:{}", date, f)
                } else {
                    format!("session:{}", date)
                }
            }
            HintSource::GitCommit { sha } => format!("git:{}", sha),
        };
        out.push_str(&format!(
            "<!-- recall: [{}] (score={:.2}) {} -->\n",
            source_label, hint.score, hint.content
        ));
    }
    out
}

/// Returns true if any hint score >= min_score.
pub fn should_append_hint(hints: &[RecallHint], min_score: f32) -> bool {
    hints.iter().any(|h| h.score >= min_score)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn format_hint_produces_comment_normal() {
        let hints = vec![RecallHint {
            source: HintSource::Memory {
                category: "ARCHITECTURE_DECISIONS".to_string(),
            },
            content: "Project uses serde for serialization".to_string(),
            score: 0.85,
        }];

        let formatted = format_hint(&hints);
        assert!(formatted.contains("<!-- recall:"));
        assert!(formatted.contains("memory:ARCHITECTURE_DECISIONS"));
        assert!(formatted.contains("score=0.85"));
        assert!(formatted.contains("Project uses serde"));
        assert!(formatted.contains("-->"));
    }

    #[test]
    fn threshold_filters_low_scores_normal() {
        let hints = vec![
            RecallHint {
                source: HintSource::GitCommit {
                    sha: "abc123".to_string(),
                },
                content: "Some commit".to_string(),
                score: 0.3,
            },
            RecallHint {
                source: HintSource::Memory {
                    category: "NAMING".to_string(),
                },
                content: "Use snake_case".to_string(),
                score: 0.4,
            },
        ];

        assert!(!should_append_hint(&hints, 0.5));
        assert!(should_append_hint(&hints, 0.3));
    }

    #[test]
    fn empty_hints_returns_empty_robust() {
        let hints: Vec<RecallHint> = Vec::new();
        let formatted = format_hint(&hints);
        assert!(formatted.is_empty());
        assert!(!should_append_hint(&hints, 0.0));
    }
}

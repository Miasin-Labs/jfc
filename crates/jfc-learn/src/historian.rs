//! Historian — extracts factual knowledge from coding session transcripts.
//!
//! Uses an LLM provider trait to call the model with a structured extraction prompt,
//! then deduplicates facts against existing memory via normalized hashes.

use serde::{Deserialize, Serialize};

use crate::error::LearnError;
use crate::normalize_hash::normalize_and_hash;

// ─── Categories ─────────────────────────────────────────────────────────────

/// Known fact categories the historian extracts.
pub const CATEGORIES: &[&str] = &[
    "ARCHITECTURE_DECISIONS",
    "CONSTRAINTS",
    "CONFIG_DEFAULTS",
    "NAMING",
    "USER_PREFERENCES",
    "USER_DIRECTIVES",
    "ENVIRONMENT",
    "WORKFLOW_RULES",
    "KNOWN_ISSUES",
];

// ─── Types ──────────────────────────────────────────────────────────────────

/// A candidate fact extracted from a transcript.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CandidateFact {
    pub category: String,
    pub content: String,
    pub turn_ordinal: usize,
    pub confidence: f32,
}

/// Configuration for the Historian.
#[derive(Debug, Clone)]
pub struct HistorianConfig {
    /// Minimum confidence threshold for promotion (default 0.7).
    pub min_confidence: f32,
}

impl Default for HistorianConfig {
    fn default() -> Self {
        Self {
            min_confidence: 0.7,
        }
    }
}

/// Result of a historian extraction run.
#[derive(Debug, Clone)]
pub struct HistorianReport {
    pub facts_extracted: usize,
    pub facts_promoted: usize,
    pub facts_deduped: usize,
}

/// Trait for LLM provider — the historian calls this to get model output.
pub trait HistorianProvider {
    /// Send a system prompt + user message, expecting JSON tool-call output.
    fn extract_facts(&self, system_prompt: &str, user_message: &str) -> Result<String, LearnError>;
}

/// Trait for checking if a fact (by normalized hash) already exists in memory.
pub trait MemoryLookup {
    /// Returns true if a memory with this normalized_hash already exists.
    fn hash_exists(&self, hash: &str) -> bool;
}

/// The Historian agent.
pub struct Historian<P: HistorianProvider, M: MemoryLookup> {
    pub config: HistorianConfig,
    pub provider: P,
    pub memory: M,
}

/// System prompt for the historian extraction.
pub const HISTORIAN_SYSTEM_PROMPT: &str = r#"You are a memory extraction agent. Extract factual knowledge from this coding session transcript.

Categories: ARCHITECTURE_DECISIONS, CONSTRAINTS, CONFIG_DEFAULTS, NAMING, USER_PREFERENCES, USER_DIRECTIVES, ENVIRONMENT, WORKFLOW_RULES, KNOWN_ISSUES

Rules:
- One fact per category per turn maximum
- Present-tense operational language ("X uses Y", not "we switched X")
- Drop session-local context unless the commit hash is the point
- Each fact must be atomic (one rule/fact per entry)
- Confidence 0.0-1.0 based on how clearly stated the fact is

Output: call extract_facts tool with your findings."#;

/// Tool schema for forced output.
pub const EXTRACT_FACTS_SCHEMA: &str = r#"{"name":"extract_facts","parameters":{"type":"object","properties":{"facts":{"type":"array","items":{"type":"object","properties":{"category":{"type":"string"},"content":{"type":"string"},"turn_ordinal":{"type":"integer"},"confidence":{"type":"number"}},"required":["category","content","turn_ordinal","confidence"]}}}}}"#;

impl<P: HistorianProvider, M: MemoryLookup> Historian<P, M> {
    pub fn new(provider: P, memory: M, config: HistorianConfig) -> Self {
        Self {
            config,
            provider,
            memory,
        }
    }

    /// Build a user message from a transcript (vec of (role, content) tuples).
    pub fn build_transcript_message(transcript: &[(String, String)]) -> String {
        let mut msg = String::from("<transcript>\n");
        for (i, (role, content)) in transcript.iter().enumerate() {
            msg.push_str(&format!(
                "<turn ordinal=\"{}\" role=\"{}\">\n{}\n</turn>\n",
                i, role, content
            ));
        }
        msg.push_str("</transcript>");
        msg
    }

    /// Run the extraction pipeline.
    pub fn run(&self, transcript: &[(String, String)]) -> Result<HistorianReport, LearnError> {
        let user_message = Self::build_transcript_message(transcript);

        // Call provider
        let raw_response = self
            .provider
            .extract_facts(HISTORIAN_SYSTEM_PROMPT, &user_message)?;

        // Parse the response
        let facts = self.parse_response(&raw_response)?;

        let facts_extracted = facts.len();
        let mut facts_promoted = 0;
        let mut facts_deduped = 0;

        for fact in &facts {
            if fact.confidence < self.config.min_confidence {
                continue;
            }

            let hash = normalize_and_hash(&fact.content);
            if self.memory.hash_exists(&hash) {
                facts_deduped += 1;
            } else {
                facts_promoted += 1;
            }
        }

        Ok(HistorianReport {
            facts_extracted,
            facts_promoted,
            facts_deduped,
        })
    }

    /// Parse provider JSON response into CandidateFacts.
    fn parse_response(&self, raw: &str) -> Result<Vec<CandidateFact>, LearnError> {
        // Try to parse as a JSON object with a "facts" array
        #[derive(Deserialize)]
        struct ExtractFactsCall {
            facts: Vec<CandidateFact>,
        }

        // Try full object first
        if let Ok(call) = serde_json::from_str::<ExtractFactsCall>(raw) {
            return Ok(call.facts);
        }

        // Try just the array
        if let Ok(facts) = serde_json::from_str::<Vec<CandidateFact>>(raw) {
            return Ok(facts);
        }

        // Try extracting JSON from markdown code blocks
        if let Some(json_start) = raw.find('{') {
            if let Some(json_end) = raw.rfind('}') {
                let json_slice = &raw[json_start..=json_end];
                if let Ok(call) = serde_json::from_str::<ExtractFactsCall>(json_slice) {
                    return Ok(call.facts);
                }
            }
        }

        Err(LearnError::Parse {
            message: format!(
                "Could not parse historian response as facts JSON: {}",
                &raw[..raw.len().min(200)]
            ),
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashSet;

    struct MockProvider {
        response: String,
    }

    impl HistorianProvider for MockProvider {
        fn extract_facts(&self, _system: &str, _user: &str) -> Result<String, LearnError> {
            Ok(self.response.clone())
        }
    }

    struct MockMemory {
        existing_hashes: HashSet<String>,
    }

    impl MemoryLookup for MockMemory {
        fn hash_exists(&self, hash: &str) -> bool {
            self.existing_hashes.contains(hash)
        }
    }

    #[test]
    fn historian_extracts_facts_normal() {
        let response = r#"{"facts":[{"category":"ARCHITECTURE_DECISIONS","content":"The project uses serde for serialization","turn_ordinal":0,"confidence":0.9}]}"#;
        let provider = MockProvider {
            response: response.to_string(),
        };
        let memory = MockMemory {
            existing_hashes: HashSet::new(),
        };
        let historian = Historian::new(provider, memory, HistorianConfig::default());

        let transcript = vec![(
            "user".to_string(),
            "We use serde for serialization".to_string(),
        )];
        let report = historian.run(&transcript).unwrap();
        assert_eq!(report.facts_extracted, 1);
        assert_eq!(report.facts_promoted, 1);
        assert_eq!(report.facts_deduped, 0);
    }

    #[test]
    fn historian_filters_low_confidence_normal() {
        let response = r#"{"facts":[{"category":"NAMING","content":"Variables use snake_case","turn_ordinal":0,"confidence":0.3}]}"#;
        let provider = MockProvider {
            response: response.to_string(),
        };
        let memory = MockMemory {
            existing_hashes: HashSet::new(),
        };
        let historian = Historian::new(provider, memory, HistorianConfig::default());

        let transcript = vec![("user".to_string(), "Something about naming".to_string())];
        let report = historian.run(&transcript).unwrap();
        assert_eq!(report.facts_extracted, 1);
        assert_eq!(report.facts_promoted, 0);
        assert_eq!(report.facts_deduped, 0);
    }

    #[test]
    fn historian_dedup_by_hash_normal() {
        let content = "The project uses serde for serialization";
        let hash = normalize_and_hash(content);

        let response = r#"{"facts":[{"category":"ARCHITECTURE_DECISIONS","content":"The project uses serde for serialization","turn_ordinal":0,"confidence":0.95}]}"#;
        let provider = MockProvider {
            response: response.to_string(),
        };
        let mut existing = HashSet::new();
        existing.insert(hash);
        let memory = MockMemory {
            existing_hashes: existing,
        };
        let historian = Historian::new(provider, memory, HistorianConfig::default());

        let transcript = vec![(
            "user".to_string(),
            "We use serde for serialization".to_string(),
        )];
        let report = historian.run(&transcript).unwrap();
        assert_eq!(report.facts_extracted, 1);
        assert_eq!(report.facts_promoted, 0);
        assert_eq!(report.facts_deduped, 1);
    }

    #[test]
    fn historian_malformed_response_robust() {
        let response = "This is not JSON at all, just garbage text";
        let provider = MockProvider {
            response: response.to_string(),
        };
        let memory = MockMemory {
            existing_hashes: HashSet::new(),
        };
        let historian = Historian::new(provider, memory, HistorianConfig::default());

        let transcript = vec![("user".to_string(), "Hello".to_string())];
        let result = historian.run(&transcript);
        assert!(result.is_err());
        match result.unwrap_err() {
            LearnError::Parse { message } => {
                assert!(message.contains("Could not parse"));
            }
            other => panic!("Expected Parse error, got: {:?}", other),
        }
    }
}

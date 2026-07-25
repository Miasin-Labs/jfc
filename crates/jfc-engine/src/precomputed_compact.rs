//! Durable speculative compaction results.

use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};

use crate::context::ToolContext;
use crate::types::ChatMessage;

const ARTIFACT_KIND: &str = "precomputed_compaction";
const ARTIFACT_KEY: &str = "latest";
const MAX_AGE_MS: u64 = 7 * 24 * 60 * 60 * 1_000;

#[derive(Debug, Clone)]
pub struct PrecomputedCompact {
    pub source_fingerprint: String,
    pub messages: Vec<ChatMessage>,
    pub tool_ctx: ToolContext,
    pub pre_tokens: usize,
    pub post_tokens: usize,
    pub created_at_ms: u64,
}

#[derive(Serialize, Deserialize)]
struct StoredPrecomputedCompact {
    source_fingerprint: String,
    messages: Vec<crate::session::SerializedMessage>,
    tool_ctx: ToolContext,
    pre_tokens: usize,
    post_tokens: usize,
    created_at_ms: u64,
}

pub fn source_fingerprint(
    messages: &[ChatMessage],
    model: &str,
    window: usize,
    max_output_tokens: Option<usize>,
) -> String {
    let mut hash = Sha256::new();
    hash.update(model.as_bytes());
    hash.update([0]);
    hash.update(window.to_le_bytes());
    hash.update(max_output_tokens.unwrap_or_default().to_le_bytes());
    let serialized = messages
        .iter()
        .map(crate::session::serialize_message)
        .collect::<Vec<_>>();
    if let Ok(json) = serde_json::to_vec(&serialized) {
        hash.update(json);
    }
    let digest = hash.finalize();
    let mut output = String::with_capacity(digest.len() * 2);
    for byte in digest {
        use std::fmt::Write as _;
        let _ = write!(output, "{byte:02x}");
    }
    output
}

pub fn save(session_id: &str, compact: &PrecomputedCompact) {
    let stored = StoredPrecomputedCompact {
        source_fingerprint: compact.source_fingerprint.clone(),
        messages: compact
            .messages
            .iter()
            .map(crate::session::serialize_message)
            .collect(),
        tool_ctx: compact.tool_ctx.clone(),
        pre_tokens: compact.pre_tokens,
        post_tokens: compact.post_tokens,
        created_at_ms: compact.created_at_ms,
    };
    let Ok(json) = serde_json::to_string(&stored) else {
        return;
    };
    let result = jfc_knowledge::block_on_knowledge(async {
        let store = jfc_knowledge::KnowledgeStore::open_default().await?;
        store
            .upsert_session_artifact(session_id, ARTIFACT_KIND, ARTIFACT_KEY, &json)
            .await
    });
    if let Err(error) = result {
        tracing::warn!(
            target: "jfc::compact",
            session_id,
            error = %error,
            "failed to persist precomputed compaction"
        );
    }
}

pub fn load_matching(session_id: &str, fingerprint: &str) -> Option<PrecomputedCompact> {
    let row = jfc_knowledge::block_on_knowledge(async {
        let store = jfc_knowledge::KnowledgeStore::open_default().await.ok()?;
        store
            .get_session_artifact(session_id, ARTIFACT_KIND, ARTIFACT_KEY)
            .await
            .ok()
            .flatten()
    })?;
    let compact: StoredPrecomputedCompact = serde_json::from_str(&row.value_json).ok()?;
    if compact.source_fingerprint != fingerprint
        || now_ms().saturating_sub(compact.created_at_ms) > MAX_AGE_MS
    {
        return None;
    }
    Some(PrecomputedCompact {
        source_fingerprint: compact.source_fingerprint,
        messages: compact
            .messages
            .into_iter()
            .map(crate::session::deserialize_message)
            .collect(),
        tool_ctx: compact.tool_ctx,
        pre_tokens: compact.pre_tokens,
        post_tokens: compact.post_tokens,
        created_at_ms: compact.created_at_ms,
    })
}

pub fn delete(session_id: &str) {
    let _ = jfc_knowledge::block_on_knowledge(async {
        let store = jfc_knowledge::KnowledgeStore::open_default().await?;
        store
            .delete_session_artifact(session_id, ARTIFACT_KIND, ARTIFACT_KEY)
            .await
    });
}

pub fn now_ms() -> u64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|duration| u64::try_from(duration.as_millis()).unwrap_or(u64::MAX))
        .unwrap_or_default()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn fingerprint_changes_with_transcript_or_model_regression() {
        let first = vec![ChatMessage::user("one".into())];
        let second = vec![ChatMessage::user("two".into())];
        let a = source_fingerprint(&first, "model-a", 200_000, Some(32_000));
        assert_eq!(a, source_fingerprint(&first, "model-a", 200_000, Some(32_000)));
        assert_ne!(a, source_fingerprint(&second, "model-a", 200_000, Some(32_000)));
        assert_ne!(a, source_fingerprint(&first, "model-b", 200_000, Some(32_000)));
    }
}

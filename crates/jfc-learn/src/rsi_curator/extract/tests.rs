use super::*;

#[test]
fn transcript_trace_extracts_reasoning_tools_correction_and_verification_normal() {
    let messages = vec![
        jfc_knowledge::SessionMessage {
            seq: 0,
            role: "assistant".to_owned(),
            content: "Reasoning text Bash cargo test".to_owned(),
            meta: Some(
                serde_json::json!({
                    "role": "assistant",
                    "model_name": "claude-test",
                    "usage": { "thinking_tokens": 42 },
                    "parts": [
                        { "type": "reasoning", "content": "raw thought" },
                        {
                            "type": "tool",
                            "kind": "Bash",
                            "status": "complete",
                            "input": { "type": "bash", "command": "cargo test -p jfc-learn" }
                        }
                    ]
                })
                .to_string(),
            ),
        },
        jfc_knowledge::SessionMessage {
            seq: 1,
            role: "user".to_owned(),
            content: "actually run clippy too".to_owned(),
            meta: None,
        },
    ];

    let trace = trace_from_messages("s1", &messages);

    assert_eq!(trace.model.as_deref(), Some("claude-test"));
    assert_eq!(trace.thinking_blocks.len(), 1);
    assert_eq!(trace.thinking_tokens, 42);
    assert_eq!(trace.tool_steps.len(), 1);
    assert_eq!(trace.verifications.len(), 1);
    assert_eq!(trace.outcome, Some(RsiOutcome::UserCorrected));
    assert!(trace.user_correction.is_some());
}

#[tokio::test]
async fn build_recent_rsi_job_respects_future_loop_due_state_normal() {
    let store = jfc_knowledge::KnowledgeStore::open_in_memory()
        .await
        .unwrap();
    let cwd = "/tmp/jfc-rsi-loop";
    store
        .replace_transcript(
            &jfc_knowledge::SessionRow {
                id: "s1".to_owned(),
                cwd: Some(cwd.to_owned()),
                model: Some("claude-test".to_owned()),
                created_at: Some("2026-01-01T00:00:00Z".to_owned()),
                updated_at: Some("2026-01-01T00:01:00Z".to_owned()),
                first_prompt: Some("fix".to_owned()),
                title: Some("RSI fixture".to_owned()),
                message_count: 1,
            },
            &[jfc_knowledge::SessionMessage {
                seq: 0,
                role: "assistant".to_owned(),
                content: "ran cargo test".to_owned(),
                meta: Some(
                    serde_json::json!({
                        "parts": [{
                            "type": "tool",
                            "kind": "Bash",
                            "status": "complete",
                            "input": { "command": "cargo test -p jfc-learn" }
                        }]
                    })
                    .to_string(),
                ),
            }],
        )
        .await
        .unwrap();
    let project_key = jfc_knowledge::project_key(std::path::Path::new(cwd));
    store
        .upsert_definition(&jfc_knowledge::NewDefinition {
            kind: crate::rsi_curator::RSI_LOOP_STATE_KIND.to_owned(),
            scope: jfc_knowledge::DefinitionScope::Project,
            project_key: Some(project_key),
            namespace: None,
            name: crate::rsi_curator::RSI_LOOP_STATE_NAME.to_owned(),
            title: None,
            description: None,
            body: "future".to_owned(),
            metadata_json: serde_json::json!({
                "rsi": {
                    "experiment_loop_state": {
                        "run_count": 1,
                        "last_run_at_ms": 1,
                        "next_due_at_ms": u64::MAX,
                        "cadence_seconds": 900,
                        "phase": "branch",
                        "preflight_status": "ready",
                        "candidate_actions": 1,
                        "traces_scored": 1,
                        "candidates_seen": 1,
                        "total_estimated_tokens": 1,
                        "latest_score_milli": 1,
                        "best_score_milli": 1
                    }
                }
            })
            .to_string(),
            source_path: None,
            source_hash: None,
            status: jfc_knowledge::DefinitionStatus::Active,
            created_by: "test".to_owned(),
        })
        .await
        .unwrap();

    let job = build_recent_rsi_job(
        &store,
        Some(cwd),
        50,
        RsiCuratorConfig::default(),
        RsiPromotionPolicy::default(),
    )
    .await
    .unwrap();

    assert!(job.is_none());
}

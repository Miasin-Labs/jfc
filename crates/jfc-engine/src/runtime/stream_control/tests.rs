use super::*;
use jfc_provider::{EventStream, ModelInfo, StreamOptions};
use std::sync::Mutex;

struct CapturingProvider {
    calls: Mutex<Vec<Vec<ProviderMessage>>>,
    sessions: Mutex<Vec<Option<String>>>,
}

#[async_trait::async_trait]
impl Provider for CapturingProvider {
    fn name(&self) -> &str {
        "test"
    }

    fn available_models(&self) -> Vec<ModelInfo> {
        vec![
            ModelInfo::new("test-model", "test-model", "test")
                .with_context_window_tokens(Some(80_000))
                .with_max_output_tokens(Some(8_000)),
        ]
    }

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        self.calls
            .lock()
            .unwrap_or_else(|poisoned| poisoned.into_inner())
            .push(messages);
        self.sessions
            .lock()
            .unwrap_or_else(|poisoned| poisoned.into_inner())
            .push(options.session_id.clone());
        Ok(Box::pin(futures::stream::empty()))
    }
}

impl jfc_provider::seal::Sealed for CapturingProvider {}

fn huge_message(index: usize) -> crate::types::ChatMessage {
    crate::types::ChatMessage::user(format!("message-{index} {}", "x".repeat(20_000)))
}

#[tokio::test]
async fn pre_stream_boundary_updates_assistant_index_regression() {
    let provider = Arc::new(CapturingProvider {
        calls: Mutex::new(Vec::new()),
        sessions: Mutex::new(Vec::new()),
    });
    let mut state = EngineState::new(provider, "test-model");
    state.messages = (0..30).map(huge_message).collect();
    let old_assistant_idx = state.messages.len();
    state
        .messages
        .push(crate::types::ChatMessage::assistant(String::new()));

    let new_assistant_idx = maybe_materialize_transcript_boundary(
        &mut state,
        old_assistant_idx,
        &StreamRequestOverrides {
            context_window_tokens: Some(80_000),
            ..StreamRequestOverrides::default()
        },
    );

    assert!(new_assistant_idx < old_assistant_idx);
    assert!(state.messages[0].is_compact_boundary());
    assert_eq!(state.messages[new_assistant_idx].role, Role::Assistant);
    assert!(state.pending_context_hint_tokens_saved.is_some());
}

#[tokio::test]
async fn restart_stream_builds_provider_request_from_materialized_boundary_regression() {
    let provider = Arc::new(CapturingProvider {
        calls: Mutex::new(Vec::new()),
        sessions: Mutex::new(Vec::new()),
    });
    let mut state = EngineState::new(provider.clone(), "test-model");
    state.task_store = jfc_session::TaskStore::in_memory();
    state.messages = (0..30).map(huge_message).collect();
    let assistant_idx = state.messages.len();
    state
        .messages
        .push(crate::types::ChatMessage::assistant(String::new()));
    let (tx, mut rx) = tokio::sync::mpsc::channel(64);

    restart_stream_in_place_with_overrides(
        &mut state,
        &tx,
        assistant_idx,
        None,
        StreamRequestOverrides {
            context_window_tokens: Some(80_000),
            ..StreamRequestOverrides::default()
        },
    );

    let _ = tokio::time::timeout(std::time::Duration::from_secs(2), async {
        while rx.recv().await.is_some() {
            if !provider
                .calls
                .lock()
                .unwrap_or_else(|poisoned| poisoned.into_inner())
                .is_empty()
            {
                break;
            }
        }
    })
    .await;
    let calls = provider
        .calls
        .lock()
        .unwrap_or_else(|poisoned| poisoned.into_inner());
    assert!(!calls.is_empty(), "provider should receive one request");
    let sent = &calls[0];
    let first_text = sent
        .first()
        .and_then(|message| message.content.first())
        .and_then(|content| match content {
            jfc_provider::ProviderContent::Text(text) => Some(text.as_str()),
            _ => None,
        })
        .unwrap_or("");

    assert!(first_text.contains("automatic context boundary"));
    assert!(sent.len() < 30);
}

#[tokio::test]
async fn stream_spawn_inherits_current_session_for_provider_correlation_regression() {
    let provider = Arc::new(CapturingProvider {
        calls: Mutex::new(Vec::new()),
        sessions: Mutex::new(Vec::new()),
    });
    let mut state = EngineState::new(provider.clone(), "test-model");
    state.current_session_id = Some(crate::ids::SessionId::new("ses_correlation"));
    let messages = vec![ProviderMessage {
        role: jfc_provider::ProviderRole::User,
        content: vec![jfc_provider::ProviderContent::Text("hello".to_owned())],
    }];
    let interrupt = state.interrupt_flag.clone();
    let cancel = tokio_util::sync::CancellationToken::new();
    let (tx, mut rx) = tokio::sync::mpsc::channel(64);

    spawn_stream_response_scoped(
        &mut state,
        &tx,
        provider.clone(),
        messages,
        jfc_provider::ModelId::new("test-model"),
        interrupt,
        cancel,
        None,
        StreamRequestOverrides::default(),
    );

    let _ = tokio::time::timeout(std::time::Duration::from_secs(2), async {
        while rx.recv().await.is_some() {
            if provider
                .sessions
                .lock()
                .unwrap_or_else(|poisoned| poisoned.into_inner())
                .iter()
                .any(|session| session.as_deref() == Some("ses_correlation"))
            {
                break;
            }
        }
    })
    .await;

    assert!(
        provider
            .sessions
            .lock()
            .unwrap_or_else(|poisoned| poisoned.into_inner())
            .iter()
            .any(|session| session.as_deref() == Some("ses_correlation")),
        "the main provider request should inherit the live session id"
    );
}

#[test]
fn terminal_boundary_materializes_before_plain_turn_save_regression() {
    let provider = Arc::new(CapturingProvider {
        calls: Mutex::new(Vec::new()),
        sessions: Mutex::new(Vec::new()),
    });
    let mut state = EngineState::new(provider, "test-model");
    state.task_store = jfc_session::TaskStore::in_memory();
    state.max_context_tokens = 80_000;
    state.max_output_tokens = Some(8_000);
    state.messages = (0..30).map(huge_message).collect();
    let pre_tokens = crate::context_accounting::estimate_transcript_tokens(&state.messages);

    let changed = materialize_terminal_transcript_boundary(&mut state);

    assert!(changed);
    assert!(state.messages[0].is_compact_boundary());
    assert!(state.messages.len() < 30);
    assert!(state.tool_ctx.approx_tokens < pre_tokens);
    assert!(state.pending_context_hint_tokens_saved.is_some());
}

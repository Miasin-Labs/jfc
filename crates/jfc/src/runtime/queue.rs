use crate::{
    app::App,
    input,
    runtime::{EngineEvent, EventSender, StreamEvent, StreamRequestOverrides},
    stream,
    types::{ChatMessage, MessagePart, Role},
};
use jfc_core::QueuedPrompt;

pub(crate) async fn drain_queued_prompts(app: &mut App, tx: &EventSender) {
    let drained: Vec<QueuedPrompt> = app.engine.queued_prompts.drain_all();
    if drained.is_empty() {
        return;
    }

    let total = drained.len();
    let meta_count = drained.iter().filter(|queued| queued.is_meta).count();
    tracing::info!(
        target: "jfc::ui::queue",
        total,
        meta_count,
        non_meta_count = total - meta_count,
        "drain_queued_prompts: batched drain"
    );

    let mut non_meta_texts: Vec<String> = Vec::with_capacity(total - meta_count);
    let mut first_non_meta_text: Option<String> = None;
    for queued in drained {
        let QueuedPrompt {
            text,
            is_meta,
            attachments,
            ..
        } = queued;
        let glyph = if is_meta { "⚙" } else { "⏳" };
        let placeholder = format!("{glyph} {text}");
        for msg in app.engine.messages.iter_mut() {
            if msg.role == Role::User {
                let mut replaced = false;
                for part in msg.parts.iter_mut() {
                    if let MessagePart::Text(part_text) = part
                        && *part_text == placeholder
                    {
                        *part_text = text.clone();
                        replaced = true;
                        break;
                    }
                }
                if replaced {
                    if msg.queued {
                        msg.queued = false;
                    }
                    if !attachments.is_empty() {
                        tracing::info!(
                            target: "jfc::ui::queue",
                            count = attachments.len(),
                            "drain_queued_prompts: attaching images to promoted message"
                        );
                        msg.attachments = attachments;
                    }
                    break;
                }
            }
        }

        if is_meta {
            input::run_slash_command(app, &text).await;
        } else {
            if first_non_meta_text.is_none() {
                first_non_meta_text = Some(text.clone());
            }
            non_meta_texts.push(text);
        }
    }

    // Meta (slash) commands run above may themselves enqueue more prompts.
    // Only recurse to drain those when THIS batch produced no stream of its
    // own (i.e. every entry was meta). When we *do* have non-meta text to
    // stream, we stage exactly one combined stream below and intentionally
    // leave any newly-enqueued prompts in the queue — they drain after this
    // stream finishes (stream_done re-drains on EndTurn). Recursing here while
    // also staging our own stream below would start a *second* concurrent
    // stream into the same conversation buffer, clobbering
    // `streaming_assistant_idx` so the live stream's chunks can't attach.
    if non_meta_texts.is_empty() {
        if !app.engine.queued_prompts.is_empty() {
            Box::pin(drain_queued_prompts(app, tx)).await;
        }
        return;
    }

    let assistant_idx = app.engine.messages.len();
    #[cfg(debug_assertions)]
    if let Err(error) = crate::types::validate_turn_invariants_inner(
        &app.engine.messages,
        /* allow_streaming_tail = */ true,
    ) {
        tracing::warn!(
            target: "jfc::ui::queue::invariants",
            error = %error,
            assistant_idx,
            "drain_queued_prompts: turn-invariant violation before staging assistant slot"
        );
    }
    app.engine.tool_ctx.total_user_turns += 1;

    #[cfg(feature = "intent-gate")]
    if let Some(intent_text) = first_non_meta_text.as_deref() {
        let intent_for_inject = crate::intent::classify(intent_text).intent;
        if crate::intent::is_graph_intent(intent_for_inject) {
            let cwd = std::path::PathBuf::from(&app.engine.cwd);
            let injected = crate::intent::auto_inject_graph_context(
                &mut app.engine.messages,
                intent_for_inject,
                intent_text,
                &cwd,
            );
            if injected {
                tracing::info!(
                    target: "jfc::intent::auto_ctx",
                    intent = ?intent_for_inject,
                    "auto graph-context injected (batched queued-prompt drain)"
                );
            }
        }
    }
    #[cfg(not(feature = "intent-gate"))]
    let _ = first_non_meta_text;

    app.engine.messages.push(ChatMessage::assistant(String::new()));
    app.engine.streaming_text = String::new();
    app.engine.streaming_reasoning = String::new();
    app.engine.streaming_response_bytes = 0;
    app.engine.turn_output_tokens = 0;
    app.engine.refusal_fallback_attempted = false;
    app.engine.network_recovery_status = None;
    app.engine.network_recovery_attempts = 0;
    app.engine.stream_lifecycle = None;
    app.engine.streaming_assistant_idx = Some(assistant_idx);
    app.engine.is_streaming = true;
    let now = std::time::Instant::now();
    app.engine.streaming_started_at = Some(now);
    app.engine.last_stream_event_at = Some(now);
    app.engine.streaming_last_token_at = Some(now);
    app.engine.turn_started_at = Some(now);
    app.engine.turn_start_cost = crate::cost::total_cost(&app.engine.usage_by_model);
    app.engine.pending_classifications = 0;
    app.engine.agentic_turn_count = 0;
    // Reset cancel token + interrupt flag for the drained turn. Same
    // rationale as handle_submit — a stale cancel from the previous
    // turn would otherwise fire immediately on this freshly-drained
    // submission and emit "Interrupted by user".
    app.engine.cancel_token = tokio_util::sync::CancellationToken::new();
    app.engine.interrupt_flag
        .store(false, std::sync::atomic::Ordering::SeqCst);
    app.engine.last_usage_output = 0;
    app.engine.usage_apply_baseline = (0, 0, 0, 0);
    app.scroll_to_bottom();

    let provider = app.engine.provider.clone();
    let messages = stream::build_provider_messages(&app.engine.messages[..assistant_idx]);
    let route_text = non_meta_texts.first().cloned().unwrap_or_default();
    let model = if let Some(ref router) = app.engine.slate {
        router.route(&route_text, app.engine.model.clone())
    } else {
        app.engine.model.clone()
    };
    let tx_spawn = tx.clone();
    let interrupt = app.engine.interrupt_flag.clone();
    app.engine.cancel_token = tokio_util::sync::CancellationToken::new();
    let cancel = app.engine.cancel_token.clone();
    let tx_guard = tx.clone();
    // Refresh CLAUDE.md frontmatter disallowed tools before each turn.
    if let Ok(cwd_path) = std::env::current_dir() {
        let hierarchy = crate::context::ClaudeMdHierarchy::load(&cwd_path);
        app.engine.claudemd_disallowed_tools = hierarchy.collect_disallowed_tools();
    }
    let overrides = StreamRequestOverrides {
        background_reminders: app.engine.take_background_reminders(),
        disallowed_tools: app.engine.effective_disallowed_tools(),
        allowed_tools: app.engine.allowed_tools.clone(),
        custom_betas: app.engine.custom_betas.clone(),
        fine_grained_tool_streaming: app.engine.fine_grained_tool_streaming,
        strict_tool_schemas: app.engine.strict_tool_schemas,
        task_budget: app.engine.cli_task_budget,
        max_thinking_tokens: app.engine.cli_max_thinking_tokens,
        thinking_display: app.engine.cli_thinking_display.clone(),
        brief_mode: app.engine.brief_mode,
        context_hint_tokens_saved: app.engine.take_context_hint_tokens_saved(),
        ..Default::default()
    };
    // Park the *inner* task's abort handle on App so the watchdog can
    // forcefully abort the actual stream_response task (see
    // App::active_stream_handle). Aborting the outer supervisor would only
    // drop its JoinHandle to the inner task, detaching rather than cancelling
    // it.
    let inner = tokio::spawn(async move {
        stream::stream_response(
            provider, messages, model, tx_spawn, interrupt, cancel, None, overrides,
        )
        .await;
    });
    app.engine.active_stream_handle = Some(inner.abort_handle());
    tokio::spawn(async move {
        if let Err(join_err) = inner.await {
            let msg = if join_err.is_panic() {
                format!("stream task panicked: {join_err}")
            } else {
                format!("stream task cancelled: {join_err}")
            };
            let _ = tx_guard
                .send(EngineEvent::Stream(StreamEvent::Error(msg)))
                .await;
        }
    });
}

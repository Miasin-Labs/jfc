use crate::{
    app::App,
    runtime::{EngineEvent, EventSender, StreamEvent, StreamRequestOverrides},
    stream,
    types::{MessagePart, Role},
};

pub(crate) fn restart_stream_in_place(
    app: &mut App,
    tx: &EventSender,
    assistant_idx: usize,
    turn_started_at: Option<std::time::Instant>,
) {
    restart_stream_in_place_with_overrides(
        app,
        tx,
        assistant_idx,
        turn_started_at,
        StreamRequestOverrides::default(),
    );
}

pub(crate) fn restart_stream_in_place_with_overrides(
    app: &mut App,
    tx: &EventSender,
    assistant_idx: usize,
    turn_started_at: Option<std::time::Instant>,
    mut overrides: StreamRequestOverrides,
) {
    // Validate the assistant slot first so an aborted restart doesn't
    // silently drain the background-reminder queue. Without this the
    // reminders would be lost — they'd be moved into a discarded
    // `overrides` rather than carried forward to the next attempt.
    match app.engine.messages.get(assistant_idx) {
        Some(msg) if msg.role == Role::Assistant => {}
        _ => return,
    }
    // Caller may have already populated `overrides.background_reminders`
    // (e.g. a future caller-supplied override) — extend rather than
    // replace so caller-supplied entries survive.
    overrides
        .background_reminders
        .extend(app.engine.take_background_reminders());
    if overrides.disallowed_tools.is_empty() {
        overrides.disallowed_tools = app.engine.effective_disallowed_tools();
    }
    if overrides.allowed_tools.is_empty() {
        overrides.allowed_tools = app.engine.allowed_tools.clone();
    }
    if overrides.custom_betas.is_empty() {
        overrides.custom_betas = app.engine.custom_betas.clone();
    }
    overrides.fine_grained_tool_streaming |= app.engine.fine_grained_tool_streaming;
    overrides.strict_tool_schemas |= app.engine.strict_tool_schemas;
    if overrides.task_budget.is_none() {
        overrides.task_budget = app.engine.cli_task_budget;
    }
    if overrides.max_thinking_tokens.is_none() {
        overrides.max_thinking_tokens = app.engine.cli_max_thinking_tokens;
    }
    if overrides.thinking_display.is_none() {
        overrides.thinking_display = app.engine.cli_thinking_display.clone();
    }

    let msg = app.engine
        .messages
        .get_mut(assistant_idx)
        .expect("validated above");
    msg.parts = vec![MessagePart::Text(String::new())];
    msg.model_name = None;
    msg.cost_tier = None;
    msg.elapsed = None;
    msg.usage = None;

    app.engine.streaming_text = String::new();
    app.engine.streaming_reasoning = String::new();
    app.engine.streaming_response_bytes = 0;
    app.engine.turn_output_tokens = 0;
    app.engine.refusal_fallback_attempted = false;
    app.engine.streaming_thinking_tokens = 0;
    app.engine.streaming_assistant_idx = Some(assistant_idx);
    app.engine.is_streaming = true;
    let now = std::time::Instant::now();
    app.engine.streaming_started_at = Some(now);
    app.engine.last_stream_event_at = Some(now);
    app.engine.streaming_last_token_at = Some(now);
    // Fresh rate window for the new turn; seed a zero-token sample at t=0 so
    // the first real sample has a baseline to measure throughput against.
    app.token_rate_samples.clear();
    app.token_rate_samples
        .push_back((std::time::Duration::ZERO, 0));
    app.engine.turn_started_at = turn_started_at.or(Some(now));
    app.engine.thinking_started_at = None;
    app.engine.thinking_ended_at = None;
    app.engine.last_usage_output = 0;
    app.engine.usage_apply_baseline = (0, 0, 0, 0);
    app.engine.current_stream_request = None;
    app.engine.stream_lifecycle = None;
    app.scroll_to_bottom();

    let provider = app.engine.provider.clone();
    let messages = stream::build_provider_messages(&app.engine.messages[..assistant_idx]);
    let model = app.engine.model.clone();
    let tx_spawn = tx.clone();
    let interrupt = app.engine.interrupt_flag.clone();
    interrupt.store(false, std::sync::atomic::Ordering::SeqCst);
    app.engine.cancel_token = tokio_util::sync::CancellationToken::new();
    let cancel = app.engine.cancel_token.clone();
    let prev_msg_id = app.engine.last_response_id.take();
    let tx_guard = tx.clone();
    // Track the *inner* task's abort handle so the watchdog can forcefully
    // abort the actual stream task if it gets stuck in a blocking syscall.
    // Aborting the outer supervisor would only drop its JoinHandle to the
    // inner task, detaching rather than cancelling it.
    let inner = tokio::spawn(async move {
        stream::stream_response(
            provider,
            messages,
            model,
            tx_spawn,
            interrupt,
            cancel,
            prev_msg_id,
            overrides,
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

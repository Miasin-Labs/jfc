use super::{drain_queued_prompts, maybe_continue_task_factory};
use crate::runtime::{EngineEvent, EventSender, GoalEvent};
use crate::{app, stream, types};

pub(crate) fn dispatch_goal_evaluator_if_active(app: &mut app::App, tx: &EventSender) -> bool {
    let Some(goal) = app.engine.goal.as_ref() else {
        return false;
    };
    if app.engine.goal_evaluator_in_flight {
        tracing::debug!(target: "jfc::goal", "evaluator already in flight, skipping");
        return true;
    }
    if goal.is_exhausted() {
        let banner = crate::goal::format_exhaustion_banner(goal);
        app.engine.messages.push(types::ChatMessage::assistant(banner));
        app.engine.goal = None;
        crate::toast::push_with_cap(
            &mut app.engine.toasts,
            crate::toast::Toast::new(
                crate::toast::ToastKind::Error,
                "Goal abandoned — iteration cap reached".to_owned(),
            ),
        );
        return false;
    }

    app.engine.goal_evaluator_in_flight = true;
    let condition = goal.condition.clone();
    let history = app.engine.messages.clone();
    let provider = std::sync::Arc::clone(&app.engine.provider);
    let model = app.engine.model.clone();
    let cancel = app.engine.cancel_token.clone();
    let tx_eval = tx.clone();
    tokio::spawn(async move {
        let verdict = tokio::select! {
            biased;
            _ = cancel.cancelled() => {
                tracing::info!(target: "jfc::goal", "evaluator cancelled before reply");
                return;
            }
            verdict = crate::goal::evaluate(provider.as_ref(), model, &condition, &history) => verdict,
        };
        let event = match verdict {
            Ok(verdict) => EngineEvent::Goal(GoalEvent::Verdict {
                ok: verdict.ok,
                reason: verdict.reason,
            }),
            Err(error) => {
                tracing::warn!(
                    target: "jfc::goal",
                    error = %error,
                    "evaluator call failed; surfacing as unmet"
                );
                EngineEvent::Goal(GoalEvent::Verdict {
                    ok: false,
                    reason: format!("evaluator error: {error}"),
                })
            }
        };
        let _ = tx_eval.send(event).await;
    });
    true
}

pub(crate) async fn handle_goal_verdict(
    app: &mut app::App,
    tx: &EventSender,
    ok: bool,
    reason: String,
) {
    app.engine.goal_evaluator_in_flight = false;
    let Some(mut goal) = app.engine.goal.take() else {
        persist_goal_for_session(app);
        drain_queued_prompts(app, tx).await;
        maybe_continue_task_factory(app, tx).await;
        return;
    };

    if ok {
        let banner = crate::goal::format_success_banner(&goal, &reason);
        append_to_last_assistant_or_push(&mut app.engine.messages, &banner);
        crate::toast::push_with_cap(
            &mut app.engine.toasts,
            crate::toast::Toast::new(crate::toast::ToastKind::Success, "Goal achieved".to_owned()),
        );
        persist_goal_for_session(app);
        drain_queued_prompts(app, tx).await;
        maybe_continue_task_factory(app, tx).await;
        return;
    }

    goal.iterations += 1;
    goal.last_unmet_reason = Some(reason.clone());
    if goal.is_exhausted() {
        let banner = crate::goal::format_exhaustion_banner(&goal);
        append_to_last_assistant_or_push(&mut app.engine.messages, &banner);
        crate::toast::push_with_cap(
            &mut app.engine.toasts,
            crate::toast::Toast::new(
                crate::toast::ToastKind::Error,
                "Goal abandoned — iteration cap reached".to_owned(),
            ),
        );
        persist_goal_for_session(app);
        drain_queued_prompts(app, tx).await;
        maybe_continue_task_factory(app, tx).await;
        return;
    }

    let iteration = goal.iterations;
    let condition = goal.condition.clone();
    app.engine.goal = Some(goal);
    persist_goal_for_session(app);
    let reminder = crate::goal::format_unmet_reminder(&condition, &reason, iteration);
    let body = crate::system_reminder::format(&reminder);
    app.engine.messages.push(types::ChatMessage::user(body));
    tracing::info!(
        target: "jfc::goal",
        iteration,
        "goal unmet; pushed fresh user turn and continuing agentic loop"
    );
    stream::continue_agentic_loop(app, tx).await;
}

fn append_to_last_assistant_or_push(messages: &mut Vec<types::ChatMessage>, body: &str) {
    use crate::types::{MessagePart, Role};

    let target_idx = messages
        .iter()
        .rposition(|message| message.role == Role::Assistant);
    let appended = format!("\n\n{body}");
    if let Some(idx) = target_idx {
        messages[idx].parts.push(MessagePart::Text(appended));
        return;
    }
    messages.push(types::ChatMessage::assistant(body.to_owned()));
}

fn persist_goal_for_session(app: &app::App) {
    let Some(session_id) = app.engine.current_session_id.as_ref() else {
        return;
    };
    crate::goal::save_sidecar(session_id.as_str(), app.engine.goal.as_ref());
}

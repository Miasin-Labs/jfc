use serde_json::Value;

use super::{
    RsiCuratorConfig, RsiCuratorJob, RsiOutcome, RsiPromotionPolicy, RsiToolStep, RsiTrace,
    RsiVerification,
};
use crate::error::LearnError;

pub fn trace_from_messages(
    session_id: impl Into<String>,
    messages: &[jfc_knowledge::SessionMessage],
) -> RsiTrace {
    let mut trace = RsiTrace::new(session_id);
    for message in messages {
        let Some(meta) = message
            .meta
            .as_deref()
            .and_then(|raw| serde_json::from_str::<Value>(raw).ok())
        else {
            inspect_plain_message(message, &mut trace);
            continue;
        };
        if trace.model.is_none() {
            trace.model = meta
                .get("model_name")
                .and_then(Value::as_str)
                .map(str::to_owned);
        }
        if trace.thinking_tokens == 0 {
            trace.thinking_tokens = meta
                .get("usage")
                .and_then(|usage| usage.get("thinking_tokens"))
                .and_then(Value::as_u64)
                .unwrap_or(0);
        }
        let Some(parts) = meta.get("parts").and_then(Value::as_array) else {
            inspect_plain_message(message, &mut trace);
            continue;
        };
        for part in parts {
            inspect_part(&message.role, part, &mut trace);
        }
    }
    if trace.thinking_tokens == 0 {
        trace.thinking_tokens = trace
            .thinking_blocks
            .iter()
            .map(|block| (block.len() as u64).div_ceil(4))
            .sum();
    }
    trace.outcome = Some(infer_outcome(&trace));
    trace
}

pub async fn load_trace_from_store(
    store: &jfc_knowledge::KnowledgeStore,
    session_id: &str,
) -> Result<RsiTrace, LearnError> {
    let messages = store.load_transcript(session_id).await?;
    Ok(trace_from_messages(session_id, &messages))
}

pub async fn load_recent_traces_from_store(
    store: &jfc_knowledge::KnowledgeStore,
    cwd: Option<&str>,
    limit: usize,
) -> Result<Vec<RsiTrace>, LearnError> {
    let sessions = store.list_sessions(cwd, limit).await?;
    let mut traces = Vec::new();
    for session in sessions {
        let trace = load_trace_from_store(store, &session.id).await?;
        if !trace.tool_steps.is_empty()
            || !trace.thinking_blocks.is_empty()
            || trace.user_correction.is_some()
        {
            traces.push(trace);
        }
    }
    Ok(traces)
}

pub async fn build_recent_rsi_job(
    store: &jfc_knowledge::KnowledgeStore,
    cwd: Option<&str>,
    limit: usize,
    config: RsiCuratorConfig,
    promotion_policy: RsiPromotionPolicy,
) -> Result<Option<RsiCuratorJob>, LearnError> {
    let project_key = cwd.map(|cwd| jfc_knowledge::project_key(std::path::Path::new(cwd)));
    if let Some(project_key) = &project_key {
        let decision =
            super::experiment_loop_due_decision(store, project_key, super::current_time_ms())
                .await?;
        if !decision.due {
            return Ok(None);
        }
    }
    let traces = load_recent_traces_from_store(store, cwd, limit).await?;
    if traces.is_empty() {
        return Ok(None);
    }
    Ok(Some(RsiCuratorJob {
        traces,
        config,
        promotion_policy,
        project_key,
        sandbox_enforcement: None,
        worker: None,
    }))
}

fn inspect_plain_message(message: &jfc_knowledge::SessionMessage, trace: &mut RsiTrace) {
    if message.role == "user" && is_correction(&message.content) {
        trace.user_correction = Some(message.content.clone());
    }
}

fn inspect_part(role: &str, part: &Value, trace: &mut RsiTrace) {
    let part_type = part.get("type").and_then(Value::as_str).unwrap_or_default();
    match part_type {
        "reasoning" => {
            if let Some(content) = part.get("content").and_then(Value::as_str) {
                trace.thinking_blocks.push(content.to_owned());
            }
        }
        "tool" => inspect_tool_part(part, trace),
        "text" if role == "user" => {
            if let Some(content) = part.get("content").and_then(Value::as_str)
                && is_correction(content)
            {
                trace.user_correction = Some(content.to_owned());
            }
        }
        "text"
        | "reasoning_signature"
        | "task_status"
        | "compact_boundary"
        | "advisor"
        | "redacted_thinking" => {}
        _ => {}
    }
}

fn inspect_tool_part(part: &Value, trace: &mut RsiTrace) {
    let name = part
        .get("kind")
        .and_then(Value::as_str)
        .unwrap_or("tool")
        .to_owned();
    let status = part
        .get("status")
        .and_then(Value::as_str)
        .unwrap_or_default();
    let success = status_success(status);
    if let Some(command) = bash_command(part)
        && is_verification_command(&command)
    {
        trace
            .verifications
            .push(RsiVerification::new(command, success));
    }
    trace.tool_steps.push(RsiToolStep::new(name, success));
}

fn infer_outcome(trace: &RsiTrace) -> RsiOutcome {
    if trace.user_correction.is_some() {
        return RsiOutcome::UserCorrected;
    }
    if trace
        .verifications
        .iter()
        .any(|verification| !verification.passed)
    {
        return RsiOutcome::Failed;
    }
    if trace
        .verifications
        .iter()
        .any(|verification| verification.passed)
    {
        return RsiOutcome::Succeeded;
    }
    if !trace.tool_steps.is_empty() && trace.tool_steps.iter().all(|step| step.success) {
        return RsiOutcome::Succeeded;
    }
    RsiOutcome::Failed
}

fn status_success(status: &str) -> bool {
    let normalized = status.to_ascii_lowercase();
    matches!(
        normalized.as_str(),
        "complete" | "completed" | "success" | "succeeded" | "ok"
    )
}

fn bash_command(part: &Value) -> Option<String> {
    part.get("input")
        .and_then(|input| input.get("command"))
        .and_then(Value::as_str)
        .map(str::to_owned)
}

fn is_verification_command(command: &str) -> bool {
    let normalized = command.to_ascii_lowercase();
    [
        "cargo test",
        "cargo build",
        "cargo clippy",
        "make ",
        "npm test",
        "bun test",
    ]
    .iter()
    .any(|needle| normalized.contains(needle))
}

fn is_correction(text: &str) -> bool {
    let normalized = text.trim_start().to_ascii_lowercase();
    [
        "no,",
        "no ",
        "actually",
        "that's wrong",
        "thats wrong",
        "incorrect",
        "instead",
        "stop",
    ]
    .iter()
    .any(|cue| normalized.starts_with(cue) || normalized.contains(cue))
}

#[cfg(test)]
mod tests;

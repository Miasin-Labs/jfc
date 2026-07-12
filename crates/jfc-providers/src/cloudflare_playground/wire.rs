use serde::{Deserialize, Serialize};
use serde_json::{Value, json};

use jfc_provider::{StopReason, StreamEvent, ToolDef};

use super::marker::{MarkerState, drain_marker_calls};

mod history;
pub(super) use history::{
    CloudflareToolResult, build_ai_messages, tool_result_frames, tool_results_from_messages,
};

#[derive(Serialize)]
struct Envelope<'a> {
    id: &'a str,
    #[serde(rename = "type")]
    kind: &'static str,
    init: Init<'a>,
}

#[derive(Serialize)]
struct Init<'a> {
    method: &'static str,
    body: &'a str,
}

#[derive(Deserialize)]
pub(super) struct OuterFrame {
    pub(super) id: Option<String>,
    #[serde(rename = "type")]
    pub(super) kind: String,
    pub(super) body: Option<String>,
    pub(super) done: Option<bool>,
}

#[derive(Deserialize)]
pub(super) struct BodyFrame {
    #[serde(rename = "type")]
    kind: String,
    delta: Option<String>,
    #[serde(rename = "toolCallId")]
    tool_call_id: Option<String>,
    #[serde(rename = "toolName")]
    tool_name: Option<String>,
    input: Option<Value>,
    #[serde(rename = "finishReason")]
    finish_reason: Option<String>,
    usage: Option<UsageInner>,
}

#[derive(Deserialize)]
struct UsageInner {
    #[serde(rename = "promptTokens")]
    prompt_tokens: Option<u32>,
    #[serde(rename = "completionTokens")]
    completion_tokens: Option<u32>,
}

pub(super) fn request_body_json(
    messages: Vec<Value>,
    message_id: &str,
    system: Option<&str>,
    tools: &[ToolDef],
) -> serde_json::Result<String> {
    let mut body = json!({
        "messages": messages,
        "trigger": "user-message",
        "messageId": message_id,
    });
    if let Some(system) = system {
        body["system"] = Value::String(system.to_owned());
    }
    if !tools.is_empty() {
        body["clientTools"] = json!(tools.iter().map(cloudflare_tool).collect::<Vec<_>>());
    }
    serde_json::to_string(&body)
}

pub(super) fn cloudflare_tool(tool: &ToolDef) -> Value {
    json!({
        "name": tool.name,
        "description": tool.description,
        "parameters": tool.input_schema,
    })
}

pub(super) fn envelope_json(id: &str, body: &str) -> serde_json::Result<String> {
    serde_json::to_string(&Envelope {
        id,
        kind: "cf_agent_use_chat_request",
        init: Init {
            method: "POST",
            body,
        },
    })
}

#[derive(Default)]
pub(super) struct CloudflareStreamState {
    text_index: usize,
    thinking_index: usize,
    marker: MarkerState,
}

pub(super) fn translate_body_frame(
    frame: BodyFrame,
    state: &mut CloudflareStreamState,
) -> Vec<StreamEvent> {
    let mut out = Vec::new();
    match frame.kind.as_str() {
        "text-start" => state.text_index += 1,
        "text-delta" => {
            if let Some(delta) = frame.delta.filter(|s| !s.is_empty()) {
                state.marker.push_text(&delta);
                drain_marker_calls(&mut state.marker, state.text_index, &mut out, false);
            }
        }
        "reasoning-start" => state.thinking_index += 1,
        "reasoning-delta" => {
            if let Some(delta) = frame.delta.filter(|s| !s.is_empty()) {
                out.push(StreamEvent::ThinkingDelta {
                    index: state.thinking_index,
                    delta,
                    estimated_tokens: None,
                });
            }
        }
        "tool-input-available" => {
            if let (Some(tool_call_id), Some(tool_name)) = (frame.tool_call_id, frame.tool_name) {
                out.push(StreamEvent::ToolDone {
                    index: state.next_tool_index(),
                    tool_name: normalize_tool_name(&tool_name),
                    tool_use_id: tool_call_id,
                    input_json: frame.input.unwrap_or_else(|| json!({})).to_string(),
                    thought_signature: None,
                });
            }
        }
        "finish" => {
            drain_marker_calls(&mut state.marker, state.text_index, &mut out, true);
            let saw_tool_call = state.marker.take_saw_tool_call();
            if let Some(usage) = frame.usage {
                out.push(StreamEvent::Usage {
                    input_tokens: usage.prompt_tokens.unwrap_or(0),
                    output_tokens: usage.completion_tokens.unwrap_or(0),
                    thinking_tokens: None,
                    cache_read_tokens: 0,
                    cache_write_tokens: 0,
                });
            }
            let stop_reason = match frame.finish_reason.as_deref() {
                Some("length") => StopReason::MaxTokens,
                Some("tool_calls") | Some("tool-calls") => StopReason::ToolUse,
                _ if saw_tool_call => StopReason::ToolUse,
                _ => StopReason::EndTurn,
            };
            out.push(StreamEvent::Done { stop_reason });
        }
        _ => {}
    }
    out
}

impl CloudflareStreamState {
    fn next_tool_index(&mut self) -> usize {
        let index = 200_000 + self.text_index;
        self.text_index += 1;
        index
    }
}

fn normalize_tool_name(name: &str) -> String {
    match name
        .rsplit('.')
        .next()
        .unwrap_or(name)
        .to_ascii_lowercase()
        .as_str()
    {
        "bash" | "exec" | "exec_command" | "execute_command" | "run_command" | "shell"
        | "shell_command" => "Bash".to_owned(),
        "read" | "read_file" => "Read".to_owned(),
        _ => name.to_owned(),
    }
}

#[cfg(test)]
mod tests;

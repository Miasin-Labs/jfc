use std::{collections::HashMap, sync::Arc};

use futures::StreamExt;
use tokio::sync::mpsc;

use crate::app::{App, AppEvent};
use crate::provider::{
    Provider, ProviderContent, ProviderMessage, ProviderRole, StopReason, StreamEvent, StreamOptions,
};
use crate::tools;
use crate::types::*;

const MAX_TOOL_RESULT_CHARS: usize = 30_000;

fn truncate_tool_result(s: &str) -> String {
    if s.len() <= MAX_TOOL_RESULT_CHARS {
        return s.to_owned();
    }
    let half = MAX_TOOL_RESULT_CHARS / 2;
    let head = &s[..half];
    let tail = &s[s.len() - half..];
    let omitted = s.len() - MAX_TOOL_RESULT_CHARS;
    format!("{head}\n\n... [{omitted} characters omitted] ...\n\n{tail}")
}

pub async fn stream_response(
    provider: Arc<dyn Provider>,
    messages: Vec<ProviderMessage>,
    model: String,
    tx: mpsc::UnboundedSender<AppEvent>,
) {
    let opts = StreamOptions::new(model)
        .tools(tools::all_tool_defs())
        .thinking(8000);

    let mut stream = match provider.stream(messages, &opts).await {
        Ok(s) => s,
        Err(e) => {
            let _ = tx.send(AppEvent::StreamError(e.to_string()));
            return;
        }
    };

    let mut stop_reason = StopReason::EndTurn;
    let mut tool_accum: HashMap<usize, (String, String, String)> = HashMap::new();

    while let Some(event) = stream.next().await {
        let event = match event {
            Ok(e) => e,
            Err(e) => {
                let _ = tx.send(AppEvent::StreamError(e.to_string()));
                return;
            }
        };

        match event {
            StreamEvent::TextDelta { delta, .. } => {
                let _ = tx.send(AppEvent::StreamChunk {
                    text: Some(delta),
                    reasoning: None,
                });
            }
            StreamEvent::ThinkingDelta { delta, .. } => {
                let _ = tx.send(AppEvent::StreamChunk {
                    text: None,
                    reasoning: Some(delta),
                });
            }
            StreamEvent::ToolDelta { index, delta } => {
                tool_accum.entry(index).or_default().2.push_str(&delta);
            }
            StreamEvent::ToolDone {
                index,
                tool_name,
                tool_use_id,
                input_json,
            } => {
                let input_val: serde_json::Value =
                    serde_json::from_str(&input_json).unwrap_or(serde_json::Value::Null);
                let tool = ToolCall {
                    id: tool_use_id,
                    kind: ToolKind::from_name(&tool_name),
                    status: ToolStatus::Pending,
                    input: ToolInput::from_value(&tool_name, input_val),
                    output: ToolOutput::Empty,
                    is_collapsed: false,
                };
                tool_accum.remove(&index);
                let _ = tx.send(AppEvent::StreamTool(tool));
            }
            StreamEvent::Done { stop_reason: r } => {
                stop_reason = r;
            }
            StreamEvent::TextDone { .. } | StreamEvent::ThinkingDone { .. } => {}
            StreamEvent::Error { message } => {
                let _ = tx.send(AppEvent::StreamError(message));
                return;
            }
        }
    }

    let _ = tx.send(AppEvent::StreamDone(stop_reason));
}

pub async fn dispatch_tool(
    mut tool: ToolCall,
    tx: &mpsc::UnboundedSender<AppEvent>,
    _provider: &Arc<dyn Provider>,
    _messages: &[ChatMessage],
    _model: &str,
) {
    tool.status = ToolStatus::Running;
    let tx = tx.clone();
    let cwd = std::env::current_dir().unwrap_or_default();
    let id = tool.id.clone();
    let kind = tool.kind.clone();
    let input = tool.input.clone();

    tokio::spawn(async move {
        let result = tools::execute_tool(kind, input, cwd).await;
        let _ = tx.send(AppEvent::ToolResult { tool_id: id, result });
    });
}

pub fn should_continue_loop(messages: &[ChatMessage]) -> bool {
    let last = match messages.iter().rev().find(|m| m.role == Role::Assistant) {
        Some(m) => m,
        None => return false,
    };
    let has_tools = last.parts.iter().any(|p| matches!(p, MessagePart::Tool(_)));
    if !has_tools {
        return false;
    }
    last.parts.iter().all(|p| match p {
        MessagePart::Tool(tc) => {
            tc.status == ToolStatus::Complete || tc.status == ToolStatus::Failed
        }
        _ => true,
    })
}

pub async fn continue_agentic_loop(app: &mut App, tx: &mpsc::UnboundedSender<AppEvent>) {
    let assistant_idx = app.messages.len();
    app.messages.push(ChatMessage::assistant(String::new()));
    app.streaming_text.clear();
    app.streaming_reasoning.clear();
    app.streaming_assistant_idx = Some(assistant_idx);
    app.is_streaming = true;

    let provider = app.provider.clone();
    let messages = build_provider_messages_with_tool_results(&app.messages[..assistant_idx]);
    let model = app.model.clone();
    let tx = tx.clone();

    tokio::spawn(async move {
        stream_response(provider, messages, model, tx).await;
    });
}

pub fn build_provider_messages(msgs: &[ChatMessage]) -> Vec<ProviderMessage> {
    msgs.iter()
        .filter_map(|m| {
            let role = match m.role {
                Role::User => ProviderRole::User,
                Role::Assistant => ProviderRole::Assistant,
            };
            let text: String = m
                .parts
                .iter()
                .filter_map(|p| match p {
                    MessagePart::Text(t) if !t.is_empty() => Some(t.as_str()),
                    _ => None,
                })
                .collect::<Vec<_>>()
                .join("\n");
            if text.is_empty() {
                return None;
            }
            Some(ProviderMessage {
                role,
                content: vec![ProviderContent::Text(text)],
            })
        })
        .collect()
}

fn build_provider_messages_with_tool_results(msgs: &[ChatMessage]) -> Vec<ProviderMessage> {
    let mut out = Vec::new();
    for m in msgs {
        let role = match m.role {
            Role::User => ProviderRole::User,
            Role::Assistant => ProviderRole::Assistant,
        };
        let text: String = m
            .parts
            .iter()
            .filter_map(|p| match p {
                MessagePart::Text(t) if !t.is_empty() => Some(t.as_str()),
                _ => None,
            })
            .collect::<Vec<_>>()
            .join("\n");

        let tool_uses: Vec<ProviderContent> = m
            .parts
            .iter()
            .filter_map(|p| match p {
                MessagePart::Tool(tc) => Some(ProviderContent::ToolUse {
                    id: tc.id.clone(),
                    name: tc.kind.api_name().to_owned(),
                    input: tc.input.to_value(),
                }),
                _ => None,
            })
            .collect();

        let tool_results: Vec<ProviderContent> = m
            .parts
            .iter()
            .filter_map(|p| match p {
                MessagePart::Tool(tc) if tc.status == ToolStatus::Complete || tc.status == ToolStatus::Failed => {
                    let result_text = match &tc.output {
                        ToolOutput::Text(s) => s.clone(),
                        ToolOutput::Command { stdout, stderr, exit_code } => {
                            format!("exit: {}\nstdout: {}\nstderr: {}", exit_code.unwrap_or(-1), stdout, stderr)
                        }
                        ToolOutput::FileContent { content, .. } => content.clone(),
                        ToolOutput::FileList(files) => files.join("\n"),
                        ToolOutput::Diff(d) => format!("Applied diff to {}", d.file_path),
                        ToolOutput::Empty => String::new(),
                    };
                    Some(ProviderContent::ToolResult {
                        tool_use_id: tc.id.clone(),
                        content: truncate_tool_result(&result_text),
                        is_error: tc.status == ToolStatus::Failed,
                    })
                }
                _ => None,
            })
            .collect();

        let mut assistant_content = Vec::new();
        if !text.is_empty() {
            assistant_content.push(ProviderContent::Text(text.clone()));
        }
        assistant_content.extend(tool_uses);

        if !assistant_content.is_empty() {
            out.push(ProviderMessage { role: role.clone(), content: assistant_content });
        } else if !text.is_empty() {
            out.push(ProviderMessage {
                role: role.clone(),
                content: vec![ProviderContent::Text(text)],
            });
        }

        if !tool_results.is_empty() {
            out.push(ProviderMessage {
                role: ProviderRole::User,
                content: tool_results,
            });
        }
    }
    out
}

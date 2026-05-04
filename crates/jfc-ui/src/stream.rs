use std::{collections::HashMap, sync::Arc};

use futures::StreamExt;
use tokio::sync::{Mutex, mpsc};

use crate::app::{App, AppEvent};
use crate::context::ReadDedupCache;
use crate::provider::{
    Provider, ProviderContent, ProviderMessage, ProviderRole, StopReason, StreamEvent,
    StreamOptions,
};
use crate::scheduler;
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

#[tracing::instrument(
    target = "jfc::stream",
    skip_all,
    fields(
        provider = %provider.name(),
        model = %model,
        messages = messages.len(),
    ),
)]
pub async fn stream_response(
    provider: Arc<dyn Provider>,
    messages: Vec<ProviderMessage>,
    model: String,
    tx: mpsc::UnboundedSender<AppEvent>,
) {
    // Default system prompt — without this, Sonnet-on-Bedrock (and some
    // other tool-aware models) will see tools in the request and respond by
    // *describing* them rather than calling them. The screenshot bug:
    // "I appreciate your enthusiasm for using the bash tools! However, I need
    // to clarify what these tools are actually for…". Telling the model
    // explicitly that it's an agent in a working directory and should USE the
    // tools to accomplish requests fixes this without changing the tool defs.
    let cwd = std::env::current_dir()
        .ok()
        .and_then(|p| p.to_str().map(str::to_owned))
        .unwrap_or_default();
    let mut system_prompt = format!(
        "You are jfc, a coding assistant running as a CLI in the user's terminal. \
         You have direct access to the user's filesystem and shell via tools \
         (Bash, Read, Write, Edit, Glob, Grep). When the user asks you to do \
         something — read a file, run a command, write code — USE the tools to \
         do it directly. Don't describe how the user could do it manually; you \
         are the one doing it. Working directory: {cwd}"
    );

    // v126 CLAUDE.md hierarchy — managed → user → project → .claude/ → local
    // overrides. Each layer is appended with its origin labeled so the model
    // can tell which rule came from which file. We load on every stream call
    // so live edits to CLAUDE.md take effect on the next turn (matching CC).
    if let Ok(cwd_path) = std::env::current_dir() {
        let hierarchy = crate::context::ClaudeMdHierarchy::load(&cwd_path);
        if let Some(layered) = hierarchy.render() {
            system_prompt.push_str("\n\n");
            system_prompt.push_str(&layered);
        }
    }
    let opts = StreamOptions::new(model)
        .system(system_prompt)
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
                // Prefer the input_json the provider assembled (Anthropic SSE
                // builds the full payload before firing ToolDone). When that's
                // empty, fall back to the accumulator we filled from
                // ToolDelta — required by OpenWebUI's OpenAI-compatible
                // streaming, which only ever ships fragments and doesn't
                // assemble the full string itself.
                let assembled = if input_json.is_empty() {
                    tool_accum
                        .get(&index)
                        .map(|(_, _, buf)| buf.clone())
                        .unwrap_or_default()
                } else {
                    input_json
                };
                tracing::debug!(
                    target: "jfc::stream",
                    index,
                    tool_name = %tool_name,
                    tool_use_id = %tool_use_id,
                    input_len = assembled.len(),
                    "tool_done"
                );
                let input_val: serde_json::Value =
                    serde_json::from_str(&assembled).unwrap_or(serde_json::Value::Null);
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

#[tracing::instrument(target = "jfc::stream", skip(tx, dedup), fields(n = tool_calls.len()))]
pub fn dispatch_tools_batched(
    tool_calls: Vec<ToolCall>,
    tx: &mpsc::UnboundedSender<AppEvent>,
    dedup: Arc<Mutex<ReadDedupCache>>,
) {
    let cwd = std::env::current_dir().unwrap_or_default();
    let batches = scheduler::schedule_tools(tool_calls);
    let tx_clone = tx.clone();
    tokio::spawn(async move {
        scheduler::execute_batches(batches, &tx_clone, cwd, dedup).await;
        let _ = tx_clone.send(AppEvent::AllToolsComplete);
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

        // Anthropic's API enforces: every `tool_use` block in an assistant
        // turn MUST be followed by a matching `tool_result` block in the
        // next user message — including ones that were never approved or
        // executed. The 400 error from the log:
        //   "messages.4: tool_use ids were found without tool_result blocks
        //    immediately after: toolu_012FTQ..., toolu_01DKKy..., …"
        // happens when the user types a new prompt while tools are still
        // pending approval, then we send a request with mismatched counts.
        //
        // Fix: emit a tool_result for EVERY tool_use in the assistant turn.
        // Pending/Running tools (never finished) get a synthetic "abandoned"
        // result with is_error=true so the model knows the tool didn't run.
        let tool_results: Vec<ProviderContent> = m
            .parts
            .iter()
            .filter_map(|p| match p {
                MessagePart::Tool(tc) => {
                    let (result_text, is_error) = match tc.status {
                        ToolStatus::Complete | ToolStatus::Failed => {
                            let text = match &tc.output {
                                ToolOutput::Text(s) => s.clone(),
                                ToolOutput::Command {
                                    stdout,
                                    stderr,
                                    exit_code,
                                } => format!(
                                    "exit: {}\nstdout: {}\nstderr: {}",
                                    exit_code.unwrap_or(-1),
                                    stdout,
                                    stderr
                                ),
                                ToolOutput::FileContent { content, .. } => content.clone(),
                                ToolOutput::FileList(files) => files.join("\n"),
                                ToolOutput::Diff(d) => {
                                    format!("Applied diff to {}", d.file_path)
                                }
                                ToolOutput::Empty => String::new(),
                            };
                            (text, tc.status == ToolStatus::Failed)
                        }
                        ToolStatus::Pending | ToolStatus::Running => (
                            "Tool was abandoned: the user moved on before \
                             approving or executing it. No output was produced."
                                .to_owned(),
                            true,
                        ),
                    };
                    Some(ProviderContent::ToolResult {
                        tool_use_id: tc.id.clone(),
                        content: truncate_tool_result(&result_text),
                        is_error,
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
            out.push(ProviderMessage {
                role: role.clone(),
                content: assistant_content,
            });
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

use serde_json::{Value, json};

use jfc_provider::{ProviderContent, ProviderMessage, ProviderRole, ToolDef};

use super::cloudflare_tool;

#[derive(Clone, Debug, PartialEq, Eq)]
pub(crate) struct CloudflareToolResult {
    pub(crate) tool_call_id: String,
    pub(crate) tool_name: String,
    pub(crate) output: String,
    pub(crate) is_error: bool,
}

pub(crate) fn build_ai_messages(messages: &[ProviderMessage]) -> Vec<Value> {
    messages
        .iter()
        .scan(
            std::collections::HashMap::<String, (String, Value)>::new(),
            |tool_names, message| {
                let role = match message.role {
                    ProviderRole::User => "user",
                    ProviderRole::Assistant => "assistant",
                };
                Some(message_value(role, &message.content, tool_names))
            },
        )
        .collect()
}

fn message_value(
    role: &str,
    content: &[ProviderContent],
    tool_names: &mut std::collections::HashMap<String, (String, Value)>,
) -> Value {
    if content
        .iter()
        .all(|content| matches!(content, ProviderContent::Text(_)))
    {
        let text = content
            .iter()
            .filter_map(|content| match content {
                ProviderContent::Text(text) => Some(text.as_str()),
                _ => None,
            })
            .collect::<Vec<_>>()
            .join("");
        return json!({ "role": role, "content": text });
    }

    let parts = message_parts(content, tool_names);
    json!({ "role": role, "parts": parts })
}

fn message_parts(
    content: &[ProviderContent],
    tool_names: &mut std::collections::HashMap<String, (String, Value)>,
) -> Vec<Value> {
    content
        .iter()
        .filter_map(|content| match content {
            ProviderContent::Text(text) => Some(json!({ "type": "text", "text": text })),
            ProviderContent::ToolUse {
                id, name, input, ..
            } => {
                tool_names.insert(id.clone(), (name.clone(), input.clone()));
                Some(json!({
                    "type": format!("tool-{name}"),
                    "toolCallId": id,
                    "toolName": name,
                    "state": "input-available",
                    "input": input,
                }))
            }
            ProviderContent::ToolResult {
                tool_use_id,
                content,
                is_error,
            } => {
                let (name, input) = tool_names
                    .get(tool_use_id)
                    .cloned()
                    .unwrap_or_else(|| ("Bash".to_owned(), json!({})));
                let mut part = json!({
                    "type": format!("tool-{name}"),
                    "toolCallId": tool_use_id,
                    "toolName": name,
                    "state": if *is_error { "output-error" } else { "output-available" },
                    "input": input,
                });
                part[if *is_error { "errorText" } else { "output" }] =
                    Value::String(content.clone());
                Some(part)
            }
            _ => None,
        })
        .collect()
}

pub(crate) fn tool_results_from_messages(
    messages: &[ProviderMessage],
) -> Vec<CloudflareToolResult> {
    let mut tool_names = std::collections::HashMap::<String, String>::new();
    let mut results = Vec::new();
    for message in messages {
        for content in &message.content {
            match content {
                ProviderContent::ToolUse { id, name, .. } => {
                    tool_names.insert(id.clone(), name.clone());
                }
                ProviderContent::ToolResult {
                    tool_use_id,
                    content,
                    is_error,
                } => {
                    results.push(CloudflareToolResult {
                        tool_call_id: tool_use_id.clone(),
                        tool_name: tool_names
                            .get(tool_use_id)
                            .cloned()
                            .unwrap_or_else(|| "Bash".to_owned()),
                        output: content.clone(),
                        is_error: *is_error,
                    });
                }
                _ => {}
            }
        }
    }
    results
}

pub(crate) fn tool_result_frames(
    results: &[CloudflareToolResult],
    tools: &[ToolDef],
) -> serde_json::Result<Vec<String>> {
    let client_tools = tools.iter().map(cloudflare_tool).collect::<Vec<_>>();
    results
        .iter()
        .map(|result| {
            serde_json::to_string(&json!({
                "type": "cf_agent_tool_result",
                "toolCallId": result.tool_call_id,
                "toolName": result.tool_name,
                "output": result.output,
                "state": if result.is_error { "output-error" } else { "output-available" },
                "autoContinue": true,
                "clientTools": client_tools,
            }))
        })
        .collect()
}

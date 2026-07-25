use base64::Engine;
use serde_json::{Value, json};

use jfc_core::AttachmentKind;
use jfc_provider::{ProviderContent, ProviderMessage, ProviderRole, StreamOptions, ToolDef};

pub(super) fn nvidia_chat_body(
    messages: Vec<ProviderMessage>,
    options: &StreamOptions,
    stream: bool,
) -> Value {
    let has_media = messages
        .iter()
        .flat_map(|message| message.content.iter())
        .any(|content| media_content_part(content).is_some());
    let mut body = json!({
        "model": options.model.as_str(),
        "max_tokens": options.max_tokens,
        "stream": stream,
        "messages": nvidia_messages(messages, options.system.as_deref(), has_media),
    });

    if !options.tools.is_empty() {
        body["tools"] = json!(options.tools.iter().map(nvidia_tool).collect::<Vec<_>>());
        body["tool_choice"] = json!("auto");
    }
    if stream {
        body["stream_options"] = json!({ "include_usage": true });
    }
    if let Some(temperature) = options.temperature {
        body["temperature"] = Value::from(temperature);
    }
    if let Some(top_p) = options.top_p {
        body["top_p"] = Value::from(top_p);
    }
    if let Some(effort) = options.reasoning_effort.as_deref() {
        body["reasoning_effort"] = Value::from(effort);
    }
    for (key, value) in &options.provider_options {
        body[key] = value.clone();
    }
    body
}

fn nvidia_messages(
    messages: Vec<ProviderMessage>,
    system: Option<&str>,
    has_media: bool,
) -> Vec<Value> {
    let mut out = Vec::new();
    match (system, has_media) {
        (Some(system), _) => out.push(json!({ "role": "system", "content": system })),
        (None, true) => out.push(json!({ "role": "system", "content": "/think" })),
        (None, false) => {}
    }

    for message in messages {
        match message.role {
            ProviderRole::User => append_user_message(&mut out, message.content),
            ProviderRole::Assistant => append_assistant_message(&mut out, message.content),
        }
    }

    while out
        .last()
        .and_then(|message| message.get("role"))
        .and_then(Value::as_str)
        == Some("assistant")
    {
        out.pop();
    }
    let last_role = out
        .last()
        .and_then(|message| message.get("role"))
        .and_then(Value::as_str);
    if last_role != Some("user") && last_role != Some("tool") {
        out.push(json!({"role": "user", "content": [{"type": "text", "text": "Continue."}]}));
    }
    out
}

fn append_user_message(out: &mut Vec<Value>, content: Vec<ProviderContent>) {
    let mut parts = Vec::new();
    for item in content {
        match item {
            ProviderContent::Text(text) if !text.is_empty() => {
                parts.push(json!({ "type": "text", "text": text }));
            }
            ProviderContent::ToolResult {
                tool_use_id,
                content,
                ..
            } => {
                out.push(json!({
                    "role": "tool",
                    "tool_call_id": tool_use_id,
                    "content": content,
                }));
            }
            attachment => {
                if let Some(part) = media_content_part(&attachment) {
                    parts.push(part);
                }
            }
        }
    }
    if !parts.is_empty() {
        out.push(json!({ "role": "user", "content": parts }));
    }
}

fn append_assistant_message(out: &mut Vec<Value>, content: Vec<ProviderContent>) {
    let mut text = String::new();
    let mut tool_calls = Vec::new();
    for item in content {
        match item {
            ProviderContent::Text(part) if !part.is_empty() => {
                if !text.is_empty() {
                    text.push('\n');
                }
                text.push_str(&part);
            }
            ProviderContent::ToolUse {
                id, name, input, ..
            } => {
                tool_calls.push(json!({
                    "id": id,
                    "type": "function",
                    "function": {
                        "name": name.to_lowercase(),
                        "arguments": input.to_string(),
                    },
                }));
            }
            _ => {}
        }
    }
    if !tool_calls.is_empty() {
        out.push(json!({
            "role": "assistant",
            "content": text,
            "tool_calls": tool_calls,
        }));
    } else if !text.is_empty() {
        out.push(json!({ "role": "assistant", "content": text }));
    }
}

fn nvidia_tool(tool: &ToolDef) -> Value {
    json!({
        "type": "function",
        "function": {
            "name": tool.name.to_lowercase(),
            "description": tool.description,
            "parameters": tool.input_schema,
        },
    })
}

fn media_content_part(content: &ProviderContent) -> Option<Value> {
    let ProviderContent::Attachment(attachment) = content else {
        return None;
    };
    let kind = media_kind(attachment.kind)?;
    let data = base64::engine::general_purpose::STANDARD.encode(&attachment.bytes);
    Some(json!({
        "type": kind.field,
        kind.field: {
            "url": format!("data:{};base64,{data}", attachment.kind.mime_type()),
        },
    }))
}

fn media_kind(kind: AttachmentKind) -> Option<MediaKind> {
    match kind {
        AttachmentKind::ImagePng | AttachmentKind::ImageJpeg | AttachmentKind::ImageWebp => {
            Some(MediaKind { field: "image_url" })
        }
        AttachmentKind::ImageGif => None,
        AttachmentKind::ApplicationPdf => None,
    }
}

struct MediaKind {
    field: &'static str,
}

#[cfg(test)]
mod tests {
    use super::*;

    fn user_with_image() -> ProviderMessage {
        ProviderMessage {
            role: ProviderRole::User,
            content: vec![
                ProviderContent::Text("Describe the scene".to_owned()),
                ProviderContent::Attachment(jfc_core::Attachment {
                    id: 1,
                    kind: AttachmentKind::ImagePng,
                    bytes: vec![0x89, b'P', b'N', b'G'],
                }),
            ],
        }
    }

    #[test]
    fn chat_body_serializes_image_attachment_as_nvidia_data_url_normal() {
        let body = nvidia_chat_body(
            vec![user_with_image()],
            &StreamOptions::new("nvidia/nemotron-nano-12b-v2-vl"),
            true,
        );

        let content = body["messages"][1]["content"].as_array().expect("content");
        assert_eq!(content[0]["type"], "text");
        assert_eq!(content[1]["type"], "image_url");
        assert!(
            content[1]["image_url"]["url"]
                .as_str()
                .expect("image url")
                .starts_with("data:image/png;base64,")
        );
    }

    #[test]
    fn chat_body_omits_stream_options_for_non_streaming_complete_robust() {
        let body = nvidia_chat_body(
            vec![ProviderMessage {
                role: ProviderRole::User,
                content: vec![ProviderContent::Text("hi".to_owned())],
            }],
            &StreamOptions::new("minimaxai/minimax-m3"),
            false,
        );

        assert_eq!(body["stream"], false);
        assert!(body.get("stream_options").is_none());
    }
}

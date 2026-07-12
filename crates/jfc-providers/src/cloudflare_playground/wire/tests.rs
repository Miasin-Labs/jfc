use super::*;
use jfc_provider::{ProviderContent, ProviderMessage, ProviderRole};

fn bash_tool() -> ToolDef {
    ToolDef {
        name: "Bash".to_owned(),
        description: "Run a shell command".to_owned(),
        input_schema: json!({
            "type": "object",
            "properties": {
                "command": { "type": "string" }
            },
            "required": ["command"]
        }),
    }
}

#[test]
fn request_body_includes_cloudflare_tools_normal() {
    let body = request_body_json(
        vec![json!({"role": "user", "content": "hi"})],
        "msg_1",
        Some("system"),
        &[bash_tool()],
    )
    .expect("request body");
    let value: Value = serde_json::from_str(&body).expect("json");

    assert_eq!(value["messageId"], "msg_1");
    assert_eq!(value["clientTools"][0]["name"], "Bash");
    assert_eq!(
        value["clientTools"][0]["parameters"]["required"][0],
        "command"
    );
}

#[test]
fn text_only_messages_use_content_field_normal() {
    let wire = build_ai_messages(&[ProviderMessage {
        role: ProviderRole::User,
        content: vec![ProviderContent::Text("hi".to_owned())],
    }]);

    assert_eq!(wire[0]["role"], "user");
    assert_eq!(wire[0]["content"], "hi");
    assert!(wire[0].get("parts").is_none());
}

#[test]
fn provider_messages_round_trip_ai_sdk_tool_parts_regression() {
    let messages = vec![
        ProviderMessage {
            role: ProviderRole::Assistant,
            content: vec![ProviderContent::ToolUse {
                id: "toolu_1".to_owned(),
                name: "Bash".to_owned(),
                input: json!({ "command": "uname -a" }),
                thought_signature: None,
            }],
        },
        ProviderMessage {
            role: ProviderRole::User,
            content: vec![ProviderContent::ToolResult {
                tool_use_id: "toolu_1".to_owned(),
                content: "Linux gentoo-thinkpad".to_owned(),
                is_error: false,
            }],
        },
    ];

    let wire = build_ai_messages(&messages);

    assert_eq!(wire[0]["parts"][0]["type"], "tool-Bash");
    assert_eq!(wire[0]["parts"][0]["state"], "input-available");
    assert_eq!(wire[1]["parts"][0]["type"], "tool-Bash");
    assert_eq!(wire[1]["parts"][0]["state"], "output-available");
    assert_eq!(wire[1]["parts"][0]["output"], "Linux gentoo-thinkpad");
}

#[test]
fn tool_result_frames_match_cloudflare_protocol_regression() {
    let messages = vec![
        ProviderMessage {
            role: ProviderRole::Assistant,
            content: vec![ProviderContent::ToolUse {
                id: "functions.Bash:0".to_owned(),
                name: "Bash".to_owned(),
                input: json!({ "command": "uname -a" }),
                thought_signature: None,
            }],
        },
        ProviderMessage {
            role: ProviderRole::User,
            content: vec![ProviderContent::ToolResult {
                tool_use_id: "functions.Bash:0".to_owned(),
                content: "Linux gentoo-thinkpad".to_owned(),
                is_error: false,
            }],
        },
    ];
    let results = tool_results_from_messages(&messages);
    let frames = tool_result_frames(&results, &[bash_tool()]).expect("frames");
    let frame: Value = serde_json::from_str(&frames[0]).expect("frame json");

    assert_eq!(frame["type"], "cf_agent_tool_result");
    assert_eq!(frame["toolCallId"], "functions.Bash:0");
    assert_eq!(frame["toolName"], "Bash");
    assert_eq!(frame["output"], "Linux gentoo-thinkpad");
    assert_eq!(frame["clientTools"][0]["name"], "Bash");
}

#[test]
fn structured_tool_input_frame_becomes_tool_done_regression() {
    let mut state = CloudflareStreamState::default();
    let events = translate_body_frame(
        BodyFrame {
            kind: "tool-input-available".to_owned(),
            delta: None,
            tool_call_id: Some("toolu_live".to_owned()),
            tool_name: Some("bash".to_owned()),
            input: Some(json!({ "command": "uname -a" })),
            finish_reason: None,
            usage: None,
        },
        &mut state,
    );

    let done = events
        .iter()
        .find_map(|event| match event {
            StreamEvent::ToolDone {
                tool_name,
                input_json,
                ..
            } => Some((tool_name, input_json)),
            _ => None,
        })
        .expect("tool done");

    assert_eq!(done.0, "Bash");
    assert!(done.1.contains("uname -a"));
}

#[test]
fn openai_marker_shell_text_becomes_bash_tool_done_regression() {
    let mut state = CloudflareStreamState::default();
    let first = translate_body_frame(
        BodyFrame {
            kind: "text-delta".to_owned(),
            delta: Some(
                r#"<|tool_calls_section_begin|><|tool_call_begin|>functions.shell:0<|tool_call_argument_begin|>
{"command": "pwd && ls -la", "description": "Check current directory and list files"}<|tool_call_end|><|tool_calls_section_end|>"#
                    .to_owned(),
            ),
            tool_call_id: None,
            tool_name: None,
            input: None,
            finish_reason: None,
            usage: None,
        },
        &mut state,
    );

    let done = first
        .iter()
        .find_map(|event| match event {
            StreamEvent::ToolDone {
                tool_name,
                input_json,
                ..
            } => Some((tool_name.clone(), input_json.clone())),
            _ => None,
        })
        .expect("tool done");
    assert_eq!(done.0, "Bash");
    let input: Value = serde_json::from_str(&done.1).expect("input json");
    assert_eq!(input["command"], "pwd && ls -la");

    let finish = translate_body_frame(
        BodyFrame {
            kind: "finish".to_owned(),
            delta: None,
            tool_call_id: None,
            tool_name: None,
            input: None,
            finish_reason: Some("stop".to_owned()),
            usage: None,
        },
        &mut state,
    );
    assert!(matches!(
        finish.last(),
        Some(StreamEvent::Done {
            stop_reason: StopReason::ToolUse
        })
    ));
}

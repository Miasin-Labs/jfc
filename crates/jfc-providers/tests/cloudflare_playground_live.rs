use futures::StreamExt;
use jfc_provider::{
    Provider, ProviderContent, ProviderMessage, ProviderRole, StopReason, StreamEvent,
    StreamOptions, ToolDef,
};
use jfc_providers::CloudflarePlaygroundProvider;
use serde_json::{Value, json};

fn user_text(text: &str) -> Vec<ProviderMessage> {
    vec![ProviderMessage {
        role: ProviderRole::User,
        content: vec![ProviderContent::Text(text.to_owned())],
    }]
}

fn bash_tool() -> ToolDef {
    ToolDef {
        name: "Bash".to_owned(),
        description: "Run a shell command and return its output.".to_owned(),
        input_schema: json!({
            "type": "object",
            "properties": {
                "command": {
                    "type": "string",
                    "description": "Shell command to run"
                },
                "description": {
                    "type": "string",
                    "description": "Short reason for running the command"
                }
            },
            "required": ["command"]
        }),
    }
}

#[tokio::test(flavor = "multi_thread", worker_threads = 2)]
#[ignore = "live Cloudflare Playground WebSocket smoke"]
async fn live_text_query_returns_done_normal() {
    let provider = CloudflarePlaygroundProvider::new();
    let opts = StreamOptions::new("@cf/zai-org/glm-5.2").max_tokens(128);
    let mut stream = provider
        .stream(user_text("say hello in one word"), &opts)
        .await
        .expect("cloudflare stream");

    let mut text = String::new();
    let mut saw_done = false;
    while let Some(event) = stream.next().await {
        match event.expect("stream event") {
            StreamEvent::TextDelta { delta, .. } => text.push_str(&delta),
            StreamEvent::Done { stop_reason } => {
                assert_eq!(stop_reason, StopReason::EndTurn);
                saw_done = true;
                break;
            }
            _ => {}
        }
    }

    assert!(saw_done, "expected Done event, text={text:?}");
    let normalized = text.to_ascii_lowercase();
    assert!(
        normalized.contains("hello") || normalized.contains("hi"),
        "expected greeting text, got {text:?}"
    );
}

#[tokio::test(flavor = "multi_thread", worker_threads = 2)]
#[ignore = "live Cloudflare Playground WebSocket tool smoke"]
async fn live_system_query_emits_bash_tool_call_regression() {
    let provider = CloudflarePlaygroundProvider::new();
    let opts = StreamOptions::new("@cf/zai-org/glm-5.2")
        .system("You are a coding assistant. Use the Bash tool whenever you need to inspect the host system.")
        .tools(vec![bash_tool()])
        .max_tokens(512);
    let mut stream = provider
        .stream(
            user_text("What system am I running on? Use Bash to check. Do not guess."),
            &opts,
        )
        .await
        .expect("cloudflare stream");

    let mut tool_input = None::<String>;
    while let Some(event) = stream.next().await {
        match event.expect("stream event") {
            StreamEvent::ToolDone {
                tool_name,
                input_json,
                ..
            } => {
                assert_eq!(tool_name, "Bash");
                tool_input = Some(input_json);
                break;
            }
            StreamEvent::Done { stop_reason } => {
                panic!("model finished before tool call: {stop_reason:?}");
            }
            _ => {}
        }
    }

    let input_json = tool_input.expect("expected Bash tool call");
    let input: Value = serde_json::from_str(&input_json).expect("tool input json");
    let command = input["command"].as_str().unwrap_or_default();
    assert!(
        command.contains("uname")
            || command.contains("os-release")
            || command.contains("hostnamectl"),
        "expected system-inspection command, got {command:?}"
    );
}

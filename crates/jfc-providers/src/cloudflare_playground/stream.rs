use std::time::Duration;
use std::{
    collections::HashMap,
    sync::{Arc, Mutex},
};

use curl_idk::{Easy, Impersonate, sys};
use jfc_provider::StreamEvent;

use super::wire::{BodyFrame, CloudflareStreamState, OuterFrame, translate_body_frame};

pub(super) enum StreamAction {
    ChatRequest(String),
    ToolResults { frames: Vec<String> },
}

pub(super) fn run(
    ws_url: String,
    action: StreamAction,
    session: String,
    tool_sessions: Arc<Mutex<HashMap<String, String>>>,
    tx: std::sync::mpsc::Sender<Result<StreamEvent, String>>,
) {
    let send_err = |e: String| {
        let _ = tx.send(Err(e));
    };

    let mut easy = match Easy::new() {
        Ok(e) => e,
        Err(e) => {
            send_err(format!("curl init: {e}"));
            return;
        }
    };
    if let Err(e) = easy.impersonate(Impersonate::Firefox147, true) {
        send_err(format!("impersonate: {e}"));
        return;
    }
    if let Err(e) = easy.headers([
        "Origin: https://playground.ai.cloudflare.com",
        "Sec-Fetch-Dest: empty",
        "Sec-Fetch-Mode: websocket",
        "Sec-Fetch-Site: same-origin",
    ]) {
        send_err(format!("headers: {e}"));
        return;
    }
    if let Err(e) = easy.ws_connect(&ws_url) {
        send_err(format!("ws_connect: {e}"));
        return;
    }

    let mut buf = Vec::new();
    for _ in 0..5 {
        match easy.ws_recv_timeout(&mut buf, Duration::from_millis(500)) {
            Ok(Some(flags)) => {
                if flags & sys::CURLWS_TEXT != 0 {
                    let text = String::from_utf8_lossy(&buf).into_owned();
                    if let Ok(frame) = serde_json::from_str::<OuterFrame>(&text)
                        && matches!(frame.kind.as_str(), "cf_agent_chat_messages")
                    {
                        break;
                    }
                }
            }
            Ok(None) => break,
            Err(_) => break,
        }
    }

    match action {
        StreamAction::ChatRequest(envelope_json) => {
            if let Err(e) = easy.ws_send_text(envelope_json.as_bytes()) {
                send_err(format!("ws_send: {e}"));
                return;
            }
        }
        StreamAction::ToolResults { frames } => {
            for frame in frames {
                if let Err(e) = easy.ws_send_text(frame.as_bytes()) {
                    send_err(format!("ws_send_tool_result: {e}"));
                    return;
                }
            }
            if let Err(e) = easy.ws_send_text(br#"{"type":"cf_agent_stream_resume_request"}"#) {
                send_err(format!("ws_send_resume_request: {e}"));
                return;
            }
        }
    }

    let mut state = CloudflareStreamState::default();

    loop {
        let flags = match easy.ws_recv(&mut buf) {
            Ok(flags) => flags,
            Err(e) => {
                send_err(format!("ws_recv: {e}"));
                return;
            }
        };

        if flags & sys::CURLWS_CLOSE != 0 {
            break;
        }
        if flags & sys::CURLWS_PING != 0 {
            let _ = tx.send(Ok(StreamEvent::Keepalive));
            continue;
        }
        if flags & sys::CURLWS_TEXT == 0 {
            continue;
        }

        let Ok(text) = std::str::from_utf8(&buf) else {
            continue;
        };
        let Ok(outer) = serde_json::from_str::<OuterFrame>(text) else {
            continue;
        };

        match outer.kind.as_str() {
            "cf_agent_stream_resuming" => {
                if let Some(id) = outer.id {
                    let ack = serde_json::json!({
                        "type": "cf_agent_stream_resume_ack",
                        "id": id,
                    })
                    .to_string();
                    if let Err(e) = easy.ws_send_text(ack.as_bytes()) {
                        send_err(format!("ws_send_resume_ack: {e}"));
                        return;
                    }
                }
            }
            "cf_agent_stream_resume_none" => break,
            "cf_agent_use_chat_response" => {
                let Some(raw) = outer.body else {
                    continue;
                };
                let Ok(frame) = serde_json::from_str::<BodyFrame>(&raw) else {
                    continue;
                };
                let done = outer.done.unwrap_or(false);
                let events = translate_body_frame(frame, &mut state);
                let has_done = events
                    .iter()
                    .any(|event| matches!(event, StreamEvent::Done { .. }));

                for event in events {
                    if let StreamEvent::ToolDone { tool_use_id, .. } = &event
                        && let Ok(mut sessions) = tool_sessions.lock()
                    {
                        sessions.insert(tool_use_id.clone(), session.clone());
                    }
                    if tx.send(Ok(event)).is_err() {
                        return;
                    }
                }
                if done || has_done {
                    break;
                }
            }
            "cf_agent_chat_messages" => break,
            _ => {
                let _ = tx.send(Ok(StreamEvent::Keepalive));
            }
        }
    }

    let _ = easy.ws_close();
}

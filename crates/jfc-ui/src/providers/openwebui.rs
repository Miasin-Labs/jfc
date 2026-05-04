use std::path::PathBuf;

use async_trait::async_trait;
use eventsource_stream::Eventsource;
use futures::{StreamExt, TryStreamExt};
use serde::Deserialize;
use serde_json::{json, Value};

use crate::provider::{
    EventStream, Provider, ProviderContent, ProviderMessage, ProviderRole, StopReason,
    StreamEvent, StreamOptions,
};

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
struct Account {
    name: String,
    base_url: String,
    token: String,
    disabled: Option<bool>,
}

#[derive(Debug, Deserialize)]
struct AccountStore {
    accounts: std::collections::HashMap<String, Account>,
    current: Option<String>,
}

fn default_store_path() -> PathBuf {
    dirs::home_dir()
        .unwrap_or_else(|| PathBuf::from("/"))
        .join(".config/jfc/openwebui-accounts.json")
}

fn load_account(path: &PathBuf) -> anyhow::Result<Account> {
    let raw = std::fs::read_to_string(path)?;
    let store: AccountStore = serde_json::from_str(&raw)?;

    if let Some(name) = &store.current {
        if let Some(acct) = store.accounts.get(name) {
            if !acct.disabled.unwrap_or(false) {
                return Ok(acct.clone());
            }
        }
    }

    store
        .accounts
        .values()
        .find(|a| !a.disabled.unwrap_or(false))
        .cloned()
        .ok_or_else(|| anyhow::anyhow!("no enabled OpenWebUI accounts in store"))
}

pub struct OpenWebUIProvider {
    client: reqwest::Client,
    store_path: PathBuf,
}

impl OpenWebUIProvider {
    pub fn new() -> Self {
        Self {
            client: reqwest::Client::new(),
            store_path: default_store_path(),
        }
    }
}

// OpenAI-compatible SSE delta shapes
#[derive(Debug, Deserialize)]
struct ChatChunk {
    choices: Vec<ChunkChoice>,
}

#[derive(Debug, Deserialize)]
struct ChunkChoice {
    delta: ChunkDelta,
    finish_reason: Option<String>,
}

#[derive(Debug, Deserialize)]
struct ChunkDelta {
    content: Option<String>,
    reasoning_content: Option<String>,
}

fn build_body(messages: Vec<ProviderMessage>, opts: &StreamOptions) -> Value {
    let msgs: Vec<Value> = messages
        .iter()
        .flat_map(|m| {
            m.content.iter().filter_map(|c| match c {
                ProviderContent::Text(t) if !t.is_empty() => Some(json!({
                    "role": match m.role {
                        ProviderRole::User => "user",
                        ProviderRole::Assistant => "assistant",
                    },
                    "content": t,
                })),
                _ => None,
            })
        })
        .collect();

    let mut body = json!({
        "model": opts.model,
        "max_tokens": opts.max_tokens,
        "stream": true,
        "messages": msgs,
    });

    if let Some(sys) = &opts.system {
        let mut full = vec![json!({ "role": "system", "content": sys })];
        full.extend(body["messages"].as_array().cloned().unwrap_or_default());
        body["messages"] = json!(full);
    }

    body
}

#[async_trait]
impl Provider for OpenWebUIProvider {
    fn name(&self) -> &str {
        "openwebui"
    }

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        let account = load_account(&self.store_path).map_err(|e| {
            anyhow::anyhow!(
                "cannot load openwebui accounts from {}: {e}",
                self.store_path.display()
            )
        })?;

        let base_url = account.base_url.trim_end_matches('/');
        let url = format!("{}/api/chat/completions", base_url);
        let body = build_body(messages, options);

        let resp = self
            .client
            .post(&url)
            .header("authorization", format!("Bearer {}", account.token))
            .header("content-type", "application/json")
            .json(&body)
            .send()
            .await?;

        if !resp.status().is_success() {
            let status = resp.status();
            let text = resp.text().await.unwrap_or_default();
            anyhow::bail!("OpenWebUI API error {status}: {text}");
        }

        let byte_stream = resp
            .bytes_stream()
            .map_err(|e| std::io::Error::new(std::io::ErrorKind::Other, e));

        // OpenAI-compatible SSE: data: {...}\n\ndata: [DONE]\n\n
        // All content arrives in choices[0].delta.content deltas.
        let event_stream = byte_stream
            .eventsource()
            .scan(
                (String::new(), None::<StopReason>),
                |state, result| {
                    let (accumulated, stop_reason) = state;
                    let out = result.ok().and_then(|ev| {
                        if ev.data == "[DONE]" || ev.data.is_empty() {
                            let sr = stop_reason.take().unwrap_or(StopReason::EndTurn);
                            return Some(Ok(StreamEvent::Done { stop_reason: sr }));
                        }
                        match serde_json::from_str::<ChatChunk>(&ev.data) {
                            Ok(chunk) => {
                                let choice = chunk.choices.into_iter().next()?;

                                if let Some(reason) = &choice.finish_reason {
                                    *stop_reason = Some(match reason.as_str() {
                                        "stop" => StopReason::EndTurn,
                                        "length" => StopReason::MaxTokens,
                                        "tool_calls" => StopReason::ToolUse,
                                        other => StopReason::Other(other.to_owned()),
                                    });
                                }

                                if let Some(thinking) = choice.delta.reasoning_content {
                                    if !thinking.is_empty() {
                                        return Some(Ok(StreamEvent::ThinkingDelta {
                                            index: 0,
                                            delta: thinking,
                                        }));
                                    }
                                }

                                if let Some(text) = choice.delta.content {
                                    if !text.is_empty() {
                                        accumulated.push_str(&text);
                                        return Some(Ok(StreamEvent::TextDelta {
                                            index: 0,
                                            delta: text,
                                        }));
                                    }
                                }

                                None
                            }
                            Err(e) => Some(Err(anyhow::anyhow!("SSE parse error: {e}"))),
                        }
                    });
                    futures::future::ready(Some(out))
                },
            )
            .filter_map(|x| futures::future::ready(x));

        Ok(Box::pin(event_stream))
    }
}

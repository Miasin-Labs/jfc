use async_trait::async_trait;
use serde_json::json;

use crate::provider::{
    EventStream, Provider, ProviderMessage, StreamOptions,
};

use super::sse;

const API_URL: &str = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION: &str = "2023-06-01";
const ANTHROPIC_BETA: &str = "interleaved-thinking-2025-05-14";

pub struct AnthropicProvider {
    client: reqwest::Client,
    api_key: String,
}

impl AnthropicProvider {
    pub fn new(api_key: impl Into<String>) -> Self {
        Self {
            client: reqwest::Client::new(),
            api_key: api_key.into(),
        }
    }
}

fn build_body(messages: Vec<ProviderMessage>, opts: &StreamOptions) -> serde_json::Value {
    let mut body = json!({
        "model": opts.model,
        "max_tokens": opts.max_tokens,
        "stream": true,
        "messages": sse::build_messages(&messages),
    });

    if let Some(sys) = &opts.system {
        body["system"] = json!(sys);
    }

    if !opts.tools.is_empty() {
        body["tools"] = sse::build_tools(&opts.tools);
    }

    if let Some(budget) = opts.thinking_budget {
        body["thinking"] = json!({
            "type": "enabled",
            "budget_tokens": budget,
        });
    }

    body
}

#[async_trait]
impl Provider for AnthropicProvider {
    fn name(&self) -> &str {
        "anthropic"
    }

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        let body = build_body(messages, options);

        let resp = self
            .client
            .post(API_URL)
            .header("x-api-key", &self.api_key)
            .header("anthropic-version", ANTHROPIC_VERSION)
            .header("anthropic-beta", ANTHROPIC_BETA)
            .header("content-type", "application/json")
            .json(&body)
            .send()
            .await?;

        if !resp.status().is_success() {
            let status = resp.status();
            let text = resp.text().await.unwrap_or_default();
            anyhow::bail!("Anthropic API error {status}: {text}");
        }

        Ok(sse::into_event_stream(resp))
    }
}

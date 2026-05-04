use async_trait::async_trait;
use serde_json::json;

use crate::provider::{
    EventStream, ModelInfo, Provider, ProviderMessage, StreamConvention, StreamOptions,
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

    fn stream_convention(&self) -> StreamConvention {
        StreamConvention::AnthropicNative
    }

    fn available_models(&self) -> Vec<ModelInfo> {
        super::anthropic_models::anthropic_first_party_models("anthropic")
    }

    async fn fetch_models(&self) -> anyhow::Result<Vec<ModelInfo>> {
        // Prefer the live models.dev catalog so we pick up new Anthropic models the
        // moment they ship. Fall back to the embedded canonical list when the network
        // is unavailable (offline / corp proxy / models.dev down).
        match super::models_dev::fetch_provider_models(&self.client, "anthropic", "anthropic").await
        {
            Ok(m) if !m.is_empty() => Ok(m),
            _ => Ok(self.available_models()),
        }
    }

    #[tracing::instrument(
        target = "jfc::provider::anthropic",
        skip_all,
        fields(
            model = %options.model,
            messages = messages.len(),
            tools = options.tools.len(),
        ),
        err,
    )]
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
            if let Some(model) = super::anthropic_oauth::parse_model_not_found(&text) {
                anyhow::bail!(
                    "{model} is not enabled on your Anthropic account. \
                     Pin a model you have access to (Ctrl+M)."
                );
            }
            anyhow::bail!("Anthropic API error {status}: {text}");
        }

        Ok(sse::into_event_stream(resp))
    }
}

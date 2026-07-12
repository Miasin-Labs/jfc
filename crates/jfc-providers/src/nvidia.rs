use async_trait::async_trait;

use jfc_provider::{
    CompletionResponse, EventStream, ModelId, ModelInfo, Provider, ProviderId, ProviderMessage,
    StreamConvention, StreamOptions,
};

mod body;
mod credentials;
mod types;

use body::nvidia_chat_body;
use credentials::nvidia_credentials;
use types::{ChatCompletion, ModelsResponse};

const PROVIDER_NAME: &str = "nvidia";

pub struct NvidiaProvider {
    client: reqwest::Client,
    api_key: String,
    base_url: String,
}

impl NvidiaProvider {
    pub fn from_env() -> Option<Self> {
        let credentials = nvidia_credentials()?;
        let api_key = credentials.api_key;
        let base_url = credentials.base_url;

        Some(Self {
            client: jfc_provider::http::streaming_client(),
            api_key,
            base_url,
        })
    }

    pub fn new(api_key: impl Into<String>, base_url: impl Into<String>) -> Self {
        Self {
            client: jfc_provider::http::streaming_client(),
            api_key: api_key.into(),
            base_url: base_url.into().trim_end_matches('/').to_owned(),
        }
    }

    pub fn fallback_models() -> Vec<ModelInfo> {
        [
            (
                "nvidia/nemotron-nano-12b-v2-vl",
                "Nemotron Nano 12B v2 VL",
                Some(128_000),
                Some(4_096),
            ),
            ("minimaxai/minimax-m3", "MiniMax M3", None, None),
            ("qwen/qwen3.5-397b-a17b", "Qwen3.5 397B A17B", None, None),
            ("moonshotai/kimi-k2.6", "Kimi K2.6", None, None),
            ("zhipuai/glm-5.1", "GLM 5.1", None, None),
            (
                "deepseek/deepseek-v4-flash",
                "DeepSeek V4 Flash",
                None,
                None,
            ),
        ]
        .into_iter()
        .map(|(id, display, context, output)| {
            ModelInfo::new(ModelId::new(id), display, ProviderId::new(PROVIDER_NAME))
                .with_context_window_tokens(context)
                .with_max_output_tokens(output)
        })
        .collect()
    }

    pub(super) fn chat_url(&self) -> String {
        format!("{}/chat/completions", self.base_url)
    }

    fn models_url(&self) -> String {
        format!("{}/models", self.base_url)
    }

    fn request_headers(&self, builder: reqwest::RequestBuilder) -> reqwest::RequestBuilder {
        builder
            .bearer_auth(&self.api_key)
            .header("Accept", "application/json")
            .header("Content-Type", "application/json")
    }
}

impl jfc_provider::seal::Sealed for NvidiaProvider {}

#[async_trait]
impl Provider for NvidiaProvider {
    fn name(&self) -> &str {
        PROVIDER_NAME
    }

    fn available_models(&self) -> Vec<ModelInfo> {
        Self::fallback_models()
    }

    fn stream_convention(&self) -> StreamConvention {
        StreamConvention::OpenAiNative
    }

    fn http_client(&self) -> Option<reqwest::Client> {
        Some(self.client.clone())
    }

    fn warmup_url(&self) -> Option<String> {
        reqwest::Url::parse(&self.base_url)
            .ok()
            .map(|url| url.origin().ascii_serialization())
    }

    async fn fetch_models(&self) -> anyhow::Result<Vec<ModelInfo>> {
        let url = self.models_url();
        let resp = match jfc_provider::http::send_with_retry("nvidia.models", || {
            self.request_headers(self.client.get(&url))
                .timeout(std::time::Duration::from_secs(10))
                .send()
        })
        .await
        {
            Ok(resp) => resp,
            Err(error) => {
                let cause = jfc_provider::http::classify_send_error(&error);
                return Err(jfc_provider::ProviderError::network(
                    PROVIDER_NAME,
                    format!("request failed: {cause} ({error})"),
                )
                .into());
            }
        };
        let resp = checked_response(resp).await?;
        let body: ModelsResponse = resp.json().await?;
        let mut models = body
            .data
            .into_iter()
            .map(|model| {
                let display = model.name.unwrap_or_else(|| model.id.clone());
                ModelInfo::new(model.id, display, PROVIDER_NAME)
                    .with_context_window_tokens(model.context_length)
                    .with_max_output_tokens(model.max_tokens)
            })
            .collect::<Vec<_>>();
        models.sort_by(|left, right| left.id.as_str().cmp(right.id.as_str()));
        if models.is_empty() {
            return Ok(Self::fallback_models());
        }
        Ok(models)
    }

    #[tracing::instrument(
        target = "jfc::provider::nvidia",
        skip_all,
        fields(model = %options.model, messages = messages.len(), tools = options.tools.len()),
        err,
    )]
    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        let url = self.chat_url();
        let body = nvidia_chat_body(messages, options, true);
        let send_started = std::time::Instant::now();
        let resp = match jfc_provider::http::send_with_retry("nvidia.chat/completions", || {
            self.request_headers(self.client.post(&url))
                .json(&body)
                .send()
        })
        .await
        {
            Ok(resp) => resp,
            Err(error) => {
                let cause = jfc_provider::http::classify_send_error(&error);
                return Err(jfc_provider::ProviderError::network(
                    PROVIDER_NAME,
                    format!("request to {url} failed: {cause} ({error})"),
                )
                .into());
            }
        };
        jfc_provider::http::report_first_byte_latency(
            "nvidia.chat/completions",
            send_started.elapsed(),
        );
        let resp = checked_response(resp).await?;
        Ok(super::openwebui::openai_compatible_event_stream(resp))
    }

    async fn complete(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<CompletionResponse> {
        let url = self.chat_url();
        let body = nvidia_chat_body(messages, options, false);
        let resp = match jfc_provider::http::send_with_retry("nvidia.chat.complete", || {
            self.request_headers(self.client.post(&url))
                .json(&body)
                .send()
        })
        .await
        {
            Ok(resp) => resp,
            Err(error) => {
                let cause = jfc_provider::http::classify_send_error(&error);
                return Err(jfc_provider::ProviderError::network(
                    PROVIDER_NAME,
                    format!("request to {url} failed: {cause} ({error})"),
                )
                .into());
            }
        };
        let resp = checked_response(resp).await?;
        let body: ChatCompletion = resp.json().await?;

        Ok(CompletionResponse {
            content: body
                .choices
                .first()
                .and_then(|choice| choice.message.content.clone())
                .unwrap_or_default(),
            usage: body.usage.unwrap_or_default().into(),
            context_signals: None,
            reasoning: None,
        })
    }
}

async fn checked_response(resp: reqwest::Response) -> anyhow::Result<reqwest::Response> {
    let status = resp.status();
    if status.is_success() {
        return Ok(resp);
    }
    let text = resp.text().await.unwrap_or_default();
    Err(jfc_provider::ProviderError::api_status(PROVIDER_NAME, status.as_u16(), text).into())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn fallback_models_include_nemotron_vl_normal() {
        let models = NvidiaProvider::fallback_models();

        assert!(models.iter().any(|model| {
            model.id.as_str() == "nvidia/nemotron-nano-12b-v2-vl"
                && model.provider.as_str() == "nvidia"
        }));
    }
}

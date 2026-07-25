use async_trait::async_trait;

use jfc_provider::{
    EventStream, ModelId, ModelInfo, Provider, ProviderId, ProviderMessage, StreamConvention,
    StreamOptions,
};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AnthropicGatewayKind {
    Foundry,
    AnthropicAws,
    Mantle,
}

impl AnthropicGatewayKind {
    pub fn provider_id(self) -> &'static str {
        match self {
            Self::Foundry => "foundry",
            Self::AnthropicAws => "anthropic-aws",
            Self::Mantle => "mantle",
        }
    }

    fn display_name(self) -> &'static str {
        match self {
            Self::Foundry => "Foundry",
            Self::AnthropicAws => "Anthropic AWS",
            Self::Mantle => "Mantle",
        }
    }

    fn model_id(self, metadata: jfc_provider::AnthropicModelMetadata) -> Option<&'static str> {
        match self {
            Self::Foundry => metadata.provider_ids.foundry,
            Self::AnthropicAws => metadata.provider_ids.anthropic_aws,
            Self::Mantle => metadata.provider_ids.mantle,
        }
    }
}

#[derive(Clone)]
enum GatewayAuth {
    ApiKey(String),
    Bearer(String),
    None,
}

pub struct AnthropicGatewayProvider {
    kind: AnthropicGatewayKind,
    client: reqwest::Client,
    base_url: String,
    auth: GatewayAuth,
    workspace_id: Option<String>,
}

impl AnthropicGatewayProvider {
    pub fn from_env(kind: AnthropicGatewayKind) -> Option<Self> {
        let region = std::env::var("AWS_REGION")
            .ok()
            .or_else(|| std::env::var("AWS_DEFAULT_REGION").ok());
        let (base_url, auth, workspace_id, explicit) = match kind {
            AnthropicGatewayKind::Foundry => {
                let base = std::env::var("ANTHROPIC_FOUNDRY_BASE_URL")
                    .ok()
                    .or_else(|| {
                        std::env::var("ANTHROPIC_FOUNDRY_RESOURCE")
                            .ok()
                            .map(|resource| {
                                format!("https://{resource}.services.ai.azure.com/anthropic")
                            })
                    })?;
                let auth = std::env::var("ANTHROPIC_FOUNDRY_AUTH_TOKEN")
                    .ok()
                    .map(GatewayAuth::Bearer)
                    .or_else(|| {
                        std::env::var("ANTHROPIC_FOUNDRY_API_KEY")
                            .ok()
                            .map(GatewayAuth::ApiKey)
                    })
                    .unwrap_or(GatewayAuth::None);
                (base, auth, None, env_flag("CLAUDE_CODE_USE_FOUNDRY"))
            }
            AnthropicGatewayKind::AnthropicAws => {
                let base = std::env::var("ANTHROPIC_AWS_BASE_URL").ok().or_else(|| {
                    region
                        .as_deref()
                        .map(|region| format!("https://aws-external-anthropic.{region}.api.aws"))
                })?;
                let auth = std::env::var("ANTHROPIC_AWS_API_KEY")
                    .ok()
                    .map(GatewayAuth::ApiKey)
                    .unwrap_or(GatewayAuth::None);
                (
                    base,
                    auth,
                    std::env::var("ANTHROPIC_AWS_WORKSPACE_ID").ok(),
                    env_flag("CLAUDE_CODE_USE_ANTHROPIC_AWS"),
                )
            }
            AnthropicGatewayKind::Mantle => {
                let base = std::env::var("ANTHROPIC_BEDROCK_MANTLE_BASE_URL")
                    .ok()
                    .or_else(|| {
                        region.as_deref().map(|region| {
                            format!("https://bedrock-mantle.{region}.api.aws/anthropic")
                        })
                    })?;
                let auth = std::env::var("ANTHROPIC_BEDROCK_MANTLE_API_KEY")
                    .ok()
                    .or_else(|| std::env::var("AWS_BEARER_TOKEN_BEDROCK").ok())
                    .map(GatewayAuth::Bearer)
                    .unwrap_or(GatewayAuth::None);
                (base, auth, None, env_flag("CLAUDE_CODE_USE_MANTLE"))
            }
        };

        let skip_auth = match kind {
            AnthropicGatewayKind::Foundry => env_flag("CLAUDE_CODE_SKIP_FOUNDRY_AUTH"),
            AnthropicGatewayKind::AnthropicAws => env_flag("CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH"),
            AnthropicGatewayKind::Mantle => env_flag("CLAUDE_CODE_SKIP_MANTLE_AUTH"),
        };
        if !explicit && matches!(auth, GatewayAuth::None) && !skip_auth {
            return None;
        }

        Some(Self {
            kind,
            client: jfc_provider::http::streaming_client(),
            base_url: base_url.trim_end_matches('/').to_owned(),
            auth: if skip_auth { GatewayAuth::None } else { auth },
            workspace_id,
        })
    }

    pub fn kind(&self) -> AnthropicGatewayKind {
        self.kind
    }

    pub fn fallback_models(kind: AnthropicGatewayKind) -> Vec<ModelInfo> {
        jfc_provider::anthropic_model_catalog()
            .iter()
            .rev()
            .filter_map(|metadata| {
                let id = kind.model_id(*metadata)?;
                Some(
                    ModelInfo::new(
                        ModelId::new(id),
                        format!("Claude {} ({})", metadata.display_name, kind.display_name()),
                        ProviderId::new(kind.provider_id()),
                    )
                    .with_context_window_tokens(metadata.context_window_tokens)
                    .with_max_output_tokens(metadata.max_output_tokens as usize)
                    .with_costs(Some(metadata.input_cost), Some(metadata.output_cost)),
                )
            })
            .collect()
    }

    fn messages_url(&self) -> String {
        format!("{}/v1/messages", self.base_url)
    }
}

impl jfc_provider::seal::Sealed for AnthropicGatewayProvider {}

#[async_trait]
impl Provider for AnthropicGatewayProvider {
    fn name(&self) -> &str {
        self.kind.provider_id()
    }

    fn available_models(&self) -> Vec<ModelInfo> {
        Self::fallback_models(self.kind)
    }

    fn stream_convention(&self) -> StreamConvention {
        StreamConvention::AnthropicNative
    }

    fn http_client(&self) -> Option<reqwest::Client> {
        Some(self.client.clone())
    }

    fn warmup_url(&self) -> Option<String> {
        Some(self.base_url.clone())
    }

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        let mapped_model = jfc_provider::anthropic_model_metadata(&options.model)
            .and_then(|metadata| self.kind.model_id(*metadata))
            .map(str::to_owned)
            .unwrap_or_else(|| {
                jfc_provider::normalize_anthropic_model_id(&options.model).into_owned()
            });
        let mut wire_options = options.clone();
        wire_options.model = ModelId::new(mapped_model);
        let body = super::anthropic::build_body(messages, &wire_options);
        let beta = super::anthropic::build_beta_header_for_body(options, &body);

        let mut request = self
            .client
            .post(self.messages_url())
            .header("anthropic-version", "2023-06-01")
            .header("anthropic-beta", beta)
            .header("content-type", "application/json")
            .json(&body);
        request = match &self.auth {
            GatewayAuth::ApiKey(key) => request.header("x-api-key", key),
            GatewayAuth::Bearer(token) => request.bearer_auth(token),
            GatewayAuth::None => request,
        };
        if let Some(workspace_id) = &self.workspace_id {
            request = request.header("anthropic-workspace-id", workspace_id);
        }
        let response = request.send().await?;
        let status = response.status();
        if !status.is_success() {
            let body = response.text().await.unwrap_or_default();
            return Err(jfc_provider::ProviderError::api_status(
                self.name(),
                status.as_u16(),
                body,
            )
            .into());
        }
        Ok(super::sse::into_event_stream(response))
    }
}

fn env_flag(name: &str) -> bool {
    std::env::var(name).ok().is_some_and(|value| {
        !value.is_empty() && value != "0" && !value.eq_ignore_ascii_case("false")
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn gateway_catalogs_use_generated_provider_ids_normal() {
        let foundry = AnthropicGatewayProvider::fallback_models(AnthropicGatewayKind::Foundry);
        assert!(foundry.iter().any(|model| model.id == "claude-sonnet-5"));
        let aws = AnthropicGatewayProvider::fallback_models(AnthropicGatewayKind::AnthropicAws);
        assert!(aws.iter().any(|model| model.id == "claude-opus-4-8"));
        let mantle = AnthropicGatewayProvider::fallback_models(AnthropicGatewayKind::Mantle);
        assert!(
            mantle
                .iter()
                .any(|model| model.id == "anthropic.claude-fable-5")
        );
    }
}

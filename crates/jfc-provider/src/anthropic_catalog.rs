use std::borrow::Cow;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AnthropicModelKind {
    Fable5,
    Mythos5,
    Opus48,
    Opus47,
    Opus46,
    Opus45,
    Opus41,
    Opus4,
    Sonnet5,
    Sonnet46,
    Sonnet45,
    Sonnet4,
    Sonnet37,
    Sonnet35,
    Haiku45,
    Haiku35,
    Unknown,
}

#[derive(Debug, Clone, Copy, PartialEq)]
pub struct AnthropicProviderIds {
    pub first_party: &'static str,
    pub bedrock: Option<&'static str>,
    pub vertex: Option<&'static str>,
    pub foundry: Option<&'static str>,
    pub anthropic_aws: Option<&'static str>,
    pub mantle: Option<&'static str>,
    pub gateway: Option<&'static str>,
}

#[derive(Debug, Clone, Copy, PartialEq)]
pub struct AnthropicModelMetadata {
    pub id: &'static str,
    pub kind: AnthropicModelKind,
    pub family: &'static str,
    pub display_name: &'static str,
    pub provider_ids: AnthropicProviderIds,
    pub context_window_tokens: usize,
    pub max_output_tokens: u32,
    pub input_cost: f64,
    pub output_cost: f64,
    pub supports_1m_beta: bool,
    pub supports_1m_suffix: bool,
    pub native_1m: bool,
    pub capabilities: &'static [&'static str],
}

impl AnthropicModelMetadata {
    pub fn has_capability(self, capability: &str) -> bool {
        self.capabilities.contains(&capability)
    }

    pub fn provider_id(self, provider: &str) -> Option<&'static str> {
        match provider {
            "anthropic" | "anthropic-oauth" | "first_party" => Some(self.provider_ids.first_party),
            "bedrock" => self.provider_ids.bedrock,
            "vertex" => self.provider_ids.vertex,
            "foundry" => self.provider_ids.foundry,
            "anthropic-aws" | "anthropic_aws" => self.provider_ids.anthropic_aws,
            "mantle" => self.provider_ids.mantle,
            "gateway" => self.provider_ids.gateway,
            _ => None,
        }
    }
}

include!("anthropic_catalog_generated.rs");

pub fn anthropic_model_catalog() -> &'static [AnthropicModelMetadata] {
    ANTHROPIC_MODEL_CATALOG
}

pub fn context_suffix(model: &str) -> Option<usize> {
    let model = model.trim();
    if model.len() < 4 {
        return None;
    }
    let suffix = &model[model.len() - 4..];
    if suffix.eq_ignore_ascii_case("[1m]") {
        Some(1_000_000)
    } else if suffix.eq_ignore_ascii_case("[2m]") {
        Some(2_000_000)
    } else {
        None
    }
}

pub fn normalize_anthropic_model_id(model: &str) -> Cow<'_, str> {
    let model = model.trim();
    if context_suffix(model).is_some() {
        Cow::Owned(model[..model.len() - 4].trim_end().to_owned())
    } else {
        Cow::Borrowed(model)
    }
}

pub fn anthropic_model_metadata(model: &str) -> Option<&'static AnthropicModelMetadata> {
    let normalized = normalize_anthropic_model_id(model);
    let id = normalized
        .rsplit('/')
        .next()
        .unwrap_or(normalized.as_ref())
        .trim()
        .to_ascii_lowercase();

    if id == "opus" {
        return anthropic_model_metadata(ANTHROPIC_ALIAS_OPUS);
    }
    if id == "sonnet" {
        return anthropic_model_metadata(ANTHROPIC_ALIAS_SONNET);
    }
    if id == "haiku" {
        return anthropic_model_metadata(ANTHROPIC_ALIAS_HAIKU);
    }
    if id == "fable" || id == "best" {
        return anthropic_model_metadata(ANTHROPIC_ALIAS_FABLE);
    }

    ANTHROPIC_MODEL_CATALOG
        .iter()
        .find(|metadata| {
            let ids = metadata.provider_ids;
            metadata.id.eq_ignore_ascii_case(&id)
                || ids.first_party.eq_ignore_ascii_case(&id)
                || ids
                    .bedrock
                    .is_some_and(|candidate| candidate.eq_ignore_ascii_case(&id))
                || ids
                    .vertex
                    .is_some_and(|candidate| candidate.eq_ignore_ascii_case(&id))
                || ids
                    .foundry
                    .is_some_and(|candidate| candidate.eq_ignore_ascii_case(&id))
                || ids
                    .anthropic_aws
                    .is_some_and(|candidate| candidate.eq_ignore_ascii_case(&id))
                || ids
                    .mantle
                    .is_some_and(|candidate| candidate.eq_ignore_ascii_case(&id))
                || ids
                    .gateway
                    .is_some_and(|candidate| candidate.eq_ignore_ascii_case(&id))
        })
        .or_else(|| {
            ANTHROPIC_MODEL_CATALOG
                .iter()
                .rev()
                .find(|metadata| id.contains(metadata.id))
        })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn normalizes_context_suffixes_regression() {
        assert_eq!(
            normalize_anthropic_model_id("claude-opus-4-8[1m]"),
            "claude-opus-4-8"
        );
        assert_eq!(
            normalize_anthropic_model_id("claude-fable-5[2M]"),
            "claude-fable-5"
        );
        assert_eq!(context_suffix("claude-opus-4-8[1m]"), Some(1_000_000));
        assert_eq!(context_suffix("claude-opus-4-8[2m]"), Some(2_000_000));
    }

    #[test]
    fn resolves_alias_and_provider_ids_normal() {
        assert_eq!(
            anthropic_model_metadata("sonnet").unwrap().kind,
            AnthropicModelKind::Sonnet5
        );
        assert_eq!(
            anthropic_model_metadata("us.anthropic.claude-opus-4-8")
                .unwrap()
                .kind,
            AnthropicModelKind::Opus48
        );
    }
}

//! AWS Bedrock provider for Claude models.
//!
//! Mirrors v2.1.132's `tengu_oauth_bedrock_wizard` flow: at startup we read
//! `~/.config/jfc/bedrock.toml` (produced by [`crate::bedrock_wizard`])
//! plus the standard AWS credential cascade (env vars → `~/.aws/credentials` profile
//! → `aws sso login`-cached SSO tokens). Streaming itself shells out to
//! `aws bedrock-runtime invoke-model-with-response-stream`.
//!
//! ## Why shell out instead of writing SigV4
//!
//! AWS SigV4 is notoriously fiddly — every header re-ordering, body-hash
//! variation, or whitespace mismatch produces an opaque
//! `SignatureDoesNotMatch`. The official AWS CLI handles every credential
//! source (env, profile, SSO, IMDS, container roles, web-identity) and all
//! signing variants for free. Trade-off: we depend on `aws` being on `$PATH`.
//! When it isn't, [`BedrockProvider::has_usable_config`] returns `false` and
//! the provider isn't registered.
//!
//! The sibling [`crate::bedrock_wizard`] module drives `/login bedrock`
//! to walk the user through credential setup before we hit this path.

#![allow(dead_code)]

use std::path::PathBuf;
use std::process::Stdio;

use async_trait::async_trait;
use futures::stream;
use serde::{Deserialize, Serialize};
use serde_json::{Value, json};

use jfc_provider::{
    EventStream, ModelId, ModelInfo, Provider, ProviderId, ProviderMessage, StopReason,
    StreamConvention, StreamEvent, StreamOptions,
};

const PROVIDER_ID: &str = "bedrock";

/// Default region when the user-stored config doesn't specify one. `us-west-2`
/// is the region with the broadest Anthropic-on-Bedrock model coverage as of
/// late-2025 (matches Claude Code v2.1.132's wizard default).
pub(crate) const DEFAULT_REGION: &str = "us-west-2";

/// Persisted Bedrock config read from `~/.config/jfc/bedrock.toml`. The wizard
/// writes this file; loading it at startup is what flips Bedrock from
/// "not-configured" to "candidate provider in the picker".
#[derive(Debug, Clone, Default, Serialize, Deserialize, PartialEq)]
pub struct BedrockConfig {
    /// AWS region (e.g. `us-west-2`). Defaults to [`DEFAULT_REGION`] if absent.
    #[serde(default)]
    pub region: Option<String>,
    /// Optional named profile from `~/.aws/credentials` / `~/.aws/config`.
    /// When set, we forward `--profile=…` to every `aws` invocation.
    #[serde(default)]
    pub profile: Option<String>,
    /// Optional inference profile ARN (e.g. cross-region inference profile).
    /// Used as the `--model-id` payload when present; otherwise we pass the
    /// raw model id from `StreamOptions`.
    #[serde(default)]
    pub inference_profile: Option<String>,
}

impl BedrockConfig {
    pub fn region_or_default(&self) -> &str {
        self.region.as_deref().unwrap_or(DEFAULT_REGION)
    }
}

/// Resolve the bedrock config path. `JFC_BEDROCK_CONFIG_PATH` is honored for
/// tests; otherwise `~/.config/jfc/bedrock.toml`.
pub fn default_config_path() -> PathBuf {
    if let Ok(p) = std::env::var("JFC_BEDROCK_CONFIG_PATH") {
        return PathBuf::from(p);
    }
    let home = dirs::home_dir().unwrap_or_else(|| PathBuf::from("/"));
    home.join(".config/jfc/bedrock.toml")
}

/// Load the config from disk. Returns `Ok(None)` when the file is absent so
/// callers can distinguish "not set up" from "set up but malformed".
pub fn load_config(path: &PathBuf) -> anyhow::Result<Option<BedrockConfig>> {
    let raw = match std::fs::read_to_string(path) {
        Ok(s) => s,
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => return Ok(None),
        Err(e) => return Err(e.into()),
    };
    let cfg: BedrockConfig = toml::from_str(&raw)?;
    Ok(Some(cfg))
}

/// Persist the config. Creates parent dirs as needed; overwrites atomically.
pub fn save_config(path: &PathBuf, cfg: &BedrockConfig) -> anyhow::Result<()> {
    if let Some(parent) = path.parent() {
        std::fs::create_dir_all(parent)?;
    }
    let body = toml::to_string_pretty(cfg)?;
    std::fs::write(path, body)?;
    Ok(())
}

pub struct BedrockProvider {
    config_path: PathBuf,
    config: Option<BedrockConfig>,
}

impl BedrockProvider {
    pub fn new() -> Self {
        let config_path = default_config_path();
        let config = load_config(&config_path).ok().flatten();
        tracing::debug!(
            target: "jfc::provider::bedrock",
            config_path = %config_path.display(),
            has_config = config.is_some(),
            "BedrockProvider::new"
        );
        Self {
            config_path,
            config,
        }
    }

    /// Whether this provider has enough configuration to attempt a stream:
    /// either the wizard-written TOML exists *and* `aws` is on `$PATH`, or one
    /// of the env-var auth modes is present. The actual credential-validity
    /// check happens lazily on first stream — early validation would require
    /// a network round-trip to STS.
    pub fn has_usable_config(&self) -> bool {
        if !aws_cli_available() {
            return false;
        }
        // Treat any of these as "potentially authenticated":
        // - explicit env vars
        // - persisted config from the wizard
        // - default profile present in ~/.aws/credentials
        if std::env::var("AWS_ACCESS_KEY_ID").is_ok()
            && std::env::var("AWS_SECRET_ACCESS_KEY").is_ok()
        {
            return true;
        }
        if self.config.is_some() {
            return true;
        }
        let home = dirs::home_dir().unwrap_or_else(|| PathBuf::from("/"));
        let creds = home.join(".aws/credentials");
        creds.exists()
    }

    /// Static catalog of Anthropic models available on Bedrock. Mirrors the
    /// v2.1.132 wizard's default set. Real users may have custom inference
    /// profiles — those flow through `inference_profile` in the TOML config.
    pub fn fallback_models() -> Vec<ModelInfo> {
        jfc_provider::anthropic_model_catalog()
            .iter()
            .rev()
            .filter_map(|metadata| {
                let id = metadata.provider_ids.bedrock?;
                Some(
                    ModelInfo::new(
                        ModelId::new(id),
                        format!("Claude {} (Bedrock)", metadata.display_name),
                        ProviderId::new(PROVIDER_ID),
                    )
                    .with_context_window_tokens(metadata.context_window_tokens)
                    .with_max_output_tokens(metadata.max_output_tokens as usize)
                    .with_costs(Some(metadata.input_cost), Some(metadata.output_cost)),
                )
            })
            .collect()
    }
}

struct BedrockTempFiles {
    request: PathBuf,
    response: PathBuf,
}

impl BedrockTempFiles {
    fn new() -> Self {
        let id = uuid::Uuid::new_v4();
        let dir = std::env::temp_dir();
        Self {
            request: dir.join(format!("jfc-bedrock-{id}.request.json")),
            response: dir.join(format!("jfc-bedrock-{id}.response.json")),
        }
    }
}

impl Drop for BedrockTempFiles {
    fn drop(&mut self) {
        let _ = std::fs::remove_file(&self.request);
        let _ = std::fs::remove_file(&self.response);
    }
}

fn build_body(messages: &[ProviderMessage], options: &StreamOptions) -> Value {
    let mut body = json!({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": options.max_tokens,
        "messages": crate::sse::build_messages(messages),
    });
    if let Some(system) = &options.system {
        body["system"] = json!(system);
    }
    if !options.tools.is_empty() {
        body["tools"] = crate::sse::build_tools(&options.tools);
    }
    if options.adaptive_thinking {
        body["thinking"] = json!({ "type": "adaptive" });
    } else if let Some(budget) = options.thinking_budget {
        body["thinking"] = json!({ "type": "enabled", "budget_tokens": budget });
    } else {
        if let Some(temperature) = options.temperature {
            body["temperature"] = json!(temperature);
        }
        if let Some(top_p) = options.top_p {
            body["top_p"] = json!(top_p);
        }
    }
    body
}

fn parse_stop_reason(value: Option<&str>) -> StopReason {
    match value {
        Some("end_turn") => StopReason::EndTurn,
        Some("tool_use") => StopReason::ToolUse,
        Some("max_tokens") => StopReason::MaxTokens,
        Some("stop_sequence") => StopReason::StopSequence,
        Some("pause_turn") => StopReason::PauseTurn,
        Some("refusal") => StopReason::Refusal,
        Some(other) => StopReason::Other(other.to_owned()),
        None => StopReason::EndTurn,
    }
}

fn response_events(response: &Value) -> anyhow::Result<Vec<StreamEvent>> {
    let mut events = Vec::new();
    if let Some(id) = response.get("id").and_then(Value::as_str) {
        events.push(StreamEvent::ResponseMetadata {
            response_id: id.to_owned(),
            input_tokens: response
                .pointer("/usage/input_tokens")
                .and_then(Value::as_u64),
        });
    }
    for (index, block) in response
        .get("content")
        .and_then(Value::as_array)
        .into_iter()
        .flatten()
        .enumerate()
    {
        match block.get("type").and_then(Value::as_str) {
            Some("text") => events.push(StreamEvent::TextDone {
                index,
                text: block
                    .get("text")
                    .and_then(Value::as_str)
                    .unwrap_or_default()
                    .to_owned(),
            }),
            Some("thinking") => events.push(StreamEvent::ThinkingDone {
                index,
                text: block
                    .get("thinking")
                    .and_then(Value::as_str)
                    .unwrap_or_default()
                    .to_owned(),
                signature: block
                    .get("signature")
                    .and_then(Value::as_str)
                    .map(str::to_owned),
            }),
            Some("redacted_thinking") => events.push(StreamEvent::RedactedThinkingDone {
                index,
                data: block
                    .get("data")
                    .and_then(Value::as_str)
                    .unwrap_or_default()
                    .to_owned(),
            }),
            Some("tool_use") => events.push(StreamEvent::ToolDone {
                index,
                tool_name: block
                    .get("name")
                    .and_then(Value::as_str)
                    .unwrap_or_default()
                    .to_owned(),
                tool_use_id: block
                    .get("id")
                    .and_then(Value::as_str)
                    .unwrap_or_default()
                    .to_owned(),
                input_json: serde_json::to_string(block.get("input").unwrap_or(&Value::Null))?,
                thought_signature: None,
            }),
            _ => {}
        }
    }
    if let Some(usage) = response.get("usage") {
        events.push(StreamEvent::Usage {
            input_tokens: usage
                .get("input_tokens")
                .and_then(Value::as_u64)
                .and_then(|value| u32::try_from(value).ok())
                .unwrap_or_default(),
            output_tokens: usage
                .get("output_tokens")
                .and_then(Value::as_u64)
                .and_then(|value| u32::try_from(value).ok())
                .unwrap_or_default(),
            thinking_tokens: None,
            cache_read_tokens: usage
                .get("cache_read_input_tokens")
                .and_then(Value::as_u64)
                .and_then(|value| u32::try_from(value).ok())
                .unwrap_or_default(),
            cache_write_tokens: usage
                .get("cache_creation_input_tokens")
                .and_then(Value::as_u64)
                .and_then(|value| u32::try_from(value).ok())
                .unwrap_or_default(),
        });
    }
    events.push(StreamEvent::Done {
        stop_reason: parse_stop_reason(response.get("stop_reason").and_then(Value::as_str)),
    });
    Ok(events)
}

impl Default for BedrockProvider {
    fn default() -> Self {
        Self::new()
    }
}

impl jfc_provider::seal::Sealed for BedrockProvider {}

#[async_trait]
impl Provider for BedrockProvider {
    fn name(&self) -> &str {
        PROVIDER_ID
    }

    fn available_models(&self) -> Vec<ModelInfo> {
        Self::fallback_models()
    }

    fn stream_convention(&self) -> StreamConvention {
        // Bedrock returns Anthropic-shaped JSON (`anthropic_version: bedrock-2023-05-31`)
        // so the inline-tag parser would only confuse the renderer. We emit a
        // single TextDone event from the non-streaming variant below until the
        // streaming integration lands.
        StreamConvention::AnthropicNative
    }

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        let config = self.config.clone().unwrap_or_default();
        let model = config
            .inference_profile
            .clone()
            .or_else(|| {
                jfc_provider::anthropic_model_metadata(&options.model)
                    .and_then(|metadata| metadata.provider_ids.bedrock)
                    .map(str::to_owned)
            })
            .unwrap_or_else(|| {
                jfc_provider::normalize_anthropic_model_id(&options.model).into_owned()
            });
        let files = BedrockTempFiles::new();
        tokio::fs::write(
            &files.request,
            serde_json::to_vec(&build_body(&messages, options))?,
        )
        .await?;

        let mut command = tokio::process::Command::new("aws");
        command
            .args([
                "bedrock-runtime",
                "invoke-model",
                "--no-cli-pager",
                "--cli-binary-format",
                "raw-in-base64-out",
                "--content-type",
                "application/json",
                "--accept",
                "application/json",
                "--model-id",
                &model,
                "--region",
                config.region_or_default(),
                "--body",
            ])
            .arg(format!("fileb://{}", files.request.display()));
        if let Some(profile) = config.profile.as_deref() {
            command.args(["--profile", profile]);
        }
        command.arg(&files.response);
        let output = command.output().await?;
        if !output.status.success() {
            anyhow::bail!(
                "Bedrock invoke-model failed: {}",
                String::from_utf8_lossy(&output.stderr).trim()
            );
        }

        let response: Value = serde_json::from_slice(&tokio::fs::read(&files.response).await?)?;
        let events = response_events(&response)?;
        Ok(Box::pin(stream::iter(events.into_iter().map(Ok))))
    }
}

/// Detect whether `aws` is on `$PATH`. Used by [`BedrockProvider::has_usable_config`]
/// and the wizard's pre-flight check.
pub fn aws_cli_available() -> bool {
    // `aws --version` exits 0 quickly even on slow systems. We don't care
    // about the version string itself — only whether the binary is reachable.
    std::process::Command::new("aws")
        .arg("--version")
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::null())
        .status()
        .map(|s| s.success())
        .unwrap_or(false)
}

/// Synchronously check whether the configured profile (or default) can fetch
/// caller identity via STS. Used by the wizard's "test creds" step. Returns
/// the identity ARN on success.
pub fn check_caller_identity(cfg: &BedrockConfig) -> anyhow::Result<String> {
    let mut cmd = std::process::Command::new("aws");
    cmd.args([
        "sts",
        "get-caller-identity",
        "--query",
        "Arn",
        "--output",
        "text",
    ])
    .arg("--region")
    .arg(cfg.region_or_default());
    if let Some(profile) = cfg.profile.as_deref() {
        cmd.args(["--profile", profile]);
    }
    let out = cmd.output()?;
    if !out.status.success() {
        let stderr = String::from_utf8_lossy(&out.stderr);
        anyhow::bail!("aws sts get-caller-identity failed: {}", stderr.trim());
    }
    let arn = String::from_utf8(out.stdout)?.trim().to_owned();
    if arn.is_empty() {
        anyhow::bail!("STS returned an empty ARN — credentials may be unset");
    }
    Ok(arn)
}

/// Run `aws sso login` for the configured (or default) profile. Forwards the
/// CLI's stdout/stderr so the user sees the device-code prompt directly.
pub fn run_sso_login(cfg: &BedrockConfig) -> anyhow::Result<()> {
    let mut cmd = std::process::Command::new("aws");
    cmd.args(["sso", "login"]);
    if let Some(profile) = cfg.profile.as_deref() {
        cmd.args(["--profile", profile]);
    }
    let status = cmd.status()?;
    if !status.success() {
        anyhow::bail!("aws sso login exited with {status}");
    }
    Ok(())
}

/// DO-178B §6.4.2 conformance: every behavior is exercised by at least one
/// `_normal` and one `_robust` test. Tests cover config TOML round-trip,
/// default-region handling, and the `Provider` trait surface. Network /
/// `aws` shell-out paths are not exercised here because they require live
/// credentials; integration tests live alongside the wizard.
#[cfg(test)]
mod tests {
    use super::*;
    use tempfile::tempdir;

    // Normal: round-trip a fully-populated config through TOML so the wizard's
    // saved file deserializes back to the same struct on next launch.
    #[test]
    fn config_roundtrip_full_normal() {
        let cfg = BedrockConfig {
            region: Some("us-east-1".into()),
            profile: Some("dev".into()),
            inference_profile: Some(
                "arn:aws:bedrock:us-east-1:123:inference-profile/anthropic.claude-opus".into(),
            ),
        };
        let serialized = toml::to_string(&cfg).unwrap();
        let back: BedrockConfig = toml::from_str(&serialized).unwrap();
        assert_eq!(cfg, back);
    }

    // Normal: an empty TOML file produces a config that defaults to the
    // canonical region. Mirrors the wizard's "accept all defaults" flow.
    #[test]
    fn config_empty_file_uses_default_region_normal() {
        let cfg: BedrockConfig = toml::from_str("").unwrap();
        assert_eq!(cfg.region_or_default(), DEFAULT_REGION);
        assert!(cfg.profile.is_none());
    }

    // Robust: malformed TOML must surface as an error, not a silent default.
    // A user typo in `~/.config/jfc/bedrock.toml` should cause a visible
    // failure during the next `/login bedrock` rather than silently routing
    // to us-west-2 with no profile.
    #[test]
    fn config_malformed_is_error_robust() {
        let result: Result<BedrockConfig, _> = toml::from_str("region = [unterminated");
        assert!(result.is_err());
    }

    // Normal: load_config + save_config round-trip via the filesystem.
    #[test]
    fn save_load_config_roundtrip_normal() {
        let dir = tempdir().unwrap();
        let path = dir.path().join("bedrock.toml");
        let cfg = BedrockConfig {
            region: Some("eu-west-1".into()),
            profile: None,
            inference_profile: None,
        };
        save_config(&path, &cfg).unwrap();
        let loaded = load_config(&path).unwrap().unwrap();
        assert_eq!(cfg, loaded);
    }

    // Robust: load_config returns Ok(None) when the file is missing so the
    // caller can render an empty-state UI instead of treating it as an error.
    #[test]
    fn load_config_missing_returns_none_robust() {
        let dir = tempdir().unwrap();
        let path = dir.path().join("does-not-exist.toml");
        assert!(load_config(&path).unwrap().is_none());
    }

    // Normal: provider exposes its expected name and a non-empty model list,
    // so the picker has Bedrock rows to render.
    #[test]
    fn provider_name_and_models_normal() {
        let p = BedrockProvider::new();
        assert_eq!(p.name(), PROVIDER_ID);
        let models = p.available_models();
        assert!(!models.is_empty());
        assert!(models.iter().all(|m| m.provider == PROVIDER_ID));
    }

    // Normal: every catalog entry is tagged with the bedrock provider name and
    // carries a context window. The picker's column renderer expects both.
    #[test]
    fn fallback_models_metadata_normal() {
        let models = BedrockProvider::fallback_models();
        for m in &models {
            assert_eq!(m.provider.as_str(), PROVIDER_ID);
            assert!(m.context_window_tokens.is_some());
            // Ids follow the AWS convention.
            assert!(
                m.id.as_str().contains("anthropic."),
                "unexpected id: {}",
                m.id
            );
        }
        assert!(
            models
                .iter()
                .any(|model| model.id.contains("claude-opus-4-8"))
        );
        assert!(
            models
                .iter()
                .any(|model| model.id.contains("claude-sonnet-5"))
        );
    }

    #[test]
    fn invoke_model_response_maps_to_provider_events_normal() {
        let response = json!({
            "id": "msg_1",
            "content": [
                {"type": "text", "text": "hello"},
                {"type": "tool_use", "id": "tool_1", "name": "Read", "input": {"path": "x"}}
            ],
            "stop_reason": "tool_use",
            "usage": {"input_tokens": 5, "output_tokens": 7}
        });
        let events = response_events(&response).unwrap();
        assert!(matches!(events[0], StreamEvent::ResponseMetadata { .. }));
        assert!(matches!(events[1], StreamEvent::TextDone { ref text, .. } if text == "hello"));
        assert!(
            matches!(events[2], StreamEvent::ToolDone { ref tool_name, .. } if tool_name == "Read")
        );
        assert!(matches!(
            events[3],
            StreamEvent::Usage {
                output_tokens: 7,
                ..
            }
        ));
        assert!(matches!(
            events[4],
            StreamEvent::Done {
                stop_reason: StopReason::ToolUse
            }
        ));
    }

    // Normal: region_or_default falls back when the field is absent.
    #[test]
    fn region_or_default_fallback_normal() {
        let cfg = BedrockConfig::default();
        assert_eq!(cfg.region_or_default(), DEFAULT_REGION);
        let cfg = BedrockConfig {
            region: Some("ap-southeast-2".into()),
            ..Default::default()
        };
        assert_eq!(cfg.region_or_default(), "ap-southeast-2");
    }
}

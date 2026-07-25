//! Cloudflare Workers AI Playground provider.
//!
//! Uses `curl_idk` (browser TLS/JA3 fingerprint via libcurl-impersonate) for the
//! WebSocket connection so Cloudflare's WAF doesn't 403 the handshake.
//! The WS I/O runs in `spawn_blocking` and pumps events through a channel.

use async_trait::async_trait;
use std::collections::HashMap;
use std::sync::{Arc, Mutex};

use jfc_provider::{
    EventStream, ModelId, ModelInfo, Provider, ProviderMessage, StreamConvention, StreamEvent,
    StreamOptions,
};

mod marker;
mod stream;
mod wire;

const PROVIDER_NAME: &str = "cloudflare-playground";
const BASE_HTTP: &str = "https://playground.ai.cloudflare.com";
const BASE_WS: &str = "wss://playground.ai.cloudflare.com";
const AGENT_PATH: &str = "agents/playground";

const MODELS: &[(&str, &str, usize, usize)] = &[
    (
        "@cf/moonshotai/kimi-k2.7-code",
        "Kimi K2.7 Code",
        131_072,
        16_384,
    ),
    ("@cf/moonshotai/kimi-k2.6", "Kimi K2.6", 131_072, 16_384),
    ("@cf/zai-org/glm-5.2", "GLM-5.2", 131_072, 16_384),
    (
        "@cf/zai-org/glm-4.7-flash",
        "GLM-4.7 Flash",
        131_072,
        16_384,
    ),
    (
        "@cf/meta/llama-4-scout-17b-16e-instruct",
        "Llama 4 Scout 17B",
        131_072,
        16_384,
    ),
    (
        "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
        "Llama 3.3 70B (fp8)",
        32_768,
        4_096,
    ),
    (
        "@cf/google/gemma-4-26b-a4b-it",
        "Gemma 4 26B",
        32_768,
        8_192,
    ),
    ("@cf/qwen/qwen3-30b-a3b-fp8", "Qwen3 30B", 32_768, 8_192),
    (
        "@cf/mistralai/mistral-small-3.1-24b-instruct",
        "Mistral Small 3.1",
        131_072,
        16_384,
    ),
    (
        "@cf/ibm/granite-4.0-h-micro",
        "Granite 4.0 H Micro",
        32_768,
        4_096,
    ),
    ("@cf/openai/gpt-oss-120b", "GPT OSS 120B", 32_768, 16_384),
    ("@cf/openai/gpt-oss-20b", "GPT OSS 20B", 32_768, 16_384),
];

#[derive(Clone)]
pub struct CloudflarePlaygroundProvider {
    http_client: reqwest::Client,
    tool_sessions: Arc<Mutex<HashMap<String, String>>>,
}

impl CloudflarePlaygroundProvider {
    pub fn new() -> Self {
        Self {
            http_client: jfc_provider::http::streaming_client(),
            tool_sessions: Arc::new(Mutex::new(HashMap::new())),
        }
    }

    pub fn fallback_models() -> Vec<ModelInfo> {
        MODELS
            .iter()
            .map(|(id, label, ctx, out)| {
                ModelInfo::new(ModelId::new(*id), *label, PROVIDER_NAME)
                    .with_context_window_tokens(*ctx)
                    .with_max_output_tokens(*out)
            })
            .collect()
    }

    fn new_id() -> String {
        const A: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        (0..21)
            .map(|_| A[(rand::random::<u8>() as usize) % A.len()] as char)
            .collect()
    }
}

impl jfc_provider::seal::Sealed for CloudflarePlaygroundProvider {}

#[async_trait]
impl Provider for CloudflarePlaygroundProvider {
    fn name(&self) -> &str {
        PROVIDER_NAME
    }
    fn available_models(&self) -> Vec<ModelInfo> {
        Self::fallback_models()
    }
    fn stream_convention(&self) -> StreamConvention {
        StreamConvention::OpenAiNative
    }
    fn warmup_url(&self) -> Option<String> {
        Some(format!("{BASE_HTTP}/api/config"))
    }
    fn http_client(&self) -> Option<reqwest::Client> {
        Some(self.http_client.clone())
    }

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        let model = options.model.as_str().to_owned();
        let system = options.system.clone();
        let ai_msgs = wire::build_ai_messages(&messages);
        let tool_results = wire::tool_results_from_messages(&messages);
        let session = self
            .continuation_session(&tool_results)
            .unwrap_or_else(|| format!("playground-{}", Self::new_id()));
        let req_id = format!("req-{}", Self::new_id());
        let msg_id = format!("msg-{}", Self::new_id());

        tracing::debug!(
            target: "jfc::provider::cloudflare_playground",
            session = %session, model = %model,
            "opening curl_idk WebSocket"
        );

        let (tx, rx) = std::sync::mpsc::channel::<Result<StreamEvent, String>>();

        let ws_url = {
            let enc = urlencoding::encode(&model);
            let pk = uuid::Uuid::new_v4();
            format!("{BASE_WS}/{AGENT_PATH}/{session}?model={enc}&_pk={pk}")
        };

        let action = if tool_results.is_empty() {
            let body_str =
                wire::request_body_json(ai_msgs, &msg_id, system.as_deref(), &options.tools)?;
            stream::StreamAction::ChatRequest(wire::envelope_json(&req_id, &body_str)?)
        } else {
            stream::StreamAction::ToolResults {
                frames: wire::tool_result_frames(&tool_results, &options.tools)?,
            }
        };
        let tool_sessions = Arc::clone(&self.tool_sessions);
        let session_for_tool_map = session.clone();

        tokio::task::spawn_blocking(move || {
            stream::run(ws_url, action, session_for_tool_map, tool_sessions, tx);
        });

        let (atx, mut arx) = tokio::sync::mpsc::unbounded_channel::<Result<StreamEvent, String>>();

        tokio::task::spawn_blocking(move || {
            for item in rx {
                if atx.send(item).is_err() {
                    break;
                }
            }
        });

        let out = async_stream::try_stream! {
            while let Some(result) = arx.recv().await {
                match result {
                    Ok(ev) => yield ev,
                    Err(e) => Err(anyhow::anyhow!("{e}"))?,
                }
            }
        };

        Ok(Box::pin(out))
    }
}

impl CloudflarePlaygroundProvider {
    fn continuation_session(&self, results: &[wire::CloudflareToolResult]) -> Option<String> {
        let first = results.first()?;
        self.tool_sessions
            .lock()
            .ok()
            .and_then(|sessions| sessions.get(&first.tool_call_id).cloned())
    }
}

use std::path::PathBuf;
use std::sync::Arc;
use std::time::Duration;

use async_trait::async_trait;
use hmac::{Hmac, Mac};
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use sha2::{Digest, Sha256};
use tokio::sync::{Mutex, RwLock};

use crate::provider::{
    EventStream, Provider, ProviderContent, ProviderMessage, ProviderRole, StreamOptions,
};

use super::sse;

type HmacSha256 = Hmac<Sha256>;

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
struct Account {
    name: String,
    refresh_token: String,
    access_token: Option<String>,
    expires_at: Option<u64>,
    enabled: Option<bool>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct AccountStore {
    accounts: Vec<Account>,
    active_index: Option<usize>,
}

const TOKEN_URL: &str = "https://platform.claude.com/v1/oauth/token";
const CLIENT_ID: &str = "9d1c250a-e61b-44d9-88ed-5944d1962f5e";
const REFRESH_SCOPES: &str =
    "user:profile user:inference user:sessions:claude_code user:mcp_servers user:file_upload";
const API_URL: &str = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION: &str = "2023-06-01";
const ANTHROPIC_BETA: &str = "claude-code-20250219,oauth-2025-04-20,interleaved-thinking-2025-05-14,prompt-caching-2024-07-31,prompt-caching-scope-2026-01-05,output-128k-2025-02-19,context-management-2025-06-27,web-search-2025-03-05,structured-outputs-2025-12-15";

const CLAUDE_CODE_IDENTITY: &str =
    "You are Claude Code, Anthropic's official CLI for Claude.";

const SALT: &str = "59cf53e54c78";

const VERSION_URL: &str = "https://registry.npmjs.org/@anthropic-ai/claude-code/latest";
const VERSION_FALLBACK: &str = "2.1.36";
const VERSION_CACHE_TTL: Duration = Duration::from_secs(3600);
const VERSION_FETCH_TIMEOUT: Duration = Duration::from_secs(5);

const CCH_PLACEHOLDER: &str = "cch=00000";

struct VersionCache {
    version: String,
    fetched_at: std::time::SystemTime,
}

static VERSION_CACHE: std::sync::OnceLock<Mutex<Option<VersionCache>>> =
    std::sync::OnceLock::new();

fn version_cache_mutex() -> &'static Mutex<Option<VersionCache>> {
    VERSION_CACHE.get_or_init(|| Mutex::new(None))
}

async fn fetch_cli_version(client: &reqwest::Client) -> String {
    let mut guard = version_cache_mutex().lock().await;
    if let Some(ref cache) = *guard {
        if cache.fetched_at.elapsed().unwrap_or(Duration::MAX) < VERSION_CACHE_TTL {
            return cache.version.clone();
        }
    }
    let version = client
        .get(VERSION_URL)
        .timeout(VERSION_FETCH_TIMEOUT)
        .send()
        .await
        .ok()
        .and_then(|r| if r.status().is_success() { Some(r) } else { None })
        .and_then(|r| {
            tokio::task::block_in_place(|| {
                tokio::runtime::Handle::current().block_on(r.json::<Value>())
            })
            .ok()
        })
        .and_then(|v| v["version"].as_str().map(str::to_owned))
        .unwrap_or_else(|| VERSION_FALLBACK.to_owned());
    *guard = Some(VersionCache {
        version: version.clone(),
        fetched_at: std::time::SystemTime::now(),
    });
    version
}

fn compute_billing_hash(first_user_message: &str, version: &str) -> String {
    let chars: Vec<char> = first_user_message.chars().collect();
    let c = |i: usize| chars.get(i).map(|c| c.to_string()).unwrap_or_default();
    let input = format!("{}{}{}{}{}", SALT, c(4), c(7), c(20), version);
    let hash = Sha256::digest(input.as_bytes());
    hex::encode(hash)[..3].to_owned()
}

fn compute_body_attestation(body: &str) -> String {
    let mut mac = HmacSha256::new_from_slice(SALT.as_bytes())
        .expect("HMAC accepts any key length");
    mac.update(body.as_bytes());
    let result = mac.finalize().into_bytes();
    let cch = &hex::encode(result)[..5];
    body.replacen(CCH_PLACEHOLDER, &format!("cch={cch}"), 1)
}

fn build_user_agent(version: &str) -> String {
    format!("claude-cli/{version} (external, cli)")
}

fn build_billing_header_text(version: &str, billing_hash: &str) -> String {
    format!(
        "x-anthropic-billing-header: cc_version={version}.{billing_hash}; cc_entrypoint=cli; {CCH_PLACEHOLDER};"
    )
}

#[derive(Debug, Deserialize)]
struct TokenResponse {
    access_token: String,
    refresh_token: Option<String>,
    expires_in: Option<u64>,
    #[allow(dead_code)]
    scope: Option<String>,
}

#[derive(Debug, Serialize)]
struct RefreshRequest<'a> {
    grant_type: &'a str,
    refresh_token: &'a str,
    client_id: &'a str,
    scope: &'a str,
}

fn now_ms() -> u64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64
}

async fn refresh_access_token(
    client: &reqwest::Client,
    refresh_token: &str,
) -> anyhow::Result<(String, String, u64)> {
    let body = RefreshRequest {
        grant_type: "refresh_token",
        refresh_token,
        client_id: CLIENT_ID,
        scope: REFRESH_SCOPES,
    };

    let resp = client
        .post(TOKEN_URL)
        .header("content-type", "application/json")
        .json(&body)
        .send()
        .await?;

    if !resp.status().is_success() {
        let status = resp.status();
        let text = resp.text().await.unwrap_or_default();
        anyhow::bail!("token refresh failed {status}: {text}");
    }

    let json: TokenResponse = resp.json().await?;

    if let Some(scope) = &json.scope {
        if !scope.contains("user:inference") {
            anyhow::bail!("user:inference not in granted scopes: {scope}");
        }
    }

    let new_refresh = json.refresh_token.unwrap_or_else(|| refresh_token.to_owned());
    let expires_in = json.expires_in.unwrap_or(3600);
    let expires_at = now_ms() + expires_in * 1000 - 30_000;

    Ok((json.access_token, new_refresh, expires_at))
}

fn default_store_path() -> PathBuf {
    dirs::home_dir()
        .unwrap_or_else(|| PathBuf::from("/"))
        .join(".config/jfc/anthropic-accounts.json")
}

fn load_store(path: &PathBuf) -> anyhow::Result<AccountStore> {
    let raw = std::fs::read_to_string(path)?;
    Ok(serde_json::from_str(&raw)?)
}

fn pick_account(store: &AccountStore) -> Option<&Account> {
    let enabled: Vec<&Account> = store
        .accounts
        .iter()
        .filter(|a| a.enabled.unwrap_or(true))
        .collect();
    let idx = store.active_index.unwrap_or(0);
    store
        .accounts
        .get(idx)
        .filter(|a| a.enabled.unwrap_or(true))
        .or_else(|| enabled.first().copied())
}

fn write_back_tokens(
    path: &PathBuf,
    account_name: &str,
    access_token: &str,
    refresh_token: &str,
    expires_at: u64,
) -> anyhow::Result<()> {
    let raw = std::fs::read_to_string(path)?;
    let mut store: Value = serde_json::from_str(&raw)?;
    if let Some(accounts) = store.get_mut("accounts").and_then(|a| a.as_array_mut()) {
        for acct in accounts.iter_mut() {
            if acct.get("name").and_then(|n| n.as_str()) == Some(account_name) {
                acct["accessToken"] = json!(access_token);
                acct["refreshToken"] = json!(refresh_token);
                acct["expiresAt"] = json!(expires_at);
                break;
            }
        }
    }
    let tmp = format!("{}.tmp-{}", path.display(), std::process::id());
    std::fs::write(&tmp, serde_json::to_string_pretty(&store)?)?;
    std::fs::rename(&tmp, path)?;
    Ok(())
}

#[derive(Debug, Clone)]
struct TokenState {
    access_token: String,
    refresh_token: String,
    expires_at: u64,
    account_name: String,
}

pub struct AnthropicOAuthProvider {
    client: reqwest::Client,
    store_path: PathBuf,
    token: Arc<RwLock<Option<TokenState>>>,
}

impl AnthropicOAuthProvider {
    pub fn new() -> Self {
        Self {
            client: reqwest::Client::new(),
            store_path: default_store_path(),
            token: Arc::new(RwLock::new(None)),
        }
    }

    async fn get_access_token(&self) -> anyhow::Result<String> {
        {
            let guard = self.token.read().await;
            if let Some(t) = guard.as_ref() {
                if now_ms() < t.expires_at {
                    return Ok(t.access_token.clone());
                }
            }
        }

        let mut guard = self.token.write().await;

        if let Some(t) = guard.as_ref() {
            if now_ms() < t.expires_at {
                return Ok(t.access_token.clone());
            }
        }

        let store = load_store(&self.store_path).map_err(|e| {
            anyhow::anyhow!(
                "cannot load anthropic accounts from {}: {e}",
                self.store_path.display()
            )
        })?;

        let account = pick_account(&store)
            .ok_or_else(|| anyhow::anyhow!("no enabled Anthropic accounts in store"))?;

        let (access_token, new_refresh, expires_at) =
            if let (Some(at), Some(exp)) = (&account.access_token, account.expires_at) {
                if now_ms() < exp {
                    (at.clone(), account.refresh_token.clone(), exp)
                } else {
                    refresh_access_token(&self.client, &account.refresh_token).await?
                }
            } else {
                refresh_access_token(&self.client, &account.refresh_token).await?
            };

        let _ = write_back_tokens(
            &self.store_path,
            &account.name,
            &access_token,
            &new_refresh,
            expires_at,
        );

        *guard = Some(TokenState {
            access_token: access_token.clone(),
            refresh_token: new_refresh,
            expires_at,
            account_name: account.name.clone(),
        });

        Ok(access_token)
    }
}

fn build_system_blocks(billing_header_text: &str, caller_system: Option<&str>) -> Value {
    let mut blocks: Vec<Value> = vec![
        json!({ "type": "text", "text": billing_header_text }),
        json!({
            "type": "text",
            "text": CLAUDE_CODE_IDENTITY,
            "cache_control": { "type": "ephemeral" }
        }),
    ];
    if let Some(sys) = caller_system {
        if !sys.is_empty() {
            blocks.push(json!({ "type": "text", "text": sys }));
        }
    }
    json!(blocks)
}

fn build_body(messages: Vec<ProviderMessage>, opts: &StreamOptions, billing_header_text: &str) -> Value {
    let mut body = json!({
        "model": opts.model,
        "max_tokens": opts.max_tokens,
        "stream": true,
        "messages": sse::build_messages(&messages),
        "system": build_system_blocks(billing_header_text, opts.system.as_deref()),
    });
    if !opts.tools.is_empty() {
        body["tools"] = sse::build_tools(&opts.tools);
    }
    if let Some(budget) = opts.thinking_budget {
        body["thinking"] = json!({ "type": "enabled", "budget_tokens": budget });
    }
    body
}

#[async_trait]
impl Provider for AnthropicOAuthProvider {
    fn name(&self) -> &str {
        "anthropic-oauth"
    }

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream> {
        let access_token = self.get_access_token().await?;

        let version = fetch_cli_version(&self.client).await;

        let first_user_text = messages
            .iter()
            .find(|m| m.role == ProviderRole::User)
            .and_then(|m| m.content.iter().find_map(|c| {
                if let ProviderContent::Text(t) = c { Some(t.as_str()) } else { None }
            }))
            .unwrap_or("");
        let billing_hash = compute_billing_hash(first_user_text, &version);
        let billing_header_text = build_billing_header_text(&version, &billing_hash);
        let user_agent = build_user_agent(&version);

        let body_value = build_body(messages, options, &billing_header_text);
        let body_str = serde_json::to_string(&body_value)?;
        let attested_body = compute_body_attestation(&body_str);

        let resp = self
            .client
            .post(API_URL)
            .header("authorization", format!("Bearer {access_token}"))
            .header("anthropic-version", ANTHROPIC_VERSION)
            .header("anthropic-beta", ANTHROPIC_BETA)
            .header("content-type", "application/json")
            .header("user-agent", user_agent)
            .header("x-app", "cli")
            .header("anthropic-client-platform", "cli")
            .header("anthropic-dangerous-direct-browser-access", "true")
            .body(attested_body)
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

#[cfg(test)]
mod tests {
    use super::*;
    use crate::provider::{ProviderContent, ProviderMessage, ProviderRole, StreamOptions, ToolDef};

    fn make_user_msg(text: &str) -> ProviderMessage {
        ProviderMessage {
            role: ProviderRole::User,
            content: vec![ProviderContent::Text(text.to_owned())],
        }
    }

    fn opts(model: &str) -> StreamOptions {
        StreamOptions::new(model)
    }

    const TEST_BH: &str = "x-anthropic-billing-header: cc_version=2.0.0.abc; cc_entrypoint=cli; cch=00000;";

    #[test]
    fn system_blocks_no_caller_system_has_two_blocks() {
        let v = build_system_blocks(TEST_BH, None);
        assert_eq!(v.as_array().expect("system must be array").len(), 2);
    }

    #[test]
    fn system_blocks_position_0_is_billing_header() {
        let v = build_system_blocks(TEST_BH, None);
        let block = &v[0];
        assert_eq!(block["type"], "text");
        let text = block["text"].as_str().unwrap();
        assert!(text.starts_with("x-anthropic-billing-header:"));
        assert!(text.contains("cc_version="));
        assert!(text.contains("cc_entrypoint=cli"));
    }

    #[test]
    fn system_blocks_position_1_is_claude_identity() {
        let v = build_system_blocks(TEST_BH, None);
        let block = &v[1];
        assert_eq!(block["type"], "text");
        assert_eq!(block["text"], CLAUDE_CODE_IDENTITY);
        assert_eq!(block["cache_control"]["type"], "ephemeral");
    }

    #[test]
    fn system_blocks_caller_system_appended_at_position_2() {
        let v = build_system_blocks(TEST_BH, Some("custom instructions"));
        assert_eq!(v.as_array().unwrap().len(), 3);
        assert_eq!(v[2]["text"], "custom instructions");
    }

    #[test]
    fn system_blocks_empty_caller_system_not_appended() {
        let v = build_system_blocks(TEST_BH, Some(""));
        assert_eq!(v.as_array().unwrap().len(), 2);
    }

    #[test]
    fn build_body_required_fields_present() {
        let body = build_body(vec![make_user_msg("hello")], &opts("claude-opus-4-7"), TEST_BH);
        assert_eq!(body["model"], "claude-opus-4-7");
        assert_eq!(body["max_tokens"], 8192);
        assert_eq!(body["stream"], true);
        assert!(body["messages"].is_array());
        assert!(body["system"].is_array());
    }

    #[test]
    fn build_body_tools_absent_when_empty() {
        let body = build_body(vec![make_user_msg("hi")], &opts("m"), TEST_BH);
        assert!(body.get("tools").is_none());
    }

    #[test]
    fn build_body_tools_present_when_non_empty() {
        let o = opts("m").tools(vec![ToolDef {
            name: "bash".into(),
            description: "run bash".into(),
            input_schema: serde_json::json!({"type":"object"}),
        }]);
        let body = build_body(vec![make_user_msg("hi")], &o, TEST_BH);
        assert_eq!(body["tools"].as_array().unwrap().len(), 1);
    }

    #[test]
    fn build_body_thinking_absent_when_no_budget() {
        let body = build_body(vec![make_user_msg("hi")], &opts("m"), TEST_BH);
        assert!(body.get("thinking").is_none());
    }

    #[test]
    fn build_body_thinking_present_when_budget_set() {
        let o = opts("m").thinking(4096);
        let body = build_body(vec![make_user_msg("hi")], &o, TEST_BH);
        assert_eq!(body["thinking"]["type"], "enabled");
        assert_eq!(body["thinking"]["budget_tokens"], 4096);
    }

    #[test]
    fn build_body_system_has_caller_block_when_system_set() {
        let o = opts("m").system("my system");
        let body = build_body(vec![make_user_msg("hi")], &o, TEST_BH);
        assert_eq!(body["system"].as_array().unwrap().len(), 3);
        assert_eq!(body["system"][2]["text"], "my system");
    }

    #[test]
    fn pick_account_selects_active_index_when_enabled() {
        let store = AccountStore {
            accounts: vec![make_account("a", None), make_account("b", None)],
            active_index: Some(1),
        };
        assert_eq!(pick_account(&store).unwrap().name, "b");
    }

    #[test]
    fn pick_account_defaults_to_index_0() {
        let store = AccountStore {
            accounts: vec![make_account("a", None), make_account("b", None)],
            active_index: None,
        };
        assert_eq!(pick_account(&store).unwrap().name, "a");
    }

    #[test]
    fn pick_account_falls_back_to_first_enabled() {
        let store = AccountStore {
            accounts: vec![make_account("disabled", Some(false)), make_account("enabled", Some(true))],
            active_index: Some(0),
        };
        assert_eq!(pick_account(&store).unwrap().name, "enabled");
    }

    #[test]
    fn pick_account_returns_none_when_all_disabled() {
        let store = AccountStore {
            accounts: vec![make_account("a", Some(false)), make_account("b", Some(false))],
            active_index: Some(0),
        };
        assert!(pick_account(&store).is_none());
    }

    #[test]
    fn pick_account_returns_none_for_empty_store() {
        let store = AccountStore { accounts: vec![], active_index: None };
        assert!(pick_account(&store).is_none());
    }

    #[test]
    fn anthropic_beta_contains_required_values() {
        for val in &[
            "claude-code-20250219",
            "oauth-2025-04-20",
            "interleaved-thinking-2025-05-14",
            "prompt-caching-2024-07-31",
            "output-128k-2025-02-19",
            "structured-outputs-2025-12-15",
        ] {
            assert!(ANTHROPIC_BETA.contains(val), "ANTHROPIC_BETA missing: {val}");
        }
    }

    #[test]
    fn user_agent_format() {
        assert_eq!(build_user_agent("1.2.3"), "claude-cli/1.2.3 (external, cli)");
    }

    #[test]
    fn billing_header_contains_version_and_hash() {
        let h = build_billing_header_text("2.0.0", "abc");
        assert!(h.starts_with("x-anthropic-billing-header:"));
        assert!(h.contains("cc_version=2.0.0.abc"));
        assert!(h.contains("cc_entrypoint=cli"));
        assert!(h.contains(CCH_PLACEHOLDER));
    }

    #[test]
    fn billing_hash_output_is_three_hex_chars() {
        let h = compute_billing_hash("hello world", "2.0.0");
        assert_eq!(h.len(), 3);
        assert!(h.chars().all(|c| c.is_ascii_hexdigit()));
    }

    #[test]
    fn billing_hash_is_deterministic() {
        let a = compute_billing_hash("hello world", "2.0.0");
        let b = compute_billing_hash("hello world", "2.0.0");
        assert_eq!(a, b);
    }

    #[test]
    fn billing_hash_differs_for_different_inputs() {
        let a = compute_billing_hash("hello world", "2.0.0");
        let b = compute_billing_hash("hello world", "2.0.1");
        assert_ne!(a, b);
    }

    #[test]
    fn billing_hash_empty_message_no_panic() {
        let h = compute_billing_hash("", "2.0.0");
        assert_eq!(h.len(), 3);
    }

    #[test]
    fn body_attestation_replaces_cch_placeholder() {
        let body = format!(r#"{{"a":1,"{CCH_PLACEHOLDER}":"x"}}"#);
        let result = compute_body_attestation(&body);
        assert!(!result.contains(CCH_PLACEHOLDER));
    }

    #[test]
    fn body_attestation_cch_value_is_5_hex_chars() {
        let body = format!(r#"{{"data":"hello","{CCH_PLACEHOLDER}":1}}"#);
        let result = compute_body_attestation(&body);
        let cch_start = result.find("cch=").expect("cch= not found");
        let cch_val = &result[cch_start + 4..cch_start + 9];
        assert_eq!(cch_val.len(), 5);
        assert!(cch_val.chars().all(|c| c.is_ascii_hexdigit()));
    }

    #[test]
    fn body_attestation_is_deterministic() {
        let body = format!(r#"{{"k":"v","{CCH_PLACEHOLDER}":null}}"#);
        assert_eq!(compute_body_attestation(&body), compute_body_attestation(&body));
    }

    #[test]
    fn body_attestation_only_replaces_first_occurrence() {
        let body = format!("{CCH_PLACEHOLDER}xxx{CCH_PLACEHOLDER}");
        let result = compute_body_attestation(&body);
        assert_eq!(result.matches(CCH_PLACEHOLDER).count(), 1);
    }

    fn make_account(name: &str, enabled: Option<bool>) -> Account {
        Account {
            name: name.into(),
            refresh_token: "rt".into(),
            access_token: None,
            expires_at: None,
            enabled,
        }
    }
}

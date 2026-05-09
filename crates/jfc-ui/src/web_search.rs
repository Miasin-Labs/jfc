//! Google Custom Search Engine client for WebSearch tool.
//!
//! Reads API keys from `~/.config/google-search-mcp/config.toml` (shared
//! with the standalone google-cse-mcp-rs server). Supports round-robin key
//! rotation across multiple keys for higher daily quota.
//!
//! Falls back to `GOOGLE_CSE_API_KEY` + `GOOGLE_CSE_CX` env vars if no
//! config file is found.

use std::path::PathBuf;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::OnceLock;

use serde::Deserialize;

/// A single API key + search engine ID pair.
#[derive(Clone)]
struct CseKey {
    api_key: String,
    cx: String,
}

/// Process-global key pool, initialized once.
struct KeyPool {
    keys: Vec<CseKey>,
    index: AtomicUsize,
}

impl KeyPool {
    fn next(&self) -> Option<&CseKey> {
        if self.keys.is_empty() {
            return None;
        }
        let idx = self.index.fetch_add(1, Ordering::Relaxed) % self.keys.len();
        Some(&self.keys[idx])
    }
}

fn key_pool() -> &'static KeyPool {
    static POOL: OnceLock<KeyPool> = OnceLock::new();
    POOL.get_or_init(|| {
        let keys = load_keys();
        KeyPool {
            keys,
            index: AtomicUsize::new(0),
        }
    })
}

/// Config file format (compatible with google-cse-mcp-rs).
#[derive(Deserialize)]
struct ConfigFile {
    keys: Vec<ConfigKey>,
}

#[derive(Deserialize)]
struct ConfigKey {
    api_key: String,
    cx: String,
    #[allow(dead_code)]
    #[serde(default)]
    description: String,
}

fn load_keys() -> Vec<CseKey> {
    // Try config file first.
    if let Some(keys) = load_keys_from_config() {
        if !keys.is_empty() {
            tracing::info!(
                count = keys.len(),
                "Google CSE keys loaded from config file"
            );
            return keys;
        }
    }

    // Fall back to env vars.
    if let (Ok(api_key), Ok(cx)) = (
        std::env::var("GOOGLE_CSE_API_KEY"),
        std::env::var("GOOGLE_CSE_CX"),
    ) {
        tracing::info!("Google CSE keys loaded from env vars");
        return vec![CseKey { api_key, cx }];
    }

    tracing::warn!(
        "No Google CSE keys found. WebSearch will not work. \
         Set GOOGLE_CSE_API_KEY + GOOGLE_CSE_CX env vars, or create \
         ~/.config/google-search-mcp/config.toml"
    );
    Vec::new()
}

fn load_keys_from_config() -> Option<Vec<CseKey>> {
    let path = config_path()?;
    let content = std::fs::read_to_string(&path).ok()?;
    let config: ConfigFile = toml::from_str(&content).ok()?;
    Some(
        config
            .keys
            .into_iter()
            .map(|k| CseKey {
                api_key: k.api_key,
                cx: k.cx,
            })
            .collect(),
    )
}

fn config_path() -> Option<PathBuf> {
    let home = std::env::var("HOME").ok()?;
    let path = PathBuf::from(home)
        .join(".config")
        .join("google-search-mcp")
        .join("config.toml");
    if path.exists() {
        Some(path)
    } else {
        None
    }
}

/// Google CSE API response.
#[derive(Deserialize)]
struct SearchResponse {
    #[serde(default)]
    items: Vec<SearchItem>,
    #[serde(rename = "searchInformation")]
    search_information: Option<SearchInfo>,
    error: Option<ApiError>,
}

#[derive(Deserialize)]
struct SearchItem {
    title: String,
    link: String,
    snippet: String,
}

#[derive(Deserialize)]
struct SearchInfo {
    #[serde(rename = "totalResults")]
    total_results: String,
    #[serde(rename = "searchTime")]
    search_time: f64,
}

#[derive(Deserialize)]
struct ApiError {
    code: i32,
    message: String,
}

/// Search the web via Google Custom Search Engine.
///
/// Returns a formatted string of results, or an error message.
pub async fn search(query: &str, max_results: usize) -> Result<String, String> {
    let pool = key_pool();
    let key = pool
        .next()
        .ok_or_else(|| {
            "No Google CSE API keys configured. Set GOOGLE_CSE_API_KEY + GOOGLE_CSE_CX \
             env vars, or create ~/.config/google-search-mcp/config.toml with:\n\n\
             [[keys]]\n\
             api_key = \"your-key\"\n\
             cx = \"your-search-engine-id\"\n\
             description = \"main\""
                .to_string()
        })?;

    let num = max_results.min(10).max(1);

    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(10))
        .user_agent("jfc/0.1")
        .build()
        .map_err(|e| format!("HTTP client init: {e}"))?;

    let num_str = num.to_string();
    let resp = client
        .get("https://www.googleapis.com/customsearch/v1")
        .query(&[
            ("key", key.api_key.as_str()),
            ("cx", key.cx.as_str()),
            ("q", query),
            ("num", num_str.as_str()),
        ])
        .send()
        .await
        .map_err(|e| format!("Google CSE request failed: {e}"))?;

    let status = resp.status();
    let body = resp
        .text()
        .await
        .map_err(|e| format!("Failed to read response: {e}"))?;

    let parsed: SearchResponse =
        serde_json::from_str(&body).map_err(|e| format!("Failed to parse CSE response: {e}"))?;

    if let Some(err) = parsed.error {
        return Err(format!(
            "Google CSE API error {}: {}",
            err.code, err.message
        ));
    }

    if !status.is_success() {
        return Err(format!("Google CSE returned HTTP {status}"));
    }

    // Format output.
    let mut out = String::new();

    if let Some(info) = &parsed.search_information {
        out.push_str(&format!(
            "Search: \"{query}\" — {total} results ({time:.2}s)\n\n",
            total = info.total_results,
            time = info.search_time,
        ));
    }

    if parsed.items.is_empty() {
        out.push_str("No results found.\n");
    } else {
        for (i, item) in parsed.items.iter().enumerate() {
            out.push_str(&format!(
                "{}. {}\n   URL: {}\n   {}\n\n",
                i + 1,
                item.title,
                item.link,
                item.snippet,
            ));
        }
    }

    Ok(out)
}

//! HTTP retry utilities with exponential backoff and jitter.
//!
//! Implements the same retry strategy as Claude Code's Anthropic SDK:
//! - Retries on: 408 (timeout), 409 (conflict), 429 (rate limit), 500+ (server error)
//! - Backoff: min(0.5 * 2^attempt, 8) * (1 - random*0.25) * 1000ms
//! - Checks `x-should-retry` header override
//! - Configurable max retries (default: 2)

use std::time::Duration;
use tracing::{debug, info, warn};

/// Configuration for retry behavior.
#[derive(Debug, Clone)]
pub struct RetryConfig {
    /// Maximum number of retry attempts (default: 2).
    pub max_retries: u32,
    /// Base delay multiplier in seconds (default: 0.5).
    pub base_delay_secs: f64,
    /// Maximum delay cap in seconds (default: 8.0).
    pub max_delay_secs: f64,
}

impl Default for RetryConfig {
    fn default() -> Self {
        Self {
            max_retries: 2,
            base_delay_secs: 0.5,
            max_delay_secs: 8.0,
        }
    }
}

impl RetryConfig {
    /// Create a config with more retries (for critical operations).
    pub fn aggressive() -> Self {
        Self {
            max_retries: 5,
            base_delay_secs: 0.5,
            max_delay_secs: 16.0,
        }
    }

    /// Calculate backoff delay for a given attempt number.
    /// Uses exponential backoff with jitter: min(base * 2^attempt, max) * (1 - rand*0.25)
    pub fn delay_for_attempt(&self, attempt: u32) -> Duration {
        let exp = self.base_delay_secs * f64::powi(2.0, attempt as i32);
        let capped = exp.min(self.max_delay_secs);
        let jitter = 1.0 - rand::random::<f64>() * 0.25;
        Duration::from_secs_f64(capped * jitter)
    }
}

/// Whether a response status code should be retried.
pub fn should_retry_status(status: u16, headers: Option<&reqwest::header::HeaderMap>) -> bool {
    // Check x-should-retry header override
    if let Some(hdrs) = headers {
        if let Some(val) = hdrs.get("x-should-retry") {
            if val == "true" {
                return true;
            }
            if val == "false" {
                return false;
            }
        }
    }

    matches!(status, 408 | 409 | 429 | 500..=599)
}

/// Whether an error is a connection/network error worth retrying.
pub fn is_retriable_error(err: &reqwest::Error) -> bool {
    err.is_connect() || err.is_timeout() || err.is_request()
}

/// User-friendly error message for common HTTP errors.
pub fn friendly_error_message(status: u16, body: &str) -> String {
    match status {
        401 => "Authentication failed — check your API key or token.".to_string(),
        403 => "Access forbidden — your account may not have access to this model.".to_string(),
        429 => {
            if body.contains("rate_limit") {
                "Rate limited — too many requests. Retrying with backoff...".to_string()
            } else {
                "Rate limited — waiting before retry.".to_string()
            }
        }
        400 if body.contains("prompt is too long") || body.contains("ContextWindowExceeded") => {
            // Extract the token count if possible
            if let Some(cap) = extract_token_count(body) {
                format!("Context window exceeded ({cap} tokens). Auto-compaction should trigger.")
            } else {
                "Context window exceeded. Auto-compaction should trigger.".to_string()
            }
        }
        400 => format!("Bad request: {}", truncate(body, 200)),
        500 => "Internal server error — the provider is having issues.".to_string(),
        502 => "Bad gateway — the provider proxy is unreachable.".to_string(),
        503 => "Service unavailable — the model may be overloaded.".to_string(),
        529 => "Provider is overloaded (529). Retrying...".to_string(),
        _ => format!("HTTP {status}: {}", truncate(body, 150)),
    }
}

/// Execute a request with retry logic.
pub async fn with_retry<F, Fut, T>(
    config: &RetryConfig,
    operation_name: &str,
    mut make_request: F,
) -> Result<T, String>
where
    F: FnMut() -> Fut,
    Fut: std::future::Future<Output = Result<T, RetryableError>>,
{
    let mut last_error = String::new();

    for attempt in 0..=config.max_retries {
        match make_request().await {
            Ok(val) => return Ok(val),
            Err(RetryableError::Retriable { status, message }) => {
                last_error = message.clone();
                if attempt < config.max_retries {
                    let delay = config.delay_for_attempt(attempt);
                    warn!(
                        target: "jfc::retry",
                        operation = operation_name,
                        attempt = attempt + 1,
                        max = config.max_retries,
                        status,
                        delay_ms = delay.as_millis() as u64,
                        "retriable error — backing off"
                    );
                    tokio::time::sleep(delay).await;
                } else {
                    warn!(
                        target: "jfc::retry",
                        operation = operation_name,
                        status,
                        "max retries exhausted"
                    );
                }
            }
            Err(RetryableError::Fatal(msg)) => {
                debug!(target: "jfc::retry", operation = operation_name, "fatal error — not retrying");
                return Err(msg);
            }
        }
    }

    Err(format!("{operation_name}: {last_error}"))
}

/// Error type for retry logic.
pub enum RetryableError {
    /// Error that can be retried (transient).
    Retriable { status: u16, message: String },
    /// Error that should not be retried (permanent).
    Fatal(String),
}

fn extract_token_count(body: &str) -> Option<String> {
    // "prompt is too long: 210169 tokens > 200000 maximum"
    let start = body.find("prompt is too long: ")?;
    let after = &body[start + 20..];
    let end = after.find(' ')?;
    Some(after[..end].to_string())
}

fn truncate(s: &str, max: usize) -> &str {
    if s.len() <= max {
        s
    } else {
        &s[..max]
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_retry_status_codes() {
        assert!(should_retry_status(429, None));
        assert!(should_retry_status(500, None));
        assert!(should_retry_status(503, None));
        assert!(should_retry_status(408, None));
        assert!(!should_retry_status(400, None));
        assert!(!should_retry_status(401, None));
        assert!(!should_retry_status(200, None));
    }

    #[test]
    fn backoff_increases_with_attempts() {
        let config = RetryConfig::default();
        let d0 = config.delay_for_attempt(0);
        let d1 = config.delay_for_attempt(1);
        let d2 = config.delay_for_attempt(2);
        // Each attempt should roughly double (with jitter)
        assert!(d1 > d0);
        assert!(d2 > d1);
        // Cap at 8 seconds
        let d10 = config.delay_for_attempt(10);
        assert!(d10.as_secs_f64() <= 8.5); // 8 + jitter tolerance
    }

    #[test]
    fn friendly_messages() {
        assert!(friendly_error_message(429, "rate_limit").contains("Rate limited"));
        assert!(friendly_error_message(401, "").contains("Authentication"));
        assert!(friendly_error_message(400, "prompt is too long: 210169 tokens > 200000")
            .contains("210169"));
    }
}

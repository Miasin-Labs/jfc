//! Iterative group-based conversation compaction.
//!
//! When the context window fills up, split the conversation into groups
//! (each = user turn + assistant reply + tool results), summarize the oldest
//! groups via a non-streaming API call, keep the most recent groups verbatim.
//!
//! Algorithm (mirrors CC v126 `biK` + `To1` smart step):
//!
//! 1. Split messages into groups via `split_into_groups`.
//! 2. Preserve the most-recent N groups, summarize the rest.
//! 3. If summarization is too long → use `token_gap_step` to calculate
//!    exactly how many more groups to preserve based on per-group token
//!    counts, falling back to exponential doubling when no gap info.
//! 4. If media_too_large → strip images/PDFs and retry once.
//! 5. Circuit breaker: if context refills within `THRASH_TURN_WINDOW`
//!    turns of the last compact, `CIRCUIT_BREAKER_LIMIT` times in a row,
//!    stop trying.

use crate::context::ToolContext;
use crate::provider::{Provider, ProviderContent, ProviderMessage, ProviderRole, StreamOptions};
use crate::types::ChatMessage;

const CHARS_PER_TOKEN: usize = 4;
const COMPACT_THRESHOLD: f64 = 0.85;
const MAX_ATTEMPTS: u32 = 8;
const CIRCUIT_BREAKER_LIMIT: u32 = 3;
/// If context refills within this many user turns after a compact, it counts as thrash.
const THRASH_TURN_WINDOW: u32 = 2;

pub fn estimate_tokens(messages: &[ChatMessage]) -> usize {
    messages
        .iter()
        .map(|m| {
            let content_chars: usize = m.parts.iter().map(|p| p.approx_text_len()).sum();
            content_chars / CHARS_PER_TOKEN
        })
        .sum()
}

fn estimate_group_tokens(group: &ConversationGroup) -> usize {
    estimate_tokens(&group.messages)
}

pub fn should_compact(messages: &[ChatMessage], max_context_tokens: usize) -> bool {
    let est = estimate_tokens(messages);
    est as f64 > max_context_tokens as f64 * COMPACT_THRESHOLD
}

#[derive(Debug, Clone)]
struct ConversationGroup {
    messages: Vec<ChatMessage>,
}

fn split_into_groups(messages: &[ChatMessage]) -> Vec<ConversationGroup> {
    let mut groups: Vec<ConversationGroup> = Vec::new();
    let mut current = Vec::new();

    for msg in messages {
        if msg.role_is_user() && !current.is_empty() {
            groups.push(ConversationGroup {
                messages: std::mem::take(&mut current),
            });
        }
        current.push(msg.clone());
    }
    if !current.is_empty() {
        groups.push(ConversationGroup { messages: current });
    }
    groups
}

/// Smart step calculator (mirrors CC `To1`).
///
/// Given a token gap (how many tokens need to be freed), walk groups backward
/// from the current split point, accumulating each group's tokens until we've
/// freed enough. Returns the number of additional groups to preserve.
///
/// Falls back to exponential doubling when `token_gap` is None.
fn token_gap_step(token_gap: Option<usize>, group_tokens: &[usize], current_split: usize) -> usize {
    let Some(gap) = token_gap else {
        return (current_split / 2).max(1);
    };

    let mut freed: usize = 0;
    let mut step: usize = 0;
    for i in (0..current_split).rev() {
        if freed >= gap {
            break;
        }
        freed += group_tokens.get(i).copied().unwrap_or(0);
        step += 1;
    }
    step.max(1)
}

#[derive(Debug)]
pub enum CompactResult {
    Success {
        messages: Vec<ChatMessage>,
        pre_tokens: usize,
        post_tokens: usize,
    },
    TooFewGroups,
    CircuitBreakerTripped,
    Exhausted {
        attempts: u32,
    },
    Unsupported,
}

pub async fn compact(
    messages: &[ChatMessage],
    provider: &dyn Provider,
    options: &StreamOptions,
    tool_ctx: &mut ToolContext,
) -> CompactResult {
    if tool_ctx.rapid_refill_count >= CIRCUIT_BREAKER_LIMIT {
        return CompactResult::CircuitBreakerTripped;
    }

    let groups = split_into_groups(messages);
    if groups.len() < 2 {
        return CompactResult::TooFewGroups;
    }

    let pre_tokens = estimate_tokens(messages);
    let group_tokens: Vec<usize> = groups.iter().map(estimate_group_tokens).collect();
    let total_groups = groups.len();
    let mut preserve_count: usize = 1;
    let mut attempt: u32 = 0;
    let mut strip_media = false;
    let last_token_gap: Option<usize> = None;

    loop {
        attempt += 1;
        if attempt > MAX_ATTEMPTS {
            return CompactResult::Exhausted {
                attempts: attempt - 1,
            };
        }
        if preserve_count >= total_groups {
            return CompactResult::Exhausted { attempts: attempt };
        }

        let split_point = total_groups - preserve_count;
        let to_summarize: Vec<ChatMessage> = groups[..split_point]
            .iter()
            .flat_map(|g| g.messages.clone())
            .collect();
        let to_preserve: Vec<ChatMessage> = groups[split_point..]
            .iter()
            .flat_map(|g| g.messages.clone())
            .collect();

        let summary_text = build_summary_text(&to_summarize, strip_media);

        let compact_messages = vec![ProviderMessage {
            role: ProviderRole::User,
            content: vec![ProviderContent::Text(summary_text)],
        }];

        let compact_options = StreamOptions::new(options.model.clone())
            .system(COMPACTION_SYSTEM_PROMPT.to_owned())
            .max_tokens(4096);

        match provider.complete(compact_messages, &compact_options).await {
            Ok(response) => {
                let summary_msg = ChatMessage::compact_boundary(&response.content, pre_tokens);
                let mut compacted = vec![summary_msg];
                compacted.extend(to_preserve);

                let post_tokens = estimate_tokens(&compacted);

                let user_turns_since = count_user_turns_since_last_compact(&compacted);
                if user_turns_since <= THRASH_TURN_WINDOW {
                    tool_ctx.rapid_refill_count += 1;
                } else {
                    tool_ctx.rapid_refill_count = 0;
                }

                tool_ctx.approx_tokens = post_tokens;
                tool_ctx.last_compact_turn = tool_ctx.total_user_turns;
                tool_ctx.read_cache.clear();

                return CompactResult::Success {
                    messages: compacted,
                    pre_tokens,
                    post_tokens,
                };
            }
            Err(e) => {
                let err_msg = e.to_string().to_lowercase();

                if err_msg.contains("too_large") || err_msg.contains("media") {
                    if !strip_media {
                        strip_media = true;
                        continue;
                    }
                }

                if err_msg.contains("too_long")
                    || err_msg.contains("token")
                    || err_msg.contains("context")
                {
                    let step = token_gap_step(last_token_gap, &group_tokens, split_point);
                    preserve_count = (preserve_count + step).min(total_groups - 1);
                    continue;
                }

                if err_msg.contains("not support") {
                    return CompactResult::Unsupported;
                }

                let step = token_gap_step(last_token_gap, &group_tokens, split_point);
                preserve_count = (preserve_count + step).min(total_groups - 1);
            }
        }
    }
}

fn count_user_turns_since_last_compact(messages: &[ChatMessage]) -> u32 {
    let mut count = 0u32;
    for msg in messages.iter().rev() {
        if msg.is_compact_boundary() {
            break;
        }
        if msg.role_is_user() {
            count += 1;
        }
    }
    count
}

fn build_summary_text(messages: &[ChatMessage], strip_media: bool) -> String {
    let mut text = String::from(
        "Summarize the following conversation. Preserve all key decisions, \
         file paths, code changes, error messages, and context needed to \
         continue the work. Be concise but complete.\n\n",
    );

    for msg in messages {
        let role = if msg.role_is_user() {
            "User"
        } else {
            "Assistant"
        };
        text.push_str(&format!("--- {} ---\n", role));
        for part in &msg.parts {
            if strip_media {
                text.push_str(&part.text_only());
            } else {
                text.push_str(&part.to_display_string());
            }
            text.push('\n');
        }
    }

    text
}

const COMPACTION_SYSTEM_PROMPT: &str = "\
You are a conversation summarizer. Your job is to create a concise summary \
of the conversation that preserves all information needed to continue the work. \
Include: file paths modified, key decisions made, code patterns established, \
error messages encountered, and current state of the task. \
Do NOT include pleasantries or meta-commentary. Be factual and dense.";

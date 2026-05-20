//! In-process teammate runner.
//!
//! Implements the agent loop for teammates running in the same process as the
//! leader. This is the primary execution mode (v126's `teammateMode: "in-process"`).
//!
//! Lifecycle:
//! 1. Spawned via `start_teammate()` — registers task state, starts background tokio task
//! 2. Runs the agent loop: send prompt → stream response → execute tools → repeat
//! 3. Goes idle after each turn — sends idle notification to leader
//! 4. Polls for next message (mailbox or pending_user_messages)
//! 5. On shutdown request → model decides approve/reject → if approved, exit loop
//! 6. On abort signal → immediately exit loop
//!
//! Communication:
//! - Receives work via `pending_user_messages` (fast path) or mailbox polling
//! - Sends results to leader via `SendMessage` tool calls
//! - Idle notifications are auto-delivered to leader's mailbox

use std::time::Duration;

use tokio::sync::{mpsc, watch};
use tracing::{debug, warn};

use super::TEAM_LEAD_NAME;
use super::executor::TurnResult;
use super::mailbox;
use super::types::*;

/// Teammate colors matching v126's palette. Cycled through on each spawn.
const TEAMMATE_COLORS: &[&str] = &[
    "#4FC3F7", "#81C784", "#FFB74D", "#BA68C8", "#F06292", "#4DD0E1", "#AED581", "#FFD54F",
    "#7986CB", "#A1887F",
];

static COLOR_INDEX: std::sync::atomic::AtomicUsize = std::sync::atomic::AtomicUsize::new(0);

/// Assign a color for a new teammate (cycles through palette).
pub fn assign_teammate_color() -> String {
    let idx = COLOR_INDEX.fetch_add(1, std::sync::atomic::Ordering::Relaxed);
    TEAMMATE_COLORS[idx % TEAMMATE_COLORS.len()].to_owned()
}

/// Configuration for starting an in-process teammate.
pub struct TeammateRunnerConfig {
    pub identity: TeammateIdentity,
    pub prompt: String,
    pub description: String,
    #[allow(dead_code)]
    pub model: Option<String>,
    #[allow(dead_code)]
    pub agent_type: Option<String>,
    /// Provider for API calls. Shared with the leader.
    pub provider: std::sync::Arc<dyn jfc_provider::Provider>,
    /// Model ID to use for this teammate's API calls.
    pub model_id: jfc_provider::ModelId,
    /// System prompt additions (agent-specific + teammate addendum).
    pub system_prompt: Option<String>,
    /// Shared task list used by TaskCreate/TaskUpdate/TaskList/TaskDone.
    pub task_store: Option<std::sync::Arc<jfc_session::TaskStore>>,
}

/// Message types the runner can receive from its poll loop.
#[derive(Debug)]
pub enum PollResult {
    /// New message from leader or another teammate.
    NewMessage {
        message: String,
        from: String,
        color: Option<String>,
        summary: Option<String>,
    },
    /// Shutdown request received.
    ShutdownRequest {
        request: Option<ShutdownRequest>,
        #[allow(dead_code)]
        original_message: String,
    },
    /// A task from the task list is available to claim.
    TaskAvailable { task_id: String, prompt: String },
    /// The teammate was aborted (lifecycle abort signal).
    Aborted,
}

/// Start an in-process teammate. Spawns a background tokio task that runs
/// the agent loop. Returns abort handle and task ID.
///
/// This is the main entry point called after spawn validation.
/// Single source of truth for the public task id of an in-process
/// teammate. The runner uses this internally; the dispatcher uses it
/// to register the matching `BackgroundTask` so streaming events
/// route correctly.
pub fn teammate_task_id(agent_id: &str) -> String {
    format!("teammate-{agent_id}")
}

pub fn start_teammate(
    config: TeammateRunnerConfig,
    event_tx: mpsc::UnboundedSender<TeammateEvent>,
) -> (String, watch::Sender<bool>) {
    let (abort_tx, abort_rx) = watch::channel(false);
    let task_id = format!("teammate-{}", config.identity.agent_id);

    let identity = config.identity.clone();
    let task_id_clone = task_id.clone();

    tokio::spawn(async move {
        let result = run_teammate_loop(config, abort_rx, event_tx.clone()).await;

        match result {
            Ok(TeammateExit::Completed) => {
                debug!(
                    "[InProcessRunner] Teammate {} completed normally",
                    identity.agent_name
                );
                let _ = event_tx.send(TeammateEvent::Completed {
                    task_id: task_id_clone,
                    agent_id: identity.agent_id,
                });
            }
            Ok(TeammateExit::Cancelled) => {
                // Abort signal — either explicit (.send(true)) or the
                // watch::Sender was dropped. The previous version silently
                // mapped this to Completed, which lit up every teammate as
                // ": Done" in the UI before they did any work, because the
                // spawn site at stream.rs:1962 dropped the abort handle.
                debug!(
                    "[InProcessRunner] Teammate {} cancelled",
                    identity.agent_name
                );
                let _ = event_tx.send(TeammateEvent::Cancelled {
                    task_id: task_id_clone,
                    agent_id: identity.agent_id,
                });
            }
            Err(e) => {
                warn!(
                    "[InProcessRunner] Teammate {} failed: {e}",
                    identity.agent_name
                );
                let _ = event_tx.send(TeammateEvent::Failed {
                    task_id: task_id_clone,
                    agent_id: identity.agent_id,
                    error: e.to_string(),
                });
            }
        }
    });

    (task_id, abort_tx)
}

/// Why a teammate's run loop ended. Aborted vs naturally exhausted is a
/// meaningful distinction for the UI — aborted means "not done yet",
/// completed means "the agent decided it was finished".
#[derive(Debug)]
pub(super) enum TeammateExit {
    Completed,
    Cancelled,
}

/// Events emitted by the teammate runner back to the leader.
#[derive(Debug, Clone)]
pub enum TeammateEvent {
    /// Teammate has gone idle (finished processing, waiting for next message).
    Idle {
        task_id: String,
        #[allow(dead_code)]
        agent_id: String,
        agent_name: String,
        reason: Option<String>,
        summary: Option<String>,
    },
    /// Teammate is actively processing (status update for UI).
    Progress {
        task_id: String,
        #[allow(dead_code)]
        agent_id: String,
        token_count: u64,
        tool_use_count: u64,
        last_tool: Option<String>,
        /// Model being used, for cost aggregation in the status bar.
        model_id: Option<String>,
        /// Incremental cost in USD since last progress event.
        cost_usd: Option<f64>,
    },
    /// Teammate completed and exited its loop.
    Completed { task_id: String, agent_id: String },
    /// Teammate's run loop was cancelled before natural completion —
    /// either by an explicit abort signal (ESC×2, kill button) or by the
    /// abort_tx watch::Sender being dropped. Distinct from Completed so
    /// the UI can label the row "Cancelled" instead of "Done".
    Cancelled { task_id: String, agent_id: String },
    /// Teammate encountered a fatal error.
    Failed {
        task_id: String,
        agent_id: String,
        error: String,
    },
    /// Teammate wants to send a message (goes through SendMessage tool).
    #[allow(dead_code)]
    MessageSent {
        from: String,
        to: String,
        text: String,
        summary: Option<String>,
    },
    /// One streaming-text delta from the teammate's current turn.
    /// The main loop translates this into `TaskEvent::AgentChunk` so
    /// the task panel fills live as the teammate streams. Without
    /// it, drilling into a running teammate showed "No messages yet"
    /// until the entire turn finished.
    TextDelta {
        task_id: String,
        #[allow(dead_code)]
        agent_id: String,
        delta: String,
    },
}

/// Main loop for an in-process teammate.
///
/// This mirrors v126's `runInProcessTeammate` in `inProcessRunner.ts`.
/// The actual API streaming is delegated to the leader's provider — the
/// teammate sends its prompts through an internal channel and receives
/// streamed responses. For now this is a structural skeleton that:
/// 1. Formats the initial prompt as a teammate-message
/// 2. Enters the idle/poll loop
/// 3. Responds to shutdown/abort signals
///
/// Full integration with the streaming API and tool execution will connect
/// to the existing `stream.rs` / `scheduler.rs` infrastructure.
async fn run_teammate_loop(
    config: TeammateRunnerConfig,
    mut abort_rx: watch::Receiver<bool>,
    event_tx: mpsc::UnboundedSender<TeammateEvent>,
) -> anyhow::Result<TeammateExit> {
    let identity = &config.identity;
    let task_id = format!("teammate-{}", identity.agent_id);

    debug!(
        "[InProcessRunner] Starting agent loop for {} (team: {})",
        identity.agent_name, identity.team_name
    );

    // Format initial prompt as a teammate message from the leader
    let mut current_prompt = format_teammate_message(
        TEAM_LEAD_NAME,
        &config.prompt,
        None,
        Some(&config.description),
    );

    let mut iteration = 0u64;
    let mut conversation_history: Vec<jfc_provider::ProviderMessage> = Vec::new();
    let mut active_task_id: Option<String> = None;

    let exit_reason: TeammateExit = loop {
        // Check abort before processing
        if *abort_rx.borrow() {
            debug!(
                "[InProcessRunner] {} aborted before iteration",
                identity.agent_name
            );
            break TeammateExit::Cancelled;
        }

        iteration += 1;
        debug!(
            "[InProcessRunner] {} iteration {iteration}, prompt len={}",
            identity.agent_name,
            current_prompt.len()
        );

        // ─── Run agent turn ──────────────────────────────────────────────
        // Build messages, stream from provider, execute tools in a loop
        // until the model returns EndTurn (no more tool calls).

        let turn_result = super::executor::run_single_turn(
            &config,
            &current_prompt,
            &mut conversation_history,
            &event_tx,
            &task_id,
            &mut abort_rx,
        )
        .await;

        match turn_result {
            TurnResult::Completed {
                token_count,
                tool_count,
                last_tool,
            } => {
                if let (Some(store), Some(task_id)) =
                    (config.task_store.as_ref(), active_task_id.take())
                {
                    let _ = store.update(
                        &task_id,
                        jfc_session::TaskPatch {
                            status: Some(jfc_session::TaskStatus::Completed),
                            ..Default::default()
                        },
                    );
                }
                let _ = event_tx.send(TeammateEvent::Progress {
                    task_id: task_id.clone(),
                    agent_id: identity.agent_id.clone(),
                    token_count,
                    tool_use_count: tool_count,
                    last_tool,
                    model_id: Some(config.model_id.as_str().to_owned()),
                    cost_usd: None,
                });
            }
            TurnResult::Aborted => {
                debug!("[InProcessRunner] {} turn aborted", identity.agent_name);
                break TeammateExit::Cancelled;
            }
            TurnResult::Error(e) => {
                warn!("[InProcessRunner] {} turn error: {e}", identity.agent_name);
                // Continue to idle — don't crash the teammate
            }
        }

        // ─── Go idle ─────────────────────────────────────────────────────
        let _ = event_tx.send(TeammateEvent::Idle {
            task_id: task_id.clone(),
            agent_id: identity.agent_id.clone(),
            agent_name: identity.agent_name.clone(),
            reason: Some("available".to_owned()),
            summary: None,
        });

        // Send idle notification to leader's mailbox
        let _ = mailbox::send_idle_notification(
            &identity.agent_name,
            identity.color.as_deref(),
            &identity.team_name,
            Some("available"),
            None,
        )
        .await;

        debug!(
            "[InProcessRunner] {} waiting for next message",
            identity.agent_name
        );

        // ─── Poll for next message ───────────────────────────────────────
        let poll_result =
            poll_for_next_message(identity, config.task_store.clone(), &mut abort_rx).await;

        match poll_result {
            PollResult::NewMessage {
                message,
                from,
                color,
                summary,
            } => {
                debug!(
                    "[InProcessRunner] {} received message from {from}",
                    identity.agent_name
                );
                if from == "user" {
                    current_prompt = message;
                } else {
                    current_prompt = format_teammate_message(
                        &from,
                        &message,
                        color.as_deref(),
                        summary.as_deref(),
                    );
                }
            }
            PollResult::ShutdownRequest {
                request,
                original_message: _,
            } => {
                debug!(
                    "[InProcessRunner] {} received shutdown request",
                    identity.agent_name
                );
                // Route the shutdown through the same permission_sync
                // protocol that gates plan-mode tool calls. The leader
                // either auto-approves (Bypass / Default-non-mutation)
                // or escalates to the user via a `/swarm-approve` toast.
                // Auto-approving shutdowns blindly meant any teammate
                // could exit unilaterally — even mid-task.
                let req = super::permission_sync::create_permission_request(
                    "shutdown",
                    "shutdown",
                    serde_json::json!({
                        "reason": request.as_ref().and_then(|r| r.reason.clone()).unwrap_or_default(),
                    }),
                    &format!(
                        "Teammate {} requests graceful shutdown",
                        identity.agent_name
                    ),
                    &identity.agent_id,
                    &identity.agent_name,
                    identity.color.as_deref(),
                    &identity.team_name,
                );
                let request_id = req.id.clone();
                if let Err(e) = super::permission_sync::write_permission_request(&req).await {
                    tracing::warn!(
                        target: "jfc::swarm::runner",
                        error = %e,
                        "failed to write shutdown request — staying alive"
                    );
                    continue;
                }
                let resolved = super::permission_sync::poll_for_response(
                    &request_id,
                    &identity.team_name,
                    std::time::Duration::from_secs(300),
                )
                .await;
                let approved = matches!(
                    resolved.as_ref().map(|r| r.status),
                    Some(super::types::PermissionRequestStatus::Approved)
                );
                if approved {
                    debug!(
                        "[InProcessRunner] {} shutdown approved — exiting",
                        identity.agent_name
                    );
                    break TeammateExit::Completed;
                }
                debug!(
                    "[InProcessRunner] {} shutdown denied — staying alive",
                    identity.agent_name
                );
            }
            PollResult::TaskAvailable { task_id, prompt } => {
                debug!(
                    "[InProcessRunner] {} claimed task from task list",
                    identity.agent_name
                );
                active_task_id = Some(task_id);
                current_prompt =
                    format_teammate_message("task-list", &prompt, None, Some("auto-claimed task"));
            }
            PollResult::Aborted => {
                debug!(
                    "[InProcessRunner] {} aborted while waiting",
                    identity.agent_name
                );
                break TeammateExit::Cancelled;
            }
        }
    };

    Ok(exit_reason)
}

/// Poll for the next message or signal. Checks:
/// 1. Abort signal (highest priority)
/// 2. File-based mailbox (shutdown requests prioritized, then leader, then any)
/// 3. Repeats every POLL_INTERVAL_MS
async fn poll_for_next_message(
    identity: &TeammateIdentity,
    task_store: Option<std::sync::Arc<jfc_session::TaskStore>>,
    abort_rx: &mut watch::Receiver<bool>,
) -> PollResult {
    let mut poll_count = 0u32;

    loop {
        // Check abort
        if *abort_rx.borrow() {
            return PollResult::Aborted;
        }

        // Wait before first poll to let messages arrive
        if poll_count > 0 {
            tokio::select! {
                _ = tokio::time::sleep(Duration::from_millis(super::POLL_INTERVAL_MS)) => {}
                _ = abort_rx.changed() => {
                    if *abort_rx.borrow() {
                        return PollResult::Aborted;
                    }
                }
            }
        }
        poll_count += 1;

        // Check abort again after sleep
        if *abort_rx.borrow() {
            return PollResult::Aborted;
        }

        // Read mailbox
        let messages = mailbox::read_mailbox(&identity.agent_name, &identity.team_name).await;

        // Priority 1: Shutdown requests
        for (idx, msg) in messages.iter().enumerate() {
            if !msg.read {
                if let Some(shutdown) = mailbox::parse_shutdown_request(&msg.text) {
                    let _ =
                        mailbox::mark_message_read(&identity.agent_name, &identity.team_name, idx)
                            .await;
                    return PollResult::ShutdownRequest {
                        request: Some(shutdown),
                        original_message: msg.text.clone(),
                    };
                }
            }
        }

        // Priority 2: Messages from leader
        for (idx, msg) in messages.iter().enumerate() {
            if !msg.read && msg.from == TEAM_LEAD_NAME {
                let _ = mailbox::mark_message_read(&identity.agent_name, &identity.team_name, idx)
                    .await;
                return PollResult::NewMessage {
                    message: msg.text.clone(),
                    from: msg.from.clone(),
                    color: msg.color.clone(),
                    summary: msg.summary.clone(),
                };
            }
        }

        // Priority 3: Any unread message
        for (idx, msg) in messages.iter().enumerate() {
            if !msg.read {
                let _ = mailbox::mark_message_read(&identity.agent_name, &identity.team_name, idx)
                    .await;
                return PollResult::NewMessage {
                    message: msg.text.clone(),
                    from: msg.from.clone(),
                    color: msg.color.clone(),
                    summary: msg.summary.clone(),
                };
            }
        }

        // Check task list for unclaimed work (auto-claiming)
        if let Some((task_id, prompt)) =
            check_task_list_for_work(identity, task_store.clone()).await
        {
            return PollResult::TaskAvailable { task_id, prompt };
        }

        // No messages found — continue polling
    }
}

/// Check the team's task list for an unblocked, unowned task to claim.
/// Returns a formatted prompt if a task was successfully claimed.
async fn check_task_list_for_work(
    identity: &TeammateIdentity,
    store: Option<std::sync::Arc<jfc_session::TaskStore>>,
) -> Option<(String, String)> {
    let store = store.unwrap_or_else(|| jfc_session::TaskStore::open_team(&identity.team_name));
    let task = store.claim_next_available(&identity.agent_name)?;
    debug!(
        "[InProcessRunner] {} auto-claimed task #{}: {}",
        identity.agent_name, task.id, task.subject
    );

    let subject = if task.subject.is_empty() {
        "(unnamed task)"
    } else {
        task.subject.as_str()
    };
    let mut prompt = format!(
        "Complete all open tasks. Start with task #{}:\n\n{}",
        task.id, subject
    );
    if !task.description.is_empty() {
        prompt.push_str(&format!("\n\n{}", task.description));
    }
    Some((task.id.to_string(), prompt))
}

// ─── Agent Turn Execution ────────────────────────────────────────────────────


// ─── Leader inbox polling ────────────────────────────────────────────────────

/// Check the leader's inbox for new messages from teammates.
/// Returns formatted messages ready to be injected into the conversation.
/// Called periodically by the main event loop (every LEADER_POLL_INTERVAL_MS).
pub async fn poll_leader_inbox(team_name: &str) -> Vec<IncomingTeammateMessage> {
    let messages = mailbox::read_mailbox(super::TEAM_LEAD_NAME, team_name).await;
    let mut incoming = Vec::new();

    for (idx, msg) in messages.iter().enumerate() {
        if msg.read {
            continue;
        }

        // Skip idle notifications — they're informational, not conversation content
        if mailbox::is_idle_notification(&msg.text) {
            // Mark as read so we don't re-process
            let _ = mailbox::mark_message_read(super::TEAM_LEAD_NAME, team_name, idx).await;
            continue;
        }

        // Format as teammate-message for conversation injection
        let formatted = format_teammate_message(
            &msg.from,
            &msg.text,
            msg.color.as_deref(),
            msg.summary.as_deref(),
        );

        incoming.push(IncomingTeammateMessage {
            from: msg.from.clone(),
            text: msg.text.clone(),
            formatted,
            color: msg.color.clone(),
            summary: msg.summary.clone(),
        });

        // Mark as read
        let _ = mailbox::mark_message_read(super::TEAM_LEAD_NAME, team_name, idx).await;
    }

    incoming
}

/// A message from a teammate ready for delivery to the leader's conversation.
#[derive(Debug, Clone)]
pub struct IncomingTeammateMessage {
    pub from: String,
    pub text: String,
    /// Pre-formatted `<teammate-message>` XML for conversation injection.
    #[allow(dead_code)]
    pub formatted: String,
    #[allow(dead_code)]
    pub color: Option<String>,
    pub summary: Option<String>,
}

// ─── Tests ───────────────────────────────────────────────────────────────────


#[cfg(test)]
#[path = "runner_tests.rs"]
mod tests;

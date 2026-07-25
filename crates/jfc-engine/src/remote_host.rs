//! Host-side remote control bridge.
//!
//! `RemoteHost` manages the WebSocket server + connected clients and
//! provides two integrations:
//!
//! 1. **Mirror**: the event loop calls [`RemoteHost::mirror`] for each
//!    relevant `EngineEvent`, translating it into a `RemoteEnvelope` and
//!    broadcasting to all connected clients via a `tokio::broadcast`
//!    channel. Non-blocking — a slow or disconnected client never stalls
//!    the host, and multiple clients fan out from one send.
//!
//! 2. **Inject**: each client has a spawned task that reads inbound
//!    envelopes and translates them into `EngineEvent`s injected via the
//!    event-loop `tx: EventSender`.

use std::collections::VecDeque;
use std::net::SocketAddr;
use std::sync::Arc;
use std::sync::atomic::{AtomicU64, AtomicUsize, Ordering};

use base64::Engine as _;
use tokio::sync::broadcast;
use tracing::{debug, info, warn};

use jfc_remote::auth;
use jfc_remote::protocol::{
    RemoteAgentSnapshot, RemoteEnvelope, RemoteFrame, RemoteModelSnapshot,
    RemoteSessionSnapshot, RemoteWorkflowSnapshot, SessionState,
};
use jfc_remote::transport::{TransportReceiver, TransportSender};
use jfc_remote::ws::WsServer;

use crate::runtime::{ControlEvent, EngineEvent, EventSender, PromptSubmission};

/// Broadcast backlog. Frames buffer here until each client's forwarder
/// drains them; a client that lags by more than this many frames drops the
/// oldest (acceptable for a live mirror — the next full status re-syncs).
const BROADCAST_BACKLOG: usize = 1024;

/// State for the remote-control host side.
pub struct RemoteHost {
    /// The running WS server (owns the accept loop).
    server: WsServer,
    /// The pairing token for this session.
    pub token: String,
    /// Next outbound sequence number (monotonically increasing across all
    /// clients — every client shares the same ordered frame stream).
    out_seq: Arc<AtomicU64>,
    /// Broadcast sender; each connected client subscribes a receiver.
    mirror_tx: broadcast::Sender<RemoteFrame>,
    /// Retained signed frames used by reconnecting clients.
    history: Arc<std::sync::Mutex<VecDeque<RemoteFrame>>>,
    /// Number of connected clients.
    pub client_count: Arc<AtomicUsize>,
    /// Tool-use id of the most recently mirrored permission request, so the
    /// event loop doesn't re-mirror the same pending approval every burst.
    last_mirrored_approval: std::sync::Mutex<Option<String>>,
    /// Last mirrored session status, so we only emit on transitions.
    last_status: std::sync::Mutex<Option<SessionState>>,
    /// Last coherent state snapshot, used to suppress duplicate snapshots.
    last_snapshot: std::sync::Mutex<Option<RemoteSessionSnapshot>>,
}

impl RemoteHost {
    /// Start the remote-control server. Spawns the client acceptor and a
    /// heartbeat task, and returns the host handle.
    pub async fn start(port: u16, event_tx: EventSender) -> std::io::Result<Arc<Self>> {
        let token = auth::generate_token();
        let addr: SocketAddr = format!("127.0.0.1:{port}").parse().unwrap();
        let (server, client_rx) = WsServer::bind(addr, token.clone()).await?;

        info!(target: "jfc::remote", addr = %server.addr, "remote-control server started");

        let (mirror_tx, _) = broadcast::channel(BROADCAST_BACKLOG);
        let client_count = Arc::new(AtomicUsize::new(0));

        let host = Arc::new(Self {
            server,
            token: token.clone(),
            out_seq: Arc::new(AtomicU64::new(1)),
            mirror_tx: mirror_tx.clone(),
            history: Arc::new(std::sync::Mutex::new(VecDeque::with_capacity(
                BROADCAST_BACKLOG,
            ))),
            client_count: Arc::clone(&client_count),
            last_mirrored_approval: std::sync::Mutex::new(None),
            last_status: std::sync::Mutex::new(None),
            last_snapshot: std::sync::Mutex::new(None),
        });

        // Accept clients: each gets a broadcast subscription (outbound) and an
        // inbound forwarder task.
        tokio::spawn(accept_clients(
            client_rx,
            mirror_tx,
            event_tx,
            token,
            client_count,
            Arc::clone(&host.history),
            Arc::clone(&host.out_seq),
        ));

        // Heartbeat: keep idle connections + NAT mappings alive.
        let host_for_hb = Arc::downgrade(&host);
        tokio::spawn(async move {
            let mut tick = tokio::time::interval(std::time::Duration::from_secs(20));
            tick.tick().await; // skip the immediate first tick
            loop {
                tick.tick().await;
                match host_for_hb.upgrade() {
                    Some(h) => h.mirror(RemoteEnvelope::Heartbeat),
                    None => break, // host dropped — stop the heartbeat
                }
            }
        });

        Ok(host)
    }

    /// Mirror an envelope to all connected clients. Non-blocking — silently
    /// drops if no client is subscribed.
    pub fn mirror(&self, envelope: RemoteEnvelope) {
        let seq = self.out_seq.fetch_add(1, Ordering::Relaxed);
        let frame = auth::build_signed_frame(&self.token, seq, envelope);
        if let Ok(mut history) = self.history.lock() {
            if history.len() == BROADCAST_BACKLOG {
                history.pop_front();
            }
            history.push_back(frame.clone());
        }
        if self.client_count.load(Ordering::Relaxed) == 0 {
            return;
        }
        // `send` only errors when there are zero receivers, which races the
        // client_count guard above (a client disconnecting mid-mirror). That's
        // benign — the frame simply has no audience.
        if self.mirror_tx.send(frame).is_err() {
            debug!(target: "jfc::remote", "mirror: no subscribers (client disconnected mid-send)");
        }
    }

    /// Mirror a `PermissionRequest` for the app's current pending approval,
    /// at most once per distinct tool. Called from the event loop after each
    /// burst so a remote client learns a tool is awaiting approval. `diff` is
    /// a plain-text preview of the pending change (Edit/Write/patch/Bash).
    pub fn mirror_pending_approval(
        &self,
        tool_use_id: &str,
        tool_name: &str,
        summary: String,
        diff: Option<String>,
    ) {
        {
            let mut last = self.last_mirrored_approval.lock().unwrap();
            if last.as_deref() == Some(tool_use_id) {
                return; // already mirrored this one
            }
            *last = Some(tool_use_id.to_string());
        }
        self.mirror(RemoteEnvelope::PermissionRequest {
            tool_use_id: tool_use_id.to_string(),
            tool_name: tool_name.to_string(),
            summary,
            diff,
        });
    }

    /// Mirror a session status, but only when it differs from the last one
    /// sent (so we don't flood Running on every chunk). Called post-burst.
    pub fn mirror_status(&self, status: SessionState) {
        {
            let mut last = self.last_status.lock().unwrap();
            if *last == Some(status) {
                return;
            }
            *last = Some(status);
        }
        self.mirror(RemoteEnvelope::SessionStatus {
            status,
            message: None,
        });
    }

    pub fn mirror_snapshot(&self, snapshot: RemoteSessionSnapshot) {
        {
            let mut last = self.last_snapshot.lock().unwrap();
            if last.as_ref() == Some(&snapshot) {
                return;
            }
            *last = Some(snapshot.clone());
        }
        self.mirror(RemoteEnvelope::SessionSnapshot { snapshot });
    }

    /// Clear the mirrored-approval marker when the pending approval resolves,
    /// so a future approval of the same tool id re-mirrors.
    pub fn clear_pending_approval(&self) {
        *self.last_mirrored_approval.lock().unwrap() = None;
    }

    /// Shut down the WS server.
    pub fn shutdown(&self) {
        self.server.shutdown();
    }

    /// The address the server is listening on.
    pub fn addr(&self) -> SocketAddr {
        self.server.addr
    }
}

/// Build a deterministic reconnect snapshot from the engine's canonical
/// state. Sorting the model catalog keeps duplicate suppression effective even
/// though provider catalogs are stored in a `HashMap`.
pub fn session_snapshot(state: &crate::app::EngineState) -> RemoteSessionSnapshot {
    let agents = state
        .background_tasks
        .values()
        .map(|task| RemoteAgentSnapshot {
            id: task.task_id.to_string(),
            description: task.description.clone(),
            status: task.status.label().to_owned(),
            model: task.model_used.clone(),
            last_tool: task.last_tool.clone(),
            elapsed_ms: u64::try_from(task.started_at.elapsed().as_millis()).unwrap_or(u64::MAX),
            input_tokens: task
                .latest_input_tokens
                .saturating_add(task.latest_cache_read_tokens)
                .saturating_add(task.latest_cache_write_tokens),
            output_tokens: task.cumulative_output_tokens,
        })
        .collect();

    let workflows = state
        .background_tasks
        .values()
        .filter_map(|task| {
            task.workflow_progress
                .as_ref()
                .map(|progress| RemoteWorkflowSnapshot {
                    task_id: task.task_id.to_string(),
                    run_id: progress.run_id.clone(),
                    name: progress.meta.name.clone(),
                    status: progress.status.to_string(),
                    phase: progress.current_phase.clone(),
                    running_agents: progress.running_count(),
                    finished_agents: progress.finished_count(),
                    total_agents: progress.agents.len(),
                    total_tokens: progress.total_tokens,
                })
        })
        .collect();

    let mut models = state
        .provider_models
        .values()
        .flatten()
        .map(|model| RemoteModelSnapshot {
            id: model.id.to_string(),
            provider: model.provider.to_string(),
            display_name: model.display_name.clone(),
            context_window_tokens: model.context_window_tokens,
            max_output_tokens: model.max_output_tokens,
        })
        .collect::<Vec<_>>();
    models.sort_by(|left, right| {
        (&left.provider, &left.id).cmp(&(&right.provider, &right.id))
    });
    models.dedup_by(|left, right| left.provider == right.provider && left.id == right.id);

    RemoteSessionSnapshot {
        session_id: state.current_session_id.as_ref().map(ToString::to_string),
        model: state.model.to_string(),
        permission_mode: state.permission_mode.label().to_owned(),
        active_goal: state.goal.as_ref().map(|goal| goal.condition.clone()),
        agents,
        workflows,
        models,
    }
}

// ─── Client acceptor ─────────────────────────────────────────────────────────

/// Accept incoming client connections. Each client subscribes to the
/// broadcast for outbound frames and runs an inbound forwarder. Supports
/// multiple simultaneous clients.
async fn accept_clients(
    mut client_rx: tokio::sync::mpsc::Receiver<(TransportSender, TransportReceiver)>,
    mirror_tx: broadcast::Sender<RemoteFrame>,
    event_tx: EventSender,
    token: String,
    client_count: Arc<AtomicUsize>,
    history: Arc<std::sync::Mutex<VecDeque<RemoteFrame>>>,
    out_seq: Arc<AtomicU64>,
) {
    while let Some((client_out_tx, client_in_rx)) = client_rx.recv().await {
        let n = client_count.fetch_add(1, Ordering::Relaxed) + 1;
        info!(target: "jfc::remote", clients = n, "client connected");

        let mirror_rx = mirror_tx.subscribe();
        let cc = Arc::clone(&client_count);
        let etx = event_tx.clone();
        let tok = token.clone();
        let retained = Arc::clone(&history);
        let seq = Arc::clone(&out_seq);

        tokio::spawn(run_client_bridge(
            client_out_tx,
            client_in_rx,
            mirror_rx,
            etx,
            tok,
            cc,
            retained,
            seq,
        ));
    }
}

/// Per-client bridge: outbound broadcast → WS, inbound WS → event bus.
async fn run_client_bridge(
    client_out_tx: TransportSender,
    mut client_in_rx: TransportReceiver,
    mut mirror_rx: broadcast::Receiver<RemoteFrame>,
    event_tx: EventSender,
    token: String,
    client_count: Arc<AtomicUsize>,
    history: Arc<std::sync::Mutex<VecDeque<RemoteFrame>>>,
    out_seq: Arc<AtomicU64>,
) {
    let send_lock = Arc::new(tokio::sync::Mutex::new(()));
    let outbound_sender = client_out_tx.clone();
    let outbound_lock = Arc::clone(&send_lock);
    // Outbound forwarder: broadcast → this client's WS.
    let out_task = tokio::spawn(async move {
        loop {
            match mirror_rx.recv().await {
                Ok(frame) => {
                    let _guard = outbound_lock.lock().await;
                    if outbound_sender.send(frame).await.is_err() {
                        break;
                    }
                }
                Err(broadcast::error::RecvError::Lagged(skipped)) => {
                    warn!(target: "jfc::remote", skipped, "client lagged — dropping frames");
                }
                Err(broadcast::error::RecvError::Closed) => break,
            }
        }
    });

    // Inbound forwarder: client WS → event bus.
    client_inbound_loop(
        &mut client_in_rx,
        &client_out_tx,
        &event_tx,
        &token,
        &history,
        &out_seq,
        &send_lock,
    )
    .await;
    out_task.abort();

    let remaining = client_count.fetch_sub(1, Ordering::Relaxed) - 1;
    info!(target: "jfc::remote", clients = remaining, "client disconnected");
}

/// Inbound loop for one client: reads frames, verifies HMAC + seq,
/// translates envelopes into AppEvents.
async fn client_inbound_loop(
    rx: &mut TransportReceiver,
    outbound: &TransportSender,
    event_tx: &EventSender,
    token: &str,
    history: &Arc<std::sync::Mutex<VecDeque<RemoteFrame>>>,
    out_seq: &Arc<AtomicU64>,
    send_lock: &Arc<tokio::sync::Mutex<()>>,
) {
    let mut seq_tracker = auth::SeqTracker::new();

    while let Some(frame) = rx.recv().await {
        if !auth::verify_frame(token, &frame) {
            warn!(target: "jfc::remote", seq = frame.seq, "HMAC verification failed");
            continue;
        }
        if !seq_tracker.accept(frame.seq) {
            warn!(target: "jfc::remote", seq = frame.seq, "sequence replay rejected");
            continue;
        }
        if let RemoteEnvelope::Resume { after_seq } = &frame.payload {
            replay_retained(outbound, token, *after_seq, history, out_seq, send_lock).await;
            continue;
        }
        if let Some(app_event) = translate_inbound(&frame.payload)
            && event_tx.send(app_event).await.is_err()
        {
            debug!(target: "jfc::remote", "event bus closed — stopping inbound loop");
            break;
        }
    }
}

async fn replay_retained(
    outbound: &TransportSender,
    token: &str,
    after_seq: u64,
    history: &Arc<std::sync::Mutex<VecDeque<RemoteFrame>>>,
    out_seq: &Arc<AtomicU64>,
    send_lock: &Arc<tokio::sync::Mutex<()>>,
) {
    let (frames, through_seq) = history
        .lock()
        .map(|history| {
            let through = history.back().map_or(after_seq, |frame| frame.seq);
            let frames = history
                .iter()
                .filter(|frame| frame.seq > after_seq)
                .cloned()
                .collect::<Vec<_>>();
            (frames, through)
        })
        .unwrap_or_default();
    let _guard = send_lock.lock().await;
    for frame in frames {
        if outbound.send(frame).await.is_err() {
            return;
        }
    }
    let seq = out_seq.fetch_add(1, Ordering::Relaxed);
    let complete = auth::build_signed_frame(
        token,
        seq,
        RemoteEnvelope::ReplayComplete { through_seq },
    );
    let _ = outbound.send(complete).await;
}

/// Translate an inbound client envelope into an EngineEvent.
fn translate_inbound(envelope: &RemoteEnvelope) -> Option<EngineEvent> {
    match envelope {
        RemoteEnvelope::UserPrompt { text } => {
            debug!(target: "jfc::remote", len = text.len(), "remote user prompt");
            Some(EngineEvent::Control(ControlEvent::SubmitPrompt(
                text.clone(),
            )))
        }
        RemoteEnvelope::UserPromptWithAttachments { text, attachments } => {
            match decode_remote_attachments(attachments) {
                Ok(attachments) => Some(EngineEvent::Control(
                    ControlEvent::SubmitPromptWithState(PromptSubmission {
                        text: text.clone(),
                        attachments,
                        edit_at: None,
                    }),
                )),
                Err(error) => Some(EngineEvent::Control(ControlEvent::Notice {
                    kind: crate::toast::ToastKind::Error,
                    text: error,
                })),
            }
        }
        RemoteEnvelope::SlashCommand { command } => {
            let command = command.trim();
            if command.is_empty()
                || command.len() > 4_096
                || command.contains('\n')
                || command.contains('\r')
            {
                return None;
            }
            Some(EngineEvent::Control(ControlEvent::RunCommand(
                if command.starts_with('/') {
                    command.to_owned()
                } else {
                    format!("/{command}")
                },
            )))
        }
        RemoteEnvelope::ModelSelect { model } => {
            let model = model.trim();
            if model.is_empty()
                || model.len() > 512
                || model.contains('\n')
                || model.contains('\r')
            {
                return None;
            }
            Some(EngineEvent::Control(ControlEvent::RunCommand(format!(
                "/model {model}"
            ))))
        }
        RemoteEnvelope::ActiveGoalAdopt { condition } => {
            let condition = condition.trim();
            if condition.is_empty() || condition.len() > crate::goal::MAX_CONDITION_LEN {
                return None;
            }
            Some(EngineEvent::Control(ControlEvent::RunCommand(format!(
                "/goal {condition}"
            ))))
        }
        RemoteEnvelope::Interrupt => {
            debug!(target: "jfc::remote", "remote interrupt");
            Some(EngineEvent::Control(ControlEvent::Interrupt))
        }
        RemoteEnvelope::ApprovalResponse {
            tool_use_id,
            approved,
        } => Some(EngineEvent::Control(ControlEvent::ResolveApproval {
            tool_use_id: tool_use_id.clone(),
            approved: *approved,
        })),
        RemoteEnvelope::PlanApprovalResponse { approve, .. } => {
            Some(EngineEvent::Control(ControlEvent::ResolvePlan {
                approved: *approve,
            }))
        }
        RemoteEnvelope::Ping | RemoteEnvelope::Resume { .. } => None,
        other => {
            debug!(target: "jfc::remote", ?other, "ignoring outbound envelope from client");
            None
        }
    }
}

fn decode_remote_attachments(
    attachments: &[jfc_remote::protocol::RemoteAttachment],
) -> Result<Vec<jfc_core::Attachment>, String> {
    const MAX_ATTACHMENTS: usize = 10;
    const MAX_TOTAL_BYTES: usize = 25 * 1024 * 1024;
    if attachments.len() > MAX_ATTACHMENTS {
        return Err(format!("remote prompt has more than {MAX_ATTACHMENTS} attachments"));
    }
    let mut total = 0usize;
    attachments
        .iter()
        .map(|attachment| {
            let kind = match attachment.mime_type.as_str() {
                "image/png" => jfc_core::AttachmentKind::ImagePng,
                "image/jpeg" => jfc_core::AttachmentKind::ImageJpeg,
                "image/gif" => jfc_core::AttachmentKind::ImageGif,
                "image/webp" => jfc_core::AttachmentKind::ImageWebp,
                "application/pdf" => jfc_core::AttachmentKind::ApplicationPdf,
                other => return Err(format!("unsupported remote attachment type `{other}`")),
            };
            let bytes = base64::engine::general_purpose::STANDARD
                .decode(&attachment.data_base64)
                .map_err(|_| "remote attachment is not valid base64".to_owned())?;
            total = total.saturating_add(bytes.len());
            if total > MAX_TOTAL_BYTES {
                return Err("remote attachments exceed the 25 MiB limit".to_owned());
            }
            Ok(jfc_core::Attachment {
                id: attachment.id,
                kind,
                bytes,
            })
        })
        .collect()
}

// ─── EngineEvent → RemoteEnvelope conversion ────────────────────────────────────

/// Try to convert an `EngineEvent` into a `RemoteEnvelope` for mirroring.
/// Returns `None` for events that aren't meaningful to remote clients
/// (ticks, internal provider state, etc.).
pub fn mirror_event(ev: &EngineEvent) -> Option<RemoteEnvelope> {
    use crate::runtime::*;

    if let Some(stream_ev) = stream_event(ev) {
        return match stream_ev {
            StreamEvent::Chunk { text, reasoning } => Some(RemoteEnvelope::AssistantDelta {
                text: text.clone(),
                reasoning: reasoning.clone(),
            }),
            StreamEvent::Tool(tool) => Some(RemoteEnvelope::ToolUse {
                id: tool.id.to_string(),
                name: tool.kind.label().to_string(),
                input_preview: Some(tool.input.summary()),
            }),
            // Done/Idle transitions are derived post-burst from
            // `app.engine.is_streaming` in the event loop (see
            // `mirror_status`). Errors carry a message, so they're mirrored
            // directly here.
            StreamEvent::Error(e) => Some(RemoteEnvelope::SessionStatus {
                status: SessionState::Error,
                message: Some(e.clone()),
            }),
            _ => None,
        };
    }

    match ev {
        EngineEvent::Tool(ToolEvent::Result { tool_id, result }) => {
            Some(RemoteEnvelope::ToolResult {
                id: tool_id.to_string(),
                output_preview: Some(result.output.chars().take(500).collect()),
                is_error: result.is_error(),
            })
        }
        EngineEvent::Tool(ToolEvent::SetInProgressToolUseIds { action, ids }) => {
            Some(RemoteEnvelope::SetInProgressToolUseIds {
                action: action.clone(),
                ids: ids.clone(),
            })
        }
        EngineEvent::Tool(ToolEvent::DeferredToolUse {
            id,
            name,
            input_preview,
            reason,
        }) => Some(RemoteEnvelope::DeferredToolUse {
            id: id.clone(),
            name: name.clone(),
            input_preview: input_preview.clone(),
            reason: reason.clone(),
        }),
        EngineEvent::Tool(ToolEvent::UseSummary {
            summary,
            preceding_tool_use_ids,
        }) => Some(RemoteEnvelope::ToolUseSummary {
            summary: summary.clone(),
            preceding_tool_use_ids: preceding_tool_use_ids.clone(),
            timestamp: Some(chrono::Utc::now().to_rfc3339()),
        }),
        EngineEvent::Control(ControlEvent::Notice { kind, text }) => Some(RemoteEnvelope::Toast {
            kind: format!("{kind:?}").to_lowercase(),
            text: text.clone(),
        }),
        EngineEvent::Frontend(FrontendEvent::PlanReview { plan }) => {
            Some(RemoteEnvelope::PlanApprovalRequest { plan: plan.clone() })
        }
        _ => None,
    }
}

/// Convert generic user-facing files attached to a tool result into remote
/// payloads. SendUserFile already enforces the aggregate 25 MiB bound.
pub fn mirror_attachments(ev: &EngineEvent) -> Vec<RemoteEnvelope> {
    let EngineEvent::Tool(crate::runtime::ToolEvent::Result { result, .. }) = ev else {
        return Vec::new();
    };
    result
        .files
        .iter()
        .enumerate()
        .map(|(index, file)| {
            RemoteEnvelope::AttachmentAvailable {
                attachment: jfc_remote::protocol::RemoteAttachment {
                    id: u32::try_from(index).unwrap_or(u32::MAX),
                    name: Some(file.name.clone()),
                    mime_type: file.mime_type.clone(),
                    data_base64: base64::engine::general_purpose::STANDARD.encode(&file.bytes),
                },
            }
        })
        .collect()
}

/// Build a plain-text diff preview for a pending tool (the same content the
/// approval modal shows, but as a string for the RC wire). Returns `None`
/// for tools with nothing to preview (Read, Grep, etc.).
pub fn tool_diff_preview(tool: &crate::types::ToolCall) -> Option<String> {
    use jfc_core::ToolInput;
    match &tool.input {
        ToolInput::Edit {
            file_path,
            old_string,
            new_string,
            ..
        } => {
            let mut s = format!("--- {file_path}\n+++ {file_path}\n");
            for ln in old_string.lines().take(30) {
                s.push_str(&format!("- {ln}\n"));
            }
            for ln in new_string.lines().take(30) {
                s.push_str(&format!("+ {ln}\n"));
            }
            Some(s)
        }
        ToolInput::Write { file_path, content } => {
            let mut s = format!("+++ {file_path} ({} bytes)\n", content.len());
            for ln in content.lines().take(40) {
                s.push_str(&format!("+ {ln}\n"));
            }
            Some(s)
        }
        ToolInput::ApplyPatch { patch } => Some(patch.chars().take(2000).collect()),
        ToolInput::MultiEdit { file_path, edits } => {
            let count = edits.as_array().map(|a| a.len()).unwrap_or(0);
            let mut s = format!("MultiEdit {file_path} ({count} edits)\n");
            if let Some(arr) = edits.as_array() {
                for (i, edit) in arr.iter().take(5).enumerate() {
                    let old = edit
                        .get("old_string")
                        .and_then(|v| v.as_str())
                        .unwrap_or("");
                    let new = edit
                        .get("new_string")
                        .and_then(|v| v.as_str())
                        .unwrap_or("");
                    s.push_str(&format!("@@ edit {}/{count} @@\n", i + 1));
                    for ln in old.lines().take(8) {
                        s.push_str(&format!("- {ln}\n"));
                    }
                    for ln in new.lines().take(8) {
                        s.push_str(&format!("+ {ln}\n"));
                    }
                }
            }
            Some(s)
        }
        ToolInput::Bash { command, .. } => Some(format!("$ {command}")),
        _ => None,
    }
}

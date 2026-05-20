use super::{ExecutionStatus, ToolInput, ToolKind};
use super::tool_display::ToolDisplayState;
use super::tool_output::ToolOutput;

/// One step in the per-session undo stack. Captured by the tool
/// dispatcher *before* an Edit / Write / MultiEdit / ApplyPatch fires
/// so `/undo` can restore the pre-mutation state. `previous_content =
/// None` means the file didn't exist before — undo deletes it.
#[derive(Debug, Clone)]
pub struct ToolUndoEntry {
    pub file_path: String,
    pub previous_content: Option<String>,
    pub op_label: String,
}

/// Returned by [`ToolCall::mark_running`] and friends when the caller
/// asked for a state transition that the lifecycle enum forbids
/// (e.g. Failed → Running, or any movement out of a terminal state).
/// The Display impl produces a one-line message suitable for logging.
#[derive(Debug, thiserror::Error, PartialEq, Eq)]
#[error("invalid ToolCall status transition: {from:?} → {to:?}")]
pub struct InvalidToolTransition {
    pub from: ExecutionStatus,
    pub to: ExecutionStatus,
}

#[derive(Clone, Debug)]
pub struct ToolCall {
    pub id: crate::ids::ToolId,
    pub kind: ToolKind,
    /// Lifecycle status for this tool. Direct assignment is still
    /// permitted because in-flight migration of the codebase requires
    /// it, but new code SHOULD use the [`Self::mark_running`] /
    /// [`Self::mark_completed`] / [`Self::mark_failed`] /
    /// [`Self::mark_cancelled`] transition methods, which validate the
    /// before-state and refuse invalid jumps (e.g. Failed → Running).
    /// The methods centralize the "what state did we come from?"
    /// invariant so no future caller can silently resurrect a
    /// terminal tool.
    pub status: ExecutionStatus,
    pub input: ToolInput,
    pub output: ToolOutput,
    /// Tri-state display mode (collapsed teaser / default body /
    /// expanded body), with an orthogonal pin flag baked into the
    /// states where it's meaningful. Replaces three separate bools
    /// (`is_collapsed`, `expanded`, `pinned`) so the renderer can't
    /// be handed a contradictory pair like "collapsed AND expanded".
    /// See [`ToolDisplayState`] for the variants and their helpers.
    pub display: ToolDisplayState,
    /// Wall-clock millis between the tool's dispatch and its result
    /// landing. `None` while the tool is in flight. Set by the
    /// `ToolResult` handler in `main.rs`. Surfaced in the title as
    /// a muted `[2.3s]` badge so the user can spot slow operations
    /// at a glance.
    pub elapsed_ms: Option<u64>,
    /// Wall-clock instant when the tool transitioned into flight —
    /// captured at construction and used to compute `elapsed_ms` on
    /// completion. Not persisted (recomputing the duration after a
    /// session reload is meaningless), so this isn't serialized.
    pub started_at: Option<std::time::Instant>,
}

impl ToolCall {
    /// Construct a fresh ToolCall in the `Pending` state. Use this
    /// from the stream layer where a tool is just leaving the model
    /// and hasn't been dispatched yet — guarantees the start state is
    /// always a sane `Pending`, never accidentally `Running` or
    /// `Completed`.
    pub fn new_pending(id: crate::ids::ToolId, kind: ToolKind, input: ToolInput) -> Self {
        Self {
            id,
            kind,
            status: ExecutionStatus::Pending,
            input,
            output: ToolOutput::Empty,
            display: ToolDisplayState::DEFAULT,
            elapsed_ms: None,
            started_at: Some(std::time::Instant::now()),
        }
    }

    /// Construct a ToolCall that's already in the `Failed` terminal
    /// state — used by the stream layer when malformed provider input
    /// (bad JSON, schema mismatch) means we never even get to dispatch
    /// the tool. The output carries the diagnostic that will be
    /// shipped back to the model as the tool_result.
    pub fn new_failed(
        id: crate::ids::ToolId,
        kind: ToolKind,
        input: ToolInput,
        output: ToolOutput,
    ) -> Self {
        Self {
            id,
            kind,
            status: ExecutionStatus::Failed,
            input,
            output,
            display: ToolDisplayState::DEFAULT,
            elapsed_ms: None,
            started_at: None,
        }
    }

    /// Pending → Running. Returns Err if the tool is already in a
    /// terminal state (Completed/Failed/Cancelled). Idempotent on
    /// Running.
    pub fn mark_running(&mut self) -> Result<(), InvalidToolTransition> {
        self.try_transition_to(ExecutionStatus::Running)
    }

    /// {Pending|Running} → Completed. Returns Err on terminal state.
    /// Idempotent on Completed.
    pub fn mark_completed(&mut self) -> Result<(), InvalidToolTransition> {
        self.try_transition_to(ExecutionStatus::Completed)
    }

    /// {Pending|Running} → Failed. Returns Err if the tool is already
    /// in a different terminal state (Completed/Cancelled).
    pub fn mark_failed(&mut self) -> Result<(), InvalidToolTransition> {
        self.try_transition_to(ExecutionStatus::Failed)
    }

    /// {Pending|Running} → Cancelled. Returns Err on a different
    /// terminal state. Used when the user denies a tool or moves on
    /// before it dispatches.
    #[allow(dead_code)]
    pub fn mark_cancelled(&mut self) -> Result<(), InvalidToolTransition> {
        self.try_transition_to(ExecutionStatus::Cancelled)
    }

    fn try_transition_to(&mut self, target: ExecutionStatus) -> Result<(), InvalidToolTransition> {
        if !self.status.allows_transition_to(target) {
            return Err(InvalidToolTransition {
                from: self.status,
                to: target,
            });
        }
        self.status = target;
        Ok(())
    }
}

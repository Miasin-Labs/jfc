//! Re-export shim: the canonical domain types live in `jfc-core` since the
//! engine extraction. This module preserves the historical `crate::types::*`
//! paths so the TUI crate's ~90 importing files need no churn; it is deleted
//! outright in the final shim-removal stage.

#[cfg(test)]
pub use jfc_core::ToolInputError;
pub use jfc_core::{
    ExecutionStatus, ModelUsage, ReplacementMode, TaskInput, TaskLifecycle, TaskStatusPart,
    ToolInput, ToolKind, ToolStatus,
};

// Module paths preserved for `crate::types::tool_call::X`-style imports.
pub use jfc_core::{diff, tool_call, tool_display, tool_output};

pub use jfc_core::diff::*;
pub use jfc_core::tool_call::{InvalidToolTransition, ToolCall, ToolUndoEntry};
pub use jfc_core::tool_display::ToolDisplayState;
pub use jfc_core::tool_output::{LargeText, ToolOutput, format_server_tool_result_text_public};

// Former `message.rs` / `status.rs` / `tool.rs` glob surfaces.
pub use jfc_core::{
    ChatMessage, LspServerInfo, LspStatus, McpServerInfo, McpStatus, MessagePart, Role,
    TurnInvariantError, merge_consecutive_text_parts, sample_tool_harness_message,
    validate_turn_invariants, validate_turn_invariants_inner,
};

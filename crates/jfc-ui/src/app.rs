use std::{collections::HashMap, sync::Arc};

use crossterm::event::Event;
use ratatui::style::Style;

use tui_textarea::TextArea;

use crate::provider::{Provider, StopReason};
use crate::theme::Theme;
use crate::tools::ExecutionResult;
use crate::types::*;

pub enum AppEvent {
    StreamChunk { text: Option<String>, reasoning: Option<String> },
    StreamTool(ToolCall),
    StreamDone(StopReason),
    StreamError(String),
    ToolResult { tool_id: String, result: ExecutionResult },
    Term(Event),
    Tick,
}

#[derive(Clone, Copy, PartialEq)]
pub enum ApprovalChoice {
    Yes,
    No,
    Always,
    YesSession,
}

impl ApprovalChoice {
    pub const ALL: &'static [Self] = &[Self::Yes, Self::No, Self::Always, Self::YesSession];

    pub fn label(self) -> &'static str {
        match self {
            Self::Yes => "Yes  (y)",
            Self::No => "No   (n)",
            Self::Always => "Always for this tool  (a)",
            Self::YesSession => "Yes for session  (s)",
        }
    }
}

pub struct PendingApproval {
    pub tool: ToolCall,
    pub selected: usize,
}

pub const SPINNER: &[&str] = &["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
pub const TICK_MS: u64 = 80;

pub struct App {
    pub theme: Theme,
    pub messages: Vec<ChatMessage>,
    pub streaming_text: String,
    pub streaming_reasoning: String,
    pub streaming_assistant_idx: Option<usize>,
    pub is_streaming: bool,
    pub scroll_offset: usize,
    pub total_lines: usize,
    pub textarea: TextArea<'static>,
    pub show_palette: bool,
    pub palette_input: String,
    pub palette_selected: usize,
    pub spinner_frame: usize,
    pub provider: Arc<dyn Provider>,
    pub model: String,
    pub cwd: String,
    pub reasoning_expanded: HashMap<usize, bool>,
    pub pending_approval: Option<PendingApproval>,
    pub always_approved: Vec<String>,
    pub session_approved: Vec<String>,
    pub follow_bottom: bool,
}

impl App {
    pub fn new(provider: Arc<dyn Provider>, model: String) -> Self {
        let mut textarea = TextArea::default();
        textarea.set_cursor_line_style(Style::default());
        textarea.set_placeholder_text("Type a message… (Enter to send, Shift+Enter for newline)");

        let cwd = std::env::current_dir()
            .ok()
            .and_then(|p| p.to_str().map(str::to_owned))
            .unwrap_or_default();

        Self {
            theme: Theme::dark(),
            messages: Vec::new(),
            streaming_text: String::new(),
            streaming_reasoning: String::new(),
            streaming_assistant_idx: None,
            is_streaming: false,
            scroll_offset: 0,
            total_lines: 0,
            textarea,
            show_palette: false,
            palette_input: String::new(),
            palette_selected: 0,
            spinner_frame: 0,
            provider,
            model,
            cwd,
            reasoning_expanded: HashMap::new(),
            pending_approval: None,
            always_approved: Vec::new(),
            session_approved: Vec::new(),
            follow_bottom: true,
        }
    }

    pub fn scroll_to_bottom(&mut self) {
        self.scroll_offset = self.total_lines.saturating_sub(1);
        self.follow_bottom = true;
    }

    pub fn tool_needs_approval(&self, tool: &ToolCall) -> bool {
        let name = tool.kind.label();
        if self.always_approved.iter().any(|n| n == name) {
            return false;
        }
        if self.session_approved.iter().any(|n| n == name) {
            return false;
        }
        matches!(tool.kind, ToolKind::Bash | ToolKind::Write | ToolKind::Edit | ToolKind::ApplyPatch)
    }
}

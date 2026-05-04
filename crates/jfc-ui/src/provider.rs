use std::pin::Pin;

use async_trait::async_trait;
use futures::Stream;

#[derive(Debug, Clone)]
pub enum StreamEvent {
    TextDelta { index: usize, delta: String },
    TextDone { index: usize, text: String },
    ThinkingDelta { index: usize, delta: String },
    ThinkingDone { index: usize, text: String },
    ToolDelta { index: usize, delta: String },
    ToolDone {
        index: usize,
        tool_name: String,
        tool_use_id: String,
        input_json: String,
    },
    Done { stop_reason: StopReason },
    Error { message: String },
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum StopReason {
    EndTurn,
    ToolUse,
    MaxTokens,
    StopSequence,
    Other(String),
}

#[derive(Debug, Clone)]
pub struct ProviderMessage {
    pub role: ProviderRole,
    pub content: Vec<ProviderContent>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ProviderRole {
    User,
    Assistant,
}

#[derive(Debug, Clone)]
pub enum ProviderContent {
    Text(String),
    ToolResult {
        tool_use_id: String,
        content: String,
        is_error: bool,
    },
    ToolUse {
        id: String,
        name: String,
        input: serde_json::Value,
    },
}

#[derive(Debug, Clone)]
pub struct ToolDef {
    pub name: String,
    pub description: String,
    pub input_schema: serde_json::Value,
}

#[derive(Debug, Clone)]
pub struct StreamOptions {
    pub model: String,
    pub system: Option<String>,
    pub max_tokens: u32,
    pub tools: Vec<ToolDef>,
    pub thinking_budget: Option<u32>,
}

impl StreamOptions {
    pub fn new(model: impl Into<String>) -> Self {
        Self {
            model: model.into(),
            system: None,
            max_tokens: 8192,
            tools: Vec::new(),
            thinking_budget: None,
        }
    }

    pub fn system(mut self, prompt: impl Into<String>) -> Self {
        self.system = Some(prompt.into());
        self
    }

    pub fn max_tokens(mut self, n: u32) -> Self {
        self.max_tokens = n;
        self
    }

    pub fn thinking(mut self, budget: u32) -> Self {
        self.thinking_budget = Some(budget);
        self
    }

    pub fn tools(mut self, tools: Vec<ToolDef>) -> Self {
        self.tools = tools;
        self
    }
}

pub type EventStream = Pin<Box<dyn Stream<Item = anyhow::Result<StreamEvent>> + Send>>;

#[async_trait]
pub trait Provider: Send + Sync {
    fn name(&self) -> &str;

    async fn stream(
        &self,
        messages: Vec<ProviderMessage>,
        options: &StreamOptions,
    ) -> anyhow::Result<EventStream>;
}

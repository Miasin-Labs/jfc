use serde::Deserialize;

use jfc_provider::TokenUsage;

#[derive(Debug, Deserialize)]
pub(super) struct ModelsResponse {
    pub(super) data: Vec<NvidiaModel>,
}

#[derive(Debug, Deserialize)]
pub(super) struct NvidiaModel {
    pub(super) id: String,
    #[serde(default)]
    pub(super) name: Option<String>,
    #[serde(default, alias = "context_window")]
    pub(super) context_length: Option<usize>,
    #[serde(default, alias = "max_output_tokens")]
    pub(super) max_tokens: Option<usize>,
}

#[derive(Debug, Deserialize)]
pub(super) struct ChatCompletion {
    pub(super) choices: Vec<ChatChoice>,
    pub(super) usage: Option<ChatUsage>,
}

#[derive(Debug, Deserialize)]
pub(super) struct ChatChoice {
    pub(super) message: ChatMessage,
}

#[derive(Debug, Deserialize)]
pub(super) struct ChatMessage {
    pub(super) content: Option<String>,
}

#[derive(Debug, Default, Deserialize)]
pub(super) struct ChatUsage {
    #[serde(default)]
    prompt_tokens: usize,
    #[serde(default)]
    completion_tokens: usize,
}

impl From<ChatUsage> for TokenUsage {
    fn from(value: ChatUsage) -> Self {
        Self {
            input_tokens: value.prompt_tokens,
            output_tokens: value.completion_tokens,
            thinking_tokens: None,
            cache_read_tokens: 0,
            cache_creation_tokens: 0,
        }
    }
}

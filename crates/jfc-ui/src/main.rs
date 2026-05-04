mod app;
mod context;
mod input;
mod markdown;
mod provider;
mod providers;
mod render;
mod session;
mod stream;
mod theme;
mod tools;
mod types;

use std::{io, sync::Arc, time::Duration};

use crossterm::{
    event::{self, DisableMouseCapture, EnableMouseCapture, Event, KeyEventKind},
    execute,
    terminal::{disable_raw_mode, enable_raw_mode, EnterAlternateScreen, LeaveAlternateScreen},
};
use futures::StreamExt;
use ratatui::{backend::CrosstermBackend, Terminal};
use tokio::sync::mpsc;

use app::{App, AppEvent, PendingApproval, SPINNER, TICK_MS};
use provider::Provider;
use providers::{AnthropicOAuthProvider, AnthropicProvider, OpenWebUIProvider};
use types::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::fmt()
        .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
        .with_writer(std::io::stderr)
        .init();

    let (provider, model) = build_provider();

    enable_raw_mode()?;
    let mut stdout = io::stdout();
    execute!(stdout, EnterAlternateScreen, EnableMouseCapture)?;
    let backend = CrosstermBackend::new(stdout);
    let mut terminal = Terminal::new(backend)?;

    let result = run(&mut terminal, provider, model).await;

    disable_raw_mode()?;
    execute!(terminal.backend_mut(), LeaveAlternateScreen, DisableMouseCapture)?;
    terminal.show_cursor()?;

    result
}

fn build_provider() -> (Arc<dyn Provider>, String) {
    let model = std::env::var("ANTHROPIC_MODEL")
        .or_else(|_| std::env::var("OPENWEBUI_MODEL"))
        .unwrap_or_else(|_| "claude-opus-4-5".to_string());

    if let Ok(api_key) = std::env::var("ANTHROPIC_API_KEY") {
        return (Arc::new(AnthropicProvider::new(api_key)), model);
    }
    if std::env::var("OPENWEBUI_BASE_URL").is_ok() {
        return (Arc::new(OpenWebUIProvider::new()), model);
    }
    (Arc::new(AnthropicOAuthProvider::new()), model)
}

async fn run(
    terminal: &mut Terminal<CrosstermBackend<io::Stdout>>,
    provider: Arc<dyn Provider>,
    model: String,
) -> anyhow::Result<()> {
    let (tx, mut rx) = mpsc::unbounded_channel::<AppEvent>();
    let mut app = App::new(provider, model);

    {
        let tx = tx.clone();
        tokio::spawn(async move {
            let mut reader = event::EventStream::new();
            while let Some(Ok(ev)) = reader.next().await {
                let _ = tx.send(AppEvent::Term(ev));
            }
        });
    }

    {
        let tx = tx.clone();
        tokio::spawn(async move {
            loop {
                tokio::time::sleep(Duration::from_millis(TICK_MS)).await;
                let _ = tx.send(AppEvent::Tick);
            }
        });
    }

    terminal.draw(|f| render::frame(f, &mut app))?;

    loop {
        let ev = match rx.recv().await {
            Some(e) => e,
            None => break,
        };

        match ev {
            AppEvent::Term(Event::Key(k)) if k.kind == KeyEventKind::Press => {
                if input::handle_key(&mut app, k, &tx).await? {
                    break;
                }
            }
            AppEvent::Term(_) => {}
            AppEvent::Tick => {
                app.spinner_frame = (app.spinner_frame + 1) % SPINNER.len();
            }
            AppEvent::StreamChunk { text, reasoning } => {
                if let Some(chunk) = text {
                    app.streaming_text.push_str(&chunk);
                    if let Some(idx) = app.streaming_assistant_idx {
                        if let Some(msg) = app.messages.get_mut(idx) {
                            match msg.parts.iter_mut().find(|p| matches!(p, MessagePart::Text(_))) {
                                Some(MessagePart::Text(t)) => t.push_str(&chunk),
                                _ => msg.parts.push(MessagePart::Text(chunk)),
                            }
                        }
                    }
                }
                if let Some(chunk) = reasoning {
                    app.streaming_reasoning.push_str(&chunk);
                    if let Some(idx) = app.streaming_assistant_idx {
                        if let Some(msg) = app.messages.get_mut(idx) {
                            match msg.parts.iter_mut().find(|p| matches!(p, MessagePart::Reasoning(_))) {
                                Some(MessagePart::Reasoning(t)) => t.push_str(&chunk),
                                _ => msg.parts.push(MessagePart::Reasoning(chunk)),
                            }
                        }
                    }
                }
            }
            AppEvent::StreamTool(tool) => {
                if app.tool_needs_approval(&tool) {
                    app.pending_approval = Some(PendingApproval { tool, selected: 0 });
                } else {
                    if let Some(idx) = app.streaming_assistant_idx {
                        if let Some(msg) = app.messages.get_mut(idx) {
                            msg.parts.push(MessagePart::Tool(tool.clone()));
                        }
                    }
                    stream::dispatch_tool(tool, &tx, &app.provider, &app.messages, &app.model).await;
                }
            }
            AppEvent::StreamDone(stop_reason) => {
                app.is_streaming = false;
                app.streaming_text.clear();
                app.streaming_reasoning.clear();
                if stop_reason != provider::StopReason::ToolUse {
                    app.streaming_assistant_idx = None;
                    app.scroll_to_bottom();
                }
            }
            AppEvent::StreamError(e) => {
                app.is_streaming = false;
                app.streaming_text.clear();
                app.streaming_reasoning.clear();
                app.streaming_assistant_idx = None;
                app.messages.push(ChatMessage::assistant(format!("**Error:** {e}")));
                app.scroll_to_bottom();
            }
            AppEvent::ToolResult { tool_id, result } => {
                let mut found = false;
                for msg in &mut app.messages {
                    for part in &mut msg.parts {
                        if let MessagePart::Tool(tc) = part {
                            if tc.id == tool_id {
                                tc.output = ToolOutput::Text(result.output.clone());
                                tc.status = if result.is_error {
                                    ToolStatus::Failed
                                } else {
                                    ToolStatus::Complete
                                };
                                found = true;
                                break;
                            }
                        }
                    }
                    if found { break; }
                }
                if stream::should_continue_loop(&app.messages) {
                    stream::continue_agentic_loop(&mut app, &tx).await;
                }
            }
        }

        terminal.draw(|f| render::frame(f, &mut app))?;
    }

    Ok(())
}

use crossterm::event::{self, KeyCode, KeyModifiers};
use ratatui::style::Style;
use tokio::sync::mpsc;
use tui_textarea::TextArea;

use crate::app::{App, ApprovalChoice};
use crate::stream::dispatch_tool;
use crate::types::*;

fn insert_tool_into_message(app: &mut App, tool: &ToolCall) {
    if let Some(idx) = app.streaming_assistant_idx {
        if let Some(msg) = app.messages.get_mut(idx) {
            msg.parts.push(MessagePart::Tool(tool.clone()));
        }
    }
}

pub async fn handle_key(
    app: &mut App,
    key: event::KeyEvent,
    tx: &mpsc::UnboundedSender<crate::app::AppEvent>,
) -> anyhow::Result<bool> {
    if let Some(ref mut approval) = app.pending_approval {
        match key.code {
            KeyCode::Char('y') | KeyCode::Char('Y') => {
                let tool = app.pending_approval.take().unwrap().tool;
                insert_tool_into_message(app, &tool);
                dispatch_tool(tool, tx, &app.provider, &app.messages, &app.model).await;
            }
            KeyCode::Char('n') | KeyCode::Char('N') => {
                let mut tool = app.pending_approval.take().unwrap().tool;
                tool.status = ToolStatus::Failed;
                tool.output = ToolOutput::Text("Denied by user".into());
                if let Some(idx) = app.streaming_assistant_idx {
                    if let Some(msg) = app.messages.get_mut(idx) {
                        msg.parts.push(MessagePart::Tool(tool));
                    }
                }
            }
            KeyCode::Char('a') | KeyCode::Char('A') => {
                let name = approval.tool.kind.label().to_owned();
                app.always_approved.push(name);
                let tool = app.pending_approval.take().unwrap().tool;
                insert_tool_into_message(app, &tool);
                dispatch_tool(tool, tx, &app.provider, &app.messages, &app.model).await;
            }
            KeyCode::Char('s') | KeyCode::Char('S') => {
                let name = approval.tool.kind.label().to_owned();
                app.session_approved.push(name);
                let tool = app.pending_approval.take().unwrap().tool;
                insert_tool_into_message(app, &tool);
                dispatch_tool(tool, tx, &app.provider, &app.messages, &app.model).await;
            }
            KeyCode::Up if approval.selected > 0 => {
                approval.selected -= 1;
            }
            KeyCode::Down => {
                approval.selected = (approval.selected + 1).min(ApprovalChoice::ALL.len() - 1);
            }
            KeyCode::Enter => {
                let choice = ApprovalChoice::ALL[approval.selected];
                let tool = app.pending_approval.take().unwrap().tool;
                match choice {
                    ApprovalChoice::Yes | ApprovalChoice::YesSession => {
                        if choice == ApprovalChoice::YesSession {
                            let name = tool.kind.label().to_owned();
                            app.session_approved.push(name);
                        }
                        insert_tool_into_message(app, &tool);
                        dispatch_tool(tool, tx, &app.provider, &app.messages, &app.model).await;
                    }
                    ApprovalChoice::Always => {
                        let name = tool.kind.label().to_owned();
                        app.always_approved.push(name);
                        insert_tool_into_message(app, &tool);
                        dispatch_tool(tool, tx, &app.provider, &app.messages, &app.model).await;
                    }
                    ApprovalChoice::No => {
                        let mut tool = tool;
                        tool.status = ToolStatus::Failed;
                        tool.output = ToolOutput::Text("Denied by user".into());
                        if let Some(idx) = app.streaming_assistant_idx {
                            if let Some(msg) = app.messages.get_mut(idx) {
                                msg.parts.push(MessagePart::Tool(tool));
                            }
                        }
                    }
                }
            }
            KeyCode::Esc => {
                app.pending_approval = None;
            }
            _ => {}
        }
        return Ok(false);
    }

    if app.show_palette {
        match key.code {
            KeyCode::Esc => {
                app.show_palette = false;
                app.palette_input.clear();
                app.palette_selected = 0;
            }
            KeyCode::Enter => {
                let items = palette_items(app);
                if let Some(label) = items.get(app.palette_selected) {
                    let label = label.to_string();
                    app.show_palette = false;
                    app.palette_input.clear();
                    app.palette_selected = 0;
                    execute_palette_action(app, &label);
                }
            }
            KeyCode::Up if app.palette_selected > 0 => {
                app.palette_selected -= 1;
            }
            KeyCode::Down => {
                let max = palette_items(app).len().saturating_sub(1);
                if app.palette_selected < max {
                    app.palette_selected += 1;
                }
            }
            KeyCode::Char(c) => {
                app.palette_input.push(c);
                app.palette_selected = 0;
            }
            KeyCode::Backspace => {
                app.palette_input.pop();
                app.palette_selected = 0;
            }
            _ => {}
        }
        return Ok(false);
    }

    match (key.modifiers, key.code) {
        (KeyModifiers::CONTROL, KeyCode::Char('c')) => return Ok(true),
        (KeyModifiers::CONTROL, KeyCode::Char('p')) => {
            app.show_palette = true;
            app.palette_input.clear();
            app.palette_selected = 0;
            return Ok(false);
        }
        (KeyModifiers::CONTROL, KeyCode::Char('o')) => {
            if let Some(idx) = app.streaming_assistant_idx {
                let entry = app.reasoning_expanded.entry(idx).or_insert(false);
                *entry = !*entry;
            } else if !app.messages.is_empty() {
                let last_idx = app.messages.len() - 1;
                let entry = app.reasoning_expanded.entry(last_idx).or_insert(false);
                *entry = !*entry;
            }
            return Ok(false);
        }
        (KeyModifiers::NONE, KeyCode::PageUp) => {
            app.scroll_offset = app.scroll_offset.saturating_sub(10);
            app.follow_bottom = false;
            return Ok(false);
        }
        (KeyModifiers::NONE, KeyCode::PageDown) => {
            app.scroll_offset =
                (app.scroll_offset + 10).min(app.total_lines.saturating_sub(1));
            let visible = 20usize;
            if app.scroll_offset + visible >= app.total_lines {
                app.follow_bottom = true;
            }
            return Ok(false);
        }
        _ => {}
    }

    if key.code == KeyCode::Enter && !key.modifiers.contains(KeyModifiers::SHIFT) {
        let text = app.textarea.lines().join("\n");
        let text = text.trim().to_string();
        if !text.is_empty() && !app.is_streaming {
            app.textarea = TextArea::default();
            app.textarea.set_cursor_line_style(Style::default());
            app.textarea
                .set_placeholder_text("Type a message… (Enter to send, Shift+Enter for newline)");
            handle_submit(app, text, tx).await?;
        }
        return Ok(false);
    }

    app.textarea.input(key);
    Ok(false)
}

async fn handle_submit(
    app: &mut App,
    text: String,
    tx: &mpsc::UnboundedSender<crate::app::AppEvent>,
) -> anyhow::Result<()> {
    if text.starts_with('/') {
        handle_slash_command(app, &text);
        return Ok(());
    }

    let assistant_idx = app.messages.len() + 1;
    app.messages.push(ChatMessage::user(text.clone()));
    app.messages.push(ChatMessage::assistant(String::new()));
    app.streaming_text.clear();
    app.streaming_reasoning.clear();
    app.streaming_assistant_idx = Some(assistant_idx);
    app.is_streaming = true;
    app.scroll_to_bottom();

    let provider = app.provider.clone();
    let messages = crate::stream::build_provider_messages(&app.messages[..assistant_idx]);
    let model = app.model.clone();
    let tx = tx.clone();

    tokio::spawn(async move {
        crate::stream::stream_response(provider, messages, model, tx).await;
    });

    Ok(())
}

fn handle_slash_command(app: &mut App, text: &str) {
    let parts: Vec<&str> = text.splitn(2, ' ').collect();
    match parts[0] {
        "/clear" => {
            app.messages.clear();
            app.streaming_text.clear();
            app.streaming_reasoning.clear();
            app.streaming_assistant_idx = None;
        }
        "/help" => {
            app.messages.push(ChatMessage::user("/help".into()));
            app.messages.push(ChatMessage::assistant(
                "**Available commands:**\n\
                 - `/clear` — Clear conversation\n\
                 - `/help` — Show this message"
                    .into(),
            ));
        }
        _ => {
            app.messages.push(ChatMessage::assistant(format!(
                "Unknown command: `{}`. Type `/help` for available commands.",
                parts[0]
            )));
        }
    }
    app.scroll_to_bottom();
}

fn execute_palette_action(app: &mut App, label: &str) {
    match label {
        "Clear Messages" => {
            app.messages.clear();
            app.streaming_text.clear();
            app.streaming_reasoning.clear();
            app.streaming_assistant_idx = None;
        }
        _ => {}
    }
}

pub fn palette_items(app: &App) -> Vec<&'static str> {
    let all: &[&str] = &["Clear Messages"];
    if app.palette_input.is_empty() {
        all.to_vec()
    } else {
        all.iter()
            .filter(|s| s.to_lowercase().contains(&app.palette_input.to_lowercase()))
            .copied()
            .collect()
    }
}

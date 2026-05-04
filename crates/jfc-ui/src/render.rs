use ratatui::{
    layout::{Constraint, Direction, Layout, Margin, Rect},
    style::{Modifier, Style},
    text::{Line, Span, Text},
    widgets::{
        Block, Borders, Clear, List, ListItem, Paragraph, Scrollbar,
        ScrollbarOrientation, ScrollbarState, Wrap,
    },
    Frame,
};

use crate::app::{App, ApprovalChoice, SPINNER};
use crate::input::palette_items;
use crate::markdown;
use crate::theme::Theme;
use crate::types::*;

pub fn frame(f: &mut Frame, app: &mut App) {
    let t = app.theme;

    f.render_widget(
        Block::default().style(Style::default().bg(t.bg)),
        f.area(),
    );

    let input_lines = app.textarea.lines().len().max(1);
    let input_height = (input_lines + 2).min(8) as u16;

    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([
            Constraint::Min(3),
            Constraint::Length(input_height),
            Constraint::Length(1),
        ])
        .split(f.area());

    messages(f, app, chunks[0]);
    input(f, app, chunks[1]);
    status(f, app, chunks[2]);

    if app.show_palette {
        palette(f, app);
    }

    if app.pending_approval.is_some() {
        approval(f, app);
    }
}

fn messages(f: &mut Frame, app: &mut App, area: Rect) {
    let t = app.theme;
    let inner_width = area.width.saturating_sub(4) as usize;
    let mut lines: Vec<Line> = Vec::new();

    if app.messages.is_empty() && app.streaming_text.is_empty() {
        lines.push(Line::from(""));
        lines.push(Line::from(Span::styled(
            "What can I help you with?",
            Style::default().fg(t.text_muted),
        )));
    } else {
        for (idx, msg) in app.messages.iter().enumerate() {
            if app.streaming_assistant_idx == Some(idx) && app.is_streaming {
                continue;
            }
            let expanded = app.reasoning_expanded.get(&idx).copied().unwrap_or(false);
            message_lines(&mut lines, msg, &t, inner_width, expanded, idx);
            lines.push(Line::from(""));
        }

        if app.is_streaming || !app.streaming_text.is_empty() || !app.streaming_reasoning.is_empty() {
            lines.push(Line::from(Span::styled("assistant", t.asst_label())));

            if !app.streaming_reasoning.is_empty() {
                lines.push(Line::from(vec![
                    Span::styled("∴ Thinking", Style::default().fg(t.text_muted).add_modifier(Modifier::ITALIC)),
                    Span::styled(" [streaming…]", Style::default().fg(t.text_muted)),
                ]));
            }

            for l in markdown::to_lines(&app.streaming_text, &t, inner_width) {
                lines.push(l);
            }
            if app.is_streaming {
                lines.push(Line::from(Span::styled(
                    format!(" {} ", SPINNER[app.spinner_frame]),
                    Style::default().fg(t.text_muted),
                )));
            }
            lines.push(Line::from(""));
        }
    }

    app.total_lines = lines.len();

    let visible = area.height.saturating_sub(2) as usize;
    if app.follow_bottom {
        app.scroll_offset = lines.len().saturating_sub(visible);
    } else if app.scroll_offset + visible > lines.len() {
        app.scroll_offset = lines.len().saturating_sub(visible);
    }

    let block = Block::default()
        .borders(Borders::ALL)
        .border_style(Style::default().fg(t.border))
        .title(Span::styled(
            " jfc ",
            Style::default().fg(t.accent).add_modifier(Modifier::BOLD),
        ))
        .style(Style::default().bg(t.bg));

    let para = Paragraph::new(Text::from(lines))
        .block(block)
        .scroll((app.scroll_offset as u16, 0))
        .wrap(Wrap { trim: false });

    f.render_widget(para, area);

    if app.total_lines > visible {
        let scrollbar = Scrollbar::new(ScrollbarOrientation::VerticalRight);
        let mut sb_state = ScrollbarState::new(app.total_lines.saturating_sub(visible))
            .position(app.scroll_offset);
        f.render_stateful_widget(
            scrollbar,
            area.inner(Margin { horizontal: 0, vertical: 1 }),
            &mut sb_state,
        );
    }
}

fn message_lines(
    lines: &mut Vec<Line>,
    msg: &ChatMessage,
    t: &Theme,
    width: usize,
    reasoning_expanded: bool,
    reasoning_key: usize,
) {
    match msg.role {
        Role::User => {
            lines.push(Line::from(Span::styled("you", t.user_label())));
            for part in &msg.parts {
                if let MessagePart::Text(text) = part {
                    lines.extend(markdown::to_lines(text, t, width));
                }
            }
        }
        Role::Assistant => {
            lines.push(Line::from(Span::styled("assistant", t.asst_label())));
            for part in &msg.parts {
                match part {
                    MessagePart::Text(text) => {
                        lines.extend(markdown::to_lines(text, t, width));
                    }
                    MessagePart::Reasoning(text) => {
                        if reasoning_expanded {
                            lines.push(Line::from(vec![
                                Span::styled("∴ Thinking", Style::default().fg(t.text_muted).add_modifier(Modifier::ITALIC)),
                                Span::styled(
                                    format!(" [Ctrl+O to collapse | key={}]", reasoning_key),
                                    Style::default().fg(t.text_muted),
                                ),
                            ]));
                            for l in text.lines() {
                                lines.push(Line::from(vec![
                                    Span::styled("  ", Style::default()),
                                    Span::styled(l.to_string(), t.reasoning()),
                                ]));
                            }
                        } else {
                            let preview: String = text.chars().take(60).collect();
                            let ellipsis = if text.len() > 60 { "…" } else { "" };
                            lines.push(Line::from(vec![
                                Span::styled("∴ Thinking", Style::default().fg(t.text_muted).add_modifier(Modifier::ITALIC)),
                                Span::styled(
                                    format!(" — {preview}{ellipsis}  [Ctrl+O to expand]"),
                                    Style::default().fg(t.text_muted),
                                ),
                            ]));
                        }
                    }
                    MessagePart::Tool(tool) => {
                        lines.extend(tool_lines(tool, t));
                    }
                }
            }
        }
    }
}

fn tool_lines(tool: &ToolCall, t: &Theme) -> Vec<Line<'static>> {
    let status_style = match tool.status {
        ToolStatus::Pending => Style::default().fg(t.warning),
        ToolStatus::Running => Style::default().fg(t.accent),
        ToolStatus::Complete => Style::default().fg(t.success),
        ToolStatus::Failed => Style::default().fg(t.error),
    };
    let arrow = if tool.is_collapsed { "▶" } else { "▼" };
    let header = format!("{} {} {}", arrow, tool.kind.label(), tool.input.summary());

    let mut out = vec![Line::from(vec![
        Span::styled("┌─ ", Style::default().fg(t.border)),
        Span::styled(header, status_style),
    ])];

    if !tool.is_collapsed {
        match &tool.output {
            ToolOutput::Text(s) => {
                for line in s.lines().take(20) {
                    out.push(Line::from(vec![
                        Span::styled("│ ", Style::default().fg(t.border)),
                        Span::styled(line.to_string(), Style::default().fg(t.text_secondary)),
                    ]));
                }
            }
            ToolOutput::Command { stdout, stderr, exit_code } => {
                let code_style = match exit_code {
                    Some(0) => Style::default().fg(t.success),
                    Some(_) => Style::default().fg(t.error),
                    None => Style::default().fg(t.text_muted),
                };
                let code_str = exit_code
                    .map(|c| format!("exit {c}"))
                    .unwrap_or_else(|| "running".into());
                out.push(Line::from(vec![
                    Span::styled("│ ", Style::default().fg(t.border)),
                    Span::styled(code_str, code_style),
                ]));
                for line in stdout.lines().take(15) {
                    out.push(Line::from(vec![
                        Span::styled("│ ", Style::default().fg(t.border)),
                        Span::styled(line.to_string(), Style::default().fg(t.text_secondary)),
                    ]));
                }
                for line in stderr.lines().take(5) {
                    out.push(Line::from(vec![
                        Span::styled("│ ", Style::default().fg(t.border)),
                        Span::styled(line.to_string(), Style::default().fg(t.error)),
                    ]));
                }
            }
            ToolOutput::Diff(diff) => {
                for hunk in &diff.hunks {
                    out.push(Line::from(vec![
                        Span::styled("│ ", Style::default().fg(t.border)),
                        Span::styled(hunk.header.clone(), Style::default().fg(t.text_muted)),
                    ]));
                    for dl in hunk.lines.iter().take(30) {
                        let (prefix, style) = match dl.kind {
                            DiffLineKind::Added => ("+", Style::default().fg(t.success)),
                            DiffLineKind::Removed => ("-", Style::default().fg(t.error)),
                            DiffLineKind::Context => (" ", Style::default().fg(t.text_secondary)),
                        };
                        out.push(Line::from(vec![
                            Span::styled("│ ", Style::default().fg(t.border)),
                            Span::styled(format!("{prefix} {}", dl.content), style),
                        ]));
                    }
                }
            }
            ToolOutput::FileContent { content, .. } => {
                for line in content.lines().take(20) {
                    out.push(Line::from(vec![
                        Span::styled("│ ", Style::default().fg(t.border)),
                        Span::styled(line.to_string(), t.code_block()),
                    ]));
                }
            }
            ToolOutput::FileList(files) => {
                for f in files.iter().take(15) {
                    out.push(Line::from(vec![
                        Span::styled("│ ", Style::default().fg(t.border)),
                        Span::styled(f.clone(), Style::default().fg(t.text_secondary)),
                    ]));
                }
            }
            ToolOutput::Empty => {}
        }
        out.push(Line::from(Span::styled("└─", Style::default().fg(t.border))));
    }

    out
}

fn input(f: &mut Frame, app: &mut App, area: Rect) {
    let t = app.theme;
    let border_style = if app.is_streaming {
        Style::default().fg(t.warning)
    } else {
        Style::default().fg(t.border)
    };
    let title = if app.is_streaming {
        format!(" {} streaming… ", SPINNER[app.spinner_frame])
    } else {
        " message ".to_string()
    };

    app.textarea.set_block(
        Block::default()
            .borders(Borders::ALL)
            .border_style(border_style)
            .title(Span::styled(title, Style::default().fg(t.text_muted)))
            .style(Style::default().bg(t.surface)),
    );
    app.textarea
        .set_style(Style::default().fg(t.text_primary).bg(t.surface));

    f.render_widget(&app.textarea, area);
}

fn status(f: &mut Frame, app: &App, area: Rect) {
    let t = app.theme;

    let cwd_display = {
        let home = std::env::var("HOME").unwrap_or_default();
        if app.cwd.starts_with(&home) {
            format!("~{}", &app.cwd[home.len()..])
        } else {
            app.cwd.clone()
        }
    };

    let msg_count = app.messages.iter().filter(|m| m.role == Role::User).count();

    let left = format!(
        " {}  {}  {} msgs ",
        app.model, cwd_display, msg_count
    );
    let right = " Ctrl+C: quit  Ctrl+P: palette  PgUp/Dn: scroll  Ctrl+O: toggle reasoning ";

    let total_width = area.width as usize;
    let right_start = total_width.saturating_sub(right.len());
    let left_truncated = if left.len() > right_start.saturating_sub(1) {
        format!("{}…", &left[..right_start.saturating_sub(2)])
    } else {
        left
    };

    let padding = " ".repeat(right_start.saturating_sub(left_truncated.len()));

    let line = Line::from(vec![
        Span::styled(left_truncated, Style::default().fg(t.text_secondary)),
        Span::styled(padding, Style::default().fg(t.text_muted)),
        Span::styled(right, Style::default().fg(t.text_muted)),
    ]);

    f.render_widget(
        Paragraph::new(line).style(Style::default().bg(t.surface)),
        area,
    );
}

fn palette(f: &mut Frame, app: &App) {
    let t = app.theme;
    let area = f.area();
    let width = 50u16.min(area.width.saturating_sub(4));
    let height = 10u16.min(area.height.saturating_sub(4));
    let x = area.width.saturating_sub(width) / 2;
    let y = area.height.saturating_sub(height) / 2;
    let palette_area = Rect::new(x, y, width, height);

    f.render_widget(Clear, palette_area);

    let block = Block::default()
        .borders(Borders::ALL)
        .border_style(Style::default().fg(t.accent))
        .title(Span::styled(
            " Command Palette ",
            Style::default().fg(t.accent),
        ))
        .style(Style::default().bg(t.surface));

    let inner = block.inner(palette_area);
    f.render_widget(block, palette_area);

    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Length(1), Constraint::Min(1)])
        .split(inner);

    f.render_widget(
        Paragraph::new(Line::from(vec![
            Span::styled("> ", Style::default().fg(t.accent)),
            Span::styled(app.palette_input.clone(), Style::default().fg(t.text_primary)),
        ])),
        chunks[0],
    );

    let items: Vec<ListItem> = palette_items(app)
        .iter()
        .enumerate()
        .map(|(i, label)| {
            let style = if i == app.palette_selected {
                Style::default()
                    .fg(t.accent)
                    .add_modifier(Modifier::BOLD)
                    .bg(t.surface_raised)
            } else {
                Style::default().fg(t.text_primary)
            };
            ListItem::new(Line::from(Span::styled(*label, style)))
        })
        .collect();

    f.render_widget(List::new(items).style(Style::default().bg(t.surface)), chunks[1]);
}

fn approval(f: &mut Frame, app: &App) {
    let Some(ref pending) = app.pending_approval else { return };
    let t = app.theme;
    let area = f.area();

    let width = 60u16.min(area.width.saturating_sub(4));
    let height = 10u16.min(area.height.saturating_sub(4));
    let x = area.width.saturating_sub(width) / 2;
    let y = area.height.saturating_sub(height) / 2;
    let dialog_area = Rect::new(x, y, width, height);

    f.render_widget(Clear, dialog_area);

    let tool_summary = format!(
        "{} {}",
        pending.tool.kind.label(),
        pending.tool.input.summary()
    );
    let truncated: String = tool_summary.chars().take((width as usize).saturating_sub(4)).collect();

    let block = Block::default()
        .borders(Borders::ALL)
        .border_style(Style::default().fg(t.warning))
        .title(Span::styled(
            " Allow tool use? ",
            Style::default().fg(t.warning).add_modifier(Modifier::BOLD),
        ))
        .style(Style::default().bg(t.surface));

    let inner = block.inner(dialog_area);
    f.render_widget(block, dialog_area);

    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Length(2), Constraint::Min(1)])
        .split(inner);

    f.render_widget(
        Paragraph::new(vec![
            Line::from(Span::styled(truncated, Style::default().fg(t.text_primary))),
            Line::from(""),
        ]),
        chunks[0],
    );

    let items: Vec<ListItem> = ApprovalChoice::ALL
        .iter()
        .enumerate()
        .map(|(i, choice)| {
            let style = if i == pending.selected {
                Style::default().fg(t.warning).add_modifier(Modifier::BOLD).bg(t.surface_raised)
            } else {
                Style::default().fg(t.text_primary)
            };
            ListItem::new(Line::from(Span::styled(choice.label(), style)))
        })
        .collect();

    f.render_widget(List::new(items).style(Style::default().bg(t.surface)), chunks[1]);
}

use super::*;
use crate::app::UsageTab;

pub(super) fn usage_overlay(f: &mut Frame, app: &App) {
    let area = f.area();
    if area.width < 36 || area.height < 12 {
        return;
    }

    let width = area.width.saturating_sub(4).min(96);
    let height = area.height.saturating_sub(4).min(36);
    let popup = Rect::new(
        area.x + area.width.saturating_sub(width) / 2,
        area.y + area.height.saturating_sub(height) / 2,
        width,
        height,
    );
    f.render_widget(Clear, popup);

    let t = app.theme;
    let block = Block::default()
        .borders(Borders::ALL)
        .border_style(t.style_accent)
        .title(Span::styled(" usage ", t.style_accent_bold))
        .style(Style::default().bg(t.surface));
    let inner = block.inner(popup);
    f.render_widget(block, popup);

    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([
            Constraint::Length(2),
            Constraint::Min(1),
            Constraint::Length(1),
        ])
        .split(inner);

    let tabs = Line::from(vec![
        tab("Usage", app.usage_overlay.tab == UsageTab::Usage, t),
        Span::styled("  ", Style::default().bg(t.surface)),
        tab("Stats", app.usage_overlay.tab == UsageTab::Stats, t),
    ]);
    f.render_widget(
        Paragraph::new(vec![tabs, Line::from("")]).style(Style::default().bg(t.surface)),
        chunks[0],
    );

    let lines = match app.usage_overlay.tab {
        UsageTab::Usage => usage_lines(app),
        UsageTab::Stats => stats_lines(app),
    };
    let max_scroll = lines.len().saturating_sub(chunks[1].height as usize);
    let scroll = usize::from(app.usage_overlay.scroll).min(max_scroll) as u16;
    f.render_widget(
        Paragraph::new(lines)
            .style(Style::default().bg(t.surface))
            .scroll((scroll, 0)),
        chunks[1],
    );

    let hint = Line::from(vec![
        Span::styled("Tab/←/→", Style::default().fg(t.text_secondary)),
        Span::styled(" switch  ", Style::default().fg(t.text_muted)),
        Span::styled("j/k", Style::default().fg(t.text_secondary)),
        Span::styled(" scroll  ", Style::default().fg(t.text_muted)),
        Span::styled("r", Style::default().fg(t.text_secondary)),
        Span::styled(" refresh  ", Style::default().fg(t.text_muted)),
        Span::styled("Esc", Style::default().fg(t.text_secondary)),
        Span::styled(" close", Style::default().fg(t.text_muted)),
    ]);
    f.render_widget(
        Paragraph::new(hint).style(Style::default().bg(t.surface)),
        chunks[2],
    );
}

fn tab(label: &'static str, selected: bool, t: Theme) -> Span<'static> {
    if selected {
        Span::styled(
            format!(" {label} "),
            Style::default()
                .fg(t.bg)
                .bg(t.accent)
                .add_modifier(Modifier::BOLD),
        )
    } else {
        Span::styled(
            format!(" {label} "),
            Style::default().fg(t.text_muted).bg(t.surface),
        )
    }
}

fn usage_lines(app: &App) -> Vec<Line<'static>> {
    let t = app.theme;
    let (input, output, cache_read, cache_write) = token_totals(app);
    let cost = jfc_engine::cost::total_cost(&app.engine.usage_by_model);
    let mut lines = vec![
        heading("Session", t),
        Line::from(vec![
            Span::styled("Model       ", Style::default().fg(t.text_muted)),
            Span::styled(app.engine.model.to_string(), Style::default().fg(t.text_primary)),
        ]),
        Line::from(vec![
            Span::styled("Provider    ", Style::default().fg(t.text_muted)),
            Span::styled(
                app.engine.provider.name().to_owned(),
                Style::default().fg(t.text_primary),
            ),
        ]),
        Line::from(vec![
            Span::styled("Tokens      ", Style::default().fg(t.text_muted)),
            Span::styled(
                format!(
                    "{} in · {} out · {} cache read · {} cache write",
                    fmt_number(input),
                    fmt_number(output),
                    fmt_number(cache_read),
                    fmt_number(cache_write)
                ),
                Style::default().fg(t.text_secondary),
            ),
        ]),
        Line::from(vec![
            Span::styled("Cost        ", Style::default().fg(t.text_muted)),
            Span::styled(
                jfc_engine::cost::fmt_cost(cost),
                Style::default().fg(t.success).add_modifier(Modifier::BOLD),
            ),
        ]),
    ];

    if let Some(budget) = jfc_engine::config::load_arc().session_cost_budget_usd {
        let percent = if budget > 0.0 {
            (cost / budget * 100.0).clamp(0.0, 999.0)
        } else {
            0.0
        };
        lines.push(Line::from(vec![
            Span::styled("Budget      ", Style::default().fg(t.text_muted)),
            Span::styled(
                format!(
                    "{} / {} ({percent:.0}%)",
                    jfc_engine::cost::fmt_cost(cost),
                    jfc_engine::cost::fmt_cost(budget)
                ),
                Style::default().fg(if percent >= 90.0 { t.warning } else { t.text_secondary }),
            ),
        ]));
    }
    lines.push(Line::from(""));

    if app.engine.usage_by_model.is_empty() {
        lines.push(heading("Usage by model", t));
        lines.push(Line::from(Span::styled(
            "No model usage in this session yet.",
            Style::default().fg(t.text_muted),
        )));
        lines.push(Line::from(""));
    } else {
        super::sidebar_panels::push_usage_by_model_section(
            &mut lines,
            app,
            88,
            t,
        );
    }

    if app.engine.anthropic_account_snapshots.is_empty() {
        lines.push(heading("Anthropic accounts", t));
        lines.push(Line::from(Span::styled(
            "No Anthropic OAuth accounts are configured.",
            Style::default().fg(t.text_muted),
        )));
    } else {
        super::sidebar_panels::push_accounts_section(&mut lines, app, 88, t);
    }
    lines
}

fn stats_lines(app: &App) -> Vec<Line<'static>> {
    let t = app.theme;
    let (input, output, cache_read, cache_write) = token_totals(app);
    let total_tokens = input
        .saturating_add(output)
        .saturating_add(cache_read)
        .saturating_add(cache_write);
    let context_used = app.engine.tool_ctx.approx_tokens as u64;
    let context_max = app.engine.selected_context_window_tokens().max(1) as u64;
    let context_pct = context_used as f64 / context_max as f64 * 100.0;
    let elapsed = format_duration(app.engine.started_at.elapsed());
    let active_tasks = app
        .engine
        .background_tasks
        .values()
        .filter(|task| task.status.is_alive())
        .count();

    let mut lines = vec![
        heading("Session activity", t),
        stat("Duration", elapsed, t),
        stat(
            "Turns",
            app.engine.tool_ctx.total_user_turns.to_string(),
            t,
        ),
        stat("Active tasks", active_tasks.to_string(), t),
        stat("Total tokens", fmt_number(total_tokens), t),
        stat(
            "Context",
            format!(
                "{} / {} ({context_pct:.0}%)",
                fmt_number(context_used),
                fmt_number(context_max)
            ),
            t,
        ),
    ];

    if !app.engine.token_history.is_empty() {
        let history = app.engine.token_history.iter().copied().collect::<Vec<_>>();
        lines.push(stat(
            "Tokens / turn",
            sparkline(&history, 48),
            t,
        ));
    }
    lines.push(Line::from(""));

    let requests: u64 = app
        .engine
        .anthropic_account_snapshots
        .iter()
        .map(|account| account.total_request_count)
        .sum();
    let daily_in: u64 = app
        .engine
        .anthropic_account_snapshots
        .iter()
        .map(|account| account.daily_input_tokens)
        .sum();
    let daily_out: u64 = app
        .engine
        .anthropic_account_snapshots
        .iter()
        .map(|account| account.daily_output_tokens)
        .sum();
    let account_cost: f64 = app
        .engine
        .anthropic_account_snapshots
        .iter()
        .map(|account| account.total_cost_usd)
        .sum();
    lines.push(heading("Account activity", t));
    if app.engine.anthropic_account_snapshots.is_empty() {
        lines.push(Line::from(Span::styled(
            "No account activity is available.",
            Style::default().fg(t.text_muted),
        )));
    } else {
        lines.push(stat("Requests", requests.to_string(), t));
        lines.push(stat(
            "Today",
            format!("{} in · {} out", fmt_number(daily_in), fmt_number(daily_out)),
            t,
        ));
        lines.push(stat("Recorded cost", format!("${account_cost:.2}"), t));
    }
    lines.push(Line::from(""));

    if app.engine.usage_by_model.is_empty() {
        lines.push(heading("Models", t));
        lines.push(Line::from(Span::styled(
            "No model activity in this session yet.",
            Style::default().fg(t.text_muted),
        )));
    } else {
        super::sidebar_panels::push_usage_by_model_section(&mut lines, app, 88, t);
    }
    lines
}

fn heading(label: &'static str, t: Theme) -> Line<'static> {
    Line::from(Span::styled(
        label,
        Style::default()
            .fg(t.accent)
            .add_modifier(Modifier::BOLD),
    ))
}

fn stat(label: &'static str, value: String, t: Theme) -> Line<'static> {
    Line::from(vec![
        Span::styled(format!("{label:<13}"), Style::default().fg(t.text_muted)),
        Span::styled(value, Style::default().fg(t.text_secondary)),
    ])
}

fn token_totals(app: &App) -> (u64, u64, u64, u64) {
    app.engine.usage_by_model.values().fold(
        (0, 0, 0, 0),
        |(input, output, cache_read, cache_write), usage| {
            (
                input + usage.input_tokens,
                output + usage.output_tokens,
                cache_read + usage.cache_read_tokens,
                cache_write + usage.cache_write_tokens,
            )
        },
    )
}

fn sparkline(values: &[u64], width: usize) -> String {
    const BARS: &[char] = &['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
    let start = values.len().saturating_sub(width);
    let visible = &values[start..];
    let max = visible.iter().copied().max().unwrap_or(1).max(1);
    visible
        .iter()
        .map(|value| {
            let index = ((*value as f64 / max as f64) * (BARS.len() - 1) as f64).round()
                as usize;
            BARS[index.min(BARS.len() - 1)]
        })
        .collect()
}

fn format_duration(duration: std::time::Duration) -> String {
    let seconds = duration.as_secs();
    let hours = seconds / 3600;
    let minutes = seconds % 3600 / 60;
    let seconds = seconds % 60;
    if hours > 0 {
        format!("{hours}h {minutes}m {seconds}s")
    } else if minutes > 0 {
        format!("{minutes}m {seconds}s")
    } else {
        format!("{seconds}s")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sparkline_is_bounded_to_requested_width_normal() {
        let values = (1..=100).collect::<Vec<_>>();
        assert_eq!(sparkline(&values, 12).chars().count(), 12);
    }
}

use super::*;
pub(super) fn info_sidebar(f: &mut Frame, app: &mut App, area: Rect) {
    let t = app.theme;
    *app.info_sidebar_rect.borrow_mut() = Some(area);

    let block = Block::default()
        .borders(Borders::LEFT)
        .border_style(t.style_border)
        .padding(Padding::new(1, 0, 1, 0))
        .style(Style::default().bg(t.surface));
    let inner = block.inner(area);
    let content_width = inner.width.saturating_sub(1);
    f.render_widget(block, area);

    let mut lines: Vec<Line> = Vec::new();

    // Helper: section header. Bold + text_primary (white). Earlier
    // I had this as bold + accent (cyan), but every section header
    // pulling the same accent color flattened the hierarchy — your
    // eye couldn't tell a structural section title from a value
    // that *also* used accent (e.g. the model-name sub-header). The
    // three-tier rule wins: primary white bold for sections, accent
    // for sub-headings/values, muted for body. Mirrors how Claude
    // Code's actual sidebar treats its section labels (cli.js'
    // panel renderers use `text` color + bold for the header line,
    // reserving accent for interactive or live elements).
    let section = |label: &'static str| -> Line<'static> {
        Line::from(vec![Span::styled(
            label,
            Style::default()
                .fg(t.text_primary)
                .add_modifier(Modifier::BOLD),
        )])
    };

    lines.push(section("Session"));

    // Identity is live engine state. The old implementation consulted the
    // sessions-sidebar cache, so this panel showed a duplicated raw id until
    // the user happened to open Ctrl+B.
    let (title, id_str) = match app.engine.current_session_id.as_ref() {
        Some(id) => {
            let id_str = id.as_str().to_owned();
            let title = app
                .engine
                .current_session_title
                .clone()
                .or_else(|| jfc_engine::session::extract_first_prompt(&app.engine.messages))
                .unwrap_or_else(|| {
                    if app.engine.session_title_generation_pending {
                        "Naming…".to_owned()
                    } else {
                        "Untitled".to_owned()
                    }
                });
            (title, id_str)
        }
        None => ("Untitled".to_owned(), String::new()),
    };
    for row in jfc_markdown::hard_wrap_str(&title, content_width.max(1) as usize) {
        lines.push(Line::from(Span::styled(
            row,
            Style::default().fg(t.text_primary),
        )));
    }
    if !id_str.is_empty() {
        lines.push(labeled_value(
            "ID",
            &compact_session_id(&id_str, content_width.saturating_sub(6) as usize),
            content_width,
            t.text_muted,
            t,
        ));
    }
    let (run_marker, run_label, run_color) = session_run_status(app, t);
    lines.push(Line::from(vec![
        Span::styled(format!("{run_marker} "), Style::default().fg(run_color)),
        Span::styled(
            truncate_str(&run_label, content_width.saturating_sub(2) as usize),
            Style::default().fg(run_color),
        ),
    ]));

    lines.push(Line::from(""));

    let total_tokens = app.engine.tool_ctx.approx_tokens as u64;
    let ctx_max = app.engine.selected_context_window_tokens().max(1) as u64;
    let pct = (total_tokens as f64 / ctx_max as f64 * 100.0).min(100.0);
    let context_rows = context_breakdown_rows(app, t);
    let context_row_total = context_rows
        .iter()
        .map(|row| row.tokens)
        .sum::<u64>()
        .max(total_tokens)
        .max(1);

    lines.push(Line::from(vec![
        Span::styled(
            "Context",
            Style::default()
                .fg(t.text_primary)
                .add_modifier(Modifier::BOLD),
        ),
        Span::styled(
            format!("  {:>3.0}%", pct),
            Style::default().fg(gauge_color(pct, t)),
        ),
    ]));
    lines.push(Line::from(vec![Span::styled(
        format!("{} / {}", fmt_number(total_tokens), fmt_number(ctx_max)),
        Style::default().fg(t.text_secondary),
    )]));
    if let Some(nudge) = app
        .engine
        .current_stream_request
        .as_ref()
        .and_then(|metadata| metadata.context_pressure_nudge)
    {
        lines.push(super::context_pressure::nudge_line(nudge, t));
    }

    let bar_width = content_width as usize;
    if bar_width > 4 {
        lines.push(context_breakdown_bar(
            &context_rows,
            context_row_total,
            bar_width,
            t,
        ));
    }

    for row in &context_rows {
        let percent = row.tokens.saturating_mul(100) / context_row_total;
        let inner_width = content_width as usize;
        let percent_width = 7.min(inner_width);
        let token_width = 9.min(inner_width.saturating_sub(percent_width.saturating_add(1)));
        let spacer_width = usize::from(token_width > 0 && percent_width > 0);
        let value_width = token_width
            .saturating_add(spacer_width)
            .saturating_add(percent_width);
        let label_width = inner_width.saturating_sub(value_width);
        lines.push(Line::from(vec![
            Span::styled(
                align_left(&truncate_str(row.label, label_width), label_width),
                Style::default().fg(row.color),
            ),
            Span::styled(
                align_right(&fmt_number(row.tokens), token_width),
                Style::default().fg(t.text_secondary),
            ),
            Span::styled(" ".repeat(spacer_width), Style::default().fg(t.text_muted)),
            Span::styled(
                align_right(&format!("({percent}%)"), percent_width),
                Style::default().fg(t.text_secondary),
            ),
        ]));
    }

    if app.engine.token_history.len() >= 2 {
        const BARS: &[char] = &['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
        let max_val = app
            .engine
            .token_history
            .iter()
            .copied()
            .max()
            .unwrap_or(1)
            .max(1);
        let bar_width = (content_width as usize).min(app.engine.token_history.len());
        // Take the most recent N values so a long history doesn't
        // squish the recent samples into single-cell averages.
        let start = app.engine.token_history.len().saturating_sub(bar_width);
        let bars: String = app
            .engine
            .token_history
            .iter()
            .skip(start)
            .map(|v| {
                let idx =
                    (((*v as f64) / max_val as f64) * (BARS.len() - 1) as f64).round() as usize;
                BARS[idx.min(BARS.len() - 1)]
            })
            .collect();
        lines.push(Line::from(vec![
            Span::styled("tok/turn ", Style::default().fg(t.text_muted)),
            Span::styled(bars, Style::default().fg(t.accent)),
        ]));
    }

    lines.push(Line::from(""));

    super::sidebar_panels::push_active_work_section(&mut lines, app, content_width, t);
    super::sidebar_panels::push_accounts_section(&mut lines, app, content_width, t);
    super::sidebar_panels::push_usage_by_model_section(&mut lines, app, content_width, t);
    super::sidebar_panels::push_lsp_section(&mut lines, app, content_width, t);
    super::sidebar_panels::push_mcp_section(&mut lines, app, content_width, t);
    super::sidebar_panels::push_plugin_panels_section(&mut lines, app, content_width, t);
    super::sidebar_panels::push_plugin_widgets_section(&mut lines, app, content_width, t);

    let plugin_rows = super::status_plugins::plugin_health_detail_render_rows(
        &app.plugins.health,
        app.plugins.reload_report.as_ref(),
        &app.plugins.runtime_action_descriptors,
    );
    if !plugin_rows.is_empty() {
        lines.push(section("Plugins"));
        let plugin_health = super::status_plugins::plugin_detail_health(
            &app.plugins.health,
            app.plugins.reload_report.as_ref(),
        );
        let plugin_color = if super::status_plugins::plugin_health_is_alert(plugin_health) {
            t.error
        } else if super::status_plugins::plugin_health_is_warning(plugin_health) {
            t.warning
        } else {
            t.success
        };
        for row in plugin_rows.iter().filter(|row| match row.tone {
            super::status_plugins::PluginDetailRowTone::Health
            | super::status_plugins::PluginDetailRowTone::Error
            | super::status_plugins::PluginDetailRowTone::Warning => true,
            super::status_plugins::PluginDetailRowTone::Muted => {
                row.text.ends_with(" failed")
                    || row.text.ends_with(" errors")
                    || row.text.ends_with(" disabled")
                    || row.text.ends_with(" pending activation")
                    || row.text.starts_with("descriptor issues ")
            }
        }) {
            let color = match row.tone {
                super::status_plugins::PluginDetailRowTone::Health => plugin_color,
                super::status_plugins::PluginDetailRowTone::Muted => t.text_muted,
                super::status_plugins::PluginDetailRowTone::Error => t.error,
                super::status_plugins::PluginDetailRowTone::Warning => t.warning,
            };
            for wrapped in wrap_text_to_width(&row.text, content_width.saturating_sub(2) as usize) {
                lines.push(Line::from(vec![Span::styled(
                    format!("  {wrapped}"),
                    Style::default().fg(color),
                )]));
            }
        }
        lines.push(Line::from(""));
    }

    // Team section - show active teammates. Single-blank separator
    // is enough; the section() helper's gutter glyph already gives
    // the eye an anchor, no need for a double-row break.
    if app.engine.team_context.is_active() {
        lines.push(section("Team"));

        if let Some(ref team_name) = app.engine.team_context.team_name {
            lines.push(Line::from(vec![Span::styled(
                format!("  {team_name}"),
                Style::default().fg(t.text_secondary),
            )]));
        }

        // Surface each teammate as one row. Color the active-marker
        // dot with the teammate's assigned palette color (mirrors the
        // teammate-tree below) so the team panel and the spinner-row
        // tree read the same way.
        for info in app.engine.team_context.teammates.values() {
            if info.name == jfc_engine::swarm::TEAM_LEAD_NAME {
                continue;
            }
            let dot_color = crate::theme::teammate_color(info.color.as_deref());
            lines.push(Line::from(vec![
                Span::styled("  ● ", Style::default().fg(dot_color)),
                Span::styled(&info.name, Style::default().fg(t.text_secondary)),
            ]));
        }

        if app.engine.team_context.teammates.len() <= 1 {
            lines.push(Line::from(vec![Span::styled(
                "  (no teammates)",
                Style::default().fg(t.text_secondary),
            )]));
        }
    }

    // Tasks moved out of this sidebar: they now render as a pinned row
    // directly above the input box (`tasks_pinned_row` below), Claude-Code
    // style. Keeps todo state visible while you type a follow-up without
    // having to glance to the far right column.

    // Diffs section - count files with edit/write tool outputs
    let diff_stats = collect_diff_stats(app);
    if diff_stats.total_files > 0 {
        lines.push(Line::from(vec![Span::styled(
            "Changes",
            Style::default()
                .fg(t.text_primary)
                .add_modifier(Modifier::BOLD),
        )]));

        lines.push(Line::from(vec![
            Span::styled(
                format!("{} file(s)", diff_stats.total_files),
                Style::default().fg(t.text_secondary),
            ),
            Span::raw(" "),
            Span::styled(
                format!("+{}", diff_stats.additions),
                Style::default().fg(t.success),
            ),
            Span::styled(" ", Style::default()),
            Span::styled(
                format!("-{}", diff_stats.deletions),
                Style::default().fg(t.error),
            ),
        ]));

        // Show up to 3 most recently modified files
        for file in diff_stats.files.iter().take(3) {
            lines.push(Line::from(vec![
                Span::styled("  ", Style::default()),
                Span::styled(
                    truncate_str(file, content_width.saturating_sub(4) as usize),
                    Style::default().fg(t.accent),
                ),
            ]));
        }
        if diff_stats.files.len() > 3 {
            lines.push(Line::from(vec![Span::styled(
                format!("  … +{} more", diff_stats.files.len() - 3),
                Style::default().fg(t.text_muted),
            )]));
        }

        lines.push(Line::from(""));
    }

    // The cwd + provider + effort + fast + claude-status footer that used
    // to live here was redundant with the bottom status bar — both showed
    // `~/path · model · effort · ⚡ · branch · cost · msgs`. Cleaned up so
    // the sidebar focuses on stuff the bottom bar *doesn't* surface
    // (Context gauge, Usage-by-model breakdown, Changes/diff stats,
    // MCP/LSP rosters, recent sessions). The body now uses the full
    // sidebar height.
    let body_area = Rect {
        width: content_width,
        ..inner
    };
    // Body scrolls — long content used to overflow the panel silently.
    // Clamp scroll so at least one row stays visible.
    let total_body_rows = lines.len() as u16;
    let max_scroll = total_body_rows.saturating_sub(body_area.height.max(1));
    if app.info_sidebar.scroll > max_scroll {
        app.info_sidebar.scroll = max_scroll;
    }
    let scroll_y = app.info_sidebar.scroll;
    f.render_widget(
        Paragraph::new(lines)
            .scroll((scroll_y, 0))
            .style(Style::default().bg(t.bg)),
        body_area,
    );
    if max_scroll > 0 {
        let mut scrollbar_state = ratatui::widgets::ScrollbarState::new(total_body_rows as usize)
            .position(scroll_y as usize)
            .viewport_content_length(body_area.height as usize);
        let scrollbar =
            ratatui::widgets::Scrollbar::new(ratatui::widgets::ScrollbarOrientation::VerticalRight)
                .begin_symbol(None)
                .end_symbol(None)
                .track_symbol(Some("│"))
                .thumb_symbol("┃")
                .track_style(Style::default().fg(t.border))
                .thumb_style(Style::default().fg(t.accent));
        f.render_stateful_widget(
            scrollbar,
            Rect::new(inner.right().saturating_sub(1), inner.y, 1, inner.height),
            &mut scrollbar_state,
        );
    }
}

struct ContextBreakdownRow {
    label: &'static str,
    tokens: u64,
    color: ratatui::style::Color,
}

fn context_breakdown_rows(app: &App, theme: Theme) -> Vec<ContextBreakdownRow> {
    use jfc_engine::context_accounting as account;

    let budget = app
        .engine
        .current_stream_request
        .as_ref()
        .and_then(|metadata| metadata.context_budget)
        .or(app.engine.last_context_budget);
    let system_fallback = app.engine.last_system_prompt_len.unwrap_or(0) as u64;

    // Owned composition account (jfc-context). The derivation lives in the
    // engine, not the render layer; the renderer only maps contributor ids to
    // display colors and paints the rows.
    let context_account =
        account::build_context_account(budget, &app.engine.messages, system_fallback);

    context_account
        .contributors()
        .iter()
        .filter(|contributor| contributor.tokens() > 0)
        .filter_map(|contributor| {
            let (label, color): (&'static str, ratatui::style::Color) =
                match contributor.id().as_str() {
                    account::CONTRIB_SYSTEM => ("System", theme.accent),
                    account::CONTRIB_DOCS => ("Docs", theme.accent_secondary),
                    account::CONTRIB_COMPARTMENTS => ("Compartments", theme.text_secondary),
                    account::CONTRIB_MEMORIES => ("Memories", theme.success),
                    account::CONTRIB_CONVERSATION => ("Conversation", theme.error),
                    account::CONTRIB_TOOL_CALLS => ("Tool Calls", theme.warning),
                    account::CONTRIB_TOOL_DEFS => ("Tool Defs", theme.reasoning_fg),
                    _ => return None,
                };
            Some(ContextBreakdownRow {
                label,
                tokens: contributor.tokens(),
                color,
            })
        })
        .collect()
}

fn labeled_value(
    label: &'static str,
    value: &str,
    width: u16,
    value_color: ratatui::style::Color,
    theme: Theme,
) -> Line<'static> {
    let label_width = 5usize;
    Line::from(vec![
        Span::styled(
            format!("{label:<label_width$}"),
            Style::default().fg(theme.text_muted),
        ),
        Span::styled(
            truncate_str(value, width.saturating_sub(label_width as u16) as usize),
            Style::default().fg(value_color),
        ),
    ])
}

fn compact_session_id(id: &str, width: usize) -> String {
    if id.chars().count() <= width || width < 12 {
        return truncate_str(id, width);
    }
    let suffix_len = 6usize.min(width.saturating_sub(6));
    let prefix_len = width.saturating_sub(suffix_len + 1);
    let prefix: String = id.chars().take(prefix_len).collect();
    let mut suffix = id.chars().rev().take(suffix_len).collect::<Vec<_>>();
    suffix.reverse();
    format!("{prefix}…{}", suffix.into_iter().collect::<String>())
}

pub(super) fn session_run_status(
    app: &App,
    theme: Theme,
) -> (&'static str, String, ratatui::style::Color) {
    if app.engine.pending_approval.is_some() {
        return ("◆", "Waiting · approval".to_owned(), theme.warning);
    }
    if app.engine.pending_question.is_some() {
        return ("◆", "Waiting · answer".to_owned(), theme.warning);
    }
    if app.engine.is_streaming {
        let detail = app
            .engine
            .stream_lifecycle
            .as_ref()
            .map(|status| status.phase.label())
            .unwrap_or("working");
        return ("●", format!("Working · {detail}"), theme.success);
    }
    if let Some(status) = app.engine.stream_terminal_status.as_ref() {
        return ("■", status.clone(), theme.error);
    }
    let workflows = app
        .engine
        .background_tasks
        .values()
        .filter(|task| {
            task.task_id.as_str().starts_with("bgwf_")
                && matches!(task.status, jfc_core::TaskLifecycle::Running)
        })
        .count();
    if workflows > 0 {
        return (
            "●",
            format!(
                "Ready · {workflows} workflow{} running",
                if workflows == 1 { "" } else { "s" }
            ),
            theme.success,
        );
    }
    ("○", "Ready".to_owned(), theme.text_muted)
}

fn context_breakdown_bar<'a>(
    rows: &[ContextBreakdownRow],
    total: u64,
    width: usize,
    theme: Theme,
) -> Line<'a> {
    let active = rows.iter().filter(|row| row.tokens > 0).collect::<Vec<_>>();
    if active.is_empty() {
        return Line::from(Span::styled(
            "░".repeat(width),
            Style::default().fg(theme.border),
        ));
    }

    let mut used = 0usize;
    let mut spans = Vec::new();
    for (idx, row) in active.iter().enumerate() {
        let last = idx + 1 == active.len();
        let cells = if last {
            width.saturating_sub(used)
        } else {
            ((row.tokens as f64 / total as f64) * width as f64)
                .round()
                .max(1.0) as usize
        }
        .min(width.saturating_sub(used));
        if cells > 0 {
            spans.push(Span::styled(
                "█".repeat(cells),
                Style::default().fg(row.color),
            ));
            used = used.saturating_add(cells);
        }
    }
    if used < width {
        spans.push(Span::styled(
            "░".repeat(width - used),
            Style::default().fg(theme.border),
        ));
    }
    Line::from(spans)
}

fn align_right(value: &str, width: usize) -> String {
    let value_width = unicode_width::UnicodeWidthStr::width(value);
    if value_width >= width {
        value.to_owned()
    } else {
        format!("{}{}", " ".repeat(width - value_width), value)
    }
}

fn align_left(value: &str, width: usize) -> String {
    let value_width = unicode_width::UnicodeWidthStr::width(value);
    if value_width >= width {
        value.to_owned()
    } else {
        format!("{}{}", value, " ".repeat(width - value_width))
    }
}

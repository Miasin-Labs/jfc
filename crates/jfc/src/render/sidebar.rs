use super::*;
pub(super) fn info_sidebar(f: &mut Frame, app: &mut App, area: Rect) {
    let t = app.theme;

    let block = Block::default()
        .borders(Borders::LEFT)
        .border_style(t.style_border)
        .padding(Padding::new(1, 0, 1, 0)); // left=1, right=0, top=1, bottom=0
    let inner = block.inner(area);
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

    // Show the user-readable title first (custom `/rename` → first prompt →
    // formatted-id-timestamp fallback). Stash the raw session id in a
    // muted second row so the user can still see / copy it.
    let (title, id_str) = match app.engine.current_session_id.as_ref() {
        Some(id) => {
            let id_str = id.as_str().to_owned();
            let title = app
                .session_sidebar
                .meta
                .iter()
                .find(|m| m.id == *id)
                .map(|m| m.display_title())
                .unwrap_or_else(|| id_str.clone());
            (title, id_str)
        }
        None => ("untitled".to_owned(), String::new()),
    };
    lines.push(Line::from(vec![Span::styled(
        truncate_str(&title, inner.width as usize),
        Style::default()
            .fg(t.text_primary)
            .add_modifier(Modifier::BOLD),
    )]));
    if !id_str.is_empty() {
        lines.push(Line::from(vec![Span::styled(
            format!(
                "  {}",
                truncate_str(&id_str, inner.width.saturating_sub(2) as usize)
            ),
            Style::default().fg(t.text_muted),
        )]));
    }

    lines.push(Line::from(""));

    lines.push(section("Context"));

    // Always render the calibrated `approx_tokens` (input + output +
    // cache_read + cache_write) — that's what `recompute_token_estimate`
    // / StreamUsage / compaction all use. Previously this took
    // `max(last_usage_input, approx_tokens)`, which was a no-op (approx
    // always ≥ input alone) but obscured the fact that the sidebar and
    // bottom-bar gauge were already computing the same thing two
    // different ways, leaving a maintenance footgun where one could
    // drift from the other.
    let total_tokens = app.engine.tool_ctx.approx_tokens as u64;
    let ctx_max = app.engine.selected_context_window_tokens().max(1) as u64;
    let pct = (total_tokens as f64 / ctx_max as f64 * 100.0).min(100.0);

    lines.push(Line::from(vec![
        Span::styled(
            format!("{} tokens", fmt_number(total_tokens)),
            Style::default().fg(t.text_secondary),
        ),
        Span::styled(
            format!(" · {:.0}%", pct),
            Style::default().fg(gauge_color(pct, t)),
        ),
    ]));

    let bar_width = inner.width.saturating_sub(2) as usize;
    if bar_width > 4 {
        let filled = ((pct / 100.0) * bar_width as f64).round() as usize;
        let filled = filled.min(bar_width);
        lines.push(Line::from(vec![
            Span::styled("█".repeat(filled), Style::default().fg(gauge_color(pct, t))),
            Span::styled(
                "░".repeat(bar_width - filled),
                Style::default().fg(t.border),
            ),
        ]));
    }

    // The per-turn `last_usage_output` row used to render here was
    // flickering — Anthropic sends cumulative usage frames mid-turn,
    // then `streaming_response_bytes` gets cleared at message_stop, and
    // the row blinked in (turn-end Usage) → out (next turn clear) → in
    // again. The total-tokens + percent above is already the
    // authoritative view; the per-turn output is surfaced via the
    // bottom-bar `4 msgs` + `$X.XX` cost row instead. Removed.

    // Per-turn token sparkline rendered inline under the Context
    // section so it reads as part of *that* group instead of a
    // disconnected widget glued to the bottom of the panel. Uses
    // the unicode block-element scale `▁▂▃▄▅▆▇█` so we can render
    // it as a styled span rather than a separate Sparkline widget.
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
        let bar_width = (inner.width as usize).min(app.engine.token_history.len());
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

    super::sidebar_panels::push_metrics_section(&mut lines, app, inner.width, t);
    super::sidebar_panels::push_plugin_panels_section(&mut lines, app, inner.width, t);
    super::sidebar_panels::push_plugin_widgets_section(&mut lines, app, inner.width, t);
    super::sidebar_panels::push_usage_by_model_section(&mut lines, app, inner.width, t);
    super::sidebar_panels::push_lsp_section(&mut lines, app, inner.width, t);
    super::sidebar_panels::push_mcp_section(&mut lines, app, inner.width, t);

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
        for row in &plugin_rows {
            let color = match row.tone {
                super::status_plugins::PluginDetailRowTone::Health => plugin_color,
                super::status_plugins::PluginDetailRowTone::Muted => t.text_muted,
                super::status_plugins::PluginDetailRowTone::Error => t.error,
                super::status_plugins::PluginDetailRowTone::Warning => t.warning,
            };
            lines.push(Line::from(vec![Span::styled(
                format!(
                    "  {}",
                    truncate_str(&row.text, inner.width.saturating_sub(2) as usize)
                ),
                Style::default().fg(color),
            )]));
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
                    truncate_str(file, inner.width.saturating_sub(4) as usize),
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
    let body_area = inner;
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
}

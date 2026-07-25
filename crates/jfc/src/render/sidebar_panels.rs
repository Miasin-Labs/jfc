use super::*;

pub(super) fn push_plugin_widgets_section<'a>(
    lines: &mut Vec<Line<'a>>,
    app: &App,
    width: u16,
    theme: Theme,
) {
    let widget_rows = super::status_widgets::ui_widget_panel_rows(
        &app.plugins.ui_widget_descriptors,
        &app.plugins.ui_widget_snapshots,
        &app.plugins.ui_widget_refresh_status,
        app.info_sidebar.focused_widget.as_ref(),
    );
    if widget_rows.is_empty() {
        return;
    }
    lines.push(section("Plugin widgets", theme));
    push_muted_rows(lines, widget_rows, width, theme);
    lines.push(Line::from(""));
}

pub(super) fn push_plugin_panels_section<'a>(
    lines: &mut Vec<Line<'a>>,
    app: &App,
    width: u16,
    theme: Theme,
) {
    let panel_sections = super::status_panels::info_sidebar_panel_sections(
        &app.plugins.ui_panel_descriptors,
        &app.plugins.ui_panel_snapshots,
        &app.plugins.ui_panel_refresh_status,
        app.info_sidebar.focused_panel.as_ref(),
    );
    if panel_sections.is_empty() {
        return;
    }
    lines.push(section("Plugin panels", theme));
    for panel in panel_sections {
        lines.push(Line::from(vec![Span::styled(
            format!(
                " {}",
                truncate_str(&panel.title, width.saturating_sub(1) as usize)
            ),
            Style::default().fg(theme.accent),
        )]));
        for row in panel.rows {
            for wrapped in wrap_text_to_width(&row, width.saturating_sub(2) as usize) {
                lines.push(Line::from(vec![Span::styled(
                    format!("  {wrapped}"),
                    Style::default().fg(theme.text_muted),
                )]));
            }
        }
    }
    lines.push(Line::from(""));
}

pub(super) fn push_usage_by_model_section<'a>(
    lines: &mut Vec<Line<'a>>,
    app: &App,
    width: u16,
    theme: Theme,
) {
    if app.engine.usage_by_model.is_empty() {
        return;
    }
    lines.push(section("Usage", theme));
    let mut model_entries = app.engine.usage_by_model.iter().collect::<Vec<_>>();
    model_entries.sort_by_key(|(k, _)| k.as_str());

    for (model_name, usage) in model_entries.iter().take(3) {
        lines.push(Line::from(vec![Span::styled(
            format!(
                " {}",
                truncate_str(model_name, width.saturating_sub(1) as usize)
            ),
            Style::default().fg(theme.accent),
        )]));
        let hit_pct = usage.cache_hit_pct();
        let cost = usage
            .cost_usd
            .map(|value| format!(" · ${value:.2}"))
            .unwrap_or_default();
        push_muted_rows(
            lines,
            [format!(
                "{} in · {} out · {hit_pct:.0}% cache{cost}",
                fmt_number(usage.input_tokens),
                fmt_number(usage.output_tokens),
            )],
            width,
            theme,
        );
    }
    if model_entries.len() > 3 {
        lines.push(Line::from(Span::styled(
            format!("  +{} more models", model_entries.len() - 3),
            Style::default().fg(theme.text_muted),
        )));
    }

    let total = jfc_engine::cost::total_cost(&app.engine.usage_by_model);
    if total > 0.001 {
        lines.push(Line::from(vec![Span::styled(
            format!("Total cost: {}", jfc_engine::cost::fmt_cost(total)),
            Style::default().fg(theme.text_muted),
        )]));
    }
    lines.push(Line::from(""));
}

pub(super) fn push_active_work_section<'a>(
    lines: &mut Vec<Line<'a>>,
    app: &App,
    width: u16,
    theme: Theme,
) {
    let has_work = app.engine.background_tasks.values().any(|task| {
        task.status.is_alive()
            || task.workflow_progress.as_ref().is_some_and(|progress| {
                matches!(
                    progress.status,
                    jfc_engine::workflows::WorkflowRunStatus::Partial
                        | jfc_engine::workflows::WorkflowRunStatus::Failed
                )
            })
    });
    if !has_work {
        return;
    }

    lines.push(section("Active work", theme));
    for task in app
        .engine
        .background_tasks
        .values()
        .filter(|task| task.workflow_progress.is_some())
        .filter(|task| {
            task.status.is_alive()
                || task.workflow_progress.as_ref().is_some_and(|progress| {
                    matches!(
                        progress.status,
                        jfc_engine::workflows::WorkflowRunStatus::Partial
                            | jfc_engine::workflows::WorkflowRunStatus::Failed
                    )
                })
        })
    {
        let progress = task.workflow_progress.as_ref().expect("filtered workflow");
        let color = match progress.status {
            jfc_engine::workflows::WorkflowRunStatus::Failed
            | jfc_engine::workflows::WorkflowRunStatus::Killed => theme.error,
            jfc_engine::workflows::WorkflowRunStatus::Partial
            | jfc_engine::workflows::WorkflowRunStatus::Paused => theme.warning,
            _ => theme.success,
        };
        push_identity_rows(lines, "◆", &progress.meta.name, width, color, theme);
        push_muted_rows(
            lines,
            [format!(
                "{} · {}/{} agents · {}",
                progress.status,
                progress.finished_count(),
                progress.agents.len(),
                compact_elapsed(progress.started_at.elapsed()),
            )],
            width,
            theme,
        );
        if let Some(phase) = progress.current_phase.as_deref() {
            push_muted_rows(lines, [phase.to_owned()], width, theme);
        }
    }

    for task in app
        .engine
        .background_tasks
        .values()
        .filter(|task| task.workflow_progress.is_none() && task.status.is_alive())
    {
        push_identity_rows(lines, "●", &task.description, width, theme.success, theme);
        let detail = task
            .last_tool
            .as_deref()
            .map(|tool| {
                format!(
                    "running · {} · {tool}",
                    compact_elapsed(task.started_at.elapsed())
                )
            })
            .unwrap_or_else(|| format!("running · {}", compact_elapsed(task.started_at.elapsed())));
        push_muted_rows(lines, [detail], width, theme);
    }
    lines.push(Line::from(""));
}

pub(super) fn push_accounts_section<'a>(
    lines: &mut Vec<Line<'a>>,
    app: &App,
    width: u16,
    theme: Theme,
) {
    if app.engine.anthropic_account_snapshots.is_empty() {
        return;
    }
    let active = app
        .engine
        .anthropic_account_snapshot
        .as_ref()
        .map(|snapshot| snapshot.name.as_str());
    lines.push(section("Accounts", theme));
    let now_ms = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|duration| u64::try_from(duration.as_millis()).unwrap_or(u64::MAX))
        .unwrap_or_default();
    let accounts = app
        .engine
        .anthropic_account_snapshots
        .iter()
        .filter(|account| active == Some(account.name.as_str()))
        .chain(
            app.engine
                .anthropic_account_snapshots
                .iter()
                .filter(|account| active != Some(account.name.as_str())),
        );
    for account in accounts {
        let limited = account
            .rate_limited_until_ms
            .is_some_and(|reset| reset > now_ms);
        let healthy = account.enabled && account.auth_status == "healthy" && !limited;
        let color = if !account.enabled || account.auth_status == "re-login" {
            theme.error
        } else if limited || account.auth_status == "refreshing" {
            theme.warning
        } else {
            theme.success
        };
        let marker = if active == Some(account.name.as_str()) {
            "◆"
        } else {
            "●"
        };
        let status = if !account.enabled {
            "disabled"
        } else if limited {
            "rate limited"
        } else if healthy {
            "ready"
        } else {
            account.auth_status.as_str()
        };
        push_identity_rows(lines, marker, &account.name, width, color, theme);
        if let Some(email) = account
            .email
            .as_deref()
            .filter(|email| !email.is_empty() && *email != account.name)
        {
            push_muted_rows(lines, [email.to_owned()], width, theme);
        }
        lines.push(Line::from(Span::styled(
            format!("  {status}"),
            Style::default().fg(color),
        )));
        if let Some(error) = account.last_auth_error.as_deref() {
            for row in wrap_text_to_width(error, width.saturating_sub(2) as usize) {
                lines.push(Line::from(Span::styled(
                    format!("  {row}"),
                    Style::default().fg(theme.error),
                )));
            }
        }
    }
    lines.push(Line::from(""));
}

pub(super) fn push_lsp_section<'a>(lines: &mut Vec<Line<'a>>, app: &App, width: u16, theme: Theme) {
    if app.engine.lsp_servers.is_empty() {
        return;
    }
    let active = app
        .engine
        .lsp_servers
        .iter()
        .filter(|server| matches!(server.status, jfc_core::LspStatus::Active))
        .count();
    lines.push(section("LSP", theme));
    lines.push(Line::from(Span::styled(
        truncate_str(
            &format!("  {active}/{} active", app.engine.lsp_servers.len()),
            width as usize,
        ),
        Style::default().fg(if active > 0 {
            theme.success
        } else {
            theme.text_muted
        }),
    )));
    lines.push(Line::from(""));
}

pub(super) fn push_mcp_section<'a>(lines: &mut Vec<Line<'a>>, app: &App, width: u16, theme: Theme) {
    if app.engine.mcp_servers.is_empty() {
        return;
    }
    let connected = app
        .engine
        .mcp_servers
        .iter()
        .filter(|server| matches!(server.status, jfc_core::McpStatus::Connected))
        .count();
    let issues = app
        .engine
        .mcp_servers
        .iter()
        .filter(|server| {
            matches!(
                server.status,
                jfc_core::McpStatus::Error | jfc_core::McpStatus::PendingApproval
            )
        })
        .count();
    lines.push(section("MCP", theme));
    let color = if issues > 0 {
        theme.warning
    } else {
        theme.success
    };
    for row in wrap_text_to_width(
        &format!("{connected} connected · {issues} issues · /mcp"),
        width.saturating_sub(2) as usize,
    ) {
        lines.push(Line::from(Span::styled(
            format!("  {row}"),
            Style::default().fg(color),
        )));
    }
    lines.push(Line::from(""));
}

fn section(label: &'static str, theme: Theme) -> Line<'static> {
    Line::from(vec![Span::styled(
        label,
        Style::default()
            .fg(theme.text_primary)
            .add_modifier(Modifier::BOLD),
    )])
}

fn push_muted_rows<'a, I>(lines: &mut Vec<Line<'a>>, rows: I, width: u16, theme: Theme)
where
    I: IntoIterator<Item = String>,
{
    for row in rows {
        for wrapped in wrap_text_to_width(&row, width.saturating_sub(2) as usize) {
            lines.push(Line::from(vec![Span::styled(
                format!("  {wrapped}"),
                Style::default().fg(theme.text_muted),
            )]));
        }
    }
}

fn push_identity_rows<'a>(
    lines: &mut Vec<Line<'a>>,
    marker: &str,
    identity: &str,
    width: u16,
    marker_color: ratatui::style::Color,
    theme: Theme,
) {
    let available = width.saturating_sub(2).max(1) as usize;
    for (index, row) in jfc_markdown::hard_wrap_str(identity, available)
        .into_iter()
        .enumerate()
    {
        lines.push(Line::from(vec![
            Span::styled(
                if index == 0 {
                    format!("{marker} ")
                } else {
                    "  ".to_owned()
                },
                Style::default().fg(marker_color),
            ),
            Span::styled(row, Style::default().fg(theme.text_secondary)),
        ]));
    }
}

fn compact_elapsed(elapsed: std::time::Duration) -> String {
    let seconds = elapsed.as_secs();
    if seconds < 60 {
        format!("{seconds}s")
    } else if seconds < 3_600 {
        format!("{}m", seconds / 60)
    } else {
        format!("{}h {}m", seconds / 3_600, (seconds % 3_600) / 60)
    }
}

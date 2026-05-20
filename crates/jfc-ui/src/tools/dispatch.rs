/// Main tool dispatcher for jfc.
/// Contains the `execute_tool` async fn and all its match arms.
/// State helpers live in `registry`; synchronous helpers in `safe_tools`.

use std::path::Path;
use std::sync::Arc;
use tokio::sync::Mutex;

use crate::context::ReadDedupCache;
use crate::runtime::ExecutionResult;
use crate::types::{ToolInput, ToolKind};
use jfc_session::TaskStore;

use super::bash::execute_bash;
use super::daemon::{
    execute_cron_create, execute_cron_delete, execute_cron_list, execute_monitor,
    execute_schedule_wakeup,
};
use super::economy::{
    strip_html_tags, EconomyAgentInvoker, EconomySwarmProvider, apply_winning_solution,
};
use super::filesystem::{execute_edit, execute_read, execute_write};
use super::lsp::execute_lsp;
use super::memory::{execute_memory_create, execute_memory_delete};
use super::notebook::{execute_notebook_edit, execute_notebook_read};
use super::notifications::{execute_push_notification, execute_remote_trigger};
use super::scratchpad::{execute_scratchpad_read, execute_scratchpad_write};
use super::search::{execute_glob, execute_grep};
use super::swarm::{
    execute_send_message, execute_team_create, execute_team_delete, execute_team_member_mode,
};
use super::tasks::{
    execute_skill, execute_task_create, execute_task_done, execute_task_get, execute_task_list,
    execute_task_stop, execute_task_update, execute_task_validate,
};
use super::worktree::{execute_enter_plan_mode, execute_enter_worktree, execute_exit_worktree};

use super::registry::{
    collusion_detector, get_or_build_graph_session, invalidate_graph_session_cache,
    market_orchestrator, record_edited_file, record_graph_query, snapshot_active_provider,
    snapshot_event_sender, snapshot_mcp_registry, with_graph_session_mut,
};
use super::safe_tools::{
    execute_code_index, execute_tool_search, execute_tool_suggest, maybe_run_slop_guard,
};
#[cfg(feature = "permission-automation")]
use super::safe_tools::tool_permission_path;

#[tracing::instrument(target = "jfc::tools", skip(input, cwd, dedup, task_store), fields(kind = ?kind))]
pub async fn execute_tool(
    kind: ToolKind,
    input: ToolInput,
    cwd: std::path::PathBuf,
    dedup: Option<Arc<Mutex<ReadDedupCache>>>,
    task_store: Option<Arc<TaskStore>>,
    active_team_name: Option<&str>,
) -> ExecutionResult {
    #[cfg(feature = "hooks")]
    {
        // Hook integration point: BeforeToolDispatch
        // When fully wired, this will:
        // 1. Build HookContext from tool name + input
        // 2. Fire BeforeToolDispatch hooks
        // 3. If Abort → return error
        // 4. If Skip → return empty result
        // 5. If Replace → use replacement input
        tracing::trace!(target: "jfc::hooks", "hook integration point: BeforeToolDispatch");
    }

    #[cfg(feature = "permission-automation")]
    {
        use crate::permissions::{PermissionAction, check_tool_permission};

        let config = crate::config::feature_config::FeatureConfig::load(&cwd);
        let rules = crate::permissions::RuleSet::from_config(&config);
        let decision = check_tool_permission(&rules, kind.api_name(), tool_permission_path(&input));

        if matches!(decision.action, PermissionAction::Deny) {
            let reason = decision
                .reason
                .as_deref()
                .unwrap_or("permission rule denied tool invocation");
            return ExecutionResult::failure(format!(
                "Permission denied for {}: {reason}",
                kind.api_name()
            ));
        }
    }

    // For task tools in team mode, prefer the caller-supplied store if
    // one was passed (the UI keeps `app.task_store` pointing at the
    // team's `tasks.json` once team mode is active, and the event-loop
    // migration runs at TeammateSpawned). Only fall back to
    // `TaskStore::open_team` when the caller didn't thread a store —
    // e.g. the swarm runner's tool path. Without this guard, every
    // concurrent task tool would `open_team` its own fresh
    // `Arc<TaskStore>`, each with its own private `Mutex<TaskStoreInner>`,
    // and last-write-wins on `tasks.json` would silently drop sibling
    // task creates — the "unknown task id t35..t46" symptom.
    let task_store = match (active_team_name, &kind, task_store.clone()) {
        (
            Some(team_name),
            ToolKind::TaskCreate
            | ToolKind::TaskUpdate
            | ToolKind::TaskList
            | ToolKind::TaskDone
            | ToolKind::TaskStop
            | ToolKind::TaskGet,
            None,
        ) => Some(TaskStore::open_team(team_name)),
        (_, _, Some(store)) => Some(store),
        _ => task_store,
    };

    match (kind, input) {
        (
            ToolKind::Bash,
            ToolInput::Bash {
                command, timeout, ..
            },
        ) => execute_bash(&command, timeout, &cwd).await,
        (
            ToolKind::Read,
            ToolInput::Read {
                file_path,
                offset,
                limit,
            },
        ) => execute_read(&file_path, offset, limit, dedup.as_ref()).await,
        (ToolKind::Write, ToolInput::Write { file_path, content }) => {
            let result = execute_write(&file_path, &content).await;
            if !result.is_error() {
                if let Some(cache) = &dedup {
                    cache.lock().await.invalidate(Path::new(&file_path));
                }
                // Drop the cached graph for this workspace so the next
                // graph_query reflects the new file content.
                invalidate_graph_session_cache(Some(&cwd));
                record_edited_file(Path::new(&file_path));
                // Slop guard: check the written content for quality issues.
                return maybe_run_slop_guard(result, Path::new(&file_path), &content, &cwd).await;
            }
            result
        }
        (
            ToolKind::Edit,
            ToolInput::Edit {
                file_path,
                old_string,
                new_string,
                replacement,
            },
        ) => {
            let result = execute_edit(&file_path, &old_string, &new_string, replacement).await;
            if !result.is_error() {
                if let Some(cache) = &dedup {
                    cache.lock().await.invalidate(Path::new(&file_path));
                }
                invalidate_graph_session_cache(Some(&cwd));
                record_edited_file(Path::new(&file_path));
                // Slop guard: read the post-edit content and check for quality issues.
                let post_content = tokio::fs::read_to_string(&file_path)
                    .await
                    .unwrap_or_default();
                return maybe_run_slop_guard(result, Path::new(&file_path), &post_content, &cwd)
                    .await;
            }
            result
        }
        (ToolKind::Glob, ToolInput::Glob { pattern, path }) => {
            execute_glob(&pattern, path.as_deref(), &cwd).await
        }
        (
            ToolKind::Grep,
            ToolInput::Grep {
                pattern,
                path,
                glob,
                output_mode,
            },
        ) => {
            execute_grep(
                &pattern,
                path.as_deref(),
                glob.as_deref(),
                output_mode.as_deref(),
                &cwd,
            )
            .await
        }
        (
            ToolKind::TaskCreate,
            ToolInput::TaskCreate {
                subject,
                description,
                active_form,
                blocked_by,
                acceptance_criteria,
                verification_command,
                risk,
                parent_id,
                kind,
            },
        ) => execute_task_create(
            task_store,
            subject,
            description,
            active_form,
            blocked_by,
            acceptance_criteria,
            verification_command,
            risk,
            parent_id,
            kind,
        ),
        (
            ToolKind::TaskUpdate,
            ToolInput::TaskUpdate {
                task_id,
                status,
                subject,
                description,
                owner,
                acceptance_criteria,
                verification_command,
                risk,
                parent_id,
                kind,
            },
        ) => execute_task_update(
            task_store,
            &task_id,
            status,
            subject,
            description,
            owner,
            acceptance_criteria,
            verification_command,
            risk,
            parent_id,
            kind,
        ),
        (
            ToolKind::TaskList,
            ToolInput::TaskList {
                status_filter,
                owner_filter,
            },
        ) => execute_task_list(
            task_store,
            status_filter.as_deref(),
            owner_filter.as_deref(),
        ),
        (ToolKind::TaskDone, ToolInput::TaskDone { task_id }) => {
            execute_task_done(task_store, &task_id)
        }
        (ToolKind::TaskStop, ToolInput::TaskStop { task_id }) => execute_task_stop("", &task_id),
        (ToolKind::TaskGet, ToolInput::TaskGet { task_id }) => {
            execute_task_get(task_store, &task_id)
        }
        (ToolKind::TaskValidate, ToolInput::TaskValidate) => execute_task_validate(task_store),
        (ToolKind::Task, ToolInput::Task(_)) => {
            ExecutionResult::failure("Task tool must be dispatched via the streaming executor")
        }
        (ToolKind::Skill, ToolInput::Skill { name, args }) => {
            execute_skill(&name, args.as_deref()).await
        }
        (ToolKind::ToolSearch, ToolInput::ToolSearch { query, limit }) => {
            execute_tool_search(&query, limit, &cwd).await
        }
        (ToolKind::ToolSuggest, ToolInput::ToolSuggest { intent, limit }) => {
            execute_tool_suggest(&intent, limit, &cwd).await
        }
        (
            ToolKind::MemoryCreate,
            ToolInput::MemoryCreate {
                level,
                memory_type,
                scope,
                body,
            },
        ) => execute_memory_create(&level, &memory_type, &scope, &body, &cwd),
        (ToolKind::MemoryDelete, ToolInput::MemoryDelete { path }) => execute_memory_delete(&path),
        (
            ToolKind::TeamCreate,
            ToolInput::TeamCreate {
                team_name,
                description,
            },
        ) => execute_team_create(&team_name, description.as_deref(), &cwd).await,
        (ToolKind::TeamDelete, ToolInput::TeamDelete) => {
            execute_team_delete(active_team_name).await
        }
        (
            ToolKind::SendMessage,
            ToolInput::SendMessage {
                to,
                message,
                summary,
            },
        ) => execute_send_message(&to, &message, summary.as_deref(), active_team_name).await,
        (ToolKind::TeamMemberMode, ToolInput::TeamMemberMode { member_name, mode }) => {
            execute_team_member_mode(&member_name, &mode, active_team_name).await
        }
        (
            ToolKind::CodeIndex,
            ToolInput::CodeIndex {
                path,
                query,
                kind,
                max_entries,
            },
        ) => execute_code_index(
            &cwd,
            path.as_deref(),
            query.as_deref(),
            kind.as_deref(),
            max_entries,
        ),
        (
            ToolKind::GraphQuery,
            ToolInput::GraphQuery {
                query,
                max_tokens,
                include_handles,
            },
        ) => {
            let budget = max_tokens.unwrap_or(4000);
            let want_handles = include_handles.unwrap_or(true);
            let session = get_or_build_graph_session(&cwd);
            // Run twice: once raw (so we can record the structured
            // QueryResult to history *and* extract chain-able handles)
            // and once formatted with the budget. The raw call is
            // cheap — same parse, just skips the formatting pass —
            // and the alternative (changing format_query_result to
            // also expose the QueryResult) would touch the jfc-graph
            // public API.
            let raw_for_predicates = session.query_raw(&query).ok();
            if let Some(ref raw) = raw_for_predicates {
                record_graph_query(&query, raw);
            }
            match session.query(&query, budget) {
                Ok(output) => {
                    let mut text = output.text.clone();
                    // Magic's path-dependent analysis: when the
                    // query asked for `preconditions`, append the
                    // enclosing if/match/while predicate at every
                    // outgoing call site of each caller. The model
                    // sees "to call X you must have passed (a > 0)"
                    // without having to grep for callers manually.
                    if query.contains("preconditions")
                        && let Some(ref raw) = raw_for_predicates
                    {
                        let mut preds_block = String::new();
                        for node_id in raw.nodes.iter().take(10) {
                            let preds = jfc_graph::predicates::outgoing_call_predicates(
                                &session.graph,
                                node_id,
                            );
                            if preds.is_empty() {
                                continue;
                            }
                            if let Some(node) = session.graph.get_node(node_id) {
                                preds_block.push_str(&format!(
                                    "\n  • {} ({}):\n",
                                    node.name,
                                    node.file_path.display()
                                ));
                            }
                            for (target, ps) in preds.iter().take(3) {
                                let chain = ps
                                    .iter()
                                    .map(|p| p.text.as_str())
                                    .collect::<Vec<_>>()
                                    .join(" → ");
                                preds_block.push_str(&format!("      → {target}: {chain}\n"));
                            }
                        }
                        if !preds_block.is_empty() {
                            text.push_str("\n\n--- preconditions ---");
                            text.push_str(&preds_block);
                        }
                    }
                    // Append a machine-parseable handle footer so the
                    // model can pipe this query's matches into the
                    // next turn (e.g. `path fn:foo → fn:bar`). Bounded
                    // at 50 entries to keep the budget bite small even
                    // when a query returns hundreds of nodes.
                    if want_handles && let Some(ref raw) = raw_for_predicates {
                        let handles = raw.handles(&session.graph);
                        if !handles.is_empty() {
                            text.push_str("\n\n--- handles ---");
                            const HANDLE_CAP: usize = 50;
                            let total = handles.len();
                            for h in handles.iter().take(HANDLE_CAP) {
                                text.push('\n');
                                text.push_str(h);
                            }
                            if total > HANDLE_CAP {
                                text.push_str(&format!(
                                    "\n... and {} more (use a tighter query to see all)",
                                    total - HANDLE_CAP
                                ));
                            }
                        }
                    }
                    if output.was_truncated {
                        ExecutionResult::success(format!(
                            "{text}\n\n[Showing {}/{} nodes]",
                            output.nodes_shown, output.nodes_total
                        ))
                    } else {
                        ExecutionResult::success(text)
                    }
                }
                Err(e) => ExecutionResult::failure(format!("Graph query error: {e}")),
            }
        }
        (
            ToolKind::RunCoverage,
            ToolInput::RunCoverage {
                lcov_path,
                include_untested_list,
            },
        ) => {
            use jfc_graph::coverage::{annotate_graph_from_lcov, parse_lcov};
            use jfc_graph::possible_types::propagate_possible_types;

            let lcov_result = if let Some(ref path) = lcov_path {
                let file = match std::fs::File::open(path) {
                    Ok(f) => f,
                    Err(e) => {
                        return ExecutionResult::failure(format!(
                            "Failed to open lcov file {path}: {e}"
                        ));
                    }
                };
                let reader = std::io::BufReader::new(file);
                Ok(parse_lcov(reader))
            } else {
                // Run cargo llvm-cov to generate lcov output.
                let output = std::process::Command::new("cargo")
                    .args(["llvm-cov", "--lcov", "--output-path", "-"])
                    .current_dir(&cwd)
                    .output();
                match output {
                    Ok(out) if out.status.success() => {
                        let reader = std::io::BufReader::new(std::io::Cursor::new(out.stdout));
                        Ok(parse_lcov(reader))
                    }
                    Ok(out) => Err(format!(
                        "cargo llvm-cov failed (exit {}):\n{}",
                        out.status,
                        String::from_utf8_lossy(&out.stderr)
                    )),
                    Err(e) => Err(format!(
                        "Failed to run cargo llvm-cov: {e}. \
                         Install with: rustup component add llvm-tools && cargo install cargo-llvm-cov"
                    )),
                }
            };

            match with_graph_session_mut(&cwd, |session| {
                let mut summary = String::new();

                match lcov_result {
                    Ok((lcov_data, warnings)) => {
                        let (annotated, untested) =
                            annotate_graph_from_lcov(&mut session.graph, &lcov_data, &cwd);
                        let tested = annotated - untested;

                        summary.push_str(&format!(
                            "Coverage annotated: {annotated} functions ({tested} tested, {untested} untested)"
                        ));
                        if warnings > 0 {
                            summary.push_str(&format!(", {warnings} lcov parse warnings"));
                        }

                        // List untested functions if requested.
                        if include_untested_list && untested > 0 {
                            summary.push_str("\n\nUntested functions:");
                            let mut count = 0;
                            for node in session
                                .graph
                                .nodes_by_kind(jfc_graph::nodes::NodeKind::Function)
                            {
                                if node.metadata.get("coverage_tested").map(|v| v.as_str())
                                    == Some("false")
                                {
                                    summary.push_str(&format!(
                                        "\n  - {} ({}:{})",
                                        node.qualified_name,
                                        node.file_path.display(),
                                        node.span.start_line,
                                    ));
                                    count += 1;
                                    if count >= 100 {
                                        summary.push_str(&format!(
                                            "\n  ... and {} more (use `graph_query` with `untested` to see all)",
                                            untested - count
                                        ));
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    Err(e) => {
                        summary.push_str(&format!("Coverage collection failed: {e}\n\n"));
                        summary.push_str(
                            "Skipping coverage annotation, running possible-types analysis only.",
                        );
                    }
                }

                // Step 2: Always run possible-types propagation.
                let (pt_annotated, pt_inputs, pt_returns) =
                    propagate_possible_types(&mut session.graph);
                summary.push_str(&format!(
                    "\n\nPossible-types propagated: {pt_annotated} functions, \
                 {pt_inputs} input type entries, {pt_returns} return type entries"
                ));
                summary.push_str("\n\nUse `graph_query` with:");
                summary.push_str("\n  - `untested` operator to filter to uncovered functions");
                summary.push_str("\n  - `possible_types` operator to see type flow per function");
                summary.push_str("\n  Example: `entrypoints kind=PublicApi | untested`");
                summary.push_str("\n  Example: `fn(\"handler\") | possible_types`");

                ExecutionResult::success(summary)
            }) {
                Ok(result) => result,
                Err(message) => ExecutionResult::failure(message),
            }
        }
        (
            ToolKind::SymbolEdit,
            ToolInput::SymbolEdit {
                handle,
                new_content,
                validate,
                dispatch_cascade,
            },
        ) => {
            let session = get_or_build_graph_session(&cwd);
            let entry = match session.symbols().resolve(&handle) {
                Some(e) => e.clone(),
                None => {
                    let fuzzy = session.symbols().resolve_fuzzy(&handle);
                    if fuzzy.is_empty() {
                        return ExecutionResult::failure(format!(
                            "Symbol not found: '{}'. Use graph_query to discover handles.",
                            handle
                        ));
                    }
                    return ExecutionResult::failure(format!(
                        "Symbol '{}' not found. Did you mean: {}?",
                        handle,
                        fuzzy
                            .iter()
                            .take(5)
                            .map(|e| e.handle.as_str())
                            .collect::<Vec<_>>()
                            .join(", ")
                    ));
                }
            };

            // v131-style cascade: when the edit changes a function
            // signature, the surrounding call sites likely need
            // updating too. Generate per-file CascadeTask descriptors
            // and surface them in the tool's success string so the
            // model knows what it needs to fix next without having
            // to grep for callers itself. Validation runs first so
            // an obviously-broken edit blocks before we touch disk.
            let mut cascade_summary = String::new();
            if validate {
                let cascade = jfc_graph::cascade::generate_cascade(
                    &session.graph,
                    &entry.node_id,
                    new_content.lines().next().unwrap_or("").trim(),
                    &format!("symbol_edit on '{handle}'"),
                );
                if !cascade.is_empty() {
                    let total_sites: usize = cascade.iter().map(|t| t.call_sites.len()).sum();
                    let mut summary = format!(
                        "\n\n--- cascade ---\n{} call site{} across {} file{} may need updating:",
                        total_sites,
                        if total_sites == 1 { "" } else { "s" },
                        cascade.len(),
                        if cascade.len() == 1 { "" } else { "s" }
                    );
                    for task in &cascade {
                        summary.push_str(&format!(
                            "\n  - {} ({} site{}): {}",
                            task.call_sites
                                .first()
                                .map(|s| s.file_path.display().to_string())
                                .unwrap_or_default(),
                            task.call_sites.len(),
                            if task.call_sites.len() == 1 { "" } else { "s" },
                            task.call_sites
                                .iter()
                                .map(|s| s.caller_name.as_str())
                                .collect::<Vec<_>>()
                                .join(", ")
                        ));
                    }
                    summary
                        .push_str("\nDispatch the Task tool per file to update them in parallel.");
                    cascade_summary = summary;
                    tracing::info!(
                        target: "jfc::tools",
                        sites = total_sites,
                        files = cascade.len(),
                        "symbol_edit produced cascade"
                    );
                    // Optional auto-queue: when the caller passed
                    // `dispatch_cascade=true` AND a TaskStore is
                    // available, drop one entry per file into the
                    // store so the user (and the model, via /tasks)
                    // sees the cascade plan as concrete trackable
                    // work. metadata.kind = "cascade" lets the UI
                    // and `/cascade` filter for these specifically.
                    if dispatch_cascade && let Some(ts) = task_store.as_ref() {
                        let mut queued_ids: Vec<String> = Vec::new();
                        for ct in &cascade {
                            let file_disp = ct
                                .call_sites
                                .first()
                                .map(|s| s.file_path.display().to_string())
                                .unwrap_or_else(|| "<unknown>".to_owned());
                            let subject = format!(
                                "Update {} call site{} in {}",
                                ct.call_sites.len(),
                                if ct.call_sites.len() == 1 { "" } else { "s" },
                                file_disp,
                            );
                            let active = format!("Updating call sites in {file_disp}");
                            match ts.create::<jfc_session::TaskId>(
                                subject,
                                ct.instruction.clone(),
                                Some(active),
                                Vec::new(),
                            ) {
                                Ok(t) => {
                                    let metadata = serde_json::json!({
                                        "kind": "cascade",
                                        "source_handle": handle,
                                        "file": file_disp,
                                        "callers": ct
                                            .call_sites
                                            .iter()
                                            .map(|s| s.caller_name.clone())
                                            .collect::<Vec<_>>(),
                                        "new_signature": ct.new_signature,
                                    });
                                    let _ = ts.update(
                                        t.id.as_str(),
                                        jfc_session::TaskPatch {
                                            metadata: Some(metadata),
                                            ..Default::default()
                                        },
                                    );
                                    queued_ids.push(t.id.to_string());
                                }
                                Err(e) => {
                                    tracing::warn!(
                                        target: "jfc::tools",
                                        error = %e,
                                        "cascade task create failed"
                                    );
                                }
                            }
                        }
                        if !queued_ids.is_empty() {
                            cascade_summary.push_str(&format!(
                                "\n\nQueued {} cascade task{} ({}). Use the Task tool with the \
                                 task IDs above as descriptions, or run /cascade to view them.",
                                queued_ids.len(),
                                if queued_ids.len() == 1 { "" } else { "s" },
                                queued_ids.join(", "),
                            ));
                        }
                    }
                }
            }

            let file_content = match std::fs::read_to_string(&entry.file_path) {
                Ok(c) => c,
                Err(e) => return ExecutionResult::failure(format!("Read failed: {e}")),
            };

            let start = entry.span.byte_range.start;
            let end = entry.span.byte_range.end;
            if end > file_content.len() {
                return ExecutionResult::failure(
                    "Span out of bounds — file changed since graph was built",
                );
            }

            let new_file = format!(
                "{}{}{}",
                &file_content[..start],
                new_content,
                &file_content[end..]
            );
            if let Err(e) = std::fs::write(&entry.file_path, &new_file) {
                return ExecutionResult::failure(format!("Write failed: {e}"));
            }
            // Invalidate the cached graph session for this workspace so
            // the next graph_query re-parses the modified file and the
            // user sees the symbol's new shape. Also queue the file
            // for auto-context injection on the next stream call.
            invalidate_graph_session_cache(Some(&cwd));
            record_edited_file(&entry.file_path);

            let result = ExecutionResult::success(format!(
                "Edited symbol '{}' in {}{}",
                handle,
                entry.file_path.display(),
                cascade_summary
            ));
            // Slop guard: check the new file content for quality issues.
            maybe_run_slop_guard(result, &entry.file_path, &new_file, &cwd).await
        }
        (
            ToolKind::PostBounty,
            ToolInput::PostBounty {
                description,
                budget,
                acceptance_criteria,
                max_solvers,
                auto_dispatch,
            },
        ) => {
            // The orchestrator's lock is process-global; only one
            // post_bounty runs at a time. That's fine — bounties are
            // posted in the LLM's main loop, not from concurrent
            // subagents. If two tool calls race, the second waits.
            //
            // Posting always succeeds first. If `auto_dispatch=true`,
            // we then drop the lock, run the cycle (which spawns
            // real subagent LLM calls and can take minutes), and
            // re-acquire the lock to read the settlement. Holding
            // the orchestrator mutex across the network round-trips
            // would block /market and concurrent post_bounty calls.
            let bounty_id = {
                let mut orch = market_orchestrator().lock().await;
                match orch.post_bounty(description, budget, acceptance_criteria, max_solvers) {
                    Ok(id) => id,
                    Err(e) => {
                        return ExecutionResult::failure(format!("post_bounty failed: {e}"));
                    }
                }
            };
            let max_solvers_text = match max_solvers {
                Some(n) => n.to_string(),
                None => {
                    let orch = market_orchestrator().lock().await;
                    orch.charter().max_solvers.to_string()
                }
            };
            if !auto_dispatch {
                return ExecutionResult::success(format!(
                    "Bounty `{bounty_id}` registered. State=Open, budget={budget} tok, \
                     max_solvers={max_solvers_text}. Solvers and validators have NOT \
                     run yet — the post step only registers the bounty in the market. \
                     To execute the full Post→Solve→Validate→Settle cycle (real LLM \
                     subagents compete + cross-validate), call run_bounty with \
                     bounty_id=\"{bounty_id}\". Or repost with auto_dispatch=true to \
                     register and run in one shot."
                ));
            }
            // Drive the real cycle. The orchestrator mutex is
            // dropped before the await so /market and concurrent
            // post_bounty calls aren't blocked across the network
            // round-trips.
            let Some((provider, model)) = snapshot_active_provider() else {
                return ExecutionResult::success(format!(
                    "Bounty `{bounty_id}` registered (budget {budget} tok, \
                     max_solvers={max_solvers_text}, State=Open). \
                     auto_dispatch=true was requested but the tool layer \
                     has no active provider registered, so the cycle did \
                     not run. The bounty stays Open — call run_bounty \
                     once the provider is wired."
                ));
            };
            let invoker = EconomyAgentInvoker::new(provider, model);
            let swarm = EconomySwarmProvider::new(cwd.clone());
            // Solver + validator counts: respect the bounty's
            // max_solvers, default to 2 to keep the per-bounty
            // round-trip count predictable. One validator per
            // surviving solution — sealed validation gives one
            // independent verdict per solver.
            let n_solvers = max_solvers.unwrap_or(2).clamp(1, 5);
            tracing::info!(
                target: "jfc::ui::bounty",
                bounty_id = %bounty_id,
                n_solvers = n_solvers,
                cwd = %cwd.display(),
                "post_bounty auto_dispatch: kicking off cycle"
            );
            let cycle_result = {
                let mut orch = market_orchestrator().lock().await;
                orch.run_bounty_cycle(&bounty_id, &invoker, &swarm, n_solvers, 1)
                    .await
            };
            match cycle_result {
                Ok(outcome) => {
                    let written =
                        apply_winning_solution(&cwd, &bounty_id, outcome.winning_solution.as_ref());
                    tracing::info!(
                        target: "jfc::ui::bounty",
                        bounty_id = %bounty_id,
                        winner = outcome.settlement.winner.as_ref().map(|a| a.0.as_str()).unwrap_or("(none)"),
                        files_written = written.files.len(),
                        "post_bounty auto_dispatch settled"
                    );
                    ExecutionResult::success(format!(
                        "Bounty `{bounty_id}` settled.\n\
                         Winner: {}\n\
                         Total cost: {} tok\n\
                         Payouts: {}\n\
                         Trust updates: {}\n\
                         {}\n\
                         Run /market to see updated trust + budget.",
                        outcome
                            .settlement
                            .winner
                            .as_ref()
                            .map(|a| a.0.as_str())
                            .unwrap_or("(no winning solution)"),
                        outcome.settlement.total_cost,
                        outcome.settlement.payouts.len(),
                        outcome.settlement.trust_updates.len(),
                        written.summary,
                    ))
                }
                Err(e) => ExecutionResult::failure(format!(
                    "auto_dispatch cycle for `{bounty_id}` failed: {e}"
                )),
            }
        }
        (
            ToolKind::RunBounty,
            ToolInput::RunBounty {
                bounty_id,
                max_solvers,
            },
        ) => {
            // Drive an already-posted Open bounty through the full
            // Solve→Validate→Settle cycle. Same code path as
            // PostBounty's auto_dispatch=true, just without the
            // post step. Lets the model post first (cheap registration)
            // and dispatch later when ready, instead of all-or-nothing.
            let Some((provider, model)) = snapshot_active_provider() else {
                return ExecutionResult::failure(
                    "run_bounty: no active provider registered with the \
                     tool layer. main.rs must call \
                     tools::register_active_provider during startup.",
                );
            };
            // Verify the bounty exists and is in Open state before
            // we go through all the worktree + LLM-call setup.
            let state = {
                let orch = market_orchestrator().lock().await;
                orch.bounty_state(&bounty_id)
            };
            let Some(state) = state else {
                return ExecutionResult::failure(format!(
                    "run_bounty: bounty `{bounty_id}` not found"
                ));
            };
            if !matches!(state, jfc_economy::types::MarketState::Open) {
                return ExecutionResult::failure(format!(
                    "run_bounty: bounty `{bounty_id}` is in state {state:?}, \
                     not Open — only Open bounties can be dispatched"
                ));
            }
            let invoker = EconomyAgentInvoker::new(provider, model);
            let swarm = EconomySwarmProvider::new(cwd.clone());
            let n_solvers = max_solvers.unwrap_or(2).clamp(1, 5);
            tracing::info!(
                target: "jfc::ui::bounty",
                bounty_id = %bounty_id,
                n_solvers = n_solvers,
                cwd = %cwd.display(),
                "run_bounty: kicking off cycle"
            );
            let cycle_result = {
                let mut orch = market_orchestrator().lock().await;
                orch.run_bounty_cycle(&bounty_id, &invoker, &swarm, n_solvers, 1)
                    .await
            };
            match cycle_result {
                Ok(outcome) => {
                    let written =
                        apply_winning_solution(&cwd, &bounty_id, outcome.winning_solution.as_ref());
                    tracing::info!(
                        target: "jfc::ui::bounty",
                        bounty_id = %bounty_id,
                        winner = outcome.settlement.winner.as_ref().map(|a| a.0.as_str()).unwrap_or("(none)"),
                        files_written = written.files.len(),
                        "run_bounty settled"
                    );
                    ExecutionResult::success(format!(
                        "Bounty `{bounty_id}` settled.\n\
                         Winner: {}\n\
                         Total cost: {} tok\n\
                         Payouts: {}\n\
                         Trust updates: {}\n\
                         {}\n\
                         Run /market or market_status to see updated trust + budget.",
                        outcome
                            .settlement
                            .winner
                            .as_ref()
                            .map(|a| a.0.as_str())
                            .unwrap_or("(no winning solution)"),
                        outcome.settlement.total_cost,
                        outcome.settlement.payouts.len(),
                        outcome.settlement.trust_updates.len(),
                        written.summary,
                    ))
                }
                Err(e) => ExecutionResult::failure(format!(
                    "run_bounty cycle for `{bounty_id}` failed: {e}"
                )),
            }
        }
        (ToolKind::MarketStatus, ToolInput::MarketStatus { bounty_id }) => {
            let orch = market_orchestrator().lock().await;
            let detector = match collusion_detector().lock() {
                Ok(g) => g,
                Err(e) => {
                    return ExecutionResult::failure(format!(
                        "collusion detector mutex poisoned: {e}"
                    ));
                }
            };
            let report = jfc_economy::reporting::MarketReport::generate(&orch, &detector, 0, 0);
            let critical = report.health.is_critical();
            let mut body = format!(
                "Market: {} bounties total ({} active) · spent {} / remaining {} tok\n\
                 Health: composite={:.2} (eff={:.2}, fair={:.2}, trust={:.2}, budget={:.2})",
                report.total_bounties,
                report.active_bounties,
                report.total_spent,
                report.remaining_budget,
                report.health.composite,
                report.health.efficiency,
                report.health.fairness,
                report.health.trust,
                report.health.budget_adherence,
            );
            if critical {
                body.push_str(" [CRITICAL]");
            }
            if !report.flagged_agents.is_empty() {
                body.push_str("\nFlagged agents:");
                for f in &report.flagged_agents {
                    body.push_str(&format!("\n  - {f}"));
                }
            }
            if let Some(id) = bounty_id
                && let Some(state) = orch.bounty_state(&id)
            {
                body.push_str(&format!("\nBounty `{id}` state: {state:?}"));
                if matches!(state, jfc_economy::types::MarketState::Open) {
                    body.push_str(" — call run_bounty to drive Solve→Validate→Settle.");
                }
            }
            ExecutionResult::success(body)
        }
        (ToolKind::MultiEdit, ToolInput::MultiEdit { file_path, edits }) => {
            // Serialize on the same per-file lock used by Edit/Write so
            // MultiEdit and parallel Edit calls don't race on the same file.
            let _guard_lock = crate::tools::filesystem::acquire_file_lock(&file_path).await;
            let _guard = _guard_lock.lock().await;
            // Apply each edit in order. Each edit sees the previous
            // edit's output, so later edits can reference text that
            // earlier edits introduced. Bails on the first edit that
            // doesn't match — partial application would leave the
            // file in a half-edited state the model has to recover
            // from. Same contract as v132.
            let path = std::path::PathBuf::from(&file_path);
            let mut content = match tokio::fs::read_to_string(&path).await {
                Ok(s) => s,
                Err(e) => {
                    return ExecutionResult::failure(format!(
                        "MultiEdit: cannot read {file_path}: {e}"
                    ));
                }
            };
            let edit_array =
                match edits.as_array() {
                    Some(a) => a,
                    None => return ExecutionResult::failure(
                        "MultiEdit: `edits` must be an array of {old_string, new_string} objects"
                            .to_string(),
                    ),
                };
            let mut applied = 0usize;
            for (i, edit) in edit_array.iter().enumerate() {
                let old = edit
                    .get("old_string")
                    .and_then(|v| v.as_str())
                    .unwrap_or("");
                let new_s = edit
                    .get("new_string")
                    .and_then(|v| v.as_str())
                    .unwrap_or("");
                let replace_all = edit
                    .get("replace_all")
                    .and_then(|v| v.as_bool())
                    .unwrap_or(false);
                if old.is_empty() {
                    return ExecutionResult::failure(format!(
                        "MultiEdit: edit {} has empty old_string",
                        i + 1
                    ));
                }
                if !content.contains(old) {
                    return ExecutionResult::failure(format!(
                        "MultiEdit: edit {} of {} — old_string not found. \
                         Earlier edits applied: {applied}. \
                         Read the file and retry with the current contents.",
                        i + 1,
                        edit_array.len()
                    ));
                }
                content = if replace_all {
                    content.replace(old, new_s)
                } else {
                    let occurrences = content.matches(old).count();
                    if occurrences > 1 {
                        return ExecutionResult::failure(format!(
                            "MultiEdit: edit {} matched {occurrences} times — \
                             pass `replace_all: true` or include more context to disambiguate.",
                            i + 1
                        ));
                    }
                    content.replacen(old, new_s, 1)
                };
                applied += 1;
            }
            if let Err(e) = tokio::fs::write(&path, &content).await {
                return ExecutionResult::failure(format!("MultiEdit: write {file_path}: {e}"));
            }
            tracing::info!(
                target: "jfc::tools::multi_edit",
                file_path = %file_path,
                applied,
                bytes = content.len(),
                "MultiEdit applied"
            );
            invalidate_graph_session_cache(Some(&cwd));
            record_edited_file(Path::new(&file_path));
            let result =
                ExecutionResult::success(format!("Applied {applied} edits to {file_path}."));
            // Slop guard: check the final content for quality issues.
            maybe_run_slop_guard(result, Path::new(&file_path), &content, &cwd).await
        }
        (
            ToolKind::AskUserQuestion,
            ToolInput::AskUserQuestion {
                question,
                options,
                multi_select,
            },
        ) => {
            // Surface the prompt to the user as a special transcript
            // entry. The user replies with text that the next turn
            // sees as the tool result. We don't block here because
            // jfc has no modal-prompt UI yet — the entry pattern is
            // "post the question, return immediately, treat the next
            // user message as the answer."
            let opts_repr: Vec<String> = options
                .as_array()
                .map(|arr| {
                    arr.iter()
                        .filter_map(|opt| {
                            let label = opt.get("label").and_then(|v| v.as_str())?;
                            let desc = opt
                                .get("description")
                                .and_then(|v| v.as_str())
                                .unwrap_or("");
                            if desc.is_empty() {
                                Some(format!("- {label}"))
                            } else {
                                Some(format!("- {label} — {desc}"))
                            }
                        })
                        .collect()
                })
                .unwrap_or_default();
            let body = format!(
                "**Question for you:** {question}\n\n{}\n\n_(Reply with your choice{} as your next message.)_",
                opts_repr.join("\n"),
                if multi_select { "(s)" } else { "" }
            );
            // The transcript itself surfaces the question; no separate
            // toast is needed for the user to act on it.
            tracing::info!(
                target: "jfc::tools::ask",
                question = %question.chars().take(80).collect::<String>(),
                option_count = opts_repr.len(),
                multi = multi_select,
                "AskUserQuestion surfaced"
            );
            ExecutionResult::success(format!(
                "{body}\n\n(The user's next message is your tool result.)"
            ))
        }
        (ToolKind::WebFetch, ToolInput::WebFetch { url, prompt }) => {
            // v132 caches WebFetch results per-URL with a 15-minute TTL so
            // the model can iterate on a document it just fetched without
            // re-downloading. Cache HIT returns immediately with a
            // `<system-reminder>` flag so the model knows the body is from
            // a previous fetch (matters if the URL was a live endpoint).
            if let Some(cached) = crate::web_cache::get(&url) {
                let prompt_hint = prompt
                    .as_ref()
                    .map(|p| format!("Focus: {p}\n\n"))
                    .unwrap_or_default();
                tracing::debug!(
                    target: "jfc::tools::webfetch",
                    %url,
                    cached_bytes = cached.len(),
                    "WebFetch cache HIT"
                );
                return ExecutionResult::success(format!(
                    "{}\n\nGET {url} → 200 (cached)\n\n{prompt_hint}{cached}",
                    crate::system_reminder::format(
                        "WebFetch result served from cache (last fetch <15min ago). \
                         If you need fresh content, re-issue with a cache-busting query \
                         parameter."
                    ),
                ));
            }

            // Use reqwest with a short timeout. Strips HTML to text
            // when content-type indicates HTML; otherwise returns
            // the body as-is. The optional `prompt` is *not* applied
            // here (we don't run a second LLM pass) — it's surfaced
            // verbatim in the tool result so the model sees its own
            // intent and can summarize during the next turn.
            let client = match reqwest::Client::builder()
                .timeout(std::time::Duration::from_secs(15))
                .user_agent("jfc/0.1 (https://github.com/anthropics/jfc)")
                .build()
            {
                Ok(c) => c,
                Err(e) => return ExecutionResult::failure(format!("WebFetch: client init: {e}")),
            };
            let resp = match client.get(&url).send().await {
                Ok(r) => r,
                Err(e) => return ExecutionResult::failure(format!("WebFetch: {url}: {e}")),
            };
            let status = resp.status();
            let content_type = resp
                .headers()
                .get("content-type")
                .and_then(|v| v.to_str().ok())
                .unwrap_or("")
                .to_owned();
            let body = resp.text().await.unwrap_or_default();
            let body = if content_type.contains("html") {
                // Cheap HTML→text: strip tags. A real impl would use
                // scraper/html5ever; this is an MVP.
                strip_html_tags(&body)
            } else {
                body
            };
            // Cap to 50 KB so the tool result doesn't blow context.
            let truncated = if body.len() > 50_000 {
                format!(
                    "{}\n\n[...truncated, full {} bytes]",
                    &body[..50_000],
                    body.len()
                )
            } else {
                body
            };
            // Cache successful 2xx responses only — caching errors would
            // mask transient outages on retry.
            if status.is_success() {
                crate::web_cache::put(&url, truncated.clone());
            }
            let prompt_hint = prompt
                .as_ref()
                .map(|p| format!("Focus: {p}\n\n"))
                .unwrap_or_default();
            ExecutionResult::success(format!("GET {url} → {status}\n\n{prompt_hint}{truncated}"))
        }
        (ToolKind::WebSearch, ToolInput::WebSearch { query, max_results }) => {
            let num = max_results.unwrap_or(5) as usize;
            match crate::web_search::search(&query, num).await {
                Ok(results) => ExecutionResult::success(results),
                Err(e) => ExecutionResult::failure(e),
            }
        }
        (ToolKind::ExitPlanMode, ToolInput::ExitPlanMode { plan }) => {
            // Hand the plan off to the UI thread so all permission-mode
            // mutations stay on a single task. The model's tool result
            // is the success acknowledgment — the actual mode flip
            // happens when the main loop drains `UiEvent::ExitPlanModeRequested`.
            if let Some(tx) = snapshot_event_sender() {
                let _ = tx
                    .send(crate::runtime::AppEvent::Ui(
                        crate::runtime::UiEvent::ExitPlanModeRequested { plan: plan.clone() },
                    ))
                    .await;
                tracing::info!(
                    target: "jfc::tools::plan_mode",
                    plan_bytes = plan.len(),
                    "ExitPlanMode dispatched to UI thread"
                );
                ExecutionResult::success(
                    "Plan presented to user. Permission mode transitions \
                     from Plan to AcceptEdits — you may now perform the \
                     destructive operations described in the plan."
                        .to_string(),
                )
            } else {
                tracing::warn!(
                    target: "jfc::tools::plan_mode",
                    "ExitPlanMode called but no AppEvent sender registered"
                );
                ExecutionResult::failure(
                    "ExitPlanMode failed: UI event channel unavailable.".to_string(),
                )
            }
        }
        (ToolKind::Mcp(advertised_name), ToolInput::Mcp { arguments, .. }) => {
            // Route through the global MCP registry. The registry is
            // populated at startup from `[mcp.<name>]` config blocks;
            // if it's missing, MCP isn't wired in this build (e.g.
            // headless test) — surface a clean failure so the model
            // can recover rather than thinking the call hung.
            let Some(registry) = snapshot_mcp_registry() else {
                return ExecutionResult::failure(
                    "MCP registry not initialized — restart jfc with the MCP module enabled."
                        .to_string(),
                );
            };
            match crate::mcp::dispatch_tool(&registry, &advertised_name, arguments).await {
                Ok(outcome) if outcome.is_error => ExecutionResult::failure(outcome.text),
                Ok(outcome) => ExecutionResult::success(outcome.text),
                Err(e) => ExecutionResult::failure(format!("MCP dispatch failed: {e}")),
            }
        }
        (
            ToolKind::CronCreate,
            ToolInput::CronCreate {
                schedule,
                command,
                description,
            },
        ) => execute_cron_create(&schedule, &command, &description),
        (ToolKind::CronList, ToolInput::CronList) => execute_cron_list(),
        (ToolKind::CronDelete, ToolInput::CronDelete { id }) => execute_cron_delete(&id),
        (
            ToolKind::ScheduleWakeup,
            ToolInput::ScheduleWakeup {
                delay_seconds,
                prompt,
                reason,
            },
        ) => execute_schedule_wakeup(delay_seconds, &prompt, &reason),
        (ToolKind::Monitor, ToolInput::Monitor { command, until }) => {
            execute_monitor(&command, &until, &cwd).await
        }
        (
            ToolKind::Lsp,
            ToolInput::Lsp {
                kind: req_kind,
                file,
                line,
                column,
            },
        ) => execute_lsp(&req_kind, &file, line, column, &cwd).await,
        (ToolKind::PushNotification, ToolInput::PushNotification { message, title }) => {
            execute_push_notification(&message, title.as_deref())
        }
        (
            ToolKind::RemoteTrigger,
            ToolInput::RemoteTrigger {
                trigger_id,
                payload,
            },
        ) => execute_remote_trigger(&trigger_id, payload.as_ref()).await,
        (ToolKind::EnterPlanMode, ToolInput::EnterPlanMode { reason }) => {
            execute_enter_plan_mode(&reason).await
        }
        (ToolKind::EnterWorktree, ToolInput::EnterWorktree { name, branch }) => {
            execute_enter_worktree(&name, branch.as_deref(), &cwd).await
        }
        (ToolKind::ExitWorktree, ToolInput::ExitWorktree) => execute_exit_worktree(&cwd).await,
        (ToolKind::NotebookRead, ToolInput::NotebookRead { path }) => {
            execute_notebook_read(&path).await
        }
        (
            ToolKind::NotebookEdit,
            ToolInput::NotebookEdit {
                path,
                cell_id,
                new_source,
                edit_mode,
            },
        ) => execute_notebook_edit(&path, &cell_id, &new_source, edit_mode.as_deref()).await,
        (ToolKind::ScratchpadRead, ToolInput::ScratchpadRead { key }) => {
            execute_scratchpad_read(&key)
        }
        (ToolKind::ScratchpadWrite, ToolInput::ScratchpadWrite { key, value }) => {
            execute_scratchpad_write(&key, &value)
        }
        (kind, input) => ExecutionResult::failure(format!(
            "tool input mismatch: {kind:?} was paired with an incompatible \
             ToolInput variant ({}). This is a routing bug — the tool's \
             implementation exists but the parsed input didn't match its \
             expected shape.",
            input.summary()
        )),
    }
}

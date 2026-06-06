//! `ProviderEvent::*` handlers. All seven variants are simple state
//! assignments (no `tx.send` fan-out, no spawned tasks), so they read
//! best as one file rather than scattered match arms.

use crate::app::App;
use crate::input;
use crate::runtime::ProviderEvent;

pub(crate) fn handle_provider_event(app: &mut App, ev: ProviderEvent) {
    match ev {
        ProviderEvent::McpUpdated { servers } => {
            app.engine.mcp_servers = servers;
        }
        ProviderEvent::LspUpdated { servers } => {
            app.engine.lsp_servers = servers;
        }
        ProviderEvent::DiagnosticsUpdated { entries } => {
            // Mirror the snapshot into the global so `stream_response`
            // can inject diagnostics into the system prompt without
            // having to touch every call site to thread through an
            // `&[DiagnosticEntry]` parameter.
            crate::diagnostics::set_global_snapshot(entries.clone());
            app.engine.diagnostics = entries;
            // Toast-on-transition was disabled by user request — the
            // dim summary row above the spinner already surfaces the
            // count, and Ctrl+O opens the full panel. Spawning a
            // separate toast on launch (when cargo-check produced
            // its initial set) doubled the noise. The transition
            // toast is intentionally left commented out rather than
            // deleted so it can be reinstated behind a setting if
            // wanted later.
            // let was_empty = app.engine.diagnostics.is_empty();
            // let is_empty = entries.is_empty();
            // ...
        }
        ProviderEvent::ModelsLoaded { provider, models } => {
            app.model_picker_query_cache.clear();
            app.engine.provider_models.insert(provider, models);
            app.sync_selected_context_window();
            if app.show_model_picker {
                app.model_picker_models = input::collect_all_models(app);
            }
        }
        ProviderEvent::ProfileLoaded {
            seat_tier,
            subscription_type,
            email,
        } => {
            app.engine.seat_tier = seat_tier;
            app.engine.subscription_type = subscription_type;
            app.engine.account_email = email;
            if app.show_model_picker {
                app.model_picker_models = input::collect_all_models(app);
            }
        }
        ProviderEvent::AnthropicSnapshotUpdated { snapshot } => {
            app.engine.anthropic_account_snapshot = snapshot;
        }
        ProviderEvent::ClaudeStatusUpdated(update) => {
            if let Some(snapshot) = update.snapshot {
                app.engine.claude_status = Some(snapshot);
                app.engine.claude_status_error = None;
            } else if let Some(error) = update.error {
                app.engine.claude_status_error = Some(error);
            }
        }
    }
}

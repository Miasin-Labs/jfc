# jfc-plugin-sdk-refactor draft

status: awaiting-approval
intent: unclear architecture-scale refactor planning
pending_action: write `.omo/plans/jfc-plugin-sdk-refactor.md` after explicit approval
checkpoint_commit: `d05c187 chore: checkpoint dirty workspace before refactor`

## Routing

The request is open-ended: “mirror opencode architecture into Rust” and make JFC bare-bones/minimal with plugins/SDK. I treated this as an UNCLEAR architecture-scale planning task, so I derived best-practice defaults from the repositories rather than asking an interview tree.

## Evidence ledger

- JFC dirty tree was checkpointed in `d05c187`; current branch is ahead of `origin/master` by one commit.
- opencode root is a Bun workspace with distinct app/runtime/server/tui/sdk/plugin packages. Root `package.json` depends on `@opencode-ai/plugin`, `@opencode-ai/script`, and `@opencode-ai/sdk`.
- opencode server plugin contract is public in `/home/cole/WebstormProjects/forks/opencode/packages/plugin/src/index.ts`: `PluginInput` exposes a generated client, project/worktree/directory, workspace registration, server URL, and Bun shell; `Plugin` returns `Hooks`.
- opencode hooks include config/event/tool/auth/provider/chat params/chat headers/permission/tool before-after/shell env/experimental transforms/compaction/tool definition.
- opencode runtime host in `packages/opencode/src/plugin/index.ts` loads internal then configured plugins, preserves deterministic hook order, exposes `trigger/list/init`, invokes config/event/dispose hooks, and isolates plugin failures.
- opencode v2 core plugin service in `packages/core/src/plugin.ts` defines typed hooks with `define`, `add/remove/trigger/triggerFor`, scoped lifetimes, keyed locks, and mutable output drafts.
- opencode boot service in `packages/core/src/plugin/boot.ts` registers internal plugins against a typed service graph and exposes `wait()`.
- opencode loader in `packages/opencode/src/plugin/loader.ts` separates spec normalization, target resolution/install, entrypoint detection, compatibility checks, and dynamic import.
- opencode config tracks plugin provenance as `{ spec, source, scope }`, dedupes by plugin identity, and auto-discovers local plugin files under `.opencode/plugin(s)`.
- opencode TUI plugin API in `packages/plugin/src/tui.ts` is separate from server hooks and exposes app/attention/keymap/mode/route/ui/kv/state/theme/client/event/slots/plugins/lifecycle.
- JFC Cargo dependency graph shows `jfc-engine` currently depends on almost every feature crate, while the `jfc` binary depends on almost every crate. This makes `jfc-engine` a feature aggregator rather than a thin orchestrator.
- JFC already has fragmented extension pieces: `crates/jfc/src/cli/plugin.rs` installs/list/removes plugins, `crates/jfc-agents/src/registry.rs` discovers plugin roots for skills/agents, workflow registry discovers plugin workflows, `crates/jfc-engine/src/hooks/mod.rs` has many shell lifecycle hooks, and MCP exposes namespaced tool defs.
- `jfc_provider::Provider` is sealed and explicitly says external extension requires adding a module and registering it internally; this conflicts with plugin/SDK provider extensibility.

## Adopted defaults

| Decision | Default | Rationale | Reversible |
| --- | --- | --- | --- |
| Architecture target | Stable SDK crate + separate runtime host crate | Mirrors opencode’s contract/host split and prevents `jfc-engine` from becoming the plugin API. | Yes |
| Plugin granularity | Start with an extension spine, not “every feature becomes a plugin” immediately | Avoids a big-bang rewrite and lets existing domains keep working behind adapters. | Yes |
| External plugin execution | Process/WASM/MCP-backed v1, not native Rust dylibs | Rust has no stable plugin ABI; out-of-process isolates crashes and version skew. | Yes |
| Provider extensibility | Keep internal sealed provider trait but expose external `ProviderDescriptor` + bridge executor | Preserves internal zero-cost/provider safety while allowing third-party providers through stable DTOs. | Yes |
| TUI plugins | Later, separate `jfc-tui-plugin-sdk` or gated module | opencode separates TUI plugin API from server/core hooks; JFC should not leak ratatui/UI into base SDK. | Yes |
| Engine role | `jfc-engine` becomes composition/runtime orchestrator only | Current engine is over-coupled; target is boot/wiring/event orchestration, not feature ownership. | Yes |
| Migration style | Descriptor adapters first, physical code movement second | Allows incremental verification and keeps behavior stable. | Yes |

## Component ledger

1. Core vocabulary layer: `jfc-core` as stable DTOs, ids, message/tool/session/event/error shapes.
2. Public extension contract: new `jfc-plugin-sdk` for manifests, typed hooks, descriptors, compatibility, provenance, bridge DTOs.
3. Runtime host: new `jfc-plugin-host` (or engine module first, then crate) for discovery, provenance, activation, lifecycle, ordered hook triggering, and bridge adapters.
4. Engine orchestrator: shrink `jfc-engine` to boot/runtime/session/event composition and adapters.
5. Feature domains: providers/tools/agents/skills/workflows/MCP/session/auth/memory/economy/daemon register descriptors without owning the host.
6. Frontends and APIs: TUI, server/SDK/remote use engine + host through stable APIs; TUI plugin SDK comes after server/core spine.

## Initial migration waves

1. Boundary freeze and dependency audit: document target layers and add dependency direction checks.
2. SDK skeleton: create `jfc-plugin-sdk` with manifest, capability, hook, descriptor, compatibility, and provenance DTOs reusing `jfc-core`.
3. Host spine adapters: create `jfc-plugin-host` around existing plugin roots, shell hooks, workflow discovery, MCP namespacing, and deterministic activation semantics.
4. Internal plugins first: register built-in providers, tools, hooks, skills/workflows, and MCP contributions through descriptors before enabling external plugins.
5. Provider descriptor bridge: add external provider registration through descriptors/bridges while keeping internal `Provider` sealed.

## Must-not-have list

- No native third-party Rust dynamic plugin ABI in v1.
- No `jfc-plugin-sdk` dependency on `jfc-engine`, TUI, concrete providers, or config loader policy.
- No big-bang move of all domains at once.
- No stringly hook registry except at serialized process/MCP boundaries.
- No direct external implementation of internal `Provider` as the stable extension contract.
- No weakening existing provider/tool/session behavior just to fit the plugin shape.

## Verification strategy draft

- `cargo metadata`/architecture tests enforce dependency direction for `jfc-core`, `jfc-plugin-sdk`, `jfc-plugin-host`, `jfc-engine`, feature crates, and frontends.
- Golden tests cover plugin ordering, duplicate identity dedupe, skipped/failed plugin isolation, and sequential mutable hook output.
- Lifecycle tests cover activation, finalizers, failed activation cleanup, per-session/global scoping, and dispose exactly once.
- Compatibility tests cover missing entrypoint, unsupported SDK version, invalid manifest, disabled plugin, duplicate plugin, and unavailable bridge backend.
- Provider descriptor tests cover built-in provider path unchanged, external descriptor model/auth exposure, and bridge failure isolation.
- Every migration wave verifies with `cargo fmt --all --check`, targeted crate tests, `cargo build`, `cargo test`, and then `cargo clippy --workspace` when the wave is stable.

## Approval gate

If approved, write one decision-complete plan at `.omo/plans/jfc-plugin-sdk-refactor.md`. The plan will not implement code; it will produce executable waves with exact files, dependencies, acceptance criteria, QA surfaces, and commit strategy.

## Feature flag scaffolding

- Added jfc-ui feature flags with `default = []`: `hashline`, `permission-automation`, `hooks`, `background-agents`, `intent-gate`, and `landlock-sandbox`.
- Added cfg-gated module declarations in `crates/jfc-ui/src/main.rs`; stubs are doc-comment only.
- `sandbox/mod.rs` gates `landlock` with `#[cfg(target_os = "linux")]`.

## jfc-ui test infrastructure

- Added `criterion` with `html_reports` and `proptest` to `crates/jfc-ui` dev-dependencies.
- Added the `hooks` benchmark target with `harness = false` after the feature flags.
- Created `crates/jfc-ui/benches/hooks.rs` as a placeholder criterion benchmark for future hook dispatch latency work.
- Verified with `cargo bench -p jfc-ui --all-features --no-run && cargo test -p jfc-ui --all-features`.

## Feature config loader

- `crates/jfc-ui/src/config.rs` now has a cfg-gated `feature_config` module enabled by `permission-automation`, `hooks`, `intent-gate`, or `background-agents`.
- `FeatureConfig::load(base_dir)` reads `.jfc/features.toml`, returns defaults for missing files, and warns then defaults for malformed TOML.
- Defaults include permission ceilings for destructive shell commands and background agent limits of `max_concurrent = 5`, `max_depth = 2`.

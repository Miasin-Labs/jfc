//! Tiny duration/elapsed formatters shared by engine handlers and the TUI
//! spinner. Engine-resident so stream handlers can label turn footers
//! without linking the render stack.

use std::time::Duration;

/// `5s` under a minute, `2m04s` above.
pub fn fmt_elapsed(elapsed: Duration) -> String {
    let secs = elapsed.as_secs();
    if secs >= 60 {
        format!("{}m{:02}s", secs / 60, secs % 60)
    } else {
        format!("{secs}s")
    }
}

/// Post-turn footer shown under each completed assistant message: just the
/// honest elapsed time. The caller may append the turn's cost
/// (`2m04s · $0.04`). No decorative past-tense verb.
pub fn format_finished(elapsed: Duration) -> String {
    fmt_elapsed(elapsed)
}

/// Time-to-first-token readout for the turn footer: `420ms` under a second,
/// `1.4s` above. Compact since it sits alongside elapsed + cost.
pub fn format_ttft(ttft_ms: u64) -> String {
    if ttft_ms >= 1000 {
        format!("{:.1}s", ttft_ms as f64 / 1000.0)
    } else {
        format!("{ttft_ms}ms")
    }
}

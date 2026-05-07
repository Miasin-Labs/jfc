//! Process sandboxing for economy solver agents.
//!
//! Provides path restriction and network blocking for child processes.
//! Gracefully degrades when kernel support is unavailable.

#[cfg(target_os = "linux")]
pub mod landlock;

#[cfg(not(target_os = "linux"))]
pub mod landlock {
    //! Stub for non-Linux platforms.

    pub use super::fallback::*;
}

#[cfg(not(target_os = "linux"))]
mod fallback;

pub use landlock::{SandboxPolicy, SandboxResult};

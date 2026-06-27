use jfc_core::context_budget::ContextBudget;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub(crate) struct RequestContextPressure {
    pub(crate) budget: ContextBudget,
    pub(crate) raw_tokens: u64,
    pub(crate) effective_tokens: u64,
    pub(crate) overhead_tokens: usize,
    pub(crate) window_tokens: Option<usize>,
    pub(crate) max_output_tokens: Option<usize>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub(crate) struct RequestContextOverflow {
    pub(crate) raw_tokens: u64,
    pub(crate) effective_tokens: u64,
    pub(crate) window_tokens: usize,
    pub(crate) level: crate::compact::CompactLevel,
}

fn clamp_u64_to_usize(tokens: u64) -> usize {
    usize::try_from(tokens).unwrap_or(usize::MAX)
}

impl RequestContextPressure {
    pub(crate) fn new(
        budget: ContextBudget,
        window_tokens: Option<usize>,
        max_output_tokens: Option<usize>,
    ) -> Self {
        let raw_tokens = jfc_core::context_budget::raw_tokens(budget);
        let effective_tokens = jfc_core::context_budget::effective_tokens(budget);
        let overhead_tokens = clamp_u64_to_usize(
            budget
                .system_prompt_tokens
                .saturating_add(budget.tool_definition_tokens)
                .saturating_add(budget.memory_tokens)
                .saturating_add(budget.project_instructions_tokens),
        );
        Self {
            budget,
            raw_tokens,
            effective_tokens,
            overhead_tokens,
            window_tokens,
            max_output_tokens,
        }
    }

    pub(crate) fn preflight_overflow(self) -> Option<RequestContextOverflow> {
        let window_tokens = self.window_tokens?;
        let raw_tokens = clamp_u64_to_usize(self.raw_tokens);
        let level = crate::compact::compact_level_with_output(
            raw_tokens,
            window_tokens,
            self.max_output_tokens,
        );
        matches!(
            level,
            crate::compact::CompactLevel::Compact | crate::compact::CompactLevel::Blocked
        )
        .then_some(RequestContextOverflow {
            raw_tokens: self.raw_tokens,
            effective_tokens: self.effective_tokens,
            window_tokens,
            level,
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use jfc_core::context_budget::ContextBudget;

    fn budget_with_replay_tokens(user_message_tokens: u64) -> ContextBudget {
        ContextBudget {
            system_prompt_tokens: 10_000,
            tool_definition_tokens: 12_000,
            memory_tokens: 0,
            project_instructions_tokens: 0,
            user_message_tokens,
        }
    }

    #[test]
    fn preflight_overflow_blocks_huge_prepared_request_regression() {
        let pressure = RequestContextPressure::new(
            budget_with_replay_tokens(8_000_000),
            Some(200_000),
            Some(8_192),
        );

        let overflow = pressure
            .preflight_overflow()
            .expect("huge prepared request should be caught before provider call");

        assert_eq!(overflow.raw_tokens, pressure.raw_tokens);
        assert_eq!(overflow.effective_tokens, pressure.effective_tokens);
        assert_eq!(overflow.window_tokens, 200_000);
        assert_eq!(overflow.level, crate::compact::CompactLevel::Blocked);
    }

    #[test]
    fn preflight_overflow_waits_when_window_unknown_normal() {
        let pressure =
            RequestContextPressure::new(budget_with_replay_tokens(8_000_000), None, Some(8_192));

        assert_eq!(pressure.preflight_overflow(), None);
    }

    #[test]
    fn preflight_overflow_allows_small_prepared_request_normal() {
        let pressure = RequestContextPressure::new(
            budget_with_replay_tokens(2_000),
            Some(200_000),
            Some(8_192),
        );

        assert_eq!(pressure.preflight_overflow(), None);
    }
}

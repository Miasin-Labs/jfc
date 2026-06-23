#[derive(Debug, Clone, PartialEq, Eq)]
pub struct AgentSessionRow {
    pub id: String,
    pub parent_session_id: Option<String>,
    pub role: String,
    pub model: Option<String>,
    pub status: String,
    pub budget_tokens: Option<i64>,
    pub task_id: Option<String>,
    pub team_id: Option<String>,
    pub created_at_ms: i64,
    pub updated_at_ms: i64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct AgentEventRow {
    pub id: String,
    pub session_id: String,
    pub from_agent: Option<String>,
    pub to_agent: Option<String>,
    pub kind: String,
    pub content: String,
    pub turn_id: Option<String>,
    pub causal_parent_id: Option<String>,
    pub created_at_ms: i64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct AgentMailboxRow {
    pub id: String,
    pub to_agent: String,
    pub from_agent: Option<String>,
    pub thread_id: Option<String>,
    pub task_id: Option<String>,
    pub priority: i64,
    pub content: String,
    pub read_at_ms: Option<i64>,
    pub summarized_at_ms: Option<i64>,
    pub created_at_ms: i64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ToolRunLedgerRow {
    pub id: String,
    pub agent_id: Option<String>,
    pub session_id: Option<String>,
    pub runtime_id: Option<String>,
    pub kind: String,
    pub command: Option<String>,
    pub input_json: Option<String>,
    pub output_ref: Option<String>,
    pub status: String,
    pub duration_ms: Option<i64>,
    pub background: bool,
    pub created_at_ms: i64,
    pub updated_at_ms: i64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct LearningEventRow {
    pub id: String,
    pub source_session_id: Option<String>,
    pub source_turn_id: Option<String>,
    pub source_tool_run_id: Option<String>,
    pub candidate_rule: String,
    pub status: String,
    pub verifier_evidence: String,
    pub recurrence_count: i64,
    pub created_at_ms: i64,
    pub updated_at_ms: i64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ContextEventRow {
    pub id: String,
    pub session_id: String,
    pub turn_id: Option<String>,
    pub agent_id: Option<String>,
    pub subagent_id: Option<String>,
    pub model: String,
    pub input_tokens: i64,
    pub output_tokens: i64,
    pub thinking_tokens: i64,
    pub cache_read_tokens: i64,
    pub cache_write_tokens: i64,
    pub context_limit: Option<i64>,
    pub bust_cause: Option<String>,
    pub drop_cause: Option<String>,
    pub payload: String,
    pub created_at_ms: i64,
}

pub(super) fn agent_session_from(row: &rusqlite::Row<'_>) -> rusqlite::Result<AgentSessionRow> {
    Ok(AgentSessionRow {
        id: row.get(0)?,
        parent_session_id: row.get(1)?,
        role: row.get(2)?,
        model: row.get(3)?,
        status: row.get(4)?,
        budget_tokens: row.get(5)?,
        task_id: row.get(6)?,
        team_id: row.get(7)?,
        created_at_ms: row.get(8)?,
        updated_at_ms: row.get(9)?,
    })
}

pub(super) fn agent_event_from(row: &rusqlite::Row<'_>) -> rusqlite::Result<AgentEventRow> {
    Ok(AgentEventRow {
        id: row.get(0)?,
        session_id: row.get(1)?,
        from_agent: row.get(2)?,
        to_agent: row.get(3)?,
        kind: row.get(4)?,
        content: row.get(5)?,
        turn_id: row.get(6)?,
        causal_parent_id: row.get(7)?,
        created_at_ms: row.get(8)?,
    })
}

pub(super) fn agent_mailbox_from(row: &rusqlite::Row<'_>) -> rusqlite::Result<AgentMailboxRow> {
    Ok(AgentMailboxRow {
        id: row.get(0)?,
        to_agent: row.get(1)?,
        from_agent: row.get(2)?,
        thread_id: row.get(3)?,
        task_id: row.get(4)?,
        priority: row.get(5)?,
        content: row.get(6)?,
        read_at_ms: row.get(7)?,
        summarized_at_ms: row.get(8)?,
        created_at_ms: row.get(9)?,
    })
}

pub(super) fn learning_event_from(row: &rusqlite::Row<'_>) -> rusqlite::Result<LearningEventRow> {
    Ok(LearningEventRow {
        id: row.get(0)?,
        source_session_id: row.get(1)?,
        source_turn_id: row.get(2)?,
        source_tool_run_id: row.get(3)?,
        candidate_rule: row.get(4)?,
        status: row.get(5)?,
        verifier_evidence: row.get(6)?,
        recurrence_count: row.get(7)?,
        created_at_ms: row.get(8)?,
        updated_at_ms: row.get(9)?,
    })
}

pub(super) fn context_event_from(row: &rusqlite::Row<'_>) -> rusqlite::Result<ContextEventRow> {
    Ok(ContextEventRow {
        id: row.get(0)?,
        session_id: row.get(1)?,
        turn_id: row.get(2)?,
        agent_id: row.get(3)?,
        subagent_id: row.get(4)?,
        model: row.get(5)?,
        input_tokens: row.get(6)?,
        output_tokens: row.get(7)?,
        thinking_tokens: row.get(8)?,
        cache_read_tokens: row.get(9)?,
        cache_write_tokens: row.get(10)?,
        context_limit: row.get(11)?,
        bust_cause: row.get(12)?,
        drop_cause: row.get(13)?,
        payload: row.get(14)?,
        created_at_ms: row.get(15)?,
    })
}

pub(super) fn collect_rows<T>(
    rows: rusqlite::MappedRows<'_, impl FnMut(&rusqlite::Row<'_>) -> rusqlite::Result<T>>,
) -> crate::Result<Vec<T>> {
    let mut out = Vec::new();
    for row in rows {
        out.push(row?);
    }
    Ok(out)
}

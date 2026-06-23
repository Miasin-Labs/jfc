use rusqlite::OptionalExtension;

use crate::{KnowledgeStore, Result, record};

use super::rows::{
    AgentEventRow, AgentMailboxRow, AgentSessionRow, agent_event_from, agent_mailbox_from,
    agent_session_from, collect_rows,
};

impl KnowledgeStore {
    pub fn upsert_agent_session(&self, row: &AgentSessionRow) -> Result<()> {
        self.conn().execute(
            "INSERT INTO agent_sessions \
             (id, parent_session_id, role, model, status, budget_tokens, task_id, team_id, \
              created_at_ms, updated_at_ms) \
             VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10) \
             ON CONFLICT(id) DO UPDATE SET \
                parent_session_id=excluded.parent_session_id, role=excluded.role, \
                model=excluded.model, status=excluded.status, budget_tokens=excluded.budget_tokens, \
                task_id=excluded.task_id, team_id=excluded.team_id, updated_at_ms=excluded.updated_at_ms",
            rusqlite::params![
                row.id,
                row.parent_session_id,
                row.role,
                row.model,
                row.status,
                row.budget_tokens,
                row.task_id,
                row.team_id,
                row.created_at_ms,
                row.updated_at_ms,
            ],
        )?;
        Ok(())
    }

    pub fn get_agent_session(&self, id: &str) -> Result<Option<AgentSessionRow>> {
        Ok(self
            .conn()
            .query_row(
                "SELECT id, parent_session_id, role, model, status, budget_tokens, task_id, \
                        team_id, created_at_ms, updated_at_ms \
                 FROM agent_sessions WHERE id = ?1",
                [id],
                agent_session_from,
            )
            .optional()?)
    }

    pub fn record_agent_event(&self, row: &AgentEventRow) -> Result<()> {
        self.conn().execute(
            "INSERT INTO agent_events \
             (id, session_id, from_agent, to_agent, kind, content, turn_id, causal_parent_id, \
              created_at_ms) \
             VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9)",
            rusqlite::params![
                row.id,
                row.session_id,
                row.from_agent,
                row.to_agent,
                row.kind,
                row.content,
                row.turn_id,
                row.causal_parent_id,
                row.created_at_ms,
            ],
        )?;
        Ok(())
    }

    pub fn list_agent_events(&self, session_id: &str, limit: usize) -> Result<Vec<AgentEventRow>> {
        let mut stmt = self.conn().prepare(
            "SELECT id, session_id, from_agent, to_agent, kind, content, turn_id, \
                    causal_parent_id, created_at_ms \
             FROM agent_events WHERE session_id = ?1 ORDER BY created_at_ms ASC LIMIT ?2",
        )?;
        let rows = stmt.query_map(
            rusqlite::params![session_id, limit as i64],
            agent_event_from,
        )?;
        collect_rows(rows)
    }

    pub fn enqueue_agent_mailbox(&self, row: &AgentMailboxRow) -> Result<()> {
        self.conn().execute(
            "INSERT INTO agent_mailbox \
             (id, to_agent, from_agent, thread_id, task_id, priority, content, read_at_ms, \
              summarized_at_ms, created_at_ms) \
             VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10)",
            rusqlite::params![
                row.id,
                row.to_agent,
                row.from_agent,
                row.thread_id,
                row.task_id,
                row.priority,
                row.content,
                row.read_at_ms,
                row.summarized_at_ms,
                row.created_at_ms,
            ],
        )?;
        Ok(())
    }

    pub fn list_agent_mailbox(
        &self,
        to_agent: &str,
        unread_only: bool,
    ) -> Result<Vec<AgentMailboxRow>> {
        let mut out = Vec::new();
        if unread_only {
            let mut stmt = self.conn().prepare(
                "SELECT id, to_agent, from_agent, thread_id, task_id, priority, content, \
                        read_at_ms, summarized_at_ms, created_at_ms \
                 FROM agent_mailbox WHERE to_agent = ?1 AND read_at_ms IS NULL \
                 ORDER BY priority DESC, created_at_ms ASC",
            )?;
            let rows = stmt.query_map([to_agent], agent_mailbox_from)?;
            for row in rows {
                out.push(row?);
            }
        } else {
            let mut stmt = self.conn().prepare(
                "SELECT id, to_agent, from_agent, thread_id, task_id, priority, content, \
                        read_at_ms, summarized_at_ms, created_at_ms \
                 FROM agent_mailbox WHERE to_agent = ?1 \
                 ORDER BY priority DESC, created_at_ms ASC",
            )?;
            let rows = stmt.query_map([to_agent], agent_mailbox_from)?;
            for row in rows {
                out.push(row?);
            }
        }
        Ok(out)
    }

    pub fn mark_agent_mailbox_read(&self, id: &str) -> Result<usize> {
        Ok(self.conn().execute(
            "UPDATE agent_mailbox SET read_at_ms = ?2 WHERE id = ?1 AND read_at_ms IS NULL",
            rusqlite::params![id, record::now_ms()],
        )?)
    }

    pub fn mark_all_agent_mailbox_read(&self, to_agent: &str) -> Result<usize> {
        Ok(self.conn().execute(
            "UPDATE agent_mailbox SET read_at_ms = ?2 WHERE to_agent = ?1 AND read_at_ms IS NULL",
            rusqlite::params![to_agent, record::now_ms()],
        )?)
    }

    pub fn clear_agent_mailbox(&self, to_agent: &str) -> Result<usize> {
        Ok(self
            .conn()
            .execute("DELETE FROM agent_mailbox WHERE to_agent = ?1", [to_agent])?)
    }
}

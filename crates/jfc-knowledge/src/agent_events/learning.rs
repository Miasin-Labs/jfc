use rusqlite::Transaction;

use crate::{KnowledgeStore, Result};

use super::rows::{LearningEventRow, ToolRunLedgerRow, learning_event_from};

impl KnowledgeStore {
    pub fn record_tool_run(&self, row: &ToolRunLedgerRow) -> Result<()> {
        self.conn().execute(
            "INSERT INTO tool_runs \
             (id, agent_id, session_id, runtime_id, kind, command, input_json, output_ref, status, \
              duration_ms, background, created_at_ms, updated_at_ms) \
             VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10,?11,?12,?13) \
             ON CONFLICT(id) DO UPDATE SET \
                output_ref=excluded.output_ref, status=excluded.status, duration_ms=excluded.duration_ms, \
                background=excluded.background, updated_at_ms=excluded.updated_at_ms",
            rusqlite::params![
                row.id,
                row.agent_id,
                row.session_id,
                row.runtime_id,
                row.kind,
                row.command,
                row.input_json,
                row.output_ref,
                row.status,
                row.duration_ms,
                row.background,
                row.created_at_ms,
                row.updated_at_ms,
            ],
        )?;
        Ok(())
    }

    pub fn record_learning_event(&self, row: &LearningEventRow) -> Result<()> {
        self.conn().execute(
            "INSERT INTO learning_events \
             (id, source_session_id, source_turn_id, source_tool_run_id, candidate_rule, status, \
              verifier_evidence, recurrence_count, created_at_ms, updated_at_ms) \
             VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10) \
             ON CONFLICT(id) DO UPDATE SET \
                status=excluded.status, verifier_evidence=excluded.verifier_evidence, \
                recurrence_count=excluded.recurrence_count, updated_at_ms=excluded.updated_at_ms",
            rusqlite::params![
                row.id,
                row.source_session_id,
                row.source_turn_id,
                row.source_tool_run_id,
                row.candidate_rule,
                row.status,
                row.verifier_evidence,
                row.recurrence_count,
                row.created_at_ms,
                row.updated_at_ms,
            ],
        )?;
        Ok(())
    }

    pub fn list_learning_events(
        &self,
        status: Option<&str>,
        limit: usize,
    ) -> Result<Vec<LearningEventRow>> {
        let limit = limit as i64;
        let mut out = Vec::new();
        if let Some(status) = status {
            let mut stmt = self.conn().prepare(
                "SELECT id, source_session_id, source_turn_id, source_tool_run_id, candidate_rule, \
                        status, verifier_evidence, recurrence_count, created_at_ms, updated_at_ms \
                 FROM learning_events WHERE status = ?1 ORDER BY updated_at_ms DESC LIMIT ?2",
            )?;
            let rows = stmt.query_map(rusqlite::params![status, limit], learning_event_from)?;
            for row in rows {
                out.push(row?);
            }
        } else {
            let mut stmt = self.conn().prepare(
                "SELECT id, source_session_id, source_turn_id, source_tool_run_id, candidate_rule, \
                        status, verifier_evidence, recurrence_count, created_at_ms, updated_at_ms \
                 FROM learning_events ORDER BY updated_at_ms DESC LIMIT ?1",
            )?;
            let rows = stmt.query_map([limit], learning_event_from)?;
            for row in rows {
                out.push(row?);
            }
        }
        Ok(out)
    }
}

pub(crate) fn delete_session_scoped_rows(tx: &Transaction<'_>, session_id: &str) -> Result<usize> {
    let context = tx.execute(
        "DELETE FROM context_events WHERE session_id = ?1",
        [session_id],
    )?;
    let agent = tx.execute(
        "DELETE FROM agent_events WHERE session_id = ?1",
        [session_id],
    )?;
    let tools = tx.execute("DELETE FROM tool_runs WHERE session_id = ?1", [session_id])?;
    let learning = tx.execute(
        "DELETE FROM learning_events WHERE source_session_id = ?1",
        [session_id],
    )?;
    Ok(context + agent + tools + learning)
}

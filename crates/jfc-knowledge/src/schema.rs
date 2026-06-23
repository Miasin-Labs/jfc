//! Embedded schema migrations for the knowledge store.
//!
//! Migrations are an ordered list; the `schema_version` table records how many
//! have been applied. `migrate` applies any not-yet-applied steps inside a
//! transaction, so an interrupted upgrade never leaves a half-migrated DB.
//! Adding a new version = append a `&str` to [`MIGRATIONS`]; never edit or
//! reorder existing entries.

use rusqlite::Connection;

use crate::error::{KnowledgeError, Result};

/// Ordered DDL steps. Index + 1 is the resulting schema version.
const MIGRATIONS: &[&str] = &[
    // v1 — initial schema: knowledge table + FTS5 mirror + triggers.
    r#"
    CREATE TABLE knowledge (
        id            TEXT PRIMARY KEY,
        kind          TEXT NOT NULL,
        scope         TEXT NOT NULL,
        project_key   TEXT,
        title         TEXT NOT NULL,
        body          TEXT NOT NULL,
        tags          TEXT NOT NULL DEFAULT '',
        source        TEXT,
        confidence    REAL NOT NULL DEFAULT 0.5,
        created_at_ms INTEGER NOT NULL,
        last_used_ms  INTEGER,
        use_count     INTEGER NOT NULL DEFAULT 0,
        superseded_by TEXT,
        promoted      INTEGER NOT NULL DEFAULT 0
    );
    CREATE INDEX idx_knowledge_scope ON knowledge(scope);
    CREATE INDEX idx_knowledge_project ON knowledge(project_key);
    CREATE INDEX idx_knowledge_live ON knowledge(superseded_by);

    CREATE VIRTUAL TABLE knowledge_fts USING fts5(
        title, body, tags,
        content='knowledge', content_rowid='rowid'
    );

    -- Keep the FTS mirror in sync with the base table.
    CREATE TRIGGER knowledge_ai AFTER INSERT ON knowledge BEGIN
        INSERT INTO knowledge_fts(rowid, title, body, tags)
        VALUES (new.rowid, new.title, new.body, new.tags);
    END;
    CREATE TRIGGER knowledge_ad AFTER DELETE ON knowledge BEGIN
        INSERT INTO knowledge_fts(knowledge_fts, rowid, title, body, tags)
        VALUES ('delete', old.rowid, old.title, old.body, old.tags);
    END;
    CREATE TRIGGER knowledge_au AFTER UPDATE ON knowledge BEGIN
        INSERT INTO knowledge_fts(knowledge_fts, rowid, title, body, tags)
        VALUES ('delete', old.rowid, old.title, old.body, old.tags);
        INSERT INTO knowledge_fts(rowid, title, body, tags)
        VALUES (new.rowid, new.title, new.body, new.tags);
    END;
    "#,
    // v2 — verification outcome + salience (TODOs 7,8), the Obsidian-style typed
    // link-graph (TODO 14), and unresolved-reference knowledge gaps (TODO 15).
    r#"
    ALTER TABLE knowledge ADD COLUMN outcome TEXT NOT NULL DEFAULT 'unverified';
    ALTER TABLE knowledge ADD COLUMN importance REAL NOT NULL DEFAULT 0.5;
    CREATE INDEX idx_knowledge_outcome ON knowledge(outcome);

    CREATE TABLE knowledge_links (
        from_id    TEXT NOT NULL,
        to_id      TEXT NOT NULL,
        rel        TEXT NOT NULL,
        created_at_ms INTEGER NOT NULL,
        PRIMARY KEY (from_id, to_id, rel)
    );
    CREATE INDEX idx_links_from ON knowledge_links(from_id);
    CREATE INDEX idx_links_to ON knowledge_links(to_id);

    CREATE TABLE knowledge_gaps (
        id            TEXT PRIMARY KEY,
        label         TEXT NOT NULL,
        reason        TEXT NOT NULL DEFAULT '',
        ref_count     INTEGER NOT NULL DEFAULT 1,
        first_seen_ms INTEGER NOT NULL,
        last_seen_ms  INTEGER NOT NULL,
        resolved_by   TEXT
    );
    "#,
    // v3 — per-project maintenance throttle stamp, so autonomous startup
    // maintenance doesn't re-process the whole session corpus every launch.
    r#"
    CREATE TABLE maintain_state (
        project_key  TEXT PRIMARY KEY,
        last_run_ms  INTEGER NOT NULL
    );
    "#,
    // v4 — primary session catalog. Legacy JSON files may still be backfilled
    // into this table, but picker/search readers should treat the DB as source.
    r#"
    CREATE TABLE sessions (
        id            TEXT PRIMARY KEY,
        cwd           TEXT,
        model         TEXT,
        created_at    TEXT,
        updated_at    TEXT,
        first_prompt  TEXT,
        title         TEXT,
        message_count INTEGER NOT NULL DEFAULT 0
    );
    CREATE INDEX idx_sessions_cwd ON sessions(cwd);
    CREATE INDEX idx_sessions_updated ON sessions(updated_at);
    "#,
    // v5 — full session TRANSCRIPT (PLAN TODO 23, council decision 1: row-per-
    // message, not a blob, so search is a query and saves append deltas instead
    // of rewriting the whole session). `meta` holds serialized tool-call/parts
    // JSON so structured fidelity survives the round trip. FTS5 mirror powers
    // substring search.
    r#"
    CREATE TABLE session_messages (
        session_id TEXT NOT NULL,
        seq        INTEGER NOT NULL,
        role       TEXT NOT NULL,
        content    TEXT NOT NULL DEFAULT '',
        meta       TEXT,
        PRIMARY KEY (session_id, seq)
    );
    CREATE INDEX idx_session_messages_sid ON session_messages(session_id);

    CREATE VIRTUAL TABLE session_messages_fts USING fts5(
        content, content='session_messages', content_rowid='rowid'
    );
    CREATE TRIGGER session_messages_ai AFTER INSERT ON session_messages BEGIN
        INSERT INTO session_messages_fts(rowid, content) VALUES (new.rowid, new.content);
    END;
    CREATE TRIGGER session_messages_ad AFTER DELETE ON session_messages BEGIN
        INSERT INTO session_messages_fts(session_messages_fts, rowid, content)
        VALUES ('delete', old.rowid, old.content);
    END;
    "#,
    // v6 — memory backing (MD→DB cutover). `mem_level` distinguishes the four
    // memory levels (user|project|team|external) that the old .md layout encoded
    // by directory; the knowledge `scope` axis (user/project/global) is coarser.
    // `mem_meta` holds the serialized MemoryFrontmatter JSON so a `MemoryEntry`
    // synthesized from a row is lossless (source_session_id, seen_count,
    // verification_status, expires_at, …). Both nullable: rows that aren't
    // memories (mined lessons, etc.) leave them NULL.
    r#"
    ALTER TABLE knowledge ADD COLUMN mem_level TEXT;
    ALTER TABLE knowledge ADD COLUMN mem_meta TEXT;
    CREATE INDEX idx_knowledge_mem_level ON knowledge(mem_level);
    "#,
    // v7 — session event substrate. The transcript remains the renderable view,
    // while these tables make turns, tool runs, retrieval, compaction, and
    // findings queryable facts for maintenance and learning.
    r#"
    CREATE TABLE session_events (
        id            TEXT PRIMARY KEY,
        session_id    TEXT NOT NULL,
        seq           INTEGER NOT NULL,
        kind          TEXT NOT NULL,
        created_at_ms INTEGER NOT NULL,
        payload       TEXT NOT NULL DEFAULT '{}'
    );
    CREATE INDEX idx_session_events_sid_seq ON session_events(session_id, seq);
    CREATE INDEX idx_session_events_kind ON session_events(kind);

    CREATE TABLE session_turns (
        session_id       TEXT NOT NULL,
        turn_index       INTEGER NOT NULL,
        user_seq         INTEGER,
        assistant_seq    INTEGER,
        user_text        TEXT NOT NULL DEFAULT '',
        assistant_text   TEXT NOT NULL DEFAULT '',
        status           TEXT NOT NULL DEFAULT 'complete',
        model            TEXT,
        created_at_ms    INTEGER NOT NULL,
        PRIMARY KEY (session_id, turn_index)
    );
    CREATE INDEX idx_session_turns_sid ON session_turns(session_id);

    CREATE TABLE session_tool_runs (
        id              TEXT PRIMARY KEY,
        session_id      TEXT NOT NULL,
        message_seq     INTEGER NOT NULL,
        part_index      INTEGER NOT NULL,
        tool_call_id    TEXT,
        runtime_id      TEXT,
        kind            TEXT NOT NULL,
        status          TEXT NOT NULL,
        input_json      TEXT,
        output_json     TEXT,
        duration_ms     INTEGER,
        created_at_ms   INTEGER NOT NULL
    );
    CREATE INDEX idx_session_tool_runs_sid ON session_tool_runs(session_id);
    CREATE INDEX idx_session_tool_runs_status ON session_tool_runs(status);

    CREATE TABLE session_retrieval_events (
        id              TEXT PRIMARY KEY,
        session_id      TEXT NOT NULL,
        query           TEXT NOT NULL,
        source          TEXT NOT NULL,
        result_count    INTEGER NOT NULL DEFAULT 0,
        payload         TEXT NOT NULL DEFAULT '{}',
        created_at_ms   INTEGER NOT NULL
    );
    CREATE INDEX idx_session_retrieval_events_sid ON session_retrieval_events(session_id);

    CREATE TABLE session_compactions (
        id              TEXT PRIMARY KEY,
        session_id      TEXT NOT NULL,
        before_tokens   INTEGER,
        after_tokens    INTEGER,
        summary         TEXT NOT NULL DEFAULT '',
        payload         TEXT NOT NULL DEFAULT '{}',
        created_at_ms   INTEGER NOT NULL
    );
    CREATE INDEX idx_session_compactions_sid ON session_compactions(session_id);

    CREATE TABLE session_findings (
        id              TEXT PRIMARY KEY,
        session_id      TEXT NOT NULL,
        kind            TEXT NOT NULL,
        summary         TEXT NOT NULL,
        evidence        TEXT NOT NULL DEFAULT '',
        status          TEXT NOT NULL DEFAULT 'open',
        created_at_ms   INTEGER NOT NULL,
        resolved_at_ms  INTEGER
    );
    CREATE INDEX idx_session_findings_sid ON session_findings(session_id);
    CREATE INDEX idx_session_findings_status ON session_findings(status);
    "#,
    // v8 — session artifact/event substrate for the remaining legacy sidecars.
    // `session_artifacts` stores latest state (goal, task snapshot, compact
    // archive body), while `session_artifact_events` stores append-only streams
    // (inbox, prompt rewrite exemplars, workflow journal entries).
    r#"
    CREATE TABLE session_artifacts (
        session_id    TEXT NOT NULL,
        kind          TEXT NOT NULL,
        key           TEXT NOT NULL,
        value_json    TEXT NOT NULL,
        created_at_ms INTEGER NOT NULL,
        updated_at_ms INTEGER NOT NULL,
        PRIMARY KEY (session_id, kind, key)
    );
    CREATE INDEX idx_session_artifacts_sid_kind ON session_artifacts(session_id, kind);

    CREATE TABLE session_artifact_events (
        id            INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id    TEXT NOT NULL,
        kind          TEXT NOT NULL,
        key           TEXT NOT NULL,
        value_json    TEXT NOT NULL,
        created_at_ms INTEGER NOT NULL
    );
    CREATE INDEX idx_session_artifact_events_sid_kind
        ON session_artifact_events(session_id, kind, key, id);
    "#,
    // v9 — unified agent/context/learning substrate. This is the shared
    // persistence layer for advisor, council, bounty, teams, hidden historian
    // workers, and Magic-Context-style diagnostics. User-facing concepts stay
    // distinct; their runtime state lands in one event model.
    r#"
    CREATE TABLE agent_sessions (
        id                 TEXT PRIMARY KEY,
        parent_session_id  TEXT,
        role               TEXT NOT NULL,
        model              TEXT,
        status             TEXT NOT NULL,
        budget_tokens      INTEGER,
        task_id            TEXT,
        team_id            TEXT,
        created_at_ms      INTEGER NOT NULL,
        updated_at_ms      INTEGER NOT NULL
    );
    CREATE INDEX idx_agent_sessions_parent ON agent_sessions(parent_session_id);
    CREATE INDEX idx_agent_sessions_team ON agent_sessions(team_id);
    CREATE INDEX idx_agent_sessions_status ON agent_sessions(status);

    CREATE TABLE agent_events (
        id                TEXT PRIMARY KEY,
        session_id         TEXT NOT NULL,
        from_agent         TEXT,
        to_agent           TEXT,
        kind               TEXT NOT NULL,
        content            TEXT NOT NULL DEFAULT '',
        turn_id            TEXT,
        causal_parent_id   TEXT,
        created_at_ms      INTEGER NOT NULL
    );
    CREATE INDEX idx_agent_events_session ON agent_events(session_id, created_at_ms);
    CREATE INDEX idx_agent_events_to_agent ON agent_events(to_agent, created_at_ms);

    CREATE TABLE agent_mailbox (
        id                TEXT PRIMARY KEY,
        to_agent           TEXT NOT NULL,
        from_agent         TEXT,
        thread_id          TEXT,
        task_id            TEXT,
        priority           INTEGER NOT NULL DEFAULT 0,
        content            TEXT NOT NULL DEFAULT '',
        read_at_ms         INTEGER,
        summarized_at_ms   INTEGER,
        created_at_ms      INTEGER NOT NULL
    );
    CREATE INDEX idx_agent_mailbox_to_agent ON agent_mailbox(to_agent, read_at_ms, priority, created_at_ms);
    CREATE INDEX idx_agent_mailbox_thread ON agent_mailbox(thread_id);

    CREATE TABLE tool_runs (
        id                TEXT PRIMARY KEY,
        agent_id           TEXT,
        session_id         TEXT,
        runtime_id         TEXT,
        kind               TEXT NOT NULL,
        command            TEXT,
        input_json         TEXT,
        output_ref         TEXT,
        status             TEXT NOT NULL,
        duration_ms        INTEGER,
        background         INTEGER NOT NULL DEFAULT 0,
        created_at_ms      INTEGER NOT NULL,
        updated_at_ms      INTEGER NOT NULL
    );
    CREATE INDEX idx_tool_runs_session ON tool_runs(session_id, created_at_ms);
    CREATE INDEX idx_tool_runs_runtime ON tool_runs(runtime_id);
    CREATE INDEX idx_tool_runs_status ON tool_runs(status);

    CREATE TABLE learning_events (
        id                  TEXT PRIMARY KEY,
        source_session_id   TEXT,
        source_turn_id      TEXT,
        source_tool_run_id  TEXT,
        candidate_rule      TEXT NOT NULL,
        status              TEXT NOT NULL,
        verifier_evidence   TEXT NOT NULL DEFAULT '',
        recurrence_count    INTEGER NOT NULL DEFAULT 0,
        created_at_ms       INTEGER NOT NULL,
        updated_at_ms       INTEGER NOT NULL
    );
    CREATE INDEX idx_learning_events_status ON learning_events(status, updated_at_ms);
    CREATE INDEX idx_learning_events_source_session ON learning_events(source_session_id);

    CREATE TABLE context_events (
        id                  TEXT PRIMARY KEY,
        session_id           TEXT NOT NULL,
        turn_id              TEXT,
        agent_id             TEXT,
        subagent_id          TEXT,
        model                TEXT NOT NULL,
        input_tokens         INTEGER NOT NULL DEFAULT 0,
        output_tokens        INTEGER NOT NULL DEFAULT 0,
        thinking_tokens      INTEGER NOT NULL DEFAULT 0,
        cache_read_tokens    INTEGER NOT NULL DEFAULT 0,
        cache_write_tokens   INTEGER NOT NULL DEFAULT 0,
        context_limit        INTEGER,
        bust_cause           TEXT,
        drop_cause           TEXT,
        payload              TEXT NOT NULL DEFAULT '{}',
        created_at_ms        INTEGER NOT NULL
    );
    CREATE INDEX idx_context_events_session ON context_events(session_id, created_at_ms);
    CREATE INDEX idx_context_events_model ON context_events(model, created_at_ms);
    CREATE INDEX idx_context_events_agent ON context_events(agent_id, created_at_ms);
    "#,
    // v10 — runtime definition store. Prompt text, skills, agents, slash
    // commands, and tool-schema snapshots are durable editable definitions now;
    // legacy Markdown files are import sources, not the canonical runtime state.
    r#"
    CREATE TABLE definitions (
        id              TEXT PRIMARY KEY,
        kind            TEXT NOT NULL,
        scope           TEXT NOT NULL,
        project_key     TEXT,
        namespace       TEXT,
        name            TEXT NOT NULL,
        title           TEXT,
        description     TEXT,
        body            TEXT NOT NULL,
        metadata_json   TEXT NOT NULL DEFAULT '{}',
        source_path     TEXT,
        source_hash     TEXT,
        status          TEXT NOT NULL DEFAULT 'active',
        version         INTEGER NOT NULL DEFAULT 1,
        created_by      TEXT NOT NULL DEFAULT 'import',
        created_at_ms   INTEGER NOT NULL,
        updated_at_ms   INTEGER NOT NULL,
        superseded_by   TEXT
    );
    CREATE INDEX idx_definitions_kind_name ON definitions(kind, name);
    CREATE INDEX idx_definitions_project ON definitions(project_key, kind);
    CREATE INDEX idx_definitions_status ON definitions(status, updated_at_ms);
    CREATE INDEX idx_definitions_source_hash ON definitions(source_hash);

    CREATE VIRTUAL TABLE definitions_fts USING fts5(
        name, description, body, metadata_json,
        content='definitions', content_rowid='rowid'
    );
    CREATE TRIGGER definitions_ai AFTER INSERT ON definitions BEGIN
        INSERT INTO definitions_fts(rowid, name, description, body, metadata_json)
        VALUES (
            new.rowid,
            new.name,
            COALESCE(new.description, ''),
            new.body,
            new.metadata_json
        );
    END;
    CREATE TRIGGER definitions_ad AFTER DELETE ON definitions BEGIN
        INSERT INTO definitions_fts(
            definitions_fts, rowid, name, description, body, metadata_json
        )
        VALUES (
            'delete',
            old.rowid,
            old.name,
            COALESCE(old.description, ''),
            old.body,
            old.metadata_json
        );
    END;
    CREATE TRIGGER definitions_au AFTER UPDATE ON definitions BEGIN
        INSERT INTO definitions_fts(
            definitions_fts, rowid, name, description, body, metadata_json
        )
        VALUES (
            'delete',
            old.rowid,
            old.name,
            COALESCE(old.description, ''),
            old.body,
            old.metadata_json
        );
        INSERT INTO definitions_fts(rowid, name, description, body, metadata_json)
        VALUES (
            new.rowid,
            new.name,
            COALESCE(new.description, ''),
            new.body,
            new.metadata_json
        );
    END;
    "#,
];

/// The schema version this build expects (== number of migrations).
pub const CURRENT_VERSION: i64 = MIGRATIONS.len() as i64;

/// Apply pragmas that every connection needs (WAL for multi-process safety,
/// a busy timeout so concurrent JFC instances back off instead of erroring,
/// and foreign-keys on for future relations).
pub fn apply_pragmas(conn: &Connection) -> Result<()> {
    // WAL persists on the DB file, but setting it per-open is harmless and
    // guarantees it even on a freshly created file.
    conn.pragma_update(None, "journal_mode", "WAL")?;
    // NORMAL is WAL-safe and durable across an app crash / SIGKILL (an
    // uncommitted txn rolls back on next open). Council decision 5: this is the
    // right durability tier for a single-file store that's becoming the source of
    // truth; FULL would add fsync cost per commit without a meaningful win here.
    conn.pragma_update(None, "synchronous", "NORMAL")?;
    conn.pragma_update(None, "foreign_keys", "ON")?;
    conn.busy_timeout(std::time::Duration::from_secs(5))?;
    Ok(())
}

/// Run all pending migrations. Idempotent: a fully-migrated DB is a no-op.
pub fn migrate(conn: &mut Connection) -> Result<()> {
    conn.execute_batch("CREATE TABLE IF NOT EXISTS schema_version (version INTEGER NOT NULL);")?;

    let applied: i64 = conn
        .query_row(
            "SELECT COALESCE(MAX(version), 0) FROM schema_version",
            [],
            |row| row.get(0),
        )
        .unwrap_or(0);

    if applied > CURRENT_VERSION {
        return Err(KnowledgeError::Migration(format!(
            "database schema v{applied} is newer than this build's v{CURRENT_VERSION}; \
             refusing to operate to avoid data loss"
        )));
    }

    for (idx, ddl) in MIGRATIONS.iter().enumerate() {
        let version = (idx + 1) as i64;
        if version <= applied {
            continue;
        }
        let tx = conn.transaction()?;
        tx.execute_batch(ddl)?;
        tx.execute(
            "INSERT INTO schema_version (version) VALUES (?1)",
            [version],
        )?;
        tx.commit()?;
        tracing::debug!(target: "jfc::knowledge", version, "applied knowledge migration");
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn migrate_is_idempotent_and_sets_version_normal() {
        let mut conn = Connection::open_in_memory().unwrap();
        apply_pragmas(&conn).unwrap();
        migrate(&mut conn).unwrap();
        // Second run is a no-op and must not error or double-apply.
        migrate(&mut conn).unwrap();

        let version: i64 = conn
            .query_row("SELECT MAX(version) FROM schema_version", [], |r| r.get(0))
            .unwrap();
        assert_eq!(version, CURRENT_VERSION);

        // The base table and FTS mirror both exist.
        let n: i64 = conn
            .query_row(
                "SELECT count(*) FROM sqlite_master WHERE name IN ('knowledge','knowledge_fts')",
                [],
                |r| r.get(0),
            )
            .unwrap();
        assert_eq!(n, 2);
    }

    #[test]
    fn migrate_refuses_newer_schema_robust() {
        let mut conn = Connection::open_in_memory().unwrap();
        conn.execute_batch(
            "CREATE TABLE schema_version (version INTEGER NOT NULL);
             INSERT INTO schema_version (version) VALUES (9999);",
        )
        .unwrap();
        let err = migrate(&mut conn).unwrap_err();
        assert!(matches!(err, KnowledgeError::Migration(_)), "{err:?}");
    }
}

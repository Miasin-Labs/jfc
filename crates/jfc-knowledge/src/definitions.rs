use rusqlite::{OptionalExtension, params};
use serde::{Deserialize, Serialize};

use crate::record::now_ms;
use crate::{KnowledgeStore, Result};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum DefinitionScope {
    Builtin,
    User,
    Project,
    Plugin,
    Global,
}

impl DefinitionScope {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Builtin => "builtin",
            Self::User => "user",
            Self::Project => "project",
            Self::Plugin => "plugin",
            Self::Global => "global",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum DefinitionStatus {
    Active,
    Candidate,
    Rejected,
    Superseded,
}

impl DefinitionStatus {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Active => "active",
            Self::Candidate => "candidate",
            Self::Rejected => "rejected",
            Self::Superseded => "superseded",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DefinitionRecord {
    pub id: String,
    pub kind: String,
    pub scope: String,
    pub project_key: Option<String>,
    pub namespace: Option<String>,
    pub name: String,
    pub title: Option<String>,
    pub description: Option<String>,
    pub body: String,
    pub metadata_json: String,
    pub source_path: Option<String>,
    pub source_hash: Option<String>,
    pub status: String,
    pub version: i64,
    pub created_by: String,
    pub created_at_ms: u64,
    pub updated_at_ms: u64,
    pub superseded_by: Option<String>,
}

#[derive(Debug, Clone)]
pub struct NewDefinition {
    pub kind: String,
    pub scope: DefinitionScope,
    pub project_key: Option<String>,
    pub namespace: Option<String>,
    pub name: String,
    pub title: Option<String>,
    pub description: Option<String>,
    pub body: String,
    pub metadata_json: String,
    pub source_path: Option<String>,
    pub source_hash: Option<String>,
    pub status: DefinitionStatus,
    pub created_by: String,
}

impl NewDefinition {
    pub fn id(&self) -> String {
        definition_id(
            &self.kind,
            self.scope.slug(),
            self.project_key.as_deref(),
            self.namespace.as_deref(),
            &self.name,
        )
    }
}

pub fn definition_id(
    kind: &str,
    scope: &str,
    project_key: Option<&str>,
    namespace: Option<&str>,
    name: &str,
) -> String {
    uuid::Uuid::new_v5(
        &uuid::Uuid::NAMESPACE_OID,
        format!(
            "definition:{kind}:{scope}:{}:{}:{name}",
            project_key.unwrap_or(""),
            namespace.unwrap_or("")
        )
        .as_bytes(),
    )
    .simple()
    .to_string()
}

fn row_to_definition(row: &rusqlite::Row<'_>) -> rusqlite::Result<DefinitionRecord> {
    Ok(DefinitionRecord {
        id: row.get(0)?,
        kind: row.get(1)?,
        scope: row.get(2)?,
        project_key: row.get(3)?,
        namespace: row.get(4)?,
        name: row.get(5)?,
        title: row.get(6)?,
        description: row.get(7)?,
        body: row.get(8)?,
        metadata_json: row.get(9)?,
        source_path: row.get(10)?,
        source_hash: row.get(11)?,
        status: row.get(12)?,
        version: row.get(13)?,
        created_by: row.get(14)?,
        created_at_ms: row.get(15)?,
        updated_at_ms: row.get(16)?,
        superseded_by: row.get(17)?,
    })
}

impl KnowledgeStore {
    pub fn upsert_definition(&self, def: &NewDefinition) -> Result<String> {
        let id = def.id();
        let now = now_ms();
        self.conn().execute(
            "INSERT INTO definitions (
                id, kind, scope, project_key, namespace, name, title, description,
                body, metadata_json, source_path, source_hash, status, version,
                created_by, created_at_ms, updated_at_ms, superseded_by
            )
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, 1, ?14, ?15, ?15, NULL)
            ON CONFLICT(id) DO UPDATE SET
                title = excluded.title,
                description = excluded.description,
                body = excluded.body,
                metadata_json = excluded.metadata_json,
                source_path = excluded.source_path,
                source_hash = excluded.source_hash,
                status = excluded.status,
                created_by = excluded.created_by,
                updated_at_ms = excluded.updated_at_ms,
                version = CASE
                    WHEN definitions.body != excluded.body
                         OR definitions.metadata_json != excluded.metadata_json
                         OR COALESCE(definitions.description, '') != COALESCE(excluded.description, '')
                    THEN definitions.version + 1
                    ELSE definitions.version
                END,
                superseded_by = NULL",
            params![
                id,
                def.kind,
                def.scope.slug(),
                def.project_key,
                def.namespace,
                def.name,
                def.title,
                def.description,
                def.body,
                def.metadata_json,
                def.source_path,
                def.source_hash,
                def.status.slug(),
                def.created_by,
                now,
            ],
        )?;
        Ok(id)
    }

    pub fn get_definition_by_name(
        &self,
        kind: &str,
        scope: DefinitionScope,
        project_key: Option<&str>,
        namespace: Option<&str>,
        name: &str,
    ) -> Result<Option<DefinitionRecord>> {
        let id = definition_id(kind, scope.slug(), project_key, namespace, name);
        self.conn()
            .query_row(
                "SELECT id, kind, scope, project_key, namespace, name, title, description,
                        body, metadata_json, source_path, source_hash, status, version,
                        created_by, created_at_ms, updated_at_ms, superseded_by
                 FROM definitions
                 WHERE id = ?1 AND superseded_by IS NULL",
                [id],
                row_to_definition,
            )
            .optional()
            .map_err(Into::into)
    }

    pub fn list_definitions_for_project(
        &self,
        kind: &str,
        project_key: &str,
    ) -> Result<Vec<DefinitionRecord>> {
        let mut stmt = self.conn().prepare(
            "SELECT id, kind, scope, project_key, namespace, name, title, description,
                    body, metadata_json, source_path, source_hash, status, version,
                    created_by, created_at_ms, updated_at_ms, superseded_by
             FROM definitions
             WHERE kind = ?1
               AND status = 'active'
               AND superseded_by IS NULL
               AND (project_key IS NULL OR project_key = ?2)
             ORDER BY updated_at_ms ASC",
        )?;
        let rows = stmt.query_map(params![kind, project_key], row_to_definition)?;
        let mut out = Vec::new();
        for row in rows {
            out.push(row?);
        }
        Ok(out)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn sample(name: &str, body: &str) -> NewDefinition {
        NewDefinition {
            kind: "skill".to_owned(),
            scope: DefinitionScope::Project,
            project_key: Some("proj".to_owned()),
            namespace: None,
            name: name.to_owned(),
            title: None,
            description: Some("desc".to_owned()),
            body: body.to_owned(),
            metadata_json: "{}".to_owned(),
            source_path: Some("db:definition".to_owned()),
            source_hash: Some("abc".to_owned()),
            status: DefinitionStatus::Active,
            created_by: "test".to_owned(),
        }
    }

    #[test]
    fn upsert_definition_round_trips_normal() {
        let store = KnowledgeStore::open_in_memory().unwrap();
        let id = store.upsert_definition(&sample("deploy", "body")).unwrap();

        let loaded = store
            .get_definition_by_name(
                "skill",
                DefinitionScope::Project,
                Some("proj"),
                None,
                "deploy",
            )
            .unwrap()
            .unwrap();

        assert_eq!(loaded.id, id);
        assert_eq!(loaded.body, "body");
        assert_eq!(loaded.version, 1);
    }

    #[test]
    fn upsert_definition_bumps_version_when_body_changes_normal() {
        let store = KnowledgeStore::open_in_memory().unwrap();
        store.upsert_definition(&sample("deploy", "body")).unwrap();
        store
            .upsert_definition(&sample("deploy", "better body"))
            .unwrap();

        let loaded = store
            .get_definition_by_name(
                "skill",
                DefinitionScope::Project,
                Some("proj"),
                None,
                "deploy",
            )
            .unwrap()
            .unwrap();

        assert_eq!(loaded.body, "better body");
        assert_eq!(loaded.version, 2);
    }
}

const RECENT_MODELS_SESSION_ID: &str = "__app__";
const RECENT_MODELS_KIND: &str = "recent_models";
const RECENT_MODELS_KEY: &str = "global";

fn legacy_recent_models_path() -> std::path::PathBuf {
    dirs::config_dir()
        .unwrap_or_else(|| std::path::PathBuf::from("."))
        .join("jfc")
        .join("recent_models.json")
}

/// Load recently used models from the DB, importing the legacy JSON file once.
pub fn load_recent_models() -> Vec<String> {
    let Ok(store) = jfc_knowledge::KnowledgeStore::open_default() else {
        return Vec::new();
    };

    let models = load_recent_models_from_store(&store);
    if !models.is_empty() {
        return models;
    }

    let path = legacy_recent_models_path();
    let models = std::fs::read_to_string(&path)
        .ok()
        .and_then(|raw| serde_json::from_str::<Vec<String>>(&raw).ok())
        .unwrap_or_default();
    if !models.is_empty() {
        save_recent_models_to_store(&store, &models);
    }
    models
}

/// Save recently used models (max 5, most recent first).
pub fn save_recent_models(models: &[String]) {
    if let Ok(store) = jfc_knowledge::KnowledgeStore::open_default() {
        save_recent_models_to_store(&store, models);
    }
}

pub fn load_recent_models_from_store(store: &jfc_knowledge::KnowledgeStore) -> Vec<String> {
    store
        .get_session_artifact(
            RECENT_MODELS_SESSION_ID,
            RECENT_MODELS_KIND,
            RECENT_MODELS_KEY,
        )
        .ok()
        .flatten()
        .and_then(|row| serde_json::from_str(&row.value_json).ok())
        .unwrap_or_default()
}

pub fn save_recent_models_to_store(store: &jfc_knowledge::KnowledgeStore, models: &[String]) {
    let capped: Vec<String> = models.iter().take(5).cloned().collect();
    if let Ok(json) = serde_json::to_string(&capped) {
        let _ = store.upsert_session_artifact(
            RECENT_MODELS_SESSION_ID,
            RECENT_MODELS_KIND,
            RECENT_MODELS_KEY,
            &json,
        );
    }
}

pub fn open_recent_models_store(
    path: &std::path::Path,
) -> Result<jfc_knowledge::KnowledgeStore, String> {
    jfc_knowledge::KnowledgeStore::open(path).map_err(|err| err.to_string())
}

/// Push a model to the front of the recent list (deduplicates).
pub fn push_recent_model(recent: &mut Vec<String>, model: &str) {
    recent.retain(|m| m != model);
    recent.insert(0, model.to_owned());
    recent.truncate(5);
    save_recent_models(recent);
}

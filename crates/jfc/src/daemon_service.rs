use std::sync::Arc;

use jfc_engine::daemon_services::{
    DaemonScheduledTaskCreate, DaemonScheduledTaskLifecycle, DaemonScheduledTaskService,
    DaemonScheduledTaskSnapshot, install_daemon_scheduled_task_service,
};

pub(crate) fn install() {
    install_daemon_scheduled_task_service(Arc::new(JfcDaemonService));
}

struct JfcDaemonService;

impl DaemonScheduledTaskService for JfcDaemonService {
    fn list_scheduled_tasks(
        &self,
        archived: bool,
    ) -> Result<Vec<DaemonScheduledTaskSnapshot>, String> {
        let (registry, _) = load_scheduled_task_registry()?;
        let tasks = if archived {
            registry.list_archived()
        } else {
            registry.list_scheduled()
        };
        Ok(tasks.into_iter().map(scheduled_task_snapshot).collect())
    }

    fn create_scheduled_task(&self, request: DaemonScheduledTaskCreate) -> Result<String, String> {
        let (mut registry, path) = load_scheduled_task_registry()?;
        let schedule =
            jfc_daemon::parse_schedule(&request.cron_expr).map_err(|e| format!("bad cron: {e}"))?;
        let task = jfc_daemon::ScheduledTask::new(
            request.id.clone(),
            request.title,
            request.prompt,
            schedule,
            std::time::SystemTime::now(),
        );
        registry.create(task)?;
        registry
            .save(&path)
            .map_err(|e| format!("Created but failed to persist: {e}"))?;
        Ok(request.id)
    }

    fn set_scheduled_task_lifecycle(
        &self,
        id: &str,
        lifecycle: DaemonScheduledTaskLifecycle,
    ) -> Result<(), String> {
        let (mut registry, path) = load_scheduled_task_registry()?;
        match lifecycle {
            DaemonScheduledTaskLifecycle::Active => registry.resume(id),
            DaemonScheduledTaskLifecycle::Paused => registry.pause(id),
            DaemonScheduledTaskLifecycle::Archived => registry.archive(id),
        }?;
        registry.save(&path).map_err(|e| e.to_string())
    }
}

fn load_scheduled_task_registry()
-> Result<(jfc_daemon::ScheduledTaskRegistry, std::path::PathBuf), String> {
    let paths = jfc_daemon::DaemonPaths::default_user();
    let path = jfc_daemon::ScheduledTaskRegistry::default_path(&paths.base_dir);
    let registry = jfc_daemon::ScheduledTaskRegistry::load(&path).map_err(|e| e.to_string())?;
    Ok((registry, path))
}

fn scheduled_task_snapshot(task: &jfc_daemon::ScheduledTask) -> DaemonScheduledTaskSnapshot {
    DaemonScheduledTaskSnapshot {
        id: task.id.clone(),
        title: task.title.clone(),
        prompt: task.prompt.clone(),
        lifecycle: scheduled_task_lifecycle(task.lifecycle),
    }
}

fn scheduled_task_lifecycle(lifecycle: jfc_daemon::TaskLifecycle) -> DaemonScheduledTaskLifecycle {
    match lifecycle {
        jfc_daemon::TaskLifecycle::Active => DaemonScheduledTaskLifecycle::Active,
        jfc_daemon::TaskLifecycle::Paused => DaemonScheduledTaskLifecycle::Paused,
        jfc_daemon::TaskLifecycle::Archived => DaemonScheduledTaskLifecycle::Archived,
    }
}

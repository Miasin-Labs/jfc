use serde::{Deserialize, Serialize};

use crate::{PluginId, descriptor::DescriptorVisibility};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum MetricSurface {
    StatusLine,
    Sidebar,
    Panel,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum MetricUnit {
    Count,
    Percent,
    Tokens,
    Usd,
    Digest,
    Text,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct MetricDescriptor {
    pub plugin_id: PluginId,
    pub id: String,
    pub label: String,
    pub description: String,
    pub unit: MetricUnit,
    pub surfaces: Vec<MetricSurface>,
    pub priority: i32,
    pub visibility: DescriptorVisibility,
}

impl MetricDescriptor {
    pub fn new(
        plugin_id: PluginId,
        id: impl Into<String>,
        label: impl Into<String>,
        description: impl Into<String>,
        unit: MetricUnit,
    ) -> Self {
        Self {
            plugin_id,
            id: id.into(),
            label: label.into(),
            description: description.into(),
            unit,
            surfaces: Vec::new(),
            priority: 0,
            visibility: DescriptorVisibility::HostVisible,
        }
    }

    pub fn with_surface(mut self, surface: MetricSurface) -> Self {
        self.surfaces.push(surface);
        self
    }

    pub fn with_surfaces<I>(mut self, surfaces: I) -> Self
    where
        I: IntoIterator<Item = MetricSurface>,
    {
        self.surfaces.extend(surfaces);
        self
    }

    pub fn with_priority(mut self, priority: i32) -> Self {
        self.priority = priority;
        self
    }

    pub fn with_visibility(mut self, visibility: DescriptorVisibility) -> Self {
        self.visibility = visibility;
        self
    }
}

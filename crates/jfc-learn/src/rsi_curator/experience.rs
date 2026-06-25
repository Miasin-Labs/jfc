use super::{CandidateChange, RsiTrace, analyze_thinking, score_trace};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ExperienceNodeKind {
    Trace,
    Tool,
    Candidate,
    Lesson,
}

impl ExperienceNodeKind {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Trace => "trace",
            Self::Tool => "tool",
            Self::Candidate => "candidate",
            Self::Lesson => "lesson",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ExperienceEdgeKind {
    ObservedTool,
    ProposedCandidate,
    DerivedLesson,
}

impl ExperienceEdgeKind {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::ObservedTool => "observed_tool",
            Self::ProposedCandidate => "proposed_candidate",
            Self::DerivedLesson => "derived_lesson",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ExperienceNode {
    pub id: String,
    pub kind: ExperienceNodeKind,
    pub label: String,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ExperienceEdge {
    pub from: String,
    pub to: String,
    pub kind: ExperienceEdgeKind,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct ExperienceGraph {
    pub nodes: Vec<ExperienceNode>,
    pub edges: Vec<ExperienceEdge>,
}

pub fn build_experience_graph(
    traces: &[RsiTrace],
    candidates: &[CandidateChange],
) -> ExperienceGraph {
    let mut graph = ExperienceGraph::default();
    for trace in traces {
        let trace_id = trace_node_id(&trace.session_id);
        push_node(
            &mut graph.nodes,
            ExperienceNode {
                id: trace_id.clone(),
                kind: ExperienceNodeKind::Trace,
                label: trace_label(trace),
            },
        );

        for step in &trace.tool_steps {
            let tool_id = tool_node_id(&step.name);
            push_node(
                &mut graph.nodes,
                ExperienceNode {
                    id: tool_id.clone(),
                    kind: ExperienceNodeKind::Tool,
                    label: step.name.clone(),
                },
            );
            push_edge(
                &mut graph.edges,
                ExperienceEdge {
                    from: trace_id.clone(),
                    to: tool_id,
                    kind: ExperienceEdgeKind::ObservedTool,
                },
            );
        }

        let score = score_trace(trace);
        let analysis = analyze_thinking(trace, &score);
        let lesson_id = lesson_node_id(&trace.session_id, analysis.pattern.slug());
        push_node(
            &mut graph.nodes,
            ExperienceNode {
                id: lesson_id.clone(),
                kind: ExperienceNodeKind::Lesson,
                label: analysis.lesson,
            },
        );
        push_edge(
            &mut graph.edges,
            ExperienceEdge {
                from: trace_id.clone(),
                to: lesson_id,
                kind: ExperienceEdgeKind::DerivedLesson,
            },
        );
    }

    for candidate in candidates {
        let trace_id = trace_node_id(&candidate.source_session_id);
        let candidate_id = candidate_node_id(&candidate.id);
        push_node(
            &mut graph.nodes,
            ExperienceNode {
                id: candidate_id.clone(),
                kind: ExperienceNodeKind::Candidate,
                label: format!("{}: {}", candidate.kind.slug(), candidate.title),
            },
        );
        push_edge(
            &mut graph.edges,
            ExperienceEdge {
                from: trace_id,
                to: candidate_id,
                kind: ExperienceEdgeKind::ProposedCandidate,
            },
        );
    }

    graph
}

fn push_node(nodes: &mut Vec<ExperienceNode>, node: ExperienceNode) {
    if nodes.iter().any(|existing| existing.id == node.id) {
        return;
    }
    nodes.push(node);
}

fn push_edge(edges: &mut Vec<ExperienceEdge>, edge: ExperienceEdge) {
    if edges.iter().any(|existing| existing == &edge) {
        return;
    }
    edges.push(edge);
}

fn trace_node_id(session_id: &str) -> String {
    format!("trace:{session_id}")
}

fn tool_node_id(tool_name: &str) -> String {
    format!("tool:{tool_name}")
}

fn lesson_node_id(session_id: &str, pattern: &str) -> String {
    format!("lesson:{session_id}:{pattern}")
}

fn candidate_node_id(candidate_id: &str) -> String {
    format!("candidate:{candidate_id}")
}

fn trace_label(trace: &RsiTrace) -> String {
    format!(
        "session={} tools={} verifications={} thinking_blocks={} raw_stored=false",
        trace.session_id,
        trace.tool_steps.len(),
        trace.verifications.len(),
        trace.thinking_blocks.len(),
    )
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::rsi_curator::{
        CandidateKind, RsiCurator, RsiCuratorConfig, RsiOutcome, RsiPromotionPolicy, RsiToolStep,
    };

    #[test]
    fn graph_links_trace_tools_candidates_and_lessons_without_raw_thinking_normal() {
        let mut trace = RsiTrace::new("s1");
        trace.outcome = Some(RsiOutcome::UserCorrected);
        trace.user_correction = Some("actually verify with cargo test".to_owned());
        trace.thinking_blocks = vec!["private raw reasoning".to_owned()];
        trace.tool_steps = vec![
            RsiToolStep::new("Read", true),
            RsiToolStep::new("Edit", false),
            RsiToolStep::new("Edit", true),
        ];

        let curator = RsiCurator::new(RsiCuratorConfig::default(), RsiPromotionPolicy::default());
        let report = curator.run(&[trace.clone()]).unwrap();
        let graph = build_experience_graph(&[trace], &report.candidates);

        assert!(
            graph
                .nodes
                .iter()
                .any(|node| node.kind == ExperienceNodeKind::Trace)
        );
        assert!(
            graph
                .nodes
                .iter()
                .any(|node| node.kind == ExperienceNodeKind::Tool)
        );
        assert!(
            graph
                .nodes
                .iter()
                .any(|node| node.kind == ExperienceNodeKind::Candidate)
        );
        assert!(
            graph
                .nodes
                .iter()
                .any(|node| node.kind == ExperienceNodeKind::Lesson)
        );
        assert!(
            graph
                .edges
                .iter()
                .any(|edge| edge.kind == ExperienceEdgeKind::ObservedTool)
        );
        assert!(
            graph
                .edges
                .iter()
                .any(|edge| edge.kind == ExperienceEdgeKind::ProposedCandidate)
        );
        assert!(
            graph
                .nodes
                .iter()
                .all(|node| !node.label.contains("private raw reasoning"))
        );
        assert!(
            report
                .candidates
                .iter()
                .any(|candidate| candidate.kind == CandidateKind::ContextPlaybookPatch)
        );
    }
}

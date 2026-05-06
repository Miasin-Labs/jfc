# Draft: Graph-Based Context Engine

## Requirements (confirmed)

- **Core idea**: Turn the codebase into a queryable graph database. Functions as nodes, call sites as edges. Mini-DSL for LLM queries. Language-agnostic adapter layer. Symbol-based semantic editing.
- **Cycle detection**: During traversal, MUST track visited nodes to prevent infinite expansion from mutual recursion / circular dependencies
- **Depth control**: Configurable depth parameter (depth=1 default, depth=2/3 for deeper problems)
- **Partial struct selection**: Only pull fields actually accessed, with metadata indicating partial view + verbose flag
- **Virtual edit validation**: Before writing to disk, inline replacement at call sites and check compatibility
- **Symbol-based editing**: LLM operates on semantic handles, never file:line coordinates
- **Language-agnostic**: Trait-based adapter pattern (Rust first, then TS, C, Python etc.)
- **Modular capability tree**: Tree-based design for enabling/disabling analysis capabilities per project

## GitHub Issues (Milestone 1: Graph-Based Context Engine)

1. **#1** Graph DSL: Define mini query language for codebase graph
2. **#2** Graph Engine: Functions as nodes, call sites as edges
3. **#3** Symbol-Based Semantic Editing
4. **#4** Language-Agnostic Graph Adapter Layer
5. **#5** Virtual Edit Validation (pre-commit simulation)
6. **#6** Partial Struct Selection (field-level context)
7. **#18** Modular/tree-based capability extension system

## Technical Decisions

- **Implementation language**: Rust (same as the rest of jfc)
- **LSP integration**: Already have rust-analyzer LSP client in jfc — will consume LSP references/definitions/callHierarchy to build the graph
- **Architecture**: Likely a new crate (`crates/jfc-graph` or similar) that the UI crate depends on
- **Prior art studied**: Joern CPG (Code Property Graph), codebadger (MCP + CPG for LLMs), CLDK (IBM), Monitor-Guided Decoding (Microsoft)

## Research Findings

### Joern CPG (Code Property Graph) - Most relevant prior art
- Merges AST + CFG + PDG into single property graph
- Nodes: METHOD, CALL, IDENTIFIER, LOCAL, TYPE_DECL, MEMBER, etc.
- Edges: AST, CFG, CALL, ARGUMENT, REACHING_DEF, CDG, CONTAINS, etc.
- Has its own DSL (CPGQL) for traversals
- Language-agnostic via frontend adapters (X2CPG pattern)
- Started as academic work (2014 IEEE S&P), now commercial (ShiftLeft/Qwiet AI)
- Our design is INSPIRED by this but different: we're LLM-context focused, not vulnerability-detection focused

### codebadger (arXiv 2603.24837, March 2026)
- "Bridging Code Property Graphs and Language Models for Program Analysis"
- Open-source MCP server integrating Joern CPG with LLMs
- Key insight: Rather than requiring LLMs to generate complex CPG queries, provide HIGH-LEVEL TOOLS for program slicing, taint tracking, data flow analysis
- This validates our approach — but we go further with the DSL being LLM-generated

### CLDK (arXiv 2410.13007, IBM)
- Python library simplifying program analysis at multiple granularity levels
- Supports multiple languages
- Focuses on making it EASY to provide rich context to code LLMs
- Key learning: language-specific tools with steep learning curves limit adoption

### Monitor-Guided Decoding (arXiv 2306.10763, Microsoft)
- Uses static analysis to GUIDE decoding (not just context)
- Monitor checks type consistency during generation
- Works across Java, C#, Rust
- Validates: combining LSP data with LLM operations is proven effective

### LLMxCPG (arXiv 2507.16585)
- CPG-based slice construction reduces code size by 67-91% while preserving vulnerability context
- Confirms: graph-based slicing dramatically reduces token usage

## Existing jfc Architecture

- **Single crate**: `crates/jfc-ui` (~50 .rs files, ~20K+ lines)
- **LSP client**: Already spawns rust-analyzer, handles didOpen/didChange/publishDiagnostics
- **LSP RPC**: Hand-rolled JSON-RPC framing (no lsp-types dependency)
- **Tools**: Bash, Read, Write, Edit, Grep, Glob, TodoRead, TodoWrite, Task (dispatch + execution)
- **Context**: context.rs handles gathering context for the LLM
- **Swarm**: Multi-agent support with mailboxes and team helpers

## Existing LSP & Tool Surface (from explore agent)

**Current LSP Methods**: initialize, initialized, didOpen, didChange, publishDiagnostics, shutdown, exit
**NOT yet implemented**: definition, references, hover, completion, callHierarchy, workspace/*

**Current Tools (20)**: Bash, Read, Write, Edit, Glob, Grep, TaskCreate/Update/List/Done, Skill, Task, MemoryCreate/Delete, TeamCreate/Delete, SendMessage, TeamMemberMode

**Context System**: 
- ReadDedupCache (token optimization via file mtime/size tracking)
- ClaudeMdHierarchy (5 system prompt layers)
- ToolContext (read_cache, approx_tokens, rapid_refill_count, total_user_turns)
- Diagnostics injected into system prompt before each turn

**Integration Points for Graph Engine**:
1. Extend LspClient with definition(), references(), callHierarchy()
2. New ToolKind::GraphQuery + executor
3. Graph context injection alongside diagnostics
4. New ToolInput::GraphQuery { query, scope, depth }

## Rust Graph Database Options

### Option A: petgraph (lightweight)
- Most popular Rust graph crate, minimal overhead
- No query language, just data structure + algorithms
- We'd build our own DSL on top
- Pro: Zero dependencies bloat, full control
- Con: Have to implement everything ourselves

### Option B: kyu-graph (embedded Cypher with JIT)
- Has **delta fast path for agentic code graphs** (exactly our use case!)
- Cranelift JIT for filter predicates
- openCypher query language built-in
- Pro: Query language already built, agent-focused
- Con: External dependency, may be overkill

### Option C: grafeo (full-featured Rust graph DB)
- GQL, Cypher, Gremlin, GraphQL support
- In-memory and persistent modes
- Very heavy dependency tree
- Con: Way too much for our needs

### Option D: Hand-roll on petgraph (RECOMMENDED)
- Use petgraph as the underlying graph data structure
- Build our own minimal DSL (simpler than Cypher, tailored for code graphs)
- Our DSL is specifically designed for LLM context selection, not general querying
- Advantages: Small binary, fast compile, no runtime overhead, perfectly tailored
- The DSL only needs: select, where, traverse (depth-limited), project (partial struct)

## Academic Validation

### Foundational: Yamaguchi et al. (IEEE S&P 2014, 616 citations)
- "Modeling and Discovering Vulnerabilities with Code Property Graphs"
- THE paper that started CPG. Merges AST + CFG + PDG.
- Their query language (CPGQL) inspired our DSL concept

### Directly Validates Our Approach:
- **codebadger** (2026): LLM + CPG via high-level tools → exactly our pattern
- **LLMxCPG** (2025): CPG slicing reduces code 67-91% while preserving semantics → proves token savings
- **Taint-Based Code Slicing for LLM** (2025): 99% code reduction via slicing → proves surgical context works
- **SliceMate** (2025): LLM agents for program slicing without explicit dependency graph → validates agent-graph interaction
- **CLDK** (IBM, 2024): Language-agnostic program analysis for code LLMs → validates adapter pattern
- **Monitor-Guided Decoding** (Microsoft): Static analysis guiding LLM generation → validates LSP+LLM synergy

## Open Questions

- Should the graph be persisted (file-backed) or purely in-memory?
- Should the new graph engine be a separate crate or module within jfc-ui?
- What should the DSL syntax look like? (Cypher-inspired? Custom? S-expression?)
- How should the graph handle incremental updates when files change?

## Scope Boundaries

- INCLUDE: Graph data structure, LSP-based graph construction, DSL parser, symbol-based editing, virtual validation, partial struct selection, Rust adapter, capability tree
- EXCLUDE: Non-Rust language adapters in v1 (just the trait definition), vector embeddings, machine learning on the graph, full Joern-parity

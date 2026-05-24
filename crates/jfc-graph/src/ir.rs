//! Language-agnostic intermediate representation for intraprocedural analysis.
//!
//! Each LanguageAdapter can lower its AST into this IR. Analyses like CFG
//! construction, dataflow, and complexity then operate on the IR once.
//!
//! The IR is a flat, 3-address-code style instruction list with explicit
//! labels and branches. It deliberately does NOT model SSA, types, or
//! ownership — those can be layered on top later. The goal is to give
//! analyses a single shape to walk rather than reimplementing per-grammar
//! traversals (see `cfg_rules.rs` / `dataflow_rules.rs` for the current
//! per-language duplication this is intended to eventually replace).

use std::collections::HashMap;

use tree_sitter::Node;

// ─── Core types ──────────────────────────────────────────────────────────────

/// A named variable in the source (a `let` binding, a parameter, etc.).
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct Var(pub String);

impl Var {
    pub fn new(name: impl Into<String>) -> Self {
        Self(name.into())
    }

    pub fn as_str(&self) -> &str {
        &self.0
    }
}

/// An operand to an IR instruction.
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub enum Operand {
    /// A named source variable.
    Var(Var),
    /// A literal constant (rendered as source text, e.g. `"42"`, `"\"hi\""`).
    Const(String),
    /// A compiler-generated temporary, numbered uniquely within a function.
    Temp(usize),
}

impl Operand {
    pub fn var(name: impl Into<String>) -> Self {
        Operand::Var(Var::new(name))
    }

    pub fn constant(text: impl Into<String>) -> Self {
        Operand::Const(text.into())
    }
}

/// Binary operator kinds supported by the IR.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum BinOpKind {
    Add,
    Sub,
    Mul,
    Div,
    Eq,
    Ne,
    Lt,
    Gt,
    And,
    Or,
}

impl BinOpKind {
    /// Map a textual operator (as it appears in source) to a [`BinOpKind`].
    pub fn from_source(op: &str) -> Option<Self> {
        Some(match op {
            "+" => BinOpKind::Add,
            "-" => BinOpKind::Sub,
            "*" => BinOpKind::Mul,
            "/" => BinOpKind::Div,
            "==" => BinOpKind::Eq,
            "!=" => BinOpKind::Ne,
            "<" => BinOpKind::Lt,
            ">" => BinOpKind::Gt,
            "&&" => BinOpKind::And,
            "||" => BinOpKind::Or,
            _ => return None,
        })
    }
}

/// A branch/jump target. Labels are scoped to a single [`IrFunction`].
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, PartialOrd, Ord)]
pub struct Label(pub u32);

// ─── Instructions ────────────────────────────────────────────────────────────

/// A single 3-address-code style IR operation.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum IrOp {
    /// `dst = src`
    Assign { dst: Var, src: Operand },
    /// `dst = lhs op rhs`
    BinOp {
        dst: Var,
        lhs: Operand,
        op: BinOpKind,
        rhs: Operand,
    },
    /// `dst = callee(args...)` (dst is None for statement-position calls).
    Call {
        dst: Option<Var>,
        callee: String,
        args: Vec<Operand>,
    },
    /// `dst = base.field`
    FieldRead {
        dst: Var,
        base: Operand,
        field: String,
    },
    /// `base.field = src`
    FieldWrite {
        base: Operand,
        field: String,
        src: Operand,
    },
    /// `if cond goto target`
    Branch { cond: Operand, target: Label },
    /// `goto target`
    Jump { target: Label },
    /// `return value?`
    Return { value: Option<Operand> },
    /// `target:` — defines a branch destination.
    Label(Label),
    /// No-op / phi placeholder.
    Nop,
}

/// A lowered function: parameters + a flat instruction list, plus an index
/// from [`Label`] to its position in `body` for O(1) jump resolution.
#[derive(Debug, Clone, Default)]
pub struct IrFunction {
    pub name: String,
    pub params: Vec<Var>,
    pub body: Vec<IrOp>,
    pub labels: HashMap<Label, usize>,
}

impl IrFunction {
    pub fn new(name: impl Into<String>) -> Self {
        Self {
            name: name.into(),
            params: Vec::new(),
            body: Vec::new(),
            labels: HashMap::new(),
        }
    }

    /// Append an op to the body. If it is a [`IrOp::Label`], also record its
    /// position in the `labels` index.
    pub fn push(&mut self, op: IrOp) {
        if let IrOp::Label(l) = op {
            self.labels.insert(l, self.body.len());
        }
        self.body.push(op);
    }
}

// ─── Trait ───────────────────────────────────────────────────────────────────

/// Lower a tree-sitter AST subtree (typically a function definition) into the
/// language-agnostic [`IrFunction`] representation.
///
/// Returns `None` if the node isn't a function-shaped thing the adapter can
/// handle — callers can fall back to per-grammar logic in the meantime.
pub trait IrLowering {
    fn lower_function(&self, node: Node, source: &str) -> Option<IrFunction>;
}

// ─── Rust lowering (proof of concept) ────────────────────────────────────────

/// Lowering driver for Rust source. Stateless; safe to construct on demand.
pub struct RustIrLowering;

impl RustIrLowering {
    pub fn new() -> Self {
        Self
    }

    fn fresh_label(next: &mut u32) -> Label {
        let l = Label(*next);
        *next += 1;
        l
    }

    fn fresh_temp(next: &mut usize) -> usize {
        let t = *next;
        *next += 1;
        t
    }

    fn text<'a>(node: Node<'a>, source: &'a str) -> &'a str {
        node.utf8_text(source.as_bytes()).unwrap_or("")
    }

    /// Walk a Rust function body block (`block` node) and emit IR.
    fn lower_block(
        block: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) {
        let mut cursor = block.walk();
        for child in block.named_children(&mut cursor) {
            Self::lower_stmt(child, source, func, next_label, next_temp);
        }
    }

    fn lower_stmt(
        node: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) {
        match node.kind() {
            "let_declaration" => {
                // `let <pattern> = <value>;`
                let pattern = node.child_by_field_name("pattern");
                let value = node.child_by_field_name("value");
                let Some(pattern) = pattern else { return };
                let name = Self::text(pattern, source).to_string();
                let dst = Var::new(name);

                let src = match value {
                    Some(v) => Self::lower_expr(v, source, func, next_label, next_temp),
                    None => Operand::Const(String::new()),
                };
                func.push(IrOp::Assign { dst, src });
            }
            "expression_statement" => {
                if let Some(inner) = node.named_child(0) {
                    let _ = Self::lower_expr(inner, source, func, next_label, next_temp);
                }
            }
            "if_expression" => {
                let _ = Self::lower_expr(node, source, func, next_label, next_temp);
            }
            "return_expression" => {
                let value = node
                    .named_child(0)
                    .map(|child| Self::lower_expr(child, source, func, next_label, next_temp));
                func.push(IrOp::Return { value });
            }
            "block" => {
                Self::lower_block(node, source, func, next_label, next_temp);
            }
            _ => {
                // Fall through: treat as an expression, discard the result.
                let _ = Self::lower_expr(node, source, func, next_label, next_temp);
            }
        }
    }

    fn lower_expr(
        node: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) -> Operand {
        match node.kind() {
            "identifier" => Operand::var(Self::text(node, source)),
            "integer_literal"
            | "float_literal"
            | "string_literal"
            | "char_literal"
            | "boolean_literal" => Operand::constant(Self::text(node, source)),
            "call_expression" => Self::lower_call(node, source, func, next_label, next_temp),
            "binary_expression" => Self::lower_binop(node, source, func, next_label, next_temp),
            "field_expression" => Self::lower_field_read(node, source, func, next_label, next_temp),
            "assignment_expression" => {
                Self::lower_assignment(node, source, func, next_label, next_temp)
            }
            "if_expression" => Self::lower_if(node, source, func, next_label, next_temp),
            "block" => {
                Self::lower_block(node, source, func, next_label, next_temp);
                Operand::Const(String::from("()"))
            }
            _ => {
                // Unknown expression shape: surface the raw text as a constant
                // so downstream analyses still see *something*.
                Operand::Const(Self::text(node, source).to_string())
            }
        }
    }

    fn lower_call(
        node: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) -> Operand {
        let callee = node
            .child_by_field_name("function")
            .map(|n| Self::text(n, source).to_string())
            .unwrap_or_default();

        let mut args = Vec::new();
        if let Some(arg_list) = node.child_by_field_name("arguments") {
            let mut cursor = arg_list.walk();
            for arg in arg_list.named_children(&mut cursor) {
                args.push(Self::lower_expr(arg, source, func, next_label, next_temp));
            }
        }

        let dst_var = Var::new(format!("__t{}", Self::fresh_temp(next_temp)));
        func.push(IrOp::Call {
            dst: Some(dst_var.clone()),
            callee,
            args,
        });
        Operand::Var(dst_var)
    }

    fn lower_binop(
        node: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) -> Operand {
        let lhs = node
            .child_by_field_name("left")
            .map(|n| Self::lower_expr(n, source, func, next_label, next_temp))
            .unwrap_or(Operand::Const(String::new()));
        let rhs = node
            .child_by_field_name("right")
            .map(|n| Self::lower_expr(n, source, func, next_label, next_temp))
            .unwrap_or(Operand::Const(String::new()));
        let op_text = node
            .child_by_field_name("operator")
            .map(|n| Self::text(n, source).to_string())
            .unwrap_or_default();
        let op = BinOpKind::from_source(&op_text).unwrap_or(BinOpKind::Add);

        let dst = Var::new(format!("__t{}", Self::fresh_temp(next_temp)));
        func.push(IrOp::BinOp {
            dst: dst.clone(),
            lhs,
            op,
            rhs,
        });
        Operand::Var(dst)
    }

    fn lower_field_read(
        node: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) -> Operand {
        let base = node
            .child_by_field_name("value")
            .map(|n| Self::lower_expr(n, source, func, next_label, next_temp))
            .unwrap_or(Operand::Const(String::new()));
        let field = node
            .child_by_field_name("field")
            .map(|n| Self::text(n, source).to_string())
            .unwrap_or_default();

        let dst = Var::new(format!("__t{}", Self::fresh_temp(next_temp)));
        func.push(IrOp::FieldRead {
            dst: dst.clone(),
            base,
            field,
        });
        Operand::Var(dst)
    }

    fn lower_assignment(
        node: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) -> Operand {
        let left = node.child_by_field_name("left");
        let src = match node.child_by_field_name("right") {
            Some(r) => Self::lower_expr(r, source, func, next_label, next_temp),
            None => Operand::Const(String::new()),
        };

        let Some(left) = left else { return src };

        if left.kind() == "field_expression" {
            let base = left
                .child_by_field_name("value")
                .map(|n| Self::lower_expr(n, source, func, next_label, next_temp))
                .unwrap_or(Operand::Const(String::new()));
            let field = left
                .child_by_field_name("field")
                .map(|n| Self::text(n, source).to_string())
                .unwrap_or_default();
            func.push(IrOp::FieldWrite {
                base,
                field,
                src: src.clone(),
            });
            return src;
        }

        let dst = Var::new(Self::text(left, source));
        func.push(IrOp::Assign {
            dst,
            src: src.clone(),
        });
        src
    }

    fn lower_if(
        node: Node,
        source: &str,
        func: &mut IrFunction,
        next_label: &mut u32,
        next_temp: &mut usize,
    ) -> Operand {
        let cond = node
            .child_by_field_name("condition")
            .map(|n| Self::lower_expr(n, source, func, next_label, next_temp))
            .unwrap_or(Operand::Const(String::from("true")));

        let then_label = Self::fresh_label(next_label);
        let end_label = Self::fresh_label(next_label);

        func.push(IrOp::Branch {
            cond,
            target: then_label,
        });

        // Else / fall-through branch first.
        if let Some(else_clause) = node.child_by_field_name("alternative") {
            let mut cursor = else_clause.walk();
            for child in else_clause.named_children(&mut cursor) {
                Self::lower_stmt(child, source, func, next_label, next_temp);
            }
        }
        func.push(IrOp::Jump { target: end_label });

        // Then branch.
        func.push(IrOp::Label(then_label));
        if let Some(then_block) = node.child_by_field_name("consequence") {
            Self::lower_block(then_block, source, func, next_label, next_temp);
        }

        func.push(IrOp::Label(end_label));
        Operand::Const(String::from("()"))
    }
}

impl Default for RustIrLowering {
    fn default() -> Self {
        Self::new()
    }
}

impl IrLowering for RustIrLowering {
    fn lower_function(&self, node: Node, source: &str) -> Option<IrFunction> {
        if node.kind() != "function_item" {
            return None;
        }

        let name = node
            .child_by_field_name("name")
            .map(|n| Self::text(n, source).to_string())
            .unwrap_or_else(|| "<anon>".to_string());

        let mut func = IrFunction::new(name);

        // Parameters
        if let Some(param_list) = node.child_by_field_name("parameters") {
            let mut cursor = param_list.walk();
            for param in param_list.named_children(&mut cursor) {
                // A `parameter` node has a `pattern` field holding the binding.
                let pat = param.child_by_field_name("pattern").unwrap_or(param);
                let raw = Self::text(pat, source).trim();
                if !raw.is_empty() {
                    func.params.push(Var::new(raw));
                }
            }
        }

        let mut next_label: u32 = 0;
        let mut next_temp: usize = 0;

        if let Some(body) = node.child_by_field_name("body") {
            Self::lower_block(body, source, &mut func, &mut next_label, &mut next_temp);
        }

        Some(func)
    }
}

// ─── Tests ───────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;
    use tree_sitter::Parser;

    fn parse_rust(src: &str) -> tree_sitter::Tree {
        let mut p = Parser::new();
        p.set_language(&tree_sitter_rust::LANGUAGE.into()).unwrap();
        p.parse(src, None).expect("parse failed")
    }

    fn find_function<'a>(node: tree_sitter::Node<'a>) -> Option<tree_sitter::Node<'a>> {
        if node.kind() == "function_item" {
            return Some(node);
        }
        let mut cursor = node.walk();
        for child in node.named_children(&mut cursor) {
            if let Some(f) = find_function(child) {
                return Some(f);
            }
        }
        None
    }

    #[test]
    fn lowers_simple_rust_function() {
        let src = r#"
            fn add_one(x: i32) -> i32 {
                let y = x + 1;
                return y;
            }
        "#;
        let tree = parse_rust(src);
        let func_node = find_function(tree.root_node()).expect("found fn");

        let ir = RustIrLowering::new()
            .lower_function(func_node, src)
            .expect("lowered");

        assert_eq!(ir.name, "add_one");
        assert_eq!(ir.params.len(), 1, "expected 1 param, got {:?}", ir.params);

        // We expect at least: a BinOp for `x + 1`, an Assign into `y`, and a Return.
        let has_binop = ir
            .body
            .iter()
            .any(|op| matches!(op, IrOp::BinOp { op: BinOpKind::Add, .. }));
        let has_assign_y = ir.body.iter().any(|op| match op {
            IrOp::Assign { dst, .. } => dst.as_str() == "y",
            _ => false,
        });
        let has_return = ir
            .body
            .iter()
            .any(|op| matches!(op, IrOp::Return { value: Some(_) }));

        assert!(has_binop, "missing BinOp::Add in {:#?}", ir.body);
        assert!(has_assign_y, "missing Assign to y in {:#?}", ir.body);
        assert!(has_return, "missing Return in {:#?}", ir.body);
    }

    #[test]
    fn binop_from_source_roundtrip() {
        assert_eq!(BinOpKind::from_source("+"), Some(BinOpKind::Add));
        assert_eq!(BinOpKind::from_source("=="), Some(BinOpKind::Eq));
        assert_eq!(BinOpKind::from_source("&&"), Some(BinOpKind::And));
        assert_eq!(BinOpKind::from_source("???"), None);
    }

    #[test]
    fn label_index_is_populated() {
        let mut f = IrFunction::new("t");
        f.push(IrOp::Label(Label(0)));
        f.push(IrOp::Nop);
        f.push(IrOp::Label(Label(1)));
        assert_eq!(f.labels.get(&Label(0)), Some(&0));
        assert_eq!(f.labels.get(&Label(1)), Some(&2));
    }
}

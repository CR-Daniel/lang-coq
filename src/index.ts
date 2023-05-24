import {parser} from "./syntax.grammar"
import {
    LRLanguage,
    LanguageSupport,
    indentNodeProp,
    foldNodeProp,
    foldInside,
    delimitedIndent,
    HighlightStyle,
    syntaxHighlighting
} from "@codemirror/language"
import {Tag, styleTags, tags as t} from "@lezer/highlight"

let customTags = {
    vernacular: Tag.define(),
    gallina: Tag.define()
}

export let highlight = HighlightStyle.define([
    { tag: customTags.gallina, color:"#6637dd" },
    { tag: customTags.vernacular, color:"#7872d0"}
])

export const coqLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
        indentNodeProp.add({
            Application: delimitedIndent({closing: ")", align: false})
        }),
        foldNodeProp.add({
            Application: foldInside
        }),
        styleTags({
            Identifier: t.variableName,
            Boolean: t.bool,
            String: t.string,
            LineComment: t.lineComment,
            "( )": t.paren,
            // extra words
            Gallina: customTags.gallina,
            Vernacular: customTags.vernacular,
        })
        ]
    }),
    languageData: {
        commentTokens: {line: "(*"}
    }
})

// Our list of completions (can be static, since the editor
/// will do filtering based on context).
export const completions = [
  {label: "Abort", type: "text", detail: "vernacular"},
  {label: "About", type: "text", detail: "vernacular"},
  {label: "Add", type: "text", detail: "vernacular"},
  {label: "All", type: "text", detail: "vernacular"},
  {label: "Arguments", type: "text", detail: "vernacular"},
  {label: "Asymmetric", type: "text", detail: "vernacular"},
  {label: "Axiom", type: "text", detail: "vernacular"},
  {label: "Bind", type: "text", detail: "vernacular"},
  {label: "Canonical", type: "text", detail: "vernacular"},
  {label: "Check", type: "text", detail: "vernacular"},
  {label: "Class", type: "text", detail: "vernacular"},
  {label: "Close", type: "text", detail: "vernacular"},
  {label: "Coercion", type: "text", detail: "vernacular"},
  {label: "CoFixpoint", type: "text", detail: "vernacular"},
  {label: "Comments", type: "text", detail: "vernacular"},
  {label: "CoInductive", type: "text", detail: "vernacular"},
  {label: "Compute", type: "text", detail: "vernacular"},
  {label: "Context", type: "text", detail: "vernacular"},
  {label: "Constructors", type: "text", detail: "vernacular"},
  {label: "Contextual", type: "text", detail: "vernacular"},
  {label: "Corollary", type: "text", detail: "vernacular"},
  {label: "Defined", type: "text", detail: "vernacular"},
  {label: "Definition", type: "text", detail: "vernacular"},
  {label: "Delimit", type: "text", detail: "vernacular"},
  {label: "Fail", type: "text", detail: "vernacular"},
  {label: "Eval", type: "text", detail: "vernacular"},
  {label: "End", type: "text", detail: "vernacular"},
  {label: "Example", type: "text", detail: "vernacular"},
  {label: "Export", type: "text", detail: "vernacular"},
  {label: "Fact", type: "text", detail: "vernacular"},
  {label: "Fixpoint", type: "text", detail: "vernacular"},
  {label: "From", type: "text", detail: "vernacular"},
  {label: "Global", type: "text", detail: "vernacular"},
  {label: "Goal", type: "text", detail: "vernacular"},
  {label: "Graph", type: "text", detail: "vernacular"},
  {label: "Hint", type: "text", detail: "vernacular"},
  {label: "Hypotheses", type: "text", detail: "vernacular"},
  {label: "Hypothesis", type: "text", detail: "vernacular"},
  {label: "Implicit", type: "text", detail: "vernacular"},
  {label: "Implicits", type: "text", detail: "vernacular"},
  {label: "Import", type: "text", detail: "vernacular"},
  {label: "Inductive", type: "text", detail: "vernacular"},
  {label: "Infix", type: "text", detail: "vernacular"},
  {label: "Instance", type: "text", detail: "vernacular"},
  {label: "Lemma", type: "text", detail: "vernacular"},
  {label: "Let", type: "text", detail: "vernacular"},
  {label: "Local", type: "text", detail: "vernacular"},
  {label: "Ltac", type: "text", detail: "vernacular"},
  {label: "Module", type: "text", detail: "vernacular"},
  {label: "Morphism", type: "text", detail: "vernacular"},
  {label: "Next", type: "text", detail: "vernacular"},
  {label: "Notation", type: "text", detail: "vernacular"},
  {label: "Obligation", type: "text", detail: "vernacular"},
  {label: "Open", type: "text", detail: "vernacular"},
  {label: "Parameter", type: "text", detail: "vernacular"},
  {label: "Parameters", type: "text", detail: "vernacular"},
  {label: "Prenex", type: "text", detail: "vernacular"},
  {label: "Print", type: "text", detail: "vernacular"},
  {label: "Printing", type: "text", detail: "vernacular"},
  {label: "Program", type: "text", detail: "vernacular"},
  {label: "Patterns", type: "text", detail: "vernacular"},
  {label: "Projections", type: "text", detail: "vernacular"},
  {label: "Proof", type: "text", detail: "vernacular"},
  {label: "Proposition", type: "text", detail: "vernacular"},
  {label: "Qed", type: "text", detail: "vernacular"},
  {label: "Record", type: "text", detail: "vernacular"},
  {label: "Relation", type: "text", detail: "vernacular"},
  {label: "Remark", type: "text", detail: "vernacular"},
  {label: "Require", type: "text", detail: "vernacular"},
  {label: "Reserved", type: "text", detail: "vernacular"},
  {label: "Resolve", type: "text", detail: "vernacular"},
  {label: "Rewrite", type: "text", detail: "vernacular"},
  {label: "Save", type: "text", detail: "vernacular"},
  {label: "Scope", type: "text", detail: "vernacular"},
  {label: "Search", type: "text", detail: "vernacular"},
  {label: "SearchAbout", type: "text", detail: "vernacular"},
  {label: "Section", type: "text", detail: "vernacular"},
  {label: "Set", type: "text", detail: "vernacular"},
  {label: "Show", type: "text", detail: "vernacular"},
  {label: "Strict", type: "text", detail: "vernacular"},
  {label: "Structure", type: "text", detail: "vernacular"},
  {label: "Tactic", type: "text", detail: "vernacular"},
  {label: "Time", type: "text", detail: "vernacular"},
  {label: "Theorem", type: "text", detail: "vernacular"},
  {label: "Types", type: "text", detail: "vernacular"},
  {label: "Unset", type: "text", detail: "vernacular"},
  {label: "Variable", type: "text", detail: "vernacular"},
  {label: "Variables", type: "text", detail: "vernacular"},
  {label: "View", type: "text", detail: "vernacular"},
  {label: "Take (*name*) : (*set*).", type: "type", detail: "tactic", info: "Take an arbitrary element from (*set*) and call it (*name*)."},
  {label: "Assume (*name*) : ((*statement*)).", type: "type", detail: "tactic", info: "If you need to prove (*statement*) ⇒ B, this allows you to assume that (*statement*) holds, giving this assumption the name (*name*)."},
  {label: "It holds that ((*statement*)) ((*name*)).", type: "type", detail: "tactic", info: "Tries to automatically prove (*statement*). If that works, (*statement*) is added as a hypothesis with name (*name*)."},
  {label: "It holds that ((*current goal*)).", type: "type", detail: "tactic", info: "Tries to automatically prove the current goal."},
  {label: "By ((*lemma or assumption*)) it holds that ((*statement*)) ((*name*)).", type: "type", detail: "tactic", info: "Tries to prove (*statement*) using (*lemma*) or (*assumption*). If that works, (*statement*) is added as a hypothesis with name (*name*)."},
  {label: "We claim that ((*statement*)) ((*name*)).", type: "type", detail: "tactic", info: "Lets you first show (*statement*) before continuing with the rest of the proof. After you showed (*statement*), it will be available as a hypothesis with name (*name*)."},
  {label: "We argue by contradiction.", type: "type", detail: "tactic", info: "Assumes the opposite of what you need to show. Afterwards, you can try to derive a contradiction."},
  {label: "Contradiction", type: "type", detail: "tactic", info: "If you find two contradictory hypotheses in the proof context, you can write 'Contradiction' to finish the proof of the current goal."},
  {label: "Because (*name_combined_hyp*) both (*name_hyp_1*) and (*name_hyp_2*).", type: "type", detail: "tactic", info: "If you currently have a hypothesis with name (*name_combined_hyp*) which is in fact of the form H1 ∧ H2, then this tactic splits it up in two separate hypotheses with names (*name_hyp_1*) and (*name_hyp_2*)."},
  {label: "Choose (*name_var*) := (*expression*).", type: "type", detail: "tactic", info: "You can use this tactic when you need to show that there exists an x such that a certain property holds. You do this by proposing (*expression*) as a choice for x, giving it the name (*name_var*)."},
  {label: "Choose (*name_var*) such that (*name_property*) according to (*name_hyp*).", type: "type", detail: "tactic", info: "In case a hypothesis (*name_hyp*) starts with 'there exists' s.t. some property holds, then you can use this tactic to select such a variable. The variable will be named (*name_var*) and the property it satisfies (*name_property*)."},
  {label: "Write goal using ((*equality*)) as ((*new goal*)).", type: "type", detail: "tactic", info: "First attempts to automatically find a proof of the provided equality, and if it succeeds it uses it to replace in the goal the lhs of the equality by the rhs."},
  {label: "Write (*name_hyp*) as ((*expression*)).", type: "type", detail: "tactic", info: "Checks that the hypothesis with name (*name_hyp*) can be converted to (*expression*), and then replaces it by (*expression*). This is in general a more readable alternative to 'Expand the definition'"},
  {label: "Write (*name_hyp*) using ((*equality*)) as ((*new_hyp*)).", type: "type", detail: "tactic", info: "First attempts to automatically find a proof of the provided equality, and if it succeeds it uses it to replace in the hypothesis with name (*name_hyp*) the lhs of the equality by the rhs."},
  {label: "Either ((*case_1*)) or ((*case_2*)).", type: "type", detail: "tactic", info: "Case distinction when always precisely one of (*case_1*) or (*case_2*) occurs."},
  {label: "Rewrite ((*statement_1*)) (*sign_1*) ((*statement_2*)) (*sign_2*) ((*statement_3*))", type: "type", detail: "tactic", info: "Here (sign) is one of '=', '<', '>', '≤' or '≥'. Sometimes, you want to conclude something by concatenating a number of (in)equalities. For example, when you know that $a < b$ and $b < c$ and need to show that $a < c$, you could write $a < b < c$."},
  {label: "We show both statements.", type: "type", detail: "tactic", info: "Splits the goal in two separate goals, if it is of the form A ∧ B"},
  {label: "We show both directions.", type: "type", detail: "tactic", info: "Splits a goal of the form A ⇔ B, into the goals (A ⇒ B) and (B ⇒ A)"},
  {label: "We need to show that ((*(alternative) formulation of current goal*)).", type: "type", detail: "tactic", info: "Generally makes a proof more readable. Has the additional functionality that you can write a slightly different but equivalent formulation of the goal: you can for instance change names of certain variables."},
  {label: "We prove by induction on (*name_1*), calling the induction hypothesis (*name_2*).", type: "type", detail: "tactic", info: "Prove a statement by induction on the variable with (*name_1*), calling the induction hypothesis (*name_2*)."},
  {label: "Apply (*lemma or assumption*).", type: "type", detail: "tactic", info: "Apply a lemma or an assumption."},
  {label: "Expand the definition of (*name_kw*).", type: "type", detail: "tactic", info: "Expands the definition of the keyword (*name_kw*) in the current goal."},
  {label: "Expand the definition of (*name_kw*) in (*name_hyp*).", type: "type", detail: "tactic", info: "Expands the definition of the keyword (*name_kw*) in hypothesis (*name_hyp*)."},
  {label: "By ((*lemma or assumption*)) it holds that ((*statement*)).", type: "type", detail: "tactic", info: "Tries to directly prove the goal using (*lemma or assumption*) when the goal corresponds to (*statement*)."},
  {label: "It suffices to show that ((*statement*)).", type: "type", detail: "tactic", info: "Waterproof tries to verify automatically whether it is indeed enough to show (*statement*) to prove the current goal. If so, (*statement*) becomes the new goal."},
  {label: "Define (*name*) := ((*expression*)).", type: "type", detail: "tactic", info: "Temporarily give the name (*name*) to the expression (*expression*)."},
]

export const symbolcompletions = [
  {label: "\\alpha", type: "alpha", apply: "α", detail: "symbol"},
  {label: "\\beta", type: "beta", apply: "β", detail: "symbol"},
  {label: "\\gamma", type: "gamma", apply: "γ", detail: "symbol"},
  {label: "\\delta", type: "delta", apply: "δ", detail: "symbol"},
  {label: "\\epsilon", type: "epsilon", apply: "ε", detail: "symbol"},
  {label: "\\zeta", type: "zeta", apply: "ζ", detail: "symbol"},
  {label: "\\eta", type: "eta", apply: "η", detail: "symbol"},
  {label: "\\theta", type: "theta", apply: "θ", detail: "symbol"},
  {label: "\\iota", type: "iota", apply: "ι", detail: "symbol"},
  {label: "\\kappa", type: "kappa", apply: "κ", detail: "symbol"},
  {label: "\\lambda", type: "lambda", apply: "λ", detail: "symbol"},
  {label: "\\mu", type: "mu", apply: "μ", detail: "symbol"},
  {label: "\\nu", type: "nu", apply: "ν", detail: "symbol"},
  {label: "\\ksi", type: "ksi", apply: "ξ", detail: "symbol"},
  {label: "\\pi", type: "pi", apply: "π", detail: "symbol"},
  {label: "\\omikron", type: "omikron", apply: "ο", detail: "symbol"},
  {label: "\\rho", type: "rho", apply: "ρ", detail: "symbol"},
  {label: "\\sigma1", type: "sigma1", apply: "ς", detail: "symbol"},
  {label: "\\sigma2", type: "sigma2", apply: "σ", detail: "symbol"},
  {label: "\\tau", type: "tau", apply: "τ", detail: "symbol"},
  {label: "\\upsilon", type: "upsilon", apply: "υ", detail: "symbol"},
  {label: "\\phi1", type: "phi1", apply: "ϕ", detail: "symbol"},
  {label: "\\phi2", type: "phi2", apply: "φ", detail: "symbol"},
  {label: "\\chi", type: "chi", apply: "χ", detail: "symbol"},
  {label: "\\psi", type: "psi", apply: "ψ", detail: "symbol"},
  {label: "\\omega", type: "omega", apply: "ω", detail: "symbol"},
  {label: "\\Alpha", type: "Alpha", apply: "Α", detail: "symbol"},
  {label: "\\Beta", type: "Beta", apply: "Β", detail: "symbol"},
  {label: "\\Gamma", type: "Gamma", apply: "Γ", detail: "symbol"},
  {label: "\\Delta", type: "Delta", apply: "Δ", detail: "symbol"},
  {label: "\\Epsilon", type: "Epsilon", apply: "Ε", detail: "symbol"},
  {label: "\\Zeta", type: "Zeta", apply: "Ζ", detail: "symbol"},
  {label: "\\Eta", type: "Eta", apply: "Η", detail: "symbol"},
  {label: "\\Theta", type: "Theta", apply: "Θ", detail: "symbol"},
  {label: "\\Iota", type: "Iota", apply: "Ι", detail: "symbol"},
  {label: "\\Kappa", type: "Kappa", apply: "Κ", detail: "symbol"},
  {label: "\\Lambda", type: "Lambda", apply: "Λ", detail: "symbol"},
  {label: "\\Mu", type: "Mu", apply: "Μ", detail: "symbol"},
  {label: "\\Nu", type: "Nu", apply: "Ν", detail: "symbol"},
  {label: "\\Ksi", type: "Ksi", apply: "Ξ", detail: "symbol"},
  {label: "\\Omicron", type: "Omicron", apply: "Ο", detail: "symbol"},
  {label: "\\Pi", type: "Pi", apply: "Π", detail: "symbol"},
  {label: "\\Rho", type: "Rho", apply: "Ρ", detail: "symbol"},
  {label: "\\Sigma", type: "Sigma", apply: "Σ", detail: "symbol"},
  {label: "\\Tau", type: "Tau", apply: "Τ", detail: "symbol"},
  {label: "\\Upsilon", type: "Upsilon", apply: "Υ", detail: "symbol"},
  {label: "\\Phi", type: "Phi", apply: "Φ", detail: "symbol"},
  {label: "\\Chi", type: "Chi", apply: "Χ", detail: "symbol"},
  {label: "\\Psi", type: "Psi", apply: "Ψ", detail: "symbol"},
  {label: "\\Omega", type: "Omega", apply: "Ω", detail: "symbol"},
  {label: "\\forall", type: "forall", apply: "∀", detail: "symbol"},
  {label: "\\exists", type: "exists", apply: "∃", detail: "symbol"},
  {label: "\\in", type: "in", apply: "∈", detail: "symbol"},
  {label: "\\QED", type: "QED", apply: "∎", detail: "symbol"},
  {label: "\\infty", type: "infty", apply: "∞", detail: "symbol"},
  {label: "\\and", type: "and", apply: "∧", detail: "symbol"},
  {label: "\\or", type: "or", apply: "∨", detail: "symbol"},
  {label: "\\abs", type: "abs", apply: "∣", detail: "symbol"},
  {label: "\\intersection", type: "intersection", apply: "∩", detail: "symbol"},
  {label: "\\union", type: "union", apply: "∪", detail: "symbol"},
  {label: "\\empty-set", type: "emptyset", apply: "∅", detail: "symbol"},
  {label: "\\less-or-equal", type: "lessorequal", apply: "≤", detail: "symbol"},
  {label: "\\greater-or-equal", type: "greaterorequal", apply: "≥", detail: "symbol"},
  {label: "\\not-equal", type: "notequal", apply: "≠", detail: "symbol"},
  {label: "\\not", type: "not", apply: "¬", detail: "symbol"},
  {label: "\\circle-plus", type: "circleplus", apply: "⊕", detail: "symbol"},
  {label: "\\circle-times", type: "circletimes", apply: "⊗", detail: "symbol"},
  {label: "\\arrow-left", type: "arrowleft", apply: "←", detail: "symbol"},
  {label: "\\arrow-up", type: "arrowup", apply: "⬆", detail: "symbol"},
  {label: "\\arrow-right", type: "arrowright", apply: "→", detail: "symbol"},
  {label: "\\arrow-down", type: "arrowdown", apply: "↓", detail: "symbol"},
  {label: "\\arrow-map", type: "arrowmap", apply: "↦", detail: "symbol"},
  {label: "\\arrow-left-right", type: "arrowlr", apply: "↔", detail: "symbol"},
  {label: "\\implies-left", type: "impliesleft", apply: "⟸", detail: "symbol"},
  {label: "\\implies-right", type: "impliesright", apply: "⟹", detail: "symbol"},
  {label: "\\implies-left-right", type: "implieslr", apply: "⇔", detail: "symbol"},
  {label: "\\converges", type: "converges", apply: "→", detail: "symbol"},
  {label: "\\naturals", type: "naturals", apply: "ℕ", detail: "symbol"},
  {label: "\\integers", type: "integers", apply: "ℤ", detail: "symbol"},
  {label: "\\rationals", type: "rationals", apply: "ℚ", detail: "symbol"},
  {label: "\\reals", type: "reals", apply: "ℝ", detail: "symbol"},
  {label: "\\comples-numbers", type: "complex", apply: "ℂ", detail: "symbol"},
]

export function myCompletions(context: any) {
  let before = context.matchBefore(/\\*(\w*\-*\s*)+/)
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null
  return {
    from: before ? before.from : context.pos,
    options: completions,
    validFor: /^\w*$/
  }
}

export function symbolCompletions(context: any) {
  let before = context.matchBefore(/\\*(\w*\-*\s*)+/)
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null
  return {
    from: before ? before.from : context.pos,
    options: symbolcompletions,
    validFor: /^\\*$/
  }
}

export function coq() {
    return new LanguageSupport(coqLanguage)
}

export function coqSyntaxHighlighting() {
    return syntaxHighlighting(highlight);
}

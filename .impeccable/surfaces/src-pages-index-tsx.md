---
version: 1
slug: "src-pages-index-tsx"
primary_target: "src/pages/index.tsx"
related_targets: []
---

# Surface brief: Home (src/pages/index.tsx)

Scope: home page of the personal portfolio. Phase 2 covers design tokens, the 12-column grid system and the hero only; later phases cover projects, about and contact one by one.

Visitor mode: Experience/Read hybrid – a professional reading a portfolio. Success: the visitor connects with Tim on LinkedIn; email is secondary.

Audience and proof: potential side-project clients, recruiters, professional network. Proof on hand: current role at Lufthansa Industry Solutions, earlier Fraunhofer and Siemens Healthcare (names only), 9+ years, industries, certifications, 7 Medium articles. Nothing invented.

Constraints: bilingual EN/DE; self-hosted fonts; WCAG AA; design rules and ban list in CLAUDE.md are binding.

## Direction contract

THESIS: A technical lead who still writes code, presented like a page from a technical journal: a margin column of facts beside one plain sentence. It refuses the SaaS hero – badge, accented headline fragment, two pill CTAs, floating stat cards, centred blocks.

OWN-WORLD: Paper #F8F7F4, ink #111111, secondary #555555, 1px rules #D9D6CF, one accent – logo cyan darkened to #0E6F86 – for links, active state and one highlight per section. Fraunces display, IBM Plex Sans body, IBM Plex Mono only for real metadata (roles, years, stack). Square corners, no shadows, no cards, hairline rules between rows.

STORY: Within seconds the visitor reads who Tim is, where he works and what he builds, believes it because the facts are concrete, and connects on LinkedIn.

FIRST VIEWPORT: 12-column grid. Columns 1–3: portrait photo (column width, 4:5) and beneath it the name and a fact list separated by 1px rules – mono labels, sans values: role with employer, experience, earlier stations, availability. Columns 5–12 (column 4 stays empty: air between margin column and text, so the headline never touches the portrait): Fraunces headline at about 3.4× body size (68px over 20px; mobile 42/18 is a recorded exception because German compounds would overflow), left-aligned, then a 65ch intro paragraph, then the primary action – a rectangular 1px-ink "Connect on LinkedIn" link – and an underlined email text link. A full-width 1px rule closes the hero; below it a meta row "Stack" with the stack as plain comma-separated mono text. Mobile: headline, intro and actions first, then photo and facts side by side.

FORM: Brief-pinned world (CLAUDE.md design system) plus approved Phase 1 replacements. seed: none (pinned) – "Reduziert & technisch mit redaktionellem Einschlag … Anmutung einer technischen Dokumentation oder eines Fachmagazins"; "12-Spalten-Grid, bewusst asymmetrisch (Label- bzw. Meta-Spalte links mit 3 Spalten, Inhalt rechts mit 7–8 Spalten)".

Motion: one staggered CSS fade-in of the hero on load, disabled under prefers-reduced-motion. No scroll reveals, no hover lifts.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

---
name: TimTech Solutions – Tim D. Walter
description: Personal portfolio set like a page from a technical journal – margin column of facts, one plain statement, hairline rules.
colors:
  paper: "#F8F7F4"
  ink: "#111111"
  muted: "#555555"
  rule: "#D9D6CF"
  accent: "#0E6F86"
  accent-dark: "#0A5C70"
  accent-light: "#8FBAC3"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontSize: "4.25rem"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Fraunces, serif"
    fontSize: "2.5rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: "1.5rem"
    letterSpacing: "0em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "96px"
components:
  action:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 24px"
    typography: "{typography.body-sm}"
  action-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  action-on-ink:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 24px"
  action-on-ink-hover:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
  text-link:
    textColor: "{colors.accent}"
    typography: "{typography.body-sm}"
  text-link-hover:
    textColor: "{colors.accent-dark}"
  nav-contact:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 16px"
  ruled-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "24px 0"
  contact-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "96px 48px"
---

# Design System: TimTech Solutions – Tim D. Walter

## Overview

**Creative North Star: "The Technical Journal Page"**

Every page reads like a page from a technical journal or a well-kept documentation site: a narrow margin column on the left carries headings, facts and metadata; a wide main column on the right carries the text. Nothing floats, nothing is boxed. Order comes from a 12-column grid, 1px hairline rules between rows and a strong size jump between a serif display face and a quiet sans body. The page is warm off-white paper with near-black ink; colour is almost absent, so the one accent carries meaning wherever it appears.

The system is a deliberate replacement for an earlier card-based look. It refuses the SaaS landing page: no centred hero, no badges or pills over the headline, no card grids, no gradients, glows or shadows, no decorative icons. Variation between sections comes from the form of the content (two-column text blocks, ruled rows, an index of dates and titles), never from decoration.

Density is generous: sections breathe on a 48/96px rhythm, body text stays under ~52ch, and the desktop grid deliberately leaves one column empty as air between margin and content.

**Key Characteristics:**
- Asymmetric 12-column grid: margin column 1–3, column 4 empty, main column 5–12.
- 1px hairline rules instead of boxes; lists of things are ruled rows.
- Fraunces display at regular weight against IBM Plex Sans body; IBM Plex Mono only for real metadata.
- Paper, ink, grey and exactly one accent (darkened logo cyan).
- Square corners, no shadows, one staggered load animation.
- One dark block per page: the closing contact section.

## Colors

A near-monochrome paper-and-ink palette with a single deep teal-cyan accent that also colours the logo.

### Primary
- **Logbook Teal** (accent): links, the active navigation underline, the availability/current-role square marker, text selection, the focus outline, and the hover colour of article titles. One highlight per section at most. 5.39:1 on paper (AA).
- **Deep Logbook Teal** (accent-dark): hover and pressed state of accent links only.

### Neutral
- **Warm Paper** (paper): the page ground everywhere, and the text/fill colour inside the ink contact block.
- **Press Ink** (ink): all headings and body text, the 1px frame of actions, the heavier rule above principle blocks, and the ground of the contact block and the 3D canvas frame.
- **Graphite** (muted): secondary text – margin intros, summaries, metadata, inactive nav links, footer links. 6.96:1 on paper.
- **Hairline Stone** (rule): every 1px divider and section rule, the scrolled header border, and the placeholder ground behind images.

### Brand-only
- **Accent Light** (accent-light, #8FBAC3): a 55% paper tint of the accent, used only for the top face of the logo cube. Never text. The cube's other faces are accent and accent-dark, so logo, wordmark ("TECH") and links share one colour.

### Named Rules
**The Closed Palette Rule.** Tailwind's colour palette is replaced, not extended: paper, ink, muted, rule, accent, accent-dark and accent-light are the only colours that exist. Opacity variants of these (paper at 70%, accent at 40% for link underlines) are the only derivations.

**The One Accent Rule.** The accent marks something actionable or current – a link, the active page, a status – and appears at most once as a highlight per section. It is never a background panel, never decoration.

## Typography

**Display Font:** Fraunces (variable, self-hosted, serif fallback)
**Body Font:** IBM Plex Sans (variable, self-hosted, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono 400/500 (self-hosted, monospace fallback)

**Character:** A bookish, slightly soft serif at regular weight does the talking; a technical grotesque carries the reading; a mono face tags facts the way a spec sheet would. All three are self-hosted through next/font/local (GDPR); nothing loads from a font CDN.

### Hierarchy
- **Display** (400, 68px desktop / 52px from sm / 42px mobile, line-height 1.04–1.06, -0.015em): the single h1 per page – home statement and every PageIntro title.
- **Headline** (400, 40px desktop / 32px mobile, leading tight): section headings in the margin column (DocSection, Contact). The contact statement uses the display face at 36px / 28px.
- **Title** (400, 22px, leading snug): row and block titles – industries, career, skills, services, principles, article titles; project titles step up to 24px.
- **Lead** (400, 20px desktop / 18px mobile, relaxed): the intro paragraph under a page title and the About story.
- **Body** (400, 17px, line-height 1.625): base text. Row bodies and summaries use the 15px body-sm step. Measure capped at 52ch (about 65–70 characters).
- **Label** (Plex Mono 400, 13px, 24px line-height, sentence case, no tracking): roles, dates, categories, stack lists, fact labels.

### Named Rules
**The 3x Jump Rule.** The page headline is at least three times body size on desktop (68px over 20px lead). Recorded exception: on mobile it is 42px over 18px, because German compounds would overflow at a larger size.

**The Honest Mono Rule.** Mono is reserved for real metadata – years, roles, categories, stack – always in sentence case without letter-spacing. Never tracked uppercase labels, never a kicker above a heading; classification lives in the margin column.

**The Regular Weight Rule.** Headings are Fraunces at weight 400 with slight negative tracking and balanced wrapping; emphasis comes from size, not boldness. Medium (500) is used only for action labels, the name and the current language code.

## Layout

- **Container:** max 1280px of content (plus gutters), gutter 16px mobile / 24px from md / 48px from lg.
- **Grid:** 12 columns with a 24px column gap. From 1024px: margin column spans 1–3, column 4 stays empty as air, main column spans 5–12; a wide variant runs 5 to the end. Below 1024px every column spans the full width and the page becomes one column, content first, margin material after (on home and About the portrait and facts sit side by side in a 7rem/9rem + text sub-grid).
- **Section rhythm:** sections pad 48px vertically on mobile, 96px from lg. Page intros open with 96px top padding. Within sections, 24px separates rows and 48px separates groups.
- **Sticky margin:** on desktop the DocSection heading column is sticky 96px from the top while the main column scrolls.
- **Inner row grid:** ruled rows use an 8-column sub-grid from sm: 3 for title + meta (2 for article dates), 5–6 for body.
- **Header:** fixed, 64px tall, paper ground; the bottom rule appears only after scrolling 8px.
- Text is left-aligned throughout; nothing is centred except the 3D loading state.

**The Empty Column Rule.** Column 4 is never filled on desktop. It is the air that keeps the headline from touching the portrait and gives the page its asymmetry.

**The Token Spacing Rule.** Spacing uses only the named scale (4 / 8 / 16 / 24 / 48 / 96px as xs–2xl). Numeric Tailwind steps are legacy and do not belong in redesigned work.

## Elevation & Depth

The system is completely flat. There are no shadows (the shadow scale contains only "none"), no blur, no glass, no layered surfaces. Hierarchy is carried by hairline rules, the margin/main column split, type size, and one tonal inversion: the ink contact block at the end of each page. The 3D demo canvas sits in a flat ink frame with a 1px rule border.

**The Ruled-Not-Raised Rule.** Separation is a 1px line, never a shadow or a box. A heavier 1px ink rule (instead of stone) marks a set of equal-weight principles; that is the only rule-weight variation.

## Shapes

Square. Radius tokens cap at 4px and the shipped components use 0 everywhere: actions, images, the contact block, the canvas frame, the 8px status marker (a square, not a dot). The full radius stays available only for genuinely round objects; none ship today. Images are clipped to plain rectangles – 4:5 for the portrait, square for project images – on a stone placeholder ground.

## Components

### Buttons (actions)
Framed and quiet – a rectangle, never a pill.
- **Shape:** square corners (0), 1px ink border.
- **Primary (action):** transparent ground, ink text, 15px medium, 8px × 24px padding, 28px line height. Used for "Connect on LinkedIn", "Open live demo", "Back to home".
- **Hover / Focus:** fills ink with paper text (colour transition only, no movement); focus shows the global 2px accent outline offset 2px.
- **On ink (contact block):** paper fill, ink text, paper border; hover turns transparent with paper text.
- **Header contact:** the same frame at 14px with 4px × 16px padding.

### Text links
- Accent text with a 1px underline at 40% accent, offset 0.2em; hover darkens text and underline to accent-dark. No arrows appended. External links open in a new tab.
- On ink, links are paper with a 40% paper underline that becomes solid on hover.

### Cards / Containers
There are no cards. Containers are rows and blocks separated by rules (see Ruled Rows). The single filled container is the contact block.

### Navigation
- Desktop: logo left; right side 15px sans links in graphite, hover ink; the current page is ink with a 2px accent underline offset 6px. Anchor links never show as active. Language switch "EN / DE" (current code medium ink, other graphite) and a framed contact action.
- Mobile: a 44px menu button (outline menu/close icons) opens a ruled list of 22px Fraunces links, active one in accent, followed by the language switch and contact action. Closes on navigation and Escape.

### Ruled Rows (signature)
The core content pattern for industries, career, skills, stack, certifications, projects and articles.
- A list opened by a top 1px stone rule; every row closes with a bottom rule and 24px vertical padding (16px for single-line rows).
- Left: Fraunces title plus a mono meta line. Right: 15px body text or a mono stack list.
- Project rows: square image (3 of 8 sub-columns), title, mono tags, summary under 52ch, then a framed action or a mono "coming soon" note.
- Article rows: the whole row is one link; mono date (ink) and category left, title and summary right; the title turns accent on hover.

### Doc Section (signature)
Heading and an optional one-line graphite intro (plus an optional link) in the sticky margin column, content in the main column. Every section below a page opening uses it.

### Page Intro and Hero
The h1 sits in the main column with a lead paragraph capped at 52ch; the margin column holds the portrait (4:5) and a fact list – mono labels over sans values separated by rules. On home a full-width rule and a mono "Stack" row close the hero.

### Contact Block
The one dark block, closing every main page: ink ground bleeding to the container edge, margin heading in paper, a Fraunces statement (36px / 28px, max 34ch), LinkedIn as the paper-filled primary action, email as a text link beside it and the address in 70% paper mono below.

### Motion
One orchestrated moment: on load, the PageIntro/hero children rise 10px and fade in over 0.8s with cubic-bezier(0.16, 1, 0.3, 1), staggered by 80ms; the margin column continues the same sequence rather than starting in parallel. Under prefers-reduced-motion the content simply appears and smooth scrolling is off. Everything else is colour transitions on hover. No scroll reveals, no hover lifts or scales.

## Do's and Don'ts

### Do:
- **Do** build new sections from the existing blocks: DocSection, PageIntro, RuledRows, ProjectRows, ArticleRows, MainColumn, TextLink and the contact block.
- **Do** keep headings and classification in the margin column (1–3) and content in the main column (5–12), leaving column 4 empty on desktop.
- **Do** separate items with 1px stone rules and keep lists as ruled rows.
- **Do** use only paper, ink, muted, rule, accent, accent-dark and accent-light, and only the 4 / 8 / 16 / 24 / 48 / 96px spacing names.
- **Do** keep the h1 at least 3× body size on desktop; the mobile 42/18px ratio is the one recorded exception.
- **Do** cap running text at 52ch and bind spaced dashes to the preceding word so no line starts with a dash.
- **Do** keep WCAG AA contrast, the visible 2px accent focus outline, unbroken heading levels and no functional text below 11px.
- **Do** keep the existing generated project images (SH-Beach, LH-Leap, Digital Aristoteles, Darth Vader, Not Found) – the owner's explicit exception – shown whole in square frames.

### Don't:
- **Don't** use gradients (especially purple/blue/indigo), gradient text, aurora or glow backgrounds.
- **Don't** use drop shadows, glassmorphism or blur.
- **Don't** build identical three-column card grids, bento grids, icon-plus-heading tiles, or skill badges with logos.
- **Don't** use rounded pill buttons or pill badges above the headline ("New", "Available for work").
- **Don't** set kickers or eyebrows above headings, tracked uppercase labels, numbering on non-sequences, or arrows on links.
- **Don't** use Inter, Roboto, Open Sans, Space Grotesk or a system font stack, and don't load fonts from a CDN.
- **Don't** attach decorative icons to headings; icons are for function only (the mobile menu toggle).
- **Don't** scatter micro-animations, scroll reveals or hover scale; the staggered page opening is the only load animation.
- **Don't** use the light logo cyan for text or highlights on paper.
- **Don't** add new generated or stock images, invented figures, placeholder quotes or testimonials.
- **Don't** centre standard blocks in a Hero → Features → Testimonials → CTA sequence.

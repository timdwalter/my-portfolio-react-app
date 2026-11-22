# Portfolio – Tim D. Walter

Persönliche Portfolio-Website (Next.js 16, Pages Router, React 18, Tailwind 3, TypeScript), gehostet auf Vercel mit Node 26. Das Design-System ist in `DESIGN.md` dokumentiert.

- Inhalte zentral in `src/content/`: `site.ts` (Kontakt, Links, Flags), `en.ts` / `de.ts` (UI-Texte), `data.ts` (Projekte, Artikel, Skills, Branchen, Stationen)
- Zweisprachig über Next.js i18n: `en` (Standard) und `/de`. Jeder Text muss in beiden Sprachen gepflegt werden.
- `npm run dev` (Port 3000), `npm run build`, `npx tsc --noEmit`, `npx next lint`
- Design-Prüfung: `npx impeccable detect http://localhost:3000/<seite>` (Telemetrie ist aus); impeccable-Skills liegen in `.claude/skills/impeccable`

## Arbeitsweise

- Abschnittsweise vorgehen und nach jeder Phase auf Freigabe warten: umsetzen → audit/polish → Screenshots Desktop + Mobile → Freigabe.
- Nur Design, Layout-Rhythmus, Typografie und Formulierung ändern. Keine neuen Inhalte, Projekte, Zahlen oder Zitate erfinden.
- Bei Textänderungen immer Vorher/Nachher zeigen.
- Ton: direkt, nüchtern, erste Person, kurze aktive Sätze, keine Superlative. Konkret statt abstrakt: Problem → Entscheidung/Lösung → Ergebnis. Zahlen nur, wenn sie schon in den Texten stehen.

## Bausteine (wiederverwenden statt neu bauen)

- `src/components/ui/Doc.tsx`: `PageIntro` (Seitentitel + Randspalte), `DocSection` (Überschrift links, Inhalt rechts), `RuledRows` (Zeilen mit Trennlinien), `ProjectRows`, `ArticleRows`, `MainColumn`, `TextLink`, `nb()` (verhindert Gedankenstrich am Zeilenanfang)
- `src/components/ContactSection.tsx`: der einzige dunkle Block, LinkedIn als Hauptaktion
- CSS-Klassen in `globals.css`: `.container`, `.grid-12`, `.col-meta`, `.col-main`, `.col-wide`, `.meta`, `.link`, `.action`, `.stagger` (einzige Lade-Animation)
- Farben nur aus dem Theme: `paper`, `ink`, `muted`, `rule`, `accent`, `accent-dark`, `accent-light` (nur Logo) – es gibt keine anderen

## Design-System (verbindlich)

**Ziel:** Die Seite darf nicht nach KI-Template aussehen.

**Stilrichtung:** Reduziert und technisch mit redaktionellem Einschlag – wie eine technische Dokumentation oder ein Fachmagazin, nicht wie eine SaaS-Landingpage.

**Raster:**
- 12-Spalten-Grid, bewusst asymmetrisch: Label-/Meta-Spalte links (3 Spalten), Inhalt rechts (7–8 Spalten).
- Linksbündig. Zentrierter Text nur in begründeten Ausnahmen.
- Abstandsskala: 4 / 8 / 16 / 24 / 48 / 96 px – als Tailwind-Tokens `xs, sm, md, lg, xl, 2xl` (z. B. `pt-2xl`, `gap-x-lg`). In neu gestalteten Abschnitten nur diese verwenden; numerische Stufen stammen aus noch nicht überarbeiteten Abschnitten.
- Container: max. 1280px Inhalt, Rand 16 / 24 / 48px (`.container` in `globals.css`).
- Desktop-Raster: Meta-Spalte 1–3, Spalte 4 bleibt frei, Inhalt 5–12 (`.col-meta`, `.col-main`).
- Auf Mobile bricht das Raster sauber in eine Spalte um.

**Farben** (Tailwind `theme.colors` wird komplett überschrieben, nicht erweitert – Standardfarben wie `indigo-*` oder `purple-*` dürfen nicht verfügbar sein):

| Rolle | Wert |
|---|---|
| Hintergrund | `#F8F7F4` |
| Haupttext | `#111111` |
| Sekundärtext | `#555555` |
| Linien | `#D9D6CF` |
| Akzent (genau einer, sparsam: Links, aktiver Zustand, ein Highlight pro Abschnitt) | `#0E6F86` – 5,4:1 auf dem Hintergrund (AA); `accent-dark` `#0A5C70` für Hover. Das Logo nutzt dieselbe Farbe: Würfel in `accent-light` `#8FBAC3` (nur Logo, nie Text), `accent` und `accent-dark`. Das alte helle Logo-Cyan `#3DD8F5` wird nicht mehr verwendet. |

**Typografie:**
- Überschriften: `Fraunces` (alternativ `Newsreader`)
- Fließtext: `IBM Plex Sans`
- Metadaten, Jahreszahlen, Tech-Stack, Labels: `IBM Plex Mono`, klein, in normaler Schreibweise (keine gesperrten Großbuchstaben)
- Keine Kicker/Eyebrows über Überschriften; Einordnung gehört in die linke Meta-Spalte. Nummern nur bei echten Abfolgen, keine `→` an Links.
- Große Größensprünge (Headline mindestens 3× Fließtext), deutliche Gewichtsunterschiede
- Fließtext max. ca. 65–70 Zeichen pro Zeile, großzügiger Zeilenabstand, viel Weißraum
- Schriften selbst hosten (DSGVO) – `next/font` ist ok, keine Google-Fonts-Einbindung per CDN

**Komponenten:**
- Feine 1px-Linien statt Karten-Boxen. Projekte als Liste/Zeilen mit Trennlinien, nicht als Kachel-Grid.
- Scharfe Ecken (0–4px border-radius), keine Schatten.
- Buttons als Textlinks oder schlichte rechteckige Rahmen.
- Höchstens eine orchestrierte Einblend-Animation beim Laden (CSS, gestaffelt), sonst ruhig. `prefers-reduced-motion` respektieren.

**Qualität:** WCAG AA-Kontrast, sichtbarer Fokus-Zustand, semantisches HTML (keine übersprungenen Überschriftenebenen), funktionaler Text nicht unter 11px.

## Verbotsliste

- Generische Farbverläufe (vor allem Lila/Blau/Indigo), Gradient-Text, Aurora- oder Glow-Hintergründe
- Übertriebene Schlagschatten, Glassmorphism, Blur-Effekte
- Identische 3-Spalten-Karten-Grids, Bento-Grids, Icon-plus-Überschrift-Kacheln, Skill-Badges mit Logos
- Abgerundete Pill-Buttons und Pill-Badges über der Headline („New“, „Available for work“)
- Zentrierte Standard-Blöcke nach dem Schema Hero → Features → Testimonials → CTA
- Schriften: Inter, Roboto, Open Sans, Space Grotesk, System-Font-Stack
- Lucide-Icons (oder andere Icons) als Deko an jeder Überschrift
- Gestreute Micro-Animationen, Hover-Scale auf allem
- Marketing-Floskeln: „passionate“, „innovative“, „digital experiences“, „cutting-edge“, „seamless“, „leidenschaftlich“, „maßgeschneiderte Lösungen“
- Erfundene Zahlen, Platzhalter-Quotes, Fake-Testimonials, Stock- oder KI-Bilder
  - **Ausnahme (Tims Entscheidung):** die vorhandenen generierten Projektbilder in `public/` (SH-Beach, LH-Leap, Digital Aristoteles, Darth Vader) bleiben erlaubt. Keine neuen generierten Bilder hinzufügen.
  - **Ausnahme:** die Titelbilder von Tims Medium-Artikeln (`public/articles/*.webp`), einmalig von Medium geladen und selbst gehostet – nie live von Medium einbinden (Datenschutz). Neue Artikel: Bild aus dem RSS-Feed laden, als WebP speichern, in `data.ts` mit Breite/Höhe eintragen.

# Portfolio – Tim D. Walter

Persönliche Portfolio-Website (Next.js 13, Pages Router, Tailwind, TypeScript), gehostet auf Vercel.

- Inhalte zentral in `src/content/`: `site.ts` (Kontakt, Links, Flags), `en.ts` / `de.ts` (UI-Texte), `data.ts` (Projekte, Artikel, Skills, Branchen, Stationen)
- Zweisprachig über Next.js i18n: `en` (Standard) und `/de`. Jeder Text muss in beiden Sprachen gepflegt werden.
- `npm run dev` (Port 3000), `npm run build`, `npx tsc --noEmit`, `npx next lint`
- Design-Prüfung: `npx impeccable detect http://localhost:3000/<seite>` (Telemetrie ist aus); impeccable-Skills liegen in `.claude/skills/impeccable`

## Arbeitsweise

- Abschnittsweise vorgehen und nach jeder Phase auf Freigabe warten: umsetzen → audit/polish → Screenshots Desktop + Mobile → Freigabe.
- Nur Design, Layout-Rhythmus, Typografie und Formulierung ändern. Keine neuen Inhalte, Projekte, Zahlen oder Zitate erfinden.
- Bei Textänderungen immer Vorher/Nachher zeigen.
- Ton: direkt, nüchtern, erste Person, kurze aktive Sätze, keine Superlative. Konkret statt abstrakt: Problem → Entscheidung/Lösung → Ergebnis. Zahlen nur, wenn sie schon in den Texten stehen.

## Design-System (verbindlich)

**Ziel:** Die Seite darf nicht nach KI-Template aussehen.

**Stilrichtung:** Reduziert und technisch mit redaktionellem Einschlag – wie eine technische Dokumentation oder ein Fachmagazin, nicht wie eine SaaS-Landingpage.

**Raster:**
- 12-Spalten-Grid, bewusst asymmetrisch: Label-/Meta-Spalte links (3 Spalten), Inhalt rechts (7–8 Spalten).
- Linksbündig. Zentrierter Text nur in begründeten Ausnahmen.
- Abstandsskala: 4 / 8 / 16 / 24 / 48 / 96 px.
- Auf Mobile bricht das Raster sauber in eine Spalte um.

**Farben** (Tailwind `theme.colors` wird komplett überschrieben, nicht erweitert – Standardfarben wie `indigo-*` oder `purple-*` dürfen nicht verfügbar sein):

| Rolle | Wert |
|---|---|
| Hintergrund | `#F8F7F4` |
| Haupttext | `#111111` |
| Sekundärtext | `#555555` |
| Linien | `#D9D6CF` |
| Akzent (genau einer, sparsam: Links, aktiver Zustand, ein Highlight pro Abschnitt) | `#0E6F86` – Logo-Cyan, abgedunkelt; 5,4:1 auf dem Hintergrund (AA). Das helle Logo-Cyan `#3DD8F5` nur im Logo, nie für Text. |

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

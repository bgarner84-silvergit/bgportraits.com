# bgportraits.com — brand mini-system

Phase 1 deliverable. Boxed to what v1 needs: one type superfamily, a six-value
palette, a wordmark treatment, and the rules that keep them disciplined. The
full identity system — mark suite, guidelines, print collateral — is
post-launch.

Direction is locked in `project-brief.md` decisions 11–15: Direction A (elevated
hero-poster composites), a dark base, a sport feel, wordmark "Brandon Garner".
The structural reference is the Ferrari.com design system — full-bleed imagery,
hairline furniture, sharp corners, no elevation, the accent reserved for
interaction. This file adapts that reference to a sports-portrait site.

Style tile (visual reference): see the artifact link recorded in the session /
this file's commit message. This file is the source of truth for values.

## Principles

1. **The composite is the interface.** Every screen is 80%+ photograph. Site
   furniture — rules, captions, nav — is hairline-thin and recedes. Nothing
   decorative competes with the image.
2. **Poster grammar, not gallery grammar.** Headline text anchors bottom-left in
   a credit block, the way a poster carries its title. Captions carry the
   athlete's name, position, and year — the same metadata the printed posters
   carry. Type is condensed, set in the sports vernacular. Nothing is centered.
3. **One warm light source.** The amber accent is sampled from the stadium light
   already present in every composite, so the interface and the imagery are lit
   by the same source. Amber appears only as an interaction state and as the
   fill on the single primary button — never as a background or as decoration.
4. **Warm black, not clinical black.** The darks are warm-shifted a few points so
   the page reads as lit rather than switched-off, and so it bridges to the
   black-and-white print heirloom line planned for a later phase.

## Type

One superfamily — **Saira** — used at two widths, so display and text are
clearly distinct without a second typeface. Saira's squared, engineered
letterforms read as athletic-equipment and uniform lettering; the superfamily
runs from condensed to normal width, so the headlines, the wordmark, and the
body all share the same skeleton. Condensed weights carry the headlines only;
the wordmark sits in the normal (text) width — see the wordmark section for
why.

Self-host via Fontsource (`@fontsource/saira`, `@fontsource/saira-condensed`) in
the Astro build — no external font CDN, per the Phase 3 performance budget. The
style tile links Google Fonts only because an artifact cannot self-host.

Fallback stack: `"Saira Condensed", "Saira", "Arial Narrow", system-ui,
sans-serif` for display; `"Saira", system-ui, -apple-system, "Segoe UI", Roboto,
sans-serif` for text.

| Role | Face | Weight | Case | Tracking |
|---|---|---|---|---|
| Wordmark | Saira (normal) | 600 | Title case | +0.02em |
| Hero headline | Saira Condensed | 800 | Uppercase | −0.015em |
| Section title | Saira Condensed | 700 | Uppercase | −0.01em |
| Lead / intro body | Saira | 400 | Sentence | 0 |
| Body | Saira | 400 | Sentence | 0 |
| Caption, metadata | Saira | 500 | Sentence | 0 |
| Nav, button, label | Saira | 600 | Uppercase | +0.12em |

### Scale

Modular, roughly a perfect fourth (1.333) on desktop, tightened on mobile. Body
is 17px.

| Step | Desktop | Mobile |
|---|---|---|
| Hero headline | 72px / 1.02 | 40px / 1.05 |
| Section title | 40px / 1.1 | 30px / 1.15 |
| Subhead | 24px / 1.25 | 21px / 1.3 |
| Lead body | 20px / 1.5 | 19px / 1.5 |
| Body | 17px / 1.6 | 17px / 1.6 |
| Caption | 14px / 1.4 | 14px / 1.4 |
| Label | 12px / 1.3, +0.12em | 12px / 1.3, +0.12em |

### Usage rules

- Uppercase-plus-tracking is for navigational furniture only — the nav, button
  text, the footer's legal microcopy, and at most one section kicker where the
  content genuinely needs a label. Not above every heading; an all-caps eyebrow
  over every section is a template tell.
- Body copy caps at about 68 characters per line. The story section runs one
  narrow column.
- No italic in v1. If the poster-style forward slant is wanted later, it gets
  tested on its own rather than sprinkled through the page.
- One change per step of hierarchy — don't stack size, weight, colour, and case
  changes on the same jump.

## Colour

Six values, each with one job, warm-shifted throughout.

| Token | Hex | Job |
|---|---|---|
| `--black` | `#000000` | Canvas; hero and portfolio backgrounds |
| `--carbon` | `#14110F` | Secondary surfaces — footer, the form panel |
| `--graphite` | `#2C2825` | 1px dividers and borders — the only structural lines |
| `--ash` | `#8C8681` | Captions, metadata, muted text |
| `--bone` | `#F2EEE7` | Primary text, wordmark |
| `--amber` | `#F5852B` | Interaction states; fill on the one primary button |

### Colour rules

- Amber is never a background wash or a decorative block. Its only fills are the
  primary call-to-action and the focus ring. Everywhere else it appears as a
  hover underline or an active-state colour.
- Text on amber is `--black`, not `--bone`.
- Body text is `--bone` on `--black` — a warm off-white, not pure `#FFFFFF`,
  which vibrates on black and reads colder than the photography.
- Dividers are the only lines. No boxes, no shadows, no elevation. What needs
  separating gets a 1px `--graphite` rule or whitespace.
- Contrast: `--bone` on `--black` ≈ 18:1; `--ash` on `--black` ≈ 5.6:1
  (body-safe); `--black` on `--amber` ≈ 7:1. All pass WCAG AA.

## Wordmark

"Brandon Garner", set in Saira normal-width 600, title case, tracking +0.02em,
in `--bone`. It is deliberately **not** set in the condensed display cut:
condensed titling on a personal name reads as movie-poster lettering rather than
a photographer's byline. The normal width, a touch of positive tracking, and the
semibold weight give it a considered, set quality without drama. No icon or
monogram in v1 — the name is the mark. It sits top-left, small (about 18px), on
the nav baseline. On the hero it sits directly over the image with no plate or
scrim behind it; if a specific photo kills legibility, the fix is photo
selection, not a box.

Reserved for later: a "BG" monogram for the favicon and social avatars, drawn
from the same condensed forms. Not needed to launch.

## Placeholder copy

Final copy is Phase 4. The style tile uses a working hero line so the type has
something real to carry:

- Working: "One athlete. One portrait that owns the wall."
- Alternates to weigh in Phase 4:
  - "The portrait your athlete earns."
  - "Built one athlete at a time."
  - "The portrait you'll frame for twenty years."

Primary button label: "Request a session" — honest, since the form opens an
inquiry into GoHighLevel rather than a live booking.

## What this unlocks

Phase 3 drops these tokens into the Astro build as CSS custom properties on
`:root`. Phase 2 grades the composites to sit on `--black` with the `--amber`
light already in frame.

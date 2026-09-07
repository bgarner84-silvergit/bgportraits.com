# Portfolio images

Composited hero images for the homepage gallery. Brandon exports these from
Photoshop after the compositing and grading work in Phase 2. Astro generates the
responsive AVIF / WebP / JPEG variants at build time from whatever sits here — no
standalone script.

## What goes here

- The final composited hero set — 12 to 16 images (`project-brief.md` decision
  11: Direction A hero-poster composites).
- Web masters only. Print-resolution masters stay off the repo — see
  `.gitignore` and `docs/project-plan.md` Phase 2.

## Export specs — web master

| Setting | Value |
|---|---|
| Format | JPEG, quality 90 |
| Colour | sRGB, embedded profile |
| Long edge | 2400px |
| Metadata | keep copyright / IPTC; strip GPS and camera serial |
| Sharpening | standard screen output sharpening only — Astro's resize does the rest |

Set this once as a Lightroom / Photoshop export preset so every drop is
consistent. Astro re-compresses on build, so this file is the quality source of
truth, not the final delivered bytes.

## Naming

`NN-athlete-shot.jpg` — all lowercase, hyphen-separated:

- `NN` — two-digit gallery order, `01` first
- `athlete` — first name or short slug (`jack`)
- `shot` — `action`, `portrait`, `helmet`, `field`, `tunnel`, etc.

Examples: `01-jack-action.jpg`, `02-jack-portrait.jpg`, `03-jack-helmet.jpg`

Renumber files to reorder the gallery. Keep the sequence contiguous — no gaps.

## How it gets used

Phase 3 imports these through `astro:assets` and renders them with `<Picture>`,
which emits AVIF + WebP + JPEG at 640 / 1024 / 1600 / 2400 with correct
`srcset`, explicit dimensions (no layout shift), and lazy-loading below the
fold. Nothing to run by hand.

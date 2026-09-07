# Repo structure & rebrand workflow

## Branches

- **`main`** — serves the current live coming-soon site (`index.html`,
  `privacy.html`, `terms.html`) at bgportraits.com via the existing Cloudflare
  Pages project. Left untouched until launch.
- **`rebrand`** — all rebuild work. The Astro project is scaffolded at the repo
  root here. Merges to `main` at Phase 5 launch.

## Layout (on `rebrand`)

```
/                     repo root = the Astro project (once scaffolded, Phase 0)
├── src/              pages, components, layouts
├── public/
│   └── assets/       optimized web images the site ships
├── docs/             planning + compliance artifacts
│   ├── project-brief.md
│   ├── project-plan.md
│   ├── gaps.md
│   ├── repo-structure.md   (this file)
│   └── widget-prechat.png  (A2P proof-of-consent artifact)
├── design/           source material — NOT shipped by the site
│   ├── DSC_*.jpg, Jack Shepherd v*.jpg   raw shoot frames
│   └── Signature v2.png
├── astro.config.mjs
├── package.json
└── .gitignore
```

- `index.html` / `privacy.html` / `terms.html` stay at root for now. Ported into
  Astro pages during Phase 3, then removed.
- `design/` is kept in the repo but never served. Phase 2 produces compressed
  derivatives into `public/assets/portfolio/`.
- Print-resolution masters are **not** committed — see `.gitignore` and
  `project-plan.md` Phase 2.

## Cloudflare Pages

Pages build config is project-wide, not per-branch, so the live project cannot
run an Astro build while `main` is still plain HTML.

1. Create a **second** Pages project pointed at this repo, production branch
   `rebrand`, build command `npm run build`, output directory `dist`. Gives a
   preview URL (e.g. `bgportraits-rebrand.pages.dev`) with no risk to the live
   domain.
2. Build through Phases 0–4 on `rebrand`, committing at each working state.
3. **Launch (Phase 5):** merge `rebrand` → `main`, then move the custom domain
   onto the new project (or switch the original project's build settings to
   Astro). Delete the throwaway preview project.

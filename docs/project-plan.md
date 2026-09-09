# bgportraits.com — sequenced build plan

Derived from `project-brief.md` and the decisions locked 2026-09-07
(sessions 1–2, brief items 1–15). Target: v1 live in ~4 weeks at 5–10 hrs/week.
Sessions are sized to a single evening and each ends at a working, committed
state.

Who does what: **Brandon** owns the camera-side work (culling, editing, the
signed release) and final taste calls. **Claude** owns scaffolding, the image
optimization scripts, the site build, copy drafts, SEO/accessibility, and
deploy. Every phase ends with a commit and, from Phase 0 on, a live Cloudflare
Pages preview URL.

---

## Status — start here (updated 2026-09-07, session 3)

**Branch:** `rebrand`, pushed to GitHub. `main` still serves the live
coming-soon site, untouched.

**Session 3:** Brandon exported 87 frames into `design/cull/`. Claude ranked
them and proposed a 14-image hero set with 12 alternates.

**Session 4:** Ran the cutout pass on the 14 (transparent PNGs in
`design/cull/nobg/`) and re-scored each into a portfolio / graphic / both
role — see the "Cutout pass + re-score" section of `docs/cull-shortlist.md`
and the review sheets in `design/cull/`. One swap recommended (`8926` →
`8902`); the set is entirely front-facing (no back-of-jersey shot).

**Session 5 — Phase 3 site built.** The v1 single-page site is built and
passing. Decisions taken with Brandon this session are recorded in
`project-brief.md` decisions 16–22. Detail below under Phase 3.

**Awaiting Brandon:** review the preview build, then stand up the second
Cloudflare Pages project so there is a shareable preview URL, then approve
the domain cutover. Nothing is committed yet.

**Done so far:**

- Repo restructured: `docs/`, `design/`, Astro-ready `.gitignore`.
- Astro scaffolded at repo root, builds clean (`npm run build`).
- Visual direction locked — Direction A, dark base, sport feel, "Brandon Garner"
  wordmark (`project-brief.md` decisions 11–15).
- Brand mini-system done: `docs/brand.md` + style-tile artifact
  (link in git log for commit `5b2ca0c`).
- Image pipeline decided: `src/assets/portfolio/` + Astro `<Picture>`, no custom
  script. Export specs and naming in that folder's README.
- Likeness-release plain template drafted: `docs/likeness-release.md`.

**Next task: lock the hero set (Phase 2, step 1 → 2).** The cull ranking is
done — `docs/cull-shortlist.md` proposes 14 picks in gallery order plus 12
alternates. Steps for Brandon:

1. Review `HERO-SET.jpg` / `ALTERNATES.jpg` / `sheet-1..3.jpg` (on the phone).
2. Confirm or edit the 14 — swap from alternates, reorder, change the count
   within 12–16.
3. Decide the face question flagged in the shortlist: lean into visor-down for
   v1, or schedule a short helmet-off reshoot.
4. Composite and grade the locked set in Photoshop (isolate, drop onto
   art-directed stadium backgrounds — vary background, crop, and scale across
   the set — grade to the `brand.md` palette, retouch).
5. Export web masters into `src/assets/portfolio/` per that folder's README
   (`NN-jack-shot.jpg`, 2400px, JPEG q90, sRGB) and commit.

`design/cull/` is throwaway — it can be deleted or git-ignored once the hero set
is chosen.

**Also open (not blocking the cull):**

- Get `docs/likeness-release.md` reviewed by a Texas attorney, then filled and
  signed. Needed before any shoot photo goes public.
- Stand up the second Cloudflare Pages project on the `rebrand` branch for a
  preview URL (see `repo-structure.md`). Claude can walk through it.

---

## Phase 0 — Rights & project setup
**~2 hrs. Claude-led, one task for Brandon.**

- [~] Brandon: get a one-page likeness release signed by the athlete's parent/
  guardian. Keep the SMS approval screenshot with it. Plain template supplied at
  `docs/likeness-release.md` — needs a Texas attorney's review before use
  (minor + intended for paid ads). Still to do: legal review, fill, sign.
- [x] Claude: `rebrand` branch created; Astro scaffolded at repo root, builds
  clean; `docs/` and `design/` established; `.gitignore` added. See
  `repo-structure.md`. *(2026-09-07, session 2)*
- [ ] Claude: confirm Cloudflare Pages builds from the repo — stand up the
  second Pages project pointed at the `rebrand` branch for a preview URL.
- [x] Image staging + naming convention established: `src/assets/portfolio/`
  with a README (export specs + `NN-athlete-shot.jpg` naming). *(2026-09-07,
  session 2)*
- [x] `privacy.html`, `terms.html`, `widget-prechat.png` preserved (legal pages
  still at repo root untouched; `widget-prechat.png` moved to `docs/`).
- **Working state:** Astro starter builds locally; legal pages still reachable.
  Cloudflare preview URL still outstanding.

## Phase 1 — Brand mini-system
**~3 hrs. Collaborative.**

Full rebrand, but boxed for v1 to what the site actually needs. Locked direction
(brief decisions 11, 15): Direction A — elevated hero-poster look, dark base, but
the site *feel* is sport, not museum; energy from type, pacing, and motion.

- One display typeface + one text typeface.
- A 3–4 color palette with a single accent.
- A wordmark treatment for "Brandon Garner" (decided, brief decision 14).
- One reference direction agreed via the `frontend-design` skill; output a
  one-page style tile (design canvas artifact).
- Deliverable: `brand.md` with the type and color tokens.
- **Out of scope now:** logo icon/mark suite, full brand guidelines, print
  collateral, business cards. These are post-launch.
- **Working state:** locked type + color tokens ready to drop into the site.

## Phase 2 — Photo pipeline
**Two ~3 hr sessions. Brandon-led, Claude assists.**

- Cull 80+ → shortlist ~24 → final hero set of **12–16**. Claude can help rank
  from exported contact sheets; Brandon makes the calls.
- Build the hero set in Lightroom/Photoshop: isolate the subject (clean edge,
  hair refinement), composite onto an art-directed background (stadium light,
  atmosphere, action), color-grade to the brand palette, retouch. The dramatic
  background is the point (brief decision 11); Firefly generative fill for
  cleanup and for extending or backing elements as needed.
- Export two derivatives per image:
  - **Web master:** long edge 2400px, sRGB, JPEG q90, into
    `src/assets/portfolio/` (git-tracked). Full specs and naming in that
    folder's README.
  - **Print master:** full resolution, kept local + backed up, **not** committed
    to the repo.
- Responsive variants (AVIF / WebP / JPEG at 640 / 1024 / 1600 / 2400) are
  generated at build time by Astro's `<Picture>` / `astro:assets` (Sharp),
  wired in Phase 3 — no standalone script. A pre-export script only returns if
  the deferred athlete-asset product needs files outside the build.
- **Working state:** `src/assets/portfolio/` holds the composited web masters
  for the whole hero set, named and ordered; Astro produces the responsive sets
  at build.

## Phase 3 — Site build
**Two ~4 hr sessions. Claude-led.**

- Build the single scrolling page in Astro:
  - Hero (one signature image, wordmark, one line of positioning, primary CTA).
  - Portfolio gallery — the hero composites, few and large.
  - Story / positioning section — one-on-one, art-directed per athlete,
    executed past what the volume team shooters deliver.
  - Services overview — custom portraits; prints as "inquire".
  - Inquiry form wired to GoHighLevel.
  - Footer with the registered business name, address, and phone.
- Re-embed the LeadConnector widget (ID `6a94ed46852536cc91868a08`), both
  consent checkboxes unchecked by default.
- Port `privacy.html` / `terms.html` into the build, substance unchanged.
- Use Astro `<Picture>` for responsive images; explicit width/height to prevent
  layout shift; lazy-load everything below the fold.
- **Performance budget:** Lighthouse performance ≥ 95, LCP < 2.5s, CLS < 0.1,
  first-view transfer < 1.5 MB. Verified before the phase closes.
- **Working state:** full site on a Pages preview URL, hitting the budget.

### Built 2026-09-08 (session 5)

Single scrolling page: hero → Selected work → Approach → Packages → About →
Request a session → footer. Legal pages at `/privacy` and `/terms`.

- **Stack.** Astro 7 static at repo root. Hand-written CSS against the
  `brand.md` tokens (`src/styles/tokens.css`, `global.css`) — no Tailwind, so
  there is only one type/colour rulebook. Saira self-hosted via
  `@fontsource-variable/saira` (`wdth.css` — one variable file carries both the
  weight and width axes, so the condensed display cut and the normal-width text
  cut come from the same file). No external font CDN.
- **Content is data, not markup.** `src/data/site.ts` (NAP, widget id, nav),
  `portfolio.ts` (gallery items + alt text + captions), `packages.ts` (tiers).
  Reordering the gallery or renaming a tier is a data edit. The later
  multi-page build reuses these directly.
- **Images.** `astro:assets` `<Picture>` emits AVIF/WebP/JPEG at several widths
  with correct `srcset` and explicit dimensions. Gallery tiles are fixed 4:5
  boxes with `object-fit: cover`; feature tiles are capped by viewport height.
  Without that, a portrait source at full container width renders ~1600px tall
  and the page becomes unusable.
- **Contact.** LeadConnector widget only, re-embedded verbatim via
  `components/ChatWidget.astro` with `is:inline` so Astro does not bundle or
  defer the vendor loader. Consent copy and both-unchecked behaviour untouched.

**Measured (Lighthouse, desktop preset, production build):**

| | Result | Budget |
|---|---|---|
| Performance | **100** | ≥ 95 |
| LCP | **0.7 s** | < 2.5 s |
| CLS | **0.005** | < 0.1 |
| Total transfer | **839 KiB** | < 1.5 MB |
| SEO | **100** | — |
| Accessibility | 95 | — |
| Best practices | 78 | — |

Accessibility and best-practices are held down entirely by the LeadConnector
widget — an invalid `aria-activedescendant` in its phone-input, its
`font-display`-less Roboto from fonts.bunny.net, and its third-party cookies.
Re-running with `*leadconnectorhq*` blocked scores **100 / 100 / 100 / 100**,
so the site's own markup is clean. Fixing those means changing the widget,
which is off-limits.

## Phase 4 — Copy, SEO, accessibility
**~3 hrs. Claude-led, Brandon approves copy.**

- Final copy: headline, positioning paragraph, service descriptions, about, CTA.
- SEO: title/meta/OpenGraph, favicon, `sitemap.xml`, `robots.txt`,
  LocalBusiness + Photograph structured data.
- Accessibility: alt text on every image, visible focus states, contrast check,
  `prefers-reduced-motion` respected.
- **Working state:** launch-ready on preview.

## Phase 5 — Launch & A2P resubmission
**~2 hrs.**

- Point the production domain at the new build on Cloudflare.
- Verify live: privacy/terms URLs, consent widget behavior, footer NAP.
- Refresh `widget-prechat.png` if the widget UI changed.
- Read `reference/a2p-10dlc-playbook.md`, then resubmit the A2P 10DLC
  customer-care campaign referencing the live site. Note for the reviewer that
  the site is now a functioning business site. Warn whoever is listed as the
  brand contact that they may be contacted.
- **Working state:** live site; A2P campaign resubmitted.

---

## Deferred to post-launch backlog

- Print store / e-commerce checkout with lab integration.
- Private client proofing and delivery galleries.
- The athlete DIY-AI cutout product and its self-serve delivery flow.
- The black-and-white fine-art heirloom line — clean editorial isolation,
  gallery prints (former Direction B; brief decision 13).
- AI-generated scenes (Midjourney-class) and image-to-video (needs a video
  tool; revisit when budget allows).
- Full brand identity system and print collateral.
- A second shoot — see honest flags below.

## Honest flags

- **Rebrand vs. timeline.** A full rebrand inside a 4-week, 5–10 hr/week window
  is the binding constraint. The plan boxes it to type + color + wordmark.
  Expanding it past that is the most likely reason the timeline slips.
- **Release.** SMS approval from the parents is good faith, not a signed
  release, and the athlete is likely a minor. Get one signed before these
  photos run in any paid ad. Building the site now is fine.
- **Thin portfolio.** One shoot, one athlete is a small body of work. The
  single-page, few-and-large design is partly a response to that. A second
  shoot should be an early post-launch priority for credibility.
- **Compositing scope.** Direction A means every hero image is a Photoshop
  composite — subject isolated, dropped onto an art-directed background, graded
  and retouched. That is real hands-on Photoshop time per image and the binding
  cost in Phase 2. Still out of v1: AI-generated scenes (Midjourney-class) and
  image-to-video, on both budget and quality grounds.

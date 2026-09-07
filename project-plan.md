# bgportraits.com — sequenced build plan

Derived from `project-brief.md` and the 10 decisions locked 2026-09-07.
Target: v1 live in ~4 weeks at 5–10 hrs/week. Sessions are sized to a single
evening and each ends at a working, committed state.

Who does what: **Brandon** owns the camera-side work (culling, editing, the
signed release) and final taste calls. **Claude** owns scaffolding, the image
optimization scripts, the site build, copy drafts, SEO/accessibility, and
deploy. Every phase ends with a commit and, from Phase 0 on, a live Cloudflare
Pages preview URL.

---

## Phase 0 — Rights & project setup
**~2 hrs. Claude-led, one task for Brandon.**

- Brandon: get a one-page likeness release signed by the athlete's parent/
  guardian. Keep the SMS approval screenshot with it. (Claude will supply a
  plain template.)
- Claude: scaffold an Astro project in the existing repo
  (`bgarner84-silvergit/bgportraits.com`), confirm Cloudflare Pages builds from
  the repo, establish `/src`, `/public/assets`, and an image-naming convention
  (`portfolio-01-action.jpg`, etc.).
- Claude: move `privacy.html`, `terms.html`, and `widget-prechat.png` into the
  new structure untouched for now.
- **Working state:** Astro starter deploying to a Pages preview URL; legal pages
  still reachable.

## Phase 1 — Brand mini-system
**~3 hrs. Collaborative.**

Full rebrand, but boxed for v1 to what the site actually needs:

- One display typeface + one text typeface.
- A 3–4 color palette with a single accent.
- A wordmark treatment ("Brandon Garner" / "BG Portraits" — decide which).
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
- Edit the hero set in Lightroom/Photoshop: color grade to the brand palette,
  retouch, isolate the subject (clean edge, hair refinement). Firefly generative
  fill only for minor cleanup (dust, stray elements) — not for backgrounds.
- Export two derivatives per image:
  - **Web master:** long edge ~2400px, sRGB, uncompressed, into the repo staging
    folder.
  - **Print master:** full resolution, kept local + backed up, **not** committed
    to the repo.
- Claude: build a repo script that generates AVIF + WebP + JPG fallback at
  responsive widths (640 / 1024 / 1600 / 2400) for every web master.
- **Working state:** `/public/assets/portfolio/` holds optimized, responsive
  image sets for the whole hero set.

## Phase 3 — Site build
**Two ~4 hr sessions. Claude-led.**

- Build the single scrolling page in Astro:
  - Hero (one signature image, wordmark, one line of positioning, primary CTA).
  - Portfolio gallery — the editorial isolations, few and large.
  - Story / positioning section — niche, one-on-one, not high-volume.
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
- AI composites and image-to-video (needs Midjourney + a video tool; revisit
  when budget allows).
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
- **AI scope.** Clean editorial isolation is a Photoshop job, not an AI job.
  Keeping AI video and heavy composites out of v1 is the right call on both
  budget and quality grounds.

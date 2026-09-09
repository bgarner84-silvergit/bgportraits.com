# bgportraits.com — redesign & content brief

## What this is

Brandon Garner Photography (bgportraits.com). Replace the current coming-soon
page with a high-end custom site built around a single football shoot, and stand
up the photo-to-asset pipeline and the service model behind it.

Supersedes the 2026-09-01 "rebuild directly, no design phase" note in `gaps.md`.
A design and planning phase is now in scope, using Claude Code design/planning
skills and, where useful, dedicated repos. The goal Brandon stated: a site that
reads like an expensive ($10k-tier) custom build, not a template.

## Positioning

- Niche, highly custom, one-on-one work with individual athletes. Every piece is
  art-directed and composited for that one athlete — not a batch preset run
  across a whole team.
- Same dramatic sports-portrait *look* as the high-volume team shooters —
  stadium light, atmosphere, action — but executed at a level they do not reach:
  real retouching, custom composition, a finished hero piece built for the wall.
  The differentiator is execution and one-on-one service, not a different genre.
- Primary buyer: **parents** commissioning a standout hero portrait of their
  athlete.
- Deferred to later phases: the athlete-facing cutout / DIY-AI asset product,
  and the black-and-white fine-art heirloom line (see decision 13).

## Content in hand

- One shoot, one football player.
- ~80+ frames: static portraits + action portraits.
- All raw. Need subject isolation, compositing, and polish before they are
  usable as assets.
- No video. Short AI clips from stills and AI-generated scene imagery are a
  post-v1 idea only (decision 7).

## Pipeline (raw -> usable)

1. Cull ~80 frames to a hero set (target 12–20).
2. Build the hero set: isolate the subject, composite onto an art-directed
   background (stadium light, atmosphere, action), color-grade, retouch. This is
   Photoshop compositing, not clean gallery isolation — the dramatic background
   is the point (decision 11).
3. Derivative assets:
   - Web: resize, compress, AVIF/WebP, responsive sizes. Fast, reliable load is
     a first-class requirement, not a finishing step.
   - Print: high-res masters held back, not published to the web.
4. Post-v1 only: AI scene composites and short AI video from selected stills.

## Delivery / service model

v1 (Direction A):

- **The hero portrait** — one finished, art-directed composite per athlete,
  delivered as a high-res digital file ready for print, plus web-sized copies.
- **Large prints (16x20 and up)** — need true high resolution; AI upscales do
  not hold detail at that size, so these get professional treatment. Archival
  paper; anti-reflection glass on framed pieces. Presented as a service with an
  inquiry path in v1 (decision 8).

Later phases:

- **Black-and-white fine-art heirloom line** — clean editorial isolation,
  subject on black / white / subtle gradient, gallery prints. This is the former
  Direction B (decision 13).
- **Athlete cutout / DIY-AI assets** — transparent PNGs so athletes can run
  their own AI work, with a self-serve delivery flow.

## Hosting & repo

- Domain owned; hosted on Cloudflare.
- GitHub repo: `bgarner84-silvergit/bgportraits.com`.

## Preserve on rebuild (from gaps.md)

- `privacy.html`, `terms.html`.
- Footer registered business address + phone.
- LeadConnector chat widget ID `6a94ed46852536cc91868a08`, both consent
  checkboxes unchecked by default.
- `widget-prechat.png` — A2P proof-of-consent artifact.
- Approved SMS-consent wording — do not regress. Detail lives in the A2P
  playbook (`reference/a2p-10dlc-playbook.md`); read it before touching anything
  SMS- or privacy-policy-related.

## This also unblocks A2P

The A2P 10DLC customer-care campaign was denied (error 30922) because the site
is under construction. A real, functioning site clears that and lets the SMS
automation convert leads into GoHighLevel.

## Decisions locked 2026-09-07

1. **Likeness rights.** Brandon asked the parents by SMS and they approved.
   Documented, but not a signed release, and the athlete is likely a minor.
   Action: get a one-page guardian-signed likeness release on file; keep the SMS
   approval as supporting proof. Not a blocker for building the site; is a
   blocker before the photos run in any paid advertising.
2. **v1 scope.** Single scrolling page — hero, portfolio, story, inquiry form
   into GoHighLevel. No store, no client galleries in v1.
3. **Build stack.** Astro on Cloudflare Pages, in the existing GitHub repo.
4. **Primary audience.** Parents paying for premium custom portraits. (Refined
   by decision 12: the v1 product is the hero portrait; fine-art prints are a
   Phase 2 inquiry path.)
5. **Editing tools.** Lightroom + Photoshop (Firefly generative included).
   Enough for proper subject isolation and large-print retouch.
6. **Cutout treatment.** Clean editorial isolation — subject on black / white /
   subtle gradient. **Superseded by decision 11** for v1; this treatment moves
   to the deferred heirloom line (decision 13).
7. **AI tools available.** Firefly / Photoshop generative, plus Gemini / ChatGPT
   image. No Midjourney, no video tools. Hero compositing in v1 is a Photoshop
   job (see decision 11); AI-generated scenes and AI video stay out of v1 on
   both budget and quality grounds.
8. **Prints.** Phase 2. v1 presents prints as a service with an inquiry path.
9. **Brand.** Full rebrand — new wordmark, type, and color. Boxed to a
   mini-system for v1 (see plan); full identity system is post-launch.
10. **Timeline / budget.** ~4 weeks to v1 at 5–10 hrs/week. Under ~$50/mo —
    covered by the existing Adobe plan plus free Cloudflare Pages.

## Decisions locked 2026-09-07 (session 2 — visual direction)

These refine or supersede the list above.

11. **Visual direction — Direction A.** v1 is the elevated hero-poster look:
    dramatic, art-directed sports composites (stadium light, atmosphere, action),
    one custom piece per athlete, executed well past what the high-volume team
    shooters deliver. This **supersedes decision 6** — clean editorial isolation
    is no longer the v1 treatment.
12. **Audience within Direction A.** Still parents (decision 4 stands). The
    product they buy is the hero portrait itself; fine-art prints stay a Phase 2
    inquiry path (decision 8 stands).
13. **Black-and-white fine-art heirloom line — deferred.** The clean-isolation,
    gallery-print offer (former Direction B) becomes a later-phase secondary
    product, not part of v1.
14. **Wordmark — "Brandon Garner."** Personal name, not "BG Portraits." The
    positioning is one-on-one work with him, so the name is the brand. Closes the
    open question in `project-plan.md` Phase 1.
15. **Site feel — sport, not pure gallery.** The site itself carries athletic
    tension in typography, pacing, and motion — it should not read as a quiet
    museum site. A dark base still applies; the energy comes from type and
    composition, not from a busy background.

## Decisions locked 2026-09-08 (session 5 — the A2P build)

16. **What ships for the A2P resubmission.** "Presentable to prospects" — clean,
    on-brand, reads as a real working business. Not the full high-end build.
    Chosen over "minimum to pass" because the reviewer judges whether the whole
    site looks like a real operating business, and that is what denied it once.
17. **Site structure.** One scrolling page, but content lives in typed data
    files (`src/data/*.ts`) and components, so the later multi-page build reuses
    it rather than being rewritten.
18. **Pricing.** Named packages with what is included, no public prices; every
    tier routes to "Request pricing". Signals a real business without
    committing to numbers. Tiers: **Future Star**, **Future Legend**,
    **Champions Legacy** (inclusions drafted in `src/data/packages.ts`, Brandon
    owns final wording).
19. **Contact.** LeadConnector chat widget only. It carries the SMS-consent
    wording that passed review and the `widget-prechat.png` artifact; a second
    native form would put that at risk for no A2P benefit. Native form is a
    fast-follow.
20. **Go-live.** Deploy to a Cloudflare preview URL, Brandon reviews, then cut
    the domain over. A2P needs bgportraits.com itself serving the new site
    before resubmitting.
21. **Portfolio is football only for v1.** The two Savanah soccer composites are
    held back. Two athletes in two sports would broaden the shopfront toward
    what the volume team shooters do and undercut the one-on-one positioning in
    decisions 1–3 and 11. Revisit when the portfolio goes multi-page.
22. **No CSS framework.** Tailwind would be a second rulebook fighting the
    `brand.md` type and colour system. CSS is written directly against the
    brand tokens.

## Status

Repo prepared: `rebrand` branch created, Astro scaffolded at repo root, builds
clean (see `repo-structure.md`). Visual direction locked (decisions 11–15).
Phase 1 (brand) and Phase 3 (site build) are done — the v1 page is built and
hitting the performance budget (see `project-plan.md`). Remaining before the
A2P resubmission: Cloudflare preview project, Brandon's review, domain cutover.

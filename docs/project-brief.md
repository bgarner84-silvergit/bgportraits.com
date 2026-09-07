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

- Niche, highly custom, one-on-one work with individual athletes.
- **Not** bulk / high-volume / team sports photography. That is the competition,
  not this.
- Two buyers:
  - **Parents** who want the high-quality human touch and fine-art prints.
  - **Athletes** who want social-ready cutouts and assets they can run their
    own AI on.

## Content in hand

- One shoot, one football player.
- ~80+ frames: static portraits + action portraits.
- All raw. Need background removal + polish before they are usable as assets.
- No video. Open to generating short AI clips from stills, and to AI-generated
  imagery that supports the sports-portrait look.

## Pipeline (raw -> usable)

1. Cull ~80 frames to a hero set (target 12–20).
2. Edit the hero set: color, cleanup, background removal / subject isolation.
3. Derivative assets:
   - Web: resize, compress, AVIF/WebP, responsive sizes. Fast, reliable load is
     a first-class requirement, not a finishing step.
   - Print: high-res masters held back, not published to the web.
4. Optional: AI composites and short AI video from selected stills.

## Delivery / service model

- **Digital + cutouts** — transparent PNGs so athletes can do their own AI work.
- **Parent premium** — finished retouched files and prints with a human touch.
- **Large prints (16x20 and up)** — need true high resolution; AI upscales do
  not hold detail at that size, so these get professional treatment. Archival
  paper; anti-reflection glass on framed pieces.

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
4. **Primary audience.** Parents paying for premium custom portraits and
   fine-art prints.
5. **Editing tools.** Lightroom + Photoshop (Firefly generative included).
   Enough for proper subject isolation and large-print retouch.
6. **Cutout treatment.** Clean editorial isolation — subject on black / white /
   subtle gradient.
7. **AI tools available.** Firefly / Photoshop generative, plus Gemini / ChatGPT
   image. No Midjourney, no video tools. AI video and heavy AI composites are
   out of v1 on both budget and fit grounds.
8. **Prints.** Phase 2. v1 presents prints as a service with an inquiry path.
9. **Brand.** Full rebrand — new wordmark, type, and color. Boxed to a
   mini-system for v1 (see plan); full identity system is post-launch.
10. **Timeline / budget.** ~4 weeks to v1 at 5–10 hrs/week. Under ~$50/mo —
    covered by the existing Adobe plan plus free Cloudflare Pages.

## Status

Decisions locked. Sequenced build plan in `project-plan.md`. Next session
starts at Phase 0.

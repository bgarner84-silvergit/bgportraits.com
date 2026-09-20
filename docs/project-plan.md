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

## Status — start here (updated 2026-09-20, session 13)

**Session 13: the deferred pricing/offer board case ran, corrected itself mid-flight on a
production-model disclosure, and the season plan is now locked.** No `src/` edits this
session — the whole session was strategy, run and recorded in
`docs/pricing-offer-board.md`. That file is now the authority on pricing and offer
structure; this entry is the summary.

**1. The board ran four genuinely independent seats** (Hormozi, Dunford, Sandler,
Economics — method proved 2026-09-14, see `AI-Sales-Boardroom\18_MEMORY.md`) against
Brandon's ask: build a Hormozi-style Grand Slam top-down, then a Founding Families
capture offer, inside the 60-day football season window.

**2. Mid-run, Brandon disclosed the real production model, and two seats reversed their
own central recommendations.** He does not build composites himself — he built an
annotation tool to spec the work, commissions execution from outside editors (~$25–$75,
three tested), buys the layered source PSD, and does a ~0.5 hr finishing pass. That is
roughly **4x cheaper and 6x less of his time** than the cost sheet's $370/3hr assumption.
Hormozi and Economics were both resumed and both reversed their "cap composites at 1–2"
rule — composites are vendor cash now, not scarce hours. Economics also retracted its own
closing verdict that photography was a proving-ground hobby, not an income vehicle: at
$3,500 and 4 clients/month it now models ~$80K/year. Full retraction tables in the packet.

**3. Two more facts changed the plan.** Brandon has a **warm channel** — team parents, a
coach or two, current/recent seniors connected to a local private school — which is the
single most valuable fact in the run and the reason the season goal moved from "tight" to
"plausible." And the one prior $200 test engagement is **not a reference customer** — the
family didn't know what they were buying, is lower-budget, and isn't in-market. It's a
feedback channel only. There is **zero willingness-to-pay evidence at any price**, which
the board named as the season's actual deliverable to go get.

**4. Decisions locked 2026-09-20** (full detail and reasoning in the packet's "DECIDED"
section):

| | |
|---|---|
| Flagship | **$3,500**, 5 composites + framed archival piece |
| Founding Families | **$2,250 × 3 seats, hard cap** — Hormozi's figure, chosen over Economics' lower $1,650 because the channel is a closed, talkative private-school network and whatever leaks becomes the community price |
| Published ladder | Three tiers: The Legacy Collection $5,300 (anchor) / The Legacy Commission $3,500 (flagship) / The Framed Portrait $1,950 |
| Positioning | **Full commission reframe** before any outreach — category line, before/after, archival demoted from close to proof point, disclosure of the outsourced-execution model stated as a provenance credential, not concealed |
| $250 Concept Session | Building it — converts the sales conversation into art direction, which is the direct fix for Brandon's stated worry that he can deliver but can't sell |

**5. Brandon overrode the board's own sequencing advice, and that override is now the
plan.** Three of four seats said outreach should lead because the channel expires with the
season. Brandon: *"I want to feel confident by having a strong website behind me. If they
balk, I'm just going to blame the website in my mind."* Site work is now a **hard-stopped
precondition, capped at one week** so it can't consume the outreach window it exists to
protect — full rewrite by **2026-09-26**, outreach begins **2026-09-29**. Saved as a
standing working-style note (`brandon-needs-the-artifact-before-outreach` memory) since
this is expected to recur on the insurance line.

**6. New requirement surfaced this session: a physical framed sample.** Brandon needs one
large piece framed and in hand — not billed to any client — so a skeptical prospect can be
shown a real example in person. Uses an existing composite (almost certainly from the Jack
Shepherd shoot), costs ~$400 cash + 1–2 hrs, and does double duty as the framed-on-wall
photo the positioning rewrite needs. **This now shares the framing vendor's queue with
every founding client's piece — if the vendor has lead time, order the sample first**,
since it doesn't need to wait on a client shoot.

**Not yet done, now the active queue in order:** (a) site rewrite — new ladder in
`packages.ts`, commission-reframe copy in Hero/Approach/About, before/after asset,
framed-on-wall photo, disclosure line — hard deadline 2026-09-26; (b) get the framing
vendor quote **and lead time**, order the physical sample into that queue immediately;
(c) confirm three cheap vendor questions (PSD vs. flattened file, commercial/resale rights
assigned, whether stock sourcing is included in the $25–$75 quote); (d) write the Founding
Families agreement (release, filming consent, testimonial spec, consequence clause);
(e) Stripe live, retainer/deposit link, e-sign template; (f) list 20 names in the
private-school channel, ready to reach out **2026-09-29**.

**Still open from session 11, unchanged:** sign-off on `docs/turnaround-revision-policy.md`
— now sharper, since the board flagged an undefined revision policy as a real capacity risk
at premium prices, not just a cost one.

## Status (session 12, superseded above)

**Session 12: the hero was reframed a second time, the whole page was harmonized to it,
and everything shipped to production.** Commit `d7cd7c4`, pushed, verified live against
bgportraits.com rather than the local build. This is the first session whose work is
actually on the public site.

**1. The hero line changed again, and the reason matters more than the line.** Session 11
locked "One athlete. One portrait. The one in their head." Brandon sat with it for two days
and it did not hold. He came back twice reaching for a bigger payoff word, first "One
Athlete. One Session. One Star.", then "One session to create a legend." Both were argued
against on the record: they drop the product noun, so the headline stops naming what a
parent is buying, and "star" and "legend" are status claims about the child that cannot be
delivered and read as hype to exactly the wealthier, restraint-buying parent the pricing
redirect is aimed at. He reaffirmed the direction anyway, which settled it, and the
resolution was a one-word swap he immediately preferred:

> **One athlete. One portrait. One legacy.**

**Why "legacy" is the right word and not a compromise.** *Legend* is a claim about the
athlete's fame, undeliverable and unfalsifiable. *Legacy* is a claim about the object
enduring, which is literally deliverable with cotton rag and reversible mounting. It also
pays into the Approach step 04 close ("Seasons end. This does not.") and it is a parent's
word rather than a fourteen-year-old's. Keep this distinction if the line is ever
revisited: the aspiration is allowed, the unverifiable claim about the child is not.

**2. `Hero.astro` lines 27 to 28 is CLOSED.** That was session 11's designated pickup
point. The new headline orphaned the old lead, which existed to pay off "the one in their
head," so it was rewritten rather than fine-tuned. It now reads: "A legacy has to hang
somewhere. The session, the compositing, the print: all of it exists to produce one
finished piece, and to build it well enough to stay there." The first sentence cashes the
abstract word into a physical object, which was Brandon's chosen job for it. One conflict
was caught and resolved during drafting: his selected draft opened "A season lasts a few
months," which is the same move step 04 closes on, and would have spent the close early.
The three nouns still preview Approach steps 02, 03 and 04.

**3. Eight structured questions drove a full-page copy review.** Decisions taken:

- **Tier names came off the status ladder.** `Future Star` → **The Portrait**,
  `Future Legend` → **The Series**, `Champion's Legacy` → **The Framed Piece**. Two reasons:
  "legacy" could not be both the brand promise and the name of only the most expensive tier,
  or the cheaper two read as the versions where you do not get the thing the headline sold;
  and `Future Star` / `Future Legend` were themselves the hype register that fights the
  archival positioning. Names now describe scope. **Prices did not move.**
- **The conservation spec moved to the point of purchase.** The top tier previously said
  "Framed archival print with anti-reflection glass," which did not match the locked
  materials direction and omitted every fact that does the persuading. It now names cotton
  rag matting, UV and anti-reflective glazing, and fully reversible mounting.
- **An unsupportable social proof claim was cut.** "The place most families start" was
  removed. With essentially one client it is not true, and the Cialdini pass was explicit
  that faked proof is permanently expensive.
- **The retired differentiator was purged from metadata.** `site.tagline` and
  `site.description` still carried "one athlete at a time" and "one athlete, one session,
  one finished portrait," meaning the footer and the Google snippet were still running copy
  replaced in session 11. Both rewritten to lead with permanence.
- **The "one ___, one ___" cadence is now reserved for the headline alone.** It was firing
  five times across hero, Approach step 02, the Gallery intro, About, and the meta
  description. Twice is a spine, five times is a template tell.
- **Approach step 02 now states the session length.** Brandon's addition: "Plan on about an
  hour, covering both static portraits and action frames." Note the tension deliberately
  managed in the wording: an hour sits awkwardly beside "not until the clock says stop," so
  it is phrased as "runs until the shots are right **rather than** until the clock says
  stop," making the hour an expectation and not a limit. It is now a public promise, so it
  needs to stay true of how sessions actually run.

**4. Em dashes are gone from all visible copy, and this is a standing preference.** Brandon
asked for every em dash removed. Six replacements in the hero lead, Approach lead, About,
the Inquire lead and step 2, plus the wordmark's screen-reader label. Verified zero em
dashes across all three rendered pages. En dashes were kept, since "Dallas–Fort Worth" is a
different character and correct. Code comments were left alone, being invisible to visitors.
**Treat this as permanent for future copy.**

**5. Layout changes, all Brandon-directed.**

- The hero composite moved from a right-hand column to **below** the headline block. The
  two-column desktop layout is gone. Because the source is 4:5 portrait, a full-width
  figure would have clamped against the old `max-height: 72vh` and letterboxed inside the
  hairline frame, so the figure is capped at 36rem and the height cap removed.
- `.hero__inner` is capped at **40rem**. Asked whether the hero should stay left-aligned,
  the answer was yes per `brand.md` ("Nothing is centered"), but the 1360px shell left
  roughly 700px of dead space to the right, which read as a missing second column rather
  than as margin. Capping the column fixes that while keeping the left anchor.
- **`02-jack-stadium` was dropped from the gallery** at Brandon's call. Nine images remain
  and the grid still balances: four halves, the full-width catch frame, four halves. The
  JPEG was left on disk, only removed from `portfolio.ts`.
- **The "Recommended" badge is gone** from the middle tier. Removing it is what aligns the
  three tier names, since the badge was the only thing pushing that card's heading down a
  line. The `emphasis` flag survives and still lifts the background; only the label went.

**6. Brandon's portrait is in the About section, closing an item open since session 7.**
Cropped from a 4000x6000 full-length original down to a 4:5 head and shoulders frame at
1600x2000, anchored on the face rather than the frame centre, with roughly 8% headroom and
a cut at mid-chest. Source stays in OneDrive; the crop lives at `src/assets/brandon.jpg`.
It sits right of the bio at desktop inside the same hairline frame as the hero print. This
also closes the **"liking"** gap the Cialdini pass in `differentiator-copy.md` listed as
open.

**Corrected on the record:** commit `854b92d` from session 11 was reported here as
unpushed. It was already on `origin/main` when this session checked, so session 11's
rewrite had in fact been live for two days. The plan text below still says otherwise and is
left as written.

**T-00/T-01 CLOSED, and the silent-failure risk was wrong.** Brandon tested the live path
himself and reported it 2026-09-19. The widget acknowledges a submission and does nothing
further, which is correct behaviour and not a failure. Everything lands in GoHighLevel, it
pushes a notification to his phone immediately, and the **AI conversation bot picks the
thread up over SMS**, which is the channel it is actually enabled on. Nothing is dropped
and nothing is unlogged. The session-10 board finding below ("a silent-failure risk in the
widget wiring," conflict guide C-14) is **superseded by direct observation**; it was a
reasonable inference from the channel matrix that turned out not to describe the live
system. Second reason it was never urgent: no traffic is being driven to the site yet, by
choice.

**Still open, unchanged by this session:** Brandon's sign-off on
`docs/turnaround-revision-policy.md`, and connecting Stripe. The archival pigment stock
decision (item below) is also still open.

**NEXT SESSION STARTS HERE: packages and pricing, as a deliberate separate workstream.**
Brandon's explicit call this session: "I'm going to handle the packages next because
that's going to be a separate thing." The tier names are now neutral containers, which
clears the way. The inputs are already on disk: `docs/unit-cost-sheet.md` has all three
tiers priced roughly 2 to 3x below cost, and the floor-up premium redirect means the live
$399 / $599 / $849 figures are not anchors to defend. Renaming the tiers made the ladder
read as a menu rather than a status climb, which makes the current numbers look more
arbitrary than they did before.

## Status (session 11, superseded above)

**Session 11 — Week 0's unit cost sheet done; deliverable model and print allocation
locked; GHL speed-to-lead workflow built (A1, not Pattern C — Brandon's explicit call).**

**1. GHL build: A1, not Pattern C.** Brandon chose to build the A1 scripted speed-to-lead
drip tonight rather than the queued Pattern C bot-gated workflow, as an explicit test build
via Claude in Chrome browser automation. Built in the Integristream Consulting sub-account:
`Speed-to-Lead SMS + Email`, currently **Draft, untested**. Full detail and open items
(unfiltered trigger, unverified stage-move opportunity linkage, hardcoded notification
number) in `Projects\GoHighLevel\CLAUDE.md` and `docs/ghl-workflows.md`.

**2. Unit cost sheet done — Week 0 task #1.** `docs/unit-cost-sheet.md`: **all three tiers
are priced roughly 2–3x below cost** once real hours are counted at Brandon's $100/hr
target rate. Floor costs: Future Star $787 (vs. $399 live), Future Legend $1,253 (vs.
$599), Champion's Legacy $1,835–$2,020 (vs. $849 — the range is because the framing cost
is still an estimate, no vendor quote yet). Every input in the sheet is tagged `[ACTUAL]`
or `[ESTIMATE]` so the one soft number stays easy to spot.

**3. Deliverable model corrected and locked.** `packages.ts` currently promises each
composite in a package as "a different concept" — full independent creative work. That's
not the real model and needs correcting: composite #1 is the expensive custom one, every
composite after it is a cheaper variant built off the first. Also locked: a new low-cost,
high-impact bonus — a fast background cutout plus reusable instructions for the client to
try their own AI-generated backgrounds, delivered same-visit while the real composite is
still in progress (~15 min real cost) — goes in **every** tier. Physical product locked:
a small 8×10 print in every tier, plus exactly one big framed print reserved for Champion's
Legacy only. Turnaround/revision policy **drafted, not yet approved** —
`docs/turnaround-revision-policy.md`.

**Not yet done:** a real framing vendor quote (the one soft number in the cost sheet),
Brandon's sign-off on the revision-policy draft, and — once both land — updating
`packages.ts` copy to match the corrected deliverable model and re-cutting final tier
prices now that the floor is known. The differentiator rewrite, T-00/T-01 audit, and Stripe
connection (the other three Week 0 tasks from session 10) are still open.

**Redirect, same session — Champion's Legacy repricing target changed.** Brandon reviewed
`docs/Sports_Portrait_Framing.md` (new framing/fulfillment SOP reference he added) and gave
a clear call: stop treating the live $849 price as the thing to defend or the gap as the
thing to close — it was a placeholder, not an anchor. Champion's Legacy is being rebuilt as
a deliberately premium, heirloom-positioned tier for wealthier parents (fewer, higher-price
clients, not more cheap ones), which is the same fix the session-10 independent board pass
flagged on the capacity math. No cost-motivated downgrades on archival materials — Cotton
Rag mat and reversible mounting are locked regardless of price; the only real lever left is
launching on anti-reflective UV acrylic (Optium-class) with Museum Glass as a future upsell,
both still needing real vendor quotes — **Brandon then deferred chasing that quote
indefinitely; it's not blocking anything else in the queue.** Brandon also wants the
"you'll frame this for twenty years" line rewritten — he still likes the permanence/heirloom emotional core, not the
sentence — so that lands with the differentiator rewrite, not separately. Detail and the
updated materials spec: `docs/unit-cost-sheet.md`.

**Differentiator rewrite DONE and written into `src/` — `docs/differentiator-copy.md`.**
Covers the hero block and the Approach section. Four calls taken before drafting: permanence
**closes** rather than leads, contrast with the team/school photographer stays **implicit**
(never named), archival specs are **named** in customer copy, and scope is hero + positioning
+ Approach only (packages/tiers/About deferred, since tier copy has to change again once
pricing lands).

Locked hero line, after eleven candidates: **"One athlete. One portrait. The one in their
head."** Approach grew from three steps to four, the fourth ("Made to outlast the season")
carrying permanence as its own closing beat and ending on "Seasons end. This does not." The
old explicit-contrast lines are gone — "high-volume team shooters," "no line of teammates
waiting behind them," "a shot list somebody else wrote," "not a preset run across a roster."
`Hero.astro`, `Approach.astro` and `brand.md` edited; `npm run build` passes and the new
strings verified in `dist/`. **Uncommitted and unpushed** — `main` auto-deploys to the live
apex, so pushing publishes it.

**NEXT SESSION STARTS HERE:** `src/components/Hero.astro` **lines 27–28** — the hero lead
paragraph ("Your athlete already knows what the picture looks like. Everything after that —
the session, the compositing, the print — exists to make it real."). Brandon's read: close
but not final, and critical to get right since it is the first prose under the new headline.
The constraints it has to keep satisfying are in `differentiator-copy.md`'s harmonization
section — it must not re-explain the process (that duplicates Approach step 01), must not
reuse "frame by frame" (step 03's title), and its three nouns currently preview Approach
steps 02/03/04, which is worth preserving or replacing deliberately rather than by accident.

**One open decision, deliberately shipped conservative:** step 04 currently scopes the
archival claim to "the framed piece," which is true today since only Champion's Legacy
includes framing. Making **archival pigment print stock standard on every tier** (a few
dollars per 8×10) would let that step open with an unqualified "prints are made on archival
pigment stock" and make the permanence claim true site-wide. One-line change, but it is a
promise about fulfillment, not a copy preference.

## Status (session 10, superseded above)

**Session 10 — AI Sales Boardroom run on the GoHighLevel build; Week 0 now leads the
queue.** Two board passes at the same question (what automation to build, in what order,
with what copy). The second ran five advisors as genuinely independent agents — separate
context each, no visibility into one another, no access to the first pass's conclusions —
which is the fix for the manufactured-disagreement gap these boardrooms have. Packets:
`docs/ghl-board-simulation.md` (first pass) and
`docs/ghl-board-simulation-independent.md` (second, authoritative). Both kept so the
methods can be compared.

What the independent pass found that the first missed:

- **The capacity arithmetic.** At the 1–4 session/month ceiling and current tiers, the
  theoretical best case is ~$40.7K/yr gross before costs; income replacement would need
  ~$4,167/client, roughly 7× the emphasized tier. Two seats ran it separately.
- **The tier ladder is inverted.** Revenue per composite falls $399 → $200 → $170, so
  margin per unit of the scarcest input (Photoshop hours) *declines* as a customer spends
  more. Derives from the published tiers — no data needed.
- **The differentiator aims at the wrong competitor.** "I shoot every session myself"
  differentiates against multi-shooter studios; the real alternative is the team/school
  photographer, where the parent never met a photographer at all. Replacement frame is
  uniqueness and permanence. Note `brand.md` already had this right ("the portrait you'll
  frame for twenty years") while `project-brief.md` positioning did not.
- ~~**A silent-failure risk in the widget wiring.**~~ The LeadConnector widget is a **Live
  Chat** channel, not SMS. A bot enabled only on SMS answers it with silence and logs
  nothing (conflict guide C-14). Folded into `Projects\GoHighLevel\CLAUDE.md` T-00.
  **DISPROVEN 2026-09-19 by Brandon testing the live path: the widget acknowledges, the
  lead reaches GoHighLevel, his phone is notified, and the AI bot continues over SMS.**

**Brandon's call this session:** the GoHighLevel build is **infrastructure for the
insurance line, not a photography ROI play**. Photography is the test rig. That reverted
the architecture to Pattern C (it was the Sales Ops seat's own stated flip condition) and
changed the success measure from portrait bookings to how much of the build transfers.

**Queue change — supersedes the session-9 ordering below.** The active queue is now the
four **Week 0** tasks in `Projects\GoHighLevel\CLAUDE.md`: unit cost sheet, differentiator
rewrite, T-00/T-01 channel and sleep audit, connect Stripe. None is a build; together about
one evening. The `launch-cutover.md` Step 7 refinement backlog — starting with the 404 page
— resumes after that. Rationale: the 90-day north star is lead flow end-to-end, and a
soft-404 blocks no leads now that A2P is approved.

The generalized lesson from the pricing half of the session was written up as
`Projects\reference\commoditization-resistance.md` — cross-venture, since the insurance line
starts out more commoditized than photography ever was.

**A2P campaign APPROVED (session 9).** The customer-care campaign resubmitted
in session 8 against the live site passed review — brand and campaign are both
now Approved. `docs/gaps.md` updated to close out the A2P open-work item. The
refinement backlog in `docs/launch-cutover.md` Step 7 is now the active work
queue, starting with `src/pages/404.astro` (item 0 — the site currently
soft-404s on unmatched routes).

**Session 8 — cutover reframed and sequenced.** Brandon's call: the bar for
putting the new site on `bgportraits.com` is **A2P-ready, not launch-ready**.
The deferred visual work (broken cutouts, hero, self-portrait, tiers, social
proof) is refinement done live during the ~2-day A2P review window, not a
precondition. Full runbook written at **`docs/launch-cutover.md`**; Phase 5
below rewritten to match; memory saved
(`a2p-ready-is-the-bar-for-cutover-not-launch-ready`).

**CUTOVER DONE (session 8) — the new site is live at `https://bgportraits.com`.**
Pre-cutover check passed (all playbook §2–§5 items present). The live project
`bgportraits-com` turned out to be a Workers-Builds project (`wrangler deploy`,
framework autodetect — no build command), so rather than repair it we promoted
the clean `bgportraits-rebrand` Pages project:

1. `rebrand` → `main` merged (fast-forward) and pushed. **DONE.**
2. `bgportraits-rebrand` production branch changed `rebrand` → `main`; first
   `main` → Production deploy (`9bd51f7`) succeeded. **DONE.**
3. `bgportraits.com` custom domain moved off `bgportraits-com` onto
   `bgportraits-rebrand` (had to remove from the old project first — the apex
   DNS record is service-managed / read-only and a second project can't
   overwrite it). Status **Active, SSL enabled**. Total outage window ~90 s
   (brief 522). **DONE.**
4. `bgportraits-com` git integration **disconnected** — no more auto-builds. Its
   last deployment (`698c440f`, which is the *new* site — its build system
   autodetected Astro and deployed it too) stays frozen on
   `bgportraits-com.bgarner84.workers.dev` as a rollback anchor. The
   coming-soon page is still in that project's version history (`fb4b2f18`) if a
   true rollback to it is ever wanted. **DONE.**

**Verified live on `bgportraits.com`:** `/`, `/privacy`, `/terms` all 200;
`/robots.txt` + `/sitemap-index.xml` + `/sitemap-0.xml` correct; canonical and
`og:image` absolute to the apex; LeadConnector widget (`6a94ed46852536cc91868a08`)
loads. **One known wart:** unknown paths return HTTP 200 serving the homepage
(no 404 page in the build, so Cloudflare falls back to `index.html`), i.e.
soft-404s — not an A2P blocker (zero real 404s). Fix is `src/pages/404.astro`;
Brandon put it at the **top of the refinement backlog** (item 0 in
`launch-cutover.md` Step 7).

**Widget consent — VERIFIED on the live domain (session 8):** submitting with
the SMS-consent box unchecked succeeds, the lead is recorded as
not-SMS-consented, and the confirmation screen states no texts will be sent.
This is the correct pattern — the checkbox must *not* block submission (that
would make consent a condition of contact). `a2p-10dlc-playbook.md` §5 was
corrected accordingly; memory
`a2p-consent-checkbox-must-not-block-form-submission` saved.

**A2P campaign RESUBMITTED (session 8).** Brandon resubmitted the customer-care
campaign in GoHighLevel against the live apex site. GHL carried the prior
submission forward and did not re-prompt for the opt-in screenshot, so it went
in with the pre-rebrand `widget-prechat.png` on file — the consent-relevant
content (both checkboxes unchecked, disclosure text) is unchanged from that
image, so the proof is still accurate; only the widget's cosmetic chrome
changed. Brandon captured a fresh screenshot of the current widget to hold in
case the reviewer asks. The A2P **Brand** remains Approved (it always was —
campaign 30922 was the denial).

Loose end: drop the fresh widget screenshot into `docs/widget-prechat.png` so
the tracked artifact matches the live widget.

**Brand contact = Brandon himself**, so the playbook §1.2 "warn the contact"
step is a no-op — he just needs to answer the verification outreach (email/phone
via Twilio/carrier through GoHighLevel) promptly and confirm the business
identity. Nothing else is blocking the ~2-day review.

**Session 7 — `robots.txt` + `sitemap.xml` (review 4.2) closed, and the
Cloudflare preview project is live.** Added `@astrojs/sitemap`
(`astro.config.mjs` `integrations`), `public/robots.txt` (allow-all + sitemap
reference), and a `<link rel="sitemap">` in `Base.astro`. Build passes; `dist/`
now emits `sitemap-index.xml` + `sitemap-0.xml` covering `/`, `/privacy`,
`/terms`, and `robots.txt` points at the index. Committed + pushed as `05fec77`.

The second Cloudflare Pages project — **`bgportraits-rebrand`**, production
branch `rebrand`, Astro preset, `npm run build` → `dist`, env var
`NODE_VERSION=22.12.0` — was stood up this session and its first build (commit
`05fec77`) succeeded. Preview URL: **https://bgportraits-rebrand.pages.dev**.
Verified live: homepage renders, `/robots.txt` and `/sitemap-index.xml` serve
(both correctly reference the production `bgportraits.com` host, not the
`.pages.dev` subdomain). Every push to `rebrand` now auto-deploys here. No
custom domain attached — deliberate, per `cloudflare-preview-setup.md`; the
domain moves at the Phase 5 cutover. Note: A2P will not accept a `*.pages.dev`
URL, so the campaign resubmission still waits for the domain cutover.

Also this session: **removed the image above the About section** (`About.astro`)
— it was `03-jack-portrait`, the client's athlete, next to "I am Brandon Garner"
(review 1.2). The section is now single-column text. The photo still appears
once in the gallery, so the asset stays. Widget confirmed good on the preview
page. Brandon approved a merge to `main` after this rebuild verifies.

**Follow-up (Brandon):** add Brandon's own profile photo to the About section.
`About.astro` has a comment marking where it goes; it previously sat in a
two-column grid (`minmax(0, 0.8fr) minmax(0, 1fr)` at ≥64rem) if that layout is
wanted back.

Remaining open items below are all Brandon-gated: photo retouch, GHL widget
re-shoot + live-site consent-gate check, tier re-cut decisions, social-proof
ask, About-section profile photo.

## Status (session 6)

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

**Session 6 — review pass + copy revision.** Full review captured in
`docs/v1-review.md` (ranked by value, not section). Brandon's calls this
session:

1. **Photo/retouch work → deferred to a dedicated follow-up session.** That
   covers review items 1.1 (frame-edge masking failures on `05`, `07`, `09`,
   `10`, `11` + no contact shadows), 1.4 (three near-identical visor poses;
   alt text that describes the wrong frame), 3.1 (swap the template-style
   hero image), 3.5 (repeated radial gradient), and the retouch note about
   daytime-park reflections in visors.
2. **Copy revised, and the three non-photo A2P-look items closed** (favicon,
   `og:image`, published prices) — see "Done this session" below.
3. **Prices are now public** — `$399 / $599 / $849` "from" figures
   (`project-brief.md` decision 23, supersedes decision 18).
4. **Widget rebranded in GoHighLevel this session (review 1.3)** and verified
   in Chrome against the local build: amber header (was the red call-centre
   panel), heading "Tell me about your athlete", warm welcome message, no
   prefilled text, fields Name / Phone / Message only. **Both consent
   checkboxes present and unchecked, disclosure text unchanged.** It still
   renders as an inline embed at the bottom-centre of the page, not a corner
   bubble — GHL did not take the launcher-position setting — so the
   `Inquire.astro` copy ("message form at the bottom of this page") is correct
   and stays. `widget-copy.md` holds the field-by-field text used.

**Done this session:**

*Copy (no logic or layout changes):*

- `privacy.astro` / `terms.astro` (**review 0.1 + 0.2**): removed the pre-launch
  "go live" lines and the phantom mailing-list / unsubscribe-link / email-capture
  references, per the playbook §4 reconciliation rule. The A2P-reviewed SMS
  blocks were not touched; STOP + HELP still appear in both required places.
- `Packages.astro` (**review 2.1**): "Most chosen" → "Recommended" (no clients
  yet — the old flag was an unsupportable claim).
- `packages.ts`: `Champion's Legacy` (apostrophe), summary aligned to the
  session-based inclusions, "five composites **in total**" removes the 5-vs-8
  ambiguity against Future Legend's three.
- `Hero.astro` / `Gallery.astro`: tightened the lead and gallery intro, and
  "one evening" → "one session" (it contradicted "the session runs as long as
  it needs to").
- `Inquire.astro`: "chat button in the corner" → "message form at the bottom
  of this page"; "pricing" references softened now that prices are on the page.

*Assets + config:*

- **Pricing (review 2.2, decision 23):** `price` field on each tier, shown as
  "From $399 / $599 / $849". Intro copy and the per-tier CTA ("Request a
  session") updated; `priceRange` in the LocalBusiness structured data set to
  `$399–$849`.
- **Favicon (review 0.3):** `public/favicon.svg` replaced with the "BG"
  condensed monogram reserved in `brand.md`; warm near-black on a light tab,
  bone on a dark tab. The stale `favicon.ico` and its `<link>` were removed —
  the SVG covers every current browser and Googlebot.
- **`og:image` (review 4.1):** `public/og-default.png` (1200×630) — an interim
  type-only card on the warm-black ground, no photograph. `og:image` +
  dimensions + alt, `og:locale`, and `twitter:image` wired in `Base.astro`.
  Swap the PNG for a real hero-frame export in the photo session.

**Still open for Brandon (decisions / asks, not defects — from `v1-review.md`):**

- **1.3 (widget) — mostly done, two things left):** re-shoot
  `docs/widget-prechat.png` from the rebranded widget for the A2P submission,
  and on the *deployed* site confirm the transactional checkbox actually gates
  form submission (can't be tested without submitting a real lead). Optional
  polish: the amber is a full header fill, heavier than `brand.md`'s
  "amber is never a background wash" — reshape to a carbon header if GHL allows.
- **2.3–2.5:** re-cutting the three tiers so they ladder on *kind* not
  *quantity*, and moving the single amber button to Packages.
- **1.5:** no social proof anywhere — ask the Shepherd family for two sentences
  alongside the likeness-release request.

**Next:** the photo follow-up session, then the open decisions above, then the
Phase 5 domain cutover. The preview URL
(https://bgportraits-rebrand.pages.dev) is live for phone review.

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
- [x] Claude: second Cloudflare Pages project (`bgportraits-rebrand`) stood up
  on the `rebrand` branch; first build green. Preview at
  https://bgportraits-rebrand.pages.dev. *(2026-09-09, session 7)*
- [x] Image staging + naming convention established: `src/assets/portfolio/`
  with a README (export specs + `NN-athlete-shot.jpg` naming). *(2026-09-07,
  session 2)*
- [x] `privacy.html`, `terms.html`, `widget-prechat.png` preserved (legal pages
  still at repo root untouched; `widget-prechat.png` moved to `docs/`).
- **Working state:** Astro starter builds locally; legal pages still reachable.
  Cloudflare preview live at https://bgportraits-rebrand.pages.dev.

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

## Phase 5 — Cutover & A2P resubmission
**~2 hrs. Detailed runbook: `docs/launch-cutover.md`.**

Reframed session 8: the bar for the cutover is **A2P-ready, not launch-ready**.
Put the new Astro site on `bgportraits.com` so the A2P customer-care campaign can
be resubmitted against a real business site (30922 was a coming-soon denial),
then refine the deferred visual work live during the ~2-day review window. See
memory `a2p-ready-is-the-bar-for-cutover-not-launch-ready`.

Sequence (full detail in the runbook):

1. **[Claude]** Final pre-cutover check of `rebrand` vs. playbook §2 on the
   preview URL.
2. **[Brandon]** Pick the cutover mechanism — Option A (recommended): reconfigure
   the original Pages project to build Astro, then merge `rebrand` → `main`.
   Option B: move the custom domain to the `bgportraits-rebrand` project.
3. **[Claude]** Verify the live site on `bgportraits.com` (pages, robots/sitemap,
   NAP, widget, headers).
4. **[Brandon + Claude]** A2P proof-of-consent on the live domain: confirm both
   checkboxes unchecked, submit a real test lead to prove the transactional
   checkbox gates submission, re-shoot `docs/widget-prechat.png`.
5. **[Brandon]** Warn the A2P brand contact that verification outreach is coming.
6. **[Brandon]** Resubmit the customer-care campaign in GoHighLevel, apex URL,
   description addressing the 30922 denial, refreshed screenshot attached.
7. Refinement window: photo retouch, self-portrait, tier re-cut, social proof,
   likeness release — order per `v1-review.md`.

- **Working state:** live site on `bgportraits.com`; A2P campaign resubmitted.

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

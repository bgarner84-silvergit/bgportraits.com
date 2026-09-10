# bgportraits.com v1 — full review and refinement list

Reviewed 2026-09-09 against the `rebrand` branch at commit `622e2e2`, production
build served locally. Scope: everything that ships in v1 — copy, offer, imagery,
layout, legal pages, technical. This is the *refinement* pass on the working
version. The separate gap analysis to the $10k-tier build is deliberately not
attempted here.

**Verdict.** The build quality is genuinely good — the type system is
disciplined, the copy voice is distinctive, the performance budget is met, and
the code is clean and reusable. What lets it down is not the site's engineering.
It is that **the photographs do not support the claim the copy makes about
them**, and that the one conversion path on the page is a red vendor widget that
sounds like a call centre. Those two things, plus two stale sentences in the
legal pages, are worth more than every layout tweak in this document combined.

Findings are ranked by expected value, not by section. Effort estimates assume
Brandon working alone.

---

## Tier 0 — Fix before the A2P resubmission

These are cheap and they touch the exact thing that got the campaign denied.

### 0.1 The legal pages still describe a pre-launch site — HIGH / 15 min

Campaign 30922 was denied because the reviewer judged the site to be under
construction. Two sentences survived the port and still say so in the site's own
words:

- `src/pages/privacy.astro:38` — "Notify you when our site, booking, or services
  **go live**, if you have asked us to"
- `src/pages/terms.astro:40` — "…to let you know when our booking and services
  **go live**"

A reviewer who denied this brand once for being pre-launch will read the privacy
policy. Both lines are outside the protected A2P-reviewed SMS blocks, so editing
them is safe.

> **Privacy, replace the bullet with:** "Follow up about a session you have asked
> about, including availability, pricing and scheduling"
>
> **Terms, replace the sentence with:** "If you reach out through the chat
> feature on this site, you agree that we may use the information you provide to
> respond to your inquiry and to follow up about scheduling and pricing. You may
> ask us to stop contacting you at any time."

### 0.2 The privacy policy describes mechanisms the site does not have — HIGH / 10 min

The playbook's §4 reconciliation rule: a policy describing things the site does
not do is a mismatch a reviewer can flag. Two live examples:

- Privacy line 29 lists **"Your email address"** as collected. Nothing on the
  site collects an email — the widget takes name and phone only.
- Privacy line 72 refers to **"the unsubscribe link where one is provided."**
  There is no mailing list and no email programme.

Either soften both to conditional ("if you email us directly") or delete them.
Do not touch the SMS section.

### 0.3 The favicon is still the Astro logo — HIGH / 20 min

`public/favicon.svg` is the scaffold default. It is the first thing a reviewer,
and every returning visitor, sees in the tab, and it says "template" louder than
anything else on the page. `docs/brand.md` already reserves a "BG" monogram cut
from the condensed Saira forms for exactly this. Draw it now — it is 20 minutes
and it is on the critical path to looking like a real business.

### 0.4 Re-capture `widget-prechat.png` after any widget change — REQUIRED

If you act on 1.3 below, the proof-of-consent artifact must be re-shot from the
live site before submission. The consent checkbox text and both-unchecked
behaviour must be identical to what is in the current artifact.

---

## Tier 1 — Credibility. These decide whether a parent believes you.

### 1.1 Five of the ten portfolio images have visible masking failures — CRITICAL / 4–6 hrs

This is the single most damaging problem on the site, because the copy makes an
explicit promise about exactly this craft: *"Every hero image is cut out,
composited onto an art-directed background, graded and retouched individually.
That is hours per image, and it is the whole point."*

The images contradict it:

| Image | Defect |
|---|---|
| `05-jack-crouch` | A razor-straight vertical line slices through his right shoulder and torso mid-body — the original frame edge, left in the cutout. Plainly visible at gallery size. |
| `10-jack-catch` | Runs as a full-width **feature** tile. His legs are cut off by a hard horizontal line at the bottom edge and his outstretched right glove by a hard vertical line at the right edge. The largest image on the page has two mechanical cuts through the subject. |
| `07-jack-run` | Hard vertical cut on the right side of the body; trailing foot clipped. |
| `09-jack-drive` | Extended hand and foot clipped at the frame edge. |
| `11-jack-lean` | Legs cut at the bottom edge. |

Separately, **every cutout floats with no ground contact and no shadow.** That is
the classic one-click background-removal signature, and it is the exact tell that
separates "composited" from "cut out."

Fix, in priority order:

1. Re-export the five frames with enough headroom that no limb touches a frame
   edge. Where the original frame genuinely ran out, either recompose the crop
   inward or use generative expand to rebuild the missing edge — you have
   Firefly in the plan already.
2. Add a contact shadow or a grounded base to every cutout. Even a soft
   elliptical shadow reads as "placed in a scene" instead of "pasted on black."
3. Until 1 and 2 are done, **pull `10-jack-catch` out of the feature slot.** A
   defect displayed at 1100px is a different kind of problem than the same defect
   at 620px.

### 1.2 The About section shows the client's kid, not Brandon — CRITICAL / 30 min

`About.astro` renders `03-jack-portrait` next to the heading "About" and the line
"I am Brandon Garner." A parent scanning that will assume the teenage football
player is the photographer. On a site whose entire differentiator is *one-on-one
work with a specific person*, the About section not showing that person is the
central proof failing.

It is also a duplicate — `03-jack-portrait` already appears in the gallery, so
the same photograph runs twice on a ten-image page.

Shoot or find a portrait of yourself. It does not need to be elaborate; it needs
to be you, lit the way the rest of the site is lit. This is the highest
conversion-per-hour item in this document.

### 1.3 The chat widget is the only conversion path and it is off-brand — HIGH / 1 hr in GoHighLevel

Everything above the fold is warm black, hairline rules, Saira, one amber accent.
Then the only way to actually hire you is a **red-gradient panel with a white
body, expanded by default, pinned bottom-centre**, carrying:

- "Have a question? **Our support team** is ready to assist you with any questions"
- "Enter your question below and **a representative** will get right back to you."
- A prefilled "I want to know more"
- A "Powered by LeadConnector" badge

You are one person. "Our support team" and "a representative" actively contradict
the positioning the previous 3,000 pixels just built. Red is not in the palette
and fights the maroon jerseys.

**This is safe to change.** The playbook (§5) is specific about what A2P actually
reviews: the consent disclosure text, the split unchecked checkboxes, the fields
collected (name, phone, request), and the disclosure appearing at the point of
collection. The header colour, the greeting heading, the intro message and the
prefilled text are GoHighLevel widget settings that touch none of that.

In GoHighLevel, change:

| Setting | To |
|---|---|
| Widget theme / primary colour | `#F5852B` on `#14110F`, or plain `#14110F` |
| Heading | "Tell me about your athlete" |
| Subheading | "You'll hear back from me, usually same day." |
| Intro message | "Send me your athlete's name, sport and season and I'll come back with availability and pricing." |
| Prefill | Empty, or "I'd like pricing for a session." |
| Launcher behaviour | Collapsed bubble, bottom-**right** — not expanded, not centred |
| Consent checkbox text | **Do not touch.** Leave both unchecked. |

Then re-shoot `widget-prechat.png` (see 0.4).

Two knock-on notes: `Inquire.astro` says "Use the chat button in the corner of
the screen" — currently untrue, since the widget opens expanded and centred.
Setting the launcher to a collapsed bottom-right bubble makes the copy correct.
And **do not add a native inquiry form that takes a phone number** — the playbook
requires one opt-in path per page. A form collecting name and email only is safe;
a second phone field is not.

### 1.4 Three of ten images are the same pose — HIGH / 30 min

`05-jack-crouch`, `06-jack-block` and `08-jack-visor` are all the finger-to-visor
"shhh" gesture, same helmet angle, same lighting, same treatment. Worse, 05 and
06 sit **side by side** in the grid, so the repetition is the first thing the eye
catches in that row.

With one athlete and one shoot, variety is the only thing standing between "a
body of work" and "I had one idea." Keep one — `08-jack-visor` is the cleanest —
and replace the other two from the cull sheet. `docs/cull-review/HERO-SET.jpg`
has stronger unused frames: `DSC_8910` (ball at chest), `DSC_8959` (helmet
raised), `DSC_8989` (the catch), `DSC_9065` (arms up, from behind).

Also fix the alt text while you are in there — `06-jack-block` and
`05-jack-crouch` both describe poses that are not in the photographs
(`portfolio.ts` lines describing "forearms crossed low" and "one knee down,
forearms braced on his thigh"). Someone using a screen reader is being told about
a different picture.

### 1.5 There is no social proof anywhere on the page — HIGH / 1 hr

Zero: no testimonial, no review, no years-in-business, no school or team names,
no count of athletes, no press, no "shot for X programme." A parent is being
asked to commission a four-figure custom piece from a photographer with one
visible client and no third-party voice.

You already have the raw material. The parents approved the likeness by SMS —
ask them for two sentences at the same time you get the signed release
(`project-brief.md` decision 1 says you need that release anyway). One real
quote, attributed to "Shepherd family, Rattlers football," placed between the
gallery and Packages, changes the page more than any visual fix in Tier 3.

If you genuinely have nothing yet, the honest substitute is specificity: how many
years you have shot, what you shot before this, how long a session runs, how many
hours go into one composite. Concrete numbers do most of the work a testimonial
does.

---

## Tier 2 — The offer

### 2.1 "Most chosen" is a claim you cannot support — HIGH / 2 min

`packages.ts` flags Future Legend as **"Most chosen."** You have had one shoot.
It is false, it is the kind of thing a parent could ask about in the first phone
call, and it costs nothing to fix. Replace it with something true that does the
same visual job: **"The full piece"** or **"Recommended"**. A recommendation is
yours to make; a popularity statistic is not.

### 2.2 No price signal at all — HIGH / 30 min

Three tiers, three "Request pricing" links, no number anywhere. Decision 18 chose
this deliberately, and **I think it is the wrong call.** My reasoning:

- The stated positioning is premium and deliberately not-for-everyone. A price
  floor is how that positioning gets communicated. Silence reads as either
  "cheap and embarrassed" or "expensive and evasive," and neither is what you
  want.
- Your binding constraint is time — 5–10 hrs/week. Unqualified inquiries are the
  most expensive thing that can happen to you. A number filters before you spend
  an evening on a call.
- The A2P reviewer's checklist includes "pricing **or** packages." You satisfy it
  either way, so A2P is not the reason to stay silent.

You do not have to publish a rate card. One line under the Packages heading does
almost all of the work:

> "Sessions start at $XXX. Every piece is quoted individually, because every
> piece is planned individually."

Pick the floor as the number you would actually be happy to shoot Future Star
for. If you are not ready to commit, the fallback is a range on the section, not
per tier.

### 2.3 The tiers ladder on quantity, which invites the wrong comparison — MEDIUM / 1 hr

Right now: 1 composite → 3 composites + a print → 5 composites + framing. That is
a units ladder, and units are exactly the axis on which the high-volume team
shooters win. Every sentence of your Approach copy argues that the value is
hours, art direction and one-on-one time — then the packages price by the piece.

Re-cut the tiers so each one adds a *different kind of thing*, not more of the
same thing:

| Tier | What it is | The upgrade axis |
|---|---|---|
| **Future Star** | One session, one finished piece, files ready to print | The work itself |
| **Future Legend** | Longer session, multiple looks, three concepts — *and the first piece printed and delivered ready to hang* | You stop selling files and start selling the object on the wall |
| **Champions Legacy** | The season: session plus a game-day shoot, the full edited set, framed and installed | You stop selling a portrait and start selling coverage of a year |

Note what changes: the top tier becomes *time-based* (a season), which is the one
thing a volume shooter structurally cannot sell.

Separately, `Champions Legacy` currently says "Everything in Future Legend" and
then "Five finished hero composites," while Future Legend already promises three.
It is ambiguous whether that is five total or eight. Say the total.

### 2.4 Tier naming — MEDIUM / 15 min

Two issues. **"Champions Legacy"** is missing its possessive and reads as a typo —
"Champion's Legacy" at minimum. And all three names describe the *athlete's
destiny*, while the buyer is a parent buying an object for a wall.

If the season re-cut in 2.3 lands, the names should follow the thing being
bought:

> **The Portrait** · **The Collection** · **The Season**

Plainer, more expensive-sounding, and each one describes what is actually in the
box. If you want to keep the aspirational register, at least fix the apostrophe.

### 2.5 The Packages section has the weakest call to action on the page — MEDIUM / 20 min

Three identical `Request pricing` text links, no hierarchy, no button. This is
the section where a warm reader decides, and it has less pull than the hero. The
brand rule is one amber button per page and the hero currently spends it.
Reconsider: the hero's job is to make someone scroll, and `See the work` does
that. Move the single amber button to Packages, on the recommended tier, and let
the hero run two ghost buttons.

---

## Tier 3 — Visual and layout

### 3.1 The hero image is the weakest piece in the set — HIGH / 1–2 hrs

`01-jack-hero` is a **light-ground poster on a black page** — a bright rectangle
punched into the warm-black canvas, which is the one value clash the whole
palette was built to avoid. `Hero.astro`'s comment acknowledges this and works
around it by framing the image as a print on a wall. The workaround is elegant;
the underlying choice is still wrong.

More seriously, it is stylistically the *most* template-like image you have:
a brush-script first name, a heavy outlined surname with ghosted repeats behind
it, and a `RATTLERS // WR #13` tag line — three typefaces, none of them Saira,
in the exact visual language of the high-volume sports-template market you are
positioning against. The hero is the one image a visitor judges you on, and it
is the one that looks most like everyone else.

Replace it with `06-jack-block` or `08-jack-visor` — dark ground, warm rim light,
no third-party typography, sits natively on the page and lets *your* wordmark be
the only type in the frame. Keep `01-jack-hero` in the gallery if you like it; it
just should not be the first thing anyone sees.

A related retouch note: on both `06` and `08` the visor and the chrome "13"
reflect the daytime park scene — blue sky, trees, a dirt path. On a dark stadium
ground that reflection gives away that it was a sunny afternoon in a park. Worth
darkening before either becomes the hero.

### 3.2 Feature tiles are centred and their captions are orphaned — MEDIUM / 20 min

`Gallery.astro` centres feature images (`justify-content: center`) inside the
1360px shell while the caption stays flush left. The result: the caption for
`02-jack-stadium` sits at x≈255 labelling an image that starts at x≈545, with
290px of black between them. It reads as a caption for nothing.

`brand.md` principle 2 says outright: *"Nothing is centered."* Left-align the
feature image to the shell so the caption sits directly under its own picture.
That also makes the feature tile feel like the biggest moment in the grid rather
than a postcard floating in a wide black field.

### 3.3 Vertical dead space between sections — MEDIUM / 30 min

`--section-y` peaks at 9rem and stacks with the hero's own block padding. Between
the hero caption and "Selected work" there is roughly 350px of pure black; the
gap under the Inquire contact links before the footer is similar. On a light page
that reads as luxury. On a black page it reads as an empty page. Take
`--section-y` down to roughly `clamp(4rem, 2.5rem + 5vw, 7rem)` and check the
scroll again.

Related: the Approach and About grids are `align-items: start` with a short left
column, so each leaves a tall black void under the intro paragraph. Either let
the left column run to the same height or accept a shorter section.

### 3.4 The ghost button is effectively invisible — LOW / 5 min

`.btn--ghost` borders in `--graphite` (`#2C2825`) on `--black`. At 1px that is
under 2:1 against the background — "See the work" reads as floating text, not a
control. Lift the resting border to something around `#4A443F`, or give it the
amber border at rest and reserve the fill for the primary.

### 3.5 Two adjacent tiles share the same warm radial gradient — LOW / included in 1.1

Every dark-ground cutout uses the same amber radial vignette in the same
position, so two half tiles side by side read as one wide double-vignette rather
than two pieces. Vary the light position and intensity per image when you re-run
the grades.

### 3.6 No navigation on mobile — LOW / 30 min

Below 60rem the nav is `display: none`, leaving the wordmark and an 11px
uppercase "Request a session" text link. For a one-page site that is defensible,
but the mobile CTA should at least be a real tappable target — currently it is a
sub-12px text link at the edge of the header.

---

## Tier 4 — Technical and SEO

### 4.1 `og:image` is missing while `summary_large_image` is declared — HIGH / 15 min

`Base.astro` sets `twitter:card` to `summary_large_image` and never provides an
image. Every link you text, post, or paste into Google Business renders a blank
card. For a photography business this is the cheapest possible win.

Add a 1200×630 export — the strongest dark-ground frame, wordmark bottom-left —
and wire `og:image`, `og:image:width`, `og:image:height`, `og:image:alt` and
`twitter:image`. Also add `og:locale`.

### 4.2 No `robots.txt`, no `sitemap.xml` — DONE (session 7)

Closed. `@astrojs/sitemap` added to `astro.config.mjs`, `public/robots.txt`
(allow-all + `Sitemap:` line), `<link rel="sitemap">` in `Base.astro`. Build
emits `sitemap-index.xml` / `sitemap-0.xml` for `/`, `/privacy`, `/terms`.

### 4.3 Structured data is thinner than it needs to be — LOW / 20 min

The `LocalBusiness` block is correct but generic. For this business
`ProfessionalService`, plus `geo`, `openingHoursSpecification` and `sameAs`
pointing at your social profiles, is worth having before you chase local search.
`priceRange: '$$$'` is currently the only price signal on the whole site, which
is an odd place for it to live (see 2.2).

### 4.4 Alt text does not match three images — LOW / 10 min

Covered in 1.4. `06-jack-block`, `05-jack-crouch` and `11-jack-lean` describe
poses that are not in the frames.

---

## What I would leave alone

- **The type system.** Saira at two widths, the scale, the one-change-per-step
  rule — this is the most professional thing about the build and it is holding.
- **The Approach copy.** "The difference is the hours" is the best line on the
  site and the three steps earn their space. Do not touch it; make the images
  live up to it.
- **The colour palette and the amber discipline.** Six values with one job each,
  amber reserved for interaction. It works.
- **The data-file architecture.** `src/data/*.ts` means the multi-page build
  reuses this rather than rewriting it. That decision will pay for itself.
- **Performance.** 100 / 0.7s LCP / 0.005 CLS with real photography on the page
  is genuinely good. Do not trade it away for a slider or a video header.
- **Keeping the soccer composites out of v1.** Decision 21 is correct — two
  athletes in two sports would broaden the shopfront toward exactly what you are
  positioning against.

---

## Where I disagree with a locked decision

**Decision 18 — no public prices.** Argued in 2.2. Short version: silence does not
read as premium, it reads as evasive, and it costs you the one resource you
cannot buy back, which is evenings. A single "sessions start at $XXX" line keeps
every benefit the decision was reaching for and removes the cost. Your call, but
I would not ship without it.

---

## Suggested order of work

Given 5–10 hrs/week, this is roughly three sessions.

**Session A — unblock A2P (~2 hrs).** 0.1, 0.2, 0.3, 4.1, 4.2. Deploy to
preview. This is the whole of Tier 0 plus the two cheap technical wins, and it is
what stands between you and resubmitting.

**Session B — credibility (~5 hrs).** 1.1 (re-export the five broken cutouts, add
contact shadows), 1.4 (swap the duplicate poses, fix alt text), 3.1 (change the
hero image), 1.2 (shoot your own portrait). This is the session that changes
whether the site is believable.

**Session C — offer and polish (~3 hrs).** 1.3 (rebrand the widget in
GoHighLevel, re-shoot the consent screenshot), 2.1–2.5, then 3.2, 3.3, 3.4.

1.5 (social proof) runs in parallel — it is an ask, not a build, and it should go
out with the likeness-release request you already owe the family.

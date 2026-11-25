# Founding Families site revision: evaluation and changes

Session 17, 2026-11-25. Brandon's ask: review the project and revise the site so it is
geared toward founding families, with no pricing.

**Status: edited in the working tree, built and checked locally. Not committed, not
pushed.** `main` auto-deploys to bgportraits.com on push, so pushing publishes this.

## Bottom line

The direction is right and the docs already pointed here. Session 16 proposed taking the
prices off because "From $399" anchors the exact parent conversations meant to measure
willingness to pay. The pricing board (session 13) independently said the founding price
must never appear on the site and that price should arrive in writing, never spoken first.
This revision does both: no figures anywhere, and a stated path where pricing comes in
writing after the first conversation.

The one real risk is that the site now invites founding families before a single piece has
been fulfilled end to end (session 15 item 2). The copy is written to promise nothing
Brandon cannot deliver today, but the site should not be pushed to anyone until the
daughter's-piece dry run has shown the framing chain works. See "Risks" below.

## What changed on the page

| Where | Before | After |
|---|---|---|
| Packages section | Three tiers: The Portrait $399, The Series $599, The Framed Piece $849 | **Founding Families** section: what the commission includes, what founding families give in return, and a pricing note ("no price list ... I send the plan and your founding terms in writing") |
| Nav | "Packages" | "Founding Families" |
| Hero eyebrow | "Custom athlete portraits" | "Founding families, Season One" |
| Hero primary button | "Request a session" to the form | "Become a founding family" to the Founding section |
| About, last paragraph | Generic "get in touch" | Opens with "This season I am working with a small number of founding families." |
| Inquire section | "Request a session"; three steps | "Become a founding family"; four steps, with step 3 "I send the plan and your founding terms in writing" |
| Structured data | `priceRange: '$399–$849'` | Removed, so Google cannot show a price either |

Unchanged on purpose: the headline, Approach, Gallery, footer, the chat widget, and the
privacy and terms pages. The legal pages already say pricing is "confirmed in writing
before any session is scheduled," which matches the new flow, and they carry the
A2P-reviewed SMS wording, so they were not touched.

Files: `src/data/packages.ts` renamed to `src/data/founding.ts` and
`src/components/Packages.astro` renamed to `src/components/Founding.astro` (both rewritten);
edits to `Hero.astro`, `About.astro`, `Inquire.astro`, `src/data/site.ts`,
`src/pages/index.astro`.

## Choices made in the copy, and why

- **No seat count.** "A small number," not "three." Session 15 records that Brandon could
  probably serve one family right now. A published number is a promise; a true, vague limit
  still does the work Sandler wanted from a capacity limit.
- **No composite count.** The board locked five; session 15 proposed three or fewer. Until
  that is settled the page says "finished hero composites" and nothing more.
- **The framed piece stays in.** It is the product the whole site is built around (the
  headline is "One legacy"), and session 15 kept it in the slimmed founding version. It is
  also the one inclusion that depends on a vendor Brandon has not lined up yet.
- **The trade is stated, lightly.** The board's rule is that founding terms are a trade,
  never a quiet discount. The page names four asks in plain language (portfolio use, filmed
  reveal, an honest few sentences, an introduction if they loved it). The harder contract
  terms (Google review, three named introductions, consequence clause) belong in the
  written agreement, not on a public page.
- **"Season One" has no end date on the page.** Decide when Season One closes before the
  first founding agreement is signed, so the founding terms cannot quietly become the
  permanent price.

## Risks and disagreements

1. **The site now runs ahead of fulfillment.** Session 15's proposed plan was "no Founding
   Edition until someone reacts to the physical piece." This revision publishes the
   founding idea without publishing a founding product or price, which keeps the downside
   small. It is safe because no traffic is being driven to the site. It stops being safe
   the moment a parent is sent the link and asks to book before the framing vendor, lead
   time, revision policy and founding agreement exist. **Recommendation: leave the site
   live, but do not send it to anyone until the daughter's framed piece is done.**

2. **Biggest credibility issue on the page, not fixed in this pass: the site says Brandon
   builds the composites by hand.** Approach step 03 says every image is "cut from its
   background, composited ... hours of work per image," and About says "cut out by hand."
   The real model is that Brandon art-directs and finishes, and an outside editor executes
   against his written brief. The board was blunt that concealing this is the single
   largest risk in a closed, talkative school network, and founding families are exactly
   the people who will see the process up close. This is outside the ask, so it is
   flagged, not changed. Proposed replacement for Approach step 03, ready if wanted:

   > **Directed by me, built to my brief.** Every piece starts as a written, feature by
   > feature brief I write for your athlete. A specialist compositor builds it against that
   > brief, and I finish it myself: grade, retouch, and print prep. The layered master file
   > is yours to keep.

   The About paragraph would need the same correction ("cut out by hand" goes).

   **Resolved same session: Brandon chose option 3, remove the claim without naming who
   executes.** The page no longer says the composites are built by hand; it describes his
   part (the written brief, direction, grading and retouching). He will be candid about the
   supporting roles in conversation when it comes up. Changed: Approach lead ("then built
   by hand" is now "then built"), Approach step 03 (now "Directed and finished, frame by
   frame"), the About paragraph, and `site.description`. Options considered and rejected:
   full disclosure on the page, a one-sentence disclosure (Claude's recommendation), and
   vague "my studio" language (ruled out as implying something untrue).

3. **The gallery still shows the weak cutouts** session 16 flagged (`10-jack-catch` and the
   frame-edge masking on `05`, `07`, `09`, `11`). A founding family judging taste will see
   them. Not touched here; it is the other half of session 16's proposed interim fix.

4. **The inquiry path is still the GoHighLevel widget.** If GoHighLevel is cancelled
   (session 15 item 7, still a leaning), the "Become a founding family" buttons lead to a
   form that goes dark. Swap the contact path before cancelling, as already recorded.

## Verification

- `npm run build` passes (3 pages built).
- Rendered `dist/index.html`: no dollar figures, no `priceRange`, no em dashes. The only
  remaining "price" is the phrase "there is no price list."
- Desktop screenshots checked locally for the hero, the Founding Families section and the
  Inquire section; the two-column founding grid and header nav fit at 1440px. Mobile was
  not checked visually. No Lighthouse run.

## Next steps

1. Brandon reads the new copy on the local build or a preview, then says commit and push.
2. Decide on the disclosure fix (risk 2). Recommended before any parent sees the site.
3. Daughter's framed piece, then the parent conversations (session 15 plan).
4. Before the first founding booking: framing quote and lead time, revision policy
   sign-off, the founding agreement, a deposit link, and a Season One end date.

# Unit cost sheet — is the price above the cost?

**What this answers.** Per `reference/commoditization-resistance.md` move #5: pricing
bundles two separate questions — the optimal price (deferrable, needs market data) and
whether the current price is above cost to deliver (never deferrable). This is the second
question, answered with arithmetic, not strategy.

**Tier names changed 2026-09-19 (session 12). This sheet still uses the old ones.** The
analysis below is unaffected, but the mapping matters when the repricing pass runs:

| Old name in this sheet | Live name | Price |
|---|---|---|
| Future Star | **The Portrait** | $399 |
| Future Legend | **The Series** | $599 |
| Champion's Legacy | **The Framed Piece** | $849 |

The rename took the tiers off a status ladder (`Future Star` / `Future Legend` was the
hype register that fights the archival positioning) and freed "legacy" to be the
brand-level promise in the hero rather than the name of the most expensive tier. Prices
did not move. See `differentiator-copy.md`.

**Status (2026-09-16): deliverables, cost inputs, and print allocation confirmed with
Brandon. Framing costs are estimates, not vendor quotes — flagged `[ESTIMATE]` throughout
so a later pass can tell which numbers are still soft. A turnaround/revision policy draft
is in `turnaround-revision-policy.md`, pending Brandon's sign-off — not yet reflected here
because it could change the 2.5 hr overhead assumption once finalized.**

**Redirect (2026-09-16, same session): Champion's Legacy is no longer being recut to close
the gap against the live $849 price.** Brandon's call: that price was a starting point, not
an anchor — this tier is being rebuilt from the archival floor up as a deliberately premium,
heirloom-positioned offer aimed at wealthier parents (fewer, higher-price clients over more,
cheaper ones — the same fix the independent board pass in `ghl-board-simulation-independent.md`
found necessary on the capacity math). Do not read the "Gap" column below as the thing to
shrink; read the floor cost as the number the new price has to clear by a wide, premium
margin, not just beat.

**Materials direction, per Brandon:** no cost-motivated downgrades on the archival
components. Lock **100% Cotton Rag matboard** and **fully reversible mounting** — the
Alpha-Cellulose mat and Anodized Aluminum frame options in `Sports_Portrait_Framing.md`'s
downgrade matrix are off the table; the point is no longer minimizing this line. Frame
style (gallery black vs. color-matched wood) is a brand/aesthetic call, not a cost lever,
and gets decided with the differentiator rewrite, not here.

**Glazing — two-tier plan:** launch spec is a UV-filtering, **anti-reflective acrylic**
(the product in this category is Tru Vue's Optium Museum Acrylic or equivalent — not the
same item as `Sports_Portrait_Framing.md`'s plain "Conservation Clear® Acrylic," which is
UV-rated but standard-reflection, not anti-reflective). Museum Glass® is the upsell/future
option once volume justifies the heavier, pricier build. **Caution: Optium-class
anti-reflective acrylic is not in the SOP doc's pricing and is not cheaper than Museum
Glass** in general framing-market pricing — treat it as its own line needing a fresh vendor
quote, likely in the same $90–150+ band as glass, not the $60–90 plain-acrylic band. This is
general industry knowledge, not a verified quote — get one before locking a number.

---

## Deliverable model (confirmed, replaces what's live on the site today)

The live site (`src/data/packages.ts`) currently promises each composite as "a different
concept" — full independent creative work. That's not the real model. Confirmed structure:

- **Composite #1 is the hard one** — full custom concept and execution.
- **Every composite after the first is a variant** built off that first one — cheaper,
  faster, same underlying concept. This is what "custom variants" means: not recycled
  stock, not a from-scratch second concept.
- **Site copy needs to change** to stop promising "each a different concept" for Future
  Legend's three composites — it overpromises relative to both the cost model and what's
  actually produced.

**New bonus, confirmed for every tier:** a fast digital cutout (background removed) plus
reusable instructions for the client to try their own AI-generated backgrounds, delivered
while the full retouched composite is still in progress. **15 minutes `[ACTUAL]`** — Brandon
has to sit and watch the process and can't work on anything else during it, so it's real
occupied time even though it's mostly unattended processing, not active editing.

**Physical product, confirmed:** every tier includes some physical product — "unfortunate"
not to, at these prices. Exactly one **big** print size exists across the whole ladder (no
menu of large sizes). Allocation, confirmed:

| Tier | Physical product |
|---|---|
| Future Star | 1 small print (8×10) |
| Future Legend | 1 small print (8×10) |
| Champion's Legacy | 1 small print (8×10) **+ the one big print**, framed |

---

## Cost inputs

| Input | Value | Status |
|---|---|---|
| Target hourly rate | $100/hr | `[ACTUAL]` |
| Shoot time (full session) | 1 hr | `[ACTUAL]` |
| Client overhead (consult, scheduling, revisions, delivery/admin) | 2.5 hr | `[ACTUAL]` — may move once the revision policy is set |
| Composite #1 (custom) | 3 hr + $70 hard cost → **$370** | `[ACTUAL]` |
| Composite variant (2+) | 2 hr + $30 hard cost → **$230** | `[ACTUAL]` |
| Cutout + AI-background instructions | 15 min → **$25** | `[ACTUAL]` |
| Small print, 8×10 | ~$5 at cost (includes test-print waste buffer) | `[ACTUAL]` |
| Big print — **archival**: matted, UV/anti-reflection glass | **$300 at cost** | `[ESTIMATE]` — Brandon's rough number, not a vendor quote |
| Big print — **simple**: framed poster print, no mat, standard glass | **$115 at cost** (range $80–150) | `[ESTIMATE]` — mine, no vendor quote, get one before locking |
| Software/subscriptions | $100/month ÷ ~4 sessions/month (placeholder) → **$25/session** | `[ESTIMATE]` — real monthly session count still unknown |
| Payment processing | Stripe, 2.9% + $0.30 | `[ACTUAL]` — standard published rate |

**Not included** (would only push the floor higher, never lower): gear depreciation/
amortization, insurance, marketing spend, travel time and mileage, taxes, a real turnaround
/revision-round policy (still undefined anywhere in the docs or on the site).

---

## The math

**Fixed labor per client** (every tier): 1 hr shoot + 2.5 hr overhead = 3.5 hr × $100/hr =
**$350**

| Tier | Composites | Composite cost | Cutout | Print(s) | Fixed $350 | Software | Stripe fee | **Floor cost** | Price | **Gap** |
|---|---|---|---|---|---|---|---|---|---|---|
| Future Star | 1 (custom) | $370 | $25 | $5 | $350 | $25 | $11.87 | **$787** | $399 | **−$388** |
| Future Legend | 3 (1 custom + 2 variant) | $830 | $25 | $5 | $350 | $25 | $17.67 | **$1,253** | $599 | **−$654** |
| Champion's Legacy — **archival big print** `[ESTIMATE]` | 5 (1 custom + 4 variant) | $1,290 | $25 | $5 + $300 | $350 | $25 | $24.92 | **$2,020** | $849 | **−$1,171** |
| Champion's Legacy — **simple big print** `[ESTIMATE]` | 5 (1 custom + 4 variant) | $1,290 | $25 | $5 + $115 | $350 | $25 | $24.92 | **$1,835** | $849 | **−$986** |

## The finding

Restoring the variant model (vs. the "each a different concept" misread) brings Future
Star and Legend close to the original estimate — still roughly **2x** underpriced. Adding
the cutout bonus (now costed at the real 15 minutes, not a guessed 5) and real print costs
pushes Champion's Legacy further underwater than either prior estimate, not less:
**$1,835–$2,020 floor against an $849 price**, a gap of **116–138%**. The swing between
archival and simple framing is a real ~$185 lever, but both ends are `[ESTIMATE]` — treat
the whole Champion's Legacy row as soft until a vendor quote replaces it.

## Still open before this is final

1. ~~Get a real vendor quote for the locked archival build~~ — **deferred indefinitely,
   Brandon's call (2026-09-16): not worth holding the rest of this on.** The Champion's
   Legacy row stays `[ESTIMATE]` until he revisits framing on his own schedule; nothing else
   here waits on it.
2. **Turnaround/revision policy** — draft in `turnaround-revision-policy.md`, pending
   Brandon's sign-off. Once confirmed, re-check whether 2.5 hr overhead still holds.
3. **Differentiator rewrite (Week 0 queue) now folds in the permanence/heirloom angle** —
   Brandon does not want to keep the "you'll frame this for twenty years" line as written
   and wants sharper copy built on the same emotional core (this lasts; that's the thing
   that makes the price rational to a parent). Land this alongside the rewrite, not before.
4. Once 1–3 are locked, this sheet gets one more pass — not to close the $849 gap, but to
   set the new premium price and confirm it clears the real floor by the margin a premium
   positioning needs, not just beats it.

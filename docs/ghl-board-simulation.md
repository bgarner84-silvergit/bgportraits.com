# AI Sales Boardroom — GHL Workflow Build Sequencing

**Board case, quick-form intake, run 2026-09-14.** Full owner intake captured in
`AI-Sales-Boardroom\profiles\bgportraits.md` (first real Business Profile for this
business — supersedes the illustrative example the board used before). This
packet is the board's answer to: *what's the sequenced GoHighLevel build,
lead-to-paid-session, given what's actually true about this business today.*

**Evidence ceiling: mostly UNKNOWN**, per the owner's own rating. Several
individual fields are now DOCUMENTED-for-this-business (turnaround target,
consult-optional flow, capacity, contract tool, gallery host, referral
incentive, hard bot limits) because the owner stated them directly this
session — those are called out below. Margin, real pricing, and every
stage-conversion number remain UNKNOWN. No recommendation here assumes a
conversion rate that hasn't been measured.

---

## Reframe (read this before the sequence)

The original ask was framed as a content question — "what are the SMS
messages, what are the emails, how do I set up the AI knowledge base." Per the
board's reframe table, **"I need better scripts" usually means process,
qualification, or positioning aren't settled yet — a script is the last
layer, not the first.**

That reframe fires here, and harder than usual, for a reason specific to this
account: **nothing is built yet.** No workflows, no bot-ownership skeleton, no
payment processor connection. The GoHighLevel conflict guide
(`Projects\GoHighLevel\ghl-ai-workflow-conflict-guide.md`) exists specifically
because writing bot and workflow messaging *before* establishing which system
owns a conversation at any given moment is the single most common way these
builds break — double-sends, a workflow silently killing the bot, a contact
left permanently un-messaged. Content written against no skeleton has to be
rewritten once the skeleton goes in.

So the sequence below builds the ownership skeleton and the one economically
non-negotiable piece (deposit collection) *before* the rest of the content —
but it does not gate all copy-writing behind that, because writing copy is
zero engineering risk and the owner has limited weekly hours. Copy is drafted
alongside each phase, not held back.

---

## Diagnosis

**Classification:** primarily **funnel/process** and **measurement**
(taxonomy #13, #15), with **economics** (#14) and **qualification** (#6) as
secondary. Not a positioning or closing problem — the differentiator
(personal, one-athlete-at-a-time service) and the buyer alternative (team/
school photographer) are both already stated by the owner; that's enough to
write copy from. What's actually missing is the machinery.

**What's happening:** every lead lands in one channel (the widget), then is
handled entirely manually. No deposit is collected, so a booked date carries
no economic commitment. No workflow or bot exists to close the sub-second
speed-to-lead gap that decides which photographer a parent actually books.

**What should happen:** the account should have (1) a working ownership gate
so bot and workflow never fight over a contact, (2) an instant, qualifying
first response, (3) a deposit collected at the moment of booking, in that
order — because each later step both depends on and is undermined by skipping
an earlier one.

**What explains the gap:** the business went from "no automation" straight to
"design the whole AI conversation layer" without the connective tissue in
between. That's a normal sequencing mistake, not a strategy mistake — the
existing catalog research (`docs/ghl-workflows.md`) and the conflict guide are
both already correct; they just haven't been built against yet.

---

## Advisors activated

**Specialist Panel mode** (per `02_BOARD_ENGINE.md`) — the fewest advisors
that can diagnose this:

- **Sales Operations Specialist** (lead) — CRM, pipeline, speed-to-lead,
  capacity. Activated because this is fundamentally a funnel/process build,
  and because capacity is a hard 1–4 sessions/month ceiling that every
  automation decision has to respect.
- **Sandler** — activated on the qualification gap. Consult is optional in
  this business, which means the bot/workflow itself has to do the
  qualifying that a mandatory consult call would otherwise do.
- **Hormozi** — activated because margin is UNKNOWN and pricing is about to
  change. His constraint applies directly: *do not optimize conversion while
  ignoring margins* — building an elaborate conversion funnel on top of an
  unknown, currently-too-low price is optimizing the wrong variable first.

Dunford was considered (weak differentiation is a classic trigger) but not
activated as a full advisor — the owner already named a workable
differentiator (personal service) and a named alternative (team/school
photographer). That's sufficient for this build; a full positioning pass
belongs to the separate pricing case below, not this one.

---

## Advisor positions

**Sales Operations Specialist**
- *Diagnosis:* the CRM has no operating skeleton — no bot/workflow ownership
  rule, no payment connection, no instrumentation. Building message content
  on top of that is building on sand.
- *Recommendation:* build the ownership gate and connect payments before any
  multi-step nurture content goes live. Everything else can be sequenced
  around owner hours, but these two are prerequisites, not phases.
- *Evidence:* DOCUMENTED against the conflict guide's own documented failure
  modes (C-01, C-02, C-12); APPLICATION to this account's specific state.
- *Risk:* over-engineering the skeleton before there's real traffic to test
  it against. Mitigate by using the minimum viable Pattern C skeleton already
  specified in `Projects\GoHighLevel\CLAUDE.md`, not a larger rebuild.
- *Confidence:* high on the ordering logic, UNKNOWN on how long the actual
  build takes since none of it has started.

**Sandler**
- *Diagnosis:* "consult optional" without a qualification layer means the
  bot will treat any inbound interest as booking-ready. At 1–4 sessions/month
  capacity, one badly-fit booking is a real percentage of the month's
  capacity gone.
- *Recommendation:* the bot's first-contact questions must qualify (rough
  budget range, timeframe, what they want the finished piece for) before
  offering a direct-book link. Direct-book stays available for confidently
  fit leads; ambiguous ones route to consult.
- *Evidence:* HYPOTHESIS — no data yet on how often a bad-fit lead actually
  books direct. Flagged as the board's first instrumentation target.
- *Risk:* over-qualifying kills speed-to-lead's whole advantage if the
  qualifying questions feel like a form, not a conversation. Keep it to one
  or two questions, conversational, matching the widget's existing voice.
- *Confidence:* moderate — the general Sandler principle is solid; the exact
  question set needs testing against real replies.

**Hormozi**
- *Diagnosis:* margin is UNKNOWN and current pricing sits below the
  photographer's own stated target range. Building the full 8-group
  automation catalog (`docs/ghl-workflows.md`) now, at the current price
  point, means automating a below-target offer at scale before the offer
  itself is fixed.
- *Recommendation:* don't wait for the price increase to build the plumbing
  (the skeleton, speed-to-lead, deposits are price-independent), but treat
  every piece of AI-facing copy as **modular against a price field**, not
  hand-written at today's price. This was the owner's own requirement
  (modular knowledge base) and it is also the correct Hormozi-lens answer —
  it decouples "get the infrastructure built" from "get the offer right,"
  which are two different projects with two different owners of the decision.
- *Evidence:* DOCUMENTED that price is below target (owner statement);
  UNKNOWN margin; SYNTHESIS that modular pricing is the right technical
  answer to a stated business need.
- *Risk:* if pricing/package architecture isn't revisited soon, the
  automation will efficiently sell an underpriced offer at higher volume —
  the opposite of the owner's goal.
- *Confidence:* high that pricing needs its own pass; this is not resolvable
  inside a workflow-sequencing case.

---

## Key debate

The only real disagreement worth surfacing: **should pricing be fixed before
any automation is built at all?** Hormozi's lens would default to "yes, fix
the offer first." The board's resolution: **no** — because the
skeleton/speed-to-lead/deposit layer is priced-independent infrastructure
that has to exist regardless of what the final price is, and delaying it
costs real leads every week it isn't built. The one condition that makes this
safe is the modular-pricing requirement above: nothing gets hardcoded at
today's price. That's the guardrail that resolves the disagreement without
forcing a sequencing choice the owner didn't ask to make yet.

---

## Recommendation

Build in the order below. Each phase is scoped to roughly one evening,
matching the 5–10 hr/week constraint. Do not start a phase before the one
above it — several of the failure modes here (C-01, C-02, C-12 in the
conflict guide) come specifically from content going live before the
skeleton that's supposed to gate it.

### Phase 0 — Foundation (before anything else)
- Connect a payment processor in GHL. **Stripe recommended** — native GHL
  integration, and it's the processor the conflict guide's dunning behavior
  (D3, failed-card retries) assumes. `[UNKNOWN → this session: not connected]`
- Build the 8-stage Opportunity pipeline from `docs/ghl-workflows.md` if it
  doesn't exist yet in the sub-account.
- Run the conflict guide's **T-00 channel matrix** and **T-01 sleep-toggle
  audit** (30–45 min total). These are cheap checks, not builds: T-00 is
  writing down which channels each bot and trigger actually covers; T-01 is
  opening Bot Settings and recording whether a workflow message currently
  puts your bot to sleep. Skipping them doesn't save time — it just moves the
  debugging to later, blind.

### Phase 1 — Ownership skeleton (build before any messaging content)
- Build the **Pattern C** gate specified in `Projects\GoHighLevel\CLAUDE.md`:
  bot goes Active on lead entry → workflow waits on a `qualified` or
  `human_handover` tag → timeout at 48h → bot goes Inactive either way,
  ownership tag removed.
- This workflow contains **zero outbound message actions** — it only opens
  and closes the gate. That's what makes every later phase safe to add
  without re-litigating who's allowed to send.

### Phase 2 — Speed-to-lead, live (SMS is approved as of today)
- Build **A1** (instant SMS + email response) per the recipe in
  `docs/ghl-workflows.md`, with **SMS live from the start** — no need to stub
  it, since A2P 10DLC cleared 2026-09-14.
- Fold in Sandler's qualifying question (budget range / timeframe / what
  it's for) as the first bot question, per the advisor position above.
- **Write all pricing/package references as a GHL custom field or custom
  value**, not literal text in the bot's instructions or message templates.
  Changing the number later should mean editing one field, not retraining
  the bot or rewriting every template.
- Wire A1's entry into the Phase 1 ownership tag.

### Phase 3 — Qualification-aware booking path
- Since consult is optional, build the branch: qualified-and-confident →
  direct-book link; ambiguous → consult booking (**B1** from the catalog).
- This is the phase most likely to need real-world tuning — treat the first
  2–3 weeks of live leads as the instrumentation period for Sandler's open
  HYPOTHESIS above.

### Phase 4 — Deposit + contract (blocked on Phase 0)
- **D1** deposit-at-booking, invoiced through the now-connected processor.
- **D2** contract flow via DocuSign/PandaDoc — since the likeness/image-usage
  release is the **same document** as the shoot contract, this is a single
  signature step, not two. Simpler than the generic catalog assumes.

### Phase 5 — Prep & reminders
- **C1** session prep sequence (Day 0 / −14 wardrobe guide / −3 logistics /
  day-of), **C2** reminders + no-show recovery. Straight from
  `docs/ghl-workflows.md` — no account-specific changes needed here.

### Phase 6 — Gallery delivery
- **E1** "what happens next," **E2** gallery link + expiry countdown, keyed
  to **CloudSpot** as the gallery host.
- **`[GAP]`** — CloudSpot's webhook/Zapier support for pushing a
  `gallery-ready` signal into GHL hasn't been verified. Confirm this before
  building E2; if CloudSpot can't push a signal automatically, the fallback
  is a manual tag-add when a gallery goes live, which still works but isn't
  hands-off.

### Phase 7 — Review & referral
- **F1** review request, keyed to Payment Received.
- **F2** referral ask, incentive = **print/product credit** (owner's choice).

### Deferred
- **G3** seasonal/mini-session campaigns — explicitly deferred by the owner
  given 1–4 session/month capacity. Revisit once volume grows; building a
  15-session-weekend engine for a 1–4 session pipeline is solving a problem
  that doesn't exist yet.

### Not part of this case
- **Pricing/offer redesign.** The owner flagged wanting to raise prices from
  today's below-target level. That's a distinct board case for Hormozi +
  Dunford (offer architecture, positioning, willingness-to-pay), not a
  workflow-sequencing question. Recommend submitting it separately, using
  the quick form, once there's appetite to run it. The modular-pricing
  requirement above means this build won't need to be redone when that case
  concludes.

---

## Implementation

**First 24 hours:** connect the payment processor; run T-00 and T-01.
**First 7 days:** Phase 1 (ownership skeleton) built and tested against T-02
(double-send) and T-10 (every exit path reactivates the bot) from the
conflict guide's checklist.
**First 30 days:** Phases 2–4 live; first real data on inquiry → consult/book
conversion starts accumulating.

---

## Metrics

**Primary KPI:** inquiry → consult-or-direct-booking conversion rate.
Currently unmeasured — this is the first number the business will have.
**Secondary KPIs:** speed-to-lead response time (target: seconds, via A1);
gallery-to-order conversion once E2 ships.
**Guardrails:** zero double-send incidents (T-02); zero contacts left with
a permanently-inactive bot after a workflow exit (T-10).
**Economic metric:** revenue per session — blocked until margin is
established; flagged as an open UNKNOWN in the Business Profile, not solved
by this case.

## Experiment

**Hypothesis:** storing price/package details as a GHL custom field (rather
than embedding them in bot instructions or message copy) lets the pending
price increase go live with zero bot retraining and zero template rewrites.
**Variable:** the custom field value.
**Control:** the current draft, if any copy is written with a hardcoded
price before this field exists.
**Threshold:** after the next price change, zero manually-edited bot
messages or workflow templates are needed — only the field.
**Decision rule:** if that holds, this is the standing pattern for every
price-sensitive field going forward (including if/when the insurance line
starts using the same board). If it doesn't hold, the knowledge base
structure needs a redesign before Phase 2 copy is finalized.

---

## Status

Board profile filled and logged in `AI-Sales-Boardroom\18_MEMORY.md`. Nothing
in Phases 0–7 has been built in the live GHL account yet — this is the
sequencing decision, not a build log. Update this file's Status section as
phases complete.

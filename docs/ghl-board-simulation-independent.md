# AI Sales Boardroom — GHL Build, Full Board (independent advisors)

**Run 2026-09-14.** Second pass on the same question as
`ghl-board-simulation.md`. Both files are kept deliberately — comparing them
shows what changed when the method changed.

**What's different about this run.** The first pass was one model voicing all
advisors in a single reasoning pass, which is the known structural flaw in
this boardroom: disagreement can be manufactured because every position comes
from the same place. This run gave each advisor its own independent context.
Five seats, each reading only its own methodology file plus an identical set
of business facts, none able to see the others' reasoning, none allowed to
read the first packet. Each was told to argue its own lens hard rather than
produce a balanced answer.

That produced three things the first run could not:

1. **Real convergence.** Where independent seats agree, the agreement means
   something. Three seats, separately, put connecting payments ahead of
   writing any copy. Two, separately, said kill "From" pricing. Three,
   separately, said instrument the widget before building.
2. **Real conflict.** Sales Ops argued *against* the Pattern C architecture
   already written into the GoHighLevel project plan. Miner and Ops produced
   recommendations that are technically incompatible in a way neither could
   see (§Cross-examination, conflict 2).
3. **A finding nobody asked for.** Two seats independently ran arithmetic
   nobody had run, and it reframes the whole project (§Headline).

**Evidence ceiling: UNKNOWN overall**, per the owner's own rating. The
arithmetic below is the exception — it derives from published prices and a
stated capacity ceiling, both DOCUMENTED, so the conclusions drawn from it
are as solid as the inputs.

---

## Headline finding

Two seats, reasoning separately, both did this math unprompted:

| Scenario | Annual gross |
|---|---|
| 4 sessions/mo × $849 (ceiling, every buyer at top tier, zero costs) | **$40,752** |
| 4 sessions/mo × $599 (emphasized tier) | $28,752 |
| 2 sessions/mo × $599 (realistic) | **$14,376** |

Against the stated goal of replacing full-time income, the theoretical
best case is a fraction of it — before cost of delivery, self-employment
tax, or any ad spend. Inverted: at a hard ceiling of 48 sessions/year,
netting ~$150K requires **~$4,167 per client**, roughly 7× the emphasized
tier.

**And the ceiling is not actually reachable at the emphasized tier.** Four
Future Legend clients is 12 composites a month. At the owner's own estimate
of 3–6 hours of skilled Photoshop per composite, that's 36–72 hours of
editing against a 20–43 hour monthly budget that also has to cover shooting,
marketing, and admin. Real capacity at that tier is 1–2 sessions/month.
`[APPLICATION — rests on the per-composite hour estimate, which is UNKNOWN
and is the first thing to measure]`

A structural problem falls straight out of the tier design, and it needs no
data at all:

| Tier | Price | Composites | Revenue per composite |
|---|---|---|---|
| Future Star | $399 | 1 | **$399** |
| Future Legend | $599 | 3 | $200 |
| Champion's Legacy | $849 | 5 | **$170** |

**Margin per unit of your scarcest input falls as the customer spends more.**
The top tier pays 43% as much per composite as the entry tier, while
consuming five times the labor. The ladder scales the one thing that cannot
be bought more of. `[DOCUMENTED — derives from the published tiers]`

This does not mean the automation work is wasted. It means the board is
escalating a question to you before the build order matters — see
§What the board escalates.

---

## Reframe

You asked for messages, emails, and a bot knowledge base. Per the board's
reframe table, *"I need better scripts"* usually means process,
qualification, or positioning aren't settled — a script is the last layer.

That fired in the first run too. What's new is *why* three independent seats
said the copy was premature, each for a different reason:

- **Sandler:** with no deposit, writing nurture copy is rescuing a pipeline
  rather than building one. Nothing downstream of a free calendar is
  qualification.
- **Dunford:** the differentiator the copy would be built on is aimed at the
  wrong competitor. Copy written against it is wasted work.
- **Ops:** with zero instrumented conversion rates, every copy decision is an
  unauditable guess.

All three objections are cheap to clear — one hour, one hour, and thirty
minutes respectively. So the copy *is* in this packet (§Message library),
written against the corrected positioning and the corrected price policy.
Clear the three, and it's ready to paste.

---

## Diagnosis

**Classification:** **economics (14)** and **measurement (15)** primary;
**positioning (2)** and **qualification (6)** secondary; **funnel/process
(13)** last — which is an inversion of the first run, where process led.

**What's happening:** a business with a hard 1–4 session monthly ceiling,
priced at $399–$849, with unknown cost of delivery, is about to invest its
scarcest resource — 5–10 owner-hours a week — building an automation layer
whose maximum possible effect is capped by a constraint the automation
cannot touch. A bot that answers in eight seconds instead of eight hours
cannot add a fifth session to the month.

**What should happen:** four cheap, non-build tasks that make the automation
worth building — know the unit cost, fix the positioning line, confirm the
channel wiring, connect payments. Then build the smallest thing that
captures data.

**What explains the gap:** the 90-day goal — "a lead hits the webhook and an
AI agent responds untouched" — is a *systems* milestone that reads like a
*business* milestone. Ops named it directly as a vanity metric: it measures
that a machine spoke, not that anyone booked.

---

## Advisors activated

**Specialist Panel**, five seats, each run in isolation:

| Seat | Why activated |
|---|---|
| **Sales Operations Specialist** | The only seat with the GoHighLevel technical substrate. Owns build order and failure modes. |
| **Hormozi** (offer/economics) | Margin UNKNOWN, price below owner's own target, tier ladder untested. |
| **Sandler** (qualification) | One booking consumes up to 25% of monthly capacity, and nothing qualifies before it. |
| **Dunford** (positioning) | Buyer at awareness 0; copy must survive automated delivery to a stranger. |
| **Miner** (NEPQ / buyer psychology) | The seat that actually writes the first message. |

**Considered and not activated**, per the board's rule against convening
seats that merely exist: **Challenger** (its teaching-based reframe overlaps
Dunford here, and a commercial-teaching pitch does not survive a 160-character
text to a stranger); **Rackham** (discovery architecture overlaps Miner for an
SMS-length conversation); **Voss** (no live negotiation in scope).

---

## Advisor positions

Compressed. Each seat's full position was produced independently.

**Sales Operations Specialist**
- *Diagnosis:* capacity and economics wearing a funnel costume. Taxonomy:
  demand, economics, measurement — not follow-up or process.
- *Recommendation:* **Pattern A, not Pattern C.** Bot primary and Active,
  Auto Follow-Up on, plus one silent workflow containing zero outbound
  message actions — only tags, internal notification, pipeline stage.
  Conflicts require two senders; with one sender, C-01, C-04 and C-12
  cannot occur. Write the `bot-owns-thread` tag anyway as the upgrade path.
- *Catch the first run missed:* **the LeadConnector widget is a Live Chat
  channel, not SMS.** A bot assigned only to SMS answers widget chats with
  silence — no error, no log entry (C-14).
- *Risk:* Pattern A surrenders timing control entirely; every outbound is at
  the model's mercy.
- *Would change its mind:* widget inquiries above 15/month, or an explicit
  decision that this build is a reusable consulting asset. Either flips it to
  full Pattern C immediately.

**Hormozi**
- *Diagnosis:* the offer is plausibly priced below cost of delivery, and the
  tier ladder scales the input that cannot be bought.
- *Recommendation:* one hour with a spreadsheet — fully loaded hours and hard
  costs per unit — before anything else. Then restructure so **one hero
  composite is the product in every tier**, with tiers scaling on print size,
  framing, licensing, sibling athlete, rush turnaround — pass-through or
  near-zero-labor items. Extra composites à la carte. Entry $899–$1,200
  pending the cost sheet. Non-refundable deposit. Kill "From" pricing.
  Risk reversal: see the first composite before paying the balance.
- *The split that matters:* *"what is the optimal price"* is genuinely
  deferrable — it needs market data. *"Is my price above my cost"* is not —
  it's one hour, and it decides whether automating this is rational.
  **You deferred the floor when only the ceiling was deferrable.**
- *Would change its mind:* a cost sheet showing under ~4 fully loaded hours
  per client; or three paid bookings at $599 with a waitlist.

**Sandler**
- *Diagnosis:* the calendar has no price. There is no qualification step
  anywhere in this funnel and there cannot be one until money moves at
  booking. A cancellation costs the owner a month; it costs the parent an
  apology text.
- *Recommendation:* connect payments and make a deposit the only way to hold
  a date — before any copy. Then split qualification: **facts to the bot**
  (travel radius, sport/season timing, target date, which tier they're
  reading, whether both decision-makers are in), **judgment to the human**,
  and the human conversation happens *after* the deposit, as a fulfillment
  call rather than a sales call. That inverts today's design, where the
  scarcest hours are spent before any commitment.
- *Catch:* **your "never quote unapproved pricing" rule is incoherent** —
  the prices are already public. Redefine as: never quote outside the
  published band, never quote custom or framing work, never discount.
- *Risk, self-flagged:* at awareness 0, a deposit may convert near zero — a
  wall rather than a qualifier. Mitigate with a low, refundable amount.
- *Would change its mind:* book 10 inquiries with no deposit and track show
  rate. 9 of 10 showing means the free calendar isn't leaking.

**Dunford**
- *Diagnosis:* **the differentiator is aimed at the wrong competitor.**
  "I shoot every session myself, not a studio with rotating photographers"
  differentiates against multi-shooter studios. The named alternative is the
  team/school photographer — where the parent never met a photographer at
  all. Against that alternative the claim is invisible, unverifiable before
  purchase, and about Brandon rather than the kid.
- *Also:* "same look as the team shooters, executed further" concedes the
  category. It enters the frame *sports photos*, where the deciding criteria
  are price and convenience — both owned by the alternative, at a tenth of
  the price, already bundled.
- *Verdict on the automation stress test:* **fails.** A comparative-execution
  claim needs a quality reference the awareness-0 parent doesn't have, and
  needs side-by-side seeing. SMS cannot carry that.
- *Replacement:* uniqueness and permanence, not craft or service. *"Every kid
  on that team gets the same poster with a different head. This one exists
  once, and it's built to hang."*
- *Observation:* `brand.md` already carries the right position — "the portrait
  you'll frame for twenty years" — while `project-brief.md` says "execution
  and one-on-one service." **The copy is ahead of the strategy.**
- *Would change its mind:* ten logged chat conversations. If parents ask "how
  is this different from team photos" and the converting answer is price or
  service rather than uniqueness, it's wrong.

**Miner (NEPQ)**
- *Diagnosis:* not speed. At awareness 0 the parent can't articulate a
  problem, so they have nothing to buy against, and every standard
  speed-to-lead sequence pitches into that vacuum and manufactures
  resistance. The first text has to get the parent to say out loud why they
  reached out.
- *Recommendation:* question-first, one question per message, no CTA in the
  opener. Full sequence in §Message library.
- *Ethics catch:* the bot may hold Brandon's voice but **must not imply
  real-time human presence.** "Came through" is true; "I'm looking now" is
  not.
- *Independently reached Dunford's finding:* "if the offer itself doesn't
  differentiate from the team photographer, no question fixes it."
- *Would change its mind:* ten actual replies. If most are "how much?" rather
  than a trigger, the parent is transactional and this sequence is wrong —
  lead with price and proof.

---

## Cross-examination

Only the conflicts that change the decision.

### Conflict 1 — What happens first? (four different answers)

Ops says channel audit, Hormozi says cost sheet, Sandler says connect
payments, Dunford says rewrite the differentiator line.

**Resolution: this is a false conflict.** All four are cheap, none is a
build, and none blocks another. Together they are roughly one evening. The
real question underneath — *does anything get built before these four are
done?* — got the same answer from three of four seats: no. So they become
Week 0, and the build order follows them.

### Conflict 2 — Pattern A vs. Pattern C, and the timing trap

**This is the sharpest conflict in the session, and neither seat could see
it.**

Ops argues Pattern A: one sender means the entire class of double-send bugs
is structurally impossible, and Pattern C's machinery is over-built for 2–5
leads a month. That contradicts the Pattern C skeleton already written into
`Projects\GoHighLevel\CLAUDE.md` and recommended by the first run.

But Miner's sequence is timed: t+60 seconds, +4 hours, next morning, day 4.
**Deterministic timing is exactly what Pattern A gives up** — Ops flagged it
as Pattern A's weakness without knowing another seat was about to depend on
it. Run Miner's sequence as a workflow drip and you have a second sender,
which forces Pattern C. Run it as bot-owned Auto Follow-Up and you keep one
sender, but timing is at the model's discretion.

**Resolution as originally written:** implement Miner's follow-ups as bot
Auto Follow-Up rather than a workflow drip — keeping Pattern A's guarantee of
a single sender, getting Miner's structure, and paying for it in timing
precision. A synthesis neither seat reached alone.

**Superseded once the escalated question was answered.** Under Pattern C the
gate makes two senders safe, so the trade disappears: run the follow-ups as a
deterministic workflow drip and get Miner's exact cadence. The conflict was
real, but it was an artifact of Pattern A's single-sender constraint, and
that constraint is gone. Worth recording anyway — it is the clearest example
in this session of two independent seats producing an incompatibility that a
single reasoning pass would have smoothed over without noticing.

### Conflict 3 — Is the copy premature?

Three seats say don't write it; Miner wrote it; you asked for it.

**Resolution: not a real conflict once sequenced.** Dunford's objection is
specifically "stop building bot copy *against the current positioning
line*." Fix the line (one hour) and the objection dissolves. Sandler's
objection dissolves once payments are connected (thirty minutes). The copy
below is written against the corrected frame and the corrected price policy.

### Conflict 4 — Deposit: how much, and refundable?

Sandler wants $100–150 refundable. Hormozi wants $250–350 non-refundable.

**Resolution: Sandler's number first, Hormozi's second.** Sandler's own risk
note is the better guide at awareness 0 — you are testing whether a deposit
gate converts *at all*, and a low refundable amount tests that at minimum
cost. Hormozi's non-refundable $250–350 is right once demand is proven. This
is sequencing, not splitting the difference.

### Conflict 5 — Dunford vs. Miner on the opening move

Dunford wants contrast first ("this isn't the team photo packet") so the
parent has a category slot. Miner wants a question first, on the grounds
that a seller-supplied frame raises resistance. Both cannot be message one.

**Resolution: they're solving for different surfaces.** Dunford's frame is a
*positioning* job and belongs where the parent arrives — the site and the
widget welcome message, where you have room and they're already reading.
Miner's question is a *conversation* job and belongs in SMS, where you have
one shot before disengagement. Fix the frame where they land; ask questions
where you talk. Neither compromises.

### Weighted view

A reasoning aid, not proof. Relevance = how much this seat's lens bears on
the decision; confidence = how well-evidenced its position is given what's
UNKNOWN.

| Seat | Relevance | Confidence | Weight |
|---|---|---|---|
| Hormozi | 95 | 80 | **76** |
| Sales Ops | 90 | 75 | **68** |
| Sandler | 85 | 70 | **60** |
| Dunford | 75 | 65 | **49** |
| Miner | 60 | 45 | **27** |

Miner ranks last not because the work is weak — it's the most immediately
usable output in the packet — but because message quality is the layer most
dependent on everything above it being right, and its own evidence base is
entirely untested. That ordering is itself the board's answer.

---

## Recommendation

### Week 0 — four cheap things, no building (one evening)

1. **Cost sheet.** One hour. Fully loaded hours and hard costs for one
   session at each tier. This gates everything, and it is arithmetic, not a
   pricing strategy session.
2. **Rewrite the one-line differentiator.** One hour. Start from Dunford's
   candidate: *"Your athlete's teammates all get the same poster. This one is
   built for him, and it's built to hang."* Push it into `project-brief.md`
   positioning, the site, and the widget welcome.
3. **T-00 channel matrix and T-01 sleep-toggle audit.** Twenty minutes.
   Specifically confirm the bot covers **Live Chat**, not just SMS — the
   widget is a Live Chat channel and a mismatch produces silence with no
   error (C-14).
4. **Connect Stripe.** Thirty minutes. Nothing downstream of booking is
   buildable without it.

### Then build, in this order

| Phase | What | Why here |
|---|---|---|
| **1** | Pipeline stages + lead-source field. Nothing else. | Starts a clock you cannot start retroactively. Three seats independently demanded instrumentation first. |
| **2** | **Pattern C** — the full ownership skeleton from `Projects\GoHighLevel\CLAUDE.md`: bot set Active on entry, `bot-owns-thread` tag, wait on `qualified` or `human_handover`, 48h timeout, bot set Inactive on every exit path. Workflow contains **zero outbound message actions**. | **Revised after the escalated question was answered** — see that section. Pattern A was the right call for portrait ROI; this is a transferable-asset build, which is Ops's own stated flip condition. Pattern C is what carries to the insurance line. |
| **3** | Bot knowledge base (§below) + Miner's opener. Follow-ups may now run as either a gated workflow drip or Auto Follow-Up — Pattern C makes both safe. **Prefer the workflow drip** for deterministic timing, which is what Miner's cadence needs. | Conflict 2 dissolves under Pattern C: the gate makes two senders safe, so you no longer trade timing precision for safety. |
| **4** | Deposit-to-hold-a-date: $150, refundable to 7 days out. Booking link issues the deposit invoice; only a paid deposit takes a slot. | Sandler's gate. Converts every prior step from theater into qualification. |
| **5** | Contract + likeness release (one combined document, DocuSign/PandaDoc) fired on deposit paid. | Single signature step — simpler than the generic catalog assumes. |
| **6** | Prep sequence (−14 wardrobe / −3 logistics / day-of) and reminders. | Low architecture risk, pure content, protects a scarce slot from a no-show. |
| **7** | Gallery delivery via CloudSpot. **`[GAP]` — verify CloudSpot can push a webhook or tag into GHL before building.** If it can't, fall back to a manual tag. | The likeliest silent breakage in the whole chain. |
| **8** | Review request on payment received; referral ask with print-credit incentive. | Cheapest repeat revenue, but worthless before there are clients to ask. |

**Deferred:** seasonal/mini-session campaigns. A 15-session-weekend engine
for a 1–4 session pipeline solves a problem that does not exist.

**What to stop:** the eight-group, thirty-workflow catalog. And stop treating
"an AI agent responds untouched" as the 90-day success metric — replace it
with **sessions booked** and **inquiry → session rate**.

---

## Message library

Voice rules, from `widget-copy.md` and binding on every line below: first
person, sentence case, **no exclamation marks**, never "team" or
"representative" — it is one person. And Miner's ethics constraint: the bot
may hold the voice but must never imply live human presence.

Everything marked `[PATTERN]` is load-bearing. Everything marked `[WORDING]`
is a starting point to make your own.

### The frame — site and widget welcome, not SMS

Per conflict 5, this is where Dunford's contrast belongs. Four things must be
true before a price is read: it's a made object; it exists once; it lives on
a wall at size; it is not what the team sells.

> `[WORDING]` Every kid on that team gets the same poster with a different
> head. This one gets built — one athlete, one session, around eighty frames
> down to a single finished piece, made to hang at size and still be up when
> he's twenty-five.

### M1 — inbound, t+60 seconds

`[PATTERN: acknowledge, no CTA, exactly one question, about their trigger]`

> `[WORDING]` Thanks — your note about {{athlete_name}} came through. Before
> I look at dates, what made you start thinking about a portrait for him this
> season?

Why this question and not the alternatives: *"what sport?"* collects your
data, not theirs. *"What's your budget?"* ends the conversation. *"Want to
book a call?"* is a CTA before a problem exists. *"Senior year?"* puts your
hypothesis in their mouth. Only "what made you start looking" returns their
own trigger — which contains the emotional driver, the timeline, and the real
deadline, discovered rather than asserted.

### M2 — +4 hours, no reply

`[PATTERN: binary, low-effort, still diagnostic]`

> `[WORDING]` No rush. Most parents land somewhere between "the season's
> nearly over" and "I just want one real picture of her." Which is closer?

### M3 — next morning, no reply

`[PATTERN: proof, with a question attached]`

> `[WORDING]` If it's easier to see it than describe it, the work's here:
> bgportraits.com/work — tell me if anything there is close to what you
> pictured.

### M4 — day 4, final

`[PATTERN: honest takeaway, no manufactured scarcity]`

> `[WORDING]` Last one from me — if this isn't the season for it, say "not
> now" and I'll leave it there. If it is, I'll send what's open.

### Branch — they replied

`[PATTERN: one question at a time. Never two in a breath.]`

> `[WORDING]` That makes sense. When you picture it finished — where's it
> hanging, and how big?

Size is the honest proxy for tier, and it's a question a parent can answer
without feeling priced.

Then, price without pressure `[PATTERN: the bot points, never quotes]`:

> `[WORDING]` The three packages and what's in each are here:
> bgportraits.com/#packages — tell me which one's closest to what you had in
> mind and I'll work from that.

**If they ask price first, answer immediately.** Dodging is what creates
price resistance, not the number.

### The up-front contract — before a date is held

`[PATTERN: what happens next, what each side commits, the floor, and
explicit permission to say no]`

> `[WORDING]` Sessions run about three weeks out and I only take a few a
> month. To hold your date it's a $150 deposit, credited to your session —
> refundable up to seven days out. If the date doesn't work after we talk,
> you get it back. If it's not a fit, I'll tell you that too.

### Post-session

- **Same day:** thank-you, plus a real date the gallery will be ready. Do not
  let the bot generate the date — that's one of your hard limits.
- **Gallery live:** link, how to order, and the expiry date. The countdown is
  the sales mechanism.
- **Payment received:** review request, then the referral ask with the
  print-credit incentive, two touches maximum.

---

## Bot knowledge base — structure

Your stated requirement was modularity so pricing can change without
rewriting everything. The design that delivers it:

**Store every number as a GoHighLevel Custom Value, never as literal text in
the bot's instructions.** The bot references `{{custom_values.tier_1_price}}`;
a price change is one field edit, not a retraining pass. This is the
experiment below.

Five layers, in priority order:

1. **Identity and voice** — first person, one person, sentence case, no
   exclamation marks, never implies live presence. Stable; rarely edited.
2. **Frame** — the Dunford positioning lines. Changes only when positioning
   changes.
3. **Offer facts** — tiers, inclusions, prices, turnaround. **The volatile
   layer.** All values, no prose. This is the modular layer.
4. **Refusal rules** — your hard limits, corrected per Sandler:
   - Never quote **outside the published band**; never quote custom print or
     framing work; never discount.
   - Never promise a delivery date.
   - Never handle payment or refund disputes.
   - Never claim to be looking at something in real time.
5. **Escalation triggers** — what routes to Human Handover: any price
   negotiation, any custom or framing quote, any complaint, any question the
   knowledge base doesn't answer, and any message that reads as distress.

Note the correction in layer 4: stating a **published** price is not quoting
an unapproved price. The original rule as written would have forbidden the
bot from repeating numbers already on your website.

---

## Metrics

**Primary KPI for the business:** inquiry → session booked. Not response
time, not "the bot replied."

**Primary KPI for the build**, now that it is an asset rather than an ROI
play: **how much of it moves to the insurance line without rework.** Measured
crudely and honestly — when that line starts, count the workflows, bot
layers, and conventions that port over versus those rebuilt from scratch. If
most of the coordination layer ports, the thesis held; if it doesn't, you
built a photography funnel and told yourself otherwise.
**Secondary:** deposit conversion (of leads offered a date, how many pay);
show rate; hours-to-deliver per session — the last one is what tells you
whether real capacity is 4/month or 2.
**Guardrails:** zero double-sends; zero contacts left with a permanently
inactive bot; zero bot messages quoting outside the published band.
**Economic metric:** gross margin per session — currently UNKNOWN, and the
Week 0 cost sheet is what produces it.

## Experiments

**E1 — modular pricing.** *Hypothesis:* prices stored as Custom Values let a
price change ship with zero bot retraining and zero template rewrites.
*Threshold:* after the next price change, zero manually-edited messages.
*Decision rule:* if it holds, this is the standing pattern for every
price-sensitive field, including on the insurance line later.

**E2 — the deposit gate.** *Hypothesis:* a $150 refundable deposit qualifies
without walling off an awareness-0 buyer. *Variable:* deposit required to
hold a date. *Threshold:* Sandler's own test — of the next 10 inquiries
offered a date, if 9 of 10 would have shown anyway, the gate is solving a
non-problem; if 5 of 10 evaporate, it pays for itself immediately.
*Guardrail:* if deposit conversion is near zero, the gate is a wall — drop to
a card-on-file hold before abandoning the idea.

**E3 — question-first opener.** *Hypothesis:* M1's trigger question
out-replies a link-first control. *Threshold:* ten replies. If most are "how
much?", the buyer is transactional and the sequence inverts to price-and-proof
first.

---

## The escalated question — ANSWERED 2026-09-14

Two seats arrived at this independently, and it was not the board's call:
*is this build a photography ROI play, or a reusable asset?*

**Brandon's answer: a reusable asset for the insurance line.**

Photography is the test rig. The build is deliberately past what portrait
revenue justifies, because its purpose is to be reusable for life insurance
and, potentially, for a consulting offer where having built it is itself the
credential.

### What that changes

**1. Architecture reverts to Pattern C.** This is the board working as
designed rather than a reversal: Ops named this exact fact as its own
falsification condition — *"an explicit decision that this build is a
consulting asset... flips me to the full Pattern C skeleton immediately."*
The condition was met. Pattern C is back, but now for an articulated reason
instead of by default, and having survived a genuine argument against it.
Pattern A remains the correct answer for a business optimizing portrait ROI;
that is simply not this business.

**2. The pricing urgency drops, but the cost sheet does not.** Hormozi's
sharpest claim — that the *floor* question is not deferrable — was argued on
the premise that you were trying to replace income with portraits. You are
not. The pressure to restructure toward $1,200+ entry pricing largely
dissolves. What survives is narrower and still worth an hour: **know whether
each session costs you money to run**, because every test of the rig costs
you that amount. Selling below cost is a bad idea regardless of purpose; not
reaching $4,167/client no longer matters.

**3. "Does it transfer?" replaces "does it pay for itself?"** By portrait ROI
this build will always look like over-engineering. That is the wrong ruler.

**4. Build the clean version, not the minimum.** Ops's minimalism was
explicitly conditional on the ROI framing. Documentation, naming
conventions, and the test discipline (T-00 through T-15) stop being overhead
and become part of the deliverable.

### What actually transfers

| Carries to insurance | Photography-only |
|---|---|
| Pattern C ownership skeleton and the `bot-owns-thread` convention | Gallery delivery (CloudSpot) |
| Bot knowledge-base architecture — the five layers, Custom Values for volatile facts | Session prep / wardrobe sequences |
| Qualification routing: facts to the bot, judgment to the human | Print and framing upsell |
| Speed-to-lead and the question-first opener structure | Seasonal / mini-session campaigns |
| Deposit and payment mechanics | Tier ladder and composite economics |
| The pre-launch test checklist and failure-mode catalogue | |

Roughly: **the coordination layer and the knowledge-base architecture
transfer; the content does not.** Build the former deliberately, treat the
latter as disposable.

### The design implication nobody has accounted for yet

**Insurance is regulated; photography is not.** The board's own routing matrix
pulls in a Regulated-Industry Specialist for that line, and its governance
file treats compliance as a design constraint rather than a footnote. An AI
bot talking to insurance prospects carries suitability and disclosure
obligations that a bot talking to a parent about portraits does not.

If this asset is meant to transfer, then the **refusal-rules layer and the
human-handover escalation path are load-bearing architecture, not
configuration.** Build them as first-class now, on the photography line where
mistakes are cheap, rather than retrofitting them onto a regulated line where
they are not. That makes the photography build a genuine rehearsal of the
hard part.

Two things to verify before assuming transfer, neither resolved here:
A2P 10DLC registration is per-brand, so the approved photography campaign
almost certainly does not cover an insurance brand `[GAP — check
`reference\a2p-10dlc-playbook.md` before planning that line's SMS]`; and the
insurance line remains gated on licensing regardless.

---

## Where this run differs from the first

| | Run 1 (single-pass) | Run 2 (independent) |
|---|---|---|
| Diagnosis | funnel/process + measurement | **economics + measurement** |
| Architecture | Pattern C | **Pattern A**, with Pattern C as documented upgrade path |
| Pricing | deferred wholesale, per your scope | **floor not deferrable** — one-hour cost sheet gates the build |
| Differentiator | accepted "personal service" | **rejected it** — aimed at the wrong competitor |
| "From $399" | not examined | **kill it** — two seats, independently |
| Capacity math | not run | **run, and it reframes the project** |
| Channel risk | missed | **widget is Live Chat, not SMS** (C-14) |
| Your bot rule | accepted as stated | **found incoherent, corrected** |
| Copy | deferred to build time | **written** |

The first run was not wrong so much as it was agreeable. It accepted your
framing on pricing, your differentiator, and your architecture, and optimized
within them. The seats that couldn't see each other went after all three.

---

## Status

Nothing here has been built. Week 0's four tasks are the next action, and
none of them is a build. The escalated question above should be answered
before Phase 2, because it changes the architecture.

# Differentiator & positioning copy

**Status (2026-09-16): DECIDED and written into `src/`. Uncommitted — not pushed, not
live.** Covers the hero block and the Approach section. Packages, tiers, and About are
a later pass, deliberately, because tier copy has to change again once pricing lands.

**Why this rewrite happened.** Two problems from two sessions:

1. Session 10's independent board pass found the differentiator aimed at the wrong
   competitor. "One athlete at a time / not a preset run across a roster" separates you
   from multi-shooter studios. The real alternative is the team or school photographer,
   where the parent never met a photographer at all. Replacement frame: **uniqueness
   and permanence**.
2. Brandon rejected `brand.md`'s "the portrait you'll frame for twenty years" as a
   sentence while keeping its emotional core — this lasts, and that is what makes the
   price rational to a parent.

**Four calls that shaped the draft:**

| Decision | Call |
|---|---|
| Where permanence sits | **Closes.** Lead with what the image is; permanence lands last, as justification. |
| Contrast with the team photographer | **Implicit.** Never named. The gap has to be self-evident from specificity. |
| Archival specs in customer copy | **Named.** Cotton rag, museum-grade glazing, reversible mounting — stated, not translated. |
| Scope | Hero + positioning + Approach only. |

---

## The locked copy

### Hero

**Eyebrow** (unchanged)

> North Richland Hills, TX · Custom athlete portraits

**Headline**

> One athlete.
> One portrait.
> The one
> in their head.

Four lines, breaking after "The one" — a syntactic seam, so nothing snaps mid-phrase.
It also isolates "The one" as its own beat, which carries the singularity idea on a
single line.

*Why this line.* It names the emotional product: the version of themselves the kid
already carries around. The third "one" continues the pattern rather than introducing
an unrelated idea, and it completes the sentence — one portrait, *the* one, the one in
their head. Ends on a hard monosyllable, matching the stops on "athlete" and
"portrait." It is unclaimable by anyone shooting a roster, and it says nothing about
permanence, which is what frees permanence to close the page.

*What it replaced.* "One athlete. One portrait that owns the wall." — described the
object's presence rather than what the work is.

**Lead paragraph**

> Your athlete already knows what the picture looks like. Everything after that — the
> session, the compositing, the print — exists to make it real.

Does two jobs: converts the headline's mental image into a promise of a real object,
and its three nouns map directly onto Approach steps 02, 03 and 04, so the hero
quietly previews the section below it.

*What it replaced.* "Not a preset run across a roster" — put down the alternative,
which the implicit call rules out.

**Buttons** unchanged — "Request a session" and "See the work."

### Approach

**Section title**

> Built, not taken

Replaces "The difference is the hours." The old title argued labor, which only lands
if the reader already knows what the cheap version costs, and it was an implicit shot
at volume shooters. The new one states the category difference in three words: a
photograph is *taken*, this is *built*. It names no one.

**Section lead**

> A photograph is captured in a fraction of a second. This is designed first, shot
> second, then built by hand — concept, composite, grade, retouch — until it is a
> finished piece of work. Then it is made into something you can hang for good.

The last sentence hands off to step 04 so permanence has somewhere to land.

**The four steps** (was three; 04 is new and carries the close)

**01 — It starts in their head**
> Before the camera comes out we agree on what the finished portrait is: the pose, the
> light, the scene it will live in. The shoot exists to serve that picture.

Pays off the headline as an actual process step. *Cut:* "Your athlete is not working
through a shot list somebody else wrote" — explicit contrast.

**02 — One athlete, one session**
> However long it takes. The session runs until the frame is right, not until the clock
> says stop — time and attention are what separate a portrait from a photograph.

Absorbs "however long it takes," which was the strongest authority line in the option
set and was wasted in a hero. *Cut:* "No line of teammates waiting behind them." The
remaining contrast is between two *categories*, not between you and another person.

**03 — Built by hand, frame by frame**
> Every hero image is cut from its background, composited into an art-directed scene,
> graded and retouched individually. That is hours of work per image, and it is the
> whole point.

Barely touched. It was already doing its job.

**04 — Made to outlast the season** ← the close
> The framed piece is built to conservation standard: 100% cotton rag matting,
> museum-grade UV glazing, and fully reversible mounting, so nothing adhesive ever
> touches the print. It can be re-framed in thirty years without damage. Seasons end.
> This does not.

The specs are not there to impress a parent with framing vocabulary. They are there
because a premium price needs a reason that can be checked: "heirloom quality" is a
claim, "100% cotton rag, reversible mounting, no adhesive on the print" is a fact — and
it is language the alternative literally cannot use. Then the last two sentences say
the quiet part without being grim about it. Youth sports is temporary and every parent
already knows it. That only works in the closing position; leading with it would ask a
parent to care about matboard before they have fallen for the picture.

---

## Harmonization pass — what had to change to make it one page

Locking the hero forced four fixes elsewhere. Worth recording, because they are the
kind of thing that silently reappears in a later edit:

1. **"In their head" appears exactly twice** — the headline and step 01's title. A
   third use in the Approach lead was drafted and cut. Twice is a spine; three times is
   a tic.
2. **"Frame by frame" appears once.** The hero lead originally carried "built by hand,
   frame by frame," which collided head-on with step 03's title. The hero lead gave it
   up.
3. **The hero lead stopped explaining the process.** An earlier draft had it saying "we
   agree before the camera comes out," which duplicated step 01 almost word for word.
   It now stays at altitude and lets step 01 own the detail.
4. **"Built, not taken" is deliberately echoed**, not accidentally repeated — the
   section title states the category argument and the section lead proves it in the
   first sentence.

## One open decision

**Should archival pigment print stock become standard on every tier?**

Step 04 as written is scoped to *"the framed piece"* — true today, since only
Champion's Legacy includes framing. The stronger version of that step opens with
"Prints are made on archival pigment stock" with no qualifier, which makes the
permanence claim true site-wide instead of for one tier. It costs a couple of dollars
per 8×10 and it is a one-line change to `Approach.astro`.

The site is honest either way. This is a business decision about what you are willing
to promise, not a copy decision — which is why the conservative version shipped.

## Still true, still worth stealing later

**"The one thing from this season that is not on a phone."** Written as a hero
candidate, rejected for that slot because it defines by negation and does not build
desire. But it is loss-framed, and it identifies a truer default alternative than the
team photographer — for most parents the real competition is their own camera roll.
Belongs in the **Packages or Inquire copy**, where a parent is deciding to spend, not
where they are still looking. Hero builds desire; purchase-point copy closes with loss.

---

## Appendix — the Cialdini pass

Run against Cialdini's seven principles. Most of this is outside the approved scope,
but it changes which decisions actually matter, so it stays with the copy.

**On the headline he would have overruled the pick** and taken the loss-framed "not on
a phone" line, since people work harder to avoid losing something than to gain the
equivalent. That objection resolves to *placement* rather than quality — see above.

**Ranked by what he would fix first. The headline is not at the top.**

1. **Social proof — the biggest gap on the site, by a distance.** There is none
   anywhere (`v1-review.md` item 1.5). His strongest modifier is *similarity*: proof
   from people like the buyer beats proof from experts. The asset to chase is two
   sentences from the Shepherd parents — a parent talking to parents. *Open ask.*
2. **Authority through costly-to-fake detail — decided, and placed correctly.** Cheap
   assertions ("premium", "heirloom") versus checkable facts (cotton rag, reversible
   mounting). Authority must land *before* the ask, and step 04 sits above Packages in
   the page order. *Done.*
3. **Scarcity as arithmetic, not urgency.** The 1–4 session/month ceiling is real and
   free to state. But the deeper scarcity is that the kid is this age, this size, on
   this team exactly once — and **"Seasons end. This does not." is already doing it.**
   *Calendar line still unwritten; the season line shipped.*
4. **Liking — the About section still has no photo of Brandon** (open since session 7).
   The stronger unused asset is that he wants this *as a parent*, which converts the
   pitch from vendor-selling-up to a parent who solved his own problem. *Open.*
5. **Unity — team colors are a persuasion device, not a finish option.** The framing
   SOP's color-matched wood frame puts the kid's team identity on the family wall.
   *Affects the deferred frame decision.*
6. **Reciprocity is firing at the wrong moment.** The free cutout arrives *after* the
   money, where it does almost nothing. **Counter-argument:** it costs 15 minutes of
   genuinely occupied time, and giving it away pre-purchase at a 1–4 session/month
   ceiling invites people who want the free thing and nothing else. If anything moves
   earlier, make it informational, not production time. *Open, and cheap to get wrong.*
7. **Consistency — already present, do not break it.** Step 01 has the parent helping
   define the portrait before it exists, which commits them before any money moves.
   *Shipped; the only risk is simplifying it away later.*

**The constraint Cialdini insists on:** these work only when true, and faking them
costs the business permanently. The honest position today is one shoot, one athlete, no
testimonials — so the move is to go get one real piece of proof, not to write around
the absence of it.

## Appendix — hero lines considered

Eleven candidates were drafted before the pick. Kept in compressed form so the ground
does not get re-covered in a later session.

| Line | Angle | Why not |
|---|---|---|
| One portrait that owns the wall | Presence | Describes the object, not the work. The incumbent. |
| The portrait your athlete earns | Reward | "Earns" narrows the market to winning athletes. |
| One athlete. One concept. One of one. | Singularity | Best alternative. Aims at the kid, not the buyer. |
| The poster they have had in their head | Imagined version | "Poster" is a cheap noun; caps perceived value. |
| Made like the game matters | Seriousness | Any photographer can claim it. Fails the test. |
| The one thing from this season that is not on a phone | Loss | Right argument, wrong position — moved to purchase copy. |
| Not taken. Built. | Compression | Cryptic alone; duplicates the Approach title. |
| One season. One shot at keeping it. | Loss aversion | Puts permanence in the hero, breaking the close. |
| Built by a parent who sat in the same stands | Unity | Makes the photographer the subject of the hero. |
| You never missed a game. Do not miss the picture. | Consistency | Strongest mechanism, closest to guilt. Ethical edge. |
| Cotton rag. Museum glass. One athlete. | Authority | Front-loads permanence; cold beside a photo of a kid. |

The winning structure was chosen first ("One athlete. One portrait. ___"), which made
the third beat carry all of the differentiation. Test applied to each candidate: *could
this sit under another photographer's name without being a lie?* "The way they see
themselves" passed that test but was rhythmically clunky — soft three-syllable ending,
line break mid-phrase, abstract where the rest of the page is concrete. "The one in
their head" fixes all three and keeps the meaning.

---

## Files changed

| File | Change | State |
|---|---|---|
| `src/components/Hero.astro` | Headline, lead paragraph | Edited, uncommitted |
| `src/components/Approach.astro` | Section title, section lead, steps 01–04 | Edited, uncommitted |
| `docs/brand.md` | Hero line recorded; "twenty years" alternate retired | Edited, uncommitted |

`npm run build` passes; verified the new strings are present in `dist/index.html` and
the replaced lines are gone. **Not committed and not pushed** — `main` auto-deploys to
`bgportraits.com`, so pushing puts this live.

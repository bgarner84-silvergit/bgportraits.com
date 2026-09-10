# bgportraits.com — domain cutover & A2P resubmission runbook

**Written session 8 (2026-09-09).** This is the sequenced runbook for the Phase 5
cutover. It supersedes the thin Phase 5 bullet list in `project-plan.md`.

## The goal, stated precisely

Get the **new Astro site serving at `https://bgportraits.com`** so the A2P 10DLC
customer-care campaign can be resubmitted against a real, complete business site
(campaign 30922 was denied for a coming-soon page — `reference/a2p-10dlc-playbook.md`
§1.1). This is **not** the full launch. The deferred visual work (broken
portfolio cutouts, templated hero, Brandon self-portrait, tier re-cut, social
proof) is refined **after** cutover, during the ~2-day A2P review window, on the
live site. See memory `a2p-ready-is-the-bar-for-cutover-not-launch-ready`.

Owner of each step is marked **[Brandon]** or **[Claude]**.

---

## Step 1 — Close the last A2P content gaps that can be done pre-cutover

Everything the A2P reviewer checks (`playbook` §2–§5) is already on `rebrand`
**except** the two items below, and both need the live domain — so they move to
Step 4. Pre-cutover, only this:

1.1 **[Claude]** Final pre-cutover review of `rebrand` against `playbook` §2
checklist, on the preview URL. Confirm, with a screenshot each:
- footer shows registered name + `7921 Ember Oaks Dr, North Richland Hills, TX
  76182` + `817-919-7658`, matching the brand registration
- `/privacy` and `/terms` load, are linked in the footer, and the SMS section
  still carries HELP + STOP in both required places (§4)
- no second phone/SMS opt-in form anywhere (only the LeadConnector widget)
- no affiliate / lead-buying language
- prices or packages present (they are — "From $399 / $599 / $849")

1.2 **[Brandon]** Decide the cutover mechanism — see Step 2. This is the one
real decision in the runbook.

---

## Step 2 — Choose the cutover mechanism  **[Brandon decides, Claude executes]**

`bgportraits.com` is currently served by the **original** Cloudflare Pages
project, which builds `main` as plain HTML. Two ways to put the new site on it:

### Option A (recommended) — reconfigure the original project, merge `rebrand` → `main`

The original project keeps the domain; we change what it builds.

1. **[Claude]** In the **original** Pages project → Settings → Build:
   - Framework preset → **Astro**
   - Build command → `npm run build`
   - Build output directory → `dist`
   - Add environment variable `NODE_VERSION` = `22.12.0` (Production)
   - Do **not** trigger a deploy yet.
2. **[Claude]** Locally: `git checkout main`, `git merge --no-ff rebrand`,
   `git push origin main`.
3. The original project auto-builds `main` with the new config → `bgportraits.com`
   serves the new site within ~2 min.
4. **[Claude]** Delete or disable auto-deploy on the `bgportraits-rebrand`
   preview project once the live site is verified (keep it ~a week as a rollback,
   then delete).

**Why recommended:** ends with one project, `main` as the source of truth, the
same model the repo was always heading toward (`repo-structure.md`). The
brief order-of-operations risk (a `main` deploy landing between merge and
reconfigure) is removed by reconfiguring *first* — build settings apply on the
*next* build.

### Option B (faster, messier) — move the domain to the new project

1. **[Claude]** In `bgportraits-rebrand` → Custom domains → add `bgportraits.com`
   (and `www` if used). Cloudflare updates the DNS records automatically since
   the zone is on the same account.
2. **[Claude]** In the original project → remove the custom domain.
3. `rebrand` stays the production branch; `main` is left behind.

**Why not default:** leaves a branch called `rebrand` serving production
indefinitely and a project named `bgportraits-rebrand` as the real site.
Cosmetic, but it accumulates. Take this only if the merge in Option A hits a
snag and speed matters more than tidiness.

> **Rollback for either option:** the other Cloudflare project still holds a
> working build. Re-point the domain / re-enable it. DNS TTL is short on
> Cloudflare, so rollback is minutes, not hours.

---

## Step 3 — Verify the live site  **[Claude]**

Immediately after `bgportraits.com` serves the new build, check on the real
domain (not the preview):

- `https://bgportraits.com/` renders, hero image loads
- `https://bgportraits.com/privacy` and `/terms` load
- `https://bgportraits.com/robots.txt` and `/sitemap-index.xml` serve, and the
  sitemap URLs read `https://bgportraits.com/...`
- footer NAP correct
- the LeadConnector widget loads and opens
- no mixed-content or console errors on any of the three pages
- `curl -I https://bgportraits.com` returns `200` and a Cloudflare header

Screenshot the homepage and both legal pages for the session record.

---

## Step 4 — A2P proof-of-consent, on the live domain  **[Brandon + Claude]**

These are the two items that could not be done before cutover (`playbook` §5):

4.1 **[Brandon, Claude assists]** Open the widget on `bgportraits.com`. Confirm:
- both consent checkboxes present and **unchecked by default**
- disclosure text beside the checkbox is intact and contains: full legal
  business name, "consent is not a condition of purchase," "Reply HELP for
  help," "STOP to unsubscribe," message-and-data-rates, "message frequency
  varies," and links to terms + privacy
- fields are Name / Phone / Message only

4.2 **[Brandon]** Submit one real test lead with the transactional checkbox
**unchecked** and confirm the form refuses to submit; then check it and confirm
submission succeeds and the lead lands in GoHighLevel. This is the "gates
submission on the deployed site, not just preview" check the playbook calls out.

4.3 **[Claude]** Re-capture `docs/widget-prechat.png` from the live flow —
the pre-chat screen showing both unchecked checkboxes and the full disclosure.
This image is the artifact attached to the campaign.

---

## Step 5 — Warn the brand contact  **[Brandon]**

Before submitting, tell whoever is listed as the A2P **brand contact** that they
will receive verification outreach, roughly when, from whom, and what they will
be asked to confirm (`playbook` §1.2, memory
`a2p-registration-contacts-the-person-you-list`). An unresponsive or confused
contact stalls verification on its own. If Brandon is the listed contact this is
a no-op — just be ready for the call/email.

---

## Step 6 — Resubmit the A2P campaign  **[Brandon, in GoHighLevel]**

- Resubmit the **customer-care / transactional campaign only** (`playbook` §6).
  Not the promotional one.
- Submitted URL: `https://bgportraits.com` — the apex domain, never the
  `.pages.dev` preview (`playbook` §3, a subdomain can fire 30922 by itself).
- In the campaign description, state plainly that the site is now a complete,
  operating business site (services, published pricing, portfolio, about,
  working contact), addressing the prior 30922 denial directly.
- Attach the refreshed `docs/widget-prechat.png`.

**Working state after Step 6:** new site live at `bgportraits.com`, A2P
customer-care campaign resubmitted, ~2-day review clock running.

---

## Step 7 — The refinement window (~2 days) and after

Ongoing work now targets whatever branch became production in Step 2 (Option A:
`main`; Option B: `rebrand`). Small refinements can go straight there for this
solo repo, or via short-lived branches if a change is risky.

The deferred backlog, in the order `v1-review.md` recommends:

1. **Photo retouch session** (review 1.1, 1.4, 3.1, 3.5) — re-export the five
   cutouts with frame-edge headroom, add contact shadows, swap the hero to a
   dark-ground frame, vary the radial grade per image, fix the three
   mismatched alt-text lines.
2. **Brandon self-portrait** into the About section (review 1.2 — the slot and
   the old two-column layout are noted in `About.astro`).
3. **Widget polish** (review 1.3 leftovers) — reshape the amber header to carbon
   if GHL allows.
4. **Tier re-cut** (review 2.3–2.5) — ladder on kind not quantity, move the
   single amber button to Packages.
5. **Social proof** (review 1.5) — the Shepherd-family quote, requested with the
   likeness release.
6. **Likeness release** (`docs/likeness-release.md`) — Texas attorney review,
   then signed. Required before any shoot photo runs in a paid ad.

Also add **`src/pages/404.astro`** — right now unknown paths on the live site
return HTTP 200 serving the homepage (Cloudflare SPA-style fallback), i.e.
soft-404s. Astro emits `404.astro` as `/404.html` and Cloudflare then serves a
real 404. Five-minute fix; not an A2P blocker.

Structured-data enrichment (review 4.3) and mobile-nav polish (3.6) are
low-priority and can wait.

---

## Cutover record (session 8, 2026-09-10)

Executed. `https://bgportraits.com` now serves the new Astro site.

- `rebrand` → `main` fast-forward merge; `bgportraits-rebrand` Pages project
  production branch switched to `main`; deploy `9bd51f7` green.
- Custom domain `bgportraits.com` moved off the old `bgportraits-com`
  Workers-Builds project onto `bgportraits-rebrand`. The old apex record is
  service-managed / read-only, so it had to be **removed from the old project
  first**, then added to the new one — ~90 s of 522 in between. Now Active, SSL
  enabled.
- `bgportraits-com` git integration disconnected (it had also autodetected and
  deployed the new site). Its version history still holds the coming-soon page
  (`fb4b2f18`) for a true rollback; its frozen `.workers.dev` deployment is the
  quick rollback anchor.
- Rollback if needed: re-add the custom domain to `bgportraits-com` (roll it
  back to `fb4b2f18` first if the coming-soon page is wanted). Minutes.

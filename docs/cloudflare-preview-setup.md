# Cloudflare Pages — preview project setup

**Goal:** a second Cloudflare Pages project that builds the `rebrand` branch and
serves it at a `*.pages.dev` URL, so the v1 site can be reviewed on a phone
without touching the live domain. The existing project (which serves
bgportraits.com from `main`) is not modified.

**Why a second project:** Pages build settings are per-project, not per-branch.
The live project can't run an Astro build while `main` is still plain HTML, so a
throwaway project is the clean way to get a preview. It gets deleted at launch
(Phase 5), when the domain moves to the new build.

**Who does this:** Brandon — it needs the Cloudflare dashboard and GitHub
authorization. ~10 minutes.

---

## Steps

1. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.**
   Authorize Cloudflare for the `bgarner84-silvergit/bgportraits.com` repo if it
   isn't already connected.

2. **Pick the repo**, then on the setup screen:

   | Field | Value |
   |---|---|
   | Project name | `bgportraits-rebrand` (this becomes `bgportraits-rebrand.pages.dev`) |
   | Production branch | `rebrand` |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave blank — the Astro project is at the repo root)* |

3. **Add one environment variable** (Settings → Variables and Secrets, or the
   "Environment variables" panel on the setup screen). Production scope:

   | Name | Value |
   |---|---|
   | `NODE_VERSION` | `22.12.0` |

   `package.json` requires Node ≥ 22.12; the Pages default is older and the build
   will fail with an engines error without this.

4. **Save and Deploy.** First build takes ~1–2 minutes. Watch the log — a green
   "Success" and a `dist/` upload means it worked.

5. **Open `https://bgportraits-rebrand.pages.dev`** and review on the phone.
   Every push to `rebrand` from here on auto-deploys to this URL.

6. **Do NOT add a custom domain to this project.** Leaving it on the `.pages.dev`
   subdomain is deliberate — it keeps bgportraits.com pointed at the live
   coming-soon site until the Phase 5 cutover.

---

## Known preview-only quirks (don't chase these here)

- **A2P will not accept a `*.pages.dev` URL.** Playbook §3: a platform subdomain
  can trigger error 30922 on its own. The preview is for review only; the A2P
  resubmission happens after the domain cutover, against bgportraits.com itself.
- **Lighthouse best-practices / accessibility** dip on the LeadConnector widget
  (third-party cookies, its own font). Documented under Phase 3 — the site's own
  markup scores 100/100.

---

## At launch (Phase 5) — not now

1. Merge `rebrand` → `main`.
2. Either point bgportraits.com at this project, or switch the original
   project's build settings to Astro (`npm run build` / `dist` / `NODE_VERSION`)
   and let it build from `main`.
3. Delete whichever project is now unused.
4. Verify `/privacy`, `/terms`, footer NAP, and the consent widget on the live
   domain, then start the A2P resubmission (playbook §2 checklist).

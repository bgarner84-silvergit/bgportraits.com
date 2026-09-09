# LeadConnector chat widget — copy

Paste-ready text for the GoHighLevel chat widget rebrand (review item 1.3).
Field names vary slightly by GHL version; match by what the field does.

**Voice:** first person, sentence case, no exclamation marks, no "team" or
"representative" — it is one person. Mirrors the site's Inquire section.

**Widget ID stays `6a94ed46852536cc91868a08`.** Editing text and theme is safe;
the A2P campaign reviews the consent disclosure, the two unchecked checkboxes,
and the fields collected — none of which change here (playbook §5).

---

## Copy, field by field

| Field (GHL) | Replace with |
|---|---|
| Launcher heading (collapsed bar, line 1) | **Tell me about your athlete** |
| Launcher subheading (line 2) | One athlete, one session. I usually reply the same day. |
| Chat header title (expanded) | **Brandon Garner Photography** |
| Chat header subtitle | Custom athlete portraits · North Richland Hills, TX |
| Welcome message (first bubble) | Send me your athlete's name, sport and season, and what you'd like on the wall when it's finished. I'll come back with availability and a plan for the piece — usually the same day. *(alternates below)* |
| Name field label / placeholder | Name / Your name |
| Phone field label / placeholder | Phone / Best number to reach you |
| Message field placeholder | Your athlete, their sport and season, and what you have in mind |
| Message field default / prefilled text | *(leave empty — remove "I want to know more")* |
| Submit button label | Send message |
| Confirmation message (after submit) | Thanks — I've got it. I'll be in touch shortly, usually the same day. If it's easier, call or text 817-919-7658. |

---

## Welcome message — alternates

Pick one. All first person, same voice; they differ in length and what they lead
with. Keep it to two sentences max — the chat bubble is small on mobile.

1. **Default (balanced).**
   Send me your athlete's name, sport and season, and what you'd like on the wall
   when it's finished. I'll come back with availability and a plan for the piece
   — usually the same day.

2. **Short and direct.**
   Tell me about your athlete — name, sport, season, and what you picture on the
   wall. I'll reply with availability and next steps, usually the same day.

3. **Leads with the differentiator.**
   Every portrait is built for one athlete. Tell me about yours — sport, season,
   and how you'd want it to look finished — and I'll come back with availability
   and a plan.

4. **Warm.**
   Glad you're here. Send me a few details about your athlete — sport, season,
   and the kind of portrait you have in mind — and I'll be in touch, usually
   within a day.

5. **Sets the process expectation.**
   Send me your athlete's name, sport and season. We'll talk through the piece —
   the pose, the scene, where it hangs — then I'll confirm the details in
   writing.

6. **Package-aware** (points at the pricing you just published).
   Tell me about your athlete — sport, season, and which package you're looking
   at. I'll confirm availability and the details, usually the same day.

7. **Question hook.**
   What's the portrait you want for your athlete? Send me their sport and season
   and a line about what you're picturing, and I'll take it from there — usually
   a same-day reply.

---

## Do NOT edit

- **Both consent checkboxes** — leave the wording exactly as it is now, and both
  **unchecked by default**. That text is what passed A2P review; a changed word
  risks the campaign. After you finish editing the theme, confirm both are still
  present, unchanged, and unchecked.
- The fields collected: name, phone, message. Do not add an email field or a
  second phone opt-in (playbook §5: one opt-in path per page).

After any change, re-capture `docs/widget-prechat.png` from the live site — that
screenshot is the proof-of-consent artifact submitted with the campaign.

---

## While you're in the theme settings (not copy, asked earlier)

| Setting | Value |
|---|---|
| Primary / accent colour | `#F5852B` (amber) |
| Header background | `#14110F` (carbon) — or black `#000000` |
| Header text | `#F2EEE7` (bone) |
| Launcher | Collapsed **bubble**, bottom-**right** — not expanded, not centred |

Setting the launcher to a collapsed bottom-right bubble also makes the
`Inquire.astro` line true again — tell me and I'll change it back from "the
message form at the bottom of this page" to "the chat button in the corner".

"Powered by LeadConnector" is only removable on higher GHL plans; not worth
chasing for v1.

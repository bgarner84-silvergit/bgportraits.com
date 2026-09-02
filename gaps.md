# A2P 10DLC / SMS Compliance Gaps

Review of `privacy.html`, the landing page, and the LeadConnector chat widget against
the standard A2P 10DLC / carrier campaign-review checklist. Captured 2026-08-30,
updated 2026-08-30 after several rounds of widget revisions, verified against
`widget-prechat.png` (final: widget ID `6a94ed46852536cc91868a08`).

## Already correct (privacy.html)

- Dedicated "SMS / Text Messaging" section
- Message types described (scheduling, booking confirmations, service updates)
- "Message and data rates may apply"
- "Message frequency varies"
- STOP to opt out
- Customer-care contact (email + phone)
- Service-provider sharing disclosed (CRM / scheduling platform)
- No sale of personal information

## Resolved by the chat widget

The LeadConnector pre-chat form (see `widget-prechat.png`) now covers what the earlier
review flagged as the biggest rejection risks:

- **Visible opt-in CTA** — the pre-chat form collects Name, Phone, and the question,
  with a dedicated SMS consent checkbox that is **unchecked by default**. This is the
  proof-of-consent screen for the campaign submission.
- **Consent disclosure at the point of collection** — shown next to the checkbox, and
  it already includes "Consent is not a condition of purchase," "Reply HELP for help,"
  "STOP to unsubscribe," msg & data rates, msg frequency varies, and links to the
  terms and privacy policy.

## Status: all items resolved as of 2026-08-30

All seven gaps below are DONE. Remaining before submitting the campaign:
verify the two deployment notes under #5, take a final screenshot of the live
widget, publish to Cloudflare Pages, then submit the A2P campaign.

## Gaps (all resolved)

### 1. Non-sharing clause is weaker than carriers expect — DONE 2026-08-30
The SMS section of privacy.html now reads:

> No mobile information will be shared with third parties or affiliates for marketing
> or promotional purposes. Information sharing with subcontractors in support services,
> such as our scheduling and CRM provider, is permitted solely to deliver the services
> you request. Text messaging originator opt-in data and consent are never shared with
> any third parties.

**Scope:** privacy.html edit. Complete.

### 2. Missing HELP keyword in privacy.html — DONE 2026-08-30
"Reply HELP for help" now appears alongside the STOP language in both the
SMS / Text Messaging section and the Your Choices section.

**Scope:** privacy.html edit. Complete.

### 3. Widget message-type wording — DONE 2026-08-30
The widget now shows two separate unchecked opt-in checkboxes: one for
"informational/transactional messages" (the customer-care campaign being
registered) and one for "promotional messages" (a future marketing campaign).
Splitting consent per campaign type is the carrier-preferred pattern.

**Scope:** GoHighLevel / LeadConnector chat-widget settings. Complete.

### 4. Widget business name — DONE 2026-08-30
Both checkbox disclosures now say "Brandon Garner Photography."

**Scope:** GoHighLevel / LeadConnector chat-widget settings. Complete.

### 5. Consent checkbox is required — DONE 2026-08-30
Both checkboxes are unchecked by default, and the transactional checkbox was
confirmed to gate form submission in the GHL preview.

**Still to verify on the deployed site:**
- The informational/transactional checkbox (not the promotional one) is the one
  that is required to Send; the promotional checkbox stays optional.
- Do not send promotional texts until a separate A2P campaign is registered for
  marketing traffic. The first submission is the customer-care / conversational
  campaign only.

**Scope:** GoHighLevel / LeadConnector chat-widget settings. Complete.

### 6. Add "consent is not a condition of purchase" to privacy.html — DONE 2026-08-30
The SMS section now states: "Consent to receive text messages is not a condition of
purchasing any goods or services."

**Scope:** privacy.html edit. Complete.

### 7. Policy / site wording mismatch — DONE 2026-08-30
Removed the "early access list" phrasing from the Information We Collect section,
made the launch-notification bullet conditional ("if you have asked us to"), and
softened the email opt-out language so it no longer implies a mailing list with an
unsubscribe link the site does not have.

**Scope:** privacy.html edit. Complete.

## Suggested order of work

1. Apply privacy.html edits (#1, #2, #6, #7). DONE.
2. Update the widget disclosure text and business name in LeadConnector (#3, #4). DONE.
3. Verify the consent checkbox is required to submit (#5). DONE in preview.
4. On the deployed site, confirm the transactional checkbox (not promotional)
   gates submission; take a final screenshot of the opt-in flow.
5. Publish to Cloudflare Pages, then submit the customer-care A2P campaign.
6. Later: register a separate marketing A2P campaign before sending promotional texts.

## GHL "Business Website Compliance Checklist" — reviewed 2026-08-30

1. Site live, no 404s — OK (verify the Cloudflare deploy is on the latest commit).
2. TOS + privacy policy on the site — OK, both linked in the index.html footer.
3. Registered address + phone visible on the site — DONE 2026-08-30. Phone was
   already present; added the brand address (7921 Ember Oaks Dr, North Richland
   Hills, TX 76182) to the index.html footer and the Contact sections of
   privacy.html and terms.html.
4. No affiliate / lead-buying language — OK. "Affiliates" appears only in the
   privacy.html non-sharing clause ("will not be shared with affiliates"), which
   is carrier-recommended wording, not a lead-buying claim.
5. Chat widget integrated — OK, index.html only, widget ID 6a94ed46852536cc91868a08.
6. No other phone / SMS opt-in forms on pages with the widget — OK. The widget is
   on index.html only, and index.html has no HTML form of its own.

Also cleaned up 2026-08-30: terms.html no longer references a non-existent
"early access form" (the "Early Access List" section is now "Contacting Us",
describing the chat-only flow), matching the earlier privacy.html reconciliation.

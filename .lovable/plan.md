# Houser Construction — Real Info Integration + Phase 2 Kickoff

## 1. Update `src/config/business.ts` with real details

Replace placeholders with client-provided info:

- **Phone:** `907-310-6828` → `phoneHref: tel:+19073106828`
- **Email:** `houserconstruction@…` — need domain confirmation (see question below). Use `houserconstruction@gmail.com` as temporary placeholder with a clear TODO, or wait for domain.
- **Service area:** `Alaska` (statewide, not just Anchorage/South-Central)
- **Business hours:** remove — client said none. Drop the hours line from footer.
- **Address:** client didn't provide — remove street address from footer, keep just "Alaska" as service region.
- **Years in business:** `1` (but 12 years experience) — reframe stats to "12+ Years Experience" instead of "25+ Years Building"
- **Legal:** Licensed, bonded, insured ✓ (already reflected)
- **Faith-based:** no — no changes needed
- **Reg #:** remove placeholder until provided

## 2. Update messaging / brand voice

Weave in client's stated identity:

- **Tagline option:** "The old is gone, the new has come." (biblical reference client used, but framed as renewal/transformation, not overtly faith-based since they said no faith identity)
- **About blurb:** "Taking the old and making the new — solving today's problems by building for tomorrow." Focus on **new construction + remodel** across **residential, commercial, and government contracting**, with growth into **larger building contracts and real estate subdivisions**.
- Update services list to reflect actual offerings: New Construction, Remodeling, Commercial, Government Contracting, Real Estate (subdivisions/development). Remove/de-emphasize services they don't currently do (e.g. "Design-Build" as separate service).

## 3. Adjust stats (honest positioning)

Current placeholder stats overstate tenure. Replace with:

- `12+` Years Experience
- `Licensed` Bonded & Insured
- `AK` Statewide Coverage
- `Residential · Commercial · Government` (or drop 4th stat)

## 4. Portfolio section — honest "in progress" framing

Client currently has: residential real estate before/afters, fences, decks. No large commercial yet. Planned: stripmall (drawings pending).

Options:

- Reframe Work section as "Recent Projects" showing what they actually have (fences, decks, residential remodels) once photos arrive.
- Add "Coming soon" placeholder for the stripmall.
- Until photos arrive, keep current stock imagery but change captions to generic categories ("Residential Remodel", "Deck & Fence", "Commercial — Coming Soon").

## 5. Add Real Estate tab/section

Client wants real estate integrated (not a separate site):

- Add `/real-estate` route (Phase 2) with before/after gallery + a lead form/funnel.
- Add "Real Estate" to primary nav.

## 6. Phase 2 build order (recommended)

1. Update `business.ts` + copy across home page (this turn, once approved)
2. **Contact page** with working form (Lovable Cloud submission → email)
3. **About page** with real story + "old is gone, new has come" theme
4. **Real Estate** landing with before/after gallery + lead funnel form
5. **Services** detail pages
6. **404** polish

## Open questions before I start

1. **Email domain:** what's the full email? `houserconstruction@gmail.com---(none yet)`, `@houserconstruction.com`, or something else? Do you own a domain yet?
2. **Tagline:** keep current "Built to last." or switch to "The old is gone, the new has come." as primary tagline? Or( use one as tagline and the other as secondary --do this)?
3. **Stripmall / future projects:** want a "Coming Soon" teaser section on the home page, or hold until plans are drawn? (thats fine)
4. **Address in footer:** remove entirely, or put a PO Box / city (e.g. "Based in Alaska")?--(keep based in Alaska)

Once you answer, I'll implement the config update + copy refresh in a single pass and then move to the Contact page.
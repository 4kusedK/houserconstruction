# Houser Construction — Home Page UX/UI Audit & Polish Plan

## Quick take

The foundation is strong: brand system is applied consistently, typography hierarchy reads as "industrial-editorial," navy/red accents feel right for a contractor. The issues are mostly **weight, contrast, and one weak conversion moment** — not a redesign.

Below: your two specific fixes, then an honest audit with concrete changes I'd recommend. Everything stays inside the current brand system (navy `#0A2342` / red `#B5121B` / Chakra Petch + Archivo + Inter).

---

## 1. Your two reported issues

### a. Logo too small in header
- **Desktop:** bump full-color logo from `h-10 md:h-11` → `h-12 md:h-14`, and increase header height `h-16 md:h-20` → `h-20 md:h-24` so proportions stay right.
- **When scrolled (condensed):** bump the symbol mark from `h-9` → `h-10`.
- **Mobile menu top bar:** bump reversed logo from `h-10` → `h-12`.

### b. "Request an estimate" button blends into background (Contact CTA band)
Root cause: the button is red, and behind it on desktop there's a red panel (`absolute right-0 w-1/3 bg-red`). The red button sits directly on top of the red block → almost invisible.

Fix — change the CTA band composition:
- **Drop the split red panel.** Replace with an all-navy band that has a subtle red diagonal accent (top-right corner rule, ~2px) or a red vertical rule between copy and CTA column. Keeps brand energy, removes the collision.
- **Primary CTA becomes white-on-navy with red hover** (higher contrast against dark navy than red-on-red). Alternative: keep red button, but move it onto a white/paper inset card that floats on the navy — creates a "quote card" moment.
- Secondary phone button stays `outline-light`.
- Add a third supporting line under CTAs: "Typical reply in 1 business day · Free site visit."

I'll pick the "white primary + red hover, red diagonal rule accent" direction unless you prefer the floating quote card.

---

## 2. Broader UI/UX audit — what I'd change

### Structure & flow (keep, tweak, add)

**Keep as-is:** Hero → Positioning → StatBar → Services → Projects → Process → Testimonials → Credentials → FAQ → CTA. The ordering matches how a commercial buyer evaluates a GC.

**Tweak:**
- **Hero:** headline "Built to last. / Built with intent." is good, but the sub-headline is muted white/70 and reads soft. Increase to white/85 and consider swapping the second line for something more specific to Alaska ("Built for Alaska.") — grounds the brand geographically in the first 2 seconds.
- **StatBar:** the four stats are strong but sit low-contrast on `paper-sunk`. Make the numbers larger (`display-lg` instead of `display-md`) and add a thin red rule above each number — turns a passive strip into a proof moment.
- **Services grid:** the hover-flip-to-navy is nice but hides content until interaction. Add a persistent `→` arrow bottom-right of each card that slides on hover, so the affordance is visible without hovering.
- **Projects gallery:** currently 2-column all the way down. Editorial contractors (SOM, Turner) use a **broken/asymmetric grid** — first project full-width, then 2-col, then a wide + narrow pair. Same components, more magazine feel. Low-risk win.
- **Testimonials:** three columns of text-only quotes on solid navy reads flat. Add a small circular monogram (initials in Chakra Petch on navy-mid) beside each name — costs nothing, adds humanity.

**Add:**
- **"Currently building" ticker** just below the StatBar — one line: `Now on site: Cook Inlet Residence · Midtown Fit-Out · Hillside Custom Home`. Auto-marquees slowly. Reinforces "we're active" — a huge trust signal for GCs. Optional, but very brand-appropriate.
- **Sticky "Get a quote" bar on mobile** (thin, navy, appears after scrolling past hero). Mobile conversion for contractors is almost entirely phone/quote taps.

### Visual system

**Colors — no changes to the palette itself.** But two distribution tweaks:
- Red is currently used only for accents/rules/buttons. Introduce **one full-red editorial moment** — e.g. a numbered "01 / 02 / 03 / 04" strip on the Process section with red backgrounds behind the numerals — so red isn't only "danger button" red.
- The `charcoal/80` body color on `paper` is fine but slightly washed. Move body copy to `charcoal` full strength; reserve `/80` for secondary text only.

**Typography — keep the pairing.** Two refinements:
- Hero H1 could gain 1 weight of drama with a `tabular-nums` display treatment on the year in the eyebrow ("Est. 2000") — small detail, feels intentional.
- Section eyebrows are good but repetitive ("The Studio," "What we do," "How we work," "Selected work," "Client voice," "Credentials," "Answers"). Standardize to a **numbered system** — `01 — Studio`, `02 — Services`, `03 — Work`, etc. Turns the page into a chaptered document, which fits the "built to last" tone.

**Motion:** current Reveal fades are tasteful. Add **one signature moment** — a red horizontal rule that draws in from left as sections enter viewport. One repeatable gesture > many micro-animations.

**Density:** section padding is `py-24 md:py-32` everywhere. Vary it — the Positioning and Testimonials sections can be tighter (`py-20`) so the page has a rhythm instead of one metronome tempo.

### UX / conversion

- **Header:** add phone number as a tap-to-call link on desktop (top-right, before "Get a quote"). Contractors get called more than emailed. Small `font-ui` treatment, navy → red on hover.
- **Projects:** each card links to `#` — dead. Either link to a real detail page (Phase 2) or replace with `role="img"` non-links until Phase 2, so users don't get a broken affordance.
- **FAQ:** first FAQ should be pre-opened (`<details open>`) — invites scanning.
- **Contact band:** already covered above. Also add the email + phone as inline text underneath the buttons for users who prefer to copy rather than click.

### Accessibility & SEO (small)
- Hero scroll-down chevron animates infinitely (`animate-bounce`) — gate on `prefers-reduced-motion`.
- Add `aria-label` to the projects grid ("Selected projects").
- Add `alt` text per project image using project name + category instead of just name.

---

## What I'd build now (Phase 1.5)

If you approve, I'd ship in this order in one pass:

1. **Header:** larger logo (desktop + scrolled + mobile), taller header, add phone link.
2. **Hero:** stronger sub-headline contrast, gate chevron animation.
3. **StatBar:** larger numerals + red rule above each.
4. **Services:** persistent arrow affordance on cards.
5. **Projects:** asymmetric grid (1 wide + 2×2 + 1 wide + 1 narrow pair), better alts, remove dead links.
6. **Process:** red numeral treatment (the "editorial red moment").
7. **Testimonials:** monogram circles.
8. **FAQ:** first item open by default.
9. **Contact CTA band:** rebuild — drop split red panel, white primary button with red hover, red diagonal rule accent, add reply-time microcopy + inline contact fallback.
10. **Section eyebrows:** numbered `01 — Studio` system.
11. **Mobile:** sticky quote bar after hero.

Skipped for later (they're bigger swings and belong with Phase 2 pages): "Currently building" ticker, signature red-rule reveal motion, project detail pages.

## Technical notes

- All changes are frontend/presentation only — no schema, no server functions, no new packages.
- Files touched: `SiteHeader.tsx`, `routes/index.tsx`, `SectionHeading.tsx` (add optional `number` prop), possibly `styles.css` (one new utility for the red rule reveal if I add it now).
- No changes to `business.ts` content, no routing changes, no dependency changes.

---

Want me to build Phase 1.5 as scoped above? Or trim/expand the list — happy to drop any item you disagree with (e.g. skip the numbered eyebrows or the asymmetric project grid) before I implement.

# Polish Pass — no new pages

Everything below is styling, spacing, and copy on the existing home page (plus the `/work` gallery). No new routes, no new sections, no backend.

## 1. Fix the handshake block
The flat cartoon handshake is the weakest visual on the site and undercuts the "licensed commercial contractor" tone.
- Replace it with one of the real project photos (a wide, structural shot from the Westland set), framed in the same navy panel with the red corner rule.
- Keep the blueprint pattern backdrop, but let the photo carry the panel instead of an illustration floating on white.
- If the illustration must stay, shrink it and drop the white card so it reads as a mark, not a stock graphic.

## 2. Merge the two navy bands
Right now the stat bar and the credentials bar are two nearly identical navy strips separated only by the gallery. That repetition flattens the page.
- Keep the stat bar where it is (after Partnership).
- Fold "Licensed / Bonded / Insured / Family Owned" into the contact band as a slim row above the phone number, so the page has one navy statistic moment, not two.

## 3. Vertical rhythm cleanup
- Standardize section padding to a single scale: `py-28 md:py-40` for light sections, `py-16 md:py-24` for the navy bands. Some blocks currently drift off this.
- Tighten the gap between the Partnership heading and its grid (currently `mt-16 md:mt-20` on top of section padding — reads as a hole).
- Fix the empty paragraph left in Partnership (a `p` containing only a newline) that adds phantom space.
- Give the gallery's featured project and the two-up grid a consistent bottom margin so the "See all projects" link doesn't float.

## 4. Gallery presentation
- Every tile currently says "Residential" — redundant three times in a row. Drop the repeated eyebrow from the two-up tiles and keep it only on the featured card.
- Even out the tile heights (the current 320/260 stagger reads as a mistake at this width) — keep the offset via the `md:pt-10` push instead.

## 5. Hero refinements
- Nudge the scroll chevron up and reduce its bounce so it doesn't collide with the mobile sticky CTA.
- Slightly tighten hero bottom padding on desktop so the headline block sits at optical center-bottom rather than pinned low.

## 6. Type and color consistency
- Audit eyebrow sizes: currently a mix of `text-[10px]`, `[11px]`, `[12px]` with different tracking. Collapse to two sizes (11px on light, 12px on dark).
- Body copy on light sections mixes `text-charcoal` and `text-charcoal/80`; pick one for paragraphs and reserve the muted tone for captions.
- Red is used for: CTA, rules, badges, and hover states. Keep it on the CTA and rules; remove the red from the "Featured project" badge (use navy) so the eye lands on the button.

## Technical notes
All changes land in `src/routes/index.tsx`, `src/routes/work.tsx`, and `src/styles.css` (spacing/eyebrow utilities only). No config, data, or route changes.

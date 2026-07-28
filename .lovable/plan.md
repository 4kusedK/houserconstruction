## Houser Construction — Design Upgrade Plan

### Goal
Move the site from "polished but safe" to "editorial and expensive" while keeping the Houser brand identity intact: navy #0A2342, red #B5121B, Barlow/Archivo/Inter, family-owned Alaska story. No new routes, no backend. Pure design craft.

---

### 1. Fix the texture rhythm (the bottom 2 blue sections)
Current state: the warm sand philosophy band and the navy stats band have blueprint grids. The bottom two navy sections — the closing statement band and the contact band — are plain navy.

- Add `blueprint-grid-dark` to the **ClosingBand** section.
- Add `blueprint-grid-dark` to the **FinalCTA** section.
- Add `blueprint-grid-dark` to the **AboutCTA** section on `/about`.
- Rule: **navy sections always get the grid; warm sand sections always get the grid; white sections stay clean.** This makes the grid a signature, not an accident.

---

### 2. Warm up the palette so it stops feeling bland
The site is currently navy/red/white/sand. The red is the only accent, so it reads flat. Add controlled warmth without diluting the brand.

- Activate the existing `--timber` token (warm brown) for:
  - Inline link hover states (not red; timber is quieter)
  - Image caption / category text on the gallery
  - Footer subheadings and small labels
- Add a subtle warm overlay on all Unsplash placeholder images (a transparent warm gradient or slight sepia filter) so they feel like one collection, not a random stock-photo set.
- Use `--sand-sunk` as a deliberate alternating background for one of the white sections (Values or Certifications) so the page gets warm/cool alternation instead of just warm-white-cool.

---

### 3. Image treatment consistency
The biggest thing that will make the site feel less "mid" is treating the photos like a portfolio, not a gallery.

- Add a consistent **photo frame**: 1px `border-hairline`, subtle `shadow-sm`, and a small red bottom-left corner rule on every major image.
- Apply the same frame to the philosophy handshake image, the About page portraits, and the crew photo.
- In the gallery, add a warm hover overlay (`bg-red/10` or warm gradient) plus the existing zoom, and keep the clean grid but add a caption below each image instead of no context.
- Replace the Unsplash URL in the About page hero with something that doesn't feel like a generic dusk sky; either a more specific Alaska job-site image or the same hero treatment as the home page.

---

### 4. Typography hierarchy push
The site leans heavily on one display size. Add a second gear.

- Introduce a true `display-2xl` for the hero only — tighter, larger, more dominant.
- Keep `display-lg` for section headings.
- Keep `display-md` for pull quotes and owner names only.
- Reduce body line-height slightly on desktop (`leading-relaxed` → `leading-[1.6]`) so long paragraphs read more like magazine copy.
- Increase the eyebrow letter-spacing slightly so it reads as premium against the larger logo.
- Add a small red rule under the hero subhead to mirror the section heading treatment.

---

### 5. Tactile details — buttons, cards, links
Right now buttons and cards feel flat. Add small physical cues.

- Buttons: add a subtle hover lift (`-translate-y-0.5` or stronger shadow) on `variant="accent"`. The red accent button should feel like it presses back.
- Cards / gallery items: add a 1px warm border and `shadow-sm` that grows to `shadow-md` on hover.
- Inline links: replace the simple color change with an animated red underline that slides in from the left.
- Footer social icons: add a hover background fill instead of just border color change.

---

### 6. Motion and stagger
The current `Reveal` animation is single-block. Break it into staggered children so sections feel assembled.

- Stagger the three stat cards in StatBar.
- Stagger the three testimonials.
- Stagger the three value cards on the About page.
- Keep the existing `Reveal` timing and easing; just add `delay` increments to children.
- Ensure `prefers-reduced-motion` is respected everywhere.

---

### 7. Copy and content polish
A few words can make the site feel much more confident.

- Hero: make the tagline/subhead relationship clearer. "Trusted to serve with excellence." as the headline, "Built for Alaska." as the subhead.
- Closing band: keep "Building better communities." but add a short one-line supporting statement below it.
- Pull quote: keep "The person who walks your site is the person who answers the phone." but consider adding a small attribution like "— David Houser".
- Contact CTA: the current "Start the conversation" eyebrow is good. The form is decorative — add a note or keep it as a direct email/phone panel.

---

### 8. Optional: Work page placeholder
The original Pass B v2 plan called for a `/work` portfolio index and project detail pages. This is not required for the current design upgrade, but if the client wants a real portfolio, it would be the next major step after these design fixes. I would leave it as a separate phase and not include it here.

---

### Files to edit
- `src/styles.css` — add `display-2xl`, refine blueprint utilities, ensure timber token is usable, add warm overlay utilities
- `src/routes/index.tsx` — apply grid to ClosingBand and FinalCTA, add image frames, stagger motion, update hero typography, update copy
- `src/routes/about.tsx` — apply grid to AboutCTA, add image frames to portraits and crew photo, stagger motion, update copy attribution
- `src/components/site/SiteHeader.tsx` — subtle nav hover underline or lift
- `src/components/site/SiteFooter.tsx` — timber accent on subheads, social icon hover fill
- `src/components/brand/BrandButton.tsx` — add hover lift/shadow

### Verification
- Check at 375px, 768px, 1280px, and 1600px.
- Ensure no text overlaps the ghost numbers at any width.
- Ensure the blueprint grid on the bottom navy sections doesn't make white text harder to read.
- Confirm no hardcoded colors — all values come from CSS tokens.
- Run a build and a visual pass in the preview before considering it done.
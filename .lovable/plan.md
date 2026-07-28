## My take

Strong brief — I'd do essentially all of it. The three highest-value items are removing the fabricated testimonials, moving the gallery onto `sand`, and halving the red. Two notes:

- **Testimonials:** agreed, fabricated named quotes on a live commercial site are a real liability. Empty array + component returns `null`.
- **Handshake:** §4 says use the local `src/assets/promise-handshake.jpg`, but you also want a different handshake photo. I'll do both — replace the local asset file with a new image (a Black hand and a white hand meeting), keep it a local import, drop the Unsplash constant.

Verified against the code: `HANDSHAKE_IMG` and `HERO_IMG` are indeed hardcoded Unsplash URLs; blueprint grid is on five sections (philosophy, stat bar, testimonials, closing, contact — hero is the sixth surface); `--sand`, `--sand-sunk`, `--timber` tokens all exist and timber is barely used.

---

## Plan

### 1. Imagery
- **Hero:** new photo — a finished building rather than the current one. Marked `TODO: client photo`.
- **Handshake:** generate/source a warm close-crop handshake between a Black person and a white person, save over `src/assets/promise-handshake.jpg`, import it in `index.tsx`, delete `HANDSHAKE_IMG`, write accurate alt text.

### 2. Testimonials removed
`testimonials = [] as const` with the TODO comment; `Testimonials` returns `null` on empty. Section disappears entirely.

### 3. Statewide, no city base
- Schema `address` drops `addressLocality`, keeps `addressRegion: "AK"` + country; `areaServed` unchanged.
- `business.address.city` removed; `serviceArea` phrasing made explicitly base-less.
- Stat bar middle: `Statewide` / `Wherever the job is`.
- Footer Office block → statewide line (town names stay for search).

### 4. Commercial weight
New FAQ "Do you take on commercial projects?" (named in the FAQPage JSON-LD), commercial category on a gallery item, and commercial named in the hero paragraph. Hero stays residential visually.

### 5. Surface rhythm
Hero `navy-deep` → Philosophy `sand` → Stat bar `navy-deep` → Gallery `sand` → Credentials `sand-sunk` (warm hairlines) → FAQ `background` → Closing + Contact merged into one `navy` section split by `border-t border-white/12`.

### 6. Blueprint grid on two sections
Hero and stat bar only; removed from philosophy, closing, contact (testimonials go away anyway).

### 7. Ghost numbers only
Drop the `number` prop from every `SectionHeading` usage; watermarks carry the sequence. `SectionHeading` keeps the prop, just unused.

### 8. Red halved
Red kept on: contact button, before/after divider + badge, one rule per section heading, closing/contact top-left rule. Everything else — eyebrow rules, category labels, tile rules, `link-underline`, mail/phone icons — moves to `timber`.

### 9. Type
`display-2xl` weight 800→700; `eyebrow` 13px→11px, tracking 0.18em→0.2em; header logo to `h-14 md:h-16`.

### 10. Closing paragraph
Town list removed; ends on "...that matters to our family."

### Checks
375px pass on every section, build green, FAQ schema includes the new entry, alt text and focus states preserved.

### Technical notes
Files: `src/routes/index.tsx`, `src/config/business.ts`, `src/components/site/SiteFooter.tsx`, `src/components/site/SiteHeader.tsx`, `src/styles.css`, `src/assets/promise-handshake.jpg`. No new dependencies; `src/components/ui/` untouched; `services`/`processSteps` left in place.

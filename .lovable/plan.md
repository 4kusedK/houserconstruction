## What changes

### 1. FAQ gets the grid
`src/routes/index.tsx` FAQ section: `bg-background` → `bg-background blueprint-grid`, so every white section shares the same texture.

### 2. Credentials band: red rule + containers
Currently a flat navy strip with plain white/70 text labels.
- Add the same red top mark used on the stat bar and closing band: `absolute top-0 left-0 h-1 w-40 bg-red` (section becomes `relative overflow-hidden`).
- Turn each credential from bare text into a bordered chip: `border border-white/15 px-4 py-2.5 rounded-sm`, text `text-white/75`. Matches the chip treatment already in the footer, so the two read as one system.
- Tighten wrap gaps to `gap-3` since the chips now carry their own padding.

### 3. Subtle tonal gradient on navy bands
Depth without texture, applied to the two large navy surfaces (closing/contact band and, if it reads well, the stat bar):
- Add an absolutely positioned overlay div: a top-to-bottom gradient from `navy-deep` at ~35% opacity down to transparent, plus a soft radial lift behind the headline area.
- Implemented as a new `@utility navy-depth` in `src/styles.css` so both bands share one definition rather than inline gradient classes.

Content sits above it via the existing `relative` wrapper.

### 4. Verify
Playwright screenshots of home at 1280px and 375px to confirm the credentials chips don't crowd on mobile and the gradient reads as depth, not a visible band edge.

### Technical notes
Presentation-only: `src/routes/index.tsx` (FAQ, `Certifications`, `ClosingAndContact`, `StatBar`) plus one new utility in `src/styles.css`. No token or logic changes.

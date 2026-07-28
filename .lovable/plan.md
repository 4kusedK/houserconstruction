## What changes

### 1. Grid only on white sections
Remove `blueprint-grid-dark` everywhere (navy surfaces read as flat navy again):
- `src/routes/index.tsx`: hero grid overlay (the absolute `blueprint-grid-dark` div), stat/quote band, and any other navy band using it
- `src/routes/about.tsx`: portrait placeholder frame, story navy band, closing navy band

Keep `blueprint-grid` on all white (`bg-background`) sections — philosophy, gallery, about story, credentials-adjacent white areas.

### 2. All warm (sand/timber) bars become red
Every small accent bar/rule currently `bg-timber` switches to `bg-red`:
- Hero: vertical rail bar and the rule under the headline
- Stat band: top-left bar and the per-stat rules
- Process/steps rule, contact rule
- Any remaining timber rules in `about.tsx`

### 3. Credentials section goes navy
`src/routes/index.tsx` credentials band: `bg-background blueprint-grid border-y border-hairline` → `bg-navy text-white`, no grid. Labels/chips shift to white/70 with white/15 borders so contrast holds.

### 4. Sand/timber sub-text → new color
Warm timber text (card labels, footer headings, contact icons, nav hover, figcaptions) is the "sand" text you're seeing. Replacement, using existing brand tokens:
- On white: `text-silver` (#7E838A) — neutral, quiet, already the eyebrow color, so labels stop competing with headlines
- On navy: `text-white/70`
- Red stays reserved for bars/rules and the primary CTA, so it keeps its punch

That removes warm brown from the palette entirely and leaves navy + red + neutral grays — the tightest read of the brand.

### 5. Verify
Screenshot home and about at 1280px and 375px to confirm the navy credentials band doesn't create two heavy navy blocks back to back, and that red marks read deliberate.

### Technical notes
Presentation-only class swaps in `src/routes/index.tsx`, `src/routes/about.tsx`, `src/components/site/SiteHeader.tsx`, and `src/components/site/SiteFooter.tsx`. No token changes in `src/styles.css`; the `timber` token stays defined so any of this can be swapped back cleanly.

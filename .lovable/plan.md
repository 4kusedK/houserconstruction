## 1. Header (`src/components/site/SiteHeader.tsx`)

- Reduce bar height from `h-20 md:h-24` to `h-16 md:h-20` so the sticky nav takes less vertical space.
- Increase the logo to `h-16 md:h-20 w-auto` and let it overflow the bar visually by allowing the logo wrapper to scale (`py-0`, `overflow-visible`) — bigger mark, shorter bar.
- Same treatment in the mobile menu header (logo `h-16`).
- Adjust hero top padding in `src/routes/index.tsx` (currently `pt-52 md:pt-64`) down to match the shorter header.

## 2. Rename section 01

In `src/routes/index.tsx`, the `Positioning` block eyebrow "Our word" becomes **"Our philosophy"** (keeps the number `01`, heading, and copy). Say the word if you'd rather it read "Partners".

## 3. Handshake image

Replace the AI-generated `src/assets/promise-handshake.jpg` import with an Unsplash URL of two people shaking hands on a job site, sized `w=1200`, with matching alt text. The AI asset file is left in place unused (or removed).

## 4. Recent projects → Gallery

Rewrite `ProjectsGallery` in `src/routes/index.tsx`:
- Section heading becomes `02 — Gallery` / "Our work."
- Keep the six Unsplash images from `business.ts`, but drop all on-image text: no numbers, no category eyebrow, no project name, no gradient scrim.
- Layout: even 2-up on tablet / 3-up on desktop grid of `aspect-[4/3]` images with a subtle hover zoom and a thin hairline frame — a photo wall, not cards.
- Alt text stays descriptive for SEO/accessibility, drawn from the existing project names.
- `projects` entries keep `name`/`category` in config (used only for alt text), so nothing else breaks.

## Technical notes

- Purely presentational; no new dependencies, no route or data-model changes.
- Unused imports (e.g. `handshakeImg`) get cleaned up so the typecheck stays green.
- Verify at 375px and desktop after the change.

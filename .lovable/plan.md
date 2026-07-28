## 1. Credentials band → match the "Commercial / Statewide" stat bar

`src/routes/index.tsx` (Credentials section, ~line 490-517)

Today: a single-row navy strip with a small "Credentials" eyebrow and four bordered pill chips.

Change it to the same visual system as the stat bar:
- Surface: `bg-navy-deep` (same as stat bar) instead of `bg-navy`, keeping `navy-depth` gradient and the red top rule.
- Padding: `py-16 md:py-24` to match.
- Layout: 4-column grid on desktop (`grid-cols-2 md:grid-cols-4`) with `md:divide-x md:divide-white/10`, same column padding rhythm as the stat bar.
- Each credential becomes a stat-style block:
  - short red `h-[2px] w-10` rule on top
  - the credential as a `display-sm`-scale white headline (e.g. **Licensed** / **Bonded** / **Insured** / **Family Owned**)
  - a small `eyebrow text-white/60` qualifier underneath (e.g. "State of Alaska", "Fully bonded", "Liability & workers' comp", "Steve & David Houser")
- Drop the "Credentials" eyebrow and the chip borders — the section reads as a second stat band.
- Wrap each in `Reveal` with staggered delay, matching the stat bar.

Net effect: two navy bands with identical grammar — one for capability, one for credentials.

## 2. More prominent logo in the sticky nav

`src/components/site/SiteHeader.tsx`
- Bar height: `h-16 md:h-20` → `h-20 md:h-24` so a larger mark fits without cramping.
- Logo: `h-14 md:h-16` → `h-16 md:h-20`.
- Mobile menu panel header matched to the same heights so the overlay logo lines up with the bar logo.

`src/routes/index.tsx`
- Hero top padding is offset for the fixed header; bump it by the same 4/4 units so the hero headline doesn't slide under the taller bar.

## Verification
- Home at 1280px and 375px: taller header doesn't clip the hero, credential blocks wrap two-up on mobile without orphan words.

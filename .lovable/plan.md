## Verdict

The design is still on brand. Navy #0A2342 anchors every dark surface, Barlow is unchanged, and red survives exactly where it earns attention: the section-heading rules in `SectionHeading`, the before/after divider and badge, the closing band's top-left rule, and the contact button. Sand and timber are warmth added *around* the identity, not a replacement for it.

One real drift: the hero has zero red. The first screen is navy, white and a timber hairline, so the accent doesn't register until the visitor scrolls. That's the only change I'd make.

## Plan

### 1. One red mark in the hero
Return the hero eyebrow rule (currently timber) to `bg-red`. Single 2px × 32px mark next to "Steve & David Houser" — enough for the accent to register above the fold, small enough that it doesn't undo the red reduction. Homepage red count goes from 4 to 5, still well under the target of 8.

### 2. Keep the warm balance as-is
Sand on philosophy and gallery, sand-sunk on credentials. This is the change that fixed the institutional feel; dialing it back would reintroduce the problem. No change.

### 3. Verify, don't guess
Screenshot the hero at 1280px and 375px after the change to confirm the red reads as intentional rather than stray, and confirm nothing else in the hero picked up red.

### Technical notes
Single file: `src/routes/index.tsx`, hero eyebrow rule only. No token, type, or layout changes. `SectionHeading` untouched.

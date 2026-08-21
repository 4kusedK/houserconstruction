# Remove section numbers + client copy update

## 1. Remove the ghost section numbers
Drop the large faded "01" / "03" numerals from every section that shows one:
- Home: the partnership section and the testimonials band.
- Work page: the per-project numeral on each project block.

With the numerals gone, tighten the space they occupied: pull the top padding of those sections back to a consistent scale so every band breathes the same, and keep the eyebrow-to-heading and heading-to-body gaps on one rhythm instead of the current mix. Nothing else in those headers changes.

## 2. Hero copy
Replace the hero paragraph with the client's line:

"Licensed Alaska general contractor committed to serving our clients statewide with all their building needs, commercial and residential."

## 3. Partnership section copy
Heading stays "Built on partnership." Body becomes the client's text, set in the existing two-paragraph rhythm:

- "Our standard of integrity has been a leading line of trust on every project and our partnerships reflect this standard. With the industries best we create the team that gets the job done and done right."
- "Get the solutions to your project needs without the runarounds, setbacks, and delayed scheduling."

The Lombardi pull quote, handshake photo, and "See our work" link stay.

## Technical notes
- `src/routes/index.tsx`: remove both `ghost-number` / `ghost-number-light` spans; swap hero `<p>` and the two body paragraphs in `Positioning`.
- `src/routes/work.tsx`: remove the `ghost-number` span (and the now-unused `n` field usage if it becomes dead).
- Leave the `ghost-number` utilities in `src/styles.css` unless nothing else references them, in which case remove them too.

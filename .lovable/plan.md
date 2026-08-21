# Three client copy edits

## 1. Partnership paragraph
End the sentence with "gets the job done right." (drop "and done").

New text: "Our standard of integrity has been a leading line of trust on every project and our partnerships reflect this standard. With the industries best we create the team that gets the job done right."

## 2. Stat bar
- "Commercial" label changes from "Retail, office, mixed-use · Family owned" to "Commercial and residential".
- "Statewide" loses its "Wherever the job is" line entirely.

With one label gone, the three columns keep the same rule + big word rhythm; the empty slot is removed rather than left as blank space, so the columns still line up.

## 3. Footer "Where we work"
Replace the whole address block (the "no fixed base" line and the list of towns) with a single line:

"Based in Anchorage, serving Alaska statewide"

## Technical notes
- `src/routes/index.tsx`: partnership `<p>` copy.
- `src/config/business.ts`: `stats` entries — update the commercial label, blank the statewide label; stat bar renders the label only when present.
- `src/components/site/SiteFooter.tsx`: simplify the `<address>` content.
- Nothing else changes; no other section references the removed town list except SEO config, which stays as is.

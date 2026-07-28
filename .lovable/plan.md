## Repositioning: Commercial-first, family as trust signal

### Governing principle
Commercial capability is the subject of the site. Family ownership is the reason to trust the work — it appears as a credential, never as the headline.

### `src/config/business.ts`
- `description` leads with capability: "Licensed Alaska general contractor working statewide on commercial, real estate, and residential projects."
- `tagline` and `secondaryTagline` unchanged.
- `serviceAreaLine` mentions commercial and real estate before residential.
- Reweight `services` and `processSteps` copy toward commercial language (not currently rendered, but kept aligned).
- `stats[0]` becomes capability-led with family as sub-label: value **"Commercial"**, label **"Retail, office, mixed-use · Family owned"**. Stats 2 and 3 unchanged.
- FAQ answers rebalanced: "Do you take on commercial projects?" and "What types of projects do you take on?" lead with commercial and real estate, then residential. "Is Houser Construction family owned?" gets a one-line yes that pivots back to capability.

### `src/routes/index.tsx`

**Hero**
- Headline stays "Trusted to serve with excellence."
- Vertical rail label: "Family Owned · Alaska" → **"Steve & David Houser · Alaska"**.
- Subhead → "Licensed Alaska general contractor working statewide on commercial, real estate, and residential projects. David runs the day-to-day with Steve Houser at his side."

**Positioning section**
- Eyebrow "Our philosophy" → **"How we work"**.
- Title "A handshake still means something." → **"Built on partnership."**
- Body copy shifts from sentiment to accountability: direct client access, no handoffs, one point of contact from estimate through closeout.
- David's quote stays, framed as operational accountability.
- CTA "Meet the family" → **"Meet the team"**.
- Handshake image kept; alt text describes a contractor–client handshake.

**Stat bar** — picks up the reweighted `stats` from config.

**Gallery**
- Retitle "Places we've put our name on." → **"Selected work"**.
- Section intro copy carries the commercial/real-estate weight.
- **Project category labels are NOT invented.** Card labels stay as-is unless the client confirms the real project type. Relabeling placeholder projects as commercial would put an unverifiable claim on the page — the same credibility problem we removed "Coming Soon" for. Flag in `TODO-CLIENT` that a confirmed commercial and a confirmed real-estate project should replace two placeholders.
- Alt text rewritten to describe project type and location; drop "coming soon" phrasing without asserting the photo is a Houser job.

**Credentials band** — reorder chips: AK Licensed Contractor, Bonded, Insured, Family Owned & Operated.

**Closing / Contact band**
- Replace "That is the part of this work that matters to our family." with "That is the standard we build to — on every lot, in every borough, for every client."
- Keep "The old is gone. The new has come."

**SEO metadata** — title, description, og:description, and JSON-LD `description` all lead with commercial/real estate; family ownership appears only as a trailing trust phrase.

### `src/routes/about.tsx`
- Hero headline "A father, a son, and one standard." → **"A construction partner for Alaska."** Subhead leads with capability, then names David and Steve.
- Story: opening reframed around partnership and direct accountability rather than family origin sentiment. "The old is gone. The new has come." stays.
- Owners: Steve → **"Founder & Partner"**, David → **"Owner & Project Lead"**. Bios rewritten to operational roles (Steve: field standard, quality, safety, closeout. David: estimating, client relationships, execution). Quotes kept.
- Values: "Family first" → **"Direct accountability"** — "No account managers between you and the crew running the job." Other two unchanged.
- About CTA unchanged.
- About page metadata updated to match (title no longer "A Father, A Son").

### `src/components/site/SiteFooter.tsx`
- Blurb → "Licensed Alaska general contractor working statewide on commercial, real estate, and residential projects. Built and run by David and Steve Houser."
- "Where we work" mentions commercial and real estate before residential.
- "Family Owned & Operated" credential chip stays.

### `src/components/site/SiteHeader.tsx`
No changes.

### Imagery
No visual swaps this pass — framing and alt text only.

### Verification
- Typecheck and build.
- Home and About at 1280px and 375px: confirm new headline/subhead don't overflow and the stat bar sub-label wraps cleanly.
- Confirm "family" appears only as credential/sub-label, never as a section heading or lead value proposition.

### Files affected
`src/config/business.ts`, `src/routes/index.tsx`, `src/routes/about.tsx`, `src/components/site/SiteFooter.tsx`. No token or CSS changes.

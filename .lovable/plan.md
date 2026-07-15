
## Goal

Rewrite the site copy so it reads like a working Alaska contractor wrote it, not ChatGPT. Fix the tells without changing layout, components, or the visual design.

## What flags the site as AI right now

1. **Em dashes in prose — everywhere.** 10+ instances across hero, positioning, services intro, service blurbs, process, testimonials, FAQs. This is the loudest tell.
2. **Repeated parallel triads.** "residential, commercial, and government" appears 5+ times in a few hundred words. AI loves rule-of-three.
3. **Buzzy/aphoristic lines.** "Taking the old and making the new — solving today's problems by building for tomorrow." "Built what our clients actually need." "With a dozen years of hands-on experience behind every decision on site." Reads like a generated tagline stack.
4. **Over-polished hedges.** "actually," "single accountable team," "before a single nail is driven," "punch-list to zero," "you'll actually want to attend." Cute, and cute is a tell.
5. **Symmetrical FAQ answers.** Every answer starts with a confident restatement. Real business copy is more varied and blunter.

## What stays (not AI tells — intentional design)

- Decorative em dash separators inside eyebrow labels (`01 — Studio`, `<span className="mx-2 opacity-60">—</span>`). These are visual dividers in `SectionHeading.tsx` and the section eyebrows, not prose. Keep.
- `aria-label` and code comments containing `—`. Not user-facing copy. Keep.
- Overall structure, headings hierarchy, and section order.

## Fix strategy (per file)

### `src/config/business.ts`
- `description`: drop the "Taking the old and making the new — solving…" aphorism. Replace with a plain one-liner about what they do and where.
- Service blurbs: rewrite each of the 6 without em dashes. Shorter, more concrete, less symmetrical. Vary sentence length so they don't all read like the same template.
- `processSteps`: rewrite the 4 bodies. Kill "before a single nail is driven," "punch-list to zero," "you'll actually want to attend."
- `testimonials`: strip em dashes, loosen phrasing so the three quotes don't share cadence.
- `faqs`: rewrite answers to vary the openings and drop em dashes. Keep facts identical.

### `src/routes/index.tsx`
- Hero paragraph (line 127-131): remove em dash line, rewrite as two short sentences. Cut "solving today's problems by building for tomorrow."
- Positioning section (lines 174-183): rewrite both paragraphs. Drop "with a dozen years of hands-on experience behind every decision on site" and "what our clients actually need."
- Services intro (lines 223-226): rewrite without em dash, drop the third repeat of the residential/commercial/government triad.
- Leave `<title>` and `og:title` alone (the `—` there is standard title separator, not an AI tell).

## What the plan does NOT touch

- No component, layout, styling, or token changes.
- No new pages, routes, or features.
- No business logic.
- Design em-dash separators inside eyebrow chips remain as-is.

## Deliverable

Two files edited: `src/config/business.ts` and `src/routes/index.tsx`. Copy reads cleaner, more human, no em dashes in prose, less repetition, no aphorisms. Same length ballpark, same information, same visual layout.

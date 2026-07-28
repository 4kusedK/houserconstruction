## My read on the feedback

Mostly right, and the priority order is right: credibility and metadata first, `/work` second. I verified each claim against the code — here's where it holds and where it doesn't.

**Confirmed:**

- `canonical` and `og:url` are `"/"` on both routes. Since houserconstruction.net is live, these should be absolute.
- Root `og:image`/`twitter:image` is a Lovable preview screenshot on an r2.dev bucket — not durable, not branded.
- About's `twitter:title`/`twitter:description` are wrong, though not by copy-paste: About sets no twitter text tags at all, so it inherits the homepage's from `__root`.
- Six dead `href="#"` links: three socials (from `business.socials`), Careers, Privacy, Terms.
- Projects 05 and 06 are labeled "Coming Soon"; all six are Unsplash stock with service-label names.
- Crew photo alt says "Houser Construction crew on an Alaska job site" while the caption says the real photo is coming — the alt should not assert what the caption denies.
- Location signal is only "Alaska". No town ever appears in body copy; `areaServed` is the string "Alaska".

**Where I'd push back:**

- No double space in the H1 — it's "Trusted to serve" / "with excellence." on two lines; the space is a line break in extraction.
- JSON-LD survived: `GeneralContractor` on Home and `FAQPage` are both present, plus `AboutPage` on /about.
- The testimonials aren't fake *reviews* so much as unattributed placeholder copy with real-sounding locales. Still a liability on a trust-first site — same conclusion, less alarm: they come down until David supplies real ones.
- The stock handshake is a fair hit, but it's illustrative, not a claim about Houser's own crew. Lower priority than the alt text, which actively misdescribes.

## Plan

### 1. Credibility (do first)

- Remove the three testimonial quotes from `business.ts` and the Client voice section from Home. Keep the section shell commented/ready so real quotes drop in later. (No I like the place holder testimonial. client likes it to)
- Fix the crew photo alt to describe it honestly ("Alaska job site, reference photo") or swap the section to placeholder framing like the owner portraits.
- Drop projects 05 and 06 ("Coming Soon") from the gallery until they're real work.

### 2. Metadata correctness

- Absolute `canonical` + `og:url` on Home (`https://houserconstruction.net/`) and About (`/about`).
- Add route-specific `twitter:title` and `twitter:description` to About so it stops inheriting the homepage's.
- Generate a real 1200×630 branded OG image, ship it as a local asset, and replace the r2.dev preview screenshot in `__root`. Replace About's hotlinked Unsplash OG with the same branded image until real photos exist.
- Note: social platforms cache previews, so shared links won't update until they re-scrape.

### 3. Dead links

- Socials: hide the icon row until David provides real Instagram/Facebook URLs (keep the code driven by `business.socials`, render only entries that aren't `#`).
- Remove Careers from the footer.
- Keep Privacy and Terms only if we build them — otherwise remove. Recommend removing for now; a contractor portfolio site collecting nothing doesn't need them. ( i dont want to forget to but them in if we do collect data or people reach out to us )

### 4. Local SEO — biggest upside

- Add a real service-area list to `business.ts`: Anchorage, Eagle River, Palmer, Wasilla / Mat-Su Valley, Girdwood. (he services all of alaska, not a spcif region tho. youthink he should still do that?)
- Name those towns in body copy (philosophy section, closing band) and in the footer Office block, not just in schema. (should we really tho? he services all alaska, what ould you reccomment?)
- Expand `areaServed` in the `GeneralContractor` JSON-LD to an array of `City` entries.
- Add two location FAQs matching real search phrasing ("Do you build in the Mat-Su Valley?", "Do you do remodels in Anchorage?") to feed both the FAQ section and `FAQPage` schema. (i like our current FAQ questions. and based on the answer above decide what we do here in this section)
- Off-site (client action, not code): claim the Google Business Profile with the exact phone and email on the site. That likely outranks everything above.

### 5. Then build `/work`

Only after 1–4, and ideally after real photos arrive:

- `src/config/projects.ts` as the content model (slug, name, town, category, scope, images, optional before/after pair).
- `/work` index route with a filterable grid; homepage `#work` gallery becomes a teaser linking there.
- `/work/$slug` detail route with per-project `head()` and images.
- `HOW-TO-ADD-A-PROJECT.md` for handoff.

### Technical notes

Files touched in steps 1–4: `src/config/business.ts`, `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/__root.tsx`, `src/components/site/SiteFooter.tsx`, plus one new OG image asset and a `sitemap.xml` update when `/work` lands.

Steps 1–4 are one pass. Step 5 is a separate build.
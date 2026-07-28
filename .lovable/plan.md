## Goal

Reposition the single-page site from a quote funnel to a company portfolio: identity, family ownership, and community forward; estimate CTAs, services grid, and process steps out.

## Typography

- `src/routes/__root.tsx`: swap the Google Fonts stylesheet to the Barlow + Archivo + Inter URL.
- `src/styles.css`: `--font-display: "Barlow", "Archivo", ui-sans-serif, sans-serif`; relax tracking one step in `display-xl` (-0.01em), `display-lg` (-0.01em), `display-md` (-0.005em). `--font-ui` and `--font-sans` untouched.

## Header (`SiteHeader.tsx`)

Permanently solid white bar (`bg-white border-b border-hairline`). Remove the `overHero` prop, the `scrolled` state and scroll listener, and every `isLight` branch. Logo always `variant="full"` at `h-14 md:h-16`. Nav becomes About + Work + phone link + red `Contact` button. Mobile menu matches, with a Contact button at the bottom. Escape handling, dialog semantics, and aria-labels preserved.

`index.tsx` line 82 passes `<SiteHeader overHero />` — that prop goes away in the same pass.

## Home page (`src/routes/index.tsx`)

- **Hero**: eyebrow `Alaska General Contractor · Family Owned`; headline `Trusted to serve` / `with excellence.` (second line at `text-white/85`); new paragraph; both buttons and their flex wrapper deleted; chevron stays. Because the header is now opaque, hero top padding increases so the composition isn't hidden behind the bar.
- **01 — Our word** (keeps `id="about"`): eyebrow `01 — Our word`, headline "A handshake still means something.", two-paragraph body as specified, plus a full-height handshake image in one grid column, imported from `src/assets/promise-handshake.jpg`.
- **Value bar**: `md:grid-cols-3`, no `tabular-nums`, driven by the new three-item `stats` array.
- **Delete** the `Services` and `Process` sections, `SERVICE_ICONS`, and every import left unused (`services`, `processSteps`, `HardHat`, `Compass`, `Ruler`, `ShieldCheck`).
- **Work (02)**: remove the `View all` button; project 06 replaced (not removed) so the index-based `spans`/`aspects` arrays stay valid.
- **Certifications**: `12+ Years Experience` → `Family Owned & Operated`.
- **Closing band** (new, between FAQ and Contact): navy/white full-width, red rule accent, headline "Building better communities.", body copy, then the set-apart line "The old is gone. The new has come." in larger display type. No number or eyebrow.
- **Contact (05)**: headline "Let's talk.", new body, reply-time line deleted, primary button "Email us"; phone button and detail list unchanged.
- **Mobile sticky bar**: one full-width red Contact button to `/#contact`.
- **Renumber** eyebrows to 01 Our word, 02 Work, 03 Client voice, 04 Answers, 05 Start the conversation.

## Footer (`SiteFooter.tsx`)

Delete the Services column (its `/#services` links would otherwise scroll nowhere); Company = About, Work, Careers; Contact drops "Get a quote"; grid columns rebalanced across the remaining blocks; credential chip swap to `Family Owned & Operated`; blurb rewritten to the family-owned line.

## `src/config/business.ts`

New `tagline` and `description`; three-item `stats`; delete the `government` service entry (rest of `services` and `processSteps` parked); project 06 → "Community Restoration"; FAQ: drop "How do I get a quote?", strip government agencies from the project-types answer, add the "Is Houser family owned?" entry.

## SEO / meta

Title `Houser Construction — Trusted to Serve | Alaska General Contractor` and the new description across `__root.tsx` and `index.tsx` (title, og:title, twitter:title, all descriptions). `GeneralContractor` JSON-LD picks up `business.description`; `FAQPage` JSON-LD regenerates from `faqs`.

## Technical notes

- A referenced-but-missing image breaks the build, so I'll generate a placeholder handshake JPG at `src/assets/promise-handshake.jpg` (no Unsplash hotlink) for you to swap out when the real photo arrives.
- No new dependencies, no new routes, no changes under `src/components/ui/`, brand color tokens unchanged, `Reveal`/framer-motion and the brand components stay in use.

## Flag for the client

Every gallery image is still stock. On a portfolio-first site the work *is* the site — real Houser project photography is the highest-value outstanding asset, along with real testimonial names.

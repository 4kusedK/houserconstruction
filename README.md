# Houser Construction Reveal

Lovable Prompt — Houser Construction Website

Paste everything below into Lovable as your first message. Before sending, also upload into Lovable's chat: your logo files (houser-logo-full-color.png, houser-logo-white-reversed.png, houser-symbol-*) and, ideally, the token CSS files from your design system (tokens/colors.css, fonts.css, typography.css, effects.css, spacing.css). Tell it to use them as the source of truth. The brand values are also written out below so it works even without the files. Fill in the few [bracketed] business details (phone, email, address, reg #, service area).

(my rough prompt:  i want to make a Clean proffessional website for a client Houser Construction (a construction company/contractor). good seo/aeo, sitemap,mobile friendly etc.

-i want you anlyze this link/website, and use it as inspo of the vibe i want.: https://spenceltd.co.uk/

-im also attaching desingn system /brand kit and logo for houser constructin.

-use it to make a clean, beautiful, proffessional and functional website for houser construction.)

Role & Goal

You are a senior front-end designer and developer. Build a clean, premium, professional marketing website for Houser Construction, a general contractor / construction company. It must feel refined, structural, and trustworthy — an industrial-editorial feel, not a busy contractor template. Prioritize whitespace, bold typography, full-bleed photography, and calm, confident motion. Fully responsive (mobile-first), fast, accessible (WCAG AA), and built for strong SEO and AEO (answer-engine optimization).

Tech: React + Vite + TypeScript + Tailwind + shadcn/ui. Use react-router-dom for routing and react-helmet-async for per-page meta tags. Framer Motion for subtle animation.

Brand System — use exactly (this is the ground truth)

Wire all of this into tailwind.config as theme tokens and CSS variables. No hard-coded hex in components — reference tokens.

Colors

Primary Navy #0A2342 — brand surfaces, strong text, headers

Accent Red #B5121B — used sparingly: primary buttons, links, small rules/highlights

Silver #7E838A — muted text

Charcoal #3C4046 — body text

Off-white paper #FBFCFD and #F2F4F7 — page/sunken backgrounds; White #FFFFFF cards

Support ramps if needed: navy #06172E/#123156/#1C4370; red #8E0E15/#D02A32; greys #DCE0E9/#C3C9D2/#A2A7AE/#4C5157

Semantic: text-strong=navy, text-body=charcoal, text-muted=silver, text-accent=red, focus-ring #2A578F

Typography (Google Fonts: Chakra Petch, Archivo, Inter)

Headline — Chakra Petch (700): display, H1, H2. Chamfered/industrial, echoes the wordmark. Tight leading (~1.0–1.08).

Display/UI — Archivo (700–900): H3/H4, buttons, badges, labels, nav.

Body — Inter (400–600): paragraphs and UI text. Base 16px/1.6, lead 19px.

Eyebrow/label treatment: Archivo 700, 13px, UPPERCASE, letter-spacing ~0.18em, silver — use above section headings (the "CONSTRUCTION" treatment).

Scale: display clamp(44–76px), H1 clamp(34–52px), H2 clamp(26–36px), H3 22px, H4 18px.

Shape & feel (construction = squared, structural, low-flourish)

Tight radii: 2px small, 4px default controls, 8px cards. No pill shapes except tags.

Borders: 1px hairline greys; 2px navy for strong; 2px red accent rule as a signature divider under eyebrows/headings; 3px navy rule.

Grounded shadows (navy-tinted, not floaty): xs 0 1px 2px rgba(10,35,66,.08) up to lg 0 16px 40px rgba(10,35,66,.16).

Motion: durations 120/200/320ms, ease cubic-bezier(0.16,1,0.3,1). Subtle fade/slide-up scroll reveals; respect prefers-reduced-motion.

Spacing: 4px base grid (4/8/12/16/24/32/48/64/96/128). Content max-width ~1120px, 24px gutters, ~48–96px vertical section padding.

Logo: use houser-logo-full-color on light backgrounds and houser-logo-white-reversed on navy/photo backgrounds; use the compact symbol/icon mark for the sticky/condensed header and favicon. Keep generous clear space; never recolor or distort.

Design Direction (the vibe)

Model the feel on a high-end construction studio site — large bold display headlines, generous negative space, big architectural photography that bleeds to the edges, navy as the anchor with red used only as a precise accent, and subtle scroll-reveal animation.

Hero: full-viewport architectural photo (or muted video) with a dark navy overlay, the white reversed logo in the header, one oversized Chakra Petch headline (e.g. "Built to last."), a short subhead, and two buttons — primary red "Get a quote", ghost/outline "View our work".

Sections separated by whitespace and thin rules rather than heavy boxes. Eyebrow label + red rule + H2 pattern for each section header.

Projects: horizontal-scroll or masonry gallery with numbered captions ("01 / 06") and navy hover overlays with project name.

Sticky minimal header that condenses to the compact symbol mark on scroll; mobile gets a full-screen navy overlay menu.

Strong footer (navy background, white reversed logo): link columns, office address, phone, email, social, contractor reg # line, and a row for certification/accreditation logos.

Pages & Structure

Home — hero; positioning statement; stats bar (years in business, projects completed, on-time %, etc.); services overview cards; featured projects gallery; "why choose us" / process; testimonials; certifications/trust row; final red CTA band; footer.

About — company story, values, team, safety commitment, licensing/certifications.

Services — overview + a detail section per service: General Contracting, Design-Build, Remodeling/Renovation, Commercial, Residential, Project Management. Each with description, what's included, a photo.

Projects / Portfolio — filterable gallery by category; each links to a detail page (image gallery, scope, location, outcome).

Process / How We Work — numbered steps from consultation to completion.

Testimonials — section (not necessarily a full page).

Contact — validated form (name, email, phone, project type, message), office address, embedded map, phone/email, hours. Wire submission to a placeholder handler with a clear TODO for connecting email/Supabase.

404 — on-brand.

Use realistic, confident construction copy (not lorem ipsum) and high-quality architectural/construction placeholder images (Unsplash) I can swap later. Add the contractor registration number line where relevant (placeholder "[AK Reg. # ____]").

SEO / AEO Requirements

Unique per-page <title> + meta description, Open Graph + Twitter cards, canonical URLs via react-helmet-async.

Semantic HTML5: one <h1> per page, logical heading order, <nav>/<main>/<section>/<footer>, descriptive alt on every image.

JSON-LD structured data: GeneralContractor/LocalBusiness on home + contact (name, address, geo, phone, hours, service area, sameAs socials), BreadcrumbList on inner pages, Service schema on service pages.

AEO: a concise FAQ section with FAQPage JSON-LD (service area, licensed/insured, project types, how to get a quote) in clean Q&A so answer engines can extract it.

Generate sitemap.xml for all routes and robots.txt pointing to it. Add favicon (symbol mark), theme-color #0A2342, and a web app manifest. Set lang.

Performance: lazy-load images, responsive srcset/sizes, compressed assets, no layout shift (set dimensions). Target Lighthouse SEO/Performance/Accessibility 90+.

Accessibility & Responsiveness

Mobile-first; verify at 375 / 768 / 1024 / 1440px.

AA contrast (navy/white and red/white pass; avoid silver on white for small text), visible focus rings (#2A578F), keyboard-navigable menu + forms, ARIA labels on icon buttons, prefers-reduced-motion honored, touch targets ≥44px, base font ≥16px.

Build order

Set up Tailwind theme tokens (colors, fonts, radii, shadows, spacing) from the brand system above.

Build the shared layout (sticky header with logo swap + full-screen mobile menu, and the navy footer).

Build the Home page in full so I can review the look and feel before you complete the remaining pages. Keep components modular and reusable: Hero, SectionHeading (eyebrow + red rule + H2), ServiceCard, ProjectCard, StatBar, CTABand, Button, Badge, Input.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://houserconstruction.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f7683538-e72b-4065-9fc9-a79fdec108bb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

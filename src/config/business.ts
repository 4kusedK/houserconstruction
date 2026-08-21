// Houser Construction — real business info from client intake.
// Email domain pending (no custom domain yet). Update when finalized.
export const business = {
  name: "Houser Construction",
  legalName: "Houser Construction LLC",
  tagline: "Trusted to serve with excellence.",
  secondaryTagline: "The old is gone, the new has come.",
  description:
    "Houser Construction is a licensed Alaska general contractor working statewide on commercial, real estate, and residential projects. We build new commercial spaces and homes, restore the ones already standing, and take on development across the state. Family owned and operated.",
  phone: "(907) 310-6828",
  phoneHref: "tel:+19073106828",
  // Primary inbox — routes to David, who runs day-to-day.
  email: "david@houserconstruction.net",
  emailHref: "mailto:david@houserconstruction.net",
  // Named contacts shown in the contact panel.
  contacts: [
    {
      name: "David Houser",
      role: "Project inquiries · Day-to-day",
      email: "david@houserconstruction.net",
      emailHref: "mailto:david@houserconstruction.net",
    },
    {
      name: "Steve Houser",
      role: "Planning · Project support",
      email: "steve@houserconstruction.net",
      emailHref: "mailto:steve@houserconstruction.net",
    },
  ],
  // Service-area business: no fixed city base, so no locality is published.
  address: {
    region: "AK",
    country: "US",
  },
  serviceArea: "Alaska statewide — no fixed base, wherever the job is",
  // Statewide coverage. The hubs below are examples for humans and search
  // engines — they are NOT a limit on where Houser Construction works.
  serviceAreaHubs: ["Anchorage", "Eagle River", "Palmer", "Wasilla", "Mat-Su Valley", "Girdwood"],
  serviceAreaLine:
    "Commercial, real estate, and residential work across Alaska — from Anchorage and Eagle River to Palmer, Wasilla and the Mat-Su Valley, Girdwood, and beyond.",
  regNumber: "Licensed · Bonded · Insured",
  // Leave blank until real profile URLs are supplied — blank entries are not rendered.
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
} as const;

export const stats = [
  { value: "Residencial", label: "Licensed" },
  { value: "Statewide", label: "Bonded" },
  { value: "Commercial", label: "Insured" },
] as const;

export const services = [
  {
    slug: "commercial",
    title: "Commercial",
    blurb:
      "Retail, office, mixed-use, and institutional builds, plus tenant improvements and commercial restoration. Delivered on schedule and ready for inspection the first time through.",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Development",
    blurb:
      "Development work ranging from single-property repositioning to full residential subdivisions. Before-and-afters you can walk through.",
  },
  {
    slug: "new-construction",
    title: "New Construction",
    blurb:
      "Ground-up commercial buildings and homes. One crew from permit through final walkthrough, so nothing falls between trades.",
  },
  {
    slug: "remodeling",
    title: "Remodeling & Restoration",
    blurb:
      "Tenant improvements, whole-building renovations, and additions. We work in older buildings without cutting corners on what's behind the walls.",
  },
  {
    slug: "decks-fences",
    title: "Exteriors & Site Work",
    blurb:
      "Exterior carpentry built for Alaskan weather. Decks, fences, and outdoor structures that still look right after a few winters.",
  },
] as const;

// Real project photography and metadata now live in src/config/projects.ts.

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "We walk the site with you, talk through scope, and note the real constraints: schedule, budget, code, occupancy, and Alaska weather.",
  },
  {
    n: "02",
    title: "Estimate & Design",
    body: "You get a fixed scope, clear drawings, and a realistic timeline before anyone breaks ground.",
  },
  {
    n: "03",
    title: "Build",
    body: "Licensed crews on site with weekly updates, so you always know where the job stands.",
  },
  {
    n: "04",
    title: "Closeout",
    body: "We finish the punch list, hand over the as-builts, and walk the project with you before we call it done.",
  },
] as const;

// TODO: add real client quotes with written permission — name, town, project.
// Empty on purpose: the testimonials section does not render until real
// quotes exist. Never ship placeholder attributions on a live business site.
export const testimonials: ReadonlyArray<{
  quote: string;
  name: string;
  role: string;
}> = [];

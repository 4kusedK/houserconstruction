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
  // TODO: swap to hello@houserconstruction.com once the domain is live.
  email: "houserconstruction@gmail.com",
  emailHref: "mailto:houserconstruction@gmail.com",
  // Service-area business: no fixed city base, so no locality is published.
  address: {
    region: "AK",
    country: "US",
  },
  serviceArea: "Alaska statewide — no fixed base, wherever the job is",
  // Statewide coverage. The hubs below are examples for humans and search
  // engines — they are NOT a limit on where Houser Construction works.
  serviceAreaHubs: [
    "Anchorage",
    "Eagle River",
    "Palmer",
    "Wasilla",
    "Mat-Su Valley",
    "Girdwood",
  ],
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
  { value: "Commercial", label: "Retail, office, mixed-use · Family owned" },
  { value: "Statewide", label: "Wherever the job is" },
  { value: "100%", label: "Licensed · Bonded · Insured" },
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

// TODO: confirm real project names, locations and photography with client.
// Projects are named after places, never services — the category and town
// carry the "what and where" underneath.
export const featuredProject = {
  n: "00",
  // TODO: confirm real project name and location with client.
  name: "Turnagain",
  category: "Whole-home remodel",
  location: "Anchorage, AK",
  beforeImage:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=70",
  beforeAlt:
    "Reference photography of a building interior before renovation, representing the scope of a whole-property remodel.",
  afterImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70",
  afterAlt:
    "Reference photography of a finished, renovated interior, representing the scope of a whole-property remodel.",
} as const;

export const projects = [
  {
    n: "01",
    // TODO: confirm real project name and location with client.
    name: "Birch Ridge",
    category: "New construction",
    location: "Palmer, AK",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "02",
    // TODO: confirm real project name and location with client.
    name: "Government Hill",
    category: "Exterior & decks",
    location: "Anchorage, AK",
    image:
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "03",
    // TODO: confirm real project name and location with client.
    name: "Palmer Church Hall",
    category: "Commercial restoration",
    location: "Palmer, AK",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=70",
  },
] as const;

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


export const faqs = [
  {
    q: "Do you take on commercial projects?",
    a: "Yes — commercial work is the core of what we do. Retail, office, mixed-use, church and community buildings, tenant improvements, and commercial restoration. We take that work anywhere in Alaska, not just around Anchorage and the Mat-Su Valley.",
  },
  {
    q: "What types of projects do you take on?",
    a: "Commercial and real estate projects first: ground-up commercial builds, tenant improvements, restoration, and development from single-property repositioning to full subdivisions. We also build and remodel homes, and handle exterior and site work alongside that.",
  },
  {
    q: "Do you handle real estate projects?",
    a: "Yes. Real estate and development work is a standing part of the business — acquisition-to-delivery renovation, repositioning, and subdivision development across Alaska.",
  },
  {
    q: "What areas does Houser Construction serve?",
    a: "We work across Alaska, statewide. Most of our commercial, real estate, and residential projects are in Anchorage, Eagle River, Palmer, Wasilla and the wider Mat-Su Valley, and Girdwood, but we travel for the right job anywhere in the state.",
  },
  {
    q: "Do you build in the Mat-Su Valley?",
    a: "Yes. We build throughout the Mat-Su Valley, including Palmer and Wasilla, and the Valley is one of our busiest areas alongside Anchorage. Commercial builds, new construction, additions, and exterior work are all regular work for us out there.",
  },
  {
    q: "Do you do remodels in Anchorage?",
    a: "Yes. Anchorage is core territory for us, from commercial tenant improvements and restoration downtown to whole-home remodels in Turnagain and Government Hill, and we also work in Eagle River and Girdwood.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "Yes. Houser Construction is fully licensed in Alaska, bonded, and carries general liability and workers' compensation coverage.",
  },
  {
    q: "Is Houser Construction family owned?",
    a: "Yes — David Houser runs the company in partnership with his father, Steve. It means the person who prices your job is the person accountable for delivering it.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every Houser project carries a one-year workmanship warranty. Manufacturer warranties on installed products and systems pass through to you.",
  },
] as const;

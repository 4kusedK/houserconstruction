// Houser Construction — real business info from client intake.
// Email domain pending (no custom domain yet). Update when finalized.
export const business = {
  name: "Houser Construction",
  legalName: "Houser Construction LLC",
  tagline: "Trusted to serve with excellence.",
  secondaryTagline: "The old is gone, the new has come.",
  description:
    "Houser Construction is a family owned, licensed Alaska general contractor. We build new homes and commercial spaces, restore the ones already standing, and take on real estate development across the state.",
  phone: "(907) 310-6828",
  phoneHref: "tel:+19073106828",
  // TODO: swap to hello@houserconstruction.com once the domain is live.
  email: "houserconstruction@gmail.com",
  emailHref: "mailto:houserconstruction@gmail.com",
  address: {
    city: "Alaska",
    region: "AK",
    country: "US",
  },
  serviceArea: "Alaska",
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
    "Alaska statewide — from Anchorage and Eagle River to Palmer, Wasilla and the Mat-Su Valley, Girdwood, and beyond.",
  regNumber: "Licensed · Bonded · Insured",
  // Leave blank until real profile URLs are supplied — blank entries are not rendered.
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
} as const;

export const stats = [
  { value: "Family", label: "Owned & Operated" },
  { value: "Anchorage", label: "Mat-Su · Palmer · Wasilla" },
  { value: "100%", label: "Licensed · Bonded · Insured" },
] as const;


export const services = [
  {
    slug: "new-construction",
    title: "New Construction",
    blurb:
      "Ground-up homes and commercial buildings. One crew from permit through final walkthrough, so nothing falls between trades.",
  },
  {
    slug: "remodeling",
    title: "Remodeling & Renovation",
    blurb:
      "Whole-home renovations, additions, and tenant improvements. We work in older buildings without cutting corners on what's behind the walls.",
  },
  {
    slug: "commercial",
    title: "Commercial",
    blurb:
      "Retail, office, and mixed-use builds. Delivered on schedule and ready for inspection the first time through.",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Subdivisions",
    blurb:
      "Development work ranging from single-property flips to full residential subdivisions. Before-and-afters you can walk through.",
  },
  {
    slug: "decks-fences",
    title: "Decks, Fences & Exteriors",
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
    "Reference photo of a home interior before renovation. Client photography coming soon.",
  afterImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70",
  afterAlt:
    "Reference photo of a finished, renovated home interior. Client photography coming soon.",
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
    body: "We walk the site with you, talk through what you want, and note the real constraints: schedule, budget, code, and Alaska weather.",
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

// TODO: replace with real client names and towns, with written permission.
export const testimonials = [
  {
    quote:
      "Clear communication from day one, and the finished remodel looks better than we imagined. Highly recommend.",
    name: "Jenna R.",
    role: "Turnagain, Anchorage",
  },
  {
    quote:
      "Deck turned out solid and built to last through Alaska winters. Fair pricing and an honest timeline.",
    name: "Mark T.",
    role: "Wasilla, Mat-Su Valley",
  },
  {
    quote:
      "Professional, on time, and cleaned up after themselves every day. We'll be calling them for the next project.",
    name: "Dana K.",
    role: "Palmer, AK",
  },
] as const;

export const faqs = [
  {
    q: "What areas does Houser Construction serve?",
    a: "We work across Alaska, statewide. Most of our residential and commercial projects are in Anchorage, Eagle River, Palmer, Wasilla and the wider Mat-Su Valley, and Girdwood, but we travel for the right job anywhere in the state.",
  },
  {
    q: "Do you build in the Mat-Su Valley?",
    a: "Yes. We build throughout the Mat-Su Valley, including Palmer and Wasilla, and the Valley is one of our busiest areas alongside Anchorage. New construction, additions, and exterior work are all regular work for us out there.",
  },
  {
    q: "Do you do remodels in Anchorage?",
    a: "Yes. Anchorage remodels are a core part of what we do, from single-room renovations in Turnagain and Government Hill to whole-home remodels across the city, and we also remodel in Eagle River and Girdwood.",
  },
  {
    q: "Is Houser Construction family owned?",
    a: "Yes. Houser Construction is family owned and operated. The people who meet you at the start are the ones running your project through to the end.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "Yes. Houser Construction is fully licensed in Alaska, bonded, and carries general liability and workers' compensation coverage.",
  },
  {
    q: "What types of projects do you take on?",
    a: "New construction and remodels for homes and businesses. We also handle exterior work like decks and fences, plus real estate development including subdivisions.",
  },
  {
    q: "Do you handle real estate projects?",
    a: "Yes. We take on renovation and development work, from single-property flips to full subdivisions.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every Houser project carries a one-year workmanship warranty. Manufacturer warranties on installed products and systems pass through to you.",
  },
] as const;

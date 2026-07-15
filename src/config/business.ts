// Houser Construction — real business info from client intake.
// Email domain pending (no custom domain yet). Update when finalized.
export const business = {
  name: "Houser Construction",
  legalName: "Houser Construction LLC",
  tagline: "Built to last.",
  secondaryTagline: "The old is gone, the new has come.",
  description:
    "Houser Construction is an Alaska general contractor delivering new construction and remodels across residential, commercial, and government projects. Taking the old and making the new — solving today's problems by building for tomorrow.",
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
  regNumber: "Licensed · Bonded · Insured",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
} as const;

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "AK", label: "Statewide Coverage" },
  { value: "3", label: "Sectors: Residential · Commercial · Government" },
  { value: "100%", label: "Licensed · Bonded · Insured" },
] as const;

export const services = [
  {
    slug: "new-construction",
    title: "New Construction",
    blurb:
      "Ground-up residential and commercial builds — planned, permitted, and delivered with a single accountable team.",
  },
  {
    slug: "remodeling",
    title: "Remodeling & Renovation",
    blurb:
      "Whole-home renovations and tenant improvements. Taking the old and making the new, without cutting corners.",
  },
  {
    slug: "commercial",
    title: "Commercial",
    blurb:
      "Retail, office, and mixed-use construction built to spec, on schedule, and inspection-ready.",
  },
  {
    slug: "government",
    title: "Government Contracting",
    blurb:
      "Public-sector project delivery with the documentation, compliance, and reporting these contracts require.",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Subdivisions",
    blurb:
      "Development-focused real estate — from residential flips to full subdivisions. Before-and-afters you can see.",
  },
  {
    slug: "decks-fences",
    title: "Decks, Fences & Exteriors",
    blurb:
      "Exterior carpentry built for Alaskan weather — decks, fences, and outdoor structures that hold up season after season.",
  },
] as const;

export const projects = [
  {
    n: "01",
    name: "Residential Remodel",
    category: "Before & After",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "02",
    name: "Custom Deck Build",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "03",
    name: "Cedar Fence Install",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1590725175735-df0f6f7dfd1c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "04",
    name: "Real Estate Renovation",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "05",
    name: "Strip Mall Development",
    category: "Commercial · Coming Soon",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "06",
    name: "Government Contract",
    category: "Public Sector · Coming Soon",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "We meet on site, listen to your goals, and map the constraints — schedule, budget, code, and climate.",
  },
  {
    n: "02",
    title: "Estimate & Design",
    body: "Fixed-scope pricing, clear drawings, and a realistic timeline before a single nail is driven.",
  },
  {
    n: "03",
    title: "Build",
    body: "Licensed crews, weekly reporting, and disciplined site management from foundation to finish.",
  },
  {
    n: "04",
    title: "Closeout",
    body: "Punch-list to zero, documented as-builts, and a warranty walkthrough you'll actually want to attend.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Clear communication from day one, and the finished remodel looks better than we imagined. Highly recommend.",
    name: "Residential Client",
    role: "Anchorage, AK",
  },
  {
    quote:
      "Deck turned out solid — built to last through Alaska winters. Fair pricing and honest timeline.",
    name: "Homeowner",
    role: "Mat-Su Valley",
  },
  {
    quote:
      "Professional, on time, and cleaned up after themselves every day. We'll be calling them for the next project.",
    name: "Property Owner",
    role: "Alaska",
  },
] as const;

export const faqs = [
  {
    q: "What areas does Houser Construction serve?",
    a: "We build across Alaska — residential, commercial, and government projects statewide.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "Yes. Houser Construction is fully licensed in Alaska, bonded, and carries general liability and workers' compensation insurance.",
  },
  {
    q: "What types of projects do you take on?",
    a: "New construction and remodels across residential, commercial, and government contracting. We also handle exterior work — decks, fences, outdoor structures — and real estate development including subdivisions.",
  },
  {
    q: "How do I get a quote?",
    a: "Send us a note through the contact form or call the office. We'll set a site visit and follow up with a written estimate.",
  },
  {
    q: "Do you handle real estate projects?",
    a: "Yes. We take on renovation and development work for real estate — from single-property flips to full subdivisions.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every Houser project carries a one-year workmanship warranty, with manufacturer warranties passed through on installed products and systems.",
  },
] as const;

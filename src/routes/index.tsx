import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, ShieldCheck, HardHat, Ruler, Compass } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { BrandButton } from "@/components/brand/BrandButton";
import { Reveal } from "@/components/brand/Reveal";
import {
  business,
  stats,
  services,
  projects,
  processSteps,
  testimonials,
  faqs,
} from "@/config/business";

const HERO_IMG =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=75";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Houser Construction — Built to Last | Anchorage General Contractor" },
      {
        name: "description",
        content:
          "Houser Construction is a licensed Alaska general contractor delivering design-build, commercial, and residential projects on time and on budget. Serving Anchorage and South-Central Alaska.",
      },
      { property: "og:title", content: "Houser Construction — Built to Last" },
      {
        property: "og:description",
        content:
          "Design-build, commercial, and residential construction across Anchorage and South-Central Alaska.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: business.name,
          description: business.description,
          telephone: business.phone,
          email: business.email,
          areaServed: business.serviceArea,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.address.city,
            addressRegion: business.address.region,
            postalCode: business.address.postal,
            addressCountry: business.address.country,
          },
          openingHours: "Mo-Fr 08:00-17:00",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader overHero />
      <main>
        <Hero />
        <Positioning />
        <StatBar />
        <Services />
        <ProjectsGallery />
        <Process />
        <Testimonials />
        <Certifications />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-navy-deep text-white"
    >
      <img
        src={HERO_IMG}
        alt="Modern architectural build at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/60 to-navy-deep/95" />
      <div className="relative mx-auto max-w-[1200px] px-6 pt-40 md:pt-48 pb-24 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-red" aria-hidden />
            <span className="eyebrow text-white/75">Construction · Est. 2000</span>
          </div>
          <h1 className="display-xl text-white">
            Built to last.
            <br />
            <span className="text-white/70">Built with intent.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80 leading-relaxed">
            A general contractor delivering design-build, commercial, and
            residential projects across {business.serviceArea} — on schedule,
            on budget, and built to outlive the trend cycle.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BrandButton as="a" href="/#contact" variant="accent" size="lg">
              Get a quote <ArrowRight className="h-4 w-4" />
            </BrandButton>
            <BrandButton as="a" href="/#work" variant="outline-light" size="lg">
              View our work
            </BrandButton>
          </div>
        </div>
      </div>
      <a
        href="/#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

function Positioning() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-red" aria-hidden />
              <span className="eyebrow">The Studio</span>
            </div>
            <h2 className="display-lg text-navy">
              A contractor that acts like a partner.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.1}>
            <p className="text-lg text-charcoal/85 leading-relaxed">
              We build for owners who care how their buildings are put
              together — every joint, every transition, every detail. Our crews
              are licensed, our schedules are honest, and our reporting is
              weekly, not when-asked.
            </p>
            <p className="mt-6 text-lg text-charcoal/85 leading-relaxed">
              The result is a building you can trust — and a process you
              actually want to be part of.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatBar() {
  return (
    <section className="bg-paper-sunk border-y border-hairline">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
        {stats.map((s, i) => (
          <div key={s.label} className={i === 0 ? "pr-6" : "px-6"}>
            <div className="display-md text-navy">{s.value}</div>
            <div className="eyebrow mt-3">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICE_ICONS = [HardHat, Compass, Ruler, ShieldCheck, HardHat, Compass];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Six disciplines. One accountable team."
          >
            <p className="text-charcoal/80">
              Every service is led by a licensed superintendent and backed by
              in-house project management — no handoffs, no finger-pointing.
            </p>
          </SectionHeading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {services.map((s, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            return (
              <div
                key={s.slug}
                className="group bg-white p-8 md:p-10 transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="h-10 w-10 border-2 border-navy group-hover:border-white flex items-center justify-center text-navy group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="eyebrow group-hover:text-white/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy group-hover:text-white leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/80 group-hover:text-white/75">
                  {s.blurb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsGallery() {
  return (
    <section id="work" className="py-24 md:py-32 bg-paper-sunk">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading eyebrow="Selected work" title="Recent projects." />
            <BrandButton as="a" href="/#work" variant="outline" size="md">
              View all <ArrowRight className="h-4 w-4" />
            </BrandButton>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <a
                href="#"
                className="group block relative overflow-hidden bg-navy aspect-[4/3]"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                      {p.n} / 0{projects.length}
                    </span>
                  </div>
                  <div>
                    <div className="eyebrow text-white/60 mb-2">
                      {p.category}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {p.name}
                    </h3>
                    <div className="mt-4 h-[2px] w-10 bg-red group-hover:w-20 transition-all duration-300" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="Four steps. No surprises."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-hairline border border-hairline">
          {processSteps.map((step) => (
            <div key={step.n} className="bg-white p-8 md:p-10 relative">
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl font-bold text-navy/10 leading-none">
                  {step.n}
                </span>
                <span className="h-[2px] w-8 bg-red mt-4" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Client voice"
            title="Owners who've been through it."
            onDark
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="border-t border-white/15 pt-8">
                <span className="h-[2px] w-8 bg-red block mb-6" aria-hidden />
                <blockquote className="font-display text-xl leading-snug text-white">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-ui font-bold text-white text-sm uppercase tracking-[0.14em]">
                    {t.name}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const items = [
    "AK Licensed Contractor",
    "AGC Member",
    "OSHA 30 Certified",
    "EPA RRP Certified",
    "Bonded & Insured",
  ];
  return (
    <section className="py-16 bg-paper-sunk border-y border-hairline">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="eyebrow">Credentials</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {items.map((c) => (
              <span
                key={c}
                className="font-ui text-xs font-bold uppercase tracking-[0.18em] text-silver"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <SectionHeading eyebrow="Answers" title="Frequently asked." />
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="divide-y divide-hairline border-y border-hairline">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                    <h3 className="font-display text-lg md:text-xl font-bold text-navy pr-4">
                      {f.q}
                    </h3>
                    <span
                      className="mt-1 shrink-0 h-6 w-6 border-2 border-navy flex items-center justify-center text-navy transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/80 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy text-white"
    >
      <div className="absolute inset-y-0 right-0 w-1/3 bg-red hidden md:block" />
      <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-red md:bg-white" aria-hidden />
            <span className="eyebrow text-white/70">Start your project</span>
          </div>
          <h2 className="display-lg text-white max-w-2xl">
            Have a build in mind? Let&apos;s scope it properly.
          </h2>
          <p className="mt-6 text-white/75 max-w-xl">
            Tell us about your project. We&apos;ll follow up within one business
            day to schedule a site visit and put a real estimate in your hands.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col gap-3 md:items-end relative z-10">
          <BrandButton
            as="a"
            href={business.emailHref}
            variant="accent"
            size="lg"
            block
          >
            Request an estimate <ArrowRight className="h-4 w-4" />
          </BrandButton>
          <BrandButton
            as="a"
            href={business.phoneHref}
            variant="outline-light"
            size="lg"
            block
          >
            {business.phone}
          </BrandButton>
        </div>
      </div>
    </section>
  );
}

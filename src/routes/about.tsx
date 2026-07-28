import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { BrandButton } from "@/components/brand/BrandButton";
import { Reveal } from "@/components/brand/Reveal";
import { business } from "@/config/business";

const ABOUT_HERO =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=75";
const CREW_IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75";

const OWNERS = [
  {
    name: "Steve Houser",
    role: "Founder",
    initials: "SH",
    bio: "Steve came up through the trades the long way, framing, finishing, and running crews long before the company carried the family name. He is the one who set the standard the rest of us build to: do it right the first time, and stand behind it after the check clears.",
    quote: "If it isn't good enough for my own house, it doesn't leave the site.",
  },
  {
    name: "David Houser",
    role: "Owner & Project Lead",
    initials: "DH",
    bio: "David runs the day to day, from the first walkthrough to the final punch list. He is the person clients talk to when they call, and the person on site when the work is happening. Working alongside his dad is the reason the company exists in the first place.",
    quote: "The person who walks your site is the person who answers the phone.",
  },
];

const VALUES = [
  {
    n: "01",
    title: "Family first",
    body: "A father and son on the same crew. There is no layer of managers between you and the people holding the tools.",
  },
  {
    n: "02",
    title: "Built for Alaska",
    body: "Every choice we make accounts for the weather, the ground, and the seasons we actually build in.",
  },
  {
    n: "03",
    title: "Honest work",
    body: "Clear scope, real timelines, and a straight answer when something changes. Licensed, bonded, and insured.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Houser Construction — A Father, A Son, Built in Alaska" },
      {
        name: "description",
        content:
          "Meet the family behind Houser Construction. David and Steve Houser build new homes, remodels, and real estate developments across Alaska, licensed, bonded, and insured.",
      },
      {
        property: "og:title",
        content: "About Houser Construction — A Father, A Son, Built in Alaska",
      },
      {
        property: "og:description",
        content:
          "Meet the family behind Houser Construction: David and Steve Houser, a father and son building across Alaska.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: ABOUT_HERO },
      { name: "twitter:image", content: ABOUT_HERO },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Houser Construction",
          about: {
            "@type": "GeneralContractor",
            name: business.name,
            telephone: business.phone,
            email: business.email,
            areaServed: business.serviceArea,
            employee: OWNERS.map((o) => ({
              "@type": "Person",
              name: o.name,
              jobTitle: o.role,
            })),
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <AboutHero />
        <Story />
        <Owners />
        <Values />
        <AboutCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <img
        src={ABOUT_HERO}
        alt="Alaska construction site at dusk"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep/95" />
      <div className="relative mx-auto max-w-[1200px] px-6 pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="flex items-center gap-3 mb-6">
          <span className="rule-red" aria-hidden />
          <span className="eyebrow text-white/80">Profile</span>
        </div>
        <h1 className="display-xl text-white max-w-3xl">
          A father, a son,
          <br />
          <span className="text-white/85">and one standard.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-white/85 leading-relaxed">
          Houser Construction is family owned and family run. Steve and David
          Houser build across Alaska, and the name on the truck is the same one
          on the family mailbox.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40 bg-sand blueprint-grid">
      <span
        aria-hidden
        className="ghost-number absolute -top-6 right-4 md:right-10 hidden sm:block"
      >
        01
      </span>
      <div className="relative mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-x-16 gap-y-14 items-start">
        <div className="md:col-span-5">
          <Reveal>
            <SectionHeading eyebrow="Our story" number="01" title="How it started." />
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.08}>
            <p className="text-lg text-charcoal leading-relaxed">
              Houser Construction started the way most good things in a family
              do: two people who trusted each other decided to do the work
              themselves. Steve had spent a career in the trades. David grew up
              on his job sites, learning that a level is honest even when a
              schedule is not.
            </p>
            <blockquote className="mt-12 border-l-2 border-red pl-6">
              <p className="display-md text-navy">
                The old is gone. The new has come.
              </p>
            </blockquote>
            <p className="mt-12 text-lg text-charcoal/85 leading-relaxed">
              Today we build new homes, take on full remodels, and develop real
              estate across Alaska. The company stayed small on purpose. When
              you hire us, you get the family, not a subcontracted stand-in.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PortraitPlaceholder({ initials }: { initials: string }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy blueprint-grid-dark border border-hairline photo-frame">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="font-display text-5xl font-bold text-white/25 tracking-tight">
          {initials}
        </span>
        <span className="font-ui text-[11px] font-bold uppercase tracking-[0.24em] text-white/35">
          Portrait coming soon
        </span>
      </div>
      <span aria-hidden className="absolute bottom-0 left-0 h-1 w-24 bg-red" />
    </div>
  );
}

function Owners() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40 bg-navy text-white blueprint-grid-dark">
      <span
        aria-hidden
        className="ghost-number-light absolute -top-8 left-4 md:left-10 hidden sm:block"
      >
        02
      </span>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The owners"
            number="02"
            title="Who you'll be working with."
            onDark
          />
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {OWNERS.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.08}>
              <article>
                <PortraitPlaceholder initials={o.initials} />
                <div className="mt-8">
                  <p className="eyebrow text-white/60">{o.role}</p>
                  <h3 className="display-md text-white mt-3">{o.name}</h3>
                  <p className="mt-6 text-white/80 leading-relaxed">{o.bio}</p>
                  <p className="mt-8 font-display text-xl leading-snug text-white/90 border-l-2 border-red pl-5">
                    &ldquo;{o.quote}&rdquo;
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <figure className="mt-20 md:mt-28">
            <div className="relative aspect-[16/7] overflow-hidden border border-white/10 photo-frame">
              <img
                src={CREW_IMG}
                alt="Houser Construction crew on an Alaska job site"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="photo-warm absolute inset-0" />
            </div>
            <figcaption className="mt-4 font-ui text-[11px] font-bold uppercase tracking-[0.24em] text-timber">
              Team photo of Steve &amp; David coming soon
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <SectionHeading
              eyebrow="What we hold to"
              number="03"
              title="Three things that don't move."
            />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.06}>
              <div className="border-t border-hairline pt-8">
                <span className="rule-red mb-6" aria-hidden />
                <p className="font-display text-sm font-bold text-silver tracking-[0.2em]">
                  {v.n}
                </p>
                <h3 className="display-md text-navy mt-3">{v.title}</h3>
                <p className="mt-5 text-charcoal/85 leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white blueprint-grid-dark">
      <span aria-hidden className="absolute top-0 right-0 h-1 w-40 md:w-64 bg-red" />
      <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-36 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="display-lg text-white">Let&apos;s talk.</h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Drawings in hand or just an idea, reach out and we&apos;ll walk it
            through with you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <BrandButton as="a" href={business.emailHref} variant="accent" size="lg">
            Email us <ArrowRight className="h-4 w-4" />
          </BrandButton>
          <BrandButton
            as="a"
            href={business.phoneHref}
            variant="outline-light"
            size="lg"
          >
            <Phone className="h-4 w-4" /> {business.phone}
          </BrandButton>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-ui text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}

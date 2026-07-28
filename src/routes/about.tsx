import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/brand/Reveal";
import { NumberedSection } from "@/components/brand/NumberedSection";
import { ContactSection } from "@/components/brand/ContactSection";
import { business, stats, faqs } from "@/config/business";
import crewImg from "@/assets/about/crew.jpg";
import framingImg from "@/assets/about/detail-framing.jpg";
import handshakeImg from "@/assets/promise-handshake.jpg";

const TITLE = "About Houser Construction — A Family Alaska Builder";
const DESCRIPTION =
  "Who we are: a family owned, licensed Alaska general contractor. Our story, the people on the crew, and the standard we hold every job to.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://houserconstruction.net/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://houserconstruction.net/about" }],
    scripts: [
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
  component: AboutPage,
});

// TODO: confirm with client — names, roles, and portraits.
const PEOPLE = [
  {
    name: "David Houser",
    role: "Owner",
    note: "On every site, on every call. TODO: confirm with client.",
  },
  {
    name: "Family & Crew",
    role: "Build Team",
    note: "The same faces from first walkthrough to punch list.",
  },
  {
    name: "Trade Partners",
    role: "Alaska Subcontractors",
    note: "Long-standing local relationships, not lowest-bid strangers.",
  },
];

// TODO: confirm with client — dates and details of each chapter.
const STORY = [
  {
    year: "Before",
    heading: "Twelve years on other people's crews.",
    body: "Framing, finishing, and running jobs across Alaska long before there was a company name on the truck. TODO: confirm with client.",
  },
  {
    year: "The start",
    heading: "A family decision.",
    body: "Houser Construction started because a family wanted to do the work its own way: answer the phone, keep the word, and stand behind the finish. TODO: confirm with client.",
  },
  {
    year: "Now",
    heading: "New builds, remodels, and restoration.",
    body: "Homes, small commercial, and community buildings across the state. Small enough that the owner is on site, established enough to carry the job through. TODO: confirm with client.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Intro />
        <Story />
        <PhotoCluster />
        <ValueBar />
        <People />
        <ContactSection number="05" />
      </main>
      <SiteFooter />
    </div>
  );
}

function Intro() {
  return (
    <section className="pt-40 md:pt-52 pb-20 md:pb-28 bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <NumberedSection number="01" eyebrow="Who we are" />
        <h1 className="display-hero text-navy max-w-4xl">
          A family
          <br />
          that builds.
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-charcoal leading-relaxed">
          {business.description}
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-20 md:py-28 bg-paper-sunk border-y border-hairline">
      <div className="mx-auto max-w-[1200px] px-6">
        <NumberedSection
          number="02"
          eyebrow="Our story"
          title="How we got here."
        />
        <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 list-none p-0">
          {STORY.map((chapter, i) => (
            <li key={chapter.year}>
              <Reveal delay={i * 0.08}>
                <span className="h-[2px] w-10 bg-red block mb-5" aria-hidden />
                <div className="eyebrow">{chapter.year}</div>
                <h3 className="display-md text-navy mt-4">
                  {chapter.heading}
                </h3>
                <p className="mt-4 text-charcoal/85 leading-relaxed">
                  {chapter.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PhotoCluster() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7">
          <img
            src={crewImg}
            alt="The Houser Construction crew outside a timber-framed Alaska home under construction"
            loading="lazy"
            width={1600}
            height={1067}
            className="w-full h-full object-cover aspect-[3/2]"
          />
        </div>
        <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-6">
          <img
            src={framingImg}
            alt="A carpenter measuring a framing stud on an Alaska job site"
            loading="lazy"
            width={1120}
            height={1400}
            className="w-full object-cover aspect-[4/5]"
          />
          <img
            src={handshakeImg}
            alt="A handshake between a Houser Construction contractor and a homeowner"
            loading="lazy"
            width={1200}
            height={1408}
            className="w-full object-cover aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}

function ValueBar() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:divide-x md:divide-white/15">
        {stats.map((s, i) => (
          <div key={s.label} className={i === 0 ? "md:pr-8" : "md:px-8"}>
            <span className="block h-[2px] w-10 bg-red mb-5" aria-hidden />
            <div className="display-md text-white">{s.value}</div>
            <div className="eyebrow text-white/60 mt-4">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-6">
        <NumberedSection
          number="03"
          eyebrow="The people"
          title="Who you'll actually deal with."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="border-t border-hairline pt-8">
                <h3 className="font-display text-2xl font-bold text-navy">
                  {p.name}
                </h3>
                <div className="eyebrow mt-3">{p.role}</div>
                <p className="mt-4 text-charcoal/85 leading-relaxed">
                  {p.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <NumberedSection
            number="04"
            eyebrow="Straight answers"
            title="Common questions."
          />
          <dl className="mt-10 border-t border-hairline">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-hairline py-6">
                <dt className="font-display text-xl font-bold text-navy">
                  {f.q}
                </dt>
                <dd className="mt-3 text-charcoal/85 leading-relaxed max-w-3xl">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

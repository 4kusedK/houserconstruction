import { createFileRoute, notFound, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/brand/Reveal";
import { BeforeAfter } from "@/components/brand/BeforeAfter";
import { ProjectImage } from "@/components/brand/ProjectImage";
import { ContactSection } from "@/components/brand/ContactSection";
import { getProject, type Project } from "@/config/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const url = `https://houserconstruction.net/work/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Houser Construction" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    const title = `${p.name} — ${p.category} in ${p.location} | Houser Construction`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectDetail,
  errorComponent: ProjectError,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="pt-40 md:pt-52 pb-12 bg-background">
          <div className="mx-auto max-w-[1200px] px-6">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-ui text-[12px] font-bold uppercase tracking-[0.14em] text-silver hover:text-red transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All work
            </Link>
            <h1 className="display-hero text-navy mt-8 max-w-4xl">
              {project.name}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="eyebrow">{project.category}</span>
              <span className="eyebrow">{project.location}</span>
              <span className="eyebrow">{project.year}</span>
              {project.photosPending ? (
                <span className="eyebrow text-red">
                  Final photos coming soon
                </span>
              ) : null}
            </div>
            <p className="mt-8 max-w-2xl text-lg text-charcoal leading-relaxed">
              {project.summary}
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-[1400px] px-0 md:px-6">
            <BeforeAfter
              before={project.before}
              after={project.after}
              name={project.name}
              aspect="aspect-[3/2]"
              priority
            />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-paper-sunk border-y border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="h-[2px] w-10 bg-red block mb-5" aria-hidden />
              <h2 className="display-md text-navy">The situation</h2>
              <p className="mt-5 text-charcoal/85 leading-relaxed">
                {project.situation}
              </p>
            </div>
            <div className="md:col-span-4">
              <span className="h-[2px] w-10 bg-red block mb-5" aria-hidden />
              <h2 className="display-md text-navy">The work</h2>
              <p className="mt-5 text-charcoal/85 leading-relaxed">
                {project.work}
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-10">
              <span className="h-[2px] w-10 bg-red block mb-5" aria-hidden />
              <h2 className="display-md text-navy">Scope</h2>
              <ul className="mt-5 space-y-3 list-none p-0">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="text-charcoal/85 border-b border-hairline pb-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {project.gallery?.length ? (
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((src, i) => (
                <Reveal key={src + i} delay={(i % 2) * 0.08}>
                  <ProjectImage
                    src={src}
                    alt={`${project.name} — project photograph ${i + 1}`}
                    aspect="aspect-[4/3]"
                  />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {project.quote ? (
          <section className="bg-navy-deep text-white py-24">
            <div className="mx-auto max-w-[1000px] px-6">
              <blockquote>
                <p className="display-lg text-white">
                  &ldquo;{project.quote.text}&rdquo;
                </p>
                <footer className="eyebrow text-white/60 mt-8">
                  {project.quote.attribution}
                </footer>
              </blockquote>
            </div>
          </section>
        ) : null}

        <ContactSection number="04" />
      </main>
      <SiteFooter />
    </div>
  );
}

function Shell({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[1200px] px-6 pt-48 pb-32">
        <h1 className="display-lg text-navy">{title}</h1>
        <p className="mt-6 text-lg text-charcoal/85 max-w-xl">{body}</p>
        <div className="mt-10">{action}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectNotFound() {
  return (
    <Shell
      title="We couldn't find that project."
      body="It may have been renamed. Everything we've built is on the work page."
      action={
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      }
    />
  );
}

function ProjectError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <Shell
      title="Something went wrong."
      body="That page didn't load. Give it another try."
      action={
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors"
        >
          Retry
        </button>
      }
    />
  );
}

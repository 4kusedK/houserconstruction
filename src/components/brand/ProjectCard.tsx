import { Link } from "@tanstack/react-router";

import { ProjectImage } from "@/components/brand/ProjectImage";
import type { Project } from "@/config/projects";

export function ProjectCard({
  project,
  aspect = "aspect-[4/3]",
}: {
  project: Project;
  aspect?: string;
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div className="relative overflow-hidden">
        <ProjectImage
          src={project.after}
          alt={`${project.name} — ${project.category} project in ${project.location}`}
          aspect={aspect}
          className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        {project.before ? (
          <span className="absolute top-0 right-0 bg-red text-white eyebrow px-3 py-2">
            Before / After
          </span>
        ) : null}
      </div>
      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-bold text-navy group-hover:text-red transition-colors">
            {project.name}
          </h3>
          <span className="font-ui text-xs font-bold tabular-nums text-silver">
            {project.year}
          </span>
        </div>
        <div className="eyebrow mt-3">
          {project.category}
          <span className="mx-2 opacity-40">·</span>
          {project.location}
        </div>
        <p className="mt-4 text-charcoal/85 leading-relaxed">
          {project.summary}
        </p>
        <span
          aria-hidden
          className="mt-5 block h-[2px] w-10 bg-red transition-all duration-300 group-hover:w-20"
        />
      </div>
    </Link>
  );
}

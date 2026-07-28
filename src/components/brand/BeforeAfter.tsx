import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/brand/ProjectImage";

/**
 * Two panels side by side. No JS slider — just an honest pair.
 */
export function BeforeAfter({
  before,
  after,
  name,
  aspect = "aspect-[4/3]",
  className,
  priority = false,
}: {
  before?: string;
  after: string;
  name: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  if (!before) {
    return (
      <figure className={className}>
        <ProjectImage
          src={after}
          alt={`${name} — completed work by Houser Construction`}
          aspect={aspect}
          priority={priority}
        />
      </figure>
    );
  }

  return (
    <figure className={cn("grid grid-cols-1 sm:grid-cols-2 gap-1", className)}>
      <div className="relative">
        <ProjectImage
          src={before}
          alt={`${name} before work began`}
          aspect={aspect}
          priority={priority}
        />
        <span className="absolute top-0 left-0 bg-navy-deep/90 text-white eyebrow px-3 py-2">
          Before
        </span>
      </div>
      <div className="relative">
        <ProjectImage
          src={after}
          alt={`${name} after completion by Houser Construction`}
          aspect={aspect}
          priority={priority}
        />
        <span className="absolute top-0 left-0 bg-red text-white eyebrow px-3 py-2">
          After
        </span>
      </div>
    </figure>
  );
}

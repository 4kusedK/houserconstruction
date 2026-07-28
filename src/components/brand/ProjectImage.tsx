import { cn } from "@/lib/utils";

/**
 * Aspect-ratio image wrapper with a graceful navy fallback when a photo
 * hasn't been supplied yet.
 */
export function ProjectImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  priority = false,
  label,
}: {
  src?: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-deep",
        aspect,
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="eyebrow text-white/50">
            {label ?? "Photo coming soon"}
          </span>
        </div>
      )}
    </div>
  );
}

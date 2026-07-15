import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  number,
  title,
  align = "left",
  onDark = false,
  className,
  children,
}: {
  eyebrow?: string;
  number?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-[2px] w-8 bg-red" aria-hidden />
          <span
            className={cn(
              "eyebrow",
              onDark ? "text-white/70" : "text-silver",
            )}
          >
            {number ? (
              <>
                <span className={onDark ? "text-white" : "text-navy"}>
                  {number}
                </span>
                <span className="mx-2 opacity-60">—</span>
              </>
            ) : null}
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2
        className={cn(
          "display-lg",
          onDark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-4 max-w-2xl",
            onDark ? "text-white/75" : "text-charcoal/80",
            align === "center" && "mx-auto",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

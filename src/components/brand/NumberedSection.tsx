import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function NumberedSection({
  number,
  eyebrow,
  title,
  onDark = false,
  className,
  children,
}: {
  number: string;
  eyebrow: string;
  title?: ReactNode;
  onDark?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-5">
        <span className="h-[2px] w-8 bg-red" aria-hidden />
        <span className={cn("eyebrow", onDark && "text-white/70")}>
          <span className={onDark ? "text-white" : "text-navy"}>{number}</span>
          <span className="mx-2 opacity-60">—</span>
          {eyebrow}
        </span>
      </div>
      {title ? (
        <h2 className={cn("display-lg", onDark ? "text-white" : "text-navy")}>
          {title}
        </h2>
      ) : null}
      {children}
    </div>
  );
}

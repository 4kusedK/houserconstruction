import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-navy text-white border-2 border-navy hover:bg-navy-mid hover:border-navy-mid",
  accent:
    "bg-red text-white border-2 border-red hover:bg-red-dark hover:border-red-dark",
  outline:
    "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
  "outline-light":
    "bg-transparent text-white border-2 border-white/70 hover:bg-white hover:text-navy",
  ghost: "bg-transparent text-navy border-2 border-transparent hover:bg-navy/5",
};

const SIZES: Record<Size, string> = {
  sm: "px-3.5 py-2 text-[13px] min-h-[36px]",
  md: "px-5 py-3 text-sm min-h-[44px]",
  lg: "px-7 py-4 text-base min-h-[52px]",
};

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
};
type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
};

type Props = (ButtonAsButton | ButtonAsAnchor) & {
  variant?: Variant;
  size?: Size;
  block?: boolean;
};

export function BrandButton({
  variant = "primary",
  size = "md",
  block,
  className,
  children,
  ...rest
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[4px] font-ui font-bold uppercase tracking-[0.08em] leading-none",
    "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "hover:-translate-y-0.5 hover:shadow-md",
    VARIANTS[variant],
    SIZES[size],
    block && "w-full",
    className,
  );

  if ((rest as ButtonAsAnchor).as === "a") {
    const { as: _as, ...anchorProps } = rest as ButtonAsAnchor;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }
  const { as: _as, ...btnProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...btnProps}>
      {children}
    </button>
  );
}

import logoFull from "@/assets/logo/houser-full-color.png";
import logoWhite from "@/assets/logo/houser-white.png";
import symbolColor from "@/assets/logo/houser-symbol.png";
import symbolWhite from "@/assets/logo/houser-symbol-white.png";

type Variant = "full" | "full-white" | "symbol" | "symbol-white";

const SRC: Record<Variant, string> = {
  full: logoFull,
  "full-white": logoWhite,
  symbol: symbolColor,
  "symbol-white": symbolWhite,
};

export function Logo({
  variant = "full",
  className,
  alt = "Houser Construction",
}: {
  variant?: Variant;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={SRC[variant]}
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

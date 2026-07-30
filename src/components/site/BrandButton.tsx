import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const brandButton = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "text-white shadow-[var(--shadow-soft)] [background:var(--gradient-primary)] hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]",
        outline:
          "border border-primary/25 bg-white/60 text-primary backdrop-blur-md hover:border-accent hover:text-accent hover:shadow-[var(--shadow-glow)]",
        ghostLight:
          "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20",
        accent:
          "text-white [background:var(--gradient-accent)] hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        md: "px-7 py-3.5 text-sm",
        lg: "px-9 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = VariantProps<typeof brandButton> & {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function BrandButton({
  children,
  className,
  variant,
  size,
  to,
  href,
  arrow = true,
  onClick,
  type = "button",
}: Props) {
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight className="relative z-10 size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
      )}
      <span className="absolute inset-0 -translate-x-full bg-[var(--gradient-sheen)] transition-transform duration-700 group-hover:translate-x-full" />
    </>
  );
  const cls = cn(brandButton({ variant, size }), className);

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

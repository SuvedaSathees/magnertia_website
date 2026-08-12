import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

export const MAGNERTIA_PATH_A =
  "M32 118 C34 70 72 48 88 66 C104 84 92 118 74 140 C56 162 40 172 34 160 C28 148 48 132 78 112 C110 90 140 68 152 52";
export const MAGNERTIA_PATH_B =
  "M150 40 C168 40 168 66 148 92 C128 118 118 140 122 160 C126 178 138 184 148 180";

export function LogoMark({
  className = "h-12 w-12",
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <img
      src={logoImg}
      alt="Magnertia Logo"
      className={`rounded-full object-cover shrink-0 ${className}`}
      style={{ borderRadius: "9999px", clipPath: "circle(50% at 50% 50%)" }}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className="flex flex-col leading-none">
      <span
        className={cn("font-display text-xl sm:text-2xl font-bold tracking-tight text-primary", className)}
      >
        Magnertia
      </span>
    </div>
  );
}

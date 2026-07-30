export const MAGNERTIA_PATH_A =
  "M32 118 C34 70 72 48 88 66 C104 84 92 118 74 140 C56 162 40 172 34 160 C28 148 48 132 78 112 C110 90 140 68 152 52";
export const MAGNERTIA_PATH_B =
  "M150 40 C168 40 168 66 148 92 C128 118 118 140 122 160 C126 178 138 184 148 180";

export function LogoMark({
  className = "h-9 w-9",
  color = "currentColor",
  strokeWidth = 13,
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 210 210"
      className={className}
      fill="none"
      role="img"
      aria-label="Magnertia logo"
    >
      <g
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d={MAGNERTIA_PATH_A} />
        <path d={MAGNERTIA_PATH_B} />
      </g>
      <circle cx="164" cy="190" r="8" fill={color} />
      <circle cx="188" cy="199" r="7.5" fill={color} />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-[0.95rem] font-bold tracking-[0.28em] uppercase ${className}`}
    >
      Magnertia
    </span>
  );
}

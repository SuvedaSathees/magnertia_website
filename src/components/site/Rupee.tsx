export function Rupee({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      ₹
    </span>
  );
}

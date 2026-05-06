export default function TriangleDivider({ className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-clay/70 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-sand" />
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M7 1 L13 11 L1 11 Z" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M7 11 L1 1 L13 1 Z" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="h-px w-16 bg-sand" />
    </div>
  );
}

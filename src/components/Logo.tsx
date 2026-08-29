export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const mark = (
    <svg
      viewBox="0 0 220 90"
      className={compact ? "h-7 w-auto" : "h-10 w-auto"}
      role="img"
      aria-label="Global Beyond LLC"
    >
      <defs>
        <linearGradient id="gb-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f6f8" />
          <stop offset="30%" stopColor="#c9cdd3" />
          <stop offset="55%" stopColor="#7d838d" />
          <stop offset="75%" stopColor="#e7eaed" />
          <stop offset="100%" stopColor="#9096a0" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="52"
        textAnchor="middle"
        fontFamily="var(--font-display, sans-serif)"
        fontWeight={700}
        fontSize={44}
        letterSpacing="-1"
        fill="url(#gb-chrome)"
      >
        GB
      </text>
      <path
        d="M10 66 Q110 84 210 66"
        fill="none"
        stroke="url(#gb-chrome)"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );

  if (compact) {
    return <span className={`inline-flex items-center ${className}`}>{mark}</span>;
  }

  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      {mark}
      <span className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-silver">
        GLOBAL BEYOND
      </span>
    </span>
  );
}

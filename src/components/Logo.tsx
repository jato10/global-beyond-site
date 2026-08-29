export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-semibold tracking-tight ${className}`}
    >
      <span
        className="text-xl leading-none bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #f4f6f8 0%, #c9cdd3 35%, #8a8f98 55%, #f4f6f8 75%, #a7acb5 100%)",
        }}
      >
        GB
      </span>
      <span className="hidden sm:inline text-sm text-silver tracking-[0.2em] uppercase">
        Global Beyond
      </span>
    </span>
  );
}

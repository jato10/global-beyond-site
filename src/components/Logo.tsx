import Image from "next/image";

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="Global Beyond LLC"
      width={220}
      height={90}
      priority={!compact}
      className={`h-auto w-auto ${compact ? "max-h-8" : "max-h-14"} ${className}`}
    />
  );
}

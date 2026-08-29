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
      src="/images/logo.jpg"
      alt="Global Beyond LLC"
      width={3480}
      height={2035}
      priority={!compact}
      className={`h-auto w-auto ${compact ? "max-h-8" : "max-h-14"} ${className}`}
    />
  );
}

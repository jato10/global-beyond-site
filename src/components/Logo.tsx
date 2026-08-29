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
      width={2779}
      height={1375}
      priority={!compact}
      className={`h-auto w-auto ${compact ? "max-h-10" : "max-h-16"} ${className}`}
    />
  );
}

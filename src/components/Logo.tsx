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
      width={1345}
      height={647}
      priority={!compact}
      className={`h-auto w-auto ${compact ? "max-h-10" : "max-h-16"} ${className}`}
    />
  );
}

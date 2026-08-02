import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-electric-light/90 uppercase font-mono",
        className
      )}
    >
      <span className="h-px w-8 bg-gradient-to-l from-electric-light to-transparent" />
      {children}
    </span>
  );
}

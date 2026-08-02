import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * کارت شیشه‌ای (Glassmorphism) پایه، مورد استفاده در سراسر سایت برای بخش‌های خدمات، پروژه‌ها و قیمت‌گذاری
 */
export function GlassCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl2 border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-glass",
        "transition-all duration-500 hover:border-electric-light/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

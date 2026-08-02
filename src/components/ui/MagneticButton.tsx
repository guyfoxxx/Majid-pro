"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

/**
 * دکمه‌ای با جلوه «مغناطیسی»: هنگام نزدیک‌شدن نشانگر، دکمه به سمت آن کشیده می‌شود
 */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.35;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-light";

  const variants = {
    primary:
      "bg-gradient-to-tr from-electric to-violet text-white shadow-glow hover:shadow-glow-violet",
    secondary:
      "border border-white/15 text-paper backdrop-blur-md bg-white/[0.03] hover:border-electric-light/60 hover:bg-white/[0.06]",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.a>
  );
}

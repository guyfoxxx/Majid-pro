"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * پس‌زمینه اتمسفریک سراسری: گرید ظریف + گرادیان‌های متحرک + ذرات شناور
 * روی موبایل‌های کم‌توان یا با prefers-reduced-motion، انیمیشن سنگین غیرفعال می‌شود
 */
export function AmbientBackground() {
  const reduced = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.round((i * 137.5) % 100),
        top: Math.round((i * 71.3) % 100),
        size: 2 + (i % 3),
        delay: (i % 6) * 0.6,
        duration: 5 + (i % 5),
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      {!reduced && (
        <motion.div
          className="absolute -left-1/4 top-[-10%] h-[60vh] w-[60vh] rounded-full bg-electric/20 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {!reduced && (
        <motion.div
          className="absolute -right-1/4 top-1/3 h-[55vh] w-[55vh] rounded-full bg-violet/20 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {!reduced &&
        particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-electric-light/50 animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
    </div>
  );
}

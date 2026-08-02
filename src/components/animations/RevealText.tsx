"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

/**
 * افکت آشکارسازی متن کلمه‌به‌کلمه همراه با محوشدگی (blur) برای بخش هیرو و عناوین کلیدی
 */
export function RevealText({
  text,
  as = "span",
  className,
  delay = 0,
}: RevealTextProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block me-[0.28em]"
          initial={{
            opacity: 0,
            y: reduced ? 0 : 18,
            filter: reduced ? "blur(0px)" : "blur(6px)",
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reduced ? 0.2 : 0.6,
            delay: reduced ? 0 : delay + index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

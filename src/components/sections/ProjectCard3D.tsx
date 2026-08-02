"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/types";

/**
 * کارت پروژه با افکت چرخش سه‌بعدی هنگام حرکت نشانگر (3D hover / tilt) و جلوه درخشش
 */
export function ProjectCard3D({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-shadow duration-500 hover:shadow-glow"
      >
        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative z-10 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-navy-light to-ink-800"
        >
          <span className="font-mono text-xs text-electric-light/70">
            {project.category}
          </span>
          <div className="absolute inset-0 bg-grid-glow opacity-60" />
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="relative z-10 mt-5">
          <h3 className="font-display text-lg font-semibold text-paper">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-mist">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-mist"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-sm text-electric-light">
            مشاهده جزئیات
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

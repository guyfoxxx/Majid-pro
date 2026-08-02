"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations/FadeUp";
import skillsData from "@/data/skills.json";
import type { SkillCategory, SkillItem } from "@/lib/types";

const categories = skillsData as SkillCategory[];

export function Skills() {
  const [active, setActive] = useState<{ cat: string; item: SkillItem } | null>(
    null
  );

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <Container>
        <SectionLabel>مهارت‌ها</SectionLabel>
        <FadeUp>
          <h2 className="mt-4 font-display text-3xl font-semibold text-paper md:text-4xl">
            اکوسیستم فناوری
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-mist">
            روی هر مهارت نگه‌دارید یا لمس کنید تا سطح تجربه و توضیح آن را
            ببینید.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, catIndex) => (
            <FadeUp key={category.category} delay={catIndex * 0.06}>
              <GlassCard className="h-full p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-electric-light">
                  {category.category}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onMouseEnter={() =>
                        setActive({ cat: category.category, item })
                      }
                      onFocus={() =>
                        setActive({ cat: category.category, item })
                      }
                      onClick={() =>
                        setActive({ cat: category.category, item })
                      }
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-paper transition-all duration-300 hover:border-electric-light/60 hover:bg-electric/10 hover:shadow-glow"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        <div className="mt-6 min-h-[92px]">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <GlassCard className="flex flex-col gap-2 border-electric-light/30 bg-electric/[0.06] p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold text-paper">
                      {active.item.name}
                      <span className="ms-3 text-xs font-normal text-electric-light">
                        {active.item.level}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-mist">
                      {active.item.description}
                    </p>
                  </div>
                  <p className="text-xs text-mist/70">{active.cat}</p>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

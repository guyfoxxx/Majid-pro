"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/animations/FadeUp";

const MILESTONES = [
  {
    year: "شروع مسیر",
    title: "آغاز برنامه‌نویسی",
    description: "شروع یادگیری برنامه‌نویسی با پایتون و ساخت اولین اسکریپت‌های خودکارسازی.",
  },
  {
    year: "توسعه موبایل",
    title: "ورود به دنیای اندروید",
    description: "یادگیری Java و Android SDK و ساخت اولین اپلیکیشن‌های بومی.",
  },
  {
    year: "توسعه وب",
    title: "تخصص در Next.js و TypeScript",
    description: "تمرکز بر ساخت وب‌سایت‌های حرفه‌ای، سریع و سئو-محور برای کسب‌وکارها.",
  },
  {
    year: "امروز",
    title: "توسعه‌دهنده فول‌استک",
    description: "ترکیب مهارت‌های وب، موبایل، اتوماسیون و سئو برای ارائه راهکارهای کامل دیجیتال.",
  },
];

export function Timeline() {
  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <SectionLabel>مسیر حرفه‌ای</SectionLabel>
        <FadeUp>
          <h2 className="mt-4 font-display text-3xl font-semibold text-paper md:text-4xl">
            چگونه به اینجا رسیدم
          </h2>
        </FadeUp>

        <div className="relative mt-16">
          <div className="absolute right-[7px] top-0 h-full w-px bg-gradient-to-b from-electric-light via-white/10 to-transparent md:right-1/2" />

          <div className="flex flex-col gap-14">
            {MILESTONES.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex flex-col gap-4 pe-8 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:me-auto md:pe-14 md:text-right"
                    : "md:ms-auto md:ps-14 md:pe-0 md:text-right"
                }`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`absolute top-1.5 h-4 w-4 rounded-full border-2 border-ink bg-electric-light shadow-glow ${
                    index % 2 === 0 ? "right-0 md:-right-2" : "right-0 md:right-auto md:-left-2"
                  }`}
                />
                <FadeUp>
                  <p className="font-mono text-xs uppercase tracking-widest text-electric-light">
                    {milestone.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-paper">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-mist">
                    {milestone.description}
                  </p>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

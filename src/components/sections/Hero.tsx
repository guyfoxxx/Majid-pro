"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/animations/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>توسعه‌دهنده فول‌استک</SectionLabel>
        </motion.div>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.15] text-paper sm:text-6xl md:text-7xl lg:text-8xl">
          <RevealText text="مجید فکرمند" as="span" className="block" />
          <RevealText
            text="Full Stack Developer"
            as="span"
            delay={0.4}
            className="block bg-gradient-to-l from-electric-light via-violet to-electric bg-clip-text text-transparent"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 max-w-xl text-lg leading-8 text-mist"
        >
          ساخت وب‌سایت‌ها، اپلیکیشن‌ها، سیستم‌های اتوماسیون و راهکارهای
          دیجیتال بهینه — با معماری تمیز و توجه به جزئیات فنی.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/projects" variant="primary">
            مشاهده نمونه‌کارها
          </MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            تماس با من
          </MagneticButton>
        </motion.div>
      </Container>

      <motion.div
        className="absolute inset-x-0 bottom-10 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="text-mist/60" size={20} />
      </motion.div>
    </section>
  );
}

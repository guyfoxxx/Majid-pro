"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { label: "پروژه تکمیل‌شده", value: 40, suffix: "+" },
  { label: "فناوری استفاده‌شده", value: 22, suffix: "+" },
  { label: "سال در حال یادگیری", value: 6, suffix: "+" },
  { label: "راهکار ساخته‌شده", value: 30, suffix: "+" },
];

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-paper md:text-5xl">
        <span ref={ref}>{current}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-mist">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <Container>
        <SectionLabel>درباره من</SectionLabel>

        <div className="mt-8 grid gap-14 md:grid-cols-2 md:items-center">
          <FadeUp>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl2 border border-white/10 bg-gradient-to-br from-navy-light to-ink-800">
              <div className="absolute inset-0 bg-grid-glow opacity-70" />
              <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-ink/60 p-4 backdrop-blur-md">
                <p className="font-mono text-xs text-electric-light">
                  &lt;FullStackDeveloper /&gt;
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <h2 className="font-display text-3xl font-semibold text-paper md:text-4xl">
              دیدگاهی مهندسی برای مسائل واقعی
            </h2>
            <p className="mt-6 leading-8 text-mist">
              چند سال است در مسیر توسعه وب، اپلیکیشن‌های اندروید، اتوماسیون
              پایتون و مهندسی سئو فعالیت می‌کنم. رویکرد من ترکیب تفکر مهندسی
              با دقت در جزئیات طراحی است؛ هر پروژه را از زاویه معماری، عملکرد
              و تجربه کاربر بررسی می‌کنم.
            </p>
            <p className="mt-4 leading-8 text-mist">
              فلسفه توسعه من ساده است: کد تمیز، معماری مقیاس‌پذیر و راهکاری
              که واقعاً مسئله کسب‌وکار را حل کند — نه صرفاً یک محصول ظاهری.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <GlassCard className="mt-20 grid grid-cols-2 gap-8 p-8 md:grid-cols-4 md:p-12">
            {STATS.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}

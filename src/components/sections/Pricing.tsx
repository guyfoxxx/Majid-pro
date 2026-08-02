import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import pricingData from "@/data/pricing.json";
import type { PricingPlan } from "@/lib/types";

const plans = pricingData as PricingPlan[];

const emphasisStyles: Record<PricingPlan["emphasis"], string> = {
  low: "",
  medium: "border-electric-light/30",
  high: "border-violet-glow/50 shadow-glow-violet md:-translate-y-3",
  premium: "border-electric-light/40 bg-gradient-to-b from-electric/[0.06] to-violet/[0.06]",
};

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <Container>
        <SectionLabel>تعرفه‌ها</SectionLabel>
        <FadeUp>
          <h2 className="mt-4 font-display text-3xl font-semibold text-paper md:text-4xl">
            پلن مناسب خودتان را انتخاب کنید
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <FadeUp key={plan.id} delay={index * 0.08}>
              <GlassCard
                className={cn("flex h-full flex-col p-7", emphasisStyles[plan.emphasis])}
              >
                {plan.emphasis === "high" && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-gradient-to-l from-electric to-violet px-3 py-1 text-xs text-white">
                    محبوب‌ترین
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-paper">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-mist">{plan.tagline}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-mist">
                      <Check size={16} className="mt-0.5 shrink-0 text-electric-light" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href="/contact"
                  variant={plan.emphasis === "high" ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  شروع همکاری
                </MagneticButton>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

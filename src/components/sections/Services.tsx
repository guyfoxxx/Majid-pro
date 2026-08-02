"use client";

import * as Icons from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations/FadeUp";
import servicesData from "@/data/services.json";
import type { Service } from "@/lib/types";

const services = servicesData as Service[];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <Container>
        <SectionLabel>خدمات</SectionLabel>
        <FadeUp>
          <h2 className="mt-4 font-display text-3xl font-semibold text-paper md:text-4xl">
            خدماتی که ارائه می‌دهم
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              service.icon
            ] ?? Icons.Sparkles;

            return (
              <FadeUp key={service.id} delay={(index % 3) * 0.08}>
                <GlassCard className="group h-full p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-electric/20 to-violet/20 text-electric-light transition-transform duration-500 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-mist">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-mist/90"
                      >
                        <span className="h-1 w-1 rounded-full bg-electric-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

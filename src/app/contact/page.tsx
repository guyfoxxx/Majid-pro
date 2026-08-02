import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { ContactForm } from "@/components/sections/ContactForm";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "تماس با من | مجید فکرمند",
  description:
    "برای شروع همکاری در پروژه‌های وب، اپلیکیشن، اتوماسیون یا سئو با مجید فکرمند در تماس باشید.",
  path: "/contact",
});

const CONTACT_INFO = [
  { icon: Mail, label: "ایمیل", value: "hello@majidfekrmand.ir" },
  { icon: Phone, label: "تلفن", value: "+98 9xx xxx xxxx" },
  { icon: MapPin, label: "موقعیت", value: "ایران" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "خانه", path: "/" }, { name: "تماس با من", path: "/contact" }]} />
      <div className="pt-32 pb-28">
        <Container>
          <SectionLabel>تماس</SectionLabel>
          <FadeUp>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-paper md:text-5xl">
              بیایید درباره پروژه‌تان صحبت کنیم
            </h1>
            <p className="mt-5 max-w-xl leading-8 text-mist">
              فرم زیر را پر کنید یا مستقیماً از راه‌های ارتباطی زیر پیام
              بفرستید. معمولاً ظرف ۲۴ ساعت پاسخ می‌دهم.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr,1.4fr]">
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <GlassCard key={label} className="flex items-center gap-4 p-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-electric/20 to-violet/20 text-electric-light">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-mist">{label}</p>
                      <p dir="ltr" className="text-right text-sm text-paper">
                        {value}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <ContactForm />
            </FadeUp>
          </div>
        </Container>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "درباره من | مجید فکرمند",
  description:
    "آشنایی با مجید فکرمند، توسعه‌دهنده فول‌استک متخصص در وب، اندروید، پایتون و اتوماسیون.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "خانه", path: "/" }, { name: "درباره من", path: "/about" }]} />
      <div className="pt-24">
        <About />
        <Timeline />
        <CtaBanner />
      </div>
    </>
  );
}

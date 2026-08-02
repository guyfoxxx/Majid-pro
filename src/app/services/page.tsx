import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "خدمات | مجید فکرمند",
  description:
    "خدمات توسعه وب، اپلیکیشن اندروید، اتوماسیون پایتون، سئوی فنی و مشاوره معماری نرم‌افزار.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "خانه", path: "/" }, { name: "خدمات", path: "/services" }]} />
      <div className="pt-24">
        <Services />
        <Pricing />
        <CtaBanner />
      </div>
    </>
  );
}

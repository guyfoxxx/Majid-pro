import type { Metadata } from "next";

export const SITE_URL = "https://majidfekrmand.ir";
export const SITE_NAME = "مجید فکرمند | Full Stack Developer";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

/**
 * تولید متادیتای یکسان و کامل برای هر صفحه: Title, Description, Keywords,
 * Open Graph, Twitter Card و Canonical URL
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/assets/og/default.jpg",
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      "برنامه نویس حرفه ای",
      "طراحی سایت",
      "طراحی اپلیکیشن",
      "برنامه نویس پایتون",
      "طراحی سایت با نکست جی اس",
      "سئو سایت",
      "بهینه سازی سایت",
      "Full Stack Developer",
      "Next.js Developer",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fa_IR",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

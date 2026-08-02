import type { Metadata } from "next";
import { Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/sections/AmbientBackground";
import { PersonJsonLd, WebsiteJsonLd, SoftwareApplicationJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata, SITE_URL } from "@/lib/seo";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-display",
  display: "swap",
});

const vazirmatnBody = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "مجید فکرمند | Full Stack Developer",
    description:
      "توسعه‌دهنده حرفه‌ای متخصص در ساخت وب‌سایت‌ها، اپلیکیشن‌های مدرن، اتوماسیون و راهکارهای بهینه‌شده برای سئو.",
    path: "/",
  }),
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/favicon.svg",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${vazirmatnBody.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">
        <PersonJsonLd />
        <WebsiteJsonLd />
        <SoftwareApplicationJsonLd />
        <AmbientBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

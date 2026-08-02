import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "وبلاگ | مجید فکرمند",
  description:
    "یادداشت‌های فنی درباره Next.js، TypeScript، پایتون، اندروید، سئو، عملکرد و معماری نرم‌افزار.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "خانه", path: "/" }, { name: "وبلاگ", path: "/blog" }]} />
      <div className="pt-32">
        <Container>
          <SectionLabel>وبلاگ</SectionLabel>
          <FadeUp>
            <h1 className="mt-4 font-display text-4xl font-semibold text-paper md:text-5xl">
              یادداشت‌های فنی
            </h1>
          </FadeUp>

          <div className="mt-14 grid gap-6 pb-28 md:grid-cols-2 lg:grid-cols-3">
            {posts.length === 0 && (
              <p className="text-mist">هنوز مقاله‌ای منتشر نشده است.</p>
            )}
            {posts.map((post, index) => (
              <FadeUp key={post.slug} delay={(index % 3) * 0.08}>
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="h-full p-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-electric-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-4 font-display text-lg font-semibold text-paper">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-mist">
                      {post.description}
                    </p>
                    <p className="mt-4 text-xs text-mist/70">
                      {post.readingTime} · {new Date(post.publishedAt).toLocaleDateString("fa-IR")}
                    </p>
                  </GlassCard>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

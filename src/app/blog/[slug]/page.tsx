import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/animations/FadeUp";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.meta.title} | وبلاگ مجید فکرمند`,
    description: post.meta.description,
    path: `/blog/${post.meta.slug}`,
    keywords: post.meta.tags,
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "خانه", path: "/" },
          { name: "وبلاگ", path: "/blog" },
          { name: post.meta.title, path: `/blog/${post.meta.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.meta.title}
        description={post.meta.description}
        publishedAt={post.meta.publishedAt}
        path={`/blog/${post.meta.slug}`}
      />

      <div className="pt-32">
        <Container className="max-w-3xl">
          <SectionLabel>{post.meta.tags[0] ?? "وبلاگ"}</SectionLabel>
          <FadeUp>
            <h1 className="mt-4 font-display text-4xl font-semibold text-paper">
              {post.meta.title}
            </h1>
            <p className="mt-4 text-sm text-mist/70">
              {post.meta.readingTime} ·{" "}
              {new Date(post.meta.publishedAt).toLocaleDateString("fa-IR")}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <article className="prose prose-invert mt-12 max-w-none pb-28 leading-8 prose-headings:font-display prose-a:text-electric-light">
              <MDXRemote source={post.content} />
            </article>
          </FadeUp>
        </Container>

        <CtaBanner />
      </div>
    </>
  );
}

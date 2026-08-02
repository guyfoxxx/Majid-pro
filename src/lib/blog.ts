import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTimeFn from "reading-time";
import type { BlogPostMeta } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): {
  meta: BlogPostMeta;
  content: string;
} | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTimeFn(content, { wordsPerMinute: 180 });

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      coverImage: data.coverImage ?? "/assets/blog/default.jpg",
      tags: data.tags ?? [],
      readingTime: stats.text.replace("min read", "دقیقه مطالعه"),
      publishedAt: data.publishedAt,
    },
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug)?.meta)
    .filter((meta): meta is BlogPostMeta => Boolean(meta))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

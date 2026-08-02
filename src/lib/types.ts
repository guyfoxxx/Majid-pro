export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  process: string[];
  results: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export type PricingEmphasis = "low" | "medium" | "high" | "premium";

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  emphasis: PricingEmphasis;
  features: string[];
}

export interface SkillItem {
  name: string;
  level: "متوسط" | "پیشرفته";
  description: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  readingTime: string;
  publishedAt: string;
}

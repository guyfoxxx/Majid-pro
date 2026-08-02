import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd, CreativeWorkJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata } from "@/lib/seo";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";

const projects = projectsData as Project[];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.title} | نمونه‌کار مجید فکرمند`,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: project.technologies,
  });
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "خانه", path: "/" },
          { name: "نمونه‌کارها", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      />
      <CreativeWorkJsonLd
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
      />

      <div className="pt-32">
        <Container>
          {/* Hero */}
          <SectionLabel>{project.category}</SectionLabel>
          <FadeUp>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-paper md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl leading-8 text-mist">
              {project.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-mist"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Overview image placeholder */}
          <FadeUp delay={0.15}>
            <div className="relative mt-14 aspect-video overflow-hidden rounded-xl2 border border-white/10 bg-gradient-to-br from-navy-light to-ink-800">
              <div className="absolute inset-0 bg-grid-glow opacity-70" />
            </div>
          </FadeUp>

          {/* Problem / Solution */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <FadeUp>
              <GlassCard className="h-full p-8">
                <h2 className="font-display text-xl font-semibold text-paper">
                  مسئله
                </h2>
                <p className="mt-4 leading-7 text-mist">{project.problem}</p>
              </GlassCard>
            </FadeUp>
            <FadeUp delay={0.08}>
              <GlassCard className="h-full p-8">
                <h2 className="font-display text-xl font-semibold text-paper">
                  راهکار
                </h2>
                <p className="mt-4 leading-7 text-mist">{project.solution}</p>
              </GlassCard>
            </FadeUp>
          </div>

          {/* Features */}
          <FadeUp delay={0.1}>
            <div className="mt-16">
              <h2 className="font-display text-xl font-semibold text-paper">
                ویژگی‌ها
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-mist"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-electric-light" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Process */}
          <FadeUp delay={0.12}>
            <div className="mt-16">
              <h2 className="font-display text-xl font-semibold text-paper">
                فرایند توسعه
              </h2>
              <ol className="mt-6 flex flex-col gap-4">
                {project.process.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-electric-light/40 font-mono text-xs text-electric-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-mist">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>

          {/* Results */}
          <FadeUp delay={0.14}>
            <GlassCard className="mt-16 mb-28 p-8">
              <h2 className="font-display text-xl font-semibold text-paper">
                نتایج
              </h2>
              <p className="mt-4 leading-7 text-mist">{project.results}</p>
            </GlassCard>
          </FadeUp>
        </Container>

        <CtaBanner />
      </div>
    </>
  );
}

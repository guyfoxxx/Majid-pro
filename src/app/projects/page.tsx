import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/animations/FadeUp";
import { ProjectCard3D } from "@/components/sections/ProjectCard3D";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/layout/JsonLd";
import { buildMetadata } from "@/lib/seo";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";

const projects = projectsData as Project[];

export const metadata: Metadata = buildMetadata({
  title: "نمونه‌کارها | مجید فکرمند",
  description:
    "مجموعه‌ای از پروژه‌های وب، اپلیکیشن اندروید، اتوماسیون و سئو انجام‌شده توسط مجید فکرمند.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "خانه", path: "/" }, { name: "نمونه‌کارها", path: "/projects" }]} />
      <div className="pt-32">
        <Container>
          <SectionLabel>نمونه‌کارها</SectionLabel>
          <FadeUp>
            <h1 className="mt-4 font-display text-4xl font-semibold text-paper md:text-5xl">
              همه پروژه‌ها
            </h1>
          </FadeUp>

          <div className="mt-14 grid gap-6 pb-28 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FadeUp key={project.slug} delay={(index % 3) * 0.08}>
                <ProjectCard3D project={project} />
              </FadeUp>
            ))}
          </div>
        </Container>
        <CtaBanner />
      </div>
    </>
  );
}

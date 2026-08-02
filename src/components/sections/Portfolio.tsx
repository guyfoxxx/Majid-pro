import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/animations/FadeUp";
import { ProjectCard3D } from "@/components/sections/ProjectCard3D";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";

const projects = projectsData as Project[];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>نمونه‌کارها</SectionLabel>
            <FadeUp>
              <h2 className="mt-4 font-display text-3xl font-semibold text-paper md:text-4xl">
                پروژه‌های منتخب
              </h2>
            </FadeUp>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-electric-light transition-colors hover:text-electric"
          >
            مشاهده همه پروژه‌ها
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.08}>
              <ProjectCard3D project={project} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

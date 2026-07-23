import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects & Code Reproductions",
  description:
    "Computational biology projects, machine learning pipelines, and paper reproductions.",
};

export default function ProjectsPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-wide text-secondary uppercase">
            Projects & Code Reproductions
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            Computational Notebooks & Tools
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A public record of my computational projects, open notebooks, and code reproductions exploring the intersection of algorithms and biological systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}

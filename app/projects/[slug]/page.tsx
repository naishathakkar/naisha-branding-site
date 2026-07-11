import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FlaskConical } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { projects, type ProjectLink } from "@/lib/projects";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

function ProjectSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-medium text-foreground">
        {label}
      </h2>
      <p className="text-lg leading-relaxed text-foreground/90">{children}</p>
    </section>
  );
}

function LinkList({ title, items }: { title: string; items: ProjectLink[] }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-medium text-foreground">
        {title}
      </h2>
      <ul className="space-y-2 text-sm">
        {items.map((item) =>
          item.url ? (
            <li key={item.label}>
              <a
                href={item.url}
                className="text-primary underline underline-offset-2"
              >
                {item.label}
              </a>
            </li>
          ) : (
            <li key={item.label} className="text-muted-foreground">
              {item.label}
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default function ProjectPage({ params }: PageProps) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <main className="py-16 lg:py-20">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Projects
        </Link>

        <header className="mx-auto max-w-3xl space-y-6 py-10 text-center">
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground lg:text-5xl">
            {project.title}
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="muted">
                {skill}
              </Badge>
            ))}
          </div>
        </header>

        <div className="mx-auto mb-16 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl border border-border bg-muted">
          <div className="flex h-full w-full items-center justify-center p-8 text-center">
            <div>
              <FlaskConical
                className="mx-auto h-8 w-8 text-muted-foreground/40"
                aria-hidden="true"
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Project image goes here. Drop one into{" "}
                <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs">
                  /public
                </code>{" "}
                and swap this placeholder for a{" "}
                <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs">
                  next/image
                </code>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-10">
          <ProjectSection label="Overview">{project.overview}</ProjectSection>
          <ProjectSection label="The Problem">{project.problem}</ProjectSection>
          <ProjectSection label="Methodology">
            {project.methodology}
          </ProjectSection>
          <ProjectSection label="Results">{project.results}</ProjectSection>
          <ProjectSection label="Future Directions">
            {project.futureDirections}
          </ProjectSection>

          {project.publications && project.publications.length > 0 && (
            <LinkList title="Publications" items={project.publications} />
          )}

          {project.resources && project.resources.length > 0 && (
            <LinkList title="Resources" items={project.resources} />
          )}
        </div>

        <nav className="mx-auto mt-20 grid max-w-5xl gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group rounded-2xl border border-border p-6 transition-colors hover:border-primary/40"
            >
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Previous
              </p>
              <p className="mt-2 font-display text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                {previous.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-2xl border border-border p-6 text-right transition-colors hover:border-primary/40"
            >
              <p className="flex items-center justify-end gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Next
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </p>
              <p className="mt-2 font-display text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </Container>
    </main>
  );
}

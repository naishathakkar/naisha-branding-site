import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ExplainerBody } from "@/components/explained/explainer-body";
import { topics } from "@/lib/topics";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const topic = topics.find((t) => t.slug === params.slug);
  if (!topic) return {};
  return {
    title: topic.title,
    description: topic.summary,
  };
}

export default function TopicPage({ params }: PageProps) {
  const index = topics.findIndex((t) => t.slug === params.slug);
  const topic = topics[index];

  if (!topic) {
    notFound();
  }

  const previous = index > 0 ? topics[index - 1] : null;
  const next = index < topics.length - 1 ? topics[index + 1] : null;

  return (
    <main className="py-16 lg:py-20">
      <Container>
        <Link
          href="/healthcare-explained"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Healthcare Explained
        </Link>

        <header className="mx-auto max-w-3xl space-y-6 py-10 text-center">
          <p className="text-sm text-muted-foreground">{topic.readingTime}</p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground lg:text-5xl">
            {topic.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {topic.summary}
          </p>
        </header>

        <div className="mx-auto mb-16 aspect-[21/9] max-w-4xl overflow-hidden rounded-3xl border border-border bg-accent/30">
          <div className="flex h-full w-full items-center justify-center p-8 text-center">
            <div>
              <Layers
                className="mx-auto h-8 w-8 text-foreground/40"
                aria-hidden="true"
              />
              <p className="mt-3 text-sm text-foreground/60">
                Infographic or illustration goes here. Drop one into{" "}
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

        <div className="mx-auto max-w-3xl">
          <ExplainerBody blocks={topic.blocks} />
        </div>

        <nav className="mx-auto mt-20 grid max-w-5xl gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/healthcare-explained/${previous.slug}`}
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
              href={`/healthcare-explained/${next.slug}`}
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

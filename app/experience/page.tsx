import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Research, internships, leadership, conferences, teaching, and volunteering.",
};

export default function ExperiencePage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-wide text-secondary">
            Experience
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            A quick scan of where I've spent my time.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Research, internships, leadership, conferences, teaching, and
            volunteering — roughly in the order they happened.
          </p>
        </div>

        <ol className="mx-auto max-w-3xl">
          {experience.map((item, i) => (
            <li key={item.id} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {i < experience.length - 1 && (
                  <span
                    className="mt-1 w-px flex-1 bg-border"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {item.dateRange}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-medium text-foreground">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {item.organization}
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground/90">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </main>
  );
}

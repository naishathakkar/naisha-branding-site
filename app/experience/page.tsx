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
        <div className="rounded-2xl border border-border bg-muted/30 p-8 text-center max-w-xl mx-auto mt-8">
          <p className="text-muted-foreground leading-relaxed">
            Currently focusing on my pharmacy studies, academic research, and science communication. 
            Check back soon for updates as I begin updating my professional journey!
          </p>
        </div>
      </Container>
    </main>
  );
}

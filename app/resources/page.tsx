import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ResourcesView } from "@/components/resources/resources-view";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Books, research papers, tools, and references worth your time.",
};

export default function ResourcesPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-wide text-secondary">
            Resources
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            Worth your time, organized.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Books, papers, tools, and references I keep coming back to — the
            ones that actually earned a place here.
          </p>
        </div>

        <ResourcesView resources={resources} />
      </Container>
    </main>
  );
}

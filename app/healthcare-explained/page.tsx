import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { TopicCard } from "@/components/explained/topic-card";
import { topics } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Healthcare Explained",
  description:
    "Complex healthcare topics explained visually — comparison tables, timelines, and quick-reference cards.",
};

export default function HealthcareExplainedPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-wide text-secondary">
            Healthcare Explained
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            Science, broken down visually.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The same explainers I share on Instagram, with more room to go
            deeper — comparison tables, timelines, and quick-reference cards
            instead of walls of text.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </Container>
    </main>
  );
}

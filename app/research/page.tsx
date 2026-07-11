import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { LibraryView } from "@/components/research/library-view";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Research Library",
  description:
    "Evidence-based writing on pharmacy, biotechnology, artificial intelligence, and public health.",
};

export default function ResearchLibraryPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-wide text-secondary">
            Research Library
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            A digital magazine for the science of medicine.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Evidence-based articles on pharmacy, biotechnology, artificial
            intelligence, and public health — written to make complex
            research actually readable.
          </p>
        </div>

        <LibraryView articles={articles} />
      </Container>
    </main>
  );
}

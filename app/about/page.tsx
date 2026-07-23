import type { Metadata } from "next";
import Link from "next/link";
import { User } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why pharmacy, what I'm curious about, and my journey into computational biology.",
};

const values = [
  {
    title: "Evidence first",
    text: "I'd rather change my mind because of a good study or quantitative benchmark than defend a position because I said it first.",
  },
  {
    title: "Simple, not simplified",
    text: "Making complex biological mechanisms or machine learning architectures accessible should never mean making them less accurate. If I can't explain something correctly in plain language, I don't understand it well enough yet.",
  },
  {
    title: "Curiosity, on purpose",
    text: "Some of this is genuine love of the subject. Some of it is just discipline — showing up to learn, write code, and keep asking questions even on the days I don't feel like it.",
  },
  {
    title: "Build in public",
    text: "I believe learning becomes more meaningful when it's documented. This website is my public notebook—a record of what I've learned, built, questioned, and occasionally misunderstood before figuring it out.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="mx-auto max-w-3xl space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card">
            <User
              className="h-8 w-8 text-muted-foreground/50"
              aria-hidden="true"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide text-secondary uppercase">
              About
            </p>
            <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              Hi, I'm Naisha.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a B.Pharm student at NMIMS exploring the intersection of pharmaceutical sciences, computational biology, and artificial intelligence. Through research analysis, programming, and computational projects, I'm building the skills needed to understand how computation can accelerate biological discovery and drug development.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-medium text-foreground">
            Why pharmacy & computation
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            I didn't grow up wanting to be a traditional pharmacist. I grew up asking a
            lot of "but why" questions that most people stopped answering
            after the second one. Pharmacy turned out to be the field where
            that habit is actually useful — every medication has a story
            about how it interacts with a specific receptor, enzyme, or pathway.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            I became fascinated by how modern biology increasingly relies on computation. Questions about protein structure, drug-target interactions, and molecular systems are now explored using programming, machine learning, and reproducible data analysis alongside experimental science.
          </p>
        </section>

        {/* Curiosity Section */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-medium text-foreground">
            Where my curiosity keeps landing
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            Right now, my curiosity is pulling me toward AI-driven drug discovery, computational biology, and reproducible research. I'm documenting that journey by learning Python, studying the computational methods behind published research, and gradually building the skills needed to work with tools such as Biopython, RDKit, and machine learning frameworks.
          </p>
        </section>

        {/* Where I'm Going Section */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-medium text-foreground">
            Where I'm Going
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            My long-term goal is to contribute to computational biology and AI-driven drug discovery by combining a foundation in pharmaceutical sciences with quantitative and computational methods. This website documents that journey—from learning Python and analyzing research papers to building increasingly sophisticated computational projects.
          </p>
        </section>

        {/* Values Section */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-medium text-foreground">
            What I try to hold onto
          </h2>
          <div className="space-y-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-l-2 border-primary py-1 pl-6"
              >
                <h3 className="font-display text-lg font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-foreground/90">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Quote & Buttons */}
        <div className="space-y-8 border-t border-border pt-10">
          <p className="text-center font-display text-lg italic text-muted-foreground sm:text-left">
            "This isn't a portfolio of everything I already know. It's a record of how I'm learning to think like a computational biologist."
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/projects">View Computational Projects</Button>
            <Button href="/contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

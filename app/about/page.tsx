import type { Metadata } from "next";
import Link from "next/link";
import { User } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why pharmacy, what I'm curious about, and what I try to hold onto.",
};

const values = [
  {
    title: "Evidence first",
    text: "I'd rather change my mind because of a good study than defend a position because I said it first.",
  },
  {
    title: "Simple, not simplified",
    text: "Making a topic accessible should never mean making it less accurate. If I can't explain something correctly in plain language, I don't understand it well enough yet.",
  },
  {
    title: "Curiosity, on purpose",
    text: "Some of this is genuine love of the subject. Some of it is just discipline — showing up to read the paper even on the days I don't feel like it.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="mx-auto max-w-3xl space-y-16">
        <div className="space-y-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card">
            <User
              className="h-8 w-8 text-muted-foreground/50"
              aria-hidden="true"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide text-secondary">
              About
            </p>
            <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              Hi, I'm Naisha.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a pharmacy student who got interested in medicine for a
              fairly unglamorous reason: I wanted to know why a drug works,
              not just that it does. That question turned into a habit of
              reading primary research for fun, and eventually into this
              website.
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-medium text-foreground">
            Why pharmacy
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            I didn't grow up wanting to be a pharmacist. I grew up asking a
            lot of "but why" questions that most people stopped answering
            after the second one. Pharmacy turned out to be the field where
            that habit is actually useful — every medication has a story
            about how it interacts with a specific receptor, a specific
            enzyme, a specific version of a disease, and almost none of that
            story gets explained to the person actually taking the pill.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            That gap, between what's known and what's actually communicated,
            is what pulled me in. I wanted to be on the side of medicine
            that understands the mechanism well enough to explain it simply.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-medium text-foreground">
            Where my curiosity keeps landing
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            Lately that curiosity keeps landing in the same few places: how
            AI is starting to catch drug interactions earlier than humans
            do, how platforms like mRNA are being repurposed for diseases
            far outside what they were originally built for, and how much
            of public health actually comes down to communication, not just
            discovery. I write about all of this in the{" "}
            <Link
              href="/research"
              className="text-primary underline underline-offset-2"
            >
              Research Library
            </Link>
            , mostly because writing something down is the fastest way
            I've found to figure out if I actually understand it.
          </p>
        </section>

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

        <div className="flex flex-wrap gap-4 border-t border-border pt-10">
          <Button href="/research">Read the Research Library</Button>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </Container>
    </main>
  );
}

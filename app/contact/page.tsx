import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for research collaboration, speaking, or just to talk about healthcare and science.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-[70vh] items-center py-16 lg:py-24">
      <Container className="mx-auto max-w-2xl space-y-10 text-center">
        <div className="space-y-4">
          <p className="text-sm font-medium tracking-wide text-secondary">
            Contact
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            I'd love to hear from you.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether you're a recruiter, a professor, a fellow researcher, or
            just someone who read an article and wants to talk about it —
            reach out. I read every message myself.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button href="mailto:naisha.thakkar@example.com" size="lg">
            <Mail className="h-4 w-4" aria-hidden="true" />
            naisha.thakkar@example.com
          </Button>
          <p className="text-sm text-muted-foreground">
            Usually replies within a few days.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 border-t border-border pt-10 text-sm">
          <Link
            href="/research"
            className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the Research Library
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            More about me
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </main>
  );
}

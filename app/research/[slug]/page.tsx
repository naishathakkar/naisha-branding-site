import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ArticleBody } from "@/components/research/article-body";
import { TableOfContents } from "@/components/research/table-of-contents";
import { articles } from "@/lib/articles";
import { articleContent, type ContentBlock } from "@/lib/article-content";

interface PageProps {
  params: { slug: string };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
  };
}

function ComingSoonNotice({ summary }: { summary: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border p-8 text-center">
      <p className="text-lg leading-relaxed text-muted-foreground">
        {summary} The full write-up for this article is coming soon.
      </p>
    </div>
  );
}

function ReferencesSection({
  references,
}: {
  references: { text: string; doi?: string; url?: string }[];
}) {
  if (references.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-10">
      <h2 className="font-display text-xl font-medium text-foreground">
        References
      </h2>
      <ol className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {references.map((ref, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-muted-foreground/60">{i + 1}.</span>
            <span>
              {ref.text}
              {ref.doi && (
                <>
                  {" "}
                  <a
                    href={`https://doi.org/${ref.doi}`}
                    className="text-primary underline underline-offset-2"
                  >
                    DOI: {ref.doi}
                  </a>
                </>
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function ArticlePage({ params }: PageProps) {
  const index = articles.findIndex((a) => a.slug === params.slug);
  const article = articles[index];

  if (!article) {
    notFound();
  }

  const previous = index > 0 ? articles[index - 1] : null;
  const next = index < articles.length - 1 ? articles[index + 1] : null;
  const data = articleContent[article.slug];
  const headings = (data?.content ?? []).filter(
    (block): block is Extract<ContentBlock, { type: "heading" }> =>
      block.type === "heading"
  );

  return (
    <main className="py-16 lg:py-20">
      <Container>
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Research Library
        </Link>

        <header className="mx-auto max-w-3xl space-y-6 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <Badge variant="outline">{article.category}</Badge>
            <span>{formatDate(article.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground lg:text-5xl">
            {article.title}
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {article.summary}
          </p>
        </header>

        <div className="mx-auto mb-16 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl border border-border bg-muted">
          <div className="flex h-full w-full items-center justify-center p-8 text-center">
            <div>
              <FileText
                className="mx-auto h-8 w-8 text-muted-foreground/40"
                aria-hidden="true"
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Cover image goes here. Drop one into{" "}
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

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_240px]">
          <article className="min-w-0">
            {data ? (
              <ArticleBody blocks={data.content} />
            ) : (
              <ComingSoonNotice summary={article.summary} />
            )}

            {data?.references && (
              <ReferencesSection references={data.references} />
            )}
          </article>

          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
        </div>

        <nav className="mx-auto mt-20 grid max-w-5xl gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/research/${previous.slug}`}
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
              href={`/research/${next.slug}`}
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

import Link from "next/link";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/articles";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-muted">
        <FileText
          className="h-6 w-6 text-muted-foreground/50"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <Badge variant="outline" className="w-fit">
          {article.category}
        </Badge>

        <h3 className="font-display text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
          {article.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {article.summary}
        </p>

        <p className="mt-auto pt-2 text-xs text-muted-foreground">
          {formatDate(article.publishedAt)} · {article.readingTime}
        </p>
      </div>
    </Link>
  );
}

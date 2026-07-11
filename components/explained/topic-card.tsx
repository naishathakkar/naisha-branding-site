import Link from "next/link";
import { Layers } from "lucide-react";
import type { Topic } from "@/lib/topics";

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/healthcare-explained/${topic.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-accent/30">
        <Layers
          className="h-6 w-6 text-foreground/40"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
          {topic.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {topic.summary}
        </p>

        <p className="mt-auto pt-2 text-xs text-muted-foreground">
          {topic.readingTime}
        </p>
      </div>
    </Link>
  );
}

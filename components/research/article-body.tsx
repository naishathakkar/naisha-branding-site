import { cn } from "@/lib/utils";
import type { ContentBlock } from "@/lib/article-content";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const Tag = block.level === 2 ? "h2" : "h3";
            return (
              <Tag
                key={block.id}
                id={block.id}
                className={cn(
                  "scroll-mt-28 font-display font-medium tracking-tight text-foreground",
                  block.level === 2
                    ? "pt-4 text-2xl lg:text-3xl"
                    : "pt-2 text-xl"
                )}
              >
                {block.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p
                key={i}
                className="text-lg leading-relaxed text-foreground/90"
              >
                {block.text}
              </p>
            );
          case "pullquote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-2 border-primary py-1 pl-6 font-display text-2xl italic leading-snug text-foreground lg:text-3xl"
              >
                {block.text}
              </blockquote>
            );
          case "callout":
            return (
              <div
                key={i}
                className="rounded-2xl border border-accent bg-accent/20 p-6"
              >
                {block.title && (
                  <p className="mb-2 text-sm font-semibold tracking-wide text-foreground">
                    {block.title}
                  </p>
                )}
                <p className="text-base leading-relaxed text-foreground/90">
                  {block.text}
                </p>
              </div>
            );
          case "list":
            return (
              <ul
                key={i}
                className="list-disc space-y-2 pl-5 text-lg leading-relaxed text-foreground/90"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

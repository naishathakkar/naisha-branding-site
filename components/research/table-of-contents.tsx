import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-28 space-y-3">
      <p className="text-sm font-medium text-foreground">On this page</p>
      <ul className="space-y-2 border-l border-border text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "-ml-px block border-l-2 border-transparent py-0.5 pl-4 text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
                heading.level === 3 && "pl-7 text-xs"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

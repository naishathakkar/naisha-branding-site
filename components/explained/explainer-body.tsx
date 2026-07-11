import { cn } from "@/lib/utils";
import type { ExplainerBlock } from "@/lib/topics";

export function ExplainerBody({ blocks }: { blocks: ExplainerBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className="text-lg leading-relaxed text-foreground/90"
              >
                {block.text}
              </p>
            );

          case "stats":
            return (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3"
              >
                {block.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="font-display text-3xl font-medium text-primary">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            );

          case "comparison":
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        <th className="p-4" scope="col" />
                        {block.columns.map((col) => (
                          <th
                            key={col}
                            scope="col"
                            className="p-4 font-display text-base font-medium text-foreground"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rIdx) => (
                        <tr
                          key={row.label}
                          className={cn(
                            "border-b border-border last:border-b-0",
                            rIdx % 2 === 1 && "bg-muted/40"
                          )}
                        >
                          <th
                            scope="row"
                            className="border-r border-border p-4 text-left font-medium text-foreground"
                          >
                            {row.label}
                          </th>
                          {row.values.map((value, vIdx) => (
                            <td
                              key={vIdx}
                              className="p-4 text-muted-foreground"
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

          case "timeline":
            return (
              <ol key={i} className="space-y-8">
                {block.items.map((item, itemIdx) => (
                  <li key={item.label} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <span
                        className="h-3 w-3 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {itemIdx < block.items.length - 1 && (
                        <span
                          className="mt-1 w-px flex-1 bg-border"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-xs font-medium uppercase tracking-wide text-secondary">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base leading-relaxed text-foreground/90">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
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

          default:
            return null;
        }
      })}
    </div>
  );
}

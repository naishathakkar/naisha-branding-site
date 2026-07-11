"use client";

import * as React from "react";
import { ExternalLink, Search } from "lucide-react";
import {
  resourceCategories,
  type Resource,
  type ResourceCategory,
} from "@/lib/resources";
import { cn } from "@/lib/utils";

function ResourceRow({ resource }: { resource: Resource }) {
  const inner = (
    <>
      <div className="space-y-1.5">
        <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-foreground">
          {resource.category}
        </span>
        <h3 className="font-display text-lg font-medium text-foreground">
          {resource.title}
          {resource.author && (
            <span className="font-sans text-base font-normal text-muted-foreground">
              {" "}
              — {resource.author}
            </span>
          )}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {resource.description}
        </p>
      </div>
      {resource.url && (
        <ExternalLink
          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (resource.url) {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5">
      {inner}
    </div>
  );
}

export function ResourcesView({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<
    ResourceCategory | "All"
  >("All");

  const filtered = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.category === activeCategory;

    const q = query.trim().toLowerCase();
    const matchesQuery =
      q.length === 0 ||
      resource.title.toLowerCase().includes(q) ||
      resource.description.toLowerCase().includes(q) ||
      (resource.author?.toLowerCase().includes(q) ?? false);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <div className="relative max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources…"
            aria-label="Search resources"
            className="h-12 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === "All"
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {resourceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((resource) => (
            <ResourceRow key={resource.title} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center">
          <p className="text-muted-foreground">
            {query.trim() ? (
              <>
                No resources match “{query}”
                {activeCategory !== "All" ? ` in ${activeCategory}` : ""}.
              </>
            ) : (
              <>No resources in {activeCategory} yet — check back soon.</>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

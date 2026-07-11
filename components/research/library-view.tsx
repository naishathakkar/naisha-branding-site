"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/research/article-card";
import {
  categories,
  type Article,
  type ArticleCategory,
} from "@/lib/articles";
import { cn } from "@/lib/utils";

export function LibraryView({ articles }: { articles: Article[] }) {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<
    ArticleCategory | "All"
  >("All");

  const filtered = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const q = query.trim().toLowerCase();
    const matchesQuery =
      q.length === 0 ||
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.tags.some((tag) => tag.toLowerCase().includes(q));

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
            placeholder="Search articles, topics, tags…"
            aria-label="Search articles"
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
          {categories.map((category) => (
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center">
          <p className="text-muted-foreground">
            {query.trim() ? (
              <>
                No articles match “{query}”
                {activeCategory !== "All" ? ` in ${activeCategory}` : ""}.
              </>
            ) : (
              <>No articles in {activeCategory} yet — check back soon.</>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

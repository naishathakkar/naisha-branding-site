"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Nav() {
  const [researchOpen, setResearchOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Name */}
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          Naisha Thakkar
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>

          {/* Research Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResearchOpen(true)}
            onMouseLeave={() => setResearchOpen(false)}
          >
            <button
              onClick={() => setResearchOpen(!researchOpen)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Research
              <ChevronDown className="h-4 w-4" />
            </button>

            {researchOpen && (
              <div className="absolute left-0 top-full pt-2 w-56">
                <div className="rounded-xl border border-border bg-card p-2 shadow-lg ring-1 ring-black/5">
                  <Link
                    href="/research"
                    className="block rounded-lg px-3 py-2 text-sm text-card-foreground hover:bg-accent"
                  >
                    Research Library
                  </Link>
                  <Link
                    href="/research/molecules-and-models"
                    className="block rounded-lg px-3 py-2 text-sm text-card-foreground hover:bg-accent"
                  >
                    Molecules & Models
                  </Link>
                  <Link
                    href="/research/questions"
                    className="block rounded-lg px-3 py-2 text-sm text-card-foreground hover:bg-accent"
                  >
                    Research Questions
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
              <ChevronDown className="h-4 w-4" />
            </button>

            {projectsOpen && (
              <div className="absolute left-0 top-full pt-2 w-56">
                <div className="rounded-xl border border-border bg-card p-2 shadow-lg ring-1 ring-black/5">
                  <Link
                    href="/projects/reproductions"
                    className="block rounded-lg px-3 py-2 text-sm text-card-foreground hover:bg-accent"
                  >
                    Code Reproductions
                  </Link>
                  <Link
                    href="/projects/python-journal"
                    className="block rounded-lg px-3 py-2 text-sm text-card-foreground hover:bg-accent"
                  >
                    Python Learning Journal
                  </Link>
                  <Link
                    href="/projects"
                    className="block rounded-lg px-3 py-2 text-sm text-card-foreground hover:bg-accent"
                  >
                    Computational Projects
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/resources"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Toolkit
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Contact Button */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact
          </Link>
        </div>

      </div>
    </header>
  );
}

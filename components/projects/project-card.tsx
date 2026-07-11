import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-muted">
        <FlaskConical
          className="h-6 w-6 text-muted-foreground/50"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="muted">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

"use client";

import { ExternalLink } from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";
import type { Project } from "./projects.config";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = project.link.length > 0;

  return (
    <div className="glass glow-border rounded-xl p-6 hover:border-primary/40 transition space-y-4">
      <ProjectCarousel images={project.images} alt={project.name} />

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-foreground">{project.name}</h3>
          <span className="px-2.5 py-1 rounded-full bg-secondary/60 text-xs font-medium text-muted-foreground whitespace-nowrap">
            {project.role}
          </span>
        </div>

        <p className="text-sm text-foreground/70">{project.description}</p>

        {project.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary/60 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {hasLink ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            {project.linkLabel ?? "View project"}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center text-sm text-muted-foreground/80 font-medium">
            {project.linkLabel ?? "Internal Tool — Private"}
          </span>
        )}
      </div>
    </div>
  );
}

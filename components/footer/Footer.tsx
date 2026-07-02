"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm text-foreground font-medium">
          Built by Megat Amirul
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/megat-amirul-412234334"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/azlanmgthzq-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub profile"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <span className="text-sm text-muted-foreground">
          Last Updated July 2026
        </span>
      </div>
    </footer>
  );
}

"use client";

import { Cpu, Layers, Shield, Plane } from "lucide-react";

type HeroTextProps = {
  side: "left" | "right";
};

export default function HeroText({ side }: HeroTextProps) {
  if (side === "left") {
    return (
      <div className="hidden lg:block text-right space-y-4">
        <div className="inline-flex items-center justify-end gap-2 text-muted-foreground text-sm">
          <Cpu className="w-4 h-4 text-primary" />
          <span>Frontend Developer</span>
        </div>

        <p className="text-foreground/80 text-lg leading-relaxed">
          Crafting intuitive interfaces for complex aviation systems
        </p>

        <div className="flex items-center justify-end gap-2 text-muted-foreground text-sm">
          <Shield className="w-4 h-4 text-accent" />
          <span>Compliance-aware design</span>
        </div>
      </div>
    );
  }

  // right side
  return (
    <div className="hidden lg:block space-y-4">
      <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
        <Layers className="w-4 h-4 text-primary" />
        <span>UI/UX Designer</span>
      </div>

      <p className="text-foreground/80 text-lg leading-relaxed">
        Turning operational requirements into elegant user experiences
      </p>

      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Plane className="w-4 h-4 text-accent" />
        <span>Software Engineer in Aviation</span>
      </div>
    </div>
  );
}

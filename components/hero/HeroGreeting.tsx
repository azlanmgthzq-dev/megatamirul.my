"use client";

import { Cpu, Layers, Shield, Plane } from "lucide-react";

const traits = [
  { icon: Cpu, label: "Full-Stack Developer", color: "text-primary" },
  { icon: Shield, label: "Compliance-aware design", color: "text-accent" },
  { icon: Layers, label: "UI/UX Designer", color: "text-primary" },
  { icon: Plane, label: "Background in aerospace & defence systems", color: "text-accent" },
];

export default function HeroGreeting() {
  return (
    <div className="space-y-6 text-center lg:text-left ">
      <div>
        <h1 className="font-[family-name:var(--font-accent)] italic bold text-4xl md:text-5xl tracking-wide">
          Hello, Welcome to my portfolio!
        </h1>
        
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 justify-items-center lg:justify-items-start">
        {traits.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="inline-flex items-center gap-2 text-muted-foreground text-sm"
          >
            <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

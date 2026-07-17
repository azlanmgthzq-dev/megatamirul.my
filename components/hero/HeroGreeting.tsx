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
    <div className="glass glow-border rounded-2xl p-6 md:p-8 space-y-6 text-center lg:text-left">
      <div>
        <h1 className="font-display text-4xl md:text-5xl tracking-wide">
          Hello, Welcome to my portfolio!
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
        {traits.map(({ icon: Icon, label, color }, index) => (
          <div
            key={label}
            className="glass glow-border rounded-2xl p-4 md:p-6 border border-white/10 flex items-center gap-2 text-muted-foreground text-sm"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

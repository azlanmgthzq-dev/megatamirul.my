"use client";

import Image from "next/image";

type TechStackIconProps = {
  iconSrc: string;
  language: string;
};

export default function TechStackIcon({ iconSrc, language }: TechStackIconProps) {
  return (
    <div className="group p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl border border-border/50 hover:border-primary/50 relative overflow-visible">
      {/* Gradient glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 -z-10"></div>
      
      <div className="relative z-10">
        <Image
          src={iconSrc}
          alt={`${language} icon`}
          width={80}
          height={80}
          className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 group-hover:scale-110"
          unoptimized
        />
      </div>
      
      <span className="text-muted-foreground font-semibold text-sm md:text-base tracking-wide group-hover:text-foreground transition-colors duration-300 relative z-10">
        {language}
      </span>
    </div>
  );
}

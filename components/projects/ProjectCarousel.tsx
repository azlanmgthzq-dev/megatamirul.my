"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

type ProjectCarouselProps = {
  images: string[];
  alt: string;
};

const AUTO_ADVANCE_MS = 4000;

export default function ProjectCarousel({ images, alt }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [images.length, activeIndex]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-video rounded-lg bg-secondary/30 border border-border/50 flex flex-col items-center justify-center gap-2">
        <ImageOff className="w-6 h-6 text-muted-foreground/50" />
        <span className="text-sm text-muted-foreground">Preview coming soon</span>
      </div>
    );
  }

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/30 border border-border/50 group">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} screenshot ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/70 border border-border/50 text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/70 border border-border/50 text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to screenshot ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex ? "w-4 bg-primary" : "w-1.5 bg-background/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

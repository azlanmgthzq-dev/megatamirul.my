"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "up" | "down";

export function useScrollDirection(initial: ScrollDirection = "down") {
  const [direction, setDirection] = useState<ScrollDirection>(initial);
  const lastYRef = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);
  const directionRef = useRef<ScrollDirection>(initial);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const nextDirection: ScrollDirection = currentY > lastYRef.current ? "down" : "up";

      if (nextDirection !== directionRef.current) {
        directionRef.current = nextDirection;
        setDirection(nextDirection);
      }

      lastYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}

"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";

const AUTO_ADVANCE_MS = 4000;

const photos = [
  { src: "/MyPicture/MyPic1.jpeg", alt: "Megat Amirul Haziq", position: "object-center" },
  { src: "/MyPicture/MyPic2.jpeg", alt: "Megat Amirul Haziq", position: "object-center" },
];

function subscribeToNothing() {
  return () => {};
}

function getWindowWidth() {
  return window.innerWidth;
}

function getWindowHeight() {
  return window.innerHeight;
}

function getServerViewportValue() {
  return 0;
}

export default function HeroPhotoCarousel() {
  const { x, y } = useMousePosition();
  // Read window dimensions only after mount, without setState-in-effect.
  const viewportWidth = useSyncExternalStore(subscribeToNothing, getWindowWidth, getServerViewportValue);
  const viewportHeight = useSyncExternalStore(subscribeToNothing, getWindowHeight, getServerViewportValue);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  // Guard before viewport is ready
  if (!viewportWidth || !viewportHeight) {
    return null;
  }

  // Map cursor position → subtle rotation
  const rotateX = ((y - viewportHeight / 2) / viewportHeight) * -10;
  const rotateY = ((x - viewportWidth / 2) / viewportWidth) * 10;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex justify-center perspective w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 rounded-2xl blur-2xl scale-110" />

        <motion.div
          style={{ rotateX, rotateY }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full aspect-[4/3] rounded-2xl border-4 border-primary/20 shadow-2xl overflow-hidden"
        >
          <AnimatePresence>
            {photos.map(
              (photo, index) =>
                index === activeIndex && (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className={`object-cover ${photo.position}`}
                      priority={index === 0}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex items-center gap-1.5">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to photo ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex ? "w-4 bg-primary" : "w-1.5 bg-background/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

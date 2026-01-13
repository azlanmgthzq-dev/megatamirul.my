"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";

export default function Avatar3D() {
  const { x, y } = useMousePosition();
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  // Read window ONLY after mount
  useEffect(() => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Guard before viewport is ready
  if (!viewport.width || !viewport.height) {
    return null;
  }

  // Map cursor position → subtle rotation
  const rotateX = ((y - viewport.height / 2) / viewport.height) * -10;
  const rotateY = ((x - viewport.width / 2) / viewport.width) * 10;

  return (
    <div className="relative flex justify-center perspective">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 rounded-full blur-2xl scale-110" />

      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/avatar.png"
          alt="Developer Avatar"
          width={300}
          height={300}
          className="rounded-full object-cover border-4 border-primary/20 shadow-2xl"
          priority
        />
      </motion.div>
    </div>
  );
}

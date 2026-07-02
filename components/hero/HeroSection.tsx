"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Avatar3D from "./Avatar3D";
import HeroText from "./HeroText";
import TypewriterText from "./TypewritterText";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-24 lg:pt-32 flex items-center justify-center relative overflow-hidden noise">

      <div className="max-w-6xl mx-auto px-6 pb-12 relative z-10">
        {/* One parent motion container orchestrates children to avoid flash */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Top grid: left text – avatar – right text */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <HeroText side="left" />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <Avatar3D />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <HeroText side="right" />
            </motion.div>
          </div>

          {/* Main headline */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="text-center mt-16 lg:mt-20"
          >
            <h1 className="font-display text-5xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building{" "}
              <span className="text-gradient">mission-critical</span>
              <br />
              interfaces with precision
            </h1>

            <TypewriterText
              delay={0.8}
              text="Full-stack developer passionate about building robust, scalable interfaces and systems that support real business and operational needs."
              />

          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}

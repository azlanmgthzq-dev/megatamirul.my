"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HeroPhotoCarousel from "./HeroPhotoCarousel";
import HeroGreeting from "./HeroGreeting";

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
          {/* Top grid: greeting – photo */}
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <HeroGreeting />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <HeroPhotoCarousel />
            </motion.div>
          </div>

          {/* Appreciation message */}
          {/* <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="mt-16 lg:mt-20"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Thanks for stopping by 
            </h1>

            <p className="text-foreground/80 text-lg leading-relaxed max-w-xl">
              I really appreciate you taking the time to explore my work. This site is where
              I share what I&apos;ve built and how I think about engineering — take a look around,
              and feel free to reach out if something catches your interest.
            </p>
          </motion.div> */}
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

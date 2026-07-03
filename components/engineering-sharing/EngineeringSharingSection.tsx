"use client";

import { motion, type Variants } from "framer-motion";
import EngineeringTabs from "./EngineeringTabs";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function EngineeringSharingSection() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden noise min-h-screen">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={blockVariants}
          className="mb-10"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Engineering Sharing
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Notes on how I think about building software, grounded in real
            problems I&apos;ve solved.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={blockVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <EngineeringTabs />
        </motion.div>
      </div>
    </section>
  );
}

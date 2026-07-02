"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const EMAIL = "azlan.mgthzq@gmail.com";
const RESUME_PATH = "/Resume_Megat_June26.pdf";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactSection() {
  const [isActive, setIsActive] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-muted/40 via-background to-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={blockVariants}
          viewport={{ amount: 0.3 }}
          onViewportEnter={() => scrollDirection === "down" && setIsActive(true)}
          onViewportLeave={() => scrollDirection === "up" && setIsActive(false)}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary text-4xl font-medium mb-3">Let&apos;s Connect</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to collaborate on your next project
          </h2>
          <p className="text-muted-foreground text-lg">
            I love building reliable, user-focused products. Drop me a line or grab my resume to see how I work.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          viewport={{ amount: 0.3 }}
          onViewportEnter={() => scrollDirection === "down" && setIsActive(true)}
          onViewportLeave={() => scrollDirection === "up" && setIsActive(false)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground shadow-lg transition hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            href={RESUME_PATH}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition border border-border/60"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

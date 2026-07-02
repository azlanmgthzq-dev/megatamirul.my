"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects.config";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProjectsSection() {
  const [isActive, setIsActive] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <section id="projects" className="py-16 relative overflow-hidden noise">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={blockVariants}
          viewport={{ amount: 0.3 }}
          onViewportEnter={() => scrollDirection === "down" && setIsActive(true)}
          onViewportLeave={() => scrollDirection === "up" && setIsActive(false)}
          className="mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of systems I&apos;ve built and contributed to, from
            internal dashboards to aviation MRO platforms.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={blockVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
          onViewportEnter={() => scrollDirection === "down" && setIsActive(true)}
          onViewportLeave={() => scrollDirection === "up" && setIsActive(false)}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

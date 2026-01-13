"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import ExperiencePanel from "./ExperiencePanel";
import ExperienceTabs from "./ExperienceTabs";
import { experienceTabs } from "./experience.config";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ExperienceSection() {
  const [isActive, setIsActive] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-background via-background to-muted/40"
    >
      <div className="max-w-6xl mx-auto px-6">
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
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Work across aviation software and early IT support - from
            mission-critical dashboards to hands-on tooling help.
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
        >
          <ExperienceTabs
            renderContent={(tabId) => {
              const tab = experienceTabs.find((item) => item.id === tabId);
              if (!tab) return null;

              return (
                <div className="space-y-6">
                  <ExperiencePanel data={tab} />

                  {tab.projects && (
                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold">
                        Key projects
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {tab.projects.map((project) => (
                          <div
                            key={project.name}
                            className="p-5 rounded-xl border border-border/60 bg-card/60 space-y-3"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="font-semibold text-foreground">
                                {project.name}
                              </h4>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                Project
                              </span>
                            </div>

                            <p className="text-sm text-foreground/70">
                              {project.description}
                            </p>

                            {tab.projects && project.contributions?.length ? (
                              <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/80">
                                {project.contributions.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}

                            {project.tags?.length ? (
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-secondary/60 text-xs font-medium text-muted-foreground"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tab.activities?.length ? (
                    <div className="space-y-3">
                      <h3 className="font-display text-lg font-semibold">
                        Activities
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/80">
                        {tab.activities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {tab.tools?.length ? (
                    <div className="space-y-3">
                      <h3 className="font-display text-lg font-semibold">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {tab.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 rounded-lg bg-secondary/50 text-xs font-medium text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import AboutTabs from "./AboutTabs";
import CertificationModal from "./CertificationModal";
import TechStackIcon from "./TechStackIcon";
import { AboutTabId } from "./tabs.config";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isActive, setIsActive] = useState(false);
  const scrollDirection = useScrollDirection();

  // Close modal when user switches to another tab
  const handleTabChange = (tab: AboutTabId) => {
    if (tab !== "certifications" && modalOpen) {
      setModalOpen(false);
    }
  };

  return (
    <section
      id="about"
      className="py-16 relative overflow-hidden noise"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={blockVariants}
          viewport={{ amount: 0.3 }}
          onViewportEnter={() => setIsActive(true)}
          onViewportLeave={() => scrollDirection === "up" && setIsActive(false)}
          className="mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Hi, I&apos;m Megat Amirul - a 24-year-old from Selangor, passionate about combining technical precision with system-oriented design.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={blockVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
          onViewportEnter={() => setIsActive(true)}
          onViewportLeave={() => scrollDirection === "up" && setIsActive(false)}
        >
          <AboutTabs
            onTabChange={handleTabChange}
            renderContent={(tab) => {
              switch (tab) {
                case "background":
                  return (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-foreground/80 leading-relaxed">
                          Frontend developer and UI/UX designer with hands-on experience building interfaces for aviation software systems. I&apos;ve worked across the full development lifecycle - from understanding requirements to shipping production-ready code.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          My work includes asset tracking systems (RFID), task card digitalization, fleet management dashboards, and engine health monitoring interfaces. I understand the constraints of aviation software: strict compliance requirements, zero tolerance for ambiguity, and users who need information fast.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                          <Layers className="w-5 h-5 text-primary" />
                          System Thinking
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Web performance optimization (static vs dynamic rendering)",
                            "Maintainability through clean, documented code",
                            "Scalable UI architecture and component design",
                            "Security fundamentals in frontend contexts",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-foreground/80">
                              <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          How I Work
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {["Curious", "Detail-oriented", "Collaborative", "Systematic", "Adaptable"].map((trait) => (
                            <span
                              key={trait}
                              className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );

                case "education":
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display text-xl font-semibold">Formal Education</h3>
                      </div>

                      <div className="space-y-6">
                        <div className="p-5 rounded-xl bg-secondary/30 border border-border/50">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="font-medium text-foreground">Bachelor Of Computer Science (Intelligence Systems)j</h4>
                            <span className="text-sm font-mono text-primary whitespace-nowrap">2021 - 2024</span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">National Defence University of Malaysia - Kuala Lumpur, Malaysia</p>
                          <p className="text-foreground/70 text-sm">
                            Focused on software engineering fundamentals, human-computer interaction & system design.
                            Coursework included web development, database systems,cyber security,user interface design and knowledgebase.
                          </p>
                        </div>

                        <div className="p-5 rounded-xl bg-secondary/30 border border-border/50">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="font-medium text-foreground">Relevant Coursework</h4>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {["Data Structures", "Algorithms", "Web Development", "HCI", "Database Systems", "Software Engineering", "UI/UX Design", "System Analysis"].map((course) => (
                              <span key={course} className="px-3 py-3 text-xs font-mono bg-card rounded text-muted-foreground">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );

                case "certifications":
                  return (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "Safe Management System Training",
                            issuer: "Global Turbine Asia",
                            year: "2025",
                            description:
                              "Aviation workflows, compliance awareness, system safety, and operational procedures.",
                            image: "/certificates/SMSCERT.jpeg",
                          },
                          {
                              title: "Bachelor Certification",
                              issuer: "Academia UPNM",
                              year: "2021 - 2024",
                              description:
                                "Bachelor Of Computer Science (Intelligence Systems) Second Class Honours Upper Vission.",
                              image: "/certificates/UPNMBACHCERT.jpeg",
                            },
                          {
                            title: "UI/UX & Web Development Practices",
                            issuer: "MDEC / Project-Based Training",
                            year: "2024",
                            description:
                              "Component-driven UI design, usability principles, and frontend best practices.",
                            image: "/certificates/GIGCERT.jpeg",
                          },
                          {
                              title: "Leadership Conferment",
                              issuer: "Academia UPNM",
                              year: "2024",
                              description:
                                "Certified that has beed recognized as a Leaders Of Character.",
                              image: "/certificates/LEADERSHIPCERT.jpeg",
                            },
                        ].map((cert, index) => (
                          <div
                            key={index}
                            className="glass rounded-xl p-6 hover:border-primary/40 transition"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="font-semibold text-foreground">
                                {cert.title}
                              </h3>
                              <span className="text-sm text-primary">{cert.year}</span>
                            </div>
                  
                            <p className="text-sm text-muted-foreground mb-2">
                              {cert.issuer}
                            </p>
                  
                            <p className="text-sm text-foreground/70 mb-4">
                              {cert.description}
                            </p>
                  
                            <button
                              onClick={() => {
                                setSelectedImage(cert.image);
                                setModalOpen(true);
                              }}
                              className="inline-flex items-center text-sm text-primary hover:underline cursor-pointer"
                            >
                              View certificate
                            </button>
                          </div>
                        ))}
                      </div>

                      <CertificationModal
                        open={modalOpen}
                        imageSrc={selectedImage}
                        onClose={() => setModalOpen(false)}
                      />
                    </>
                  );                  

                case "technologies":
                  return (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {[
                        { name: "React", icon: "/reactjs.svg" },
                        { name: "Next.js", icon: "/nextjs2.svg" },
                        { name: "JavaScript", icon: "/javascript.svg" },
                        { name: "TypeScript", icon: "/typescript.svg" },
                        { name: "HTML", icon: "/html.svg" },
                        { name: "CSS", icon: "/css.svg" },
                        { name: "Tailwind CSS", icon: "/tailwind.svg" },
                        { name: "Node.js", icon: "/nodejs.svg" },
                        { name: "Git", icon: "/git.svg" },
                        { name: "Vite", icon: "/vite.svg" },
                        { name: "Bootstrap", icon: "/bootstrap.svg" },
                        { name: "Material-UI", icon: "/MUI.svg" },
                      ].map((tech) => (
                        <TechStackIcon
                          key={tech.name}
                          iconSrc={tech.icon}
                          language={tech.name}
                        />
                      ))}
                    </div>
                  );
              }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

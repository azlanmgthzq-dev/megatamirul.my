"use client";

import { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";
import { Linkedin } from "lucide-react";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Let's Connect" },
];

export default function Navigation() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Ensure contact is highlighted when user reaches the very bottom
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (nearBottom) setActiveId("contact");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className={`${dancingScript.className} text-xl font-semibold tracking-wide`}>
          Megat's Portfolio
        </span>

        <div className="flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors ${
                  isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="https://www.linkedin.com/in/megat-amirul-412234334"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

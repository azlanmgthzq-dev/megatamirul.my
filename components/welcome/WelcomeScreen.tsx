"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Compass, Globe2 } from "lucide-react";

type WelcomeScreenProps = {
  durationMs?: number;
  onComplete?: () => void;
};

type TypewriterProps = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
};

function Typewriter({ text, speedMs = 55, startDelayMs = 0 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        setDisplayed(text.slice(0, index));
        index += 1;
        if (index > text.length) {
          clearInterval(timer);
        }
      }, speedMs);
    }, startDelayMs);

    return () => clearTimeout(start);
  }, [text, speedMs, startDelayMs]);

  return (
    <span className="inline-flex items-center gap-1">
      <span>{displayed}</span>
      <span className="h-5 w-[2px] bg-primary animate-pulse" />
    </span>
  );
}

export default function WelcomeScreen({
  durationMs = 3600,
  onComplete,
}: WelcomeScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("welcome-complete", "true");
        window.dispatchEvent(new Event("welcome-complete"));
      }
      onComplete?.();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] bg-[#05060f] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
        >
          {/* Animated background accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
              animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/30 blur-3xl"
              animate={{ opacity: [0.25, 0.5, 0.25], scale: [1.1, 0.95, 1.1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_50%)]"
              animate={{ opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-4xl w-full space-y-8 text-center">
              {/* Icon row */}
              <motion.div
                className="flex items-center justify-center gap-5 md:gap-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {[Code2, Compass, Globe2].map((Icon, idx) => (
                  <motion.div
                    key={Icon.displayName ?? idx}
                    className="relative group"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15 * idx, duration: 0.5 }}
                  >
                    <div className="absolute -inset-3 rounded-full bg-primary/20 blur-xl group-hover:opacity-80 opacity-50 transition" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/5 backdrop-blur border border-white/10 shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Text */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                  Megat Amirul
                </p>
                <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                  Crafting precision interfaces for business-grade software.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  <Typewriter text="Welcome to my portfolio site" startDelayMs={250} />
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 border border-white/10 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                  <span>Loading portfolio</span>
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

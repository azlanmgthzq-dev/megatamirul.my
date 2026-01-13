"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  delay?: number;
};

export default function TypewriterText({ text, delay = 0 }: Props) {
  const words = text.split(" ");

  return (
    <motion.p
      className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

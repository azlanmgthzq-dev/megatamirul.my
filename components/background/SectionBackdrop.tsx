"use client";

import { motion } from "framer-motion";

type SectionBackdropProps = {
  gradientClassName?: string;
};

export default function SectionBackdrop({
  gradientClassName = "bg-gradient-to-b from-primary/10 via-transparent to-transparent",
}: SectionBackdropProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`absolute inset-0 pointer-events-none ${gradientClassName}`}
    />
  );
}

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealVariants, revealViewport } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={cn(className)} initial="hidden" whileInView="visible" viewport={revealViewport} variants={revealVariants} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}>{children}</motion.div>;
}

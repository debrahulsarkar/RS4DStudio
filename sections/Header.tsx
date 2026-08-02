"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";

export function Header() {
  return (
    <motion.header initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-studio-bg/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="/" className="focus-ring text-sm font-bold tracking-[.24em] text-white">RS4DStudio</a>
        <div className="hidden items-center gap-7 md:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="focus-ring text-sm text-studio-muted transition hover:text-white">{item.label}</a>)}</div>
        <a href="/start-project" className="focus-ring hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-studio-accent md:inline-flex">Hire Me</a>
        <a href="/start-project" className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-white/10 md:hidden" aria-label="Start a project"><Menu size={18} aria-hidden="true" /></a>
      </nav>
    </motion.header>
  );
}

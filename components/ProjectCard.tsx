"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return <motion.article whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 220, damping: 22 }} className="group overflow-hidden rounded-[8px] border border-white/10 bg-studio-card shadow-card"><div className="relative aspect-[1.2] overflow-hidden bg-black"><Image src={project.image} alt={`${project.title} sculpt placeholder`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/></div><div className="space-y-5 p-5"><h3 className="text-xl font-semibold text-white">{project.title}</h3><p className="text-sm leading-6 text-studio-muted">{project.description}</p><div className="flex flex-wrap gap-2">{project.software.map((item) => <span key={item} className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">{item}</span>)}</div><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[.06] px-3 py-1 text-xs text-studio-muted">{tag}</span>)}</div></div></motion.article>;
}

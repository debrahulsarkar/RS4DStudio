"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article whileHover={{ y: -6, borderColor: "rgba(255,107,0,0.42)" }} className="flex h-full flex-col justify-between rounded-[8px] border border-white/10 bg-studio-card p-6 transition-colors">
      <div>
        <div className="mb-6 flex size-11 items-center justify-center rounded-full bg-orange-500/10 text-studio-accent shadow-glow"><ArrowUpRight size={20} aria-hidden="true" /></div>
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-studio-muted">{service.description}</p>
        <ul className="mt-6 space-y-3">{service.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300"><span className="size-1.5 rounded-full bg-studio-accent" aria-hidden="true" />{feature}</li>)}</ul>
      </div>
      <a href={`/start-project?service=${service.slug}`} className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-semibold text-studio-accent hover:text-orange-300" aria-label={`Start a ${service.title} project`}>
        Start project <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </motion.article>
  );
}

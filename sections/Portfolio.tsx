import { PortfolioCard } from "@/components/PortfolioCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export function Portfolio(){return <section id="portfolio" className="bg-[#0d0d0d] px-4 py-[var(--section-padding)] sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><SectionHeading eyebrow="Portfolio" title="Collectible-grade forms, built for clients who need production confidence." description="Placeholder case studies showing work across statues, miniatures, creatures, toys, and print-ready kits."/></Reveal><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{projects.map((project,index)=><Reveal key={project.title} delay={index*.04}><PortfolioCard project={project}/></Reveal>)}</div></div></section>}

import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data";

export function Services(){return <section id="services" className="bg-studio-bg px-4 py-[var(--section-padding)] sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><SectionHeading center eyebrow="Services" title="From first idea to polished model handoff." description="Choose a focused sculpting service or combine multiple stages for a complete character production pipeline."/></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service)=><Reveal key={service.title}><ServiceCard service={service}/></Reveal>)}</div></div></section>}

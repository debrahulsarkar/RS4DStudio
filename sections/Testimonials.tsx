import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials(){return <section className="bg-studio-bg px-4 py-[var(--section-padding)] sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><SectionHeading eyebrow="Testimonials" title="Trusted by creators who need the sculpt to sell the idea."/></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.map((item)=><Reveal key={item.name}><figure className="h-full rounded-[8px] border border-white/10 bg-studio-card p-6 shadow-card"><Quote className="text-studio-accent" size={24}/><blockquote className="mt-6 text-base leading-8">&quot;{item.quote}&quot;</blockquote><figcaption className="mt-8 border-t border-white/10 pt-5"><p className="font-semibold">{item.name}</p><p className="mt-1 text-sm text-studio-muted">{item.role}</p></figcaption></figure></Reveal>)}</div></div></section>}

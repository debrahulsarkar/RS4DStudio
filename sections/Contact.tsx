import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact(){return <section id="contact" className="relative overflow-hidden bg-studio-bg px-4 py-[var(--section-padding)] sm:px-6 lg:px-8"><div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-studio-accent/10 blur-3xl"/><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]"><Reveal><SectionHeading eyebrow="Contact" title="Have a character, statue, or printable model to build?" description="Send the essentials and I’ll respond with next steps, estimated scope, and the cleanest path to production-ready delivery."/></Reveal><Reveal><ContactForm/></Reveal></div></section>}

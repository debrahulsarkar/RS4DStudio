import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/data";

export function FAQ(){return <section id="faq" className="bg-[#0d0d0d] px-4 py-[var(--section-padding)] sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]"><Reveal><SectionHeading eyebrow="FAQ" title="Project details, files, licenses, and delivery." description="A quick overview before we talk scope."/></Reveal><Reveal><FAQAccordion items={faqs}/></Reveal></div></section>}

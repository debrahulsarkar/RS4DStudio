import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-studio-bg px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-studio-accent/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionHeading align="center" eyebrow="Start" title="Ready to turn a character idea into a production-ready sculpt?" description="Use the dedicated inquiry flow to choose a service, start with a tailored brief, and send the details without staring at a blank form." />
          <div className="mt-9"><Button href="/start-project">Start a Project <ArrowRight size={17} aria-hidden="true" /></Button></div>
        </Reveal>
      </div>
    </section>
  );
}

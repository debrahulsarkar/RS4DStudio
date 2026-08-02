import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { getStartProjectConfig, startProjectServices } from "@/lib/startProject";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Send a personalized 3D sculpting project inquiry to RS4DStudio.",
};

type StartProjectPageProps = {
  searchParams?: Promise<{ service?: string | string[] }> | { service?: string | string[] };
};

export default async function StartProjectPage({ searchParams }: StartProjectPageProps) {
  const params = searchParams ? await Promise.resolve(searchParams) : {};
  const selectedService = getStartProjectConfig(params.service);

  return (
    <main className="min-h-screen bg-studio-bg">
      <Header />
      <section className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mesh-line absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-studio-accent/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <a href="/#services" className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-semibold text-studio-muted hover:text-white">
              <ArrowLeft size={16} aria-hidden="true" /> Back to services
            </a>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-studio-accent">Project Brief</p>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">{selectedService.heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-studio-muted">{selectedService.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {startProjectServices.map((service) => (
                <a key={service.slug} href={`/start-project?service=${service.slug}`} className="focus-ring rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-studio-muted transition hover:border-orange-400/40 hover:text-white">
                  {service.title}
                </a>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] border border-white/10 bg-studio-card p-5 text-left">
              <div className="flex items-start gap-3 text-sm leading-6 text-studio-muted">
                <CheckCircle2 className="mt-0.5 shrink-0 text-studio-accent" size={18} aria-hidden="true" />
                The form is prefilled for the selected service, but every field is editable before sending.
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProjectInquiryForm initialProjectType={selectedService.title} initialMessage={selectedService.template} />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for RS4DStudio custom 3D sculpting services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-studio-bg">
      <Header />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mesh-line absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-studio-accent">RS4DStudio</p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Terms & Conditions</h1>
          <div className="mt-10 space-y-8 text-base leading-8 text-studio-muted">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Services</h2>
              <p>RS4DStudio provides custom digital 3D sculpting services, including character sculpting, collectible design, miniatures, creature sculpting, 3D print preparation, and STL optimization.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Quotes and Payment</h2>
              <p>Projects are quoted individually based on scope, complexity, usage, timeline, and delivery requirements. Work begins after payment. Larger projects may use milestone payments agreed before production starts.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Revisions</h2>
              <p>Minor revisions are included as part of the agreed project scope. Major changes, direction changes, or additional requests outside the original brief may incur additional charges.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Delivery</h2>
              <p>Delivery is digital. Final files are provided in the agreed formats after the project is completed and payment terms are fulfilled.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Client Responsibilities</h2>
              <p>Clients must provide accurate references, clear project requirements, and any necessary permissions for submitted characters, concepts, brands, or intellectual property.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Ownership and Portfolio Use</h2>
              <p>After full payment, clients own the commissioned work unless otherwise agreed in writing. RS4DStudio may display completed work in its portfolio, social media, or promotional materials unless an NDA or written confidentiality agreement exists.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Project Refusal</h2>
              <p>RS4DStudio may refuse projects that are illegal, infringing, misleading, harmful, or outside the studio's professional scope.</p>
            </section>
            <p className="border-t border-white/10 pt-6 text-sm text-zinc-400">Last Updated: August 5, 2026</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

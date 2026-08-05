import type { Metadata } from "next";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy for RS4DStudio custom digital 3D sculpting services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-studio-bg">
      <Header />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mesh-line absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-studio-accent">RS4DStudio</p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Refund Policy</h1>
          <div className="mt-10 space-y-8 text-base leading-8 text-studio-muted">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Custom Digital Work</h2>
              <p>RS4DStudio provides custom digital services. Because each project is created specifically for the client, services are generally non-refundable after work has started.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Before Work Begins</h2>
              <p>Full refunds may be issued if work has not begun and no project resources have been prepared or scheduled.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Partial Refunds</h2>
              <p>Partial refunds may be considered depending on the amount of completed work, project stage, files prepared, and time already spent.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Completed Files</h2>
              <p>Completed digital files cannot be returned, so completed and delivered work is not eligible for refund unless otherwise agreed in writing.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Revision Process</h2>
              <p>Clients should use the revision process before requesting refunds. Feedback and revisions are the preferred way to resolve concerns and bring the final sculpt closer to the approved brief.</p>
            </section>
            <p className="border-t border-white/10 pt-6 text-sm text-zinc-400">Last Updated: August 5, 2026</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

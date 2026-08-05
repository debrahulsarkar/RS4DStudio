import type { Metadata } from "next";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for RS4DStudio client inquiries, project files, and website usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-studio-bg">
      <Header />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mesh-line absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-studio-accent">RS4DStudio</p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Privacy Policy</h1>
          <div className="mt-10 space-y-8 text-base leading-8 text-studio-muted">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Information We Collect</h2>
              <p>RS4DStudio collects contact information and project details submitted by clients through inquiry forms, emails, messages, and project discussions. This may include your name, email address, project type, budget range, references, files, deadlines, and any details needed to understand the requested 3D sculpting work.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Payments</h2>
              <p>Payment information is handled by third-party payment providers. RS4DStudio does not store full payment card details on this website.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Client Files</h2>
              <p>Client references, models, briefs, and production files are treated confidentially and used only for the agreed project work, communication, delivery, and customer support.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">How Information Is Used</h2>
              <p>Submitted information is used only for communication, project planning, project completion, delivery, invoicing coordination, and customer support.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Cookies and Analytics</h2>
              <p>This website may use cookies and analytics tools to understand general website usage, improve performance, and refine the visitor experience.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Security</h2>
              <p>RS4DStudio uses reasonable security measures to protect submitted information and client files. No online transmission or storage method can be guaranteed to be completely secure.</p>
            </section>
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Privacy Questions</h2>
              <p>For privacy questions, please use the Contact page or Start Project inquiry page to reach RS4DStudio.</p>
            </section>
            <p className="border-t border-white/10 pt-6 text-sm text-zinc-400">Last Updated: August 5, 2026</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

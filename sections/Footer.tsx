import { Dribbble, Instagram, Linkedin } from "lucide-react";
import { navItems } from "@/lib/data";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="focus-ring text-sm font-bold tracking-[.24em] text-white">RS4DStudio</a>
          <p className="mt-3 max-w-md text-sm text-studio-muted">Premium 3D character sculpting for collectibles, games, miniatures, and print-ready production.</p>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} className="focus-ring text-sm text-studio-muted hover:text-white">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          {[Instagram, Dribbble, Linkedin].map((Icon, index) => <a key={index} href="#top" className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-studio-muted transition hover:border-orange-400/40 hover:text-studio-accent" aria-label="Social profile placeholder"><Icon size={18} aria-hidden="true" /></a>)}
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 text-xs text-studio-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 RS4DStudio. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal navigation">
          {legalLinks.map((item) => <a key={item.href} href={item.href} className="focus-ring hover:text-white">{item.label}</a>)}
        </nav>
      </div>
    </footer>
  );
}

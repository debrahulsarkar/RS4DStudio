import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden bg-studio-bg px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mesh-line absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-studio-accent/25 blur-3xl animate-float" aria-hidden="true" />
      <div className="absolute right-[8%] top-[18%] h-48 w-48 rounded-full bg-white/10 blur-3xl animate-float" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm text-studio-muted"><Sparkles size={16} className="text-studio-accent" aria-hidden="true" />Premium sculpts for production, print, and launch campaigns</div>
          <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-[-.045em] text-white sm:text-6xl lg:text-8xl">I Create High-Quality 3D Character Sculptures</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-studio-muted sm:text-xl">Stylized and collectible-ready character sculpts for games, 3D printing, and production.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#portfolio">View Portfolio <ArrowRight size={17} aria-hidden="true" /></Button><Button href="/start-project" variant="secondary">Hire Me</Button></div>
        </div>
        <div className="relative mx-auto hidden w-full max-w-[30rem] lg:block">
          <div className="absolute -inset-8 rounded-full bg-studio-accent/20 blur-3xl" aria-hidden="true" />
          <div className="relative aspect-square overflow-hidden rounded-[8px] border border-white/10 bg-studio-card shadow-card">
            <Image src="/projects/1180.png" alt="Featured RS4DStudio 3D character sculpt render" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/[0.04]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

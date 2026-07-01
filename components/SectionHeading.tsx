import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return <div className={cn("max-w-3xl", center && "mx-auto text-center")}><p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-studio-accent">{eyebrow}</p><h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">{title}</h2>{description ? <p className="mt-5 text-base leading-8 text-studio-muted sm:text-lg">{description}</p> : null}</div>;
}

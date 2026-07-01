import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<typeof Link> & { children: ReactNode; variant?: "primary" | "secondary" };
export function Button({ children, className, variant = "primary", ...props }: Props) {
  return <Link className={cn("focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300", variant === "primary" ? "bg-studio-accent text-black shadow-glow hover:-translate-y-0.5 hover:bg-orange-400" : "border border-white/15 bg-white/[.04] text-white hover:-translate-y-0.5 hover:border-white/30", className)} {...props}>{children}</Link>;
}

"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({ name: z.string().min(2, "Enter your name."), email: z.string().email("Enter a valid email."), projectType: z.string().min(1, "Choose a project type."), budget: z.string().min(1, "Choose a budget range."), message: z.string().min(20, "Tell me a little more about the project.") });
type Values = z.infer<typeof schema>;
const inputClass = "focus-ring w-full rounded-[8px] border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-studio-accent";

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });
  function onSubmit() { setSuccess(true); reset(); }
  return <form onSubmit={handleSubmit(onSubmit)} className="rounded-[8px] border border-white/10 bg-studio-card p-5 shadow-card sm:p-7" noValidate><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" error={errors.name?.message}><input {...register("name")} className={inputClass} placeholder="Your name" autoComplete="name"/></Field><Field label="Email" error={errors.email?.message}><input {...register("email")} className={inputClass} placeholder="you@company.com" autoComplete="email"/></Field><Field label="Project Type" error={errors.projectType?.message}><select {...register("projectType")} className={cn(inputClass, "appearance-none")} defaultValue=""><option value="" disabled>Choose one</option><option>Collectible statue</option><option>Miniature sculpt</option><option>Game character</option><option>3D print preparation</option><option>Custom statue</option></select></Field><Field label="Budget" error={errors.budget?.message}><select {...register("budget")} className={cn(inputClass, "appearance-none")} defaultValue=""><option value="" disabled>Choose range</option><option>$500 - $1,500</option><option>$1,500 - $3,500</option><option>$3,500 - $7,500</option><option>$7,500+</option></select></Field><Field label="Message" error={errors.message?.message} className="sm:col-span-2"><textarea {...register("message")} className={cn(inputClass, "min-h-36 resize-y")} placeholder="Tell me about the character, scale, deadline, references, and final use."/></Field></div><button type="submit" disabled={isSubmitting} className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-studio-accent px-5 py-4 text-sm font-bold text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-orange-400 disabled:opacity-70 sm:w-auto">Send Project Brief <Send size={16}/></button>{success ? <p className="mt-5 rounded-[8px] border border-orange-400/30 bg-orange-500/10 px-4 py-3 text-sm text-orange-100" role="status">Project brief received. This demo form has no backend, but the validation and success flow are ready.</p> : null}</form>;
}
function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) { return <label className={cn("block", className)}><span className="mb-2 block text-sm font-medium text-white">{label}</span>{children}{error ? <span className="mt-2 block text-xs text-orange-300" role="alert">{error}</span> : null}</label>; }

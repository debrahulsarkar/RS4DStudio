"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { projectTypeOptions } from "@/lib/startProject";
import { cn } from "@/lib/utils";

const WEB3FORMS_ACCESS_KEY = "de751343-6077-48e1-a233-211a4fc83b25";

const schema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  projectType: z.string().min(1, "Choose a project type."),
  budget: z.string().min(1, "Choose a budget range."),
  message: z.string().min(20, "Tell me a little more about the project."),
});

type Values = z.infer<typeof schema>;
type SubmitState = "idle" | "success" | "error";

const inputClass =
  "focus-ring w-full rounded-[8px] border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-studio-accent";

export function ProjectInquiryForm({ initialProjectType, initialMessage }: { initialProjectType: string; initialMessage?: string }) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: initialProjectType,
      budget: "",
      message: initialMessage ?? "",
    },
  });

  async function onSubmit(values: Values) {
    setSubmitState("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New RS4DStudio ${values.projectType} inquiry from ${values.name}`,
          from_name: "RS4DStudio Website",
          name: values.name,
          email: values.email,
          project_type: values.projectType,
          budget: values.budget,
          message: values.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error("Form submission failed.");
      }

      setSubmitState("success");
      reset({ projectType: initialProjectType, budget: "", message: initialMessage ?? "" });
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[8px] border border-white/10 bg-studio-card p-5 shadow-card sm:p-7" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} className={inputClass} placeholder="you@company.com" autoComplete="email" />
        </Field>
        <Field label="Project Type" error={errors.projectType?.message}>
          <select {...register("projectType")} className={cn(inputClass, "appearance-none")}>
            {projectTypeOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Budget" error={errors.budget?.message}>
          <select {...register("budget")} className={cn(inputClass, "appearance-none")}>
            <option value="" disabled>Choose range</option>
            <option>$500 - $1,500</option>
            <option>$1,500 - $3,500</option>
            <option>$3,500 - $7,500</option>
            <option>$7,500+</option>
          </select>
        </Field>
        <Field label="Project Description" error={errors.message?.message} className="sm:col-span-2">
          <textarea {...register("message")} className={cn(inputClass, "min-h-72 resize-y leading-6")} placeholder="Tell me about the character, scale, deadline, references, and final use." />
        </Field>
      </div>
      <button type="submit" disabled={isSubmitting} className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-studio-accent px-5 py-4 text-sm font-bold text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-orange-400 disabled:cursor-wait disabled:opacity-70 sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Project Brief"} <Send size={16} aria-hidden="true" />
      </button>
      {submitState === "success" ? <p className="mt-5 rounded-[8px] border border-orange-400/30 bg-orange-500/10 px-4 py-3 text-sm text-orange-100" role="status">Project brief sent successfully. I will get back to you soon.</p> : null}
      {submitState === "error" ? <p className="mt-5 rounded-[8px] border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100" role="alert">Something went wrong. Please try again in a moment.</p> : null}
    </form>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return <label className={cn("block", className)}><span className="mb-2 block text-sm font-medium text-white">{label}</span>{children}{error ? <span className="mt-2 block text-xs text-orange-300" role="alert">{error}</span> : null}</label>;
}

import { services } from "@/lib/data";
import type { ServiceSlug } from "@/types";

type StartProjectSlug = ServiceSlug | "general-inquiry";

export type StartProjectConfig = {
  title: string;
  slug: StartProjectSlug;
  heading: string;
  description: string;
  template: string;
};

const templates = {
  "character-sculpting": `Hello RS4DStudio,

I would like a custom character sculpt.

Concept / References:
...

Style:
...

Intended use:
...

Scale:
...

Deadline:
...

Additional notes:
...`,
  "collectible-design": `Hello RS4DStudio,

I need a collectible statue design.

Character:
...

Pose ideas:
...

Scale:
...

Display base:
...

References:
...

Additional notes:
...`,
  "miniature-sculpting": `Hello RS4DStudio,

I need a tabletop miniature.

Scale:
...

Faction:
...

Weapons:
...

References:
...

Additional notes:
...`,
  "creature-sculpting": `Hello RS4DStudio,

I need an original creature.

Creature type:
...

Style:
...

Mood:
...

References:
...

Additional notes:
...`,
  "3d-print-preparation": `Hello RS4DStudio,

I already have a model that needs to be prepared for 3D printing.

Required work:

- Cutting
- Keying
- Hollowing
- Scale check
- Print orientation

Model link:
...

Additional notes:
...`,
  "stl-optimization": `Hello RS4DStudio,

I need an existing STL optimized.

Current issues:
...

Printer:
...

Desired output:
...

Model link:
...

Additional notes:
...`,
} satisfies Record<ServiceSlug, string>;

const descriptions = {
  "character-sculpting": "Tell me about the character, style, usage, scale, and references so I can shape a clear sculpting scope.",
  "collectible-design": "Share the character, pose, base, scale, and production goals for a collectible-ready statue.",
  "miniature-sculpting": "Outline the tabletop scale, faction, equipment, and visual references for a readable miniature sculpt.",
  "creature-sculpting": "Describe the creature type, mood, anatomy direction, and references for an original sculpt.",
  "3d-print-preparation": "Send the model details and print-prep needs so I can plan cuts, keys, hollowing, scale, and orientation.",
  "stl-optimization": "Describe the STL issues, printer, desired output, and model link so I can optimize the file for production.",
} satisfies Record<ServiceSlug, string>;

export const startProjectServices: StartProjectConfig[] = services.map((service) => ({
  title: service.title,
  slug: service.slug,
  heading: `Start Your ${service.title} Project`,
  description: descriptions[service.slug] ?? service.description,
  template: templates[service.slug] ?? "",
}));

export const generalInquiryConfig: StartProjectConfig = {
  title: "General Inquiry",
  slug: "general-inquiry",
  heading: "Start Your Project",
  description: "Share the essentials and I will help you choose the best sculpting path.",
  template: "",
};

export function getStartProjectConfig(slug?: string | string[]) {
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;
  return startProjectServices.find((service) => service.slug === normalizedSlug) ?? generalInquiryConfig;
}

export const projectTypeOptions = [generalInquiryConfig, ...startProjectServices].map((service) => service.title);

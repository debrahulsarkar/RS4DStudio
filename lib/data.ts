import type { FAQ, Project, Service } from "@/types";

export const navItems = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const skills = ["ZBrush", "Blender", "Maya", "Character Design", "Collectible Sculpting", "3D Printing", "Anatomy", "Hard Surface"];

export const projects: Project[] = [
  ["Solar Ronin Statue", "Stylized warrior sculpt prepared for collectible production and resin test prints.", "ZBrush", "Statue"],
  ["Apex Creature Bust", "Creature anatomy study with production-friendly forms and clean surface transitions.", "ZBrush", "Creature"],
  ["Arcade Mage Miniature", "Tabletop character optimized for readable silhouette and resin durability.", "Maya", "Miniature"],
  ["Cyber Idol Figurine", "Collectible figure with hard-surface accessories and stylized hair sculpting.", "Blender", "Toy"],
  ["Titan Pilot Character", "Game-ready sculpt focused on heroic proportions, armor polish, and presentation renders.", "Maya", "Game"],
  ["Kickstarter Dragon Kit", "Segmented fantasy statue kit engineered for campaign previews and fulfillment.", "Blender", "Kickstarter"],
  ["Mascot Toy Prototype", "Clean mascot sculpt with toy-manufacturing sensibility and appealing volumes.", "ZBrush", "Prototype"],
  ["Resin Hero Garage Kit", "Hero sculpt split into keyed parts with supported detail density for resin output.", "Blender", "Resin"]
].map(([title, description, software, tag], index) => ({ title, description, image: `/projects/project-${index + 1}.svg`, software: [software], tags: [tag, "Print-ready"] }));

export const services: Service[] = [
  { title: "Character Sculpting", description: "Hero characters, stylized figures, and expressive sculpts built from brief, concept, or reference pack.", features: ["Clean anatomy", "Strong silhouettes", "Production presentation"] },
  { title: "Collectible Design", description: "Premium statue concepts shaped for shelf impact, manufacturable parts, and collector-grade detail.", features: ["Pose exploration", "Base design", "Part separation"] },
  { title: "Miniature Sculpting", description: "Readable tabletop miniatures with crisp forms, sturdy proportions, and scale-aware details.", features: ["28-75mm scale", "Faction sets", "Print-safe thickness"] },
  { title: "Creature Sculpting", description: "Original monsters, mascots, beasts, and creature busts with believable anatomy and appeal.", features: ["Creature anatomy", "Texture passes", "Dynamic posing"] },
  { title: "3D Print Preparation", description: "Models prepared for resin printing, including cuts, keys, scale checks, and clean delivery files.", features: ["STL/OBJ export", "Keyed parts", "Watertight checks"] },
  { title: "STL Optimization", description: "Repair, polish, decimate, and optimize sculpt files for smoother printing and production handling.", features: ["File cleanup", "Detail preservation", "Print workflow"] }
];

export const processSteps = ["Discussion", "Concept", "Sculpt", "Review", "Delivery"].map((title, index) => ({ title, description: ["We define scope, references, usage rights, scale, and production constraints.", "The idea becomes a direction through pose, proportion, mood, and surface language.", "The character is sculpted from blockout to refined anatomy, details, and accessories.", "You receive clear previews and revision passes before final handoff.", "Final files are prepared for presentation, print, manufacturing, or studio pipeline use."][index] }));

export const testimonials = [
  { quote: "RS4DStudio translated a rough mascot idea into a collectible-ready sculpt with campaign-level polish.", name: "Maya Ellis", role: "Creative Director" },
  { quote: "The model printed beautifully. The cuts, keys, and detail density were clearly made for resin production.", name: "Jonas Park", role: "Resin Print Studio Owner" },
  { quote: "Fast communication, strong anatomy, and presentation renders that helped our team get buy-in.", name: "Rafael Moretti", role: "Game Art Producer" }
];

export const faqs: FAQ[] = [
  { question: "What file formats do you deliver?", answer: "Typical delivery includes STL, OBJ, ZTL, FBX, and blend files depending on project scope." },
  { question: "Can you prepare for resin printing?", answer: "Yes. Models can be made watertight, split into keyed parts, checked for scale, and optimized for resin workflows." },
  { question: "Commercial license?", answer: "Commercial usage can be included in the project agreement before sculpting starts." },
  { question: "Revisions?", answer: "Projects include structured review milestones with clear preview renders and change lists." },
  { question: "Delivery time?", answer: "Small busts and miniatures can take 1-3 weeks. Larger statue kits may take 4-8 weeks." }
];

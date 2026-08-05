import type { FAQItem, PortfolioProject, Service, Testimonial } from "@/types";

export const navItems = [
  { label: "Work", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/start-project" },
];

export const skills = ["ZBrush", "Blender", "Maya", "Character Design", "Collectible Sculpting", "3D Printing", "Anatomy", "Hard Surface"];

const projectRows: [string, string, string, string[], string[]][] = [
  ["The Last Ascent", "Condemned to push the mountain's heart uphill for eternity, the wanderer no longer seeks freedom. The climb itself has become his purpose.", "/projects/project-1.png", ["ZBrush"], ["Statue", "Realistic", "Print-ready"]],
  ["The Final Hold", "Two forgotten champions remain locked in combat long after the crowd has vanished. Neither victory nor defeat matters anymore—only the struggle.", "/projects/project-2.png", ["ZBrush"], ["Dynamic", "live", "Anatomy"]],
  ["Ashen Throne", "The dragon returns to a kingdom reduced to stone and ash. It waits not for challengers, but for someone worthy enough to wake it.", "/projects/project-3.png", ["ZBrush"], ["Miniature", "Fantasy", "STL"]],
  ["Ghostwind", "Said to appear only before great change, the white stallion leaves no footprints behind—only silence.", "/projects/project-4.png", ["ZBrush", "Blender"], ["Figurine", "Hard Surface","Collectible" ]],
  ["Midnight Rebel", "Expressive stylized bust emphasizing facial anatomy, personality, and presentation-quality sculpting.", "/projects/project-5.png", ["ZBrush"], ["bust", "Expression", "Character"]],
  ["Broadcast Error", "They built him to entertain millions. One day, he looked beyond the screen—and decided he'd had enough.", "/projects/project-6.png", ["ZBrush", "Blender"], ["Kickstarter", "Dragon", "Keys"]],
  ["Clockwork Courier", "Built to deliver hope during the final days of civilization, it continues its journey centuries after forgetting who sent it.", "/projects/project-7.png", ["ZBrush"], ["Resin", "Statue", "Collectible"]],
  ["The Silent Witness", "Every empire believed the raven belonged to them. Yet when the kingdoms fell, it remained, watching the next chapter begin.", "/projects/project-8.png", ["ZBrush", "Blender"], ["Echofeather", "Resin", "Collectible"]],
];

export const projects: PortfolioProject[] = projectRows.map(([title, description, image, software, tags]) => ({ title, description, image, software, tags }));

export const services: Service[] = [
  { title: "Character Sculpting", slug: "character-sculpting", description: "Hero characters, stylized figures, and expressive sculpts built from brief, concept, or reference pack.", features: ["Clean anatomy", "Strong silhouettes", "Production presentation"] },
  { title: "Collectible Design", slug: "collectible-design", description: "Premium statue concepts shaped for shelf impact, manufacturable cuts, and collector-grade detail.", features: ["Pose exploration", "Base design", "Part separation"] },
  { title: "Miniature Sculpting", slug: "miniature-sculpting", description: "Readable tabletop miniatures with crisp forms, sturdy proportions, and scale-aware detailing.", features: ["28-75mm scale", "Faction sets", "Print-safe thickness"] },
  { title: "Creature Sculpting", slug: "creature-sculpting", description: "Original monsters, mascots, beasts, and creature busts with believable anatomy and character appeal.", features: ["Creature anatomy", "Texture passes", "Dynamic posing"] },
  { title: "3D Print Preparation", slug: "3d-print-preparation", description: "Models prepared for resin printing, including cuts, keys, hollowing strategy, and clean delivery files.", features: ["STL/OBJ export", "Keyed parts", "Scale checks"] },
  { title: "STL Optimization", slug: "stl-optimization", description: "Repair, polish, decimate, and optimize sculpt files for smoother printing and easier production handling.", features: ["Watertight meshes", "File cleanup", "Detail preservation"] },
];

export const processSteps = [
  { title: "Discussion", description: "We define scope, references, usage rights, target scale, and production constraints." },
  { title: "Concept", description: "The idea becomes a direction through thumbnails, mood, pose, proportions, and surface language." },
  { title: "Sculpt", description: "The character is sculpted in stages from blockout to refined anatomy, details, and accessories." },
  { title: "Review", description: "You receive clear previews and revision passes so the final model lands exactly where it should." },
  { title: "Delivery", description: "Final files are prepared for presentation, print, manufacturing handoff, or studio pipeline use." },
];

export const testimonials: Testimonial[] = [
  { quote: "RS4DStudio translated a rough mascot idea into a collectible-ready sculpt with the kind of polish our campaign needed from day one.", name: "Maya Ellis", role: "Creative Director, indie toy launch" },
  { quote: "The model printed beautifully. The cuts, keys, and detail density were clearly made by someone who understands resin production.", name: "Jonas Park", role: "Owner, resin print studio" },
  { quote: "Fast communication, strong anatomy, and presentation renders that helped our team get buy-in before prototyping.", name: "Rafael Moretti", role: "Producer, game art vendor" },
];

export const faqs: FAQItem[] = [
  { question: "What file formats do you deliver?", answer: "Typical delivery includes STL, OBJ, ZTL, FBX, and blend files depending on the project scope. Presentation renders can also be included." },
  { question: "Can you prepare for resin printing?", answer: "Yes. Models can be made watertight, split into keyed parts, checked for scale, and optimized for resin printing workflows." },
  { question: "Commercial license?", answer: "Commercial usage can be included in the project agreement. Licensing terms are defined before sculpting starts so ownership and usage are clear." },
  { question: "Revisions?", answer: "Each project includes structured review milestones. Revision rounds depend on scope, but feedback is handled with preview renders and clear change lists." },
  { question: "Delivery time?", answer: "Small busts and miniatures can take 1-3 weeks. Larger collectible statues or production kits may take 4-8 weeks depending on complexity." },
];

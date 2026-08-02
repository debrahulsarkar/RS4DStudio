export type PortfolioProject = { title: string; description: string; software: string[]; tags: string[]; image: string };
export type Project = PortfolioProject;
export type ServiceSlug = "character-sculpting" | "collectible-design" | "miniature-sculpting" | "creature-sculpting" | "3d-print-preparation" | "stl-optimization";
export type Service = { title: string; slug: ServiceSlug; description: string; features: string[] };
export type Testimonial = { quote: string; name: string; role: string };
export type FAQItem = { question: string; answer: string };
export type FAQ = FAQItem;

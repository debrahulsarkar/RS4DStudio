import type { FAQ } from "@/types";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return <div className="divide-y divide-white/10 rounded-[8px] border border-white/10 bg-studio-card">{items.map((item) => <details key={item.question} className="group"><summary className="focus-ring cursor-pointer px-5 py-5 text-base font-semibold">{item.question}</summary><p className="px-5 pb-6 text-sm leading-7 text-studio-muted">{item.answer}</p></details>)}</div>;
}

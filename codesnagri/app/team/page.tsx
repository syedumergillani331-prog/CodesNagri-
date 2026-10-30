import type { Metadata } from "next";
import { User } from "lucide-react";
import { PageHero, Section, Cta } from "@/components/Ui";
import { TEAM } from "@/lib/data";
export const metadata: Metadata = { title: "Our Team", description: "The roles behind CodesNagri projects and courses.", alternates: { canonical: "/team" } };
export default function Page() {
  return (<><PageHero title="Our Team" text="The people and roles behind every project and course." />
    <Section><ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{TEAM.map((t) => (
      <li key={t.role} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-mint text-white shadow-lg"><User aria-hidden /></span>
        <h3 className="font-display text-lg font-semibold">{t.role}</h3><p className="text-sm text-slate-500">{t.note}</p></li>))}</ul></Section><Cta /></>);
}

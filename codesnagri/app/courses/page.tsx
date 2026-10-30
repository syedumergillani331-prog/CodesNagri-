import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CalendarDays } from "lucide-react";
import { PageHero, Section, CardGrid, Cta } from "@/components/Ui";
import Faq from "@/components/Faq";
import { COURSES } from "@/lib/data";
export const metadata: Metadata = { title: "IT Courses", description: "Project-based IT courses for beginners and career changers.", alternates: { canonical: "/courses" } };
// Edit these to match what you really offer.
const WHY = ["Project-based lessons", "Beginner-friendly pace", "Feedback on your work", "Questions answered by the instructor", "A portfolio piece to show at the end"];
export default function Page() {
  const banner = process.env.NEXT_PUBLIC_COURSE_BANNER;
  return (<><PageHero title="IT Courses" text="Project-based courses for beginners and career changers." />
    {banner && <div className="border-b border-slate-200 bg-[#0b1330]"><p className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 font-semibold text-cyan-300"><CalendarDays aria-hidden size={20} />{banner}</p></div>}
    <Section title="Courses we offer"><CardGrid items={COURSES} base="/courses" /></Section>
    <Section tone="white" title="Why learn with us"><ul className="grid gap-3 md:grid-cols-2">{WHY.map((w) => <li key={w} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#0b1330] p-4"><CheckCircle2 aria-hidden className="shrink-0 text-cyan-400" />{w}</li>)}</ul></Section>
    <Section title="Course questions"><Faq /></Section>
    <Cta text="Ready to start learning?" />
  </>);
}

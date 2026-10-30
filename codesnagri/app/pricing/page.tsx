import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import { PageHero, Section, Cta } from "@/components/Ui";
import { getPlans } from "@/lib/db";
export const metadata: Metadata = { title: "Pricing", description: "Plans for website care and support from CodesNagri.", alternates: { canonical: "/pricing" } };
const G = ["from-cyan-500 to-blue-500", "from-cyan-500 to-indigo-600", "from-orange-500 to-red-500"];
export const revalidate = 60;
export default async function Page() {
  const PLANS = await getPlans();
  return (<><PageHero title="Pricing and plans" text="Simple plans for keeping your website or app healthy." />
    <Section><ul className="grid gap-5 md:grid-cols-3">{PLANS.map((p, n) => (
      <li key={p.name} className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        {p.badge && <span className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-indigo-500 to-cyan-600 px-4 py-2 text-sm font-bold text-white">{p.badge}</span>}
        <span className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${G[n % 3]} text-white`}><TrendingUp aria-hidden /></span>
        <h3 className="font-display text-2xl font-bold">{p.name}</h3>
        <p className="acc mt-3 text-4xl font-bold">{p.price ?? "Custom"}<span className="text-base font-medium text-slate-500"> {p.price ? p.period : "/ quote based"}</span></p>
        <ul className="my-6 flex-1 space-y-3">{p.features.map((f) => <li key={f} className="flex items-center gap-3"><CheckCircle2 aria-hidden size={20} className="shrink-0 text-cyan-400" />{f}</li>)}</ul>
        {p.payLink ? <a href={p.payLink} className="btn btn-solid">Subscribe <ArrowRight aria-hidden size={18} /></a> : <Link href="/contact" className="btn btn-solid bg-gradient-to-r from-cyan-600 to-indigo-600">Get started <ArrowRight aria-hidden size={18} /></Link>}
      </li>))}</ul></Section><Cta /></>);
}

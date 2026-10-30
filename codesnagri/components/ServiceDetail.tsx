import Link from "next/link";
import { CheckCircle2, ArrowRight, FolderOpen } from "lucide-react";
import { Section, Cta } from "@/components/Ui";
import { priceText } from "@/lib/data";
import type { SDetail } from "@/lib/services";
const G = ["from-cyan-500 to-blue-500", "from-emerald-500 to-green-700", "from-pink-500 to-purple-500", "from-amber-400 to-orange-500", "from-sky-400 to-indigo-500", "from-violet-500 to-fuchsia-500"];
export default function ServiceDetail({ title, text, d }: { title: string; text: string; d?: SDetail }) {
  const price = priceText(title);
  return (<>
    <div className="hero-bg"><div className="hero-in relative mx-auto max-w-6xl px-4 py-16 md:py-24">
      <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm">{d?.tagline ?? "Our services"}</span>
      <h1 className="gt font-display text-4xl font-bold md:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-lg text-indigo-100">{text}</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="btn btn-primary">Get a quote <ArrowRight aria-hidden size={18} /></Link><Link href="/services" className="btn btn-ghost">All services</Link></div>
    </div></div>
    {d && <>
      <Section title={`Why choose our ${title.toLowerCase()}`}><ul className="grid gap-3 md:grid-cols-2">{d.why.map((w) => <li key={w} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"><CheckCircle2 aria-hidden className="shrink-0 text-cyan-400" />{w}</li>)}</ul></Section>
      <Section tone="white" title="Technologies we use"><ul className="grid grid-cols-2 gap-3 md:grid-cols-3">{d.tech.map((t, i) => <li key={t} className={`rounded-xl bg-gradient-to-br ${G[i % 6]} px-4 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg`}>{t}</li>)}</ul></Section>
      <Section title="Our process" intro="Four steps, with a check-in at each one."><ol className="grid gap-5 md:grid-cols-4">{d.steps.map(([h, p], i) => <li key={h} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="acc font-display text-5xl font-bold">0{i + 1}</span><h3 className="mt-2 font-display text-xl font-semibold">{h}</h3><p className="mt-1 text-slate-600">{p}</p></li>)}</ol></Section>
    </>}
    <Section tone="white" title="Pricing"><div className="max-w-xl rounded-3xl border border-slate-200 bg-[#0b1330] p-6">
      <p className="text-sm text-slate-500">Starting from</p><p className="acc font-display text-4xl font-bold">{price?.replace(/^From /, "") ?? "Contact for price"}</p>
      <p className="mt-2 text-sm text-slate-500">The final price depends on your requirements. We agree it in writing before work starts.</p>
      <Link href="/contact" className="btn btn-solid mt-5">Request a quote <ArrowRight aria-hidden size={18} /></Link></div></Section>
    <Section title="Recent projects"><div className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-200 p-6 text-slate-600"><FolderOpen aria-hidden className="shrink-0 text-cyan-400" /><p>Case studies for this service will be added here with client permission. See our <Link href="/portfolio" className="text-cyan-400 underline">portfolio</Link> for sample concepts.</p></div></Section>
    <Cta text={`Ready to talk about ${title.toLowerCase()}?`} />
  </>);
}

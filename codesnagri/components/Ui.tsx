import * as Icons from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { slug, type Item } from "@/lib/data";
export function Section({ title, intro, children, tone }: { title?: string; intro?: string; children: ReactNode; tone?: "white" }) {
  return (
    <section className={tone === "white" ? "bg-white" : ""}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {title && <div className="reveal mb-10 max-w-2xl"><h2 className="font-display text-3xl font-bold md:text-4xl">{title.split(" ").slice(0, -1).join(" ")} <span className="acc">{title.split(" ").slice(-1)}</span></h2>{intro && <p className="mt-3 text-lg text-slate-600">{intro}</p>}</div>}
        {children}
      </div>
    </section>
  );
}
export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <div className="hero-bg">
      <span className="blob -left-10 top-0 h-56 w-56 bg-pink-500" /><span className="blob -right-10 bottom-0 h-64 w-64 bg-mint" style={{ animationDelay: "2s" }} />
      <div className="hero-in relative mx-auto max-w-6xl px-4 py-16 md:py-24"><h1 className="gt font-display text-4xl font-bold md:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-lg text-indigo-100">{text}</p></div>
    </div>
  );
}
export function CardGrid({ items, base }: { items: Item[]; base?: string }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i, n) => {
        const href = i.href ?? (base ? `${base}/${slug(i.title)}` : undefined);
        const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[i.icon] ?? Icons.Circle;
        return (
          <li key={i.title} style={{ "--d": `${(n % 3) * 0.12}s` } as CSSProperties} className={`reveal card-c c${n % 6} group relative rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl`}>
            <span className="ic-c mb-4 inline-flex rounded-xl p-3 transition duration-300"><Icon aria-hidden size={22} /></span>
            {i.tag && <p className="mb-1 text-sm font-semibold text-teal-600">{i.tag}</p>}
            <h3 className="font-display text-xl font-semibold">{href ? <a href={href} className="after:absolute after:inset-0">{i.title}</a> : i.title}</h3>
            <p className="mt-2 text-slate-600">{i.text}</p>{i.points && <ul className="mt-4 space-y-2">{i.points.map((x) => <li key={x} className="flex items-center gap-2 text-sm"><Icons.CheckCircle2 aria-hidden size={18} className="shrink-0 text-cyan-400" />{x}</li>)}</ul>}{href && <span className="learn" aria-hidden>Learn more →</span>}
          </li>
        );
      })}
    </ul>
  );
}
export function Cta({ text = "Tell us what you want to build." }: { text?: string }) {
  return (
    <div className="hero-bg"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-12 md:flex-row md:items-center">
      <p className="font-display text-2xl font-bold">{text}</p><a href="/contact" className="btn btn-primary glow">Start a conversation</a></div></div>
  );
}

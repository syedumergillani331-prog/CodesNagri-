import VisitSection from "@/components/VisitSection";
import BlogPreview from "@/components/BlogPreview";
import Link from "next/link";
import { ArrowRight, Check, Code2, Smartphone, Sparkles, Cloud } from "lucide-react";
import { Section, CardGrid, Cta } from "@/components/Ui";
import Faq from "@/components/Faq";
import RotatingWord from "@/components/RotatingWord";
import { SERVICES, PROJECTS, COURSES, VALUES, PLANS, TESTIMONIALS } from "@/lib/data";
const TECH = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "AI and ML", "Cloud", "UI/UX"];
const TC = ["bg-indigo-500/20 text-indigo-200", "bg-teal-500/20 text-teal-200", "bg-pink-500/20 text-pink-200", "bg-amber-500/20 text-amber-200", "bg-sky-500/20 text-sky-200", "bg-violet-500/20 text-violet-200"];
const WHY = ["Clear scope and honest timelines", "Mobile-first, accessible design", "Fast, search-friendly pages", "Secure, maintainable code", "Support after launch"];
const STEPS = [["Discuss", "We learn your goals and deadline."], ["Design", "You review layouts before we code."], ["Build", "Regular previews you can try."], ["Launch", "Deployment, domain and support."]];
const CHIPS = [[Code2, "top-2 left-0", "bg-indigo-500"], [Smartphone, "top-24 right-0", "bg-pink-500"], [Sparkles, "bottom-16 left-4", "bg-amber-500"], [Cloud, "bottom-0 right-10", "bg-teal-500"]] as const;
export default function Home() {
  return (<>
    <div className="hero-bg">
      <span className="blob -left-16 top-10 h-64 w-64 bg-pink-500" /><span className="blob right-0 top-1/2 h-72 w-72 bg-cyan-400" style={{ animationDelay: "2s" }} /><span className="blob bottom-0 left-1/3 h-56 w-56 bg-amber-400" style={{ animationDelay: "4s" }} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-28 lg:grid-cols-2">
        <div className="hero-in">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm backdrop-blur"><span className="glow h-2 w-2 rounded-full bg-mint" />Software house · IT training · Products</p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">We build <RotatingWord words={["websites", "mobile apps", "AI tools", "online stores"]} /> that grow your business.</h1>
          <p className="mt-5 max-w-xl text-lg text-indigo-100">Design, development and training from one team, with clear communication at every step.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="btn btn-primary glow shine">Start a project <ArrowRight aria-hidden size={18} /></Link><Link href="/courses" className="btn btn-ghost">Explore IT courses</Link></div>
        </div>
        <div aria-hidden className="relative mx-auto h-80 w-full max-w-md">
          <div className="orbit absolute inset-6 rounded-full border border-dashed border-white/30" />
          <div className="floaty absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-[#080d1f]/80 p-5 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="mb-3 flex gap-2"><i className="h-3 w-3 rounded-full bg-pink-400" /><i className="h-3 w-3 rounded-full bg-amber-300" /><i className="h-3 w-3 rounded-full bg-mint" /></div>
            <p><span className="text-pink-300">const</span> idea = <span className="text-cyan-300">await</span> build();</p><p className="text-teal-300">// tested, fast, yours</p>
          </div>
          {CHIPS.map(([I, pos, bg], n) => <span key={n} style={{ animationDelay: `${n}s` }} className={`chip absolute ${pos} flex h-14 w-14 items-center justify-center rounded-2xl ${bg} text-white shadow-xl`}><I size={26} /></span>)}
        </div>
      </div>
    </div>
    <div className="overflow-hidden border-b border-slate-200 bg-[#0a1128] py-5" aria-hidden><div className="marquee">{[...TECH, ...TECH, ...TECH, ...TECH].map((t, i) => <span key={i} className={`mx-1.5 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold ${TC[i % 6]}`}>{t}</span>)}</div></div>
    <Section title="What we do" intro="From first sketch to launch and support."><CardGrid items={SERVICES} base="/services" /><Link href="/services" className="btn btn-solid mt-8">All services <ArrowRight aria-hidden size={18} /></Link></Section>
    <Section tone="white" title="Why choose us" intro="The standards we hold every project to.">
      <div className="grid gap-8 lg:grid-cols-2"><ul className="space-y-3">{WHY.map((w) => <li key={w} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#0b1330] p-4"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-brand text-white"><Check aria-hidden size={16} /></span>{w}</li>)}</ul><CardGrid items={VALUES} /></div>
    </Section>
    <Section title="Our process" intro="Four steps, with a check-in at each one.">
      <ol className="grid gap-5 md:grid-cols-4">{STEPS.map(([t, d], i) => <li key={t} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="acc font-display text-5xl font-bold">0{i + 1}</span><h3 className="mt-2 font-display text-xl font-semibold">{t}</h3><p className="mt-1 text-slate-600">{d}</p></li>)}</ol>
    </Section>
    <Section tone="white" title="Featured work" intro="Sample concepts that show our approach. Real client projects will be added with permission."><CardGrid items={PROJECTS} base="/portfolio" /></Section>
    <Section title="Learn IT skills" intro="Project-based courses for beginners and career changers."><CardGrid items={COURSES} base="/courses" /></Section>
    <Section tone="white" title="Care plans" intro="Simple monthly plans for keeping your site healthy.">
      <ul className="grid gap-5 md:grid-cols-3">{PLANS.map((p) => <li key={p.name} className="rounded-2xl border border-slate-200 bg-[#0b1330] p-6 transition hover:-translate-y-2 hover:shadow-xl"><h3 className="font-display text-xl font-semibold">{p.name}</h3><p className="mt-1 text-slate-600">{p.text}</p><p className="acc mt-3 text-2xl font-bold">{p.price ?? "Contact for price"}</p></li>)}</ul>
      <Link href="/pricing" className="btn btn-solid mt-8">See all plans <ArrowRight aria-hidden size={18} /></Link>
    </Section>
    {TESTIMONIALS.length > 0 && <Section title="Client feedback"><ul className="grid gap-5 md:grid-cols-2">{TESTIMONIALS.map((t) => <li key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6"><blockquote>“{t.quote}”</blockquote><p className="mt-3 font-semibold">{t.name}, {t.role}</p></li>)}</ul></Section>}
    <BlogPreview />
    <Section title="Frequently asked questions"><Faq /></Section>
    <VisitSection />
    <Cta text="Have an idea? Let’s talk about it." />
  </>);
}

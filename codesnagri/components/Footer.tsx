import Link from "next/link";
import { Facebook, Linkedin, Instagram, Github, Mail } from "lucide-react";
import { NAV, SERVICES, COURSES, SITE, slug } from "@/lib/data";
import { NAVICONS } from "./navicons";
const SOCIAL = [[Facebook, "Facebook", process.env.NEXT_PUBLIC_FACEBOOK], [Linkedin, "LinkedIn", process.env.NEXT_PUBLIC_LINKEDIN], [Instagram, "Instagram", process.env.NEXT_PUBLIC_INSTAGRAM], [Github, "GitHub", process.env.NEXT_PUBLIC_GITHUB]] as const;
const LEGAL = [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Refund Policy", "/refund-policy"], ["Cookie Policy", "/cookie-policy"]];
const H = "mb-4 font-display font-semibold text-white";
const L = "hover:text-cyan-300";
export default function Footer() {
  const addr = process.env.NEXT_PUBLIC_ADDRESS;
  return (
    <footer className="border-t border-white/10 bg-[#060a19] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1"><p className="acc font-display text-2xl font-bold">CodesNagri</p><p className="mt-3 text-sm">{SITE.tagline}</p>
          <div className="mt-4 flex gap-3">{SOCIAL.filter((s) => s[2]).map(([I, n, u]) => <a key={n} href={u} aria-label={n} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-2 transition hover:bg-cyan-500"><I size={18} /></a>)}
            {SITE.email && <a href={`mailto:${SITE.email}`} aria-label="Email us" className="rounded-full bg-white/10 p-2 transition hover:bg-cyan-500"><Mail size={18} /></a>}</div>
          {addr && <p className="mt-4 text-sm">{addr}</p>}</div>
        <nav aria-label="Quick links"><p className={H}>Quick links</p><ul className="space-y-2 text-sm">{[...NAV, { href: "/contact", label: "Contact" }].map((n) => { const I = NAVICONS[n.href]; return <li key={n.href}><Link className={`flex items-center gap-2 ${L}`} href={n.href}>{I && <I aria-hidden size={16} className="text-cyan-400" />}{n.label}</Link></li>; })}</ul></nav>
        <nav aria-label="Services"><p className={H}>Our services</p><ul className="space-y-2 text-sm">{SERVICES.map((s) => <li key={s.title}><Link className={L} href={`/services/${slug(s.title)}`}>{s.title}</Link></li>)}</ul></nav>
        <nav aria-label="Courses"><p className={H}>Learn</p><ul className="space-y-2 text-sm"><li><Link className={L} href="/courses">All courses</Link></li>{COURSES.map((c) => <li key={c.title}><Link className={L} href={`/courses/${slug(c.title)}`}>{c.title}</Link></li>)}</ul></nav>
        <nav aria-label="Support and legal"><p className={H}>Support and legal</p><ul className="space-y-2 text-sm"><li><Link className={L} href="/contact">Contact us</Link></li>{LEGAL.map(([n, h]) => <li key={h}><Link className={L} href={h}>{n}</Link></li>)}</ul></nav>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
    </footer>
  );
}

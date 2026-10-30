"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, SERVICES, slug } from "@/lib/data";
import { NAVICONS } from "./navicons";
import AuthButtons from "./AuthButtons";
const ALL = [...NAV, { href: "/contact", label: "Contact" }];
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  const on = (h: string) => path === h || (h !== "/" && path.startsWith(h + "/"));
  const cls = (h: string) => `rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/10 ${on(h) ? "text-cyan-300" : "text-white"}`;
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d1f]/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-2 focus:text-black">Skip to content</a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="acc font-display text-2xl font-bold">CodesNagri</Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => n.href === "/services" ? (
            <div key={n.href} className="group relative">
              <Link href={n.href} className={`${cls(n.href)} inline-flex items-center gap-1`}>{n.label}<ChevronDown aria-hidden size={14} /></Link>
              <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-2xl border border-white/10 bg-[#0b1330] p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {SERVICES.map((s) => <Link key={s.title} href={`/services/${slug(s.title)}`} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-cyan-300">{s.title}</Link>)}
                <Link href="/services" className="mt-1 block rounded-lg border-t border-white/10 px-3 py-2 text-sm font-semibold text-cyan-300">All services</Link>
              </div>
            </div>
          ) : <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className={cls(n.href)}>{n.label}</Link>)}
          <Link href="/contact" className={cls("/contact")}>Contact</Link>
          <AuthButtons />
        </nav>
        <button className="rounded-lg p-2 text-white lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={28} /> : <Menu size={28} />}</button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-[#080d1f] px-4 pb-6 pt-3 lg:hidden">
          <AuthButtons mobile />
          <ul className="space-y-1">{ALL.map((n) => {
            const I = NAVICONS[n.href];
            const row = `flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium ${on(n.href) ? "bg-cyan-500/15 text-cyan-300" : "text-slate-200 hover:bg-white/5"}`;
            if (n.href === "/services") return (
              <li key={n.href}><details className="group"><summary className={`${row} cursor-pointer list-none`}>{I && <I aria-hidden size={20} className="text-cyan-400" />}<span className="flex-1">Services</span><ChevronDown aria-hidden size={18} className="transition group-open:rotate-180" /></summary>
                <ul className="ml-9 mt-1 space-y-1 border-l border-white/10 pl-3">{SERVICES.map((s) => <li key={s.title}><Link href={`/services/${slug(s.title)}`} className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-cyan-300">{s.title}</Link></li>)}<li><Link href="/services" className="block px-3 py-2 text-sm font-semibold text-cyan-300">All services</Link></li></ul></details></li>);
            return <li key={n.href}><Link href={n.href} className={row}>{I && <I aria-hidden size={20} className="text-cyan-400" />}{n.label}</Link></li>;
          })}</ul>
        </nav>
      )}
    </header>
  );
}

import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { Section } from "@/components/Ui";
import { SITE } from "@/lib/data";
export default function VisitSection() {
  const addr = process.env.NEXT_PUBLIC_ADDRESS;
  const rows = [[MapPin, "Address", addr], [Clock, "Hours", process.env.NEXT_PUBLIC_HOURS], [Phone, "Phone", process.env.NEXT_PUBLIC_PHONE], [Mail, "Email", SITE.email]] as const;
  const shown = rows.filter((r) => r[2]);
  if (!shown.length) return null;
  return (
    <Section tone="white" title="Visit us" intro="Find us or get in touch.">
      <div className="grid gap-4 sm:grid-cols-2">{shown.map(([I, t, v]) => (
        <div key={t} className="flex gap-4 rounded-2xl border border-slate-200 bg-[#0b1330] p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white"><I aria-hidden size={22} /></span>
          <div><p className="font-display font-semibold">{t}</p><p className="text-slate-600">{v}</p></div></div>))}</div>
      {addr && <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-6"><Navigation aria-hidden size={18} />Get directions</a>}
    </Section>
  );
}

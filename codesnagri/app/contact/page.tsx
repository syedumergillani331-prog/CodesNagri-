import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { PageHero, Section } from "@/components/Ui";
import { SITE } from "@/lib/data";
export const metadata: Metadata = { title: "Contact", description: "Tell CodesNagri about your project, course or product enquiry.", alternates: { canonical: "/contact" } };
export default function Page() {
  const info = [
    [Mail, "Email us", SITE.email, SITE.email && `mailto:${SITE.email}`],
    [Phone, "Call us", process.env.NEXT_PUBLIC_PHONE, process.env.NEXT_PUBLIC_PHONE && `tel:${process.env.NEXT_PUBLIC_PHONE.replace(/[^\d+]/g, "")}`],
    [Clock, "Business hours", process.env.NEXT_PUBLIC_HOURS, undefined],
    [MapPin, "Visit us", process.env.NEXT_PUBLIC_ADDRESS, undefined],
  ] as const;
  const shown = info.filter((i) => i[2]);
  return (<><PageHero title="Contact us" text="Share your goals, budget and timeline. We will reply by email or phone." />
    <Section>
      {shown.length > 0 && <ul className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{shown.map(([I, t, v, h]) => (
        <li key={t} className="rounded-2xl border border-slate-200 bg-white p-5"><span className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-3 text-white"><I aria-hidden size={20} /></span>
          <p className="font-display font-semibold">{t}</p>{h ? <a href={h} className="text-cyan-400">{v}</a> : <p className="text-slate-600">{v}</p>}</li>))}</ul>}
      <div className="mx-auto max-w-2xl"><ContactForm /></div>
    </Section>
    <Section tone="white" title="Common questions"><Faq /></Section></>);
}

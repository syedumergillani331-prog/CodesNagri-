import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero, Section, Cta } from "@/components/Ui";
type P = { title: string; text: string; tag?: string; price?: string; image?: string; back: string; backLabel: string };
const STEPS = ["Tell us what you need through the contact form.", "We reply with questions, a plan and a quote.", "We agree the details and get started."];
export default function Detail({ title, text, tag, price, image, back, backLabel }: P) {
  return (<>
    <PageHero title={title} text={text} />
    <Section>
      <Link href={back} className="mb-8 inline-flex items-center gap-2 font-semibold text-cyan-400"><ArrowLeft aria-hidden size={18} />{backLabel}</Link>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {image && <Image src={image} alt={title} width={1200} height={700} className="mb-8 rounded-2xl" />}
          <h2 className="font-display text-2xl font-bold">How it works</h2>
          <ol className="mt-4 space-y-3">{STEPS.map((s, i) => <li key={s} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>{s}</li>)}</ol>
        </div>
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          {tag && <p className="mb-2 text-sm font-semibold text-teal-500">{tag}</p>}
          <p className="acc text-2xl font-bold">{price ?? "Contact for price"}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-600"><Check aria-hidden size={16} className="text-mint" />No obligation to ask</p>
          <Link href="/contact" className="btn btn-solid mt-5 w-full">Request a quote</Link>
        </aside>
      </div>
    </Section>
    <Cta />
  </>);
}

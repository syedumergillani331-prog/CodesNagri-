import { PageHero, Section } from "@/components/Ui";
import { LEGAL } from "@/lib/legal";
export default function LegalPage({ slug }: { slug: string }) {
  const d = LEGAL[slug];
  return (<><PageHero title={d.title} text={d.intro} />
    <Section><div className="mx-auto max-w-3xl space-y-8">{d.sections.map((s) => (
      <section key={s.h}><h2 className="font-display text-xl font-bold">{s.h}</h2>{s.p.map((t) => <p key={t} className="mt-2 text-slate-600">{t}</p>)}</section>))}</div></Section></>);
}

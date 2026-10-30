import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, Cta } from "@/components/Ui";
import { POSTS } from "@/lib/posts";
export const metadata: Metadata = { title: "Blog", description: "Articles and guides from CodesNagri.", alternates: { canonical: "/blog" } };
export default function Page() {
  return (<><PageHero title="Blog" text="Articles and guides from our team." />
    <Section>{POSTS.length === 0 ? <p className="rounded-2xl border border-dashed border-slate-200 p-8 text-slate-600">Our first articles are on the way. In the meantime, <Link href="/contact" className="text-cyan-400 underline">send us a question</Link>.</p> :
      <ul className="grid gap-5 md:grid-cols-3">{POSTS.map((p) => <li key={p.slug} className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl"><p className="text-sm text-teal-500">{p.date}</p><h2 className="mt-1 font-display text-xl font-semibold"><Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link></h2><p className="mt-2 text-slate-600">{p.excerpt}</p></li>)}</ul>}
    </Section><Cta /></>);
}

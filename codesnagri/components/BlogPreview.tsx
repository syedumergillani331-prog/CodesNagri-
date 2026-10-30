import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Ui";
import { POSTS } from "@/lib/posts";
export default function BlogPreview() {
  if (!POSTS.length) return null;
  return (
    <Section title="From our blog" intro="Notes and guides from our team.">
      <ul className="grid gap-5 md:grid-cols-3">{POSTS.slice(0, 3).map((p) => (
        <li key={p.slug} className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl">
          <p className="text-sm text-teal-500">{p.date}</p>
          <h3 className="mt-1 font-display text-xl font-semibold"><Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link></h3>
          <p className="mt-2 text-slate-600">{p.excerpt}</p>
          <span className="learn">Read more →</span></li>))}</ul>
      <Link href="/blog" className="btn btn-solid mt-8">View all articles <ArrowRight aria-hidden size={18} /></Link>
    </Section>
  );
}

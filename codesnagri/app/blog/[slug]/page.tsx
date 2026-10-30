import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section } from "@/components/Ui";
import { POSTS } from "@/lib/posts";
export function generateStaticParams() { return POSTS.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const p = POSTS.find((x) => x.slug === params.slug); return { title: p?.title ?? "Not found", description: p?.excerpt }; }
export default function Page({ params }: { params: { slug: string } }) {
  const p = POSTS.find((x) => x.slug === params.slug); if (!p) notFound();
  return (<><PageHero title={p.title} text={p.date} /><Section><article className="mx-auto max-w-3xl space-y-4">{p.body.map((t) => <p key={t} className="text-lg text-slate-600">{t}</p>)}<Link href="/blog" className="text-cyan-400 underline">All articles</Link></article></Section></>);
}

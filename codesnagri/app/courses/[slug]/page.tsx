import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail";
import { COURSES, slug } from "@/lib/data";
const find = (s: string) => COURSES.find((x) => slug(x.title) === s);
export function generateStaticParams() { return COURSES.map((x) => ({ slug: slug(x.title) })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const i = find(params.slug); return { title: i?.title ?? "Not found", description: i?.text }; }
export default function Page({ params }: { params: { slug: string } }) {
  const i = find(params.slug); if (!i) notFound();
  return <Detail title={i.title} text={i.text} tag={i.tag} back="/courses" backLabel="All courses" />;
}

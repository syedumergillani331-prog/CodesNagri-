import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES, slug } from "@/lib/data";
import { DETAILS } from "@/lib/services";
const find = (s: string) => SERVICES.find((x) => slug(x.title) === s);
export function generateStaticParams() { return SERVICES.map((x) => ({ slug: slug(x.title) })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const i = find(params.slug); return { title: i?.title ?? "Not found", description: i?.text }; }
export default function Page({ params }: { params: { slug: string } }) {
  const i = find(params.slug); if (!i) notFound();
  return <ServiceDetail title={i.title} text={i.text} d={DETAILS[i.title]} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail";
import { slug } from "@/lib/data";
import { getProducts } from "@/lib/db";
export const revalidate = 60;
const find = async (s: string) => (await getProducts()).find((x) => slug(x.name) === s);
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> { const i = await find(params.slug); return { title: i?.name ?? "Not found", description: i?.text }; }
export default async function Page({ params }: { params: { slug: string } }) {
  const i = await find(params.slug); if (!i) notFound();
  return <Detail title={i.name} text={i.text} tag={i.tag} price={i.price} image={i.image} back="/products" backLabel="All products" />;
}

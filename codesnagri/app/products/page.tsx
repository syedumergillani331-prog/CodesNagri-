import type { Metadata } from "next";
import { PageHero, Section, Cta } from "@/components/Ui";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/db";
export const metadata: Metadata = { title: "Products", description: "Software and hardware products from CodesNagri.", alternates: { canonical: "/products" } };
export const revalidate = 60;
export default async function Page() {
  const items = await getProducts();
  return (<><PageHero title="Products" text="Software and hardware products from CodesNagri." />
    <Section><ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((p) => <ProductCard key={p.name} p={p} />)}</ul></Section><Cta /></>);
}

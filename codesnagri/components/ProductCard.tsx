import Image from "next/image";
import Link from "next/link";
import { Package } from "lucide-react";
import { slug } from "@/lib/data";
export type Product = { name: string; text: string; price?: string; image?: string; tag?: string };
export default function ProductCard({ p }: { p: Product }) {
  return (
    <li className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-brand to-mint">
        {p.image ? <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" /> : <Package aria-hidden className="absolute inset-0 m-auto text-white/80" size={48} />}
        {p.tag && <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">{p.tag}</span>}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold"><Link href={`/products/${slug(p.name)}`} className="after:absolute after:inset-0">{p.name}</Link></h3>
        <p className="mt-2 text-slate-600">{p.text}</p>
        <p className="acc mt-3 text-2xl font-bold">{p.price ?? "Contact for price"}</p>
        <span className="btn btn-solid mt-4 w-full">View details</span>
      </div>
    </li>
  );
}

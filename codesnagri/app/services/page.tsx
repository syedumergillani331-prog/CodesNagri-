import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Cta } from "@/components/Ui";
import TechGrid from "@/components/TechGrid";
import { SERVICES } from "@/lib/data";
export const metadata: Metadata = { title: "Services", description: "Web, mobile, AI and cloud services delivered with clear scope and regular updates.", alternates: { canonical: "/services" } };
export default function Page() {
  return (<><PageHero title="Services" text="Web, mobile, AI and cloud services delivered with clear scope and regular updates." /><Section><CardGrid items={SERVICES} base="/services" /></Section><Section tone="white" title="Technologies we use"><TechGrid /></Section><Cta /></>);
}

import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Cta } from "@/components/Ui";
import { PROJECTS } from "@/lib/data";
export const metadata: Metadata = { title: "Portfolio", description: "Sample concepts showing how we approach real problems. Client case studies will be added with permission.", alternates: { canonical: "/portfolio" } };
export default function Page() {
  return (<><PageHero title="Portfolio" text="Sample concepts showing how we approach real problems. Client case studies will be added with permission." /><Section><CardGrid items={PROJECTS} base="/portfolio" /></Section><Cta /></>);
}

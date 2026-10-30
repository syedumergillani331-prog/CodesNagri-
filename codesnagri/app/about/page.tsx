import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Cta } from "@/components/Ui";
import Faq from "@/components/Faq";
import { VALUES } from "@/lib/data";
export const metadata: Metadata = { title: "About Us", description: "Learn how CodesNagri builds software and teaches technology.", alternates: { canonical: "/about" } };
export default function Page() {
  return (<><PageHero title="About CodesNagri" text="We are a software house that also trains people and offers technology products." />
    <Section title="What we believe"><CardGrid items={VALUES} /></Section>
    <Section tone="white" title="Common questions"><Faq /></Section><Cta /></>);
}

import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
export const metadata: Metadata = { title: LEGAL["privacy-policy"].title, description: LEGAL["privacy-policy"].intro };
export default function Page() { return <LegalPage slug="privacy-policy" />; }

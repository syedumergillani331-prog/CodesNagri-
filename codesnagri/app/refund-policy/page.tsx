import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
export const metadata: Metadata = { title: LEGAL["refund-policy"].title, description: LEGAL["refund-policy"].intro };
export default function Page() { return <LegalPage slug="refund-policy" />; }

import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
export const metadata: Metadata = { title: LEGAL["cookie-policy"].title, description: LEGAL["cookie-policy"].intro };
export default function Page() { return <LegalPage slug="cookie-policy" />; }

import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
export const metadata: Metadata = { title: LEGAL["terms-of-service"].title, description: LEGAL["terms-of-service"].intro };
export default function Page() { return <LegalPage slug="terms-of-service" />; }

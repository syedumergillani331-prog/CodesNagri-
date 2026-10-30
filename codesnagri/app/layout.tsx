import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { SITE } from "@/lib/data";
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "CodesNagri | Software house, IT courses and products", template: "%s | CodesNagri" },
  description: "CodesNagri builds websites, apps and AI integrations, teaches IT courses and offers technology products.",
  openGraph: { title: "CodesNagri", description: SITE.tagline, type: "website", siteName: "CodesNagri" },
};
export const viewport: Viewport = { themeColor: "#0E1330", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body><RevealObserver /><Header /><main id="main">{children}</main><Footer /></body>
    </html>
  );
}

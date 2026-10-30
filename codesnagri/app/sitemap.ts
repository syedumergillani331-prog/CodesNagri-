import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/about", "/team", "/portfolio", "/courses", "/products", "/pricing", "/blog", "/contact", "/privacy-policy", "/terms-of-service", "/refund-policy", "/cookie-policy"].map((p) => ({ url: SITE.url + p, lastModified: new Date() }));
}

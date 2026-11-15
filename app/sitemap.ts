import type { MetadataRoute } from "next";

const siteUrl = "https://midasmedia.co.bw";

// The list of pages Google should find. Add new pages here.
const pages = ["", "/about", "/services", "/work", "/contact", "/brand-health-check"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

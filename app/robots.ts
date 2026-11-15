import type { MetadataRoute } from "next";

// Tells search engines they can visit every page, and where the sitemap is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://midasmedia.co.bw/sitemap.xml",
  };
}

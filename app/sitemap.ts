import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { sectors, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/sectors",
    "/approach",
    "/portfolio",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  const now = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...sectors.map((sector) => ({
      url: `${site.url}/sectors/${sector.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insights.map((insight) => ({
      url: `${site.url}/insights/${insight.slug}`,
      lastModified: new Date(insight.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://olivergilcher.com";
  const primaryRoutes = ["", "/work", "/experience", "/stack", "/contact"];
  return [
    ...primaryRoutes.map((route, index) => ({
      url: `${base}${route}`,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.85,
    })),
    ...caseStudies.map((study) => ({
      url: `${base}/work/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

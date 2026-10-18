import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";

// No lastModified: the project data has no reliable update dates.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL("/", siteUrl).href },
    { url: new URL("/projects", siteUrl).href },
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteUrl).href,
    })),
  ];
}

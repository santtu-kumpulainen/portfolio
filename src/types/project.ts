import type { ExternalLink } from "@/types/common";

export type ProjectType = "client" | "school" | "personal";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectChallenge = {
  problem: string;
  solution?: string;
};

// Case study content for a future /projects/[slug] page.
// Every field is optional: leave it out when the source notes do not cover it.
export type ProjectCaseStudy = {
  overview?: string;
  built?: string[];
  architecture?: string;
  database?: string[];
  security?: string[];
  deployment?: string[];
  challenges?: ProjectChallenge[];
  learned?: string[];
  liked?: string[];
  differently?: string[];
  demonstrates?: string[];
  result?: string;
  images?: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  period: string;
  // Optional because not every project source documents a role or status.
  role?: string;
  status?: string;
  featured: boolean;
  // Compact content shown on the Home page.
  summary: string;
  technologies: string[];
  highlights: string[];
  links: ExternalLink[];
  caseStudy?: ProjectCaseStudy;
};

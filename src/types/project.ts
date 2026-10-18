import type { ExternalLink } from "@/types/common";

export type ProjectType = "client" | "school" | "school-exercise" | "personal";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  // Phone screenshots keep a portrait frame instead of the 16:10 crop.
  device?: "mobile";
};

// Diagrams keep their own aspect ratio instead of being cropped like photos.
export type ProjectDiagram = ProjectImage & {
  width: number;
  height: number;
};

export type ProjectChallenge = {
  problem: string;
  solution?: string;
  // The solution text then describes the investigation so far, not a fix.
  unresolved?: boolean;
};

// Case study content for a future /projects/[slug] page.
// Every field is optional: leave it out when the source notes do not cover it.
export type ProjectCaseStudy = {
  overview?: string;
  problem?: string;
  requirements?: string[];
  built?: string[];
  technologyChoices?: string[];
  architecture?: string;
  architectureDiagram?: ProjectDiagram;
  database?: string[];
  databaseDiagram?: ProjectDiagram;
  // Used instead of `built` when the code was not written mainly by me, so the
  // heading does not overstate authorship; `workflow` explains how it was made.
  implemented?: string[];
  // Infrastructure projects: key components, kept generic and free of private details.
  infrastructure?: string[];
  workflow?: string[];
  security?: string[];
  securityGaps?: string[];
  deployment?: string[];
  challenges?: ProjectChallenge[];
  // Challenges and lessons in one section, for projects where they overlap.
  challengesAndLessons?: ProjectChallenge[];
  learned?: string[];
  liked?: string[];
  differently?: string[];
  demonstrates?: string[];
  planned?: string[];
  result?: string;
  // Current state of an unfinished project and what comes next.
  status?: string;
  images?: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  period: string;
  // Groups the project on the /projects timeline; `period` is the display text.
  year: number | "ongoing";
  // Optional because not every project source documents a role or status.
  role?: string;
  status?: string;
  featured: boolean;
  // Compact content shown on the Home page.
  summary: string;
  // Cover image for the Home page; the case study gallery uses caseStudy.images.
  image?: ProjectImage;
  technologies: string[];
  highlights: string[];
  links: ExternalLink[];
  caseStudy?: ProjectCaseStudy;
};

// Smaller projects listed on the Home page without a case study page.
export type OtherProject = Pick<
  Project,
  "slug" | "title" | "type" | "period" | "year" | "summary" | "technologies" | "links"
>;

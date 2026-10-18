import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectTimeline from "@/components/sections/ProjectTimeline";
import { alt as shareImageAlt, size as shareImageSize } from "@/app/opengraph-image";
import { siteName } from "@/data/site";

const title = `Projects | ${siteName}`;
const description =
  "Client, school and personal projects, with case studies covering what was built, how it works and what remains open.";
const images = [{ url: "/opengraph-image", ...shareImageSize, alt: shareImageAlt }];

// Nested openGraph and twitter objects replace the root ones, including the
// file-based share image, so the shared fields are repeated here.
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    siteName,
    title,
    description,
    locale: "en",
    images,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <section aria-labelledby="projects-heading" className="py-section">
          <div className="mx-auto max-w-content px-page">
            <h1
              id="projects-heading"
              className="text-4xl font-semibold tracking-tight text-text md:text-5xl"
            >
              Projects
            </h1>

            <p className="mt-6 max-w-measure text-base leading-relaxed text-text-muted md:text-lg">
              Client work, school projects and personal projects, grouped by
              year. Each case study explains what was built, how it works and,
              for unfinished projects, what is still open.
            </p>

            <ProjectTimeline />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OtherProjects from "@/components/sections/OtherProjects";
import { alt as shareImageAlt, size as shareImageSize } from "@/app/opengraph-image";
import { projects, projectTypeLabels } from "@/data/projects";
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

const caseStudyProjects = projects.filter((project) => project.caseStudy);

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
              Client work, school projects and personal projects. Each case
              study explains what was built, how it works and, for unfinished
              projects, what is still open.
            </p>

            <h2 className="mt-16 text-2xl font-semibold tracking-tight text-text md:text-3xl">
              Case studies
            </h2>

            <ul className="mt-8">
              {caseStudyProjects.map((project) => {
                const meta = [
                  projectTypeLabels[project.type],
                  project.period,
                  project.status,
                ].filter(Boolean);

                return (
                  <li
                    key={project.slug}
                    className="border-t border-border-subtle py-8"
                  >
                    <article
                      aria-labelledby={`project-${project.slug}`}
                      className="grid gap-4 md:grid-cols-12 md:gap-10"
                    >
                      <div className="md:col-span-7">
                        <p className="flex flex-wrap gap-x-3 text-sm text-text-subtle">
                          {meta.map((item, index) => (
                            <span
                              key={item}
                              className={
                                index > 0
                                  ? "flex gap-3 before:text-border before:content-['/']"
                                  : undefined
                              }
                            >
                              {item}
                            </span>
                          ))}
                        </p>

                        <h3
                          id={`project-${project.slug}`}
                          className="mt-2 text-xl font-semibold tracking-tight text-text md:text-2xl"
                        >
                          {project.title}
                        </h3>

                        <p className="mt-3 max-w-measure leading-relaxed text-text-muted">
                          {project.summary}
                        </p>
                      </div>

                      <div className="md:col-span-5">
                        <ul
                          aria-label="Technologies"
                          className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-subtle md:pt-7"
                        >
                          {project.technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                          ))}
                        </ul>

                        <ul className="mt-2 flex flex-wrap gap-5 text-sm">
                          <li>
                            <Link
                              href={`/projects/${project.slug}`}
                              className="inline-flex min-h-11 items-center gap-1 text-accent transition-colors duration-fast hover:text-accent-hover"
                            >
                              Case study
                              <span className="sr-only">: {project.title}</span>
                              <span aria-hidden="true">→</span>
                            </Link>
                          </li>
                          {project.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                className="inline-flex min-h-11 items-center gap-1 text-text transition-colors duration-fast hover:text-accent"
                              >
                                {link.label}
                                <span className="sr-only">: {project.title}</span>
                                <span aria-hidden="true">↗</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <OtherProjects />
      </main>

      <Footer />
    </>
  );
}

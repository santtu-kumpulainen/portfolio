import Image from "next/image";
import Link from "next/link";

import { featuredProjects, projectTypeLabels } from "@/data/projects";
import type { Project } from "@/types/project";

const visualSizes = "(min-width: 1120px) 620px, (min-width: 1024px) 58vw, 100vw";

// Real project material first: the cover screenshot, else the ER diagram from
// the case study, else a typographic panel. No fake screenshots.
function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={visualSizes}
        className="object-cover object-top"
      />
    );
  }

  const diagram = project.caseStudy?.databaseDiagram;
  if (diagram) {
    return (
      <div className="absolute inset-0 bg-diagram p-6">
        <div className="relative size-full">
          <Image
            src={diagram.src}
            alt={diagram.alt}
            fill
            sizes={visualSizes}
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  // Repeats the heading, so it is hidden from assistive tech.
  return (
    <div aria-hidden="true" className="absolute inset-0 bg-surface">
      <Image
        src="/artwork/hero-topography.svg"
        alt=""
        fill
        sizes={visualSizes}
        className="object-cover object-right opacity-80"
      />
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <p className="font-mono text-xs tracking-wider text-text-subtle uppercase">
          {projectTypeLabels[project.type]}
        </p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-text-muted md:text-3xl">
          {project.title}
        </p>
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const hasLinks = Boolean(project.caseStudy) || project.links.length > 0;

  return (
    <div>
      <div className="overflow-hidden rounded-md border border-border bg-surface-elevated">
        {/* 3:2 keeps the 16:10 screenshots almost whole (only side margins are cropped). */}
        <div className="relative aspect-[3/2] overflow-hidden">
          <ProjectMedia project={project} />
        </div>

        {/* Links sit on their own solid bar under the image, so they stay readable
            whatever the screenshot looks like, and never depend on hover. */}
        {hasLinks && (
          <ul className="flex flex-wrap gap-2 border-t border-border p-3">
            {project.caseStudy && (
              <li>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-sm bg-text px-4 text-sm font-medium text-background transition-colors duration-fast hover:bg-white"
                >
                  Case study
                  <span className="sr-only">: {project.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            )}
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-sm border border-text-subtle px-4 text-sm font-medium text-text transition-colors duration-fast hover:border-text hover:bg-surface"
                >
                  {link.label}
                  <span className="sr-only">: {project.title}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {project.image?.caption && (
        <p className="mt-3 text-sm text-text-subtle">{project.image.caption}</p>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border py-section"
    >
      <div className="mx-auto max-w-content px-page">
        <p className="mb-3 font-mono text-sm text-accent">Projects</p>

        <h2
          id="projects-heading"
          className="text-3xl font-semibold tracking-tight text-text md:text-4xl"
        >
          Featured projects
        </h2>

        <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
          Client websites running in production, a database-driven school
          project and the portfolio you are reading now.
        </p>

        <ol className="mt-12 md:mt-16">
          {featuredProjects.map((project, index) => {
            const meta = [
              { term: "Type", value: projectTypeLabels[project.type] },
              { term: "Period", value: project.period },
              { term: "Role", value: project.role },
              { term: "Status", value: project.status },
            ].filter((item) => item.value);

            return (
              <li
                key={project.slug}
                className="border-t border-border-subtle py-14 md:py-20"
              >
                <article
                  aria-labelledby={`project-${project.slug}`}
                  className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16"
                >
                  {/* Text comes first in the DOM for reading order; the visual is reordered. */}
                  <div className="lg:col-span-5">
                    <p
                      aria-hidden="true"
                      className="font-mono text-sm text-text-subtle"
                    >
                      {String(index + 1).padStart(2, "0")}
                      <span className="text-border"> / </span>
                      {String(featuredProjects.length).padStart(2, "0")}
                    </p>

                    <h3
                      id={`project-${project.slug}`}
                      className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl"
                    >
                      {project.title}
                    </h3>

                    <dl className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-text-subtle">
                      {meta.map((item, metaIndex) => (
                        <div
                          key={item.term}
                          className={
                            metaIndex > 0
                              ? "flex gap-3 before:text-border before:content-['/']"
                              : "flex"
                          }
                        >
                          <dt className="sr-only">{item.term}</dt>
                          <dd
                            className={
                              item.term === "Type" && project.type === "client"
                                ? "text-accent-hover"
                                : undefined
                            }
                          >
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-5 leading-relaxed text-text-muted md:text-lg">
                      {project.summary}
                    </p>

                    <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted marker:text-text-subtle">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    <ul
                      aria-label="Technologies"
                      className="mt-6 flex flex-wrap gap-x-2 gap-y-1 border-t border-border-subtle pt-4 font-mono text-sm tracking-wide text-text uppercase"
                    >
                      {project.technologies.map((technology, techIndex) => (
                        // Separator after each item, so a wrapped line never starts with one.
                        <li key={technology} className="flex gap-2">
                          {technology}
                          {techIndex < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-text-subtle">
                              ·
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={
                      index % 2 === 0
                        ? "order-first lg:col-span-7"
                        : "order-first lg:order-last lg:col-span-7"
                    }
                  >
                    <ProjectVisual project={project} />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-1 text-sm text-accent transition-colors duration-fast hover:text-accent-hover"
        >
          All projects
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

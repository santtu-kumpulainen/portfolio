import Image from "next/image";

import { featuredProjects } from "@/data/projects";
import type { Project, ProjectType } from "@/types/project";

const projectTypeLabels: Record<ProjectType, string> = {
  client: "Client project",
  school: "School project",
  personal: "Personal project",
};

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <figure>
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        {project.image.caption && (
          <figcaption className="mt-3 text-sm text-text-subtle">
            {project.image.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Typographic placeholder until real project material exists. It repeats the
  // heading, so it is hidden from assistive tech and avoids any fake screenshot UI.
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[16/10] flex-col justify-between rounded-md border border-border-subtle bg-surface p-6 md:p-8"
    >
      <span className="h-px w-8 bg-accent" />
      <div>
        <p className="text-sm text-text-subtle">{projectTypeLabels[project.type]}</p>
        <p className="mt-2 text-xl font-semibold tracking-tight text-text-muted md:text-2xl">
          {project.title}
        </p>
      </div>
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
                className="border-t border-border-subtle py-12 md:py-16"
              >
                <article
                  aria-labelledby={`project-${project.slug}`}
                  className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12"
                >
                  {/* Text comes first in the DOM for reading order; the visual is reordered. */}
                  <div className="md:col-span-7">
                    <dl className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-text-subtle">
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
                                ? "text-accent"
                                : undefined
                            }
                          >
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <h3
                      id={`project-${project.slug}`}
                      className="mt-3 text-2xl font-semibold tracking-tight text-text md:text-3xl"
                    >
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-measure leading-relaxed text-text-muted">
                      {project.summary}
                    </p>

                    <ul className="mt-5 max-w-measure list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted marker:text-text-subtle">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    <ul
                      aria-label="Technologies"
                      className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-subtle"
                    >
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>

                    {project.links.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-5 text-sm">
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
                    )}
                  </div>

                  <div
                    className={
                      index % 2 === 0
                        ? "order-first md:col-span-5"
                        : "order-first md:order-last md:col-span-5"
                    }
                  >
                    <ProjectVisual project={project} />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

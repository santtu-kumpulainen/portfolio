import { featuredProjects } from "@/data/projects";
import type { ProjectType } from "@/types/project";

const projectTypeLabels: Record<ProjectType, string> = {
  client: "Client project",
  school: "School project",
  personal: "Personal project",
};

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
          {featuredProjects.map((project) => (
            <li
              key={project.slug}
              className="border-t border-border-subtle py-10 md:py-12"
            >
              <article
                aria-labelledby={`project-${project.slug}`}
                className="grid gap-6 md:grid-cols-12 md:gap-10"
              >
                {/* Project meta */}
                <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:col-span-4 md:flex-col md:gap-3">
                  <div>
                    <dt className="sr-only">Type</dt>
                    <dd
                      className={
                        project.type === "client"
                          ? "font-mono text-accent"
                          : "font-mono text-text-muted"
                      }
                    >
                      {projectTypeLabels[project.type]}
                    </dd>
                  </div>

                  <div>
                    <dt className="sr-only">Period</dt>
                    <dd className="text-text-subtle">{project.period}</dd>
                  </div>

                  {project.role && (
                    <div>
                      <dt className="sr-only">Role</dt>
                      <dd className="text-text-subtle">{project.role}</dd>
                    </div>
                  )}

                  {project.status && (
                    <div>
                      <dt className="sr-only">Status</dt>
                      <dd className="text-text-subtle">{project.status}</dd>
                    </div>
                  )}
                </dl>

                {/* Project content */}
                <div className="md:col-span-8">
                  <h3
                    id={`project-${project.slug}`}
                    className="text-xl font-semibold tracking-tight text-text md:text-2xl"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-measure leading-relaxed text-text-muted">
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
                    <ul className="mt-6 flex flex-wrap gap-5 text-sm">
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
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

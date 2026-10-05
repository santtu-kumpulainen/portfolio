import { otherProjects, projectTypeLabels } from "@/data/projects";

export default function OtherProjects() {
  return (
    <section
      id="other-projects"
      aria-labelledby="other-projects-heading"
      className="border-t border-border py-section"
    >
      <div className="mx-auto max-w-content px-page">
        <h2
          id="other-projects-heading"
          className="text-2xl font-semibold tracking-tight text-text md:text-3xl"
        >
          Other projects
        </h2>

        <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
          Smaller school and personal projects without a full case study.
        </p>

        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {otherProjects.map((project) => (
            <li key={project.slug} className="border-t border-border-subtle py-8">
              <article aria-labelledby={`other-project-${project.slug}`}>
                <p className="flex flex-wrap gap-x-3 text-sm text-text-subtle">
                  <span>{projectTypeLabels[project.type]}</span>
                  <span aria-hidden="true" className="text-border">
                    /
                  </span>
                  <span>{project.period}</span>
                </p>

                <h3
                  id={`other-project-${project.slug}`}
                  className="mt-2 text-xl font-semibold tracking-tight text-text"
                >
                  {project.title}
                </h3>

                <p className="mt-3 max-w-measure text-sm leading-relaxed text-text-muted">
                  {project.summary}
                </p>

                <ul
                  aria-label="Technologies"
                  className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-subtle"
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <ul className="mt-2 flex flex-wrap gap-5 text-sm">
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
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

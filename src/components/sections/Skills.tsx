import { skillGroups } from "@/data/skills";
import { otherProjects, projects } from "@/data/projects";

type EvidenceLink = { label: string; href: string };

// Resolves evidence slugs to links. Throws so a typo fails the build instead of
// rendering a skill with missing evidence.
function resolveEvidence(slug: string): EvidenceLink {
  const project = projects.find((item) => item.slug === slug);
  // Short name before any subtitle ("TEO: Work-Based ..." becomes "TEO") so the
  // narrow columns stay readable.
  if (project) return { label: project.title.split(":")[0], href: `/projects/${project.slug}` };

  const other = otherProjects.find((item) => item.slug === slug);
  if (other) return { label: other.title, href: "#other-projects" };

  throw new Error(`Unknown skill evidence: ${slug}`);
}

export default function Skills() {
  return (
    // Lighter slate band separates Skills from the sections around it.
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border bg-band py-section text-text"
    >
      <div className="mx-auto max-w-content px-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h2
            id="skills-heading"
            className="text-4xl font-semibold tracking-tight md:text-5xl lg:col-span-5"
          >
            Skills
          </h2>

          <p className="max-w-measure text-base leading-relaxed text-text-muted md:text-lg lg:col-span-7">
            Technologies I have used in client, school and personal projects.
            Each skill links to the work where it was used.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-8">
          {skillGroups.map((group, index) => (
            <div key={group.title} className="border-t-2 border-text-muted pt-5">
              <p
                aria-hidden="true"
                className="font-mono text-5xl font-light tracking-tight text-accent-hover"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{group.title}</h3>

              <dl className="mt-6">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="border-t border-border py-3">
                    <dt className="text-base font-medium">{skill.name}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-text-muted">
                      <span className="sr-only">Used in: </span>
                      {/* Comma follows the link so a wrapped line never starts with one. */}
                      {skill.evidence.map(resolveEvidence).map((link, linkIndex, links) => (
                        <span key={link.label}>
                          <a
                            href={link.href}
                            className="inline-block py-1 underline decoration-text-subtle underline-offset-4 transition-colors duration-fast hover:text-text hover:decoration-text"
                          >
                            {link.label}
                          </a>
                          {linkIndex < links.length - 1 && ", "}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { currentFocus, skillGroups } from "@/data/skills";
import { otherProjects, projects } from "@/data/projects";

type EvidenceLink = { label: string; href: string };

// Resolves evidence slugs to links. Throws so a typo fails the build instead of
// rendering a skill with missing evidence.
function resolveEvidence(slug: string): EvidenceLink {
  if (slug === "homelab") return { label: "Homelab", href: "#homelab" };

  const project = projects.find((item) => item.slug === slug);
  if (project) return { label: project.title, href: `/projects/${project.slug}` };

  const other = otherProjects.find((item) => item.slug === slug);
  if (other) return { label: other.title, href: "#other-projects" };

  throw new Error(`Unknown skill evidence: ${slug}`);
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border py-section"
    >
      <div className="mx-auto grid max-w-content gap-10 px-page md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <h2
            id="skills-heading"
            className="text-2xl font-semibold tracking-tight text-text md:text-3xl"
          >
            Skills
          </h2>

          <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
            Technologies I have used in client, school and personal projects.
            Each skill links to the work where it was used.
          </p>

          <h3 className="mt-10 text-sm text-text-subtle">Current focus</h3>

          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-muted">
            {currentFocus.map((item) => (
              <li key={item} className="border-t border-border-subtle pt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10 md:col-span-7">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm text-text-subtle">{group.title}</h3>

              <dl className="mt-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="grid gap-1 border-t border-border-subtle py-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6"
                  >
                    <dt className="font-mono text-sm text-text">{skill.name}</dt>
                    <dd className="text-sm leading-relaxed text-text-muted">
                      <span className="sr-only">Used in: </span>
                      {skill.evidence.map(resolveEvidence).map((link, index) => (
                        <span key={link.label}>
                          {index > 0 && ", "}
                          <a
                            href={link.href}
                            className="inline-block py-1 underline decoration-border underline-offset-4 transition-colors duration-fast hover:text-text hover:decoration-text"
                          >
                            {link.label}
                          </a>
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

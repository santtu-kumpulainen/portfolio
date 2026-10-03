import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import Header from "@/components/layout/Header";
import { projects, projectTypeLabels } from "@/data/projects";

// Only slugs from the project data exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Santtu Kumpulainen`,
    description: project.summary,
  };
}

function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="grid gap-4 border-t border-border-subtle py-10 md:grid-cols-12 md:gap-10 md:py-12"
    >
      <h2
        id={id}
        className="text-lg font-semibold tracking-tight text-text md:col-span-4"
      >
        {title}
      </h2>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

function Paragraph({ text }: { text: string }) {
  return <p className="max-w-measure leading-relaxed text-text-muted">{text}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="max-w-measure list-disc space-y-2 pl-5 leading-relaxed text-text-muted marker:text-text-subtle">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const caseStudy = project.caseStudy ?? {};
  const meta = [
    { term: "Type", value: projectTypeLabels[project.type] },
    { term: "Period", value: project.period },
    { term: "Role", value: project.role },
    { term: "Status", value: project.status },
  ].filter((item) => item.value);

  // List sections render only when they have items.
  const listSection = (id: string, title: string, items?: string[]) =>
    items && items.length > 0 ? (
      <CaseStudySection id={id} title={title}>
        <List items={items} />
      </CaseStudySection>
    ) : null;

  return (
    <>
      <Header />

      <main>
        <article aria-labelledby="project-title">
          <header className="py-section">
            <div className="mx-auto max-w-content px-page">
              <Link
                href="/#projects"
                className="inline-flex min-h-11 items-center gap-1 text-sm text-text-muted transition-colors duration-fast hover:text-text"
              >
                <span aria-hidden="true">←</span>
                Featured projects
              </Link>

              <h1
                id="project-title"
                className="mt-6 text-3xl font-semibold tracking-tight text-text md:text-5xl"
              >
                {project.title}
              </h1>

              <p className="mt-5 max-w-measure text-lg leading-relaxed text-text-muted">
                {project.summary}
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm md:grid-cols-4">
                {meta.map((item) => (
                  <div key={item.term}>
                    <dt className="text-text-subtle">{item.term}</dt>
                    <dd className="mt-1 text-text">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <ul
                aria-label="Technologies"
                className="mt-8 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-subtle"
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
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </header>

          <div className="mx-auto max-w-content px-page pb-section">
            {caseStudy.overview && (
              <CaseStudySection id="overview" title="Overview">
                <Paragraph text={caseStudy.overview} />
              </CaseStudySection>
            )}

            {listSection("built", "What I built", caseStudy.built)}
            {listSection(
              "technology-choices",
              "Why I chose the technology",
              caseStudy.technologyChoices,
            )}

            {caseStudy.architecture && (
              <CaseStudySection id="architecture" title="Architecture">
                <Paragraph text={caseStudy.architecture} />
              </CaseStudySection>
            )}

            {listSection("database", "Database", caseStudy.database)}
            {listSection("security", "Security", caseStudy.security)}
            {listSection("deployment", "Deployment", caseStudy.deployment)}

            {caseStudy.challenges && caseStudy.challenges.length > 0 && (
              <CaseStudySection id="challenges" title="Challenges and solutions">
                <ul className="max-w-measure space-y-4">
                  {caseStudy.challenges.map((challenge) => (
                    <li key={challenge.problem}>
                      <p className="leading-relaxed text-text">{challenge.problem}</p>
                      {challenge.solution && (
                        <p className="mt-1 leading-relaxed text-text-muted">
                          {challenge.solution}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </CaseStudySection>
            )}

            {listSection("learned", "What I learned", caseStudy.learned)}
            {listSection("liked", "What I liked", caseStudy.liked)}
            {listSection(
              "differently",
              "What I would do differently",
              caseStudy.differently,
            )}
            {listSection(
              "demonstrates",
              "What this demonstrates",
              caseStudy.demonstrates,
            )}

            {caseStudy.result && (
              <CaseStudySection id="result" title="Result">
                <Paragraph text={caseStudy.result} />
              </CaseStudySection>
            )}

            {caseStudy.images && caseStudy.images.length > 0 && (
              <CaseStudySection id="images" title="Images">
                <div className="grid gap-8">
                  {caseStudy.images.map((image) => (
                    <figure key={image.src}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 768px) 60vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      {image.caption && (
                        <figcaption className="mt-3 text-sm text-text-subtle">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </CaseStudySection>
            )}
          </div>
        </article>
      </main>
    </>
  );
}

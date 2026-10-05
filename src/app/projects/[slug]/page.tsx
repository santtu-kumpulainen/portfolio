import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import Header from "@/components/layout/Header";
import { projects, projectTypeLabels } from "@/data/projects";
import type {
  ProjectChallenge,
  ProjectDiagram,
  ProjectImage,
} from "@/types/project";

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

type Section = {
  id: string;
  title: string;
  content: ReactNode;
  // Consecutive sections with the same row render side by side from md up.
  row?: string;
};

type Group = {
  id: string;
  title: string;
  sections: Section[];
};

// The index only helps on pages long enough to need it.
const MIN_GROUPS_FOR_INDEX = 3;
// Lists of short terms read better as a compact grid than one long column.
const SHORT_ITEM_LENGTH = 40;

// Draft text stays in the data until replaced, so it must look like a draft.
function isPlaceholder(text: string) {
  return text.startsWith("PLACEHOLDER");
}

function hasItems<T>(items?: T[]): items is T[] {
  return items !== undefined && items.length > 0;
}

function ListItem({ text, className }: { text: string; className: string }) {
  return isPlaceholder(text) ? (
    <li className="rounded-sm border border-dashed border-border px-4 py-3 italic text-text-subtle">
      {text}
    </li>
  ) : (
    <li className={className}>{text}</li>
  );
}

function List({ items, compact }: { items: string[]; compact: boolean }) {
  if (compact) {
    return (
      <ul className="grid gap-x-8 text-text-muted sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ListItem
            key={item}
            text={item}
            className="border-t border-border-subtle py-3"
          />
        ))}
      </ul>
    );
  }

  return (
    <ul className="max-w-measure space-y-3 leading-relaxed text-text-muted">
      {items.map((item) => (
        <ListItem
          key={item}
          text={item}
          className="border-t border-border-subtle pt-3"
        />
      ))}
    </ul>
  );
}

function listContent(items: string[], inRow = false) {
  const compact =
    !inRow && items.every((item) => item.length <= SHORT_ITEM_LENGTH);
  return <List items={items} compact={compact} />;
}

function Prose({ text, lead = false }: { text: string; lead?: boolean }) {
  return (
    <p
      className={
        lead
          ? "max-w-measure text-lg leading-relaxed text-text md:text-xl"
          : "max-w-measure leading-relaxed text-text-muted"
      }
    >
      {text}
    </p>
  );
}

function Challenges({ challenges }: { challenges: ProjectChallenge[] }) {
  // Without any solutions the problems are just a list.
  if (!challenges.some((challenge) => challenge.solution)) {
    return listContent(challenges.map((challenge) => challenge.problem));
  }

  return (
    <div className="space-y-6">
      {challenges.map((challenge) => (
        <dl
          key={challenge.problem}
          className="grid gap-4 border-t border-border-subtle pt-4 md:grid-cols-2 md:gap-8"
        >
          <div>
            <dt className="text-sm text-text-subtle">Problem</dt>
            <dd className="mt-1 leading-relaxed text-text">{challenge.problem}</dd>
          </div>
          {challenge.solution && (
            <div>
              <dt className="text-sm text-text-subtle">Solution</dt>
              <dd className="mt-1 leading-relaxed text-text-muted">
                {challenge.solution}
              </dd>
            </div>
          )}
        </dl>
      ))}
    </div>
  );
}

function Figure({ image, sizes }: { image: ProjectImage; sizes: string }) {
  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 text-sm text-text-subtle">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function Diagram({ diagram }: { diagram: ProjectDiagram }) {
  return (
    <figure className="w-fit max-w-full">
      <div className="overflow-hidden rounded-md border border-border bg-diagram">
        <Image
          src={diagram.src}
          alt={diagram.alt}
          width={diagram.width}
          height={diagram.height}
          sizes="(min-width: 768px) 680px, 100vw"
          className="h-auto max-w-full"
        />
      </div>
      {diagram.caption && (
        <figcaption className="mt-3 text-sm text-text-subtle">
          {diagram.caption}
        </figcaption>
      )}
    </figure>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section aria-labelledby={section.id}>
      <h3
        id={section.id}
        className="mb-5 text-lg font-semibold tracking-tight text-text"
      >
        {section.title}
      </h3>
      {section.content}
    </section>
  );
}

function GroupBlock({ group }: { group: Group }) {
  // Collect consecutive sections that share a row.
  const rows: Section[][] = [];
  for (const section of group.sections) {
    const previous = rows.at(-1);
    if (section.row && previous?.[0].row === section.row) {
      previous.push(section);
    } else {
      rows.push([section]);
    }
  }

  return (
    <section
      aria-labelledby={group.id}
      className="scroll-mt-8 border-t border-border py-16 md:py-20"
    >
      <h2
        id={group.id}
        className="text-2xl font-semibold tracking-tight text-text md:text-3xl"
      >
        {group.title}
      </h2>

      <div className="mt-10 space-y-12 md:mt-12 md:space-y-14">
        {rows.map((row) =>
          row.length > 1 ? (
            <div
              key={row[0].id}
              className="grid gap-12 md:grid-cols-2 md:gap-10"
            >
              {row.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}
            </div>
          ) : (
            <SectionBlock key={row[0].id} section={row[0]} />
          ),
        )}
      </div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const caseStudy = project.caseStudy ?? {};
  const [coverImage, ...otherImages] = caseStudy.images ?? [];
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];

  const meta: { term: string; value: ReactNode }[] = [
    { term: "Type", value: projectTypeLabels[project.type] },
    { term: "Period", value: project.period },
  ];
  if (project.role) meta.push({ term: "Role", value: project.role });
  if (project.status) {
    meta.push({
      term: "Status",
      value: (
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {project.status}
        </span>
      ),
    });
  }
  meta.push({
    term: "Stack",
    value: (
      <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs leading-relaxed text-text-muted">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    ),
  });
  if (project.links.length > 0) {
    meta.push({
      term: "Links",
      value: (
        <ul className="flex flex-wrap gap-x-5">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center gap-1 text-text transition-colors duration-fast hover:text-accent lg:min-h-0"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      ),
    });
  }

  // Sections without data evaluate to a falsy value and are filtered out below.
  const groupDrafts: (Omit<Group, "sections"> & {
    sections: (Section | false | "" | undefined)[];
  })[] = [
    {
      id: "the-project",
      title: "The project",
      sections: [
        caseStudy.overview && {
          id: "overview",
          title: "Overview",
          content: <Prose text={caseStudy.overview} lead />,
        },
        hasItems(caseStudy.built) && {
          id: "built",
          title: "What I built",
          content: listContent(caseStudy.built),
        },
        hasItems(caseStudy.technologyChoices) && {
          id: "technology-choices",
          title: "Why I chose the technology",
          content: listContent(caseStudy.technologyChoices),
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How it works",
      sections: [
        caseStudy.architecture && {
          id: "architecture",
          title: "Architecture",
          content: <Prose text={caseStudy.architecture} />,
        },
        hasItems(caseStudy.database) && {
          id: "database",
          title: "Database",
          content: caseStudy.databaseDiagram ? (
            <div className="space-y-10">
              {listContent(caseStudy.database, true)}
              <Diagram diagram={caseStudy.databaseDiagram} />
            </div>
          ) : (
            listContent(caseStudy.database, true)
          ),
          // A diagram needs the full width to stay readable.
          row: caseStudy.databaseDiagram ? undefined : "infrastructure",
        },
        hasItems(caseStudy.security) && {
          id: "security",
          title: "Security",
          content: listContent(caseStudy.security, true),
          row: "infrastructure",
        },
        hasItems(caseStudy.deployment) && {
          id: "deployment",
          title: "Deployment",
          content: listContent(caseStudy.deployment, true),
          row: "infrastructure",
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      sections: [
        hasItems(caseStudy.challenges) && {
          id: "challenges",
          title: "Challenges and solutions",
          content: <Challenges challenges={caseStudy.challenges} />,
        },
        hasItems(caseStudy.learned) && {
          id: "learned",
          title: "What I learned",
          content: listContent(caseStudy.learned),
        },
        hasItems(caseStudy.liked) && {
          id: "liked",
          title: "What I liked",
          content: listContent(caseStudy.liked, true),
          row: "opinions",
        },
        hasItems(caseStudy.differently) && {
          id: "differently",
          title: "What I would do differently",
          content: listContent(caseStudy.differently, true),
          row: "opinions",
        },
        hasItems(caseStudy.demonstrates) && {
          id: "demonstrates",
          title: "What this demonstrates",
          content: listContent(caseStudy.demonstrates),
        },
        caseStudy.result && {
          id: "result",
          title: "Result",
          content: (
            <p className="max-w-measure border-l-2 border-accent pl-6 text-lg leading-relaxed text-text">
              {caseStudy.result}
            </p>
          ),
        },
      ],
    },
    {
      id: "images",
      title: "Images",
      sections: [
        hasItems(otherImages) && {
          id: "image-list",
          title: "Project images",
          content: (
            <div className="space-y-16">
              {otherImages.map((image, index) => (
                <figure
                  key={image.src}
                  className="grid gap-4 md:grid-cols-12 md:items-end md:gap-10"
                >
                  <div
                    className={
                      index % 2 === 0
                        ? "relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface md:col-span-7"
                        : "relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface md:order-last md:col-span-7"
                    }
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="text-sm leading-relaxed text-text-subtle md:col-span-5">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ),
        },
      ],
    },
  ];

  const groups: Group[] = groupDrafts
    .map((group) => ({
      ...group,
      sections: group.sections.filter((section): section is Section =>
        Boolean(section),
      ),
    }))
    .filter((group) => group.sections.length > 0);

  const showIndex = groups.length >= MIN_GROUPS_FOR_INDEX;

  return (
    <>
      <Header />

      <main>
        <article aria-labelledby="project-title">
          <header className="mx-auto max-w-content px-page pt-12 pb-16 md:pt-16 md:pb-20">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center gap-1 text-sm text-text-muted transition-colors duration-fast hover:text-text"
            >
              <span aria-hidden="true">←</span>
              Featured projects
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <h1
                  id="project-title"
                  className="text-4xl font-semibold leading-tight tracking-tight text-text md:text-6xl"
                >
                  {project.title}
                </h1>

                <p className="mt-6 max-w-measure text-lg leading-relaxed text-text-muted md:text-xl">
                  {project.summary}
                </p>
              </div>

              <dl className="text-sm lg:col-span-4 lg:col-start-9 lg:self-end">
                {meta.map((item) => (
                  <div
                    key={item.term}
                    className="flex gap-4 border-t border-border-subtle py-3"
                  >
                    <dt className="w-16 shrink-0 text-text-subtle">{item.term}</dt>
                    <dd className="min-w-0 text-text">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {coverImage && (
              <div className="mt-16">
                <Figure image={coverImage} sizes="(min-width: 1120px) 1056px, 100vw" />
              </div>
            )}
          </header>

          <div className="mx-auto max-w-content px-page pb-section lg:grid lg:grid-cols-12 lg:gap-10">
            {showIndex && (
              <nav
                aria-label="On this page"
                className="hidden lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:block"
              >
                <ol className="sticky top-8 space-y-2 border-t border-border pt-16 text-sm md:pt-20">
                  {groups.map((group) => (
                    <li key={group.id}>
                      <a
                        href={`#${group.id}`}
                        className="text-text-muted transition-colors duration-fast hover:text-text"
                      >
                        {group.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="lg:col-span-10 lg:col-start-3 lg:row-start-1">
              {groups.map((group) => (
                <GroupBlock key={group.id} group={group} />
              ))}

              <nav
                aria-label="Next project"
                className="border-t border-border pt-12"
              >
                <p className="text-sm text-text-subtle">Next project</p>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="mt-2 inline-flex min-h-11 items-center gap-3 text-2xl font-semibold tracking-tight text-text transition-colors duration-fast hover:text-accent md:text-3xl"
                >
                  {nextProject.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </nav>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

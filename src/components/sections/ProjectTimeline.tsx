import Link from "next/link";

import { earlyProjects, otherProjects, projects, projectTypeLabels } from "@/data/projects";
import type { ExternalLink } from "@/types/common";
import type { OtherProject, Project } from "@/types/project";

type TimelineEntry = {
  key: string;
  title: string;
  meta: string[];
  summary: string;
  technologies: string[];
  // Internal page for the entry, the case study.
  page?: ExternalLink;
  links: ExternalLink[];
  compact: boolean;
};

type TimelineGroup = {
  key: string;
  title: string;
  entries: TimelineEntry[];
};

function toEntry(project: Project | OtherProject): TimelineEntry {
  const hasCaseStudy = "caseStudy" in project && Boolean(project.caseStudy);
  const status = "status" in project ? project.status : undefined;

  return {
    key: project.slug,
    title: project.title,
    meta: [projectTypeLabels[project.type], project.period, status].filter(
      (item): item is string => Boolean(item),
    ),
    summary: project.summary,
    technologies: project.technologies,
    page: hasCaseStudy
      ? { label: "Case study", href: `/projects/${project.slug}` }
      : undefined,
    links: project.links,
    compact: !hasCaseStudy,
  };
}

function buildGroups(): TimelineGroup[] {
  const all = [...projects, ...otherProjects, ...earlyProjects];
  const years = [
    ...new Set(
      all.flatMap((project) => (project.year === "ongoing" ? [] : [project.year])),
    ),
  ].sort((a, b) => b - a);

  // Within a group, case studies come first, then compact entries in data order.
  const byWeight = (a: TimelineEntry, b: TimelineEntry) =>
    Number(a.compact) - Number(b.compact);

  return [
    {
      key: "ongoing",
      title: "Ongoing",
      entries: all.filter((project) => project.year === "ongoing").map(toEntry),
    },
    ...years.map((year) => ({
      key: String(year),
      title: String(year),
      entries: all
        .filter((project) => project.year === year)
        .map(toEntry)
        .sort(byWeight),
    })),
  ];
}

function Entry({ entry }: { entry: TimelineEntry }) {
  const headingId = `timeline-${entry.key}`;

  return (
    <article aria-labelledby={headingId}>
      <p className="flex flex-wrap gap-x-3 text-sm text-text-subtle">
        {entry.meta.map((item, index) => (
          <span
            key={item}
            className={
              index > 0 ? "flex gap-3 before:text-border before:content-['/']" : undefined
            }
          >
            {item}
          </span>
        ))}
      </p>

      <h3
        id={headingId}
        className={
          entry.compact
            ? "mt-1 text-lg font-semibold tracking-tight text-text"
            : "mt-2 text-xl font-semibold tracking-tight text-text md:text-2xl"
        }
      >
        {entry.title}
      </h3>

      <p
        className={
          entry.compact
            ? "mt-2 max-w-measure text-sm leading-relaxed text-text-muted"
            : "mt-3 max-w-measure leading-relaxed text-text-muted"
        }
      >
        {entry.summary}
      </p>

      {entry.technologies.length > 0 && (
        <ul
          aria-label="Technologies"
          className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-subtle"
        >
          {entry.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}

      <ul className="mt-2 flex flex-wrap gap-5 text-sm">
        {entry.page && (
          <li>
            <Link
              href={entry.page.href}
              className="inline-flex min-h-11 items-center gap-1 text-accent transition-colors duration-fast hover:text-accent-hover"
            >
              {entry.page.label}
              <span className="sr-only">: {entry.title}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        )}
        {entry.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-flex min-h-11 items-center gap-1 text-text transition-colors duration-fast hover:text-accent"
            >
              {link.label}
              <span className="sr-only">: {entry.title}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectTimeline() {
  const groups = buildGroups();

  return (
    <ol className="mt-16">
      {groups.map((group) => (
        <li
          key={group.key}
          className="border-t border-border-subtle py-10 md:grid md:grid-cols-12 md:gap-10"
        >
          <h2
            id={`timeline-group-${group.key}`}
            className="text-2xl font-semibold tracking-tight text-text md:col-span-2"
          >
            {group.title}
          </h2>

          <ol
            aria-labelledby={`timeline-group-${group.key}`}
            className="mt-6 space-y-10 border-l border-border-subtle md:col-span-10 md:mt-1"
          >
            {group.entries.map((entry) => (
              <li key={entry.key} className="relative pl-6 md:pl-8">
                {/* Marker on the line; accent for full entries, muted for compact ones. */}
                <span
                  aria-hidden="true"
                  className={
                    entry.compact
                      ? "absolute top-2 -left-1 size-2 rounded-full bg-border"
                      : "absolute top-2 -left-1 size-2 rounded-full bg-accent"
                  }
                />
                <Entry entry={entry} />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

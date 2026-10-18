import Image from "next/image";
import Link from "next/link";

import { homelab } from "@/data/homelab";
import { projects } from "@/data/projects";

// The case study diagram is reused as the preview, so there is one sanitized
// source. Its height is cropped here and the rest fades out.
const diagram = projects.find((project) => project.slug === "homelab")?.caseStudy
  ?.architectureDiagram;

const components = ["Proxmox", "OPNsense", "Debian", "Docker", "AdGuard Home", "NFS"];

export default function Homelab() {
  return (
    <section
      id="homelab"
      aria-labelledby="homelab-heading"
      className="border-t border-border py-section"
    >
      <div className="mx-auto grid max-w-content gap-12 px-page lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <p className="mb-3 font-mono text-sm text-accent">Ongoing project</p>

          <h2
            id="homelab-heading"
            className="text-3xl font-semibold tracking-tight text-text md:text-4xl"
          >
            Homelab
          </h2>

          <p className="mt-5 max-w-measure text-base leading-relaxed text-text-muted md:text-lg">
            {homelab.summary}
          </p>

          <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
            {homelab.purpose}
          </p>

          <ul
            aria-label="Main components"
            className="mt-8 flex flex-wrap gap-x-2 gap-y-1 border-t border-border-subtle pt-4 font-mono text-sm tracking-wide text-text uppercase"
          >
            {components.map((component, index) => (
              <li key={component} className="flex gap-2">
                {component}
                {index < components.length - 1 && (
                  <span aria-hidden="true" className="text-text-subtle">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm text-text-subtle">Planned</h3>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-text-muted">
            {homelab.planned.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link
            href="/projects/homelab"
            className="mt-8 inline-flex min-h-11 items-center gap-1.5 rounded-sm bg-text px-5 text-sm font-medium text-background transition-colors duration-fast hover:bg-white"
          >
            Read the Homelab case study
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {diagram && (
          <figure className="lg:col-span-6">
            <div className="h-[26rem] overflow-hidden rounded-md border border-border bg-background [mask-image:linear-gradient(to_bottom,black_70%,transparent)] md:h-[32rem]">
              <Image
                src={diagram.src}
                alt="Preview of the homelab architecture: the internet and an ISP modem in bridge mode lead to a Proxmox host running an OPNsense firewall VM, an AdGuard Home VM and a Debian Docker VM."
                width={diagram.width}
                height={diagram.height}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="mx-auto h-auto w-full max-w-[460px]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-text-subtle">
              Part of the architecture diagram. Private details are left out on
              purpose; the full diagram is in the case study.
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

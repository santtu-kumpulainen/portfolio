import { homelab } from "@/data/homelab";

export default function Homelab() {
  return (
    <section
      id="homelab"
      aria-labelledby="homelab-heading"
      className="border-t border-border py-section"
    >
      <div className="mx-auto grid max-w-content gap-10 px-page md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <h2
            id="homelab-heading"
            className="text-2xl font-semibold tracking-tight text-text md:text-3xl"
          >
            Homelab
          </h2>

          <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
            {homelab.summary}
          </p>

          <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
            {homelab.purpose}
          </p>
        </div>

        <div className="md:col-span-7">
          <h3 className="text-sm text-text-subtle">In use</h3>

          <dl className="mt-3 grid gap-x-8 sm:grid-cols-2">
            {homelab.inUse.map((component) => (
              <div
                key={component.name}
                className="border-t border-border-subtle py-3"
              >
                <dt className="font-mono text-sm text-text">{component.name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                  {component.description}
                </dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-10 text-sm text-text-subtle">Planned</h3>

          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-muted">
            {homelab.planned.map((item) => (
              <li key={item} className="border-t border-border-subtle pt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

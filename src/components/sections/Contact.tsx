import { emailAddress, emailLink, githubLink } from "@/data/links";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border py-section"
    >
      <div className="mx-auto grid max-w-content gap-10 px-page md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight text-text md:text-3xl"
          >
            Contact
          </h2>

          <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
            Email is the best way to reach me.
          </p>
        </div>

        <ul className="md:col-span-7">
          <li className="border-t border-border-subtle py-4">
            <p className="text-sm text-text-subtle">{emailLink.label}</p>
            <a
              href={emailLink.href}
              className="mt-1 inline-flex min-h-11 items-center break-all text-xl font-medium text-text transition-colors duration-fast hover:text-accent-hover md:text-2xl"
            >
              {emailAddress}
            </a>
          </li>

          <li className="border-t border-border-subtle py-4">
            <p className="text-sm text-text-subtle">{githubLink.label}</p>
            <a
              href={githubLink.href}
              className="mt-1 inline-flex min-h-11 items-center break-all text-base text-text-muted transition-colors duration-fast hover:text-text"
            >
              {githubLink.href.replace(/^https:\/\//, "")}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

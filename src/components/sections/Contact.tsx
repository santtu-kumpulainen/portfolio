import ContactForm from "@/components/sections/ContactForm";
import { emailAddress, emailLink, githubLink } from "@/data/links";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-band py-section"
    >
      <div className="mx-auto grid max-w-content gap-12 px-page lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-3 font-mono text-sm text-accent-hover">Contact</p>

          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight text-text md:text-4xl"
          >
            Get in touch
          </h2>

          <p className="mt-5 max-w-measure text-base leading-relaxed text-text-muted">
            Email is the best way to reach me. Write to me directly, or use the
            form to open your email app with the message ready to send.
          </p>

          <ul className="mt-10">
            <li className="border-t border-border py-4">
              <p className="text-sm text-text-subtle">{emailLink.label}</p>
              <a
                href={emailLink.href}
                className="mt-1 inline-flex min-h-11 items-center break-all text-xl font-medium text-text underline decoration-accent underline-offset-8 transition-colors duration-fast hover:text-accent-hover md:text-2xl"
              >
                {emailAddress}
              </a>
            </li>

            <li className="border-t border-border py-4">
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

        <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-16">
          <h3 className="text-lg font-semibold tracking-tight text-text">Write a message</h3>
          <p className="mt-2 mb-6 text-sm leading-relaxed text-text-subtle">
            This site has no server for sending mail, so the form opens your own
            email app instead.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

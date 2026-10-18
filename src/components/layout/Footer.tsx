import { emailLink, githubLink } from "@/data/links";

export default function Footer() {
  // Evaluated at build time for static pages; each deploy refreshes it.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-page py-8 text-sm text-text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} Santtu Kumpulainen
        </p>

        <ul aria-label="Contact links" className="flex gap-6">
          {[emailLink, githubLink].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center transition-colors duration-fast hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

"use client";

// Import components
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { emailLink, githubLink } from "@/data/links";

// Navigation items. Skills and Contact are Home sections; Projects and Homelab
// are pages.
const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Homelab", href: "/projects/homelab" },
  { label: "Contact", href: "/#contact" },
];

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const contactActions = [
  { ...githubLink, label: "GitHub profile", Icon: GitHubIcon },
  { ...emailLink, label: "Send email", Icon: MailIcon },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    // Sticky with a near-opaque background so content scrolling underneath
    // stays out of the way; anchors get matching scroll-padding in globals.css.
    <header className="sticky top-0 z-40 border-b border-border bg-background/95">
      <div className="mx-auto max-w-content px-page">

        {/* Header row */}
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-base font-medium text-text transition-colors duration-fast hover:text-accent"
          >
            Santtu Kumpulainen
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden md:block"
            >
              <ul className="flex items-center gap-6">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="text-sm text-text-muted transition-colors duration-fast hover:text-text aria-[current=page]:text-text"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul aria-label="Contact links" className="flex items-center gap-2">
              {contactActions.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-text-muted transition-colors duration-fast hover:border-text-subtle hover:bg-surface-elevated hover:text-text"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              type="button"
              className="min-h-11 min-w-11 text-sm text-text md:hidden"
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-border py-4 md:hidden"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="flex min-h-11 items-center text-sm text-text-muted transition-colors duration-fast hover:text-text aria-[current=page]:text-text"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

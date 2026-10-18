import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteName } from "@/data/site";

export const metadata: Metadata = {
  title: `Page not found | ${siteName}`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        aria-labelledby="not-found-heading"
        className="flex-1 outline-none"
      >
        <div className="mx-auto max-w-content px-page py-section">
          <p className="mb-3 font-mono text-sm text-accent">404</p>

          <h1
            id="not-found-heading"
            className="text-4xl font-semibold tracking-tight text-text md:text-5xl"
          >
            Page not found
          </h1>

          <p className="mt-6 max-w-measure text-base leading-relaxed text-text-muted">
            The page you are looking for does not exist or has moved.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-4">
            <li>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center rounded-sm bg-accent px-5 text-sm font-medium text-white transition-colors duration-fast hover:bg-accent-hover"
              >
                Go to the home page
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="inline-flex min-h-11 items-center text-sm text-text-muted transition-colors duration-fast hover:text-text"
              >
                View projects
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function Hero() {
    return (
        <section id="home" className="py-section">
            <div className="mx-auto max-w-content px-page">
                <div className="grid gap-10 md:grid-cols-5 md:gap-16">
                    {/* Profile placeholder */}
                    <div className="md:col-span-2">
                        Photo
                    </div>

                    {/* Hero content */}
                    <div className="md:col-span-3">
                        <p className="mb-3 font-mono text-sm text-accent">
                            Software Development Student
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-text md:text-5xl">
                            Santtu Kumpulainen
                        </h1>

                        <p className="mt-6 max-w-measure text-base leading-relaxed text-text-muted md:text-lg">
                            Final year software development student at Savo Vocational
                            College. I enjoy building useful software, automating repetitive
                            tasks, and solving practical problems with code.
                        </p>

                        <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
                            My interests range from application development and backend
                            systems to Linux, networking, virtualization, Docker and
                            self-hosted infrastructure. I am currently building my own
                            homelab and learning infrastructure by setting it up piece by
                            piece.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted">
                                Application Development
                            </span>

                            <span className="rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted">
                                Backend & APIs
                            </span>

                            <span className="rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted">
                                Linux
                            </span>

                            <span className="rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted">
                                Networking
                            </span>

                            <span className="rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted">
                                Infrastructure
                            </span>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex min-h-11 items-center rounded-sm bg-accent px-5 text-sm font-medium text-white transition-colors duration-fast hover:bg-accent-hover"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex min-h-11 items-center text-sm text-text-muted transition-colors duration-fast hover:text-text"
                            >
                                Contact me
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-5 text-sm text-text-subtle">
                            <a
                                href="#"
                                className="transition-colors duration-fast hover:text-text"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="transition-colors duration-fast hover:text-text"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="#"
                                className="transition-colors duration-fast hover:text-text"
                            >
                                CV
                            </a>

                            <a
                                href="mailto:your@email.com"
                                className="transition-colors duration-fast hover:text-text"
                            >
                                Email
                            </a>
                        </div>

                        <p className="mt-8 text-sm text-text-subtle">
                            Currently looking for software development internships and
                            summer opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
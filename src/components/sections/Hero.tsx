import { profileLinks } from "@/data/links";

const focusAreas = [
    "Web Development",
    "Application Development",
    "Backend & APIs",
    "Databases",
    "Linux",
    "Networking",
    "Infrastructure",
];

export default function Hero() {
    return (
        <section id="home" aria-labelledby="hero-heading" className="py-section">
            <div className="mx-auto max-w-content px-page">
                <p className="mb-3 font-mono text-sm text-accent">
                    Software Development Student
                </p>

                <h1
                    id="hero-heading"
                    className="text-4xl font-semibold tracking-tight text-text md:text-5xl"
                >
                    Santtu Kumpulainen
                </h1>

                <p className="mt-6 max-w-measure text-base leading-relaxed text-text-muted md:text-lg">
                    Final-year software development student at Savo Vocational
                    College. I enjoy building useful software, automating repetitive
                    tasks, and solving practical problems with code.
                </p>

                <p className="mt-4 max-w-measure text-base leading-relaxed text-text-muted">
                    My interests range from application development and backend
                    systems to Linux, networking, virtualization and
                    self-hosted infrastructure. I am currently building my own
                    homelab and learning infrastructure by setting it up piece by
                    piece.
                </p>

                <ul aria-label="Focus areas" className="mt-8 flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                        <li
                            key={area}
                            className="rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted"
                        >
                            {area}
                        </li>
                    ))}
                </ul>

                <p className="mt-8 max-w-measure text-base text-text">
                    Looking for junior developer roles, internships and summer jobs
                    in Finland or remote.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
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

                <ul aria-label="Profile links" className="mt-6 flex flex-wrap gap-5 text-sm text-text-subtle">
                    {profileLinks.map((link) => (
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
        </section>
    );
}

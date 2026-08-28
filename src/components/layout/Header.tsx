import Link from "next/link";

// Navigation items
const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Homelab", href: "#homelab" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-page">
        <Link
          href="/"
          className="text-base font-medium text-text transition-colors duration-fast hover:text-accent"
        >
          Santtu Kumpulainen
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-text-muted transition-colors duration-fast hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
import type { ExternalLink } from "@/types/common";

export const githubLink: ExternalLink = {
  label: "GitHub",
  href: "https://github.com/santtu-kumpulainen",
};

export const emailLink: ExternalLink = {
  label: "Email",
  href: "mailto:santtukumpulainen@hotmail.com",
};

// Visible address for the Contact section, derived so the address is stored once.
export const emailAddress = emailLink.href.replace(/^mailto:/, "");

// Only links the owner has chosen to publish. LinkedIn and CV are added when available.
export const profileLinks: ExternalLink[] = [githubLink, emailLink];

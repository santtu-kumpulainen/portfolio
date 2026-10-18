import type { SkillGroup } from "@/types/skill";

// Every skill needs evidence from src/data/projects.ts or the Homelab section.
// Skills without a documented project (for example C# and Python) stay out
// until project data exists. No percentages or levels.
export const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", evidence: ["pielaveden-keilahalli", "bouncingball"] },
      {
        name: "JavaScript",
        evidence: ["teo", "pielaveden-keilahalli", "opiskelijahelpdesk", "retkikohteet"],
      },
      { name: "TypeScript", evidence: ["mpk-consulting", "portfolio"] },
      { name: "React & Next.js", evidence: ["mpk-consulting", "portfolio"] },
      { name: "Tailwind CSS", evidence: ["mpk-consulting", "portfolio"] },
      { name: "WordPress", evidence: ["pielaveden-keilahalli"] },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      {
        name: "PHP",
        evidence: ["teo", "pielaveden-keilahalli", "opiskelijahelpdesk", "retkikohteet"],
      },
      { name: "REST-type APIs and CRUD", evidence: ["teo"] },
      { name: "External API integration", evidence: ["retkikohteet"] },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MariaDB & SQL", evidence: ["teo", "opiskelijahelpdesk", "retkikohteet"] },
      { name: "PDO", evidence: ["teo", "opiskelijahelpdesk", "retkikohteet"] },
      { name: "Relational modelling & ER diagrams", evidence: ["teo"] },
    ],
  },
  {
    title: "Development workflow",
    skills: [
      { name: "Git & GitHub", evidence: ["portfolio"] },
      { name: "Vercel", evidence: ["mpk-consulting"] },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      {
        name: "Docker",
        evidence: ["portfolio", "opiskelijahelpdesk", "retkikohteet", "homelab"],
      },
      { name: "Linux (Debian)", evidence: ["homelab"] },
      { name: "Proxmox & virtualization", evidence: ["homelab"] },
      { name: "Networking (OPNsense)", evidence: ["homelab"] },
    ],
  },
];

// From the "Current focus" list in the portfolio planning notes.
export const currentFocus = [
  "Docker & containerization",
  "Linux",
  "Networking",
  "Backend / APIs",
  "Infrastructure",
];

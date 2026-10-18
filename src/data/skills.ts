import type { SkillGroup } from "@/types/skill";

// Every skill needs evidence from src/data/projects.ts.
// Skills without a documented project (for example C# and Python) stay out
// until project data exists. No percentages or levels.
export const skillGroups: SkillGroup[] = [
  {
    title: "Application development",
    skills: [
      { name: "TypeScript", evidence: ["mpk-consulting", "lomakeavustin", "portfolio"] },
      {
        name: "JavaScript",
        evidence: ["teo", "pielaveden-keilahalli", "opiskelijahelpdesk", "retkikohteet"],
      },
      { name: "React & Next.js", evidence: ["mpk-consulting", "lomakeavustin", "portfolio"] },
      {
        name: "PHP",
        evidence: ["teo", "pielaveden-keilahalli", "opiskelijahelpdesk", "retkikohteet"],
      },
      { name: "HTML & CSS", evidence: ["pielaveden-keilahalli", "teo"] },
      { name: "Tailwind CSS", evidence: ["mpk-consulting", "lomakeavustin", "portfolio"] },
      { name: "WordPress", evidence: ["pielaveden-keilahalli"] },
    ],
  },
  {
    title: "Data & backend",
    skills: [
      {
        name: "MariaDB & SQL",
        evidence: ["lomakeavustin", "teo", "opiskelijahelpdesk", "retkikohteet"],
      },
      { name: "REST-type APIs and CRUD", evidence: ["lomakeavustin", "teo"] },
      { name: "Node.js & Express", evidence: ["lomakeavustin"] },
      { name: "PDO", evidence: ["teo", "opiskelijahelpdesk", "retkikohteet"] },
      { name: "Relational modeling & ER diagrams", evidence: ["lomakeavustin", "teo"] },
      { name: "External API integration", evidence: ["retkikohteet"] },
    ],
  },
  {
    title: "Infrastructure & networking",
    skills: [
      { name: "Linux (Debian)", evidence: ["homelab"] },
      {
        name: "Docker",
        evidence: ["lomakeavustin", "opiskelijahelpdesk", "retkikohteet", "portfolio", "homelab"],
      },
      { name: "Proxmox & virtualization", evidence: ["homelab"] },
      { name: "Networking (OPNsense)", evidence: ["homelab"] },
    ],
  },
  {
    title: "Development tools",
    skills: [
      {
        name: "Git & GitHub",
        evidence: ["lomakeavustin", "teo", "opiskelijahelpdesk", "retkikohteet", "portfolio"],
      },
      { name: "Vercel", evidence: ["mpk-consulting"] },
    ],
  },
];

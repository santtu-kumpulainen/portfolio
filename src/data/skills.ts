import type { SkillGroup } from "@/types/skill";

// Every skill needs evidence from src/data/projects.ts.
// Skills without a documented project (for example C# and Python) stay out
// until project data exists. No percentages or levels.
export const skillGroups: SkillGroup[] = [
  {
    title: "Web development",
    skills: [
      { name: "HTML & CSS", evidence: ["pielaveden-keilahalli", "teo"] },
      {
        name: "JavaScript",
        evidence: ["teo", "pielaveden-keilahalli", "opiskelijahelpdesk", "retkikohteet"],
      },
      { name: "TypeScript", evidence: ["mpk-consulting", "lomakeavustin", "portfolio"] },
      { name: "React & Next.js", evidence: ["mpk-consulting", "lomakeavustin", "portfolio"] },
      { name: "Tailwind CSS", evidence: ["mpk-consulting", "lomakeavustin", "portfolio"] },
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
      { name: "Node.js & Express", evidence: ["lomakeavustin"] },
      { name: "REST-type APIs and CRUD", evidence: ["lomakeavustin", "teo"] },
      { name: "External API integration", evidence: ["retkikohteet"] },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MariaDB & SQL",
        evidence: ["lomakeavustin", "teo", "opiskelijahelpdesk", "retkikohteet"],
      },
      { name: "PDO", evidence: ["teo", "opiskelijahelpdesk", "retkikohteet"] },
      { name: "Relational modeling & ER diagrams", evidence: ["lomakeavustin", "teo"] },
    ],
  },
  {
    title: "Development workflow",
    skills: [
      {
        name: "Git & GitHub",
        evidence: ["lomakeavustin", "teo", "opiskelijahelpdesk", "retkikohteet", "portfolio"],
      },
      { name: "Vercel", evidence: ["mpk-consulting"] },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      {
        name: "Docker",
        evidence: ["lomakeavustin", "opiskelijahelpdesk", "retkikohteet", "portfolio", "homelab"],
      },
      { name: "Linux (Debian)", evidence: ["homelab"] },
      { name: "Proxmox & virtualization", evidence: ["homelab"] },
      { name: "Networking (OPNsense)", evidence: ["homelab"] },
    ],
  },
];

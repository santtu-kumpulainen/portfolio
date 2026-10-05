import type { Homelab } from "@/types/homelab";

// Facts come from the Obsidian Homelab notes and the owner. Public content stays
// high level: no addresses, hostnames, ports, accounts or network layout.
export const homelab: Homelab = {
  summary:
    "An ongoing personal infrastructure project: a small server running Proxmox, with a virtualized firewall, Linux virtual machines and self-hosted services.",
  purpose:
    "I use it to get practical experience with virtualization, networking, Linux, self-hosting, troubleshooting and documentation, and to host my own projects and services.",
  inUse: [
    { name: "Proxmox", description: "Virtualization host for the virtual machines" },
    {
      name: "OPNsense",
      description: "Router and firewall running as a virtual machine, with separate internet and home network interfaces",
    },
    { name: "Managed switch", description: "Connects the devices on the home network" },
    { name: "Debian", description: "Template for new Linux virtual machines" },
    { name: "Docker", description: "Runs on a Debian virtual machine for project and service hosting" },
    { name: "NFS", description: "Shared network storage" },
    { name: "SFTP / SSH", description: "File transfer and remote administration" },
    { name: "AdGuard Home", description: "Network-wide DNS filtering" },
  ],
  planned: [
    "A detailed Homelab page covering the architecture, services and what I have learned",
    "Documenting services as they are deployed",
  ],
};

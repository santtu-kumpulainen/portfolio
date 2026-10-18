import type { Homelab } from "@/types/homelab";

// Facts come from the Obsidian Homelab notes and the owner. Public content stays
// high level: no addresses, hostnames, ports, accounts, providers or network layout.
export const homelab: Homelab = {
  summary:
    "An ongoing personal infrastructure project: a Proxmox server running a virtualized firewall, Linux virtual machines and self-hosted services. I run it, maintain it and document it.",
  purpose:
    "I use this project to learn virtualization, networking, Linux services and infrastructure management in practice, and where I can host my own projects and services.",
  inUse: [
    { name: "Proxmox", description: "Virtualization host for the virtual machines" },
    {
      name: "OPNsense",
      description: "Router and firewall virtual machine that the whole home network goes through",
    },
    { name: "Managed switch", description: "Connects the devices on the home network" },
    {
      name: "Addressing and DHCP",
      description: "An IP addressing plan, DHCP ranges and reserved addresses for servers",
    },
    {
      name: "AdGuard Home",
      description: "Network-wide DNS filtering, with upstream queries sent over encrypted DNS",
    },
    {
      name: "VPN",
      description: "Selected devices route their traffic through a VPN tunnel on the firewall; the rest use the normal connection",
    },
    { name: "Debian", description: "Template for new Linux virtual machines" },
    { name: "Docker", description: "Runs on a Debian virtual machine for project and service hosting" },
    { name: "NFS", description: "Shared network storage" },
    { name: "SFTP / SSH", description: "File transfer and remote administration" },
  ],
  planned: [
    "Vaultwarden as a self-hosted password manager",
    "Dedicated NAS storage",
    "Monitoring software for the services",
    "Better service management, network security and documentation",
  ],
};

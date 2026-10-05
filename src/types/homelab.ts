export type HomelabComponent = {
  name: string;
  description: string;
};

export type Homelab = {
  summary: string;
  purpose: string;
  inUse: HomelabComponent[];
  planned: string[];
};

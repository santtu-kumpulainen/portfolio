export type Skill = {
  name: string;
  // Slugs of projects (featured or other) or "homelab" where the skill was used.
  evidence: string[];
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

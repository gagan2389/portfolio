export interface Project {
  id: string;
  name: string;
  sub: string;
  tags: string[];
  bullets: string[];
}

export interface SkillCategory {
  cat: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  meta: string;
  body: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  years: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  msg: string;
  email: string;
  phone: string;
  github: string;
}

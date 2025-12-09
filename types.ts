export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

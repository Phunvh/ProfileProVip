export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  typedTitles: string[];
  status: {
    available: boolean;
    text: string;
  };
  location: string;
  experienceYears: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  cvUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export interface SocialItem {
  name: string;
  url: string;
  icon: string;
  color?: string;
}

export interface AboutHighlight {
  icon: string;
  title: string;
  desc: string;
}

export interface AboutInfo {
  description: string;
  highlights: AboutHighlight[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  image: string;
  techs: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
}

export interface TestimonialItem {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  stats: StatItem[];
  socials: SocialItem[];
  about: AboutInfo;
  skills: SkillCategory[];
  projects: ProjectItem[];
  timeline: TimelineItem[];
  testimonials: TestimonialItem[];
}

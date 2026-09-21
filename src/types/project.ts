export type ProjectCategory = 
  | 'Websites' 
  | 'E-commerce' 
  | 'Applications' 
  | 'SaaS' 
  | 'AI & Automation';

export interface VisualShowcaseItem {
  title: string;
  desc: string;
  badge?: string;
  image?: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  category: ProjectCategory;
  categoryTag: string;
  shortDesc: string;
  description: string;
  challenge: string;
  approach: string;
  design: string;
  development: string;
  technology: string[];
  services: string[];
  visualShowcase: VisualShowcaseItem[];
  metrics?: MetricItem[];
  testimonial?: {
    quote: string;
    author: string;
    title?: string;
  };
  liveUrl?: string;
  featured?: boolean;
  heroImage?: string;
  thumbnail?: string;
  gallery?: string[];
}


export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  initial: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Apurv',
    role: 'Founder & Lead Architect',
    bio: 'Directs product strategy, full-stack systems engineering, and AI automation workflows. Focused on architectural precision, clean code, and sub-second performance.',
    expertise: ['System Architecture', 'Full-Stack Engineering', 'AI Pipelines', 'Product Strategy'],
    initial: 'A'
  },
  {
    name: 'Rohan',
    role: 'Lead Product Designer',
    bio: 'Crafts high-end minimal user interfaces, systematic design tokens, and tactile web interactions that make digital products memorable and effortless to use.',
    expertise: ['UI/UX Systems', 'Design Systems', 'Micro-Interactions', 'Brand Identity'],
    initial: 'R'
  },
  {
    name: 'Vikram',
    role: 'Full-Stack Engineer',
    bio: 'Specializes in frontend framework optimization, database architecture, third-party webhook integrations, and WhatsApp Business API endpoints.',
    expertise: ['React / TypeScript', 'APIs & Webhooks', 'Database Architecture', 'Cloud Deployments'],
    initial: 'V'
  }
];

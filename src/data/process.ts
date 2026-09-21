export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Scope & Foundations',
    description: 'We deconstruct your business model, customer workflows, competitive landscape, and technical constraints before writing a single line of code.'
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Systems & Interfaces',
    description: 'We formulate the complete user experience, component tokens, responsive layouts, and architectural mockups with meticulous attention to hierarchy.'
  },
  {
    step: '03',
    title: 'Build',
    subtitle: 'Engineering Rigor',
    description: 'We develop clean frontend interfaces, performant APIs, databases, third-party integrations, and automated pipelines with zero unnecessary dependencies.'
  },
  {
    step: '04',
    title: 'Launch',
    subtitle: 'Deployment & Quality',
    description: 'Cross-browser validation, SEO audit, security headers, accessibility checks, domain configuration, and production deployment with zero downtime.'
  },
  {
    step: '05',
    title: 'Grow',
    subtitle: 'Telemetry & Scaling',
    description: 'Continuous monitoring, telemetry evaluation, conversion bottleneck optimization, and scaling your infrastructure as adoption expands.'
  }
];

export interface CorePrinciple {
  num: string;
  theme: string;
  title: string;
  description: string;
}

export const WHY_AVERRA_PRINCIPLES: CorePrinciple[] = [
  {
    num: '01',
    theme: 'FOCUS',
    title: 'Small Focused Team',
    description: 'We deliberately limit our active client engagements to ensure obsessive attention to detail, code hygiene, and craft.'
  },
  {
    num: '02',
    theme: 'SPEED',
    title: 'Direct Communication',
    description: 'Zero account managers or bureaucratic middlemen. You communicate directly with the engineers and designers building your software.'
  },
  {
    num: '03',
    theme: 'CRAFT',
    title: 'Design + Engineering',
    description: 'We unite design aesthetics with production-grade engineering so your product looks distinctive and executes reliably at scale.'
  },
  {
    num: '04',
    theme: 'STRATEGY',
    title: 'Product-First Thinking',
    description: 'We do not build specifications blindly. We challenge assumptions, refine UX flows, and engineer for tangible business conversion.'
  },
  {
    num: '05',
    theme: 'PRECISION',
    title: 'Attention to Detail',
    description: 'From sub-pixel layout alignments and typographic rhythm to database query efficiency and edge cache configurations.'
  },
  {
    num: '06',
    theme: 'PARTNERSHIP',
    title: 'Long-Term Technical Allies',
    description: 'We do not disappear post-launch. We support and iterate alongside your team as customer demand and product scope grow.'
  }
];

export interface RoadmapPhase {
  phase: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  active?: boolean;
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: '01',
    badge: 'Today / Active',
    title: 'Client Digital Products',
    description: 'Partnering with ambitious founders and businesses to craft high-impact websites, web applications, and e-commerce platforms.',
    deliverables: [
      'High-Performance Web Flagships',
      'Headless E-Commerce Systems',
      'Custom SaaS Dashboards & Portals'
    ],
    active: true
  },
  {
    phase: '02',
    badge: 'Next / In Development',
    title: 'SaaS + AI Systems',
    description: 'Expanding our automation infrastructure into autonomous business workflows, conversational AI agents, and modular SaaS tools for businesses.',
    deliverables: [
      'AI Inbound Lead Routing Engines',
      'Specialized Workflow Automation',
      'Real-Time Telemetry Dashboards'
    ]
  },
  {
    phase: '03',
    badge: 'Future / Horizon',
    title: 'Independent Technology Products',
    description: 'Building, launching, and scaling our own suite of consumer and developer software products backed by our battle-tested studio foundation.',
    deliverables: [
      'Proprietary Developer Tools',
      'Autonomous Workflow Platforms',
      'Global Software Products'
    ]
  }
];

export interface PhilosophyValue {
  title: string;
  description: string;
}

export const PHILOSOPHY_VALUES: PhilosophyValue[] = [
  {
    title: 'Simplicity First',
    description: 'We strip away unnecessary elements until only what is essential and effective remains.'
  },
  {
    title: 'Engineering Quality',
    description: 'Fast page loads, clean semantic code, and solid security are non-negotiable fundamentals.'
  },
  {
    title: 'Human-Centered Design',
    description: 'Software should feel delightful, respectful, and intuitive for the real people using it every day.'
  },
  {
    title: 'Honest Communication',
    description: 'We give candid technical advice, realistic timeline expectations, and zero buzzword inflation.'
  },
  {
    title: 'Continuous Improvement',
    description: 'Products are living systems that learn from telemetry and adapt as business needs evolve.'
  },
  {
    title: 'Pride of Craft',
    description: 'Every border, typographic weight, API endpoint, and interaction is built with deliberate pride.'
  }
];

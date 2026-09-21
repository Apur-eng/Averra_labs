export interface Capability {
  number: string;
  tag: string;
  title: string;
  description: string;
  tags: string[];
  details: string;
  featured?: boolean;
}

export const CAPABILITIES: Capability[] = [
  {
    number: '01',
    tag: 'ARCHITECTURE',
    title: 'Websites',
    description: 'Modern, lightning-fast digital storefronts and marketing platforms engineered with sub-second load times, mobile-first precision, and clean SEO architecture.',
    tags: ['Sub-Second Speed', 'Editorial UI/UX', 'SEO First Architecture', 'Conversion Optimization'],
    details: 'We reject bloated page builders. Every website is built from semantic markup, finely tuned design tokens, and modular components that load instantly on any connection.',
    featured: true
  },
  {
    number: '02',
    tag: 'COMMERCE',
    title: 'E-commerce',
    description: 'Headless and custom commerce architectures built to convert visitors into repeat customers with seamless checkouts and automated fulfillment.',
    tags: ['Headless Shopify', 'Custom Carts', 'Payment Gateways', 'Inventory Sync'],
    details: 'Decoupled frontends backed by Shopify Storefront or custom commerce APIs, delivering frictionless purchase journeys without template constraints.'
  },
  {
    number: '03',
    tag: 'SOFTWARE',
    title: 'Applications',
    description: 'Complex full-stack web apps, customer portals, and internal tool suites powered by reactive frontends, resilient APIs, and secure databases.',
    tags: ['Full-Stack SPAs', 'Role-Based Access', 'REST & GraphQL APIs', 'Real-Time Sync'],
    details: 'High-density interfaces engineered for day-to-day utility, managing state smoothly and handling high data throughput with confidence.'
  },
  {
    number: '04',
    tag: 'PRODUCT',
    title: 'SaaS Products',
    description: 'End-to-end multi-tenant subscription software engineering—from early MVP wireframes to scalable cloud infrastructure and recurring billing.',
    tags: ['Multi-Tenant Systems', 'Stripe Billing', 'Usage Telemetry', 'Scalable Cloud'],
    details: 'We take software products from initial concept to live production, setting up database isolation, tenant auth, subscription tiers, and operational dashboards.'
  },
  {
    number: '05',
    tag: 'INTELLIGENCE',
    title: 'AI & Automation',
    description: 'Intelligent WhatsApp lead bots, autonomous CRM workflows, vector knowledge retrievals, and automated operational pipelines that run 24/7.',
    tags: ['WhatsApp Business API', 'Vector Retrieval', 'Lead Qualification', '24/7 Automation'],
    details: 'Practical, reliable AI systems embedded directly into business workflows—capturing leads, summarizing data, and eliminating repetitive manual operations.'
  }
];

/**
 * Averra Studio Metadata & Global Site Configuration
 * Verified studio information only — no fabricated statistics or outcome metrics.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  edition: string;
  coordinates: string;
  availability: string;
  email: string;
  navItems: NavItem[];
  disciplines: string[];
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Averra',
  title: 'Averra — Digital Product & Technology Studio',
  description: 'Averra is an independent product and systems engineering studio partnering with founders and ambitious organizations to engineer high-performance software.',
  edition: '2026',
  coordinates: "28°36'N 77°12'E",
  availability: 'Q3/Q4',
  email: 'hello@averralabs.com',
  navItems: [
    { label: 'Work', href: '/work' },
    { label: 'Know Us', href: '/know-us' },
    { label: 'Contact', href: '/contact' }
  ],
  disciplines: [
    '01 STRATEGY',
    '02 CRAFT & SYSTEMS',
    '03 PRODUCTION ENGINEERING'
  ]
};

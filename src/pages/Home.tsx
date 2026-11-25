import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CinematicShowreel } from '../components/sections/CinematicShowreel';
import { StatementSection } from '../components/sections/StatementSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { SelectedWorkSection } from '../components/sections/SelectedWorkSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { WhyAverraSection } from '../components/sections/WhyAverraSection';
import { RoadmapSection } from '../components/sections/RoadmapSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';

/*
 * Page Sequence:
 *   HeroSection
 *   CinematicShowreel      ← scroll-driven editorial-to-fullscreen transition
 *   StatementSection       ← narrative manifesto
 *   SelectedWorkSection
 *   CapabilitiesSection
 *   ProcessSection
 *   WhyAverraSection
 *   RoadmapSection
 *   FinalCtaSection
 */
export const Home: React.FC = () => {
  return (
    <div className="page-home">
      <HeroSection />
      <CinematicShowreel />
      <StatementSection />
      <SelectedWorkSection />
      <CapabilitiesSection />
      <ProcessSection />
      <WhyAverraSection />
      <RoadmapSection />
      <FinalCtaSection />
    </div>
  );
};

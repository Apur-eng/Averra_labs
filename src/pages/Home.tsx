import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
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
 *   StatementSection       ← narrative manifesto
 *   [Step 5: CinematicMediaSection]  ← future cinematic media frame slot
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
      <StatementSection />
      {/* Step 5 slot: CinematicMediaSection goes here */}
      <SelectedWorkSection />
      <CapabilitiesSection />
      <ProcessSection />
      <WhyAverraSection />
      <RoadmapSection />
      <FinalCtaSection />
    </div>
  );
};

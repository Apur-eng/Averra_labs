import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { SelectedWorkSection } from '../components/sections/SelectedWorkSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { WhyAverraSection } from '../components/sections/WhyAverraSection';
import { RoadmapSection } from '../components/sections/RoadmapSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';

export const Home: React.FC = () => {
  return (
    <div className="page-home">
      <HeroSection />
      <CapabilitiesSection />
      <SelectedWorkSection />
      <ProcessSection />
      <WhyAverraSection />
      <RoadmapSection />
      <FinalCtaSection />
    </div>
  );
};

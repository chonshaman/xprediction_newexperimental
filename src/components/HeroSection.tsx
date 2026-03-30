import React from 'react';
import { HeroCarousel } from './hero/HeroCarousel';
import type { Market } from '../data/markets';

interface HeroSectionProps {
  onMarketSelect: (market: Market) => void;
}

export const HeroSection = React.memo(({ onMarketSelect }: HeroSectionProps) => {
  return (
    <section className="w-full mb-8 sm:mb-10 lg:mb-12 overflow-hidden">
      <HeroCarousel onMarketSelect={onMarketSelect} />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
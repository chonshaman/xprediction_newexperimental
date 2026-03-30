import React, { useCallback } from 'react';
import { HeroSection } from '../HeroSection';
import { EndingSoonMarketCard } from '../EndingSoonMarketCard';
import { AllCategories } from '../AllCategories';
import { featuredMarkets, endingSoonMarkets, heroCarouselMarkets, multiOutcomeMarkets } from '../../data/markets';
import type { Market } from '../../data/markets';

interface HomePageProps {
  onMarketSelect: (market: Market) => void;
}

export const HomePage = React.memo(({ onMarketSelect }: HomePageProps) => {
  const handleMarketClick = useCallback((market: Market) => {
    onMarketSelect(market);
  }, [onMarketSelect]);

  // Combine all markets for the AllCategories section
  const allMarkets = [...heroCarouselMarkets, ...featuredMarkets, ...endingSoonMarkets, ...multiOutcomeMarkets];

  return (
    <div className="w-full">
      {/* Hero Carousel Section */}
      <HeroSection onMarketSelect={onMarketSelect} />

      {/* Ending Soon Section */}
      <section className="mb-6 sm:mb-8">
        {/* Section Header */}
        <div 
          className="flex items-center mb-6"
          style={{
            gap: 'var(--gap--0-5rem)',
          }}
        >
          <div 
            className="rounded-full"
            style={{ 
              width: 'var(--gap--0-25rem)',
              height: 'var(--gap--1-5rem)',
              backgroundColor: 'var(--primary)' 
            }}
          />
          <h2 
            className="font-sans text-card-foreground"
            style={{ 
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: '1.2',
            }}
          >
            Ending Soon
          </h2>
        </div>

        {/* Ending Soon Grid - Custom responsive: 1 col until 860px, then 2 cols, then 3 cols at 1024px */}
        <div 
          className="ending-soon-grid"
          style={{
            gap: 'var(--gap--1rem)',
          }}
        >
          {endingSoonMarkets.map((market) => (
            <EndingSoonMarketCard
              key={market.id}
              {...market}
              onClick={() => handleMarketClick(market)}
            />
          ))}
        </div>
        
        <style>{`
          .ending-soon-grid {
            display: grid;
            grid-template-columns: 1fr;
          }
          
          @media (min-width: 860px) {
            .ending-soon-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .ending-soon-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>
      </section>

      {/* All Categories Section */}
      <AllCategories
        markets={allMarkets}
        onMarketClick={handleMarketClick}
      />
    </div>
  );
});

HomePage.displayName = 'HomePage';
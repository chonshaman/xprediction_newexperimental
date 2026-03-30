import React from 'react';
import { MarketCard } from '../MarketCard';
import { EndingSoonMarketCard } from '../EndingSoonMarketCard';
import type { Market } from '../../data/markets';

interface MarketSectionProps {
  title: string;
  markets: Market[];
  featured?: boolean;
  onMarketClick: (market: Market) => void;
}

export const MarketSection = React.memo(({ 
  title, 
  markets, 
  featured = false,
  onMarketClick 
}: MarketSectionProps) => {
  const isEndingSoon = title === 'Ending Soon';
  
  return (
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
          {title}
        </h2>
      </div>

      {/* Market Grid - Responsive with different layouts */}
      <div 
        className={
          isEndingSoon 
            ? "grid gap-[18px] sm:gap-6 grid-cols-1 min-[768px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[1280px]:grid-cols-4"
            : "grid gap-3 sm:gap-4 grid-cols-1 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[1280px]:grid-cols-4"
        }
      >
        {markets.map((market, index) => (
          isEndingSoon ? (
            <EndingSoonMarketCard
              key={`${market.question}-${index}`}
              {...market}
              onClick={() => onMarketClick(market)}
            />
          ) : (
            <MarketCard
              key={`${market.question}-${index}`}
              {...market}
              featured={featured}
              onClick={() => onMarketClick(market)}
            />
          )
        ))}
      </div>
    </section>
  );
});

MarketSection.displayName = 'MarketSection';
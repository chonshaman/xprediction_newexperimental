import { memo, useMemo, useState, useEffect } from 'react';
import { MarketCard } from '../MarketCard';
import { privateMarkets } from '../../data/private-markets';
import type { Market } from '../../data/markets';
import { Breadcrumb } from './Breadcrumb';
import { PrivateMarketsIcon } from '../icons/PrivateMarketsIcon';
import {
  getAccessedMarketIds,
  isMasterStored,
  getSessionMasterUnlocked,
} from '../../utils/private-markets-access';

interface PrivateCategoryViewProps {
  categorySlug: string;
  onMarketSelect?: (market: Market) => void;
  onBack: () => void;
}

export const PrivateCategoryView = memo(function PrivateCategoryView({
  categorySlug,
  onMarketSelect,
  onBack,
}: PrivateCategoryViewProps) {
  const [fadeIn, setFadeIn] = useState(false);

  // Check if master is unlocked
  const masterUnlocked = getSessionMasterUnlocked() || isMasterStored();

  // Filter markets by category AND unlock status
  const categoryMarkets = useMemo(() => {
    const filteredByCategory = privateMarkets.filter(
      (market) => market.category.slug === categorySlug
    );

    // If master unlocked, show all markets in category
    if (masterUnlocked) {
      return filteredByCategory;
    }

    // Otherwise, only show unlocked markets
    const unlockedIds = getAccessedMarketIds();
    return filteredByCategory.filter((market) => 
      unlockedIds.includes(market.id)
    );
  }, [categorySlug, masterUnlocked]);

  const categoryName = categoryMarkets[0]?.category.name || categorySlug;

  // Fade in on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setFadeIn(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      className="flex flex-col w-full max-w-[1296px] mx-auto"
      style={{
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Private Markets', onClick: onBack },
          { label: categoryName },
        ]}
      />

      {/* Header Section */}
      <div
        className="flex items-center justify-between w-full"
        style={{
          paddingBottom: 'var(--gap--2rem)',
        }}
      >
        <div className="flex flex-col" style={{ gap: '10px' }}>
          {/* Title with Icon */}
          <div className="flex items-center" style={{ gap: '10px' }}>
            <div
              className="flex items-center justify-center shrink-0"
              style={{ width: '40px', height: '40px' }}
            >
              <PrivateMarketsIcon className="w-5 h-5" style={{ transform: 'scale(1.6)' }} />
            </div>
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '40px',
                letterSpacing: '-0.225px',
                color: 'var(--card-foreground)',
                margin: 0,
              }}
            >
              {categoryName}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: '24px',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            {categoryMarkets.length} market{categoryMarkets.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </div>

      {/* Market Cards Grid */}
      <div
        className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          gap: 'var(--gap--1-5rem)',
          paddingBottom: 'var(--gap--2rem)',
        }}
      >
        {categoryMarkets.map((market, index) => (
          <div
            key={`category-${market.id}`}
            style={{
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.5s ease ${0.1 + index * 0.08}s, transform 0.5s ease ${0.1 + index * 0.08}s`,
              height: '100%',
            }}
          >
            <div style={{ position: 'relative', height: '100%' }}>
              <MarketCard
                {...market}
                onClick={() => onMarketSelect && onMarketSelect(market)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
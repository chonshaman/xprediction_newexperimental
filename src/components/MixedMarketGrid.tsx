import { useMemo } from 'react';
import { MarketCard } from './MarketCard';
import { HomeMatchCard } from './sports/HomeMatchCard';
import type { Market } from '../data/markets';
import type { Match } from '../data/matches';

interface MixedMarketGridProps {
  markets: Market[];
  matches: Match[];
  onMarketClick?: (market: Market) => void;
  onMatchClick?: (match: Match, oddsType: 'team1' | 'draw' | 'team2') => void;
}

type GridItem = 
  | { type: 'market'; data: Market }
  | { type: 'match'; data: Match };

export function MixedMarketGrid({ 
  markets, 
  matches, 
  onMarketClick,
  onMatchClick 
}: MixedMarketGridProps) {
  // Mix markets and matches randomly
  const mixedItems = useMemo(() => {
    const items: GridItem[] = [
      ...markets.map(m => ({ type: 'market' as const, data: m })),
      ...matches.map(m => ({ type: 'match' as const, data: m }))
    ];
    
    // Shuffle the items
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    
    return items;
  }, [markets, matches]);

  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      style={{
        gap: 'var(--gap--1rem)',
        gridAutoRows: '1fr', // Make all rows equal height
      }}
    >
      {mixedItems.map((item, index) => {
        const itemKey = item.type === 'market' ? `market-${item.data.id}` : `match-${item.data.id}`;
        
        return (
          <div
            key={itemKey}
            style={{
              animation: 'fadeInUp 0.4s ease-out forwards',
              animationDelay: `${index * 0.03}s`,
              opacity: 0,
              display: 'flex', // Make wrapper a flex container
              flexDirection: 'column', // Stack children vertically
            }}
          >
            {item.type === 'market' ? (
              <MarketCard
                {...item.data}
                onClick={() => onMarketClick?.(item.data)}
              />
            ) : (
              <HomeMatchCard
                match={item.data}
                onOddsClick={(match, type) => onMatchClick?.(match, type)}
              />
            )}
          </div>
        );
      })}
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
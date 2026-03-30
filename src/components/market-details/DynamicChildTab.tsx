import React, { useState } from 'react';
import type { Outcome as MarketOutcome } from '../../data/markets';

interface DynamicChildTabProps {
  outcomes: MarketOutcome[];
  activeTab: string;
  onTabChange: (outcomeId: string) => void;
}

// Color mapping for different outcomes based on their color variable
const getColorForOutcome = (color: string) => {
  // Parse CSS variable or use as-is
  return color;
};

export function DynamicChildTab({ outcomes, activeTab, onTabChange }: DynamicChildTabProps) {
  const [hoverTab, setHoverTab] = useState<string | null>(null);

  return (
    <div className="w-full" style={{ paddingTop: 'var(--gap--0-5rem)' }}>
      <div 
        className="flex gap-2 items-center overflow-x-auto"
        style={{ 
          width: '100%',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {outcomes.map((outcome) => {
          const isActive = activeTab === outcome.id;
          const isHovered = hoverTab === outcome.id;
          
          return (
            <button
              key={outcome.id}
              onClick={() => onTabChange(outcome.id)}
              onMouseEnter={() => setHoverTab(outcome.id)}
              onMouseLeave={() => setHoverTab(null)}
              className="flex flex-col items-center relative rounded-tl-[var(--radius-input)] rounded-tr-[var(--radius-input)] shrink-0"
              style={{ 
                flex: outcomes.length <= 3 ? 1 : 'none',
                minWidth: outcomes.length > 3 ? '140px' : 'auto',
                background: isHovered && !isActive ? 'var(--black-a1)' : 'transparent',
                transition: 'background 0.2s ease'
              }}
            >
              <div 
                className="flex flex-col items-center overflow-clip px-2 relative rounded-[var(--radius-input)]" 
                style={{ paddingTop: 'var(--gap--0-5rem)', paddingBottom: 'var(--gap--0-5rem)' }}
              >
                <p 
                  style={{ 
                    fontSize: 'var(--text-lg)', 
                    fontWeight: 'var(--font-weight-semi-bold)',
                    lineHeight: '28px',
                    color: isActive ? outcome.color : 'var(--muted-foreground)',
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {outcome.label}
                </p>
              </div>
              {(isActive || isHovered) && (
                <div 
                  className="h-[3px] rounded-tl-[4px] rounded-tr-[4px]"
                  style={{ 
                    background: isActive ? outcome.color : 'var(--muted-foreground)',
                    width: '85.96%',
                    transition: 'background 0.2s ease, opacity 0.2s ease',
                    opacity: 1
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
      {/* Full-width separator line */}
      <div 
        className="w-full h-[1px]"
        style={{ 
          background: 'var(--black-a1)',
          marginTop: '0'
        }}
      />
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

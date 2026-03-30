import React, { useCallback } from 'react';
import svgPaths from "../../imports/svg-7hm0uy5lcw";
import { OutcomeButton } from './OutcomeButton';
import { Outcome } from './types';
import { OUTCOME_PRICES } from './constants';
import type { Market, MarketOutcome } from '../../data/markets';

interface OutcomeSelectorProps {
  selectedOutcome: Outcome;
  onOutcomeChange: (outcome: Outcome) => void;
  yesPrice?: string;
  noPrice?: string;
  market?: Market; // Added market prop for multi-outcome support
}

// Extracted static components for better performance
const InfoIcon = React.memo(() => (
  <div 
    className="basis-0 grow min-h-px min-w-px relative shrink-0" 
    style={{ 
      height: '100%',
      zIndex: 2 
    }}
    data-name="info"
  >
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      <g id="info">
        <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
));

InfoIcon.displayName = 'InfoIcon';

const RefreshIcon = React.memo(() => (
  <div 
    className="box-border flex isolate items-center justify-center relative shrink-0 cursor-pointer transition-opacity"
    style={{
      gap: '8px',
      padding: '1px',
      width: '20px',
      height: '20px'
    }}
    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
    data-name="Icon"
  >
    <div 
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      style={{ 
        height: '100%',
        zIndex: 2 
      }}
    >
      <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </div>
  </div>
));

RefreshIcon.displayName = 'RefreshIcon';

export const OutcomeSelector = React.memo<OutcomeSelectorProps>(({ selectedOutcome, onOutcomeChange, yesPrice, noPrice, market }) => {
  const handleYesClick = useCallback(() => onOutcomeChange('YES'), [onOutcomeChange]);
  const handleNoClick = useCallback(() => onOutcomeChange('NO'), [onOutcomeChange]);

  // Check if this is a multi-outcome market
  const isMultiOutcome = market?.outcomes && market.outcomes.length > 2;

  return (
    <div 
      className="flex flex-col items-start relative shrink-0" 
      style={{ 
        width: '100%',
        gap: '4px' 
      }}
    >
      <div 
        className="flex items-center justify-between relative shrink-0"
        style={{ width: '100%' }}
      >
        <div className="flex items-center relative shrink-0" style={{ gap: '4px' }}>
          <div 
            className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-card-foreground"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            <p className="leading-[18px] whitespace-pre">Outcome</p>
          </div>
          <div className="box-border content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]">
            <InfoIcon />
          </div>
        </div>
        <RefreshIcon />
      </div>
      
      {isMultiOutcome ? (
        // Multi-outcome selector: Display outcome buttons from market data
        <div 
          className="flex flex-col"
          style={{ 
            gap: '0.5rem',
            width: '100%' 
          }}
        >
          {market.outcomes!.map((outcome) => (
            <button
              key={outcome.id}
              onClick={() => onOutcomeChange(outcome.id)}
              className="flex items-center justify-between"
              style={{
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                transition: 'all 200ms',
                background: selectedOutcome === outcome.id ? 'var(--lum-03)' : 'var(--lum-02)',
                border: selectedOutcome === outcome.id ? '1.5px solid var(--primary-button-bg)' : '1px solid var(--black-a2)',
                borderRadius: 'var(--border-radius--0-5rem)',
                cursor: 'pointer',
              }}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: outcome.color,
                    fontSize: '8px',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    color: 'white',
                  }}
                >
                  {outcome.icon}
                </div>
                <span 
                  className="font-sans"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--card-foreground)',
                  }}
                >
                  {outcome.label}
                </span>
              </div>
              <span 
                className="font-sans"
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  color: 'var(--card-foreground)',
                }}
              >
                {outcome.percentage}%
              </span>
            </button>
          ))}
        </div>
      ) : (
        // Binary outcome selector: YES/NO buttons
        <div 
          className="flex items-start relative shrink-0" 
          style={{ 
            width: '100%',
            gap: 'var(--gap--0-75rem)' 
          }}
        >
          <OutcomeButton 
            type="Yes" 
            price={yesPrice || OUTCOME_PRICES.YES}
            selected={selectedOutcome === 'YES'} 
            onClick={handleYesClick}
          />
          <OutcomeButton 
            type="No" 
            price={noPrice || OUTCOME_PRICES.NO}
            selected={selectedOutcome === 'NO'} 
            onClick={handleNoClick}
          />
        </div>
      )}
    </div>
  );
});

OutcomeSelector.displayName = 'OutcomeSelector';
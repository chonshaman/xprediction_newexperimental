import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Outcome } from './types';
import { ANIMATION_CONFIG } from './constants';
import type { Market } from '../../data/markets';

interface BuyButtonProps {
  selectedOutcome: Outcome;
  hasInsufficientBalance: boolean;
  onClick: () => void;
  market?: Market;
}

export const BuyButton = React.memo<BuyButtonProps>(({ selectedOutcome, hasInsufficientBalance, onClick, market }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = useMemo(() => 
    hasInsufficientBalance ? undefined : onClick,
    [hasInsufficientBalance, onClick]
  );

  // Get the display text - use outcome label for multi-outcome markets, otherwise capitalize
  const displayText = useMemo(() => {
    if (!selectedOutcome) return '';

    // Check if this is a multi-outcome market
    const isMultiOutcome = market?.outcomes && market.outcomes.length > 2;
    
    if (isMultiOutcome) {
      // Find the outcome data to get the label
      const outcomeData = market.outcomes.find(
        outcome => outcome.id.toLowerCase() === selectedOutcome.toLowerCase()
      );
      return outcomeData?.label || selectedOutcome;
    }
    
    // For binary markets, just capitalize first letter
    const lower = selectedOutcome.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }, [selectedOutcome, market]);

  return (
    <motion.div 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative shrink-0 cursor-pointer ${hasInsufficientBalance ? 'cursor-not-allowed' : ''}`}
      style={{
        width: '100%',
        opacity: hasInsufficientBalance ? 0.5 : 1,
        borderRadius: 'var(--radius-button)',
        background: hasInsufficientBalance 
          ? 'var(--side-bar-outline)' 
          : (isHovered ? 'var(--primary-button-bg-hover)' : 'var(--primary-button-bg)')
      }}
      whileHover={!hasInsufficientBalance ? {
        boxShadow: '0 4px 12px 2px rgba(91, 91, 214, 0.4), 0 8px 24px 5px rgba(91, 91, 214, 0.2), 0 12px 36px 7px rgba(91, 91, 214, 0.1)',
        scale: 1.01
      } : {}}
      whileTap={!hasInsufficientBalance ? {
        scale: 0.98
      } : {}}
      transition={{ duration: ANIMATION_CONFIG.duration.normal }}
    >
      <div 
        aria-hidden="true" 
        className="absolute border-solid inset-0 pointer-events-none shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04)]"
        style={{ 
          borderWidth: '1px', 
          borderColor: 'var(--black-a1)',
          borderRadius: 'var(--radius-button)'
        }}
      />
      <div 
        className="box-border flex items-center justify-center relative overflow-hidden"
        style={{ 
          width: '100%',
          height: '100%',
          padding: 'var(--gap--0-75rem)' 
        }}
      >
        {hasInsufficientBalance ? (
          <p 
            className="font-sans not-italic text-nowrap text-card-foreground whitespace-pre"
            style={{
              lineHeight: '24px',
              fontSize: 'var(--text-s)',
              fontWeight: 'var(--font-weight-semi-bold)'
            }}
          >
            Insufficient Balance
          </p>
        ) : (
          <p 
            className="font-sans not-italic text-nowrap whitespace-pre"
            style={{ 
              lineHeight: '24px',
              fontSize: 'var(--text-s)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--primary-button-fg)' 
            }}
          >
            <span>Buy{displayText ? ' ' : ''}</span>
            <AnimatePresence mode="popLayout" initial={false}>
              {displayText && (
                <motion.span
                  key={selectedOutcome}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: ANIMATION_CONFIG.duration.fast, 
                    ease: ANIMATION_CONFIG.easing.smooth 
                  }}
                >
                  {displayText}
                </motion.span>
              )}
            </AnimatePresence>
          </p>
        )}
      </div>
    </motion.div>
  );
});

BuyButton.displayName = 'BuyButton';
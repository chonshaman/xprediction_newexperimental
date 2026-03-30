import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedInteger, AnimatedDecimal } from './AnimatedNumber';
import { InfoCardProps } from './types';
import { ANIMATION_CONFIG, SHARE_PRICES } from './constants';
import type { Market } from '../../data/markets';

// Animation configuration for grid-based collapse/expand
const CARD_ANIMATION = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};

export const InfoCard = React.memo<InfoCardProps & { show: boolean; limitPrice?: number; market?: Market }>(({ 
  show,
  selectedOutcome, 
  shares, 
  inputAmount, 
  fee, 
  feePercent, 
  netPurchase,
  activeTab,
  isLimitOrder,
  amountValue,
  limitPrice,
  effectivePrice,
  market
}) => {
  const isSell = activeTab === 'Sell';
  
  // Get the price for display - use limit price if available, otherwise the effective price passed from parent
  const displayPrice = isLimitOrder && limitPrice ? limitPrice : Math.round(effectivePrice * 100);
  
  // Get current outcome data for multi-outcome markets
  const currentOutcomeData = market?.outcomes?.find(o => o.id === selectedOutcome);
  
  const outcomeConfig = useMemo(() => {
    // Use multi-outcome data if available
    if (currentOutcomeData) {
      return {
        label: currentOutcomeData.icon,
        backgroundColor: currentOutcomeData.color,
        exitDirection: 15,
        enterDirection: -15,
      };
    }
    // Default to binary YES/NO
    return {
      label: selectedOutcome === 'YES' ? 'Y' : 'N',
      backgroundColor: selectedOutcome === 'YES' ? '#30A46C' : '#E5484D',
      exitDirection: selectedOutcome === 'YES' ? 15 : -15,
      enterDirection: selectedOutcome === 'YES' ? -15 : 15,
    };
  }, [selectedOutcome, currentOutcomeData]);

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div 
          initial={{ opacity: 0, gridTemplateRows: '0fr' }}
          animate={{ opacity: 1, gridTemplateRows: '1fr' }}
          exit={{ opacity: 0, gridTemplateRows: '0fr' }}
          transition={CARD_ANIMATION}
          className="grid"
          style={{ width: '100%' }}
        >
          <div className="overflow-hidden">
            <div 
              className="relative shrink-0"
              style={{
                width: '100%',
                background: 'var(--card-normal)',
                border: '1px solid var(--black-a1)',
                borderRadius: 'var(--radius-button)'
              }}
            >
              <div 
                className="box-border flex flex-col relative"
                style={{
                  width: '100%',
                  paddingLeft: 'var(--gap--1rem)',
                  paddingRight: 'var(--gap--1rem)',
                  paddingTop: 'var(--gap--0-75rem)',
                  paddingBottom: 'var(--gap--0-75rem)',
                  gap: 'var(--gap--0-5rem)'
                }}
              >
                {/* Shares Row - Updated text format */}
                <div className="flex items-center justify-between" style={{ width: '100%' }}>
                  <div 
                    className="flex items-center"
                    style={{ gap: 'var(--gap--0-5rem)' }}
                  >
                    <div 
                      className="flex items-center font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground tabular-nums"
                      style={{ 
                        fontSize: 'var(--text-s)',
                        gap: 'var(--gap--0-25rem)'
                      }}
                    >
                      <p className="leading-[20px]">
                        {isSell ? 'Sell' : 'Buy'}
                      </p>
                      <div 
                        className="flex items-center justify-center relative overflow-hidden"
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%'
                        }}
                      >
                        <motion.div
                          className="absolute inset-0"
                          style={{ borderRadius: '50%' }}
                          animate={{ 
                            backgroundColor: outcomeConfig.backgroundColor
                          }}
                          transition={{ 
                            duration: ANIMATION_CONFIG.duration.smooth, 
                            ease: ANIMATION_CONFIG.easing.smooth 
                          }}
                        />
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span 
                            key={selectedOutcome}
                            className="font-semibold relative z-10"
                            style={{ 
                              fontSize: 'var(--text-xxs)',
                              color: 'var(--side-bar-hold-white)'
                            }}
                            initial={{ x: outcomeConfig.enterDirection, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: outcomeConfig.exitDirection, opacity: 0 }}
                            transition={{ 
                              duration: ANIMATION_CONFIG.duration.smooth, 
                              ease: ANIMATION_CONFIG.easing.smooth 
                            }}
                          >
                            {outcomeConfig.label}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <p className="leading-[20px]">
                        <span style={{ color: 'var(--var---primary-)' }}>
                          {isSell ? (
                            <><AnimatedInteger value={shares} /> Shares </>
                          ) : (
                            <><AnimatedDecimal value={shares} /> Shares </>
                          )}
                        </span>
                        at <span style={{ color: 'var(--var---primary-)' }}>{displayPrice}¢</span>
                      </p>
                    </div>
                  </div>
                  <div 
                    className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-card-foreground tabular-nums"
                    style={{
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    <p className="leading-[20px]">$<AnimatedInteger value={amountValue} /></p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'var(--black-a1)' }} />

                {/* Fee Row */}
                <div className="flex items-center justify-between" style={{ width: '100%' }}>
                  <div 
                    className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground"
                    style={{ fontSize: 'var(--text-s)' }}
                  >
                    <p className="leading-[20px]">Fee ({feePercent}%)</p>
                  </div>
                  <div 
                    className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-card-foreground tabular-nums"
                    style={{
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    <p className="leading-[20px]">$<AnimatedInteger value={fee} /></p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'var(--black-a1)' }} />

                {/* Net Purchase/Sale Row */}
                <div className="flex items-center justify-between" style={{ width: '100%' }}>
                  <div 
                    className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground"
                    style={{ fontSize: 'var(--text-s)' }}
                  >
                    <p className="leading-[20px]">{isSell ? 'Net Sale' : 'Net Purchase'}</p>
                  </div>
                  <div 
                    className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-card-foreground tabular-nums"
                    style={{
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    <p className="leading-[20px]">$<AnimatedInteger value={netPurchase} /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

InfoCard.displayName = 'InfoCard';
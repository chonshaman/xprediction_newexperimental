import React, { useRef, useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { AmountInputProps } from './types';
import { QUICK_AMOUNTS, QUICK_SHARES, ANIMATION_CONFIG, SHARE_PRICES } from './constants';

const QuickAmountButton = React.memo<{ label: string; onClick: () => void }>(({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onMouseDown={(e) => {
        // Prevent input from losing focus
        e.preventDefault();
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors"
      style={{
        gap: 'var(--gap--0-25rem)',
        paddingLeft: 'var(--gap--0-5rem)',
        paddingRight: 'var(--gap--0-5rem)',
        paddingTop: 'var(--gap--0-25rem)',
        paddingBottom: 'var(--gap--0-25rem)',
        borderRadius: '9999px',
        background: 'var(--side-bar-outline)',
        border: '1px solid var(--black-a2)',
        color: isHovered ? 'var(--var---primary-)' : 'var(--muted-foreground)'
      }}
      whileHover={{ 
        y: -2, 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
        transition: { duration: ANIMATION_CONFIG.duration.normal, ease: ANIMATION_CONFIG.easing.easeOut } 
      }}
      whileTap={{ 
        y: 0,
        scale: 0.95, 
        transition: { duration: ANIMATION_CONFIG.duration.fast } 
      }}
    >
      <div 
        className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap"
        style={{
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        <p className="leading-[20px] whitespace-pre">{label}</p>
      </div>
    </motion.div>
  );
});

QuickAmountButton.displayName = 'QuickAmountButton';

export const AmountInput = React.memo<AmountInputProps>(({
  amount,
  balance,
  isFocused,
  hasInsufficientBalance,
  onAmountChange,
  onFocusChange,
  onQuickAmount,
  activeTab,
  isLimitOrder,
  selectedOutcome,
  availableShares,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Determine if we should show shares
  const isSell = activeTab === 'Sell';
  const isBuyMarket = activeTab === 'Buy' && !isLimitOrder;
  
  // Show dollar sign only for Buy Market orders
  // All other modes (Sell Market, Buy Limit, Sell Limit) show shares
  const showDollarSign = isBuyMarket;
  const showShares = !isBuyMarket;
  
  // Calculate shares based on selected outcome for market sell orders
  const sharePrice = SHARE_PRICES[selectedOutcome];
  const calculatedShares = parseFloat(amount || '0') / sharePrice;
  
  // Choose quick buttons based on mode
  const quickButtons = showShares ? QUICK_SHARES : QUICK_AMOUNTS;

  const handleContainerClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocus = useCallback(() => {
    onFocusChange(true);
  }, [onFocusChange]);

  const handleBlur = useCallback(() => {
    onFocusChange(false);
  }, [onFocusChange]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onAmountChange(e.target.value);
  }, [onAmountChange]);

  const handleQuickAmountClick = useCallback((e: React.MouseEvent, label: string) => {
    e.stopPropagation();
    onQuickAmount(label);
  }, [onQuickAmount]);

  // Determine current state for animation
  const getCurrentState = () => {
    if (hasInsufficientBalance) return "error";
    if (isFocused) return "focused";
    if (isHovered && !isFocused && !hasInsufficientBalance) return "hover";
    return "default";
  };

  const currentState = getCurrentState();

  return (
    <div 
      className="box-border content-stretch flex flex-col items-start relative shrink-0 w-full border cursor-text transition-all duration-200 ease-out"
      onClick={handleContainerClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        gap: 'var(--gap--0-5rem)',
        paddingBottom: 'var(--gap--0-75rem)',
        paddingTop: 'var(--gap--0-25rem)',
        borderRadius: 'var(--radius-xl)',
        paddingLeft: currentState === "focused" ? "var(--gap--1rem)" : currentState === "hover" ? "var(--gap--0-75rem)" : currentState === "error" ? "var(--gap--0-875rem)" : "4px",
        paddingRight: currentState === "focused" ? "var(--gap--1rem)" : currentState === "hover" ? "var(--gap--0-75rem)" : currentState === "error" ? "var(--gap--0-875rem)" : "4px",
        borderColor: currentState === "focused" ? "var(--primary-button-bg)" : currentState === "hover" ? "var(--muted-foreground)" : currentState === "error" ? "var(--var---destructive-)" : "transparent",
        backgroundColor: currentState === "focused" || currentState === "hover" ? "var(--lum-02)" : currentState === "error" ? "rgba(0,0,0,0.1)" : "transparent",
        boxShadow: currentState === "focused" ? "0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)" : currentState === "hover" ? "0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)" : currentState === "error" ? "0 0 0 1px var(--var---destructive-)" : "none"
      }}
    >
      {/* Input Row */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div 
            className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-card-foreground w-full"
            style={{ fontSize: 'var(--text-base)' }}
          >
            <p className="leading-[24px]">{showShares ? 'Shares' : 'Amount'}</p>
          </div>
        </div>
        <div className="basis-0 content-stretch flex grow h-[60px] items-center justify-end min-h-px min-w-px relative shrink-0">
          <motion.div 
            className="flex items-center justify-end h-full w-full"
            animate={{ scale: isFocused ? 1.1 : 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow, type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformOrigin: "right center" }}
          >
            {showDollarSign && <span className="font-sans font-semibold text-[30px] text-muted-foreground tracking-[-0.225px] mr-[1px] mb-[2px]">$</span>}
            
            <div className="relative h-[40px] flex items-center">
              <span className="invisible font-sans font-semibold text-[30px] tracking-[-0.225px] whitespace-pre px-0.5 tabular-nums">
                {amount || '0'}
              </span>
              
              <input 
                ref={inputRef}
                type="number"
                value={amount}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                className="absolute inset-0 w-full h-full bg-transparent text-right focus:outline-none font-sans font-semibold text-[30px] tracking-[-0.225px] text-card-foreground placeholder:text-muted-foreground/40 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none p-0 m-0 tabular-nums"
                placeholder="0"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Balance & Quick Buttons Row */}
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[1.215px] pt-[1.785px] px-0 relative shrink-0">
          <div 
            className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-muted-foreground text-nowrap"
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)'
            }}
          >
            <p className="leading-[20px] whitespace-pre mb-1">
              {isSell 
                ? `Available ${selectedOutcome === 'YES' ? 'Yes' : 'No'} Shares:` 
                : 'Available balance:'}
            </p>
          </div>
          <div 
            className="content-stretch flex items-center relative shrink-0"
            style={{ gap: '2px' }}
          >
            <div 
              className="content-stretch flex font-sans items-center leading-[20px] not-italic relative shrink-0 text-nowrap whitespace-pre tabular-nums"
              style={{ 
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: hasInsufficientBalance ? 'var(--var---destructive-)' : 'var(--muted-foreground)' 
              }}
            >
              {isSell 
                ? availableShares.toLocaleString() 
                : `$${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              }
            </div>
          </div>
        </div>
        <div 
          className="content-stretch flex items-center relative shrink-0"
          style={{ gap: 'var(--gap--0-25rem)' }}
        >
          {quickButtons.map((label) => (
            <QuickAmountButton 
              key={label}
              label={label}
              onClick={(e) => handleQuickAmountClick(e, label)}
            />
          ))}
        </div>
      </div>

      {/* Error Message */}
      {hasInsufficientBalance && (
        <motion.div 
          layout 
          className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full items-end" 
          style={{ 
            fontSize: 'var(--text-s)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--var---destructive-)' 
          }}
        >
          <p className="leading-[20px] whitespace-pre">Insufficient balance</p>
        </motion.div>
      )}
    </div>
  );
});

AmountInput.displayName = 'AmountInput';
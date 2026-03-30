import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BuySellBlockProps, Tab } from './types';
import { OrderType } from './OrderTypeSelector';
import { Tabs } from './Tabs';
import { LimitPrice } from './LimitPrice';
import { SetExpiration } from './SetExpiration';
import { AmountInput } from './AmountInput';
import { ToWinCard } from './ToWinCard';
import { BuyButton } from './BuyButton';
import { InfoCard } from './InfoCard';
import { Separator } from './Separator';
import { OutcomeButton } from './OutcomeButton';
import { MatchTitle } from './MatchTitle';
import { getTextColor } from './utils';
import { 
  MOCK_BALANCE, 
  SHARE_PRICES, 
  FEE_PERCENT, 
  WIN_MULTIPLIER,
  ANIMATION_CONFIG,
  MOCK_AVAILABLE_SHARES
} from './constants';
import { useBalance } from '../../contexts/BalanceContext';

const LAYOUT_TRANSITION = { 
  duration: ANIMATION_CONFIG.duration.normal, 
  ease: [0.4, 0, 0.2, 1]
};

export function BuySellBlock({ 
  selectedOutcome, 
  onOutcomeChange, 
  amount, 
  onAmountChange, 
  onBuy,
  marketPrices,
  market,
  matchInfo
}: BuySellBlockProps) {
  const { balance } = useBalance();
  
  // Detect if this is a multi-outcome market
  const isMultiOutcome = (market?.outcomes && market.outcomes.length > 2) || !!matchInfo;
  
  // Use market prices if provided, otherwise fall back to constants
  const sharePrices = useMemo(() => ({
    YES: marketPrices?.yesPrice ?? SHARE_PRICES.YES,
    NO: marketPrices?.noPrice ?? SHARE_PRICES.NO,
  }), [marketPrices]);

  // Format prices for display (as cents)
  const formattedPrices = useMemo(() => ({
    YES: `${Math.round(sharePrices.YES * 100)}¢`,
    NO: `${Math.round(sharePrices.NO * 100)}¢`,
  }), [sharePrices]);
  
  // State management
  const [isFocused, setIsFocused] = useState(false);
  const [availableShares] = useState(MOCK_AVAILABLE_SHARES);
  const [activeTab, setActiveTab] = useState<Tab>('Buy');
  const [orderType, setOrderType] = useState<OrderType>('Market');
  const [limitPrice, setLimitPrice] = useState(52);
  const [expirationEnabled, setExpirationEnabled] = useState(false);
  const [shakeOutcome, setShakeOutcome] = useState(false);

  const handleBuy = useCallback(() => {
    // If we need to select an outcome first (multi-outcome market without match info)
    if (isMultiOutcome && !matchInfo && !selectedOutcome) {
      setShakeOutcome(true);
      setTimeout(() => setShakeOutcome(false), 500);
      return;
    }
    onBuy();
  }, [isMultiOutcome, matchInfo, selectedOutcome, onBuy]);

  // Derived state
  const inputAmount = useMemo(() => parseFloat(amount || '0'), [amount]);
  const isLimitOrder = useMemo(() => orderType === 'Limit', [orderType]);
  const hasInsufficientBalance = useMemo(() => {
    // For Buy Market: input is dollars, compare directly to balance
    if (activeTab === 'Buy' && !isLimitOrder) {
      const moneySpent = inputAmount;
      const fee = (moneySpent * FEE_PERCENT) / 100;
      const totalCost = moneySpent + fee;
      return totalCost > balance;
    }
    // For Buy Limit: input is shares, calculate total cost and compare to balance
    else if (activeTab === 'Buy' && isLimitOrder) {
      const shareCount = inputAmount;
      const effectivePrice = limitPrice / 100;
      const amount = shareCount * effectivePrice;
      const fee = (amount * FEE_PERCENT) / 100;
      const totalCost = amount + fee;
      return totalCost > balance;
    }
    // For Sell: check if shares exceed available shares
    else {
      return inputAmount > availableShares;
    }
  }, [inputAmount, balance, activeTab, isLimitOrder, limitPrice, availableShares]);
  const showToWin = useMemo(() => inputAmount > 0 && !hasInsufficientBalance, [inputAmount, hasInsufficientBalance]);
  const showInfo = useMemo(() => inputAmount > 0, [inputAmount]);

  // Calculations
  const calculations = useMemo(() => {
    const isSell = activeTab === 'Sell';
    const isBuyMarket = activeTab === 'Buy' && !isLimitOrder;
    // Handle dynamic pricing for multi-outcome if needed, but for now using simple mock
    const effectivePrice = isLimitOrder ? limitPrice / 100 : (
        sharePrices[selectedOutcome] !== undefined ? sharePrices[selectedOutcome] : 0.5 // default if not found
    );
    
    if (isBuyMarket) {
      // Buy Market: input is dollars, calculate shares
      const moneySpent = inputAmount;
      const shares = moneySpent > 0 ? moneySpent / effectivePrice : 0;
      const fee = (moneySpent * FEE_PERCENT) / 100;
      const netPurchase = moneySpent + fee;
      
      return {
        toWinAmount: moneySpent * WIN_MULTIPLIER,
        shares: shares,
        amountValue: moneySpent,
        fee: fee,
        netPurchase: netPurchase,
        effectivePrice: effectivePrice,
      };
    } else {
      // Sell Market, Buy Limit, Sell Limit: input is shares
      const shareCount = inputAmount;
      const amount = shareCount * effectivePrice;
      const fee = (amount * FEE_PERCENT) / 100;
      // For buy orders, add fee to cost; for sell orders, subtract fee from proceeds
      const net = isSell ? amount - fee : amount + fee;
      
      return {
        toWinAmount: isSell ? 0 : amount * WIN_MULTIPLIER,
        shares: shareCount,
        amountValue: amount,
        fee: fee,
        netPurchase: net,
        effectivePrice: effectivePrice,
      };
    }
  }, [inputAmount, selectedOutcome, isLimitOrder, limitPrice, activeTab, sharePrices]);

  // Event handlers
  const handleQuickAmount = useCallback((val: string) => {
    const isSell = activeTab === 'Sell';
    const isBuyLimit = activeTab === 'Buy' && isLimitOrder;
    const isBuyMarket = activeTab === 'Buy' && !isLimitOrder;
    
    if (val === 'Max') {
      if (isBuyLimit) {
        // For Buy Limit: calculate max shares based on balance, limit price, and fees
        // Formula: total cost = shares * limit_price + fee
        // fee = shares * limit_price * FEE_PERCENT / 100
        // total cost = shares * limit_price * (1 + FEE_PERCENT / 100)
        // max shares = available balance / (limit_price * (1 + FEE_PERCENT / 100))
        const effectivePrice = limitPrice / 100;
        const priceWithFee = effectivePrice * (1 + FEE_PERCENT / 100);
        const maxShares = Math.floor(balance / priceWithFee);
        onAmountChange(maxShares.toString());
      } else if (isSell) {
        // For Sell orders, use available shares
        onAmountChange(availableShares.toString());
      } else if (isBuyMarket) {
        // For Buy Market: calculate max dollars to spend accounting for fees
        // Formula: total cost = moneySpent + fee
        // fee = moneySpent * FEE_PERCENT / 100
        // total cost = moneySpent * (1 + FEE_PERCENT / 100)
        // max moneySpent = available balance / (1 + FEE_PERCENT / 100)
        const maxMoneySpent = Math.floor(balance / (1 + FEE_PERCENT / 100));
        onAmountChange(maxMoneySpent.toString());
      }
    } else {
      // Parse percentage value (e.g., "25%" -> 25)
      const percentage = parseInt(val.replace('%', ''));
      
      if (isBuyLimit) {
        // For Buy Limit: calculate percentage of max affordable shares (accounting for fees)
        const effectivePrice = limitPrice / 100;
        const priceWithFee = effectivePrice * (1 + FEE_PERCENT / 100);
        const maxShares = Math.floor(balance / priceWithFee);
        const calculatedAmount = Math.floor((maxShares * percentage) / 100);
        onAmountChange(calculatedAmount.toString());
      } else if (isBuyMarket) {
        // For Buy Market: calculate percentage of max affordable money to spend (accounting for fees)
        const maxMoneySpent = Math.floor(balance / (1 + FEE_PERCENT / 100));
        const calculatedAmount = Math.floor((maxMoneySpent * percentage) / 100);
        onAmountChange(calculatedAmount.toString());
      } else {
        // For Sell orders: calculate based on available shares
        const calculatedAmount = Math.floor((availableShares * percentage) / 100);
        onAmountChange(calculatedAmount.toString());
      }
    }
  }, [activeTab, availableShares, balance, isLimitOrder, limitPrice, onAmountChange]);

  const toggleExpiration = useCallback(() => {
    setExpirationEnabled(prev => !prev);
  }, []);

  return (
    <div 
      className="flex flex-col isolate items-start relative"
      style={{ width: '100%' }}
      data-name="buy sell block"
    >
      <Tabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        orderType={orderType} 
        onOrderTypeChange={setOrderType} 
      />
      
      <div 
        className="relative shrink-0"
        data-name="buy sell block" 
        style={{ 
          width: '100%',
          zIndex: 1,
          transition: 'all 200ms',
          overflow: 'visible',
          backgroundImage: 'var(--card-normal)',
          border: '1px solid var(--black-a1)',
          borderTop: '0px',
          boxShadow: 'var(--shadow-1)',
          borderBottomLeftRadius: 'var(--radius-card)',
          borderBottomRightRadius: 'var(--radius-card)',
          borderTopRightRadius: 'var(--radius-card)',
          borderTopLeftRadius: activeTab === 'Sell' ? 'var(--radius-card)' : '0px',
          paddingTop: 'var(--gap--1-25rem)',
          paddingBottom: 'var(--gap--1-5rem)',
          paddingLeft: 'var(--gap--1-25rem)',
          paddingRight: 'var(--gap--1-25rem)'
        }}
      >
        <div 
          className="box-border flex flex-col items-center relative" 
          style={{ 
            width: '100%',
            overflow: 'visible',
            gap: 'var(--gap--1-5rem)'
          }}
        >
          <motion.div 
            className="flex flex-col items-start relative shrink-0" 
            style={{ 
              width: '100%',
              overflow: 'visible',
              gap: 'var(--gap--0-75rem)'
            }}
            layout
            transition={LAYOUT_TRANSITION}
          >
            
            {/* Match Title - Show when matchInfo is provided */}
            {matchInfo && (
              <motion.div layout style={{ width: '100%' }}>
                <MatchTitle
                  team1Name={matchInfo.team1Name}
                  team2Name={matchInfo.team2Name}
                  selectedTeamCode={matchInfo.selectedTeamCode}
                  teamIcon={matchInfo.teamIcon}
                  teamColor={matchInfo.teamColor}
                />
              </motion.div>
            )}

            {/* Separator after match title */}
            {matchInfo && (
              <motion.div layout style={{ width: '100%' }}>
                <Separator />
              </motion.div>
            )}
              
            {/* Outcome Selection - Only for binary markets (YES/NO) and NOT sports markets */}
            {!isMultiOutcome && !matchInfo && (
              <motion.div 
                layout 
                className="flex"
                style={{ 
                  width: '100%',
                  gap: 'var(--gap--0-75rem)' 
                }}
              >
                <OutcomeButton
                  type="Yes"
                  price={formattedPrices.YES}
                  selected={selectedOutcome === 'YES'}
                  onClick={() => onOutcomeChange('YES')}
                />
                <OutcomeButton
                  type="No"
                  price={formattedPrices.NO}
                  selected={selectedOutcome === 'NO'}
                  onClick={() => onOutcomeChange('NO')}
                />
              </motion.div>
            )}

            {/* Selected Outcome Display - Only for multi-outcome markets and NO matchInfo */}
            {isMultiOutcome && !matchInfo && (
              <motion.div 
                layout 
                style={{ width: '100%' }}
                animate={shakeOutcome ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  if (!selectedOutcome) {
                    return (
                      <div 
                        className="flex items-center"
                        style={{
                          width: '100%',
                          background: 'var(--lum-02)',
                          border: '1px solid var(--black-a2)',
                          gap: 'var(--gap--0-75rem)',
                          paddingTop: '24px',
                          paddingBottom: '24px',
                          paddingLeft: 'var(--gap--1rem)',
                          paddingRight: 'var(--gap--1rem)',
                          borderRadius: '12px',
                          height: '82px'
                        }}
                      >
                         <div className="flex items-center justify-center" style={{ width: '100%' }}>
                           <span 
                             style={{
                               fontSize: 'var(--text-base)',
                               fontWeight: 'var(--font-weight-medium)',
                               color: 'var(--muted-foreground)'
                             }}
                           >
                             Select your side
                           </span>
                         </div>
                      </div>
                    );
                  }

                  let outcomeData = market?.outcomes?.find(
                    outcome => outcome.id.toLowerCase() === selectedOutcome.toLowerCase()
                  );
                  
                  // Override with matchInfo if available and matching
                  if (matchInfo && matchInfo.selectedTeamCode === selectedOutcome) {
                    outcomeData = {
                      id: selectedOutcome,
                      label: matchInfo.selectedTeamName || outcomeData?.label || selectedOutcome,
                      percentage: outcomeData?.percentage || 0,
                      color: matchInfo.teamColor || outcomeData?.color || 'var(--primary)',
                      icon: matchInfo.teamIcon || outcomeData?.icon || ''
                    };
                  }
                  
                  if (!outcomeData) return null;
                  
                  // Check icon type
                  const isEmoji = outcomeData.icon && /\p{Emoji}/u.test(outcomeData.icon);
                  const isLetter = outcomeData.icon && outcomeData.icon.length === 1 && !isEmoji;

                  return (
                    <div 
                      className="flex items-center"
                      style={{
                        width: '100%',
                        background: 'var(--lum-02)',
                        border: '1px solid var(--black-a2)',
                        gap: 'var(--gap--0-75rem)',
                        paddingTop: 'var(--gap--1rem)',
                        paddingBottom: 'var(--gap--1rem)',
                        paddingLeft: 'var(--gap--1rem)',
                        paddingRight: 'var(--gap--1rem)',
                        borderRadius: '12px'
                      }}
                    >
                      {/* Outcome Icon/Logo */}
                      <div 
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          transition: 'all 200ms',
                          background: isLetter ? outcomeData.color : (isEmoji ? 'var(--lum-03)' : outcomeData.color),
                          color: isLetter ? getTextColor(outcomeData.color) : 'white',
                          boxShadow: isLetter ? `0 0 16px ${outcomeData.color}40` : 'none'
                        }}
                      >
                        <span 
                          className="font-sans not-italic"
                          style={{
                            fontSize: isEmoji ? '24px' : '20px',
                            fontWeight: 'var(--font-weight-semi-bold)',
                          }}
                        >
                          {outcomeData.icon}
                        </span>
                      </div>
                      
                      {/* Outcome Name */}
                      <p 
                        className="font-sans not-italic"
                        style={{
                          lineHeight: '24px',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semi-bold)',
                          color: 'var(--card-foreground)'
                        }}
                      >
                        {outcomeData.label}
                      </p>
                    </div>
                  );
                })()}
              </motion.div>
            )}

            {/* Separator - Show for binary markets, hide for multi-outcome markets */}
            {!isMultiOutcome && (
              <motion.div layout style={{ width: '100%' }}>
                <Separator />
              </motion.div>
            )}

            {/* Amount Input */}
            <motion.div layout style={{ width: '100%' }}>
              <AmountInput
                amount={amount}
                balance={balance}
                isFocused={isFocused}
                hasInsufficientBalance={hasInsufficientBalance}
                onAmountChange={onAmountChange}
                onFocusChange={setIsFocused}
                onQuickAmount={handleQuickAmount}
                activeTab={activeTab}
                isLimitOrder={isLimitOrder}
                selectedOutcome={selectedOutcome}
                availableShares={availableShares}
              />
            </motion.div>

            {/* Limit Order Block - Collapses as one unit */}
            <AnimatePresence mode="sync">
              {isLimitOrder && (
                <motion.div
                  key="limit-block"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={LAYOUT_TRANSITION}
                  style={{ 
                    width: '100%',
                    overflow: 'visible' 
                  }}
                >
                  <div 
                    className="flex flex-col"
                    style={{ 
                      width: '100%',
                      gap: 'var(--gap--0-75rem)',
                      paddingTop: '6px',
                      paddingBottom: '6px'
                    }}
                  >
                    <Separator />
                    
                    <LimitPrice 
                      price={limitPrice}
                      onPriceChange={setLimitPrice}
                      selectedOutcome={selectedOutcome}
                    />
                    
                    <Separator />
                    
                    <SetExpiration 
                      enabled={expirationEnabled}
                      onToggle={toggleExpiration}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* To Win Card */}
            <motion.div layout style={{ width: '100%' }}>
              <ToWinCard 
                show={showToWin}
                selectedOutcome={selectedOutcome}
                toWinAmount={calculations.toWinAmount}
              />
            </motion.div>

            {/* Buy Button */}
            <motion.div layout style={{ width: '100%' }}>
              <BuyButton
                selectedOutcome={selectedOutcome}
                hasInsufficientBalance={hasInsufficientBalance}
                onClick={handleBuy}
                market={market}
              />
            </motion.div>

            {/* Information Card */}
            <motion.div layout style={{ width: '100%' }}>
              <InfoCard 
                show={showInfo}
                selectedOutcome={selectedOutcome}
                shares={calculations.shares}
                inputAmount={inputAmount}
                fee={calculations.fee}
                feePercent={FEE_PERCENT}
                netPurchase={calculations.netPurchase}
                activeTab={activeTab}
                isLimitOrder={isLimitOrder}
                amountValue={calculations.amountValue}
                limitPrice={limitPrice}
                effectivePrice={calculations.effectivePrice}
              />
            </motion.div>

          </motion.div>
        </div>
        
        {/* Card Border Shadow */}
        <div 
          aria-hidden="true" 
          className="absolute border-solid inset-0 pointer-events-none"
          style={{ 
            borderWidth: '1px', 
            borderColor: 'var(--black-a1)',
            boxShadow: '0px 8px 56px -12px rgba(0, 0, 0, 0.2)',
            transition: 'all 200ms',
            borderBottomLeftRadius: 'var(--radius-xl)',
            borderBottomRightRadius: 'var(--radius-xl)',
            borderTopRightRadius: 'var(--radius-xl)',
            borderTopLeftRadius: cardBorderRadius
          }}
        />
      </div>
    </div>
  );
}
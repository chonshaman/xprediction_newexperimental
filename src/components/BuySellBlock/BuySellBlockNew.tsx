import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw } from 'lucide-react';
import { BuySellBlockProps, Tab } from './types';
import { OrderType } from './OrderTypeSelector';
import { Tabs } from './Tabs';
import { AmountInput } from './AmountInput';
import { BuyButton } from './BuyButton';
import { OutcomeButton } from './OutcomeButton';
import { ToWinCard } from './ToWinCard';
import { InfoCard } from './InfoCard';
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

export function BuySellBlockNew({ 
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
    if (activeTab === 'Buy') {
      const moneySpent = inputAmount;
      const fee = (moneySpent * FEE_PERCENT) / 100;
      const totalCost = moneySpent + fee;
      return totalCost > balance;
    } else {
      return inputAmount > availableShares;
    }
  }, [activeTab, inputAmount, balance, availableShares]);

  // Calculations
  const calculations = useMemo(() => {
    // Get price based on outcome type
    let price: number;
    if (isMultiOutcome && market?.outcomes) {
      // For multi-outcome, get price from outcome percentage
      const outcome = market.outcomes.find(o => o.id === selectedOutcome);
      price = outcome ? outcome.percentage / 100 : 0.5;
    } else {
      // For binary YES/NO
      price = selectedOutcome === 'YES' ? sharePrices.YES : sharePrices.NO;
    }
    
    const shares = inputAmount / price;
    const fee = (inputAmount * FEE_PERCENT) / 100;
    const netPurchase = inputAmount + fee;
    const toWin = shares * WIN_MULTIPLIER;

    return {
      shares: Math.round(shares * 10) / 10,
      fee,
      netPurchase,
      toWin: Math.round(toWin),
      avgPrice: Math.round(price * 100)
    };
  }, [selectedOutcome, sharePrices, inputAmount, isMultiOutcome, market]);

  // Event handlers
  const handleQuickAmount = useCallback((val: string) => {
    const isSell = activeTab === 'Sell';
    const isBuyMarket = activeTab === 'Buy';
    
    if (val === 'Max') {
      if (isSell) {
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
      
      if (isBuyMarket) {
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
  }, [activeTab, availableShares, balance, onAmountChange]);

  return (
    <div 
      className="flex flex-col isolate items-start relative"
      style={{ width: '100%' }}
      data-name="buy sell block new"
    >
      {/* Tabs */}
      <Tabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        orderType={orderType} 
        onOrderTypeChange={setOrderType} 
      />
      
      {/* Main Card */}
      <div 
        className="relative shrink-0"
        data-name="buy sell block new" 
        style={{ 
          width: '100%',
          zIndex: 1,
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
            gap: 'var(--gap--1rem)'
          }}
        >
          <motion.div 
            className="flex flex-col items-start relative shrink-0" 
            style={{ 
              width: '100%',
              overflow: 'visible',
              gap: 'var(--gap--1rem)'
            }}
            layout
            transition={LAYOUT_TRANSITION}
          >
            {/* Outcome Buttons - Multi-outcome or Binary YES/NO */}
            {isMultiOutcome && market?.outcomes ? (
              // Multi-outcome selector: Display only the selected outcome or placeholder
              <motion.div 
                layout
                style={{ 
                  width: '100%' 
                }}
                animate={shakeOutcome ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                {selectedOutcome ? (
                  (() => {
                    const outcome = market.outcomes.find(o => o.id === selectedOutcome);
                    if (!outcome) return null;
                    
                    // Calculate gradient background using the outcome color
                    const hex = outcome.color.replace('#', '');
                    const r = parseInt(hex.substr(0, 2), 16);
                    const g = parseInt(hex.substr(2, 2), 16);
                    const b = parseInt(hex.substr(4, 2), 16);
                    const baseColor = `${r}, ${g}, ${b}`;
                    const background = `linear-gradient(135deg, rgba(${baseColor}, 0.45) 0%, rgba(${baseColor}, 0.25) 100%)`;
                    const borderColor = `rgba(${baseColor}, 0.3)`;
                    
                    return (
                      <div 
                        className="relative cursor-pointer"
                        onClick={() => onOutcomeChange(outcome.id)}
                        style={{
                          background,
                          borderRadius: 'var(--radius-card)',
                          height: '48px',
                          maxHeight: '48px',
                          minHeight: '48px',
                          width: '100%'
                        }}
                      >
                        <div
                          className="absolute border-solid inset-0 pointer-events-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]"
                          style={{
                            borderColor,
                            borderWidth: '1.6px',
                            borderRadius: 'var(--radius-card)'
                          }}
                        />
                        <div 
                          className="flex flex-row items-center"
                          style={{
                            width: '100%',
                            height: '48px',
                            paddingLeft: 'var(--gap--0-875rem)',
                            paddingRight: 'var(--gap--0-875rem)'
                          }}
                        >
                          <div 
                            className="flex items-center justify-between relative"
                            style={{ width: '100%' }}
                          >
                            <div 
                              className="flex items-center relative shrink-0"
                              style={{ 
                                gap: '2px',
                                zIndex: 3 
                              }}
                            >
                              <div 
                                className="box-border flex items-center justify-center relative shrink-0"
                                style={{ 
                                  padding: '2px',
                                  width: '24px',
                                  height: '24px'
                                }}
                              >
                                <div 
                                  className="flex items-center justify-center"
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: outcome.color
                                  }}
                                >
                                  <span 
                                    className="font-semibold"
                                    style={{ 
                                      fontSize: 'var(--text-xxs)', 
                                      color: 'var(--side-bar-hold-white)' 
                                    }}
                                  >
                                    {outcome.icon}
                                  </span>
                                </div>
                              </div>
                              <p 
                                className="font-sans leading-[24px] not-italic relative shrink-0 text-nowrap whitespace-pre"
                                style={{
                                  fontSize: 'var(--text-base)',
                                  fontWeight: 'var(--font-weight-semi-bold)',
                                  color: 'var(--primary)'
                                }}
                              >
                                {outcome.label}
                              </p>
                            </div>
                            <p 
                              className="font-sans not-italic relative shrink-0 text-right tabular-nums"
                              style={{
                                zIndex: 2,
                                width: '36px',
                                lineHeight: '24px',
                                fontSize: 'var(--text-base)',
                                fontWeight: 'var(--font-weight-semi-bold)',
                                color: 'var(--primary)'
                              }}
                            >
                              {outcome.percentage}%
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  // Placeholder when no outcome is selected
                  <div 
                    className="relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(90, 115, 120, 0.15) 0%, rgba(45, 58, 60, 0.08) 100%)',
                      borderRadius: 'var(--radius-card)',
                      height: '48px',
                      maxHeight: '48px',
                      minHeight: '48px',
                      width: '100%'
                    }}
                  >
                    <div
                      className="absolute border-solid inset-0 pointer-events-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]"
                      style={{
                        borderColor: 'var(--black-a1)',
                        borderWidth: '1px',
                        borderRadius: 'var(--radius-card)'
                      }}
                    />
                    <div 
                      className="flex flex-row items-center justify-center"
                      style={{
                        width: '100%',
                        height: '48px',
                        paddingLeft: 'var(--gap--0-875rem)',
                        paddingRight: 'var(--gap--0-875rem)'
                      }}
                    >
                      <p 
                        className="font-sans not-italic relative"
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        Select your outcome
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              // Binary outcome selector: Display only the selected YES/NO or placeholder
              <motion.div 
                layout
                style={{ 
                  width: '100%' 
                }}
                animate={shakeOutcome ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                {selectedOutcome ? (
                  (() => {
                    const isYes = selectedOutcome === 'YES';
                    const outcomeColor = isYes ? '#30A46C' : '#E5484D';
                    const outcomeLabel = isYes ? 'Yes' : 'No';
                    const outcomeIcon = isYes ? 'Y' : 'N';
                    const outcomePrice = isYes ? formattedPrices.YES : formattedPrices.NO;
                    
                    // Calculate gradient background using the outcome color
                    const hex = outcomeColor.replace('#', '');
                    const r = parseInt(hex.substr(0, 2), 16);
                    const g = parseInt(hex.substr(2, 2), 16);
                    const b = parseInt(hex.substr(4, 2), 16);
                    const baseColor = `${r}, ${g}, ${b}`;
                    const background = `linear-gradient(135deg, rgba(${baseColor}, 0.45) 0%, rgba(${baseColor}, 0.25) 100%)`;
                    const borderColor = `rgba(${baseColor}, 0.3)`;
                    
                    return (
                      <div 
                        className="relative cursor-pointer"
                        onClick={() => onOutcomeChange(selectedOutcome)}
                        style={{
                          background,
                          borderRadius: 'var(--radius-card)',
                          height: '48px',
                          maxHeight: '48px',
                          minHeight: '48px',
                          width: '100%'
                        }}
                      >
                        <div
                          className="absolute border-solid inset-0 pointer-events-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]"
                          style={{
                            borderColor,
                            borderWidth: '1.6px',
                            borderRadius: 'var(--radius-card)'
                          }}
                        />
                        <div 
                          className="flex flex-row items-center"
                          style={{
                            width: '100%',
                            height: '48px',
                            paddingLeft: 'var(--gap--0-875rem)',
                            paddingRight: 'var(--gap--0-875rem)'
                          }}
                        >
                          <div 
                            className="flex items-center justify-between relative"
                            style={{ width: '100%' }}
                          >
                            <div 
                              className="flex items-center relative shrink-0"
                              style={{ 
                                gap: '2px',
                                zIndex: 3 
                              }}
                            >
                              <div 
                                className="box-border flex items-center justify-center relative shrink-0"
                                style={{ 
                                  padding: '2px',
                                  width: '24px',
                                  height: '24px'
                                }}
                              >
                                <div 
                                  className="flex items-center justify-center"
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: outcomeColor
                                  }}
                                >
                                  <span 
                                    className="font-semibold"
                                    style={{ 
                                      fontSize: 'var(--text-xxs)', 
                                      color: 'var(--side-bar-hold-white)' 
                                    }}
                                  >
                                    {outcomeIcon}
                                  </span>
                                </div>
                              </div>
                              <p 
                                className="font-sans leading-[24px] not-italic relative shrink-0 text-nowrap whitespace-pre"
                                style={{
                                  fontSize: 'var(--text-base)',
                                  fontWeight: 'var(--font-weight-semi-bold)',
                                  color: 'var(--primary)'
                                }}
                              >
                                {outcomeLabel}
                              </p>
                            </div>
                            <p 
                              className="font-sans not-italic relative shrink-0 text-right tabular-nums"
                              style={{
                                zIndex: 2,
                                width: '36px',
                                lineHeight: '24px',
                                fontSize: 'var(--text-base)',
                                fontWeight: 'var(--font-weight-semi-bold)',
                                color: 'var(--primary)'
                              }}
                            >
                              {outcomePrice}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  // Placeholder when no outcome is selected
                  <div 
                    className="relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(90, 115, 120, 0.15) 0%, rgba(45, 58, 60, 0.08) 100%)',
                      borderRadius: 'var(--radius-card)',
                      height: '48px',
                      maxHeight: '48px',
                      minHeight: '48px',
                      width: '100%'
                    }}
                  >
                    <div
                      className="absolute border-solid inset-0 pointer-events-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]"
                      style={{
                        borderColor: 'var(--black-a1)',
                        borderWidth: '1px',
                        borderRadius: 'var(--radius-card)'
                      }}
                    />
                    <div 
                      className="flex flex-row items-center justify-center"
                      style={{
                        width: '100%',
                        height: '48px',
                        paddingLeft: 'var(--gap--0-875rem)',
                        paddingRight: 'var(--gap--0-875rem)'
                      }}
                    >
                      <p 
                        className="font-sans not-italic relative"
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        Select your outcome
                      </p>
                    </div>
                  </div>
                )}
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
                isLimitOrder={false}
                selectedOutcome={selectedOutcome}
                availableShares={availableShares}
              />
            </motion.div>

            {/* To Win Card */}
            <ToWinCard 
              show={!!selectedOutcome && inputAmount > 0}
              selectedOutcome={selectedOutcome}
              toWinAmount={calculations.toWin}
            />

            {/* Buy Button */}
            <motion.div layout style={{ width: '100%' }}>
              <BuyButton
                onClick={handleBuy}
                activeTab={activeTab}
                hasInsufficientBalance={hasInsufficientBalance}
                selectedOutcome={selectedOutcome}
                isLimitOrder={false}
              />
            </motion.div>

            {/* Info Card */}
            <InfoCard 
              show={!!selectedOutcome && inputAmount > 0}
              selectedOutcome={selectedOutcome}
              shares={calculations.shares}
              inputAmount={inputAmount}
              fee={calculations.fee}
              feePercent={FEE_PERCENT}
              netPurchase={calculations.netPurchase}
              activeTab={activeTab}
              isLimitOrder={false}
              amountValue={inputAmount}
              effectivePrice={selectedOutcome === 'YES' ? sharePrices.YES : sharePrices.NO}
              market={market}
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
}

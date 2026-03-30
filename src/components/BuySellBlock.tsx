import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'motion/react';
import svgPaths from "../imports/svg-7hm0uy5lcw";
import { BananaIcon } from './figma/BananaIcon';
import type { Market } from '../data/markets';

interface BuySellBlockProps {
  selectedOutcome: string;
  onOutcomeChange: (outcome: string) => void;
  amount: string;
  onAmountChange: (amount: string) => void;
  onBuy: () => void;
  market?: Market; // Added market prop for multi-outcome support
}

// Reusing the previous SVG components that were not replaced
function Info() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 z-[2]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px] cursor-pointer hover:opacity-80" data-name="Icon">
      {/* Simplified refresh icon from previous code */}
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 z-[2]">
         <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
         </svg>
      </div>
    </div>
  );
}

function OutcomeButton({ type, price, selected, onClick }: { type: 'Yes' | 'No', price: string, selected: boolean, onClick: () => void }) {
  const isYes = type === 'Yes';
  
  return (
    <motion.div 
      onClick={onClick}
      className="basis-0 bg-gradient-to-r from-[#293336] grow min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#293336] cursor-pointer" 
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\\\\'0 0 184 56\\\\\\' xmlns=\\\\\\'http://www.w3.org/2000/svg\\\\\\' preserveAspectRatio=\\\\\\'none\\\\\\'><rect x=\\\\\\'0\\\\\\' y=\\\\\\'0\\\\\\' height=\\\\\\'100%\\\\\\' width=\\\\\\'100%\\\\\\' fill=\\\\\\'url(%23grad)\\\\\\' opacity=\\\\\\'0.30000001192092896\\\\\\'/><defs><radialGradient id=\\\\\\'grad\\\\\\' gradientUnits=\\\\\\'userSpaceOnUse\\\\\\' cx=\\\\\\'0\\\\\\' cy=\\\\\\'0\\\\\\' r=\\\\\\'10\\\\\\' gradientTransform=\\\\\\'matrix(32.09 12.196 -41.913 8.899 29.937 -0.0000024959)\\\\\\'><stop stop-color=\\\\\\'rgba(90,115,120,1)\\\\\\' offset=\\\\\\'0\\\\\\'/><stop stop-color=\\\\\\'rgba(68,86,90,0.7625)\\\\\\' offset=\\\\\\'0.25\\\\\\'/><stop stop-color=\\\\\\'rgba(45,58,60,0.525)\\\\\\' offset=\\\\\\'0.5\\\\\\'/><stop stop-color=\\\\\\'rgba(23,29,30,0.2875)\\\\\\' offset=\\\\\\'0.75\\\\\\'/><stop stop-color=\\\\\\'rgba(0,0,0,0.05)\\\\\\' offset=\\\\\\'1\\\\\\'/></radialGradient></defs></svg>')" }}
      initial={{
        y: 0,
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,0.05)",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
      }}
      whileHover={!selected ? { 
        y: -3,
        backgroundColor: "rgba(255,255,255,0.025)",
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.08)"
      } : {}}
      whileTap={selected ? undefined : {
        y: 0,
        background: isYes 
          ? "linear-gradient(135deg, rgba(48, 164, 108, 0.2) 0%, rgba(48, 164, 108, 0.05) 100%)"
          : "linear-gradient(135deg, rgba(229, 72, 77, 0.2) 0%, rgba(229, 72, 77, 0.05) 100%)",
        boxShadow: isYes
          ? "0 8px 25px rgba(48, 164, 108, 0.2), 0 4px 10px rgba(48, 164, 108, 0.15)"
          : "0 8px 25px rgba(229, 72, 77, 0.2), 0 4px 10px rgba(229, 72, 77, 0.15)"
      }}
      animate={selected ? {
        y: 0,
        background: isYes 
          ? "linear-gradient(135deg, rgba(48, 164, 108, 0.25) 0%, rgba(48, 164, 108, 0.08) 100%)"
          : "linear-gradient(135deg, rgba(229, 72, 77, 0.25) 0%, rgba(229, 72, 77, 0.08) 100%)",
        boxShadow: isYes
          ? "0 8px 25px rgba(48, 164, 108, 0.25), 0 4px 10px rgba(48, 164, 108, 0.15)"
          : "0 8px 25px rgba(229, 72, 77, 0.25), 0 4px 10px rgba(229, 72, 77, 0.15)"
      } : {
        y: 0,
        background: "transparent",
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,0.05)",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
      }}
      transition={{ 
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1],
        y: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] },
        backgroundColor: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
        borderColor: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
        boxShadow: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
      }}
    >
      <motion.div 
        aria-hidden="true" 
        className="absolute border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]"
        animate={selected ? {
          borderColor: isYes ? "rgba(48, 164, 108, 0.3)" : "rgba(229, 72, 77, 0.3)",
          borderWidth: "1.6px"
        } : {
          borderColor: "rgba(255,255,255,0.05)",
          borderWidth: "1px"
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex isolate items-center justify-between px-[14px] py-[16px] relative w-full">
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0 z-[3]">
            <div className="box-border content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]">
               {/* Matching style with expandable card icon */}
               <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isYes ? 'bg-[#30A46C]' : 'bg-[#E5484D]'}`}>
                 <span className="text-[10px] font-semibold text-white">{isYes ? 'Y' : 'N'}</span>
               </div>
            </div>
            <p className="font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre">{type}</p>
          </div>
          <p className="font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[0px] text-[16px] text-right text-slate-100 w-[36px] z-[2]">{price}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Tabs({ activeTab, setActiveTab }: { activeTab: 'Buy' | 'Sell', setActiveTab: (t: 'Buy' | 'Sell') => void }) {
  return (
    <div className="content-stretch flex h-full items-end relative shrink-0 z-[2]">
      {['Buy', 'Sell'].map((tab) => {
        const isActive = activeTab === tab;
        return (
          <motion.div 
            key={tab}
            onClick={() => setActiveTab(tab as 'Buy' | 'Sell')}
            className={`box-border content-stretch flex gap-[16px] items-center justify-center px-[20px] py-[11px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[96px] cursor-pointer transition-all duration-200 group ${
              isActive 
                ? 'bg-card z-10' 
                : 'hover:bg-card/50 z-0'
            }`}
            // "Hover state overlap" - slight expansion downwards on hover if not active
            whileHover={!isActive ? { paddingBottom: "13px", marginBottom: "-2px" } : {}}
          >
            {isActive && (
               // Active tab blending mask/border logic handled by main container overlap usually, 
               // but we can ensure it sits "on top" via z-index.
               // Adding a bottom cover to hide the container border if it exists
               <div className="absolute bottom-[-2px] left-0 right-0 h-[4px] bg-card z-20" />
            )}
            <p className={`font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre transition-colors duration-200 ${isActive ? 'text-slate-100' : 'text-slate-400 group-hover:text-slate-200'}`}>{tab}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="box-border content-stretch flex gap-[7.99px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-white/5 transition-colors">
      <p className="font-sans font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-400 whitespace-pre">Market</p>
      <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
        <path d="M4 6L8 10L12 6" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

function Frame1({ activeTab, setActiveTab }: { activeTab: 'Buy' | 'Sell', setActiveTab: (t: 'Buy' | 'Sell') => void }) {
  return (
    <div className="content-stretch flex h-[40px] isolate items-start justify-between relative shrink-0 w-full z-[2]">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]">
        <ButtonMenu />
      </div>
    </div>
  );
}

// Component to animate the "To Win" number
function AnimatedNumber({ value }: { value: number }) {
  const springValue = useSpring(value, { stiffness: 200, damping: 25 });
  const displayValue = useTransform(springValue, (current) => current.toFixed(2));

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
}

// Component to animate integer numbers in info card
function AnimatedInteger({ value }: { value: number }) {
  const springValue = useSpring(value, { stiffness: 200, damping: 25 });
  const displayValue = useTransform(springValue, (current) => Math.round(current).toString());

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
}

// Component to animate decimal numbers with 1 decimal place
function AnimatedDecimal({ value }: { value: number }) {
  const springValue = useSpring(value, { stiffness: 200, damping: 25 });
  const displayValue = useTransform(springValue, (current) => current.toFixed(1));

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
}

export function BuySellBlock({ selectedOutcome, onOutcomeChange, amount, onAmountChange, onBuy, market }: BuySellBlockProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [balance] = useState(3600.28); // Mock balance from Figma design
  const [activeTab, setActiveTab] = useState<'Buy' | 'Sell'>('Buy');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Check if this is a multi-outcome market
  const isMultiOutcome = market?.outcomes && market.outcomes.length > 2;
  
  // Get current outcome data for multi-outcome markets
  const currentOutcomeData = isMultiOutcome 
    ? market?.outcomes?.find(o => o.id === selectedOutcome)
    : null;
  
  // Determine icon and color for selected outcome
  const outcomeIcon = currentOutcomeData 
    ? currentOutcomeData.icon 
    : (selectedOutcome === 'YES' ? 'Y' : 'N');
  const outcomeColor = currentOutcomeData 
    ? currentOutcomeData.color 
    : (selectedOutcome === 'YES' ? '#30A46C' : '#E5484D');
  
  const hasInsufficientBalance = parseFloat(amount || '0') > balance;
  const showToWin = parseFloat(amount || '0') > 0 && !hasInsufficientBalance;
  const showInfo = parseFloat(amount || '0') > 0;
  const toWinAmount = parseFloat(amount || '0') * 1.8;
  
  // Calculate information values
  const inputAmount = parseFloat(amount || '0');
  const shares = inputAmount > 0 ? inputAmount / (selectedOutcome === 'YES' ? 0.36 : 0.64) : 0;
  const feePercent = 0.2;
  const fee = (inputAmount * feePercent) / 100;
  const netPurchase = inputAmount;

  const handleQuickAmount = (val: string) => {
    if (val === 'Max') {
      onAmountChange(balance.toString());
    } else {
      const current = parseFloat(amount || '0');
      const add = parseFloat(val.replace('+', '').replace('$', ''));
      onAmountChange((current + add).toFixed(0));
    }
  };

  return (
    <div className="content-stretch flex flex-col isolate items-start relative w-full" data-name="buy sell block">
      <Frame1 activeTab={activeTab} setActiveTab={setActiveTab} />
      <div 
        // Added border here "have a border not radius" -> Assuming border with radius logic
        className={`bg-card w-full relative border border-white/5 rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] ${activeTab === 'Sell' ? 'rounded-tl-[16px]' : 'rounded-tl-none'} shrink-0 z-[1] transition-all duration-200`} 
        data-name="buy sell block" 
      >
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center w-full overflow-clip pb-[24px] pt-[20px] px-[20px] relative rounded-[inherit]">
          
          {/* Tabpanel */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            
            {/* Outcome Selection */}
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-100">
                    <p className="leading-[24px] whitespace-pre">Outcome</p>
                  </div>
                  <div className="box-border content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]">
                    <Info />
                  </div>
                </div>
                <Icon1 />
              </div>
              
              {isMultiOutcome ? (
                // Multi-outcome selector: Display outcome buttons from market data
                <div 
                  className="flex flex-col"
                  style={{ 
                    gap: 'var(--gap--0-75rem)',
                    width: '100%' 
                  }}
                >
                  {market!.outcomes!.map((outcome) => (
                    <motion.button
                      key={outcome.id}
                      onClick={() => onOutcomeChange(outcome.id)}
                      className="flex items-center justify-between"
                      style={{
                        paddingLeft: 'var(--gap--0-875rem)',
                        paddingRight: 'var(--gap--0-875rem)',
                        paddingTop: 'var(--gap--0-75rem)',
                        paddingBottom: 'var(--gap--0-75rem)',
                        background: selectedOutcome === outcome.id ? 'var(--lum-03)' : 'var(--lum-02)',
                        border: selectedOutcome === outcome.id ? '1.5px solid var(--primary-button-bg)' : '1px solid var(--black-a2)',
                        borderRadius: 'var(--border-radius--0-5rem)',
                        cursor: 'pointer',
                        transition: 'all 200ms ease-out'
                      }}
                      whileHover={selectedOutcome !== outcome.id ? { 
                        background: 'var(--lum-03)',
                        borderColor: 'var(--black-a3)'
                      } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center" style={{ gap: 'var(--gap--0-5rem)' }}>
                        <div 
                          className="flex items-center justify-center shrink-0"
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: outcome.color,
                            fontSize: 'var(--text-xxs)',
                            fontWeight: 'var(--font-weight-semi-bold)',
                            color: 'white',
                          }}
                        >
                          {outcome.icon}
                        </div>
                        <span 
                          className="font-sans"
                          style={{
                            fontSize: 'var(--text-base)',
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
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semi-bold)',
                          color: 'var(--card-foreground)',
                        }}
                      >
                        {outcome.percentage}%
                      </span>
                    </motion.button>
                  ))}
                </div>
              ) : (
                // Binary outcome selector: YES/NO buttons
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <OutcomeButton 
                    type="Yes" 
                    price="36¢" 
                    selected={selectedOutcome === 'YES'} 
                    onClick={() => onOutcomeChange('YES')}
                  />
                  <OutcomeButton 
                    type="No" 
                    price="64¢" 
                    selected={selectedOutcome === 'NO'} 
                    onClick={() => onOutcomeChange('NO')}
                  />
                </div>
              )}
            </div>

            {/* Input Amount Container */}
            <motion.div 
              className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[4px] relative rounded-[12px] shrink-0 w-full border border-transparent overflow-hidden cursor-text"
              onClick={() => inputRef.current?.focus()}
              animate={
                hasInsufficientBalance 
                  ? "error" 
                  : isFocused 
                    ? "focused" 
                    : "default"
              }
              whileHover={!isFocused && !hasInsufficientBalance ? "hover" : undefined}
              variants={{
                default: {
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  borderColor: "rgba(255,255,255,0)",
                  backgroundColor: "rgba(0,0,0,0)",
                  boxShadow: "0px 0px 0px rgba(0,0,0,0)"
                },
                hover: {
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  boxShadow: "0px 0px 0px rgba(0,0,0,0)"
                },
                focused: {
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  borderColor: "#6952fe",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  boxShadow: "0 0 0 1px #6952fe, 0 0 40px rgba(105, 82, 254, 0.35)"
                },
                error: {
                  paddingLeft: "14px",
                  paddingRight: "14px",
                  borderColor: "#e5484d",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  boxShadow: "0 0 0 1px #e5484d"
                }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
               {/* Input Row */}
               <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                     <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-slate-100 w-full">
                        <p className="leading-[24px]">Amount</p>
                     </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow h-[60px] items-center justify-end min-h-px min-w-px relative shrink-0">
                     {/* Right side with Dollar and Input - SCALING ANIMATION ADDED */}
                     <motion.div 
                       className="flex items-center justify-end h-full w-full"
                       animate={{ scale: isFocused ? 1.1 : 1 }}
                       transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                       style={{ transformOrigin: "right center" }}
                     >
                        {/* Dollar Sign */}
                        <span className="font-sans font-semibold text-[30px] text-slate-400 tracking-[-0.225px] mr-[1px] mb-[2px]">$</span>
                        
                        {/* Input Wrapper */}
                        <div className="relative h-[40px] flex items-center">
                           {/* Phantom span to set width */}
                           <span className="invisible font-sans font-semibold text-[30px] tracking-[-0.225px] whitespace-pre px-0.5">
                              {amount || '0'}
                           </span>
                           
                           {/* Actual Input */}
                           <input 
                              ref={inputRef}
                              type="number"
                              value={amount}
                              onFocus={() => setIsFocused(true)}
                              onBlur={() => setIsFocused(false)}
                              onChange={(e) => onAmountChange(e.target.value)}
                              className="absolute inset-0 w-full h-full bg-transparent text-right focus:outline-none font-sans font-semibold text-[30px] tracking-[-0.225px] text-slate-100 placeholder-slate-600 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none p-0 m-0"
                              placeholder="0"
                           />
                        </div>
                     </motion.div>
                  </div>
               </div>

               {/* Balance & Quick Buttons Row */}
               <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start pb-[1.215px] pt-[1.785px] px-0 relative shrink-0">
                     <div className="flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f8f] text-[12px] text-nowrap">
                        <p className="leading-[20px] whitespace-pre mb-1">Available balance:</p>
                     </div>
                     <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                        <div className={`content-stretch flex font-sans font-medium items-center leading-[20px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre ${hasInsufficientBalance ? 'text-[#e5484d]' : 'text-slate-400'}`}>
                           ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                     </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                     {['+$1', '+$20', '+$100', 'Max'].map((label) => (
                        <motion.div 
                           key={label}
                           onClick={(e) => {
                             e.stopPropagation(); // Prevent focus loop if clicking buttons
                             handleQuickAmount(label);
                           }}
                           className="bg-[#232b30] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors"
                           // Simple move up on hover
                           whileHover={{ y: -2, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } }}
                           whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                        >
                           <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                           <div className="flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-slate-100">
                              <p className="leading-[20px] whitespace-pre">{label}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* Error Message */}
               {hasInsufficientBalance && (
                  <motion.div layout className="flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5484d] text-[14px] text-nowrap w-full items-end">
                     <p className="leading-[20px] whitespace-pre">Insufficient balance</p>
                  </motion.div>
               )}
            </motion.div>

            {/* To Win Est Block - Moved outside input container */}
            <AnimatePresence initial={false}>
              {showToWin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative w-full overflow-hidden"
                >
                  <div className="bg-[#113b29] relative rounded-[8px] shrink-0 w-full">
                      <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[6px] relative w-full">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                            <BananaIcon />
                            <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-nowrap">
                              <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[14px] text-slate-100">
                                  <p className="leading-[24px] text-nowrap whitespace-pre">To Win Est.</p>
                              </div>
                              <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[12px] text-right text-slate-400">
                                  <p className="leading-[20px] text-nowrap whitespace-pre">
                                    Avg. Price: {selectedOutcome === 'YES' ? '52' : '48'}<span className="font-sans font-medium not-italic">¢</span>
                                  </p>
                              </div>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-slate-50">
                              <p className="leading-[28px] whitespace-pre">
                                $<AnimatedNumber value={toWinAmount} />
                              </p>
                            </div>
                        </div>
                      </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buy Button */}
            <div 
              onClick={!hasInsufficientBalance ? onBuy : undefined}
              className={`relative rounded-[8px] shrink-0 w-full cursor-pointer transition-opacity ${hasInsufficientBalance ? 'opacity-50 cursor-not-allowed bg-[#232b30]' : 'hover:opacity-90 bg-[#6952fe]'}`} 
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04)]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[8px] isolate items-center justify-center p-[12px] relative w-full">
                  <p className="font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-100 whitespace-pre z-[3]">
                     {hasInsufficientBalance ? 'Insufficient Balance' : `Buy ${selectedOutcome}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Information Block - Shares, Fee, Net Purchase - MOVED BELOW BUY BUTTON */}
            <AnimatePresence initial={false}>
              {showInfo && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="relative w-full overflow-hidden"
                >
                  <div className="bg-card border border-white/5 relative rounded-[8px] shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col px-[16px] py-[12px] relative w-full gap-[8px]">
                      {/* Shares Row */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-[8px]">
                          <div 
                            className="w-[20px] h-[20px] rounded-full flex items-center justify-center"
                            style={{ backgroundColor: outcomeColor }}
                          >
                            <span className="text-[10px] font-semibold text-white">{outcomeIcon}</span>
                          </div>
                          <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-400">
                            <p className="leading-[20px]"><AnimatedDecimal value={shares} /> Shares</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-100">
                          <p className="leading-[20px]">$<AnimatedInteger value={inputAmount} /></p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-white/5" />

                      {/* Fee Row */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-400">
                          <p className="leading-[20px]">Fee ({feePercent}%)</p>
                        </div>
                        <div className="flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-100">
                          <p className="leading-[20px]">$<AnimatedInteger value={fee} /></p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-white/5" />

                      {/* Net Purchase Row */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-400">
                          <p className="leading-[20px]">Net Purchase</p>
                        </div>
                        <div className="flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-slate-100">
                          <p className="leading-[20px]">$<AnimatedInteger value={netPurchase} /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shadow-[0px_8px_56px_-12px_rgba(0,0,0,0.2)]" />
      </div>
    </div>
  );
}
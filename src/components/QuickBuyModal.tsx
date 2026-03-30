import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-08dg7pjb6g';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PrimaryButton } from './PrimaryButton';
import { useBalance } from '../contexts/BalanceContext';
import { toast } from 'sonner@2.0.3';

interface QuickBuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  market: {
    image: string;
    question: string;
    yesPercentage?: number;
    noPercentage?: number;
    outcomes?: Array<{
      id: string;
      label: string;
      percentage: number;
      color: string;
      icon: string;
    }>;
  };
  prediction: 'yes' | 'no';
  cardPosition: { top: number; left: number; width: number; height: number };
  onSuccess?: () => void;
  selectedOutcomeId?: string; // For multi-outcome markets
}

export function QuickBuyModal({ isOpen, onClose, market, prediction, cardPosition, onSuccess, selectedOutcomeId }: QuickBuyModalProps) {
  const [amount, setAmount] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<number | 'max' | null>(null);
  const { balance: availableBalance, decreaseBalance } = useBalance();
  
  // Check if this is a multi-outcome market
  const isMultiOutcome = market.outcomes && market.outcomes.length > 2;
  const selectedOutcome = isMultiOutcome && selectedOutcomeId 
    ? market.outcomes?.find(o => o.id === selectedOutcomeId)
    : undefined;
  
  // Get chance percentage
  const chance = isMultiOutcome && selectedOutcome
    ? prediction === 'yes' ? selectedOutcome.percentage : (100 - selectedOutcome.percentage)
    : prediction === 'yes' ? market.yesPercentage || 59 : market.noPercentage || 41;
    
  const toWinEst = Math.round((amount / chance) * 100);

  useEffect(() => {
    if (isOpen) {
      // Auto-focus the input when modal opens
      setIsFocused(true);
      setTimeout(() => {
        document.getElementById('quickbuy-amount-input')?.focus();
      }, 100);
    } else {
      // Reset focus state when modal closes
      setIsFocused(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Don't prevent body scroll - allow page scrolling while modal is open
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  const quickAmounts = [25, 50];

  const handleBuy = async () => {
    // Check if user has enough balance
    if (amount > availableBalance) {
      toast.error('Insufficient Balance', {
        description: `You need $${amount.toFixed(2)} but only have $${availableBalance.toFixed(2)}`,
        position: 'top-right',
        duration: 4000,
      });
      return;
    }

    setIsLoading(true);
    
    // Decrease balance immediately when purchase starts
    decreaseBalance(amount);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    // Close modal after showing success
    setTimeout(() => {
      onSuccess?.(); // Notify parent component
      onClose();
      // Reset states after modal closes
      setTimeout(() => {
        setIsSuccess(false);
      }, 300);
    }, 1500);
  };

  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Calculate modal dimensions
  const modalWidth = isMobile ? (typeof window !== 'undefined' ? window.innerWidth * 0.96 : 300) : cardPosition.width * 1.08;
  
  // Estimate modal height (approximate based on content)
  const modalHeight = isMobile ? 420 : 460;
  
  // Center the modal on the card position
  // Calculate card center point
  const cardCenterX = cardPosition.left + cardPosition.width / 2;
  const cardCenterY = cardPosition.top + cardPosition.height / 2;
  
  // Position modal so its center aligns with card center, then move down 32px
  const targetTop = cardCenterY - modalHeight / 2 + 32;
  const targetLeft = isMobile ? (typeof window !== 'undefined' ? window.innerWidth * 0.02 : 10) : cardCenterX - modalWidth / 2;

  // Use portal to render modal at document root, escaping any stacking contexts
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Click outside to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-black/20"
            onClick={onClose}
          />

          {/* Modal positioned centered on card */}
          <motion.div
            key="quick-buy-modal"
            initial={{ 
              opacity: 0,
              top: cardCenterY - modalHeight / 2,
              left: isMobile ? '2%' : cardCenterX - (cardPosition.width * 1.08) / 2,
              width: isMobile ? '96%' : cardPosition.width * 1.08,
              scale: 0.96,
            }}
            animate={{ 
              opacity: 1,
              top: targetTop,
              left: targetLeft,
              width: modalWidth,
              scale: 1,
            }}
            exit={{ 
              opacity: 0,
              scale: 0.88,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 1, 1],
              }
            }}
            transition={{ 
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed z-[9999]"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="rounded-[var(--radius-xl)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.05)]"
              style={{
                background: 'var(--card-normal, linear-gradient(180deg, var(--lum-02, #FFFEFC) 0%, var(--lum-02, #FFFEFC) 106.49%))',
                border: '1px solid var(--black-a2)'
              }}
            >
              <div className="p-3.5 sm:py-3.5 py-6" style={{ fontSize: 'var(--text-s)' }}>
                {/* Market Question with Image */}
                <div className="content-stretch flex items-start justify-between mb-[10px] sm:mb-[12px]">
                  <div className="basis-0 content-stretch flex flex-col grow items-start max-h-[80px] min-h-[56px] sm:min-h-[60px] min-w-px">
                    <p 
                      className="font-semibold text-card-foreground w-full max-h-[64px] min-h-[56px] sm:min-h-[60px] overflow-ellipsis overflow-hidden"
                      style={{
                        fontSize: 'var(--text-l)',
                        lineHeight: '22px'
                      }}
                    >
                      {market.question}
                    </p>
                  </div>
                  <div className="max-w-[77.5385px] relative self-stretch shrink-0 w-[56px] sm:w-[64px]">
                    <div className="absolute h-[48px] sm:h-[56px] left-[16px] sm:left-[20px] rounded-[4px] top-0 w-[40px] sm:w-[44px] overflow-hidden">
                      <ImageWithFallback 
                        src={market.image} 
                        alt={market.question}
                        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Content area that dims during loading */}
                <motion.div 
                  className="relative"
                  animate={{ opacity: isLoading ? 0.4 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
                >
                  {/* Prediction Type */}
                  <div className="flex items-center justify-between mb-1.5">
                    {isMultiOutcome && selectedOutcome ? (
                      /* Multi-outcome: Show outcome label on left, prediction icon + text in middle */
                      <>
                        <div className="flex items-center gap-1.5">
                          <p 
                            className="text-card-foreground font-medium"
                            style={{ fontSize: 'var(--text-sm)' }}
                          >
                            {selectedOutcome.label}
                          </p>
                          <div className="flex items-center gap-0.5">
                            {/* Yes/No Icon */}
                            <div className="content-stretch flex items-center justify-center p-[2px] shrink-0 size-[24px]">
                              <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                                {prediction === 'yes' ? (
                                  <>
                                    {/* Yes Green Icon with dark theme gradient */}
                                    <div className="absolute inset-[4.17%]">
                                      <div className="absolute inset-[4.17%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                                          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_yes_dark)" />
                                          <defs>
                                            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes_dark" r="1">
                                              <stop offset="0.1358" stopColor="#2F7C57" />
                                              <stop offset="0.7046" stopColor="#3DD68C" />
                                              <stop offset="0.7778" stopColor="#28684A" />
                                              <stop offset="0.8078" stopColor="#33B074" />
                                              <stop offset="0.9109" stopColor="#30A46C" />
                                              <stop offset="0.9623" stopColor="#2F7C57" />
                                              <stop offset="0.9725" stopColor="#28684A" />
                                              <stop offset="1" stopColor="#20573E" />
                                            </radialGradient>
                                          </defs>
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                                        <path d={svgPaths.p294227c0} fill="#F1F5F9" />
                                      </svg>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {/* No Red Icon with dark theme gradient */}
                                    <div className="absolute inset-[4.17%]">
                                      <div className="absolute inset-[4.17%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                                          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_no_dark)" />
                                          <defs>
                                            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no_dark" r="1">
                                              <stop offset="0.1358" stopColor="#B54548" />
                                              <stop offset="0.7046" stopColor="#FF9592" />
                                              <stop offset="0.7778" stopColor="#8C333A" />
                                              <stop offset="0.8078" stopColor="#EC5D5E" />
                                              <stop offset="0.9109" stopColor="#E5484D" />
                                              <stop offset="0.9623" stopColor="#B54548" />
                                              <stop offset="0.9725" stopColor="#8C333A" />
                                              <stop offset="1" stopColor="#72232D" />
                                            </radialGradient>
                                          </defs>
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="absolute inset-[29.17%_31.25%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
                                        <path d={svgPaths.p2b92e400} fill="#F1F5F9" />
                                      </svg>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <span 
                              className="text-card-foreground capitalize"
                              style={{ fontSize: 'var(--text-xs)' }}
                            >
                              {prediction}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Standard market: Show "Your prediction:" label */
                      <div className="flex items-center gap-0.5">
                        <p 
                          className="text-muted-foreground"
                          style={{ fontSize: 'var(--text-xs)' }}
                        >
                          Your prediction:
                        </p>
                        <div className="flex items-center gap-0.5">
                          {/* Yes/No Icon - Same as MarketCard */}
                          <div className="content-stretch flex items-center justify-center p-[2px] shrink-0 size-[24px]">
                            <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                              {prediction === 'yes' ? (
                                <>
                                  {/* Yes Green Icon with dark theme gradient */}
                                  <div className="absolute inset-[4.17%]">
                                    <div className="absolute inset-[4.17%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                                        <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_yes_dark)" />
                                        <defs>
                                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes_dark" r="1">
                                            <stop offset="0.1358" stopColor="#2F7C57" />
                                            <stop offset="0.7046" stopColor="#3DD68C" />
                                            <stop offset="0.7778" stopColor="#28684A" />
                                            <stop offset="0.8078" stopColor="#33B074" />
                                            <stop offset="0.9109" stopColor="#30A46C" />
                                            <stop offset="0.9623" stopColor="#2F7C57" />
                                            <stop offset="0.9725" stopColor="#28684A" />
                                            <stop offset="1" stopColor="#20573E" />
                                          </radialGradient>
                                        </defs>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                                      <path d={svgPaths.p294227c0} fill="#F1F5F9" />
                                    </svg>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {/* No Red Icon with dark theme gradient */}
                                  <div className="absolute inset-[4.17%]">
                                    <div className="absolute inset-[4.17%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                                        <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_no_dark)" />
                                        <defs>
                                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no_dark" r="1">
                                            <stop offset="0.1358" stopColor="#B54548" />
                                            <stop offset="0.7046" stopColor="#FF9592" />
                                            <stop offset="0.7778" stopColor="#8C333A" />
                                            <stop offset="0.8078" stopColor="#EC5D5E" />
                                            <stop offset="0.9109" stopColor="#E5484D" />
                                            <stop offset="0.9623" stopColor="#B54548" />
                                            <stop offset="0.9725" stopColor="#8C333A" />
                                            <stop offset="1" stopColor="#72232D" />
                                          </radialGradient>
                                        </defs>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="absolute inset-[29.17%_31.25%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
                                      <path d={svgPaths.p2b92e400} fill="#F1F5F9" />
                                    </svg>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <span 
                            className="text-card-foreground capitalize"
                            style={{ fontSize: 'var(--text-xs)' }}
                          >
                            {prediction}
                        </span>
                      </div>
                    </div>
                    )}
                    <div className="flex items-center gap-2">
                      <p 
                        className="text-muted-foreground"
                        style={{ fontSize: 'var(--text-xs)' }}
                      >
                        Chance:
                      </p>
                      <p 
                        className="text-card-foreground"
                        style={{ fontSize: 'var(--text-xs)' }}
                      >
                        {chance}%
                      </p>
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div 
                    className="box-border content-stretch flex flex-col gap-[4px] items-start pb-[12px] pt-0 relative rounded-[12px] shrink-0 w-full border cursor-text mb-2.5 transition-all duration-200 ease-out"
                    onClick={() => document.getElementById('quickbuy-amount-input')?.focus()}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      paddingLeft: isFocused ? "16px" : isHovered ? "12px" : "4px",
                      paddingRight: isFocused ? "16px" : isHovered ? "12px" : "4px",
                      borderColor: isFocused ? "var(--primary-button-bg)" : isHovered ? "var(--muted-foreground)" : "transparent",
                      backgroundColor: isFocused || isHovered ? "var(--lum-02)" : "transparent",
                      boxShadow: isFocused ? "0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)" : isHovered ? "0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)" : "none"
                    }}
                  >
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="text-card-foreground">Amount</p>
                      <div className="basis-0 content-stretch flex grow h-[60px] items-center justify-end min-h-px min-w-px relative shrink-0">
                        <motion.div 
                          className="flex items-center justify-end h-full w-full"
                          animate={{ scale: isFocused ? 1.1 : 1 }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                          style={{ transformOrigin: "right center" }}
                        >
                          <span className="font-sans font-semibold text-[30px] text-muted-foreground tracking-[-0.225px] mr-[1px] mb-[2px]">$</span>
                          
                          <div className="relative h-[40px] flex items-center">
                            <span className="invisible font-sans font-semibold text-[30px] tracking-[-0.225px] whitespace-pre px-0.5 tabular-nums">
                              {amount || '0'}
                            </span>
                            
                            <input
                              id="quickbuy-amount-input"
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value) || 0))}
                              onFocus={() => setIsFocused(true)}
                              onBlur={() => setIsFocused(false)}
                              className="absolute inset-0 w-full h-full bg-transparent text-right focus:outline-none font-sans font-semibold text-[30px] tracking-[-0.225px] text-card-foreground placeholder:text-muted-foreground/40 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none p-0 m-0 tabular-nums"
                              placeholder="0"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between relative shrink-0 w-full">
                      <div className="flex flex-col overflow-visible">
                        <p 
                          className="text-muted-foreground mb-1 whitespace-nowrap overflow-visible"
                          style={{
                            fontSize: 'var(--text-xs)',
                            lineHeight: '20px'
                          }}
                        >
                          Available balance:
                        </p>
                        <p 
                          className="text-muted-foreground whitespace-nowrap overflow-visible"
                          style={{
                            fontSize: 'var(--text-xs)',
                            lineHeight: '20px'
                          }}
                        >
                          ${availableBalance.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {quickAmounts.map((quickAmount) => (
                          <motion.button
                            key={quickAmount}
                            onMouseDown={(e) => {
                              // Prevent input from losing focus
                              e.preventDefault();
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const calculatedAmount = Math.floor((availableBalance * quickAmount) / 100);
                              setAmount(calculatedAmount);
                              // Keep input focused after click
                              setTimeout(() => {
                                document.getElementById('quickbuy-amount-input')?.focus();
                              }, 0);
                            }}
                            onMouseEnter={() => setHoveredButton(quickAmount)}
                            onMouseLeave={() => setHoveredButton(null)}
                            className="rounded-full px-2 py-1 transition-colors"
                            style={{
                              fontSize: 'var(--text-xs)',
                              lineHeight: '20px',
                              background: 'var(--side-bar-outline)',
                              border: '1px solid var(--black-a2)',
                              color: hoveredButton === quickAmount ? 'var(--var---primary-)' : 'var(--muted-foreground)'
                            }}
                            whileHover={{
                              y: -2,
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
                            }}
                            whileTap={{
                              y: 0,
                              scale: 0.95,
                            }}
                            transition={{ duration: 0.15 }}
                          >
                            {quickAmount}%
                          </motion.button>
                        ))}
                        <motion.button
                          onMouseDown={(e) => {
                            // Prevent input from losing focus
                            e.preventDefault();
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setAmount(Math.floor(availableBalance));
                            // Keep input focused after click
                            setTimeout(() => {
                              document.getElementById('quickbuy-amount-input')?.focus();
                            }, 0);
                          }}
                          onMouseEnter={() => setHoveredButton('max')}
                          onMouseLeave={() => setHoveredButton(null)}
                          className="rounded-full px-2 py-1 transition-colors"
                          style={{
                            fontSize: 'var(--text-xs)',
                            lineHeight: '20px',
                            background: 'var(--side-bar-outline)',
                            border: '1px solid var(--black-a2)',
                            color: hoveredButton === 'max' ? 'var(--var---primary-)' : 'var(--muted-foreground)'
                          }}
                          whileHover={{
                            y: -2,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
                          }}
                          whileTap={{
                            y: 0,
                            scale: 0.95,
                          }}
                          transition={{ duration: 0.15 }}
                        >
                          Max
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* To Win Estimate */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5">
                        <svg className="block size-full" viewBox="0 0 20 20" fill="none">
                          <path d="M6.25 11.25V8.75M10 6.25V8.75M13.75 3.75V8.75M6.25 11.25C6.25 11.9404 5.69036 12.5 5 12.5C4.30964 12.5 3.75 11.9404 3.75 11.25C3.75 10.5596 4.30964 10 5 10C5.69036 10 6.25 10.5596 6.25 11.25ZM10 6.25C10 6.94036 9.44036 7.5 8.75 7.5C8.05964 7.5 7.5 6.94036 7.5 6.25C7.5 5.55964 8.05964 5 8.75 5C9.44036 5 10 5.55964 10 6.25ZM13.75 3.75C13.75 4.44036 13.1904 5 12.5 5C11.8096 5 11.25 4.44036 11.25 3.75C11.25 3.05964 11.8096 2.5 12.5 2.5C13.1904 2.5 13.75 3.05964 13.75 3.75Z" stroke="url(#paint0_linear_banana)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 12.5L8.75 7.5L12.5 5L15 8.75V15C15 16.3807 13.8807 17.5 12.5 17.5H7.5C6.11929 17.5 5 16.3807 5 15V12.5Z" fill="url(#paint1_linear_banana)" stroke="url(#paint2_linear_banana)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <defs>
                            <linearGradient id="paint0_linear_banana" x1="3.75" y1="2.5" x2="13.75" y2="12.5" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFD700"/>
                              <stop offset="1" stopColor="#FFA500"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_banana" x1="5" y1="5" x2="15" y2="17.5" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFE68C"/>
                              <stop offset="1" stopColor="#FFB347"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_banana" x1="5" y1="5" x2="15" y2="17.5" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFD700"/>
                              <stop offset="1" stopColor="#FFA500"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p 
                        className="text-muted-foreground"
                        style={{ fontSize: 'var(--text-xs)' }}
                      >
                        To Win Est.
                      </p>
                    </div>
                    <p 
                      className="text-card-foreground"
                      style={{ fontSize: 'var(--text-xs)' }}
                    >
                      ${toWinEst}
                    </p>
                  </div>

                  {/* Confirm Button */}
                  <PrimaryButton 
                    onClick={handleBuy}
                    disabled={isLoading || isSuccess}
                    className="w-full rounded-[var(--radius-button)] py-3 transition-all duration-200 relative overflow-hidden disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: isSuccess ? 'var(--chart-1)' : undefined,
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <svg
                            className="animate-spin h-5 w-5 text-primary-foreground"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Processing...</span>
                        </motion.div>
                      ) : isSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.svg
                            className="h-5 w-5 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          >
                            <motion.path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                          <span>Success!</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="default"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          Buy {prediction === 'yes' ? 'Yes' : 'No'}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </PrimaryButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
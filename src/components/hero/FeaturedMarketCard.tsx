import { useState, useRef, useEffect, useMemo, memo } from 'react';
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { X } from "lucide-react";
import svgPaths from "../../imports/svg-08dg7pjb6g";
import { motion, AnimatePresence } from 'motion/react';
import type { Market } from "../../data/markets";
import { PrimaryButton } from "../PrimaryButton";
import { useBalance } from '../../contexts/BalanceContext';
import { getRandomUsername } from '../../utils/format';
import { useSavedMarkets } from '../../context/SavedMarketsContext';
import { SaveIcon } from '../SaveIcon';
import { toast } from 'sonner@2.0.3';

interface FeaturedMarketCardProps extends Market {
  isQuickBuyOpen?: boolean;
  onOpenQuickBuy?: (marketId: string) => void;
  onCloseQuickBuy?: () => void;
  onMarketSelect?: (market: Market) => void;
}

export const FeaturedMarketCard = memo(function FeaturedMarketCard(market: FeaturedMarketCardProps) {
  const { isQuickBuyOpen = false, onOpenQuickBuy, onCloseQuickBuy, onMarketSelect } = market;
  const [selectedPrediction, setSelectedPrediction] = useState<'yes' | 'no'>('yes');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [amount, setAmount] = useState('1');
  const [isFocused, setIsFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<number | 'max' | null>(null);
  const { balance: availableBalance, decreaseBalance } = useBalance();
  const cardRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Use saved markets context
  const { isSaved: isMarketSaved, toggleSavedMarket } = useSavedMarkets();
  const isSaved = isMarketSaved(market.id);

  // Unique input ID for this card - must be defined before useEffect
  const inputId = `quickbuy-inline-input-${market.id}`;

  const amountNumber = parseFloat(amount) || 0;
  const chance = selectedPrediction === 'yes' ? market.prediction.yesPercentage : market.prediction.noPercentage;
  const toWinEst = Math.round((amountNumber / chance) * 100);

  // Reset state when QuickBuy closes
  useEffect(() => {
    if (!isQuickBuyOpen) {
      setAmount('1');
      setIsLoading(false);
      setIsSuccess(false);
      setIsFocused(false);
      setIsInputHovered(false);
    }
  }, [isQuickBuyOpen]);

  // Auto-focus input when QuickBuy opens
  useEffect(() => {
    if (isQuickBuyOpen && inputRef.current) {
      // Use multiple strategies to ensure focus works
      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Also manually trigger focus state
          setIsFocused(true);
        }
      };

      // Try immediately
      focusInput();
      
      // Try again with multiple intervals to catch all scenarios
      const timers: NodeJS.Timeout[] = [];
      
      // Short intervals for fast renders
      timers.push(setTimeout(focusInput, 50));
      timers.push(setTimeout(focusInput, 100));
      timers.push(setTimeout(focusInput, 150));
      
      // Medium intervals for carousel animations
      timers.push(setTimeout(focusInput, 200));
      timers.push(setTimeout(focusInput, 300));
      timers.push(setTimeout(focusInput, 400));
      
      // Longer intervals for slow renders/lazy loading
      timers.push(setTimeout(focusInput, 500));
      timers.push(setTimeout(focusInput, 600));
      timers.push(setTimeout(focusInput, 800));
      timers.push(setTimeout(focusInput, 1000));
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [isQuickBuyOpen]);

  const handleSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleCloseQuickBuy = () => {
    if (onCloseQuickBuy) {
      onCloseQuickBuy();
    }
    setAmount('1');
    setIsLoading(false);
    setIsSuccess(false);
    setIsFocused(false);
    setIsInputHovered(false);
  };

  const handleYesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPrediction('yes');
    if (onOpenQuickBuy) {
      onOpenQuickBuy(market.id);
    }
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPrediction('no');
    if (onOpenQuickBuy) {
      onOpenQuickBuy(market.id);
    }
  };

  const handleBuy = async () => {
    // Check if user has enough balance
    if (amountNumber > availableBalance) {
      toast.error('Insufficient Balance', {
        description: `You need $${amountNumber.toFixed(2)} but only have $${availableBalance.toFixed(2)}`,
        position: 'top-right',
        duration: 4000,
      });
      return;
    }

    setIsLoading(true);
    
    // Decrease balance immediately when purchase starts
    decreaseBalance(amountNumber);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    // Close QuickBuy after showing success
    setTimeout(() => {
      handleSuccess();
      handleCloseQuickBuy();
    }, 1500);
  };

  const quickAmounts = [25, 50];

  // Extract data from market object
  const avatars = market.recentUsers?.map(u => u.initials) || ["CN", "LA"];
  const avatarColors = market.recentUsers?.map(u => u.color) || ["#8145b5", "#16433c"];
  const comments = market.stats.commentsFormatted ? `${market.stats.commentsFormatted} comments` : "+100 comments";

  // Generate a deterministic username based on market ID
  const username = useMemo(() => getRandomUsername(market.id), [market.id]);

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => !isQuickBuyOpen && setIsHovered(true)}
      onMouseLeave={() => !isQuickBuyOpen && setIsHovered(false)}
      className="relative h-full w-full overflow-hidden group cursor-pointer transition-all duration-300 ease-out"
      style={{ 
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--black-a1)',
        boxShadow: isHovered ? 'var(--shadow-3)' : 'var(--shadow-2)',
      }}
    >
      {/* Full Background Image */}
      <ImageWithFallback
        src={market.image}
        alt={market.question}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Normal Card Content */}
      <AnimatePresence mode="wait">
        {!isQuickBuyOpen ? (
          <motion.div
            key="normal-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[8px] left-[8px] right-[8px] overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-2"
            style={{
              borderRadius: 'var(--border-radius--0-75rem)',
              backdropFilter: 'blur(var(--backdrop-filter--blur-8px-))',
              WebkitBackdropFilter: 'blur(var(--backdrop-filter--blur-8px-))'
            }}
          >
            {/* Blur Background Layer */}
            <div 
              className="absolute inset-0 z-0 transition-all duration-300"
              style={{ 
                background: isHovered ? 'var(--card-hover)' : 'var(--card-normal)',
                opacity: 0.85,
              }}
            />

            {/* Progress Bar */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[2px] z-20"
              style={{ backgroundColor: 'var(--black-a2)' }}
            >
              <div 
                className="h-full"
                style={{
                  backgroundColor: 'var(--muted-foreground)',
                  opacity: 0.3,
                  width: '0%',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 w-[86%] mx-auto py-5 flex flex-col gap-4">
              {/* Top Row: Category & Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px] sm:gap-[10px]">
                  <div className="flex items-center justify-center px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-[var(--radius-input)]"
                       style={{ backgroundColor: 'var(--accent)' }}>
                    <p 
                      className="font-sans text-nowrap whitespace-pre"
                      style={{ 
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: '16px',
                        color: 'var(--muted-foreground)' 
                      }}
                    >
                      {market.category.name}
                    </p>
                  </div>
                  
                  <div className="flex gap-[3px] sm:gap-[4px] h-[18px] sm:h-[20px] items-center">
                    <div className="flex items-center justify-center p-px size-[14px] sm:size-[16px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                        <path d={svgPaths.pc012c00} fill="#7A7A7A" stroke="#606060" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 3.5V7L9.33333 8.16667" stroke="#606060" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p 
                      className="font-sans text-nowrap whitespace-pre"
                      style={{ 
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: '20px',
                        color: 'var(--muted-foreground)' 
                      }}
                    >
                      {market.date}
                    </p>
                  </div>
                </div>
                <SaveIcon 
                  isSaved={isSaved}
                  isHovered={isHovered}
                  onToggle={() => toggleSavedMarket(market.id)}
                  rightOffset={10}
                />
              </div>

              {/* Question */}
              <h3 
                className="line-clamp-2 cursor-pointer hover:text-[var(--iris-12)] transition-colors"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '24px',
                  color: 'var(--black-a11)',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onMarketSelect) {
                    onMarketSelect(market);
                  }
                }}
              >
                {market.question}
              </h3>

              {/* Yes/No Buttons */}
              <div className="flex gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px]">
                {/* Yes Button */}
                <div 
                  className="flex-1 relative rounded-[var(--radius-input)] overflow-hidden group/yes cursor-pointer transition-all duration-300" 
                  onClick={handleYesClick}
                  style={{ 
                    border: '1px solid var(--black-a2)',
                    background: 'var(--side-bar-outline)',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px 0 #5bb98b60, 0 4px 8px 0 #5bb98b40';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    // Change Yes text color to white on hover
                    const yesText = e.currentTarget.querySelector('.yes-text');
                    if (yesText) (yesText as HTMLElement).style.color = 'var(--side-bar-hold-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    // Reset Yes text color
                    const yesText = e.currentTarget.querySelector('.yes-text');
                    if (yesText) (yesText as HTMLElement).style.color = 'var(--card-foreground)';
                  }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[36px] sm:w-[40px] h-[36px] sm:h-[40px]">
                    <div 
                      className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/yes:scale-[6] group-hover/yes:-translate-x-1/2"
                      style={{ backgroundColor: 'var(--chart-1-hover)' }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between size-full relative z-10 px-[6px] py-[6px]">
                    <div className="flex gap-[2px] items-center">
                      <div className="flex items-center justify-center p-[2px] size-[20px] sm:size-[24px]">
                        <div className="relative size-full">
                          <div className="absolute inset-[4.17%]">
                            <div className="absolute inset-[4.17%]">
                              <svg className="block size-full" fill="none" viewBox="0 0 19 19">
                                <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_yes_dark_feat)" />
                                <defs>
                                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes_dark_feat" r="1">
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
                            <svg className="block size-full" fill="none" viewBox="0 0 9 10">
                              <path d={svgPaths.p294227c0} fill="#F1F5F9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p 
                        className="font-sans text-nowrap whitespace-pre yes-text"
                        style={{ 
                          fontSize: 'var(--text-s)',
                          fontWeight: 'var(--font-weight-medium)',
                          lineHeight: '20px',
                          color: 'var(--card-foreground)' 
                        }}
                      >
                        Yes
                      </p>
                    </div>
                    <p 
                      className="font-sans text-nowrap whitespace-pre"
                      style={{ 
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--black-a8)',
                        transition: 'color 300ms ease-out',
                      }}
                    >
                      {market.prediction.yesPercentage}%
                    </p>
                  </div>
                </div>

                {/* No Button */}
                <div 
                  className="flex-1 relative rounded-[var(--radius-input)] overflow-hidden group/no cursor-pointer transition-all duration-300" 
                  onClick={handleNoClick}
                  style={{ 
                    border: '1px solid var(--black-a2)',
                    background: 'var(--side-bar-outline)',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px 0 #eb8e9060, 0 4px 8px 0 #eb8e9040';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    // Change No text color to white on hover
                    const noText = e.currentTarget.querySelector('.no-text');
                    if (noText) (noText as HTMLElement).style.color = 'var(--side-bar-hold-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    // Reset No text color
                    const noText = e.currentTarget.querySelector('.no-text');
                    if (noText) (noText as HTMLElement).style.color = 'var(--card-foreground)';
                  }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[36px] sm:w-[40px] h-[36px] sm:h-[40px]">
                    <div 
                      className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/no:scale-[6] group-hover/no:-translate-x-1/2"
                      style={{ backgroundColor: 'var(--chart-2-hover)' }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between size-full relative z-10 px-[6px] py-[6px]">
                    <div className="flex gap-[2px] items-center">
                      <div className="flex items-center justify-center p-[2px] size-[20px] sm:size-[24px]">
                        <div className="relative size-full">
                          <div className="absolute inset-[4.17%]">
                            <div className="absolute inset-[4.17%]">
                              <svg className="block size-full" fill="none" viewBox="0 0 19 19">
                                <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_no_dark_feat)" />
                                <defs>
                                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no_dark_feat" r="1">
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
                            <svg className="block size-full" fill="none" viewBox="0 0 8 9">
                              <path d={svgPaths.p2b92e400} fill="#F1F5F9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p 
                        className="font-sans text-nowrap whitespace-pre no-text"
                        style={{ 
                          fontSize: 'var(--text-s)',
                          fontWeight: 'var(--font-weight-medium)',
                          lineHeight: '20px',
                          color: 'var(--card-foreground)' 
                        }}
                      >
                        No
                      </p>
                    </div>
                    <p 
                      className="font-sans text-nowrap whitespace-pre"
                      style={{ 
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--black-a8)',
                        transition: 'color 300ms ease-out',
                      }}
                    >
                      {market.prediction.noPercentage}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="flex items-center justify-between text-[12px] font-medium text-[var(--muted-foreground)] relative min-h-[20px]">
                {/* Left Side: Username / Avatars Swap */}
                <div className="grid grid-cols-1 grid-rows-1 items-center overflow-hidden">
                  {/* Username - Default State */}
                  <div className="col-start-1 row-start-1 flex items-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                    <span style={{ 
                      color: 'var(--muted-foreground)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}>
                      By{' '}
                      <span style={{ color: 'var(--foreground)' }}>@{username}</span>
                    </span>
                  </div>
                  
                  {/* Avatars + Comments - Hover State */}
                  <div className="col-start-1 row-start-1 flex items-center gap-1.5 transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex -space-x-1.5">
                      {avatars.map((initial, i) => (
                        <div 
                          key={i}
                          className="w-4 h-4 rounded-full flex items-center justify-center font-semibold text-white"
                          style={{ 
                            backgroundColor: avatarColors[i],
                            fontSize: 'var(--text-xxs)',
                            border: '1px solid var(--lum-12)'
                          }}
                        >
                          {initial}
                        </div>
                      ))}
                    </div>
                    <span 
                      className="text-[var(--secondary-foreground)] px-1.5 py-0.5 rounded-full whitespace-nowrap"
                      style={{ 
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-medium)',
                        backgroundColor: 'var(--black-a1)'
                      }}
                    >
                      {comments}
                    </span>
                  </div>
                </div>

                {/* Right Side: Volume / Participants Swap */}
                <div className="grid grid-cols-1 grid-rows-1 items-center overflow-hidden">
                  {/* Volume - Default State */}
                  <div className="col-start-1 row-start-1 flex items-center justify-end transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                    <span className="text-right">{market.stats.volumeFormatted} Vol.</span>
                  </div>

                  {/* Participants - Hover State */}
                  <div className="col-start-1 row-start-1 flex items-center justify-end transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-right">{market.stats.participantsFormatted} participants</span>
                  </div>
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {showSuccessMessage && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center z-20"
                      style={{
                        backgroundColor: 'var(--chart-1)',
                        borderRadius: 'var(--radius-input)',
                        padding: '4px 8px'
                      }}
                    >
                      <p className="font-sans font-medium text-[12px] text-white">
                        Your position has been placed.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quickbuy-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-[8px] overflow-hidden z-20"
            style={{
              borderRadius: 'var(--border-radius--0-75rem)',
              backdropFilter: 'blur(var(--backdrop-filter--blur-8px-))',
              WebkitBackdropFilter: 'blur(var(--backdrop-filter--blur-8px-))'
            }}
          >
            {/* Background */}
            <div 
              className="absolute inset-0"
              style={{ 
                background: 'var(--card-normal)',
                opacity: 0.98,
              }}
            />

            {/* QuickBuy Content */}
            <div className="relative z-10 p-3.5 h-full flex flex-col text-[13px]">
              {/* Close Button */}
              <button
                onClick={handleCloseQuickBuy}
                className="absolute top-2 right-2 z-50 p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                style={{
                  background: 'var(--lum-01)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--black-a2)',
                  boxShadow: 'var(--shadow-2)',
                }}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header with Market Question and Image */}
              <div className="content-stretch flex items-start justify-between mb-[10px] sm:mb-[12px]">
                <div className="basis-0 content-stretch flex flex-col grow items-start max-h-[80px] min-h-[56px] sm:min-h-[60px] min-w-px pr-2">
                  <p 
                    className="font-sans max-h-[64px] min-h-[56px] sm:min-h-[60px] overflow-ellipsis overflow-hidden w-full line-clamp-2"
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      lineHeight: '20px',
                      color: 'var(--card-foreground)'
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
                className="relative flex-1 flex flex-col"
                animate={{ opacity: isLoading ? 0.4 : 1 }}
                transition={{ duration: 0.2 }}
                style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
              >
                {/* Prediction Type */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-0.5">
                    <p 
                      className="text-muted-foreground"
                      style={{ fontSize: 'var(--text-xs)' }}
                    >
                      Your prediction:
                    </p>
                    <div className="flex items-center gap-0.5">
                      {/* Yes/No Icon */}
                      <div className="content-stretch flex items-center justify-center p-[2px] shrink-0 size-[24px]">
                        <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                          {selectedPrediction === 'yes' ? (
                            <>
                              <div className="absolute inset-[4.17%]">
                                <div className="absolute inset-[4.17%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                                    <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_yes_inline)" />
                                    <defs>
                                      <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes_inline" r="1">
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
                              <div className="absolute inset-[4.17%]">
                                <div className="absolute inset-[4.17%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                                    <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_no_inline)" />
                                    <defs>
                                      <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no_inline" r="1">
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
                        {selectedPrediction}
                      </span>
                    </div>
                  </div>
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
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                  onMouseEnter={() => setIsInputHovered(true)}
                  onMouseLeave={() => setIsInputHovered(false)}
                  style={{
                    paddingLeft: isFocused ? "16px" : isInputHovered ? "12px" : "4px",
                    paddingRight: isFocused ? "16px" : isInputHovered ? "12px" : "4px",
                    borderColor: isFocused ? "var(--primary-button-bg)" : isInputHovered ? "var(--muted-foreground)" : "transparent",
                    backgroundColor: isFocused || isInputHovered ? "var(--lum-02)" : "transparent",
                    boxShadow: isFocused ? "0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)" : isInputHovered ? "0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)" : "none",
                    zIndex: 30,
                    pointerEvents: "auto",
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
                            ref={inputRef}
                            id={inputId}
                            type="text"
                            inputMode="decimal"
                            value={amount}
                            onChange={(e) => {
                              const value = e.target.value;
                              // Allow empty string, digits, and single decimal point
                              if (value === '' || /^\d*\.?\d*$/.test(value)) {
                                setAmount(value);
                              }
                            }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                              setIsFocused(false);
                              // Clean up the value on blur
                              const numValue = parseFloat(amount) || 0;
                              setAmount(Math.max(0, numValue).toString());
                            }}
                            className="absolute inset-0 w-full h-full bg-transparent text-right focus:outline-none font-sans font-semibold text-[30px] tracking-[-0.225px] text-card-foreground placeholder:text-muted-foreground/40 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none p-0 m-0 tabular-nums"
                            placeholder="0"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between relative shrink-0 w-full">
                    <div className="flex flex-col overflow-visible">
                      <p className="text-muted-foreground text-[10px] leading-[16px] mb-0.5 whitespace-nowrap overflow-visible">Available balance:</p>
                      <p className="text-muted-foreground text-[11px] leading-[18px] whitespace-nowrap overflow-visible">${availableBalance.toFixed(2)}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {quickAmounts.map((quickAmount) => (
                        <motion.button
                          key={quickAmount}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={(e) => {
                            e.stopPropagation();
                            const calculatedAmount = Math.floor((availableBalance * quickAmount) / 100);
                            setAmount(calculatedAmount.toString());
                            setTimeout(() => {
                              inputRef.current?.focus();
                            }, 0);
                          }}
                          onMouseEnter={() => setHoveredButton(quickAmount)}
                          onMouseLeave={() => setHoveredButton(null)}
                          className="rounded-full px-1.5 py-0.5 transition-colors text-[10px] leading-[16px]"
                          style={{
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
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={(e) => {
                          e.stopPropagation();
                          setAmount(Math.floor(availableBalance).toString());
                          setTimeout(() => {
                            inputRef.current?.focus();
                          }, 0);
                        }}
                        onMouseEnter={() => setHoveredButton('max')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="rounded-full px-1.5 py-0.5 transition-colors text-[10px] leading-[16px]"
                        style={{
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
                        Buy {selectedPrediction === 'yes' ? 'Yes' : 'No'}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </PrimaryButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
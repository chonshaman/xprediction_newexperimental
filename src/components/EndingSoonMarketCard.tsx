import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from '../imports/svg-08dg7pjb6g';
import { useState, useRef, memo, useCallback, useMemo } from 'react';
import { QuickBuyModal } from './QuickBuyModal';
import { motion, AnimatePresence } from 'motion/react';
import type { Market } from '../data/markets';
import { getRandomUsername } from '../utils/format';
import { useSavedMarkets } from '../context/SavedMarketsContext';
import { SaveIcon } from './SaveIcon';

interface EndingSoonMarketCardProps extends Market {
  onClick?: () => void;
}

export const EndingSoonMarketCard = memo(function EndingSoonMarketCard(props: EndingSoonMarketCardProps) {
  const { onClick, ...market } = props;
  
  const [showQuickBuy, setShowQuickBuy] = useState(false);
  const [selectedPrediction, setSelectedPrediction] = useState<'yes' | 'no'>('yes');
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Use saved markets context
  const { isSaved: isMarketSaved, toggleSavedMarket } = useSavedMarkets();
  const isSaved = isMarketSaved(market.id);

  // Generate a deterministic username based on market ID
  const username = useMemo(() => getRandomUsername(market?.id || 'default'), [market?.id]);

  const handleSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleYesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
    setSelectedPrediction('yes');
    setShowQuickBuy(true);
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
    setSelectedPrediction('no');
    setShowQuickBuy(true);
  };

  const avatars = market.recentUsers?.map(u => u.initials) || ["CN", "LA"];
  const avatarColors = market.recentUsers?.map(u => u.color) || ["#8145b5", "#16433c"];
  const comments = market.stats.commentsFormatted ? `${market.stats.commentsFormatted} comments` : "+100 comments";

  return (
    <>
    <div 
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex gap-3 p-3 sm:p-[16px] overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 group relative"
      style={{ 
        background: isHovered ? 'var(--card-hover)' : 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: isHovered ? 'var(--shadow-3)' : 'var(--shadow-1)'
      }}
    >
      {/* Save Icon - appears on hover at top right corner */}
      <SaveIcon 
        isSaved={isSaved}
        isHovered={isHovered}
        onToggle={() => toggleSavedMarket(market.id)}
        rightOffset={10}
      />

      {/* Left Column - Image */}
      <div 
        className="shrink-0 overflow-hidden"
        style={{ 
          width: '104px',
          borderRadius: 'var(--border-radius--0-5rem)',
        }}
      >
        <ImageWithFallback 
          src={market.image} 
          alt={market.question}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>

      {/* Right Column - Content */}
      <div 
        className="flex-1 flex flex-col"
        style={{ 
          gap: 'var(--gap--1rem)',
        }}
      >
        {/* Category and Time */}
        <div className="flex gap-[8px] sm:gap-[10px] items-center">
          <div 
            className="flex items-center justify-center px-3 py-1 shrink-0"
            style={{ 
              backgroundColor: 'var(--accent)',
              borderRadius: 'var(--radius-input)',
            }}
          >
            <p 
              className="font-sans text-nowrap whitespace-pre"
              style={{ 
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '16px',
                color: 'var(--muted-foreground)',
              }}
            >
              {market.category.name}
            </p>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <div className="flex items-center justify-center p-px size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
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
                color: 'var(--muted-foreground)',
              }}
            >
              {market.date}
            </p>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 min-h-0">
          <p 
            className="font-sans line-clamp-2 transition-all duration-300 ease-out"
            style={{
              fontSize: 'var(--text-m)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: '20px',
              color: 'var(--black-a11)',
            }}
          >
            {market.question}
          </p>
        </div>

        {/* Yes/No Buttons */}
        <div 
          className="flex items-center"
          style={{ 
            gap: 'var(--gap--0-5rem)',
            height: '40px',
            marginTop: 'var(--gap--0-5rem)',
          }}
        >
          {/* Yes Button */}
          <div 
            className="flex-1 relative overflow-hidden group/yes cursor-pointer transition-all duration-300" 
            onClick={handleYesClick}
            style={{ 
              border: '1px solid var(--black-a2)',
              background: 'var(--side-bar-outline)',
              boxShadow: 'var(--shadow-4)',
              borderRadius: 'var(--radius-input)',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
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
              e.currentTarget.style.boxShadow = 'var(--shadow-4)';
              e.currentTarget.style.transform = 'translateY(0)';
              // Reset Yes text color
              const yesText = e.currentTarget.querySelector('.yes-text');
              if (yesText) (yesText as HTMLElement).style.color = 'var(--card-foreground)';
            }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9">
              <div 
                className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/yes:scale-[6] group-hover/yes:-translate-x-1/2"
                style={{ backgroundColor: 'var(--chart-1-hover)' }}
              />
            </div>
            
            <div 
              className="flex items-center justify-between relative z-10"
              style={{
                width: '100%',
                padding: '0 var(--gap--0-5rem)',
              }}
            >
              <div className="flex gap-1 items-center shrink-0">
                <div className="flex items-center justify-center p-0.5 size-6">
                  <div className="relative w-5 h-5">
                    <div className="absolute inset-[4.17%]">
                      <div className="absolute inset-[4.17%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_yes_dark_ending)" />
                          <defs>
                            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes_dark_ending" r="1">
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
                  </div>
                </div>
                <p 
                  className="font-sans text-nowrap text-card-foreground whitespace-pre yes-text"
                  style={{
                    fontSize: 'var(--text-s)',
                    fontWeight: 'var(--font-weight-medium)',
                    transition: 'color 300ms ease-out',
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
            className="flex-1 relative overflow-hidden group/no cursor-pointer transition-all duration-300" 
            onClick={handleNoClick}
            style={{ 
              border: '1px solid var(--black-a2)',
              background: 'var(--side-bar-outline)',
              boxShadow: 'var(--shadow-4)',
              borderRadius: 'var(--radius-input)',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
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
              e.currentTarget.style.boxShadow = 'var(--shadow-4)';
              e.currentTarget.style.transform = 'translateY(0)';
              // Reset No text color
              const noText = e.currentTarget.querySelector('.no-text');
              if (noText) (noText as HTMLElement).style.color = 'var(--card-foreground)';
            }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9">
              <div 
                className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/no:scale-[6] group-hover/no:-translate-x-1/2"
                style={{ backgroundColor: 'var(--chart-2-hover)' }}
              />
            </div>
            
            <div 
              className="flex items-center justify-between relative z-10"
              style={{
                width: '100%',
                padding: '0 var(--gap--0-5rem)',
              }}
            >
              <div className="flex gap-1 items-center shrink-0">
                <div className="flex items-center justify-center p-0.5 size-6">
                  <div className="relative w-5 h-5">
                    <div className="absolute inset-[4.17%]">
                      <div className="absolute inset-[4.17%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_no_dark_ending)" />
                          <defs>
                            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no_dark_ending" r="1">
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
                  </div>
                </div>
                <p 
                  className="font-sans text-nowrap text-card-foreground whitespace-pre no-text"
                  style={{
                    fontSize: 'var(--text-s)',
                    fontWeight: 'var(--font-weight-medium)',
                    transition: 'color 300ms ease-out',
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

        {/* Footer */}
        <div className="flex items-center justify-between relative min-h-[20px]">
          {/* Left Side: Username / Avatars Swap */}
          <div className="grid grid-cols-1 grid-rows-1 items-center overflow-hidden">
            {/* Username - Default State */}
            <div className="col-start-1 row-start-1 flex items-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
              <p 
                className="font-sans text-nowrap"
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '20px',
                  color: 'var(--muted-foreground)'
                }}
              >
                By{' '}
                <span style={{ color: 'var(--foreground)' }}>@{username}</span>
              </p>
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
              <p 
                className="font-sans text-muted-foreground text-nowrap text-right"
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '20px'
                }}
              >
                {market.stats.volumeFormatted} Vol.
              </p>
            </div>

            {/* Participants - Hover State */}
            <div className="col-start-1 row-start-1 flex items-center justify-end transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <p 
                className="font-sans text-muted-foreground text-nowrap text-right"
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '20px'
                }}
              >
                {market.stats.participantsFormatted} participants
              </p>
            </div>
          </div>
          
          {/* Success Message Overlay */}
          <AnimatePresence>
            {showSuccessMessage && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute inset-0 flex items-center justify-center z-20"
                style={{
                  backgroundColor: 'var(--chart-1)',
                  borderRadius: 'var(--radius-input)',
                  padding: '4px 8px'
                }}
              >
                <p 
                  className="font-sans text-nowrap whitespace-pre"
                  style={{ 
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: '20px',
                    color: '#FFFFFF',
                  }}
                >
                  Your position has been placed.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
    <AnimatePresence>
      {showQuickBuy && (
        <QuickBuyModal
          isOpen={showQuickBuy}
          onClose={() => setShowQuickBuy(false)}
          market={{ image: market.image, question: market.question, yesPercentage: market.prediction.yesPercentage, noPercentage: market.prediction.noPercentage }}
          prediction={selectedPrediction}
          cardPosition={cardPosition}
          onSuccess={handleSuccess}
        />
      )}
    </AnimatePresence>
    </>
  );
});
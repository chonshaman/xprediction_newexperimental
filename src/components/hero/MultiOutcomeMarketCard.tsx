import React, { useState, useMemo } from 'react';
import { ImageWithFallback } from "../figma/ImageWithFallback";
import svgPaths from "../../imports/svg-08dg7pjb6g";
import { motion, AnimatePresence } from 'motion/react';
import type { Market } from "../../data/markets";
import { getRandomUsername } from '../../utils/format';
import { useSavedMarkets } from '../../context/SavedMarketsContext';
import { SaveIcon } from '../SaveIcon';

interface MultiOutcomeMarketCardProps extends Market {
  onMarketSelect?: (market: Market) => void;
}

export function MultiOutcomeMarketCard(market: MultiOutcomeMarketCardProps) {
  const { onMarketSelect } = market;
  const [isHovered, setIsHovered] = useState(false);

  // Use saved markets context
  const { isSaved: isMarketSaved, toggleSavedMarket } = useSavedMarkets();
  const isSaved = isMarketSaved(market.id);

  const handleCardClick = () => {
    if (onMarketSelect) {
      onMarketSelect(market);
    }
  };

  // Extract data from market object
  const avatars = market.recentUsers?.map(u => u.initials) || ["CN", "LA"];
  const avatarColors = market.recentUsers?.map(u => u.color) || ["#8145b5", "#16433c"];
  const comments = market.stats.commentsFormatted ? `${market.stats.commentsFormatted} comments` : "+100 comments";

  // Generate a deterministic username based on market ID
  const username = useMemo(() => getRandomUsername(market.id), [market.id]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

      {/* Card Content */}
      <AnimatePresence mode="wait">
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
              className="line-clamp-2 cursor-pointer hover:text-[var(--iris-12)] transition-colors font-sans"
              style={{ 
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '24px',
                color: 'var(--black-a11)',
              }}
              onClick={handleCardClick}
            >
              {market.question}
            </h3>

            {/* Multi-Outcome Options - Compact Grid */}
            {/* Outer container clips the slide, inner content translates on hover */}
            <div
              className="overflow-y-auto overflow-x-hidden"
              style={{
                maxHeight: 'calc(2.1 * (34px + 8px))',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div 
                className="flex flex-col gap-2"
                style={{
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'transform 300ms ease-out',
                }}
              >
                {market.outcomes?.map((outcome) => (
                  <button
                    key={outcome.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick();
                    }}
                    className="flex items-center justify-between px-3 py-2 transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: 'var(--lum-02)',
                      border: '1px solid var(--black-a2)',
                      borderRadius: 'var(--border-radius--0-5rem)',
                      cursor: 'pointer',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: outcome.color,
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-semi-bold)',
                          color: 'var(--card-foreground)',
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
            </div>

            {/* Stats Row */}
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
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
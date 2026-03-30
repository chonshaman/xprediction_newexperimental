import React, { useState, useCallback, useMemo, memo } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import svgPaths from '../../imports/svg-08dg7pjb6g';
import type { Match } from '../../data/matches';
import { getRandomUsername } from '../../utils/format';
import { useSavedMarkets } from '../../context/SavedMarketsContext';
import { SaveIcon } from '../SaveIcon';

// ============================================================================
// TYPES
// ============================================================================

interface FeaturedMatchCardProps {
  match: Match;
  onOddsClick?: (match: Match, oddsType: OddsType) => void;
  onClick?: () => void;
}

type OddsType = 'team1' | 'draw' | 'team2';

interface TeamIconProps {
  code: string;
  color: string;
  isActive: boolean;
}

interface TeamRowProps {
  code: string;
  name: string;
  color: string;
  price: number;
  isActive: boolean;
}

interface OddsButtonProps {
  type: OddsType;
  label: string;
  color?: string;
  isHovered: boolean;
  isSelected: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const MOCK_AVATARS = ['AM', 'JD'];
const MOCK_AVATAR_COLORS = ['#8145b5', '#16433c'];
const MOCK_COMMENTS = '+24 comments';
const MOCK_PARTICIPANTS = '2.4K';

const CARD_MIN_HEIGHT = '216px';
const TEAMS_MIN_HEIGHT = '60px';
const TEAM_ROW_HEIGHT = '28px';
const TEAM_ICON_SIZE = '24px';
const BUTTON_HEIGHT = '40px';
const RIPPLE_SIZE = '40px';

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getTextColor(bgColor: string): string {
  const hex = bgColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const TeamIcon = memo(({ code, color, isActive }: TeamIconProps) => (
  <div
    className="flex items-center justify-center rounded-full transition-all duration-300 shrink-0"
    style={{
      width: TEAM_ICON_SIZE,
      height: TEAM_ICON_SIZE,
      background: color,
      color: getTextColor(color),
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--font-weight-semi-bold)',
      boxShadow: isActive
        ? `0 0 8px ${color}, 0 0 16px ${color}80`
        : `0 0 8px ${color}40`
    }}
  >
    {code.charAt(0)}
  </div>
));

TeamIcon.displayName = 'TeamIcon';

const TeamRow = memo(({ code, name, color, price, isActive }: TeamRowProps) => (
  <div className="flex items-center justify-between gap-2" style={{ height: TEAM_ROW_HEIGHT }}>
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <TeamIcon 
        code={code}
        color={color}
        isActive={isActive && !!color}
      />
      <span 
        className="truncate"
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--card-foreground)',
          lineHeight: '1.2'
        }}
      >
        {name}
      </span>
    </div>
    <span 
      className="shrink-0"
      style={{
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--card-foreground)',
        lineHeight: '20px'
      }}
    >
      {price}¢
    </span>
  </div>
));

TeamRow.displayName = 'TeamRow';

const OddsButton = memo(({
  type,
  label,
  color,
  isHovered,
  isSelected,
  onMouseEnter,
  onMouseLeave,
  onClick
}: OddsButtonProps) => {
  const isActive = isHovered || isSelected;
  const isDraw = type === 'draw';
  const hasColor = !isDraw && color;

  const buttonStyle = useMemo(() => ({
    border: '1px solid var(--black-a2)',
    background: (isActive && hasColor) 
      ? color 
      : isActive && isDraw
        ? 'var(--lum-03)'  // Fixed: Use existing CSS variable instead of undefined var(--muted-background)
        : 'var(--side-bar-outline)',
    boxShadow: isActive && hasColor
      ? `0 8px 16px 0 ${color}60, 0 4px 8px 0 ${color}40`
      : isActive && isDraw
        ? 'var(--shadow-3)'
        : 'var(--shadow-4)',
    height: BUTTON_HEIGHT,
    paddingLeft: 'var(--gap--0-5rem)',
    paddingRight: 'var(--gap--0-5rem)',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
  }), [isActive, hasColor, color, isDraw, isHovered]);

  const rippleStyle = useMemo(() => ({
    backgroundColor: hasColor ? color : 'var(--lum-03)',  // Fixed: Use existing CSS variable
    transform: isActive ? 'scale(10)' : 'scale(0)',
    opacity: isActive ? 1 : 0
  }), [isActive, hasColor, color]);

  const labelColor = useMemo(() => {
    if (isActive && hasColor) return getTextColor(color);
    return 'var(--card-foreground)'; // Match general market card text color
  }, [isActive, hasColor, color]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative rounded-[var(--radius-input)] overflow-hidden cursor-pointer transition-all duration-300 ease-out"
      style={buttonStyle}
    >
      {/* Ripple effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="rounded-full transition-all duration-700 ease-out"
          style={{ 
            width: RIPPLE_SIZE,
            height: RIPPLE_SIZE,
            ...rippleStyle
          }}
        />
      </div>

      {/* Content */}
      <div className="flex items-center justify-center size-full relative z-10">
        <span 
          className="truncate font-sans transition-colors duration-300"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '20px',
            color: labelColor
          }}
        >
          {label}
        </span>
      </div>
    </button>
  );
});

OddsButton.displayName = 'OddsButton';

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const FeaturedMatchCard = memo(({ match, onOddsClick, onClick }: FeaturedMatchCardProps) => {
  const [hoveredButton, setHoveredButton] = useState<OddsType | null>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [selectedOdds, setSelectedOdds] = useState<OddsType | null>(null);

  // Generate a deterministic username based on match ID
  const username = useMemo(() => getRandomUsername(match?.id || 'default'), [match?.id]);

  // Use saved markets context
  const { isSaved: isMarketSaved, toggleSavedMarket } = useSavedMarkets();
  const isSaved = isMarketSaved(match?.id || '');

  const handleCardMouseEnter = useCallback(() => setIsCardHovered(true), []);
  const handleCardMouseLeave = useCallback(() => setIsCardHovered(false), []);

  const handleOddsClick = useCallback((type: OddsType) => {
    if (!match) return;
    setSelectedOdds(type);
    onOddsClick?.(match, type);
  }, [match, onOddsClick]);

  const handleButtonMouseEnter = useCallback((type: OddsType) => {
    setHoveredButton(type);
  }, []);

  const handleButtonMouseLeave = useCallback(() => {
    setHoveredButton(null);
  }, []);

  const categoryLabel = useMemo(() => {
    if (!match) return '';
    if (match.category === 'sports') return 'Sport';
    if (match.category === 'e-sports') return 'E-Sport';
    return match.category;
  }, [match]);

  const team1Color = match?.team1.color || 'var(--blue-9)';
  const team2Color = match?.team2.color || 'var(--red-9)';

  const cardStyle = useMemo(() => ({
    background: isCardHovered ? 'var(--card-hover)' : 'var(--card-normal)',
    border: '1px solid var(--black-a1)',
    minHeight: CARD_MIN_HEIGHT
  }), [isCardHovered]);

  // Guard clause: return null if match is not provided (after all hooks)
  if (!match) {
    return null;
  }

  // Dynamic image based on match category
  const matchImage = match.category === 'e-sports' 
    ? 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    : 'https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

  return (
    <div 
      className="relative h-full w-full overflow-hidden group cursor-pointer transition-all duration-300 ease-out"
      style={{ 
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--black-a1)',
        boxShadow: isCardHovered ? 'var(--shadow-3)' : 'var(--shadow-2)',
      }}
    >
      {/* Full Background Image */}
      <ImageWithFallback
        src={matchImage}
        alt={`${match.team1.name} vs ${match.team2.name}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Card Content with Backdrop Blur */}
      <div 
        onClick={onClick}
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
            background: isCardHovered ? 'var(--card-hover)' : 'var(--card-normal)',
            opacity: 0.85,
          }}
        />

        {/* Save Icon - inside card content, appears on hover at top right corner */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-50 pointer-events-none">
          <div className="pointer-events-auto">
            <SaveIcon 
              isSaved={isSaved}
              isHovered={isCardHovered}
              onToggle={() => toggleSavedMarket(match.id)}
              rightOffset={10}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-[86%] mx-auto py-5 flex flex-col gap-4"
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <div>
            {/* Header */}
            <div className="flex items-center gap-[8px] sm:gap-[10px] mb-[10px] sm:mb-[12px]">
              <div className="bg-accent flex items-center justify-center px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-[var(--radius-input)] shrink-0">
                <p 
                  className="font-sans text-muted-foreground text-nowrap"
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: '16px'
                  }}
                >
                  {categoryLabel}
                </p>
              </div>
              <div className="flex gap-[3px] sm:gap-[4px] h-[18px] sm:h-[20px] items-center shrink-0">
                <div className="flex items-center justify-center p-px shrink-0 size-[14px] sm:size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.pc012c00} fill="#7A7A7A" stroke="#606060" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 3.5V7L9.33333 8.16667" stroke="#606060" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p 
                  className="font-sans text-muted-foreground text-nowrap"
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: '20px'
                  }}
                >
                  {match.time} • {match.date}
                </p>
              </div>
            </div>

            {/* Teams */}
            <div className="flex flex-col gap-1.5 mb-[10px]" style={{ minHeight: TEAMS_MIN_HEIGHT }}>
              <TeamRow 
                code={match.team1.code}
                name={match.team1.name}
                color={team1Color}
                price={parseInt(match.odds.team1)}
                isActive={(hoveredButton === 'team1' || selectedOdds === 'team1') && !!match.team1.color}
              />
              <TeamRow 
                code={match.team2.code}
                name={match.team2.name}
                color={team2Color}
                price={parseInt(match.odds.team2)}
                isActive={(hoveredButton === 'team2' || selectedOdds === 'team2') && !!match.team2.color}
              />
            </div>

            {/* Money Line Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <OddsButton
                type="team1"
                label={match.team1.code}
                color={match.team1.color}
                isHovered={hoveredButton === 'team1'}
                isSelected={selectedOdds === 'team1'}
                onMouseEnter={() => handleButtonMouseEnter('team1')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleOddsClick('team1')}
              />
              <OddsButton
                type="draw"
                label="Draw"
                isHovered={hoveredButton === 'draw'}
                isSelected={selectedOdds === 'draw'}
                onMouseEnter={() => handleButtonMouseEnter('draw')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleOddsClick('draw')}
              />
              <OddsButton
                type="team2"
                label={match.team2.code}
                color={match.team2.color}
                isHovered={hoveredButton === 'team2'}
                isSelected={selectedOdds === 'team2'}
                onMouseEnter={() => handleButtonMouseEnter('team2')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleOddsClick('team2')}
              />
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
                  {MOCK_AVATARS.map((initial, i) => (
                    <div 
                      key={`${initial}-${i}`}
                      className="w-4 h-4 rounded-full flex items-center justify-center font-semibold text-white"
                      style={{ 
                        backgroundColor: MOCK_AVATAR_COLORS[i],
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
                  {MOCK_COMMENTS}
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
                  {match.volume} Vol.
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
                  {MOCK_PARTICIPANTS} participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FeaturedMatchCard.displayName = 'FeaturedMatchCard';
import React from 'react';
import { Calendar } from 'lucide-react';

interface MatchCardProps {
  time: string;
  date: string;
  volume: string;
  team1: {
    name: string;
    code: string;
    flag: string;
    color?: string; // Hex color for the team
  };
  team2: {
    name: string;
    code: string;
    flag: string;
    color?: string; // Hex color for the team
  };
  odds: {
    team1: string;
    draw: string;
    team2: string;
  };
  onGameViewClick?: () => void;
  onOddsClick?: (type: 'team1' | 'draw' | 'team2') => void;
  isFirst?: boolean; // Unused in new layout but kept for compatibility
  isLast?: boolean; // Unused in new layout but kept for compatibility
  selectedOdds?: 'team1' | 'draw' | 'team2' | null; // Track which button is selected
}

// Helper to determine if we need dark or light text based on background color
function getTextColor(bgColor: string): string {
  // Remove # if present
  const hex = bgColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return dark text for light backgrounds, light text for dark backgrounds
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

export function MatchCard({
  time,
  date,
  volume,
  team1,
  team2,
  odds,
  onGameViewClick,
  onOddsClick,
  selectedOdds
}: MatchCardProps) {
  const [hoveredButton, setHoveredButton] = React.useState<'team1' | 'draw' | 'team2' | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-all duration-300 ease-out"
      style={{
        background: isHovered ? 'var(--card-hover)' : 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: isHovered ? 'var(--shadow-3)' : 'var(--shadow-2)',
        padding: '20px',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
      }}
    >
      {/* Row 1: Team 1 > Info > Team 2 */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {/* Team 1 */}
        <div className="flex flex-col items-center justify-center gap-2">
          {/* Row 1: Circular Icon */}
          <div
            className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: '40px',
              height: '40px',
              background: team1.color || 'var(--blue-9)',
              color: team1.color ? getTextColor(team1.color) : '#FFFFFF',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semi-bold)',
              boxShadow: (hoveredButton === 'team1' || selectedOdds === 'team1') && team1.color
                ? `0 0 16px ${team1.color}, 0 0 32px ${team1.color}80, 0 0 48px ${team1.color}40`
                : `0 0 16px ${team1.color}40`
            }}
          >
            {team1.code.charAt(0)}
          </div>
          {/* Row 2: Team Name */}
          <span 
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--card-foreground)',
              lineHeight: '1.2',
            }}
          >
            {team1.name}
          </span>
          {/* Row 3: Short Code */}
          <span 
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              lineHeight: '1',
            }}
          >
            {team1.code}
          </span>
        </div>

        {/* Match Info (Time - Date) */}
        <div className="flex flex-col items-center justify-center" style={{ gap: 'var(--gap--0-5rem)' }}>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span 
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                lineHeight: '1'
              }}
            >
              {time}
            </span>
            <span 
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                lineHeight: '1'
              }}
            >
              {date}
            </span>
          </div>
          <span 
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              lineHeight: '1'
            }}
          >
            {volume} Vol.
          </span>
        </div>

        {/* Team 2 */}
        <div className="flex flex-col items-center justify-center gap-2">
          {/* Row 1: Circular Icon */}
          <div
            className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: '40px',
              height: '40px',
              background: team2.color || 'var(--red-9)',
              color: team2.color ? getTextColor(team2.color) : '#FFFFFF',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-semi-bold)',
              boxShadow: (hoveredButton === 'team2' || selectedOdds === 'team2') && team2.color
                ? `0 0 16px ${team2.color}, 0 0 32px ${team2.color}80, 0 0 48px ${team2.color}40`
                : `0 0 16px ${team2.color}40`
            }}
          >
            {team2.code.charAt(0)}
          </div>
          {/* Row 2: Team Name */}
          <span 
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--card-foreground)',
              lineHeight: '1.2',
            }}
          >
            {team2.name}
          </span>
          {/* Row 3: Short Code */}
          <span 
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              lineHeight: '1',
            }}
          >
            {team2.code}
          </span>
        </div>
      </div>

      {/* Row 2: Money Line Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {/* Team 1 Odds */}
        <button
          onClick={() => onOddsClick?.('team1')}
          onMouseEnter={() => setHoveredButton('team1')}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative rounded-[var(--radius-input)] overflow-hidden cursor-pointer transition-all duration-300 ease-out"
          style={{
            border: '1px solid var(--black-a2)',
            background: (hoveredButton === 'team1' || selectedOdds === 'team1') && team1.color
              ? team1.color
              : 'var(--side-bar-outline)',
            boxShadow: (hoveredButton === 'team1' || selectedOdds === 'team1') && team1.color
              ? `0 8px 16px 0 ${team1.color}60, 0 4px 8px 0 ${team1.color}40`
              : 'var(--shadow-4)',
            height: '40px',
            paddingLeft: '40px',
            paddingRight: '40px',
            transform: hoveredButton === 'team1' ? 'translateY(-2px)' : 'translateY(0)'
          }}
        >
          {/* Ripple effect - circle that scales from center outward */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-[40px] h-[40px] rounded-full transition-all duration-700 ease-out"
              style={{ 
                backgroundColor: team1.color || 'var(--chart-1-hover)',
                transform: (hoveredButton === 'team1' || selectedOdds === 'team1') ? 'scale(10)' : 'scale(0)',
                opacity: (hoveredButton === 'team1' || selectedOdds === 'team1') ? 1 : 0
              }}
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center gap-1.5 size-full relative z-10">
            {/* Team 1 Icon in Button */}
            <div
              className="flex items-center justify-center rounded-full transition-all duration-300 shrink-0"
              style={{
                width: '16px',
                height: '16px',
                background: (hoveredButton === 'team1' || selectedOdds === 'team1') 
                  ? 'rgba(255,255,255,0.25)' 
                  : (team1.color || 'var(--blue-9)'),
                color: (hoveredButton === 'team1' || selectedOdds === 'team1') 
                  ? (team1.color ? getTextColor(team1.color) : '#FFFFFF')
                  : (team1.color ? getTextColor(team1.color) : '#FFFFFF'),
                fontSize: '9px',
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '16px'
              }}
            >
              {team1.code.charAt(0)}
            </div>
            
            <span 
              className="truncate font-sans transition-colors duration-300"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: (hoveredButton === 'team1' || selectedOdds === 'team1') && team1.color
                  ? getTextColor(team1.color)
                  : 'var(--muted-foreground)'
              }}
            >
              {team1.code}
            </span>
            <span 
              className="font-sans transition-colors duration-300"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: (hoveredButton === 'team1' || selectedOdds === 'team1') && team1.color
                  ? getTextColor(team1.color)
                  : 'var(--card-foreground)'
              }}
            >
              {odds.team1}¢
            </span>
          </div>
        </button>

        {/* Draw Odds */}
        <button
          onClick={() => onOddsClick?.('draw')}
          onMouseEnter={() => setHoveredButton('draw')}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative rounded-[var(--radius-input)] overflow-hidden cursor-pointer transition-all duration-300 ease-out"
          style={{
            border: '1px solid var(--black-a2)',
            background: (hoveredButton === 'draw' || selectedOdds === 'draw')
              ? 'var(--muted-background)'
              : 'var(--side-bar-outline)',
            boxShadow: (hoveredButton === 'draw' || selectedOdds === 'draw')
              ? 'var(--shadow-3)'
              : 'var(--shadow-4)',
            height: '40px',
            paddingLeft: '40px',
            paddingRight: '40px',
            transform: hoveredButton === 'draw' ? 'translateY(-2px)' : 'translateY(0)'
          }}
        >
          {/* Ripple effect - circle that scales from center outward */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-[40px] h-[40px] rounded-full transition-all duration-700 ease-out"
              style={{ 
                backgroundColor: 'var(--muted-background)',
                transform: (hoveredButton === 'draw' || selectedOdds === 'draw') ? 'scale(10)' : 'scale(0)',
                opacity: (hoveredButton === 'draw' || selectedOdds === 'draw') ? 1 : 0
              }}
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center gap-1 size-full relative z-10">
            <span 
              className="font-sans transition-colors duration-300"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: 'var(--muted-foreground)'
              }}
            >
              Draw
            </span>
            <span 
              className="font-sans transition-colors duration-300"
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: 'var(--card-foreground)'
              }}
            >
              {odds.draw}¢
            </span>
          </div>
        </button>

        {/* Team 2 Odds */}
        <button
          onClick={() => onOddsClick?.('team2')}
          onMouseEnter={() => setHoveredButton('team2')}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative rounded-[var(--radius-input)] overflow-hidden cursor-pointer transition-all duration-300 ease-out"
          style={{
            border: '1px solid var(--black-a2)',
            background: (hoveredButton === 'team2' || selectedOdds === 'team2') && team2.color
              ? team2.color
              : 'var(--side-bar-outline)',
            boxShadow: (hoveredButton === 'team2' || selectedOdds === 'team2') && team2.color
              ? `0 8px 16px 0 ${team2.color}60, 0 4px 8px 0 ${team2.color}40`
              : 'var(--shadow-4)',
            height: '40px',
            paddingLeft: '40px',
            paddingRight: '40px',
            transform: hoveredButton === 'team2' ? 'translateY(-2px)' : 'translateY(0)'
          }}
        >
          {/* Ripple effect - circle that scales from center outward */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-[40px] h-[40px] rounded-full transition-all duration-700 ease-out"
              style={{ 
                backgroundColor: team2.color || 'var(--chart-2-hover)',
                transform: (hoveredButton === 'team2' || selectedOdds === 'team2') ? 'scale(10)' : 'scale(0)',
                opacity: (hoveredButton === 'team2' || selectedOdds === 'team2') ? 1 : 0
              }}
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center gap-1.5 size-full relative z-10">
            {/* Team 2 Icon in Button */}
            <div
              className="flex items-center justify-center rounded-full transition-all duration-300 shrink-0"
              style={{
                width: '16px',
                height: '16px',
                background: (hoveredButton === 'team2' || selectedOdds === 'team2') 
                  ? 'rgba(255,255,255,0.25)' 
                  : (team2.color || 'var(--red-9)'),
                color: (hoveredButton === 'team2' || selectedOdds === 'team2') 
                  ? (team2.color ? getTextColor(team2.color) : '#FFFFFF')
                  : (team2.color ? getTextColor(team2.color) : '#FFFFFF'),
                fontSize: '9px',
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '16px'
              }}
            >
              {team2.code.charAt(0)}
            </div>

            <span 
              className="truncate font-sans transition-colors duration-300"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: (hoveredButton === 'team2' || selectedOdds === 'team2') && team2.color
                  ? getTextColor(team2.color)
                  : 'var(--muted-foreground)'
              }}
            >
              {team2.code}
            </span>
            <span 
              className="font-sans transition-colors duration-300"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: (hoveredButton === 'team2' || selectedOdds === 'team2') && team2.color
                  ? getTextColor(team2.color)
                  : 'var(--card-foreground)'
              }}
            >
              {odds.team2}¢
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
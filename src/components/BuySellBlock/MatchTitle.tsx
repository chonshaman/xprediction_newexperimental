import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getTextColor } from './utils';

interface MatchTitleProps {
  team1Name: string;
  team2Name: string;
  selectedTeamCode: string;
  teamIcon?: string;
  teamColor?: string;
}

export function MatchTitle({ 
  team1Name, 
  team2Name, 
  selectedTeamCode,
  teamIcon,
  teamColor 
}: MatchTitleProps) {
  // Check if teamIcon is an emoji or URL
  const isEmoji = teamIcon && /\p{Emoji}/u.test(teamIcon);
  // Check if it's a letter icon (single character, not emoji)
  const isLetter = teamIcon && teamIcon.length === 1 && !isEmoji;
  
  return (
    <div 
      className="flex items-center"
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        width: '100%',
        borderRadius: 'var(--border-radius--0-75rem)',
        gap: 'var(--gap--0-875rem)'
      }}
    >
      {/* Team Icon */}
      {teamIcon && (
        <div 
          className="relative shrink-0 flex items-center justify-center"
          style={{ 
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            transition: 'all 200ms',
            border: isLetter ? 'none' : '2px solid var(--black-a1)',
            background: isLetter ? (teamColor || 'var(--primary)') : (isEmoji ? 'var(--lum-03)' : 'transparent'),
            color: isLetter ? getTextColor(teamColor || '#000000') : 'inherit',
            boxShadow: isLetter && teamColor ? `0 0 32px ${teamColor}40` : 'none'
          }}
        >
          {isEmoji ? (
            <span style={{ fontSize: '28px' }}>{teamIcon}</span> // Reduced from 32px
          ) : isLetter ? (
            <span style={{ fontSize: '28px', fontWeight: 'var(--font-weight-semi-bold)' }}>{teamIcon}</span> // Reduced from 32px
          ) : (
            <ImageWithFallback 
              src={teamIcon} 
              alt={team1Name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          )}
        </div>
      )}
      
      {/* Match Name and Tag */}
      <div 
        className="flex flex-col items-start shrink-0"
        style={{ gap: '2px' }}
      >
        {/* Match Name */}
        <div 
          className="flex items-end"
          style={{
            gap: 'var(--gap--0-25rem)',
            fontSize: 'var(--text-lg)',
            lineHeight: '24px',
            letterSpacing: '-0.1px'
          }}
        >
          <span 
            style={{
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)'
            }}
          >
            {team1Name}
          </span>
          <span 
            style={{
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--muted-foreground)'
            }}
          >
            -
          </span>
          <span 
            style={{
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)'
            }}
          >
            {team2Name}
          </span>
        </div>
        
        {/* Selected Team Tag */}
        <div 
          className="flex items-center py-0 rounded"
          style={{
            paddingLeft: 'var(--gap--0-375rem)',
            paddingRight: 'var(--gap--0-375rem)',
            background: teamColor || 'var(--primary)',
            borderRadius: 'var(--border-radius--0-25rem)'
          }}
        >
          <span 
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: '20px',
              color: teamColor ? getTextColor(teamColor) : 'white'
            }}
          >
            {selectedTeamCode}
          </span>
        </div>
      </div>
    </div>
  );
}
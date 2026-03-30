import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// Using professional avatar from Unsplash
const PROFILE_PIC = "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdmF0YXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg3MjcyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface PortfolioHeaderProps {
  username?: string;
  bio?: string;
  joinDate?: string;
  avatarUrl?: string;
}

export function PortfolioHeader({ 
  username = "JohnDoe", 
  bio = "I am a degen Xmarket user.",
  joinDate = "Jan 2025",
  avatarUrl = PROFILE_PIC
}: PortfolioHeaderProps) {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 'var(--gap--1-5rem)',
        width: '100%',
        marginBottom: 'var(--gap--2rem)'
      }}
    >
      {/* Profile Section */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--gap--1-5rem)',
          flex: '1 1 auto',
          minWidth: '280px'
        }}
      >
        <div 
          style={{
            position: 'relative',
            width: '120px',
            height: '120px',
            borderRadius: '9999px',
            overflow: 'hidden',
            border: '1px solid var(--black-a2)',
            flexShrink: 0
          }}
        >
          <ImageWithFallback 
            src={avatarUrl} 
            alt="Profile" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--gap--0-5rem)'
          }}
        >
          <h1 
            style={{ 
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)',
              fontFamily: 'Inter, sans-serif',
              margin: 0
            }}
          >
            {username}
          </h1>
          <p 
            style={{ 
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              fontFamily: 'Inter, sans-serif',
              margin: 0
            }}
          >
            {bio}
          </p>
          <p 
            style={{ 
              fontSize: 'var(--text-xs)',
              color: 'var(--muted-foreground)',
              fontFamily: 'Inter, sans-serif',
              marginTop: '4px',
              margin: 0
            }}
          >
            Joined {joinDate}
          </p>
        </div>
      </div>

      {/* Buy XEF Banner */}
      <div 
        style={{
          flex: '0 0 auto',
          width: '100%',
          maxWidth: '408px',
          minWidth: '280px',
          padding: 'var(--gap--1rem)',
          borderRadius: 'var(--radius-card)',
          border: '1px solid var(--black-a1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--gap--0-5rem)',
          background: 'var(--card-normal)'
        }}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--gap--0-5rem)'
          }}
        >
          {/* XEF Icon placeholder - using two overlapping circles to mimic design */}
          <div 
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '9999px',
                background: 'var(--iris-9)',
                opacity: 0.8,
                position: 'absolute',
                left: 0
              }}
            ></div>
            <div 
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '9999px',
                background: 'var(--iris-11)',
                opacity: 0.8,
                position: 'absolute',
                right: 0
              }}
            ></div>
          </div>
          <span 
            style={{
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--card-foreground)',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Buy XEF
          </span>
        </div>
        
        <p 
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)',
            fontFamily: 'Inter, sans-serif',
            margin: 0
          }}
        >
          Fueling a decentralized future with real-world rewards!
        </p>
        
        <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--gap--0-5rem)',
            color: 'var(--primary-button-bg)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            width: 'fit-content',
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-button-bg-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-button-bg)'}
        >
          Learn more
          <ExternalLink style={{ width: '12px', height: '12px' }} />
        </button>
      </div>
    </div>
  );
}
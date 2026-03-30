import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '@/components/ui/button';

export const CreateMarketCard = React.memo(function CreateMarketCard() {
  return (
    <div 
      style={{
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-1)',
        padding: 'var(--gap--1rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--0-75rem)',
      }}
    >
      {/* Icon */}
      <div 
        style={{
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBzcGFjZSUyMGxhdW5jaHxlbnwxfHx8fDE3Njg4OTY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Create Market"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Title */}
      <h3 
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'var(--font-weight-semi-bold)',
          fontSize: 'var(--text-base)',
          lineHeight: '24px',
          color: 'var(--card-foreground)',
          margin: 0,
        }}
      >
        Create Your Market
      </h3>

      {/* Description */}
      <p 
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'var(--font-weight-normal)',
          fontSize: 'var(--text-sm)',
          lineHeight: '20px',
          color: 'var(--muted-foreground)',
          margin: 0,
        }}
      >
        Turn your ideas into insights and earn real-world rewards when you launch a prediction market and attract investors.
      </p>

      {/* Button */}
      <Button 
        variant="primary" 
        size="default"
        style={{
          width: '100%',
          marginTop: 'var(--gap--0-5rem)',
        }}
      >
        Create new market
      </Button>

      {/* How does this work link */}
      <button 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--gap--0-25rem)',
          alignSelf: 'flex-start',
          background: 'transparent',
          border: 'none',
          padding: 0,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'var(--font-weight-medium)',
          fontSize: 'var(--text-sm)',
          color: 'var(--primary-button-bg)',
          cursor: 'pointer',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--primary-button-bg-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--primary-button-bg)';
        }}
      >
        How does the presale market work?
        <ExternalLink style={{ width: '12px', height: '12px' }} />
      </button>
    </div>
  );
});
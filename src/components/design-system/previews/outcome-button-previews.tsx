/**
 * Outcome Button Preview Components
 * 
 * Two variants:
 * 1. Market Card - Small compact Yes/No buttons used in market cards
 * 2. BuySell Block - Larger outcome selection buttons used in the buy/sell interface
 */
import React, { useState } from 'react';
import { OutcomeButton as BuySellOutcomeButton } from '../../BuySellBlock/OutcomeButton';
import svgPaths from '../../../imports/svg-08dg7pjb6g';

// ==================== MARKET CARD VARIANT ====================
// Small Yes/No buttons used in market cards

interface MarketCardOutcomeButtonProps {
  type: 'yes' | 'no';
  percentage?: number;
  variant?: 'default' | 'hover';
}

function MarketCardOutcomeButton({ type, percentage = 50, variant = 'default' }: MarketCardOutcomeButtonProps) {
  const [isHovered, setIsHovered] = useState(variant === 'hover');
  const isYes = type === 'yes';

  return (
    <div 
      className="relative rounded-[var(--radius-input)] overflow-hidden group/btn cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(variant === 'hover')}
      style={{ 
        border: '1px solid var(--black-a2)',
        background: 'var(--side-bar-outline)',
        boxShadow: 'var(--shadow-4)',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Animated circle that scales from right to left */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9">
        <div 
          className="absolute inset-0 rounded-full transition-all duration-500 ease-out"
          style={{ 
            backgroundColor: isYes ? 'var(--chart-1-hover)' : 'var(--chart-2-hover)',
            transform: isHovered ? 'scale(6) translateX(-50%)' : 'scale(0)',
          }}
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
                    <path 
                      d={svgPaths.p1f4c2700} 
                      fill={isYes ? "url(#paint0_radial_yes)" : "url(#paint0_radial_no)"} 
                    />
                    <defs>
                      {isYes ? (
                        <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes" r="1">
                          <stop offset="0.1358" stopColor="#2F7C57" />
                          <stop offset="0.7046" stopColor="#3DD68C" />
                          <stop offset="0.7778" stopColor="#28684A" />
                          <stop offset="0.8078" stopColor="#33B074" />
                          <stop offset="0.9109" stopColor="#30A46C" />
                          <stop offset="0.9623" stopColor="#2F7C57" />
                          <stop offset="0.9725" stopColor="#28684A" />
                          <stop offset="1" stopColor="#20573E" />
                        </radialGradient>
                      ) : (
                        <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no" r="1">
                          <stop offset="0.1358" stopColor="#B54548" />
                          <stop offset="0.7046" stopColor="#FF9592" />
                          <stop offset="0.7778" stopColor="#8C333A" />
                          <stop offset="0.8078" stopColor="#EC5D5E" />
                          <stop offset="0.9109" stopColor="#E5484D" />
                          <stop offset="0.9623" stopColor="#B54548" />
                          <stop offset="0.9725" stopColor="#8C333A" />
                          <stop offset="1" stopColor="#72232D" />
                        </radialGradient>
                      )}
                    </defs>
                  </svg>
                </div>
              </div>
              <div className={isYes ? "absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]" : "absolute inset-[29.17%_31.25%]"}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isYes ? "0 0 9 10" : "0 0 8 9"}>
                  <path d={isYes ? svgPaths.p294227c0 : svgPaths.p2b92e400} fill="#F1F5F9" />
                </svg>
              </div>
            </div>
          </div>
          <p 
            className="font-sans text-nowrap text-card-foreground whitespace-pre"
            style={{
              fontSize: 'var(--text-s)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            {isYes ? 'Yes' : 'No'}
          </p>
        </div>
        <p 
          className="font-sans text-nowrap whitespace-pre"
          style={{ 
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--card-foreground)',
          }}
        >
          {percentage}%
        </p>
      </div>
    </div>
  );
}

// Market Card - Yes Button
export function OutcomeButtonMarketYesDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '200px' }}>
      <MarketCardOutcomeButton type="yes" percentage={67} />
    </div>
  );
}

export function OutcomeButtonMarketYesHover() {
  return (
    <div style={{ width: '100%', maxWidth: '200px' }}>
      <MarketCardOutcomeButton type="yes" percentage={67} variant="hover" />
    </div>
  );
}

// Market Card - No Button
export function OutcomeButtonMarketNoDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '200px' }}>
      <MarketCardOutcomeButton type="no" percentage={33} />
    </div>
  );
}

export function OutcomeButtonMarketNoHover() {
  return (
    <div style={{ width: '100%', maxWidth: '200px' }}>
      <MarketCardOutcomeButton type="no" percentage={33} variant="hover" />
    </div>
  );
}

// ==================== BUYSELL BLOCK VARIANT ====================
// Larger outcome buttons used in the buy/sell interface

export function OutcomeButtonBuySellYesDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '280px' }}>
      <BuySellOutcomeButton 
        type="Yes" 
        price="67¢" 
        selected={false} 
        onClick={() => {}} 
      />
    </div>
  );
}

export function OutcomeButtonBuySellYesHover() {
  return (
    <div style={{ width: '100%', maxWidth: '280px' }}>
      <div 
        onMouseEnter={(e) => {
          const btn = e.currentTarget.querySelector('[data-hover-trigger]');
          if (btn) {
            const hoverEvent = new MouseEvent('mouseenter', { bubbles: true });
            btn.dispatchEvent(hoverEvent);
          }
        }}
      >
        <div data-hover-trigger style={{ pointerEvents: 'none' }}>
          <BuySellOutcomeButton 
            type="Yes" 
            price="67¢" 
            selected={false} 
            onClick={() => {}} 
          />
        </div>
      </div>
    </div>
  );
}

export function OutcomeButtonBuySellYesSelected() {
  return (
    <div style={{ width: '100%', maxWidth: '280px' }}>
      <BuySellOutcomeButton 
        type="Yes" 
        price="67¢" 
        selected={true} 
        onClick={() => {}} 
      />
    </div>
  );
}

export function OutcomeButtonBuySellNoDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '280px' }}>
      <BuySellOutcomeButton 
        type="No" 
        price="33¢" 
        selected={false} 
        onClick={() => {}} 
      />
    </div>
  );
}

export function OutcomeButtonBuySellNoHover() {
  return (
    <div style={{ width: '100%', maxWidth: '280px' }}>
      <div 
        onMouseEnter={(e) => {
          const btn = e.currentTarget.querySelector('[data-hover-trigger]');
          if (btn) {
            const hoverEvent = new MouseEvent('mouseenter', { bubbles: true });
            btn.dispatchEvent(hoverEvent);
          }
        }}
      >
        <div data-hover-trigger style={{ pointerEvents: 'none' }}>
          <BuySellOutcomeButton 
            type="No" 
            price="33¢" 
            selected={false} 
            onClick={() => {}} 
          />
        </div>
      </div>
    </div>
  );
}

export function OutcomeButtonBuySellNoSelected() {
  return (
    <div style={{ width: '100%', maxWidth: '280px' }}>
      <BuySellOutcomeButton 
        type="No" 
        price="33¢" 
        selected={true} 
        onClick={() => {}} 
      />
    </div>
  );
}
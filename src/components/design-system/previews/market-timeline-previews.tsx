/**
 * Market Timeline Preview Components
 */
import React from 'react';
import { MarketTimeline } from '../../market-details/MarketTimeline';

export function MarketTimelineMarketStart() {
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', width: '100%' }}>
      <div style={{ 
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px',
      }}>
        <MarketTimeline currentStatus="market-start" />
      </div>
    </div>
  );
}

export function MarketTimelineLiveTrading() {
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', width: '100%' }}>
      <div style={{ 
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px',
      }}>
        <MarketTimeline currentStatus="live-trading" />
      </div>
    </div>
  );
}

export function MarketTimelinePredictionClosed() {
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', width: '100%' }}>
      <div style={{ 
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px',
      }}>
        <MarketTimeline currentStatus="prediction-closed" />
      </div>
    </div>
  );
}

export function MarketTimelineResolution() {
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)', width: '100%' }}>
      <div style={{ 
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px',
      }}>
        <MarketTimeline currentStatus="resolution" />
      </div>
    </div>
  );
}
import React from 'react';
import { TrendingUp, AlertCircle, Activity, CheckCircle, DollarSign } from 'lucide-react';
import type { PresaleState, ResolutionOutcome } from '../../data/presaleMarketsData';

interface PresaleStateInfoProps {
  state: PresaleState;
  resolutionOutcome?: ResolutionOutcome;
  viewerRole: 'creator' | 'investor-joined' | 'investor-not-joined';
}

export const PresaleStateInfo = React.memo(function PresaleStateInfo({ state, resolutionOutcome, viewerRole }: PresaleStateInfoProps) {
  // Different messaging based on state and role
  const getStateMessage = () => {
    switch (state) {
      case 'PRESALE_ACTIVE':
        return {
          icon: <TrendingUp style={{ width: '20px', height: '20px' }} />,
          title: 'Presale Active',
          description: viewerRole === 'creator' 
            ? 'Your market is currently raising funds. Once the soft cap is reached, the market will automatically transition to live trading.'
            : 'This market is currently fundraising. Buy presale shares at a fixed $0.50 price to participate early.',
          color: 'var(--blue-11)',
          bgColor: 'var(--blue-3)',
        };
      
      case 'PRESALE_FAILED':
        return {
          icon: <AlertCircle style={{ width: '20px', height: '20px' }} />,
          title: 'Presale Unsuccessful',
          description: viewerRole === 'creator'
            ? 'The presale period ended without reaching the soft cap. Your creation stake has been returned, and all investor funds have been refunded.'
            : viewerRole === 'investor-joined'
            ? 'The presale did not reach its funding goal. Your contribution has been fully refunded to your wallet.'
            : 'This presale did not reach its funding goal and has been canceled. All funds have been refunded to participants.',
          color: 'var(--red-9)',
          bgColor: 'var(--red-3)',
        };
      
      case 'MARKET_LIVE':
        return {
          icon: <CheckCircle style={{ width: '20px', height: '20px' }} />,
          title: 'Market is Live!',
          description: viewerRole === 'creator'
            ? 'Congratulations! Your market reached the soft cap and is now live on the AMM. You will earn a percentage of all trading fees.'
            : viewerRole === 'investor-joined'
            ? 'The market is now live! Your presale shares are unlocking gradually over 24 hours. Claim unlocked shares to trade them on the AMM.'
            : 'This market successfully reached its funding goal and is now trading on the AMM. You can buy and sell shares at the current market price.',
          color: 'var(--green-9)',
          bgColor: 'var(--green-3)',
        };
      
      case 'MARKET_RESOLVED':
        const outcomeText = resolutionOutcome === 'YES' ? 'YES' : resolutionOutcome === 'NO' ? 'NO' : 'INVALID';
        return {
          icon: <DollarSign style={{ width: '20px', height: '20px' }} />,
          title: `Market Resolved: ${outcomeText}`,
          description: viewerRole === 'creator'
            ? `The market has been resolved to ${outcomeText}. Your creation stake has been returned, and accumulated trading fees are available to claim.`
            : viewerRole === 'investor-joined'
            ? resolutionOutcome === 'YES'
              ? `The market resolved to YES! Each of your shares is worth $1.00. Your presale shares have been automatically unlocked for payout.`
              : resolutionOutcome === 'NO'
              ? `The market resolved to NO. Unfortunately, YES shares are worth $0.00. Better luck next time!`
              : `The market resolved as INVALID. All participants will receive their initial investment back.`
            : `This market has been resolved to ${outcomeText}. Payouts are being processed for all participants.`,
          color: resolutionOutcome === 'YES' ? 'var(--green-9)' : 'var(--teal-9)',
          bgColor: resolutionOutcome === 'YES' ? 'var(--green-3)' : 'var(--teal-3)',
        };
      
      default:
        return null;
    }
  };
  
  const message = getStateMessage();
  
  if (!message) return null;
  
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--gap--1rem)',
        padding: 'var(--gap--1-5rem)',
        backgroundColor: message.bgColor,
        border: `1px solid ${message.color}40`,
        borderRadius: 'var(--radius-card)',
        marginBottom: 'var(--gap--2rem)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: 'var(--radius-card)',
          backgroundColor: message.color + '20',
          color: message.color,
          flexShrink: 0,
        }}
      >
        {message.icon}
      </div>
      
      <div style={{ flex: 1 }}>
        <h4
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: message.color,
            marginBottom: 'var(--gap--0-5rem)',
          }}
        >
          {message.title}
        </h4>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-normal)',
            color: 'var(--card-foreground)',
            lineHeight: '1.5',
            margin: 0,
          }}
        >
          {message.description}
        </p>
      </div>
    </div>
  );
});
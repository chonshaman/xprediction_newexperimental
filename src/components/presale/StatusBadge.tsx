import React from 'react';

type MarketStatus = 
  | 'Presale Live' 
  | 'Presale Unsuccessful' 
  | 'Market Live' 
  | 'Pending Resolution' 
  | 'Payout In Progress' 
  | 'Resolved'
  | 'Payout Completed';

interface StatusBadgeProps {
  status: MarketStatus;
}

export const StatusBadge = React.memo(function StatusBadge({ status }: StatusBadgeProps) {
  // Map statuses to CSS variables - synced with PresaleMarketCard
  const getStatusColors = (status: MarketStatus) => {
    switch (status) {
      case 'Presale Live':
        return { bg: 'var(--blue-3)', text: 'var(--blue-11)' };
      case 'Presale Unsuccessful':
        return { bg: 'var(--red-3)', text: 'var(--red-11)' };
      case 'Market Live':
        return { bg: 'var(--green-3)', text: 'var(--green-12)' };
      case 'Pending Resolution':
        return { bg: 'var(--orange-3)', text: 'var(--orange-11)' };
      case 'Payout In Progress':
        return { bg: 'var(--gold-3)', text: 'var(--gold-12)' };
      case 'Resolved':
        return { bg: 'var(--gold-3)', text: 'var(--gold-12)' };
      case 'Payout Completed':
        return { bg: 'var(--green-3)', text: 'var(--green-12)' };
      default:
        return { bg: 'var(--blue-3)', text: 'var(--blue-11)' };
    }
  };

  const statusStyle = getStatusColors(status);

  return (
    <div 
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 12px',
        borderRadius: '6px',
        backgroundColor: statusStyle.bg,
      }}
    >
      <span 
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'var(--font-weight-semi-bold)',
          fontSize: '12px',
          lineHeight: '16px',
          color: statusStyle.text,
        }}
      >
        {status}
      </span>
    </div>
  );
});
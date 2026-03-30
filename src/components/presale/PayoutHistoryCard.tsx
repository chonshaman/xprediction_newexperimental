import React from 'react';
import { Button } from '@/components/ui/button';

export const PayoutHistoryCard = React.memo(function PayoutHistoryCard() {
  const payouts = [
    { id: 968, amount: '$144.58', date: '18 Sep, 2025' },
    { id: 1361, amount: '$223.58', date: '31 Jun, 2025' },
    { id: 1394, amount: '$613.33', date: '16 Nov, 2025' },
    { id: 1702, amount: '$433.11', date: '16 Sep, 2025' },
    { id: 1676, amount: '$341.81', date: '02 Sep, 2025' },
    { id: 1468, amount: '$103.5', date: '28 Aug, 2025' },
    { id: 1269, amount: '$243.47', date: '27 Aug, 2025' },
    { id: 1553, amount: '$243.47', date: '31 Jun, 2025' },
  ];

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
      {/* Header */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
          Payout history
        </h3>
        <button 
          style={{
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
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--primary-button-bg)';
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          Trading fees share
        </button>
      </div>

      {/* Payout List */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--gap--0-5rem)',
        }}
      >
        {payouts.map((payout) => (
          <div 
            key={payout.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'var(--gap--0-5rem) 0',
            }}
          >
            {/* ID Circle */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--gap--0-5rem)',
              }}
            >
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '9999px',
                  background: 'var(--lum-03)',
                  border: '1px solid var(--black-a1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  fontSize: '10px',
                  color: 'var(--card-foreground)',
                }}
              >
                {payout.id.toString().charAt(0)}
              </div>
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-sm)',
                  lineHeight: '20px',
                  color: 'var(--card-foreground)',
                }}
              >
                {payout.id}
              </span>
            </div>

            {/* Amount and Date */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--gap--1rem)',
              }}
            >
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  fontSize: 'var(--text-sm)',
                  lineHeight: '20px',
                  color: 'var(--card-foreground)',
                }}
              >
                {payout.amount}
              </span>
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-normal)',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: 'var(--muted-foreground)',
                }}
              >
                {payout.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <Button 
        variant="outline" 
        size="sm"
        style={{
          width: '100%',
          marginTop: 'var(--gap--0-5rem)',
        }}
      >
        Load more
      </Button>
    </div>
  );
});
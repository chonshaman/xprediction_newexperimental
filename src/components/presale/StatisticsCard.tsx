import React from 'react';

export const StatisticsCard = React.memo(function StatisticsCard() {
  const stats = [
    { label: 'Market created', value: '5' },
    { label: 'Market Invested', value: '63' },
    { label: 'Total trading fees earned', value: '$4,000' },
    { label: 'Total invested', value: '$1,180' },
    { label: 'Total rewards earned', value: '$12,500' },
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
        Statistics
      </h3>

      {/* Stats List */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--gap--0-75rem)',
        }}
      >
        {stats.map((stat, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-normal)',
                fontSize: 'var(--text-sm)',
                lineHeight: '20px',
                color: 'var(--muted-foreground)',
              }}
            >
              {stat.label}
            </span>
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-semi-bold)',
                fontSize: 'var(--text-sm)',
                lineHeight: '20px',
                color: 'var(--card-foreground)',
              }}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});
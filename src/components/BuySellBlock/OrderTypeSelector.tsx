import React from 'react';

export type OrderType = 'Market' | 'Limit';

interface OrderTypeSelectorProps {
  orderType: OrderType;
  onOrderTypeChange: (type: OrderType) => void;
}

export const OrderTypeSelector = React.memo<OrderTypeSelectorProps>(({ orderType, onOrderTypeChange }) => {
  const handleToggle = () => {
    const newType = orderType === 'Market' ? 'Limit' : 'Market';
    onOrderTypeChange(newType);
  };

  return (
    <div 
      onClick={handleToggle}
      className="box-border flex items-center justify-center relative shrink-0 cursor-pointer transition-colors"
      style={{
        gap: '8px',
        height: '36px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: 'var(--border-radius--0-375rem)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <p 
        className="font-sans leading-[20px] not-italic relative shrink-0 text-nowrap text-muted-foreground whitespace-pre"
        style={{
          fontSize: 'var(--text-s)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        {orderType}
      </p>
      <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
        <path d="M4 6L8 10L12 6" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </svg>
    </div>
  );
});

OrderTypeSelector.displayName = 'OrderTypeSelector';
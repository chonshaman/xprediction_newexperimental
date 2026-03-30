import { memo } from 'react';
import { Lock, ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  count: number;
  onClick: () => void;
}

export const CategoryCard = memo(function CategoryCard({ 
  name, 
  count, 
  onClick 
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'var(--card-normal)',
        border: '1px solid var(--gold-6)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--1rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--gap--0-75rem)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: 'var(--shadow-1)',
        minWidth: '200px',
        textAlign: 'left',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--card-hover)';
        e.currentTarget.style.borderColor = 'var(--gold-9)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--card-normal)';
        e.currentTarget.style.borderColor = 'var(--gold-6)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-1)';
      }}
    >
      <div className="flex items-center" style={{ gap: 'var(--gap--0-75rem)' }}>
        {/* Lock icon */}
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-input)',
            background: 'var(--gold-3)',
          }}
        >
          <Lock
            size={16}
            style={{ color: 'var(--gold-11)' }}
          />
        </div>

        {/* Category info */}
        <div className="flex flex-col">
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-s)',
              fontWeight: 'var(--font-weight-semi-bold)',
              lineHeight: '20px',
              color: 'var(--card-foreground)',
              margin: 0,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: '16px',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            {count} market{count !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Chevron */}
      <ChevronRight
        size={16}
        style={{ color: 'var(--muted-foreground)', flexShrink: 0 }}
      />
    </button>
  );
});
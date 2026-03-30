import { memo } from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    onClick?: () => void;
  }>;
}

export const Breadcrumb = memo(function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--gap--0-5rem)',
        marginBottom: 'var(--gap--1-5rem)',
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center" style={{ gap: 'var(--gap--0-5rem)' }}>
          {index > 0 && (
            <ChevronRight
              size={14}
              style={{ color: 'var(--muted-foreground)', flexShrink: 0 }}
            />
          )}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-s)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: 'var(--muted-foreground)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold-11)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)';
              }}
            >
              {item.label}
            </button>
          ) : (
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-s)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '20px',
                color: 'var(--card-foreground)',
              }}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
});

import { Search, X } from 'lucide-react';
import { useState, memo } from 'react';

interface PresaleSearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const PresaleSearchBox = memo(function PresaleSearchBox({ 
  value, 
  onChange, 
  placeholder = 'Search Pre-sale markets' 
}: PresaleSearchBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div 
      className="presale-search-box"
      style={{ 
        flex: '1 1 auto', 
        minWidth: '224px', 
        maxWidth: '448px', 
        position: 'relative' 
      }}
    >
      <div 
        className="flex items-center cursor-text transition-all duration-200 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          gap: 'var(--gap--0-5rem)',
          backgroundColor: isFocused || isHovered ? 'var(--card-hover)' : 'var(--card-normal)',
          border: isFocused ? '1px solid var(--primary-button-bg)' : isHovered ? '1px solid var(--muted-foreground)' : '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          paddingTop: 'var(--gap--0-5rem)',
          paddingBottom: 'var(--gap--0-5rem)',
          paddingLeft: 'var(--gap--0-75rem)',
          paddingRight: 'var(--gap--0-75rem)',
          boxShadow: isFocused ? '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)' : isHovered ? '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)' : 'none',
        }}
      >
        <Search 
          style={{
            width: '20px',
            height: '20px',
            color: 'var(--muted-foreground)',
            strokeWidth: 2,
            flexShrink: 0,
          }}
        />
        <input
          type="text"
          className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
          }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {value && (
          <button
            onClick={handleClear}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--muted-foreground)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              transition: 'color 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--card-foreground)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted-foreground)';
            }}
          >
            <X style={{ width: '18px', height: '18px' }} />
          </button>
        )}
      </div>
      
      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .presale-search-box {
            max-width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </div>
  );
});
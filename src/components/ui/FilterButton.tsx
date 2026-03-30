import React, { useState } from 'react';
import { Rocket } from 'lucide-react';

interface FilterButtonProps {
  /** The button text */
  children: React.ReactNode;
  /** Whether the button is in active state */
  active?: boolean;
  /** Button click handler */
  onClick?: () => void;
  /** Optional label (e.g., "Status:") */
  label?: string;
  /** Show icon on the right */
  showIcon?: boolean;
  /** Icon component to display */
  icon?: React.ReactNode;
  /** Label text color - white for dark backgrounds */
  labelWhite?: boolean;
}

export function FilterButton({
  children,
  active = false,
  onClick,
  label,
  showIcon = false,
  icon = <Rocket style={{ width: '16px', height: '16px' }} />,
  labelWhite = false,
}: FilterButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: label ? 'var(--gap--0-5rem)' : showIcon ? 'var(--gap--0-375rem)' : '0',
        padding: '0 16px',
        height: '40px',
        borderRadius: '9999px',
        background: active 
          ? 'var(--iris-9)' 
          : isHovered 
            ? 'var(--black-a1)' 
            : 'var(--sidebar-tab)',
        border: '1px solid var(--black-a1)',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: '14px',
        lineHeight: '20px',
        color: active ? '#FFFFFF' : 'var(--card-foreground)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {label && (
        <span
          style={{
            color: labelWhite ? '#FFFFFF' : active ? '#FFFFFF' : 'var(--card-foreground)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            fontSize: '14px',
            lineHeight: '20px',
          }}
        >
          {label}
        </span>
      )}
      <span>{children}</span>
      {showIcon && icon}
    </button>
  );
}

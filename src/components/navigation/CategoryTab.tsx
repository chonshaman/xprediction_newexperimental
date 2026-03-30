import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface CategoryTabItem {
  id: string;
  name: string;
  icon: LucideIcon;
  disabled?: boolean;
}

interface CategoryTabProps {
  items: CategoryTabItem[];
  activeId: string;
  onTabChange: (id: string) => void;
}

export function CategoryTab({ items, activeId, onTabChange }: CategoryTabProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div 
      className="flex items-center overflow-x-auto scrollbar-hide"
      style={{
        gap: 'var(--gap--1rem)',
        paddingBottom: 'var(--gap--0-5rem)',
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeId === item.id;
        const isHovered = hoveredId === item.id && !item.disabled;
        const isDisabled = item.disabled || false;
        
        return (
          <button
            key={item.id}
            onClick={() => !isDisabled && onTabChange(item.id)}
            disabled={isDisabled}
            className="flex flex-col items-center justify-center shrink-0 transition-all duration-200 group rounded-lg"
            style={{
              gap: 'var(--gap--0-5rem)',
              minWidth: '72px',
              padding: 'var(--gap--0-5rem)',
              backgroundColor: isDisabled ? 'transparent' : isActive ? 'var(--card-normal)' : isHovered ? 'var(--black-a1)' : 'transparent',
              border: isActive && !isDisabled ? '1px solid var(--black-a1)' : '1px solid transparent',
              boxShadow: isActive && !isDisabled ? 'var(--shadow-2)' : 'none',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              opacity: isDisabled ? 0.4 : 1,
            }}
            onMouseEnter={() => !isDisabled && setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div 
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: '40px',
                height: '40px',
              }}
            >
              <Icon 
                className="transition-all duration-200"
                style={{
                  width: '24px',
                  height: '24px',
                  color: isDisabled ? 'var(--muted-foreground)' : isActive ? 'var(--iris-10)' : isHovered ? 'var(--primary)' : 'var(--muted-foreground)',
                  strokeWidth: isActive && !isDisabled ? 2.5 : 2,
                  transform: isHovered && !isActive && !isDisabled ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            </div>
            <span 
              className="font-sans text-nowrap transition-all duration-200"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: isActive && !isDisabled ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
                lineHeight: '1.2',
                color: isDisabled ? 'var(--muted-foreground)' : isActive ? 'var(--iris-10)' : isHovered ? 'var(--primary)' : 'var(--muted-foreground)',
              }}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
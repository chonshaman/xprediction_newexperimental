/**
 * Navigation Tree Component
 * Displays the component hierarchy with expand/collapse functionality
 */
import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { NavigationTreeProps, ComponentVariant } from '../types';

export function NavigationTree({ 
  activeVariant, 
  onNavigate,
  componentVariants 
}: NavigationTreeProps & { componentVariants: ComponentVariant[] }) {
  const [expandedCategories, setExpandedCategories] = React.useState<Set<string>>(new Set());
  
  const currentVariant = componentVariants.find((v) => v.id === activeVariant);
  const activeCategory = currentVariant?.category || '';

  // Auto-expand ONLY the active category (collapse others)
  React.useEffect(() => {
    if (activeCategory) {
      setExpandedCategories(new Set([activeCategory]));
    }
  }, [activeCategory]);

  // Group variants by category
  const groupedVariants = componentVariants.reduce((acc, variant) => {
    if (!acc[variant.category]) {
      acc[variant.category] = [];
    }
    acc[variant.category].push(variant);
    return acc;
  }, {} as Record<string, ComponentVariant[]>);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <div
      style={{
        paddingRight: 'var(--gap--0-5rem)',
      }}
      className="minimal-scrollbar"
    >
      <h3
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
          marginBottom: 'var(--gap--1rem)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        Components
      </h3>
      
      {Object.entries(groupedVariants).map(([category, variants]) => {
        const isExpanded = expandedCategories.has(category);
        const isActive = category === activeCategory;
        
        return (
          <div key={category} style={{ marginBottom: 'var(--gap--0-75rem)' }}>
            <button
              onClick={() => toggleCategory(category)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                padding: 'var(--gap--0-5rem)',
                paddingLeft: 'var(--gap--0-5rem)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--gap--0-25rem)',
                fontSize: 'var(--text-sm)',
                fontWeight: isActive ? 'var(--font-weight-semi-bold)' : 'var(--font-weight-medium)',
                color: isActive ? 'var(--iris-11)' : 'var(--card-foreground)',
                marginBottom: isExpanded ? 'var(--gap--0-5rem)' : '0',
                borderRadius: 'var(--border-radius--0-375rem)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--black-a1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {isExpanded ? (
                <ChevronDown className="w-3 h-3" style={{ color: isActive ? 'var(--iris-9)' : 'var(--muted-foreground)' }} />
              ) : (
                <ChevronRight className="w-3 h-3" style={{ color: 'var(--muted-foreground)' }} />
              )}
              {category}
            </button>
            
            {isExpanded && variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => onNavigate(variant.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: 'var(--gap--0-5rem)',
                  paddingLeft: 'var(--gap--1-5rem)',
                  borderRadius: 'var(--border-radius--0-375rem)',
                  background: activeVariant === variant.id ? 'var(--card-normal)' : 'transparent',
                  color: activeVariant === variant.id ? 'var(--iris-11)' : 'var(--muted-foreground)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'var(--text-sm)',
                  fontWeight: activeVariant === variant.id ? 'var(--font-weight-semi-bold)' : 'var(--font-weight-medium)',
                  transition: 'all 0.2s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  if (activeVariant !== variant.id) {
                    e.currentTarget.style.background = 'var(--black-a1)';
                    e.currentTarget.style.color = 'var(--card-foreground)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeVariant !== variant.id) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--muted-foreground)';
                  }
                }}
              >
                {variant.label}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}

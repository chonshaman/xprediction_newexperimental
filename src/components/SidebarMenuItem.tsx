import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarMenuItemProps {
  icon: LucideIcon | React.ComponentType<{ className?: string; isActive?: boolean }>;
  label: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
  shouldBlink?: boolean;
}

export const SidebarMenuItem = React.memo<SidebarMenuItemProps>(({
  icon: Icon,
  label,
  isActive = false,
  isCollapsed = false,
  onClick,
  shouldBlink = false
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  
  // Reset icon colors when isActive changes
  React.useEffect(() => {
    if (buttonRef.current) {
      const icon = buttonRef.current.querySelector('svg');
      if (icon && !icon.hasAttribute('data-private-markets-icon')) {
        if (isActive) {
          (icon as HTMLElement).style.color = 'var(--iris-10)';
          const paths = icon.querySelectorAll('path');
          paths.forEach(path => {
            (path as SVGPathElement).setAttribute('stroke', 'var(--iris-10)');
          });
        } else {
          (icon as HTMLElement).style.color = 'var(--side-bar-primary)';
          const paths = icon.querySelectorAll('path');
          paths.forEach(path => {
            (path as SVGPathElement).setAttribute('stroke', 'var(--side-bar-primary)');
          });
        }
      }
    }
  }, [isActive]);

  // Check if this is the Private Markets item
  const isPrivateMarkets = (Icon as any).displayName === 'PrivateMarketsIcon';

  // Check if Icon is a Lucide icon or custom component
  const isLucideIcon = (Icon as any).displayName !== undefined || 
                       (Icon as any).$$typeof === Symbol.for('react.forward_ref');
  
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 rounded-[var(--radius-button)] transition-all duration-300 ease-out ${!isActive ? 'group' : ''} ${shouldBlink ? 'menu-item-blink' : ''}`}
      style={{
        height: '32px',
        background: isActive ? 'var(--card-normal)' : 'transparent',
        border: isActive ? '1px solid var(--black-a1)' : '1px solid transparent',
        color: isActive ? (isPrivateMarkets ? 'var(--gold-9)' : 'var(--iris-10)') : 'var(--side-bar-primary)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: isActive ? 'var(--font-weight-semi-bold)' : 'var(--font-weight-normal)',
        fontSize: 'var(--text-sm)',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        boxShadow: isActive ? 'var(--shadow-1)' : 'none',
        cursor: isActive ? 'default' : 'pointer',
      }}
      title={isCollapsed ? label : undefined}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'var(--side-bar-accent)';
          e.currentTarget.style.color = isPrivateMarkets ? 'var(--gold-9)' : 'var(--primary)';
          const icon = e.currentTarget.querySelector('svg');
          if (icon && !icon.hasAttribute('data-private-markets-icon')) {
            (icon as HTMLElement).style.color = 'var(--primary)';
            const paths = icon.querySelectorAll('path');
            paths.forEach(path => {
              (path as SVGPathElement).setAttribute('stroke', 'var(--iris-9)');
            });
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--side-bar-primary)';
          const icon = e.currentTarget.querySelector('svg');
          if (icon && !icon.hasAttribute('data-private-markets-icon')) {
            (icon as HTMLElement).style.color = 'var(--side-bar-primary)';
            const paths = icon.querySelectorAll('path');
            paths.forEach(path => {
              (path as SVGPathElement).setAttribute('stroke', 'var(--side-bar-primary)');
            });
          }
        }
      }}
    >
      {isLucideIcon ? (
        <Icon className={`w-4 h-4 shrink-0 icon-animation ${isActive ? 'icon-active' : ''}`} />
      ) : (
        isPrivateMarkets ? (() => {
          const PMIcon = Icon as React.ComponentType<{ className?: string; isActive?: boolean; style?: React.CSSProperties }>;
          return (
            <PMIcon
              className={`shrink-0 ${isActive ? 'icon-active-gold' : 'icon-breathe-gold'}`}
              isActive={isActive}
            />
          );
        })() : (
          <Icon className={`shrink-0 icon-animation ${isActive ? 'icon-active' : ''}`} isActive={isActive} />
        )
      )}
      {!isCollapsed && (
        <span className={`transition-transform duration-300 ease-out ${!isActive ? 'group-hover:translate-x-1' : ''}`}>
          {label}
        </span>
      )}
      
      {/* Animation styles */}
      <style>{`
        @keyframes soft-blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes icon-bounce {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.15) rotate(-8deg);
          }
          50% {
            transform: scale(1.25) rotate(0deg);
          }
          75% {
            transform: scale(1.15) rotate(8deg);
          }
        }
        
        @keyframes icon-wiggle {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-5deg) scale(1.05);
          }
          50% {
            transform: rotate(5deg) scale(1.1);
          }
          75% {
            transform: rotate(-3deg) scale(1.05);
          }
        }
        
        @keyframes icon-pulse-glow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0px var(--iris-9));
          }
          50% {
            transform: scale(1.08);
            filter: drop-shadow(0 0 6px var(--iris-9));
          }
        }

        @keyframes icon-pulse-glow-gold {
          0%, 100% {
            filter: drop-shadow(0 0 0px var(--gold-9));
          }
          50% {
            filter: drop-shadow(0 0 10px var(--gold-9));
          }
        }

        @keyframes icon-breathe-gold {
          0%, 100% {
            filter: drop-shadow(0 0 0px var(--gold-9));
            opacity: 0.8;
          }
          50% {
            filter: drop-shadow(0 0 5px var(--gold-9));
            opacity: 1;
          }
        }
        
        /* Icon base transition */
        .icon-animation {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Private Markets icon wrapper — no transition so animation takes full control */
        .pm-icon-wrapper {
          transition: none;
          transform: scale(1.6);
          scale:1.6;
        }
        
        /* Hover animation for icons */
        .group:hover .icon-animation {
          animation: icon-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        /* Active icon animation */
        .icon-active {
          animation: icon-pulse-glow 2s ease-in-out infinite;
        }

        .icon-active-gold {
          animation: icon-pulse-glow-gold 2s ease-in-out infinite both;
          scale:1.6;
        }

        .icon-breathe-gold {
          animation: icon-breathe-gold 2.5s ease-in-out infinite both;
          scale:1.6;
        }
        
        /* Stop active animation on hover */
        .group:hover .icon-active {
          animation: icon-wiggle 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .group:hover .icon-active-gold {
          animation: icon-wiggle 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .group:hover .icon-breathe-gold {
          animation: icon-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .menu-item-blink {
          animation: soft-blink 2.5s ease-in-out infinite;
        }
        
        /* Pause animation on hover or when active */
        .menu-item-blink:hover,
        .menu-item-blink[style*="var(--iris-10)"] {
          animation: none;
        }
      `}</style>
    </button>
  );
});

SidebarMenuItem.displayName = 'SidebarMenuItem';
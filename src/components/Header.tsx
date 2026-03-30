import { ChevronDown, Globe, User, Menu, LogOut, Settings, Eye, UserCircle, ChevronRight, DollarSign } from 'lucide-react';
import { useBalance } from '../contexts/BalanceContext';
import { useState, useRef, useEffect, memo } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { Logo } from './Logo';
import { MoneyDisplay } from './MoneyDisplay';
import { SearchBox } from './SearchBox';
import type { Market } from '../data/markets';

interface HeaderProps {
  onToggleSidebar?: () => void;
  markets?: Market[];
  onMarketSelect?: (market: Market) => void;
  onLogoClick?: () => void;
}

export const Header = memo(function Header({ onToggleSidebar, markets = [], onMarketSelect, onLogoClick }: HeaderProps) {
  const { balance } = useBalance();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarketClick = (market: Market) => {
    if (onMarketSelect) {
      onMarketSelect(market);
    }
  };
  
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
  };

  return (
    <div 
      className="px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between"
    >
      {/* Left Side - Hamburger Menu (Mobile) + Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Hamburger Menu - Show below 1366px */}
        <button 
          onClick={onToggleSidebar}
          className="hamburger-menu p-2 rounded-[var(--radius-button)] transition-colors"
          style={{ color: 'var(--lum-12)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--black-a1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo - Clickable */}
        <button 
          onClick={handleLogoClick}
          className="transition-opacity duration-200 hover:opacity-80"
          style={{ 
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
          aria-label="Go to home page"
        >
          <Logo />
        </button>
      </div>

      {/* Center - Search Box */}
      <div className="flex-1 flex justify-center mx-4">
        <SearchBox markets={markets} onMarketClick={handleMarketClick} />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center" style={{ gap: 'var(--gap--0-5rem)' }}>
        {/* Currency Selector - Hidden on mobile */}
        <button 
          className="hidden sm:flex items-center transition-colors"
          style={{ 
            fontSize: 'var(--text-s)', 
            fontFamily: 'Inter, sans-serif',
            color: 'var(--lum-12)',
            height: '36px',
            gap: 'var(--gap--0-5rem)',
            padding: '0 var(--gap--0-75rem)',
            borderRadius: 'var(--radius-button)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--black-a1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <MoneyDisplay 
            amount={balance} 
            currency="USDT"
            icon={<DollarSign className="w-4 h-4" style={{ color: 'var(--lum-12)' }} />}
          />
          <ChevronDown className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
        </button>

        {/* Deposit Button */}
        <PrimaryButton size="xs">
          Deposit
        </PrimaryButton>

        {/* User Profile with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            className="flex items-center transition-colors"
            style={{ 
              color: 'var(--lum-12)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-s)',
              height: '36px',
              gap: 'var(--gap--0-5rem)',
              padding: '0 var(--gap--0-75rem)',
              borderRadius: 'var(--radius-button)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--black-a1)';
            }}
            onMouseLeave={(e) => {
              if (!isProfileOpen) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsLanguageOpen(false);
            }}
          >
            <div 
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
              style={{ background: 'var(--iris-9)' }}
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--lum-01)' }} />
            </div>
            <span className="hidden sm:inline" style={{ color: 'var(--lum-12)' }}>shaman</span>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--muted-foreground)' }} />
          </button>

          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div 
              className="absolute right-0 mt-2 w-56 z-50"
              style={{ 
                background: 'var(--card-normal)',
                border: '1px solid var(--black-a2)',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--gap--0-5rem)',
                boxShadow: 'var(--shadow-2)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'Inter, sans-serif',
                opacity: 0,
                transform: 'translateY(-8px)',
                animation: 'headerDropdownFadeIn 0.2s ease forwards',
              }}
            >
              {/* Profile */}
              <button 
                className="w-full flex items-center gap-3 transition-colors"
                style={{ 
                  color: 'var(--lum-12)',
                  padding: 'var(--gap--0-5rem)',
                  borderRadius: 'var(--border-radius--0-375rem)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--lum-03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <UserCircle className="w-4 h-4" />
                <span>Profile</span>
              </button>

              {/* Watchlist */}
              <button 
                className="w-full flex items-center gap-3 transition-colors"
                style={{ 
                  color: 'var(--lum-12)',
                  padding: 'var(--gap--0-5rem)',
                  borderRadius: 'var(--border-radius--0-375rem)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--lum-03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Eye className="w-4 h-4" />
                <span>Watchlist</span>
              </button>

              {/* Settings */}
              <button 
                className="w-full flex items-center gap-3 transition-colors"
                style={{ 
                  color: 'var(--lum-12)',
                  padding: 'var(--gap--0-5rem)',
                  borderRadius: 'var(--border-radius--0-375rem)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--lum-03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>

              {/* Languages with submenu */}
              <div className="relative">
                <button 
                  className="w-full flex items-center justify-between gap-3 transition-colors"
                  style={{ 
                    color: 'var(--lum-12)',
                    padding: 'var(--gap--0-5rem)',
                    borderRadius: 'var(--border-radius--0-375rem)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--lum-03)';
                    setIsLanguageOpen(true);
                  }}
                  onMouseLeave={(e) => {
                    if (!isLanguageOpen) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4" />
                    <span>Languages</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Language Submenu */}
                {isLanguageOpen && (
                  <div 
                    className="absolute right-full top-0 mr-1 w-48"
                    style={{ 
                      background: 'var(--card-normal)',
                      border: '1px solid var(--black-a2)',
                      borderRadius: 'var(--radius-card)',
                      padding: 'var(--gap--0-5rem)',
                      boxShadow: 'var(--shadow-2)',
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onMouseEnter={() => setIsLanguageOpen(true)}
                    onMouseLeave={() => setIsLanguageOpen(false)}
                  >
                    {['English', 'Español', 'Français', 'Deutsch', '中文', '日本語'].map((lang) => (
                      <button 
                        key={lang}
                        className="w-full text-left transition-colors"
                        style={{ 
                          color: 'var(--lum-12)',
                          padding: 'var(--gap--0-5rem)',
                          borderRadius: 'var(--border-radius--0-375rem)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--lum-03)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div 
                style={{ 
                  background: 'var(--black-a2)', 
                  height: '1px', 
                  margin: 'var(--gap--0-25rem) 0' 
                }} 
              />

              {/* Log out */}
              <button 
                className="w-full flex items-center gap-3 transition-colors"
                style={{ 
                  color: 'var(--red-11)',
                  padding: 'var(--gap--0-5rem)',
                  borderRadius: 'var(--border-radius--0-375rem)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--lum-03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        /* Show hamburger menu below 1366px */
        .hamburger-menu {
          display: flex;
        }

        @media (min-width: 1366px) {
          .hamburger-menu {
            display: none;
          }
        }

        @keyframes headerDropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
});
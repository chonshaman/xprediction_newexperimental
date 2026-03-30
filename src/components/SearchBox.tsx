import { Search, X } from 'lucide-react';
import { useState, useRef, useEffect, memo, useCallback } from 'react';
import { MarketCard } from './MarketCard';
import type { Market } from '../data/markets';

interface SearchBoxProps {
  markets: Market[];
  onMarketClick: (market: Market) => void;
}

export const SearchBox = memo(function SearchBox({ markets, onMarketClick }: SearchBoxProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const iconButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter markets based on search query
  const filteredMarkets = searchQuery.length >= 2
    ? markets.filter((market) => {
        const query = searchQuery.toLowerCase();
        return (
          market.question.toLowerCase().includes(query) ||
          market.category.name.toLowerCase().includes(query) ||
          (market.outcomes && market.outcomes.some(outcome => 
            outcome.label.toLowerCase().includes(query)
          ))
        );
      })
    : [];

  // Close expanded view when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target as Node) &&
        iconButtonRef.current && 
        !iconButtonRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded && !isClosing) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isExpanded, isClosing]);

  const handleSearchClick = useCallback(() => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    inputRef.current?.focus();
  }, []);

  const handleMarketClick = useCallback((market: Market) => {
    onMarketClick(market);
    setSearchQuery('');
    setIsExpanded(false);
  }, [onMarketClick]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsClosing(false);
      setSearchQuery('');
    }, 350);
  }, []);

  return (
    <>
      {/* Icon-only Search Button - Show from 769px to 1024px */}
      <button 
        className="search-icon-only p-2 rounded-[var(--radius-button)] transition-colors"
        onClick={handleSearchClick}
        style={{ color: 'var(--muted-foreground)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--card-hover)';
          e.currentTarget.style.color = 'var(--card-foreground)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--muted-foreground)';
        }}
        aria-label="Search markets"
        ref={iconButtonRef}
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Full Search Input - Hidden from 769px to 1024px */}
      <div className="relative search-full-width" ref={searchRef}>
        <div 
          className="flex items-center cursor-pointer transition-all duration-200 ease-out"
          onClick={handleSearchClick}
          onMouseEnter={() => setIsSearchHovered(true)}
          onMouseLeave={() => setIsSearchHovered(false)}
          style={{
            width: '320px',
            gap: 'var(--gap--0-5rem)',
            backgroundColor: isSearchHovered ? 'var(--card-hover)' : 'var(--card-normal)',
            border: isSearchHovered ? '1px solid var(--muted-foreground)' : '1px solid var(--black-a2)',
            borderRadius: 'var(--radius-card)',
            paddingTop: 'var(--gap--0-5rem)',
            paddingBottom: 'var(--gap--0-5rem)',
            paddingLeft: isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
            paddingRight: isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
            boxShadow: isSearchHovered ? '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)' : 'none',
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
          <span 
            className="font-sans flex-1"
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
            }}
          >
            Search markets...
          </span>
        </div>
      </div>

      {/* Expanded Search Modal */}
      {isExpanded && (
        <>
          {/* Backdrop Overlay - 20% */}
          <div 
            className={`fixed inset-0 z-[100] ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}
            onClick={handleClose}
          />

          {/* Search Modal Container */}
          <div 
            className={`fixed z-[101] ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
            style={{
              top: '80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'calc(100vw - 64px)',
              maxWidth: '1200px',
              height: 'calc(100vh - 120px)',
              maxHeight: '800px',
              border: '1px solid var(--black-a1)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-3)',
              backdropFilter: 'blur(var(--backdrop-filter--blur-8px-))',
              WebkitBackdropFilter: 'blur(var(--backdrop-filter--blur-8px-))',
            }}
          >
            {/* Blur Background Layer */}
            <div 
              className="absolute inset-0 z-0 rounded-[var(--radius-card)]"
              style={{ 
                background: 'var(--lum-01)',
                opacity: 0.85,
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex">
              {/* Left Column - Search Input */}
              <div 
                className="border-r"
                style={{
                  width: '400px',
                  borderColor: 'var(--black-a1)',
                  padding: 'var(--gap--2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--gap--1-5rem)',
                }}
              >
                {/* Close Button */}
                <div className="flex items-center justify-between">
                  <h3 
                    className="font-sans"
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      color: 'var(--card-foreground)',
                    }}
                  >
                    Search Markets
                  </h3>
                  <button
                    onClick={handleClose}
                    className="transition-all duration-200 rounded-lg p-2"
                    style={{ 
                      color: 'var(--muted-foreground)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--card-hover)';
                      e.currentTarget.style.color = 'var(--card-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                    }}
                  >
                    <X style={{ width: '20px', height: '20px' }} />
                  </button>
                </div>

                {/* Search Input */}
                <div 
                  className="flex items-center transition-all duration-200 ease-out"
                  style={{
                    gap: 'var(--gap--0-5rem)',
                    backgroundColor: 'var(--card-normal)',
                    border: '1px solid var(--primary-button-bg)',
                    borderRadius: 'var(--radius-card)',
                    paddingTop: 'var(--gap--0-75rem)',
                    paddingBottom: 'var(--gap--0-75rem)',
                    paddingLeft: 'var(--gap--1rem)',
                    paddingRight: 'var(--gap--1rem)',
                    boxShadow: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)',
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
                    ref={inputRef}
                    type="text"
                    className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground"
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to search..."
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={handleClearSearch}
                      className="transition-all duration-200"
                      style={{ 
                        color: 'var(--muted-foreground)',
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

                {/* Search Info */}
                <div>
                  {searchQuery.length === 0 && (
                    <p 
                      className="font-sans"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      Start typing to search through {markets.length} markets
                    </p>
                  )}
                  {searchQuery.length === 1 && (
                    <p 
                      className="font-sans"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      Type at least 2 characters to search
                    </p>
                  )}
                  {searchQuery.length >= 2 && (
                    <p 
                      className="font-sans"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-weight-semi-bold)',
                        color: 'var(--card-foreground)',
                      }}
                    >
                      {filteredMarkets.length} {filteredMarkets.length === 1 ? 'result' : 'results'} found
                    </p>
                  )}
                </div>

                {/* Tips */}
                <div 
                  className="flex-1 flex flex-col justify-end"
                  style={{
                    gap: 'var(--gap--1rem)',
                  }}
                >
                  <div 
                    className="rounded-lg"
                    style={{
                      padding: 'var(--gap--1rem)',
                      backgroundColor: 'var(--card-normal)',
                      border: '1px solid var(--black-a1)',
                    }}
                  >
                    <p 
                      className="font-sans mb-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-weight-semi-bold)',
                        color: 'var(--card-foreground)',
                      }}
                    >
                      Search Tips
                    </p>
                    <ul 
                      className="font-sans"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)',
                        listStyle: 'disc',
                        paddingLeft: 'var(--gap--1-25rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--gap--0-25rem)',
                      }}
                    >
                      <li>Search by market question</li>
                      <li>Search by category name</li>
                      <li>Search by outcome labels</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <p 
                      className="font-sans"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      Press ESC to close
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Results */}
              <div 
                className="flex-1 overflow-y-auto"
                style={{
                  padding: 'var(--gap--2rem)',
                }}
              >
                {searchQuery.length < 2 ? (
                  <div 
                    className="h-full flex items-center justify-center"
                    style={{
                      padding: 'var(--gap--2rem)',
                    }}
                  >
                    <div className="text-center">
                      <Search 
                        style={{
                          width: '64px',
                          height: '64px',
                          color: 'var(--muted-foreground)',
                          opacity: 0.3,
                          margin: '0 auto var(--gap--1rem)',
                        }}
                      />
                      <p 
                        className="font-sans"
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        Start typing to see results
                      </p>
                    </div>
                  </div>
                ) : filteredMarkets.length === 0 ? (
                  <div 
                    className="h-full flex items-center justify-center"
                    style={{
                      padding: 'var(--gap--2rem)',
                    }}
                  >
                    <div className="text-center">
                      <p 
                        className="font-sans"
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        No markets found for "{searchQuery}"
                      </p>
                      <p 
                        className="font-sans mt-2"
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        Try different keywords
                      </p>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="grid grid-cols-2"
                    style={{
                      gap: 'var(--gap--1rem)',
                    }}
                  >
                    {filteredMarkets.map((market) => (
                      <div 
                        key={market.id}
                        className="transition-transform duration-200 hover:scale-[1.02]"
                      >
                        <MarketCard
                          {...market}
                          onClick={() => handleMarketClick(market)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style>{`
        /* Responsive search display */
        /* Hide icon-only by default */
        .search-icon-only {
          display: none;
        }

        /* Hide full-width by default on mobile */
        .search-full-width {
          display: none;
        }

        /* From 769px to 1024px: Show icon only, hide full search */
        @media (min-width: 769px) and (max-width: 1024px) {
          .search-icon-only {
            display: flex;
          }
          .search-full-width {
            display: none;
          }
        }

        /* Above 1024px: Show full search, hide icon */
        @media (min-width: 1025px) {
          .search-icon-only {
            display: none;
          }
          .search-full-width {
            display: block;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          to {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: forwards;
        }

        .animate-fade-out {
          animation: fadeOut 300ms cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: forwards;
        }

        .animate-slide-up {
          animation: slideUp 350ms cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: forwards;
        }

        .animate-slide-down {
          animation: slideDown 350ms cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: forwards;
        }

        /* Custom scrollbar for results */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: var(--black-a2);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: var(--black-a3);
        }
      `}</style>
    </>
  );
});
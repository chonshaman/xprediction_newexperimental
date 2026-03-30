import { useState, useEffect, useCallback, Suspense, useMemo, useRef, startTransition } from 'react';
import './error-suppression'; // Import error suppression for Rive WebGL bugs
import './styles/globals.css';  // Global design system styles — must be first CSS import
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomePage } from './components/home/HomePage';
import { MarketDetails } from './components/MarketDetails';
import { Sports } from './components/Sports';
import { Watchlist } from './components/Watchlist';
import { PortfolioPage } from './components/portfolio/PortfolioPage';
import { PresalePage } from './components/presale/PresalePage';
import { PresaleDetailWrapper } from './components/presale/PresaleDetailWrapper';
import { DesignSystemPage } from './components/design-system';
import Referrals from './components/Referrals';
import { PrivateMarkets } from './components/PrivateMarkets';
import { PrivateCategoryView } from './components/private-markets/PrivateCategoryView';

import { BalanceProvider } from './contexts/BalanceContext';
import { SavedMarketsProvider } from './context/SavedMarketsContext';
import { featuredMarkets, endingSoonMarkets, heroCarouselMarkets, multiOutcomeMarkets } from './data/markets';
import type { Market } from './data/markets';
import type { PresaleMarket } from './data/presaleMarketsData';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  // Detect browser's theme preference
  const getBrowserTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // State management
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [selectedPresaleMarket, setSelectedPresaleMarket] = useState<PresaleMarket | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(getBrowserTheme());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [previousPage, setPreviousPage] = useState('home'); // Track where user came from
  const [presaleActiveTab, setPresaleActiveTab] = useState<'explore' | 'my-markets'>('explore'); // Track presale tab
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [manuallyExpanded, setManuallyExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Check authentication status on mount
  useEffect(() => {
    // Referrals gate disabled — always start on home
    localStorage.setItem('hasAuthenticated', 'true');
  }, []);
  
  // Ref to track the main scroll container
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const presaleScrollRef = useRef<HTMLDivElement>(null);
  const presaleDetailScrollRef = useRef<HTMLDivElement>(null);

  // Combine all markets for search - memoized to prevent recreation on every render
  const allMarkets = useMemo(
    () => [...heroCarouselMarkets, ...featuredMarkets, ...endingSoonMarkets, ...multiOutcomeMarkets],
    []
  );

  // Handle sidebar collapse state based on window size and page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isDetailPage = currentPage === 'market' || currentPage === 'presale-detail';
      
      // On desktop (>= 768px)
      if (width >= 768) {
        if (manuallyExpanded) {
          setIsSidebarCollapsed(false);
        } else if (isDetailPage) {
          setIsSidebarCollapsed(true);
        } else {
          setIsSidebarCollapsed(width < 1366);
        }
      } else {
        // Mobile: never collapsed (uses overlay instead)
        setIsSidebarCollapsed(false);
        setManuallyExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, manuallyExpanded]);

  // Scroll to top when navigating to detail page
  useEffect(() => {
    if (currentPage === 'market' && mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentPage === 'presale' && presaleScrollRef.current) {
      presaleScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentPage === 'presale-detail' && presaleDetailScrollRef.current) {
      presaleDetailScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, selectedMarket, selectedPresaleMarket]);

  // Listen for browser theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    // Add listener for theme changes
    mediaQuery.addEventListener('change', handleThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Memoized callbacks for better performance
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    // On mobile, toggle the sidebar overlay
    if (window.innerWidth < 768) {
      setIsSidebarOpen(prev => !prev);
    } else {
      // On desktop, toggle the collapsed state
      setIsSidebarCollapsed(prev => !prev);
      setManuallyExpanded(prev => !prev);
    }
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const previousPageRef = useRef<string>('home');

  const handleMarketSelect = useCallback((market: Market) => {
    startTransition(() => {
      previousPageRef.current = currentPage;
      setSelectedMarket(market);
      setCurrentPage('market');
    });
  }, [currentPage]);

  const handleBackToHome = useCallback(() => {
    startTransition(() => {
      setSelectedMarket(null);
      setCurrentPage(previousPageRef.current || 'home');
      previousPageRef.current = 'home';
    });
  }, []);

  const handleNavigate = useCallback((page: string) => {
    startTransition(() => {
      setCurrentPage(page);
      setSelectedMarket(null);
    });
  }, []);
  
  const handleLogoClick = useCallback(() => {
    startTransition(() => {
      setCurrentPage('home');
      setSelectedMarket(null);
    });
  }, []);

  const handleMarketClick = useCallback((market: Market) => {
    startTransition(() => {
      setSelectedMarket(market);
      setPreviousPage(currentPage); // Track where we came from
      setCurrentPage('market');
    });
  }, [currentPage]);

  const handlePresaleMarketClick = useCallback((presaleMarket: PresaleMarket) => {
    startTransition(() => {
      setSelectedPresaleMarket(presaleMarket);
      setPreviousPage(currentPage); // Track where we came from
      setCurrentPage('presale-detail');
    });
  }, [currentPage]);

  const handleBackToPresale = useCallback(() => {
    startTransition(() => {
      setSelectedPresaleMarket(null);
      setCurrentPage(previousPage); // Go back to where user came from
    });
  }, [previousPage]);

  // Handle navigation from referrals to home (after successful login)
  const handleReferralsComplete = useCallback(() => {
    localStorage.setItem('hasAuthenticated', 'true');
    startTransition(() => {
      setCurrentPage('home');
    });
  }, []);

  // Handle category selection in private markets
  const handleCategorySelect = useCallback((categorySlug: string) => {
    startTransition(() => {
      setSelectedCategory(categorySlug);
      if (!categorySlug) {
        setCurrentPage('private-markets');
      } else {
        setCurrentPage('private-category');
      }
    });
  }, []);

  // Handle back to private markets from category view
  const handleBackToPrivateMarkets = useCallback(() => {
    startTransition(() => {
      setSelectedCategory(null);
      setCurrentPage('private-markets');
    });
  }, []);

  // Referrals page is standalone - no sidebar, no header
  if (currentPage === 'referrals') {
    return (
      <BalanceProvider>
        <SavedMarketsProvider>
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen" style={{ background: '#030308' }}>
              <p style={{ 
                fontSize: 'var(--text-sm)', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-medium)',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                Loading...
              </p>
            </div>
          }>
            <Referrals onNavigateToHome={handleReferralsComplete} />
          </Suspense>
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: 'var(--card-normal)',
                border: '1px solid var(--black-a2)',
                borderRadius: 'var(--radius-card)',
                color: 'var(--lum-12)',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                boxShadow: 'var(--shadow-2)',
                padding: 'var(--gap--1rem)',
              },
              error: {
                style: {
                  background: 'var(--card-normal)',
                  border: '1px solid var(--red-9)',
                  color: 'var(--lum-12)',
                },
                iconTheme: {
                  primary: 'var(--red-9)',
                  secondary: 'var(--card-normal)',
                },
              },
              success: {
                style: {
                  background: 'var(--card-normal)',
                  border: '1px solid var(--green-9)',
                  color: 'var(--lum-12)',
                },
                iconTheme: {
                  primary: 'var(--green-9)',
                  secondary: 'var(--card-normal)',
                },
              },
            }}
          />
        </SavedMarketsProvider>
      </BalanceProvider>
    );
  }

  return (
    <BalanceProvider>
      <SavedMarketsProvider>
        <div 
          className="flex flex-col h-screen" 
          style={{ 
            background: 'radial-gradient(80% 48% at 0 6%, var(--blue-2) 0, var(--mauve-1) 100%), linear-gradient(180deg, var(--lum-03) -.44%, var(--lum-02) 56.31%), var(--lum-01)'
          }}
        >
          {/* Header - Full Width */}
          <Header 
            onToggleSidebar={toggleSidebar} 
            markets={allMarkets}
            onMarketSelect={handleMarketSelect}
            onLogoClick={handleLogoClick}
          />

          {/* Content Area with Sidebar */}
          <div className="flex-1 flex min-h-0">
            {/* Sidebar - Desktop: always visible, Mobile: overlay */}
            <Sidebar 
              onToggleTheme={toggleTheme} 
              isDarkMode={isDarkMode} 
              isOpen={isSidebarOpen}
              onClose={closeSidebar}
              onNavigate={handleNavigate}
              currentPage={currentPage}
              isDetailPage={currentPage === 'market'}
              isCollapsed={isSidebarCollapsed}
            />

            {/* Main Content Area */}
            <div 
              className="flex-1 flex flex-col min-w-0 content-area-scroll md:mt-[var(--gap--0-75rem)] md:mx-[var(--gap--0-5rem)] md:mb-[var(--gap--0-5rem)] border-0 rounded-0 shadow-none"
              style={{
                // Only apply background gradient if NOT on portfolio, presale, presale-detail, home, sports, watchlist, or market pages
                ...(currentPage !== 'portfolio' && currentPage !== 'presale' && currentPage !== 'presale-detail' && currentPage !== 'home' && currentPage !== 'sports' && currentPage !== 'watchlist' && currentPage !== 'market' && currentPage !== 'private-markets' && currentPage !== 'private-category' && {
                  background: 'radial-gradient(240% 160% at 180% 100%,hsl(from var(--lum-02) h s l) 0,hsl(from var(--sage-2) h s l) 56.68%,hsl(from var(--lum-02) h s l) 100%),hsl(from var(--mauve-1) h s l)',
                }),
                // Apply border, border-radius, and shadow for all pages EXCEPT portfolio, presale, presale-detail, home, sports, watchlist, and market
                ...(currentPage !== 'portfolio' && currentPage !== 'presale' && currentPage !== 'presale-detail' && currentPage !== 'home' && currentPage !== 'sports' && currentPage !== 'watchlist' && currentPage !== 'market' && currentPage !== 'private-markets' && currentPage !== 'private-category' && {
                  border: '1px solid var(--black-a1)',
                  borderRadius: 'var(--border-radius--1rem)',
                  boxShadow: 'var(--shadow-1)',
                }),
                // Smooth transition for background changes
                transition: 'background 0.3s ease, border 0.3s ease, border-radius 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Scrollable Content Container with Suspense for all lazy loaded components */}
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--muted-foreground)'
                  }}>
                    Loading...
                  </p>
                </div>
              }>
                {currentPage === 'design-system' ? (
                  <DesignSystemPage />
                ) : currentPage === 'sports' ? (
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <Sports />
                  </main>
                ) : currentPage === 'watchlist' ? (
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="w-full max-w-[1280px] mx-auto px-[var(--gap--1rem)] sm:px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: 'var(--gap--0-5rem)' }}>
                      <Watchlist onMarketSelect={handleMarketSelect} />
                    </div>
                  </main>
                ) : currentPage === 'private-markets' ? (
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="w-full max-w-[1280px] mx-auto px-[var(--gap--1rem)] sm:px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: 'var(--gap--0-5rem)' }}>
                      <PrivateMarkets onMarketSelect={handleMarketSelect} onCategorySelect={handleCategorySelect} />
                    </div>
                  </main>
                ) : currentPage === 'private-category' && selectedCategory ? (
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="w-full max-w-[1280px] mx-auto px-[var(--gap--1rem)] sm:px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: 'var(--gap--0-5rem)' }}>
                      <PrivateCategoryView 
                        categorySlug={selectedCategory} 
                        onMarketSelect={handleMarketSelect} 
                        onBack={handleBackToPrivateMarkets}
                      />
                    </div>
                  </main>
                ) : currentPage === 'portfolio' ? (
                  <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div style={{ paddingTop: '48px' }}>
                      <PortfolioPage />
                    </div>
                  </main>
                ) : currentPage === 'presale' ? (
                  <main 
                    ref={presaleScrollRef}
                    className="flex-1 overflow-y-auto overflow-x-hidden"
                    style={{
                      opacity: 0,
                      animation: 'pageTransitionIn 0.4s ease-out forwards',
                    }}
                  >
                    <div style={{ paddingTop: '48px' }}>
                      <PresalePage 
                        markets={allMarkets} 
                        onMarketSelect={handleMarketClick} 
                        onPresaleMarketSelect={handlePresaleMarketClick} 
                        activeTab={presaleActiveTab}
                        setActiveTab={setPresaleActiveTab}
                      />
                    </div>
                  </main>
                ) : currentPage === 'presale-detail' && selectedPresaleMarket ? (
                  <main 
                    ref={presaleDetailScrollRef}
                    className="flex-1 overflow-y-auto overflow-x-hidden"
                    style={{
                      opacity: 0,
                      animation: 'pageTransitionIn 0.4s ease-out forwards',
                    }}
                  >
                    <div style={{ paddingTop: '48px' }}>
                      <PresaleDetailWrapper market={selectedPresaleMarket} onBack={handleBackToPresale} isDarkMode={isDarkMode} />
                    </div>
                  </main>
                ) : (
                  <main 
                    ref={mainScrollRef}
                    className="flex-1 overflow-y-auto overflow-x-hidden"
                    style={{
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  >
                    <div className="w-full max-w-[1280px] mx-auto px-[var(--gap--1rem)] sm:px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: 'var(--gap--0-5rem)' }}>
                      {currentPage === 'market' && selectedMarket ? (
                        <MarketDetails 
                          market={selectedMarket} 
                          onBack={handleBackToHome} 
                        />
                      ) : (
                        <HomePage onMarketSelect={handleMarketSelect} />
                      )}
                    </div>
                  </main>
                )}
              </Suspense>
            </div>
          </div>
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--card-normal)',
              border: '1px solid var(--black-a2)',
              borderRadius: 'var(--radius-card)',
              color: 'var(--lum-12)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              boxShadow: 'var(--shadow-2)',
              padding: 'var(--gap--1rem)',
            },
            error: {
              style: {
                background: 'var(--card-normal)',
                border: '1px solid var(--red-9)',
                color: 'var(--lum-12)',
              },
              iconTheme: {
                primary: 'var(--red-9)',
                secondary: 'var(--card-normal)',
              },
            },
            success: {
              style: {
                background: 'var(--card-normal)',
                border: '1px solid var(--green-9)',
                color: 'var(--lum-12)',
              },
              iconTheme: {
                primary: 'var(--green-9)',
                secondary: 'var(--card-normal)',
              },
            },
          }}
        />
      </SavedMarketsProvider>
    </BalanceProvider>
  );
}
import { memo, useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { MarketCard } from './MarketCard';
import { privateMarkets } from '../data/private-markets';
import type { Market } from '../data/markets';
import { PrivateMarketsIcon } from './icons/PrivateMarketsIcon';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CategoryCard } from './private-markets/CategoryCard';
import { ChevronRight } from 'lucide-react';
import {
  getAccessedMarketIds,
  addAccessedMarketId,
  isMasterStored,
  setMasterStored,
  getSessionMasterUnlocked,
  setSessionMasterUnlocked,
} from '../utils/private-markets-access';

const PRIVATE_CODE = 'lumberworks2026';

// Category access codes -> category slug
const categoryCodesMap = new Map<string, string>([
  ['lumberworks-pass', 'lumberworks-private'],
  ['elite-pass', 'lumberworks-elite'],
  ['rwa-pass', 'rwa-signal'],
  ['capitol-pass', 'capitol-insider'],
  ['crypto-signal', 'crypto-signal'],
]);

// Build a lookup map from accessCode -> market
const codeToMarketMap = new Map<string, Market>(
  privateMarkets.filter(m => m.accessCode).map(m => [m.accessCode!.toLowerCase(), m])
);

// Build a lookup map from market id -> market
const idToMarketMap = new Map<string, Market>(
  privateMarkets.map(m => [m.id, m])
);

interface PrivateMarketsProps {
  onMarketSelect?: (market: Market) => void;
  onCategorySelect?: (categorySlug: string) => void;
}

export const PrivateMarkets = memo(function PrivateMarkets({ onMarketSelect, onCategorySelect }: PrivateMarketsProps) {
  const privateMarketsList = useMemo(() => privateMarkets, []);

  // Master unlock: shows ALL markets
  const [masterUnlocked, setMasterUnlocked] = useState(() => getSessionMasterUnlocked() || isMasterStored());
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [fadeIn, setFadeIn] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mobile dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMobileCategory, setSelectedMobileCategory] = useState<string>('');

  // History of individually accessed markets
  const [historyMarkets, setHistoryMarkets] = useState<Market[]>(() => {
    const ids = getAccessedMarketIds();
    return ids.map(id => idToMarketMap.get(id)).filter(Boolean) as Market[];
  });

  const hasHistory = historyMarkets.length > 0;

  // Calculate category counts from visible markets (either history or all markets)
  const visibleMarkets = masterUnlocked ? privateMarketsList : historyMarkets;
  const showGate = !masterUnlocked && !hasHistory;

  const categories = useMemo(() => {
    // Show categories if we have any visible markets
    if (visibleMarkets.length === 0) return [];

    const categoryMap = new Map<string, { name: string; slug: string; count: number }>();

    visibleMarkets.forEach((market) => {
      const { name, slug } = market.category;
      const existing = categoryMap.get(slug);
      if (existing) {
        existing.count++;
      } else {
        categoryMap.set(slug, { name, slug, count: 1 });
      }
    });

    return Array.from(categoryMap.values()).sort((a, b) => b.count - a.count);
  }, [visibleMarkets]);

  // Fade in on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setFadeIn(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleSubmit = useCallback(() => {
    const trimmed = code.trim().toLowerCase();

    // Check if it's a market-specific code
    const matchedMarket = codeToMarketMap.get(trimmed);
    if (matchedMarket) {
      setError('');
      setCode('');
      // Save to history in localStorage
      addAccessedMarketId(matchedMarket.id);
      setHistoryMarkets(prev => {
        if (prev.some(m => m.id === matchedMarket.id)) return prev;
        return [matchedMarket, ...prev];
      });
      // Navigate directly to market detail
      if (onMarketSelect) {
        onMarketSelect(matchedMarket);
      }
      return;
    }

    // Check if it's a category code
    const matchedCategorySlug = categoryCodesMap.get(trimmed);
    if (matchedCategorySlug) {
      setError('');
      setCode('');

      const categoryMarkets = privateMarkets.filter(m => m.category.slug === matchedCategorySlug);

      if (categoryMarkets.length > 0) {
        categoryMarkets.forEach(m => addAccessedMarketId(m.id));
        setHistoryMarkets(prev => {
          const newMarkets = categoryMarkets.filter(cm => !prev.some(m => m.id === cm.id));
          return [...newMarkets, ...prev];
        });
      }
      return;
    }

    // Check master code
    if (trimmed === PRIVATE_CODE) {
      setError('');
      setCode('');
      setTransitioning(true);
      setFadeIn(false);
      setTimeout(() => {
        setMasterUnlocked(true);
        setSessionMasterUnlocked(true);
        setMasterStored();
        requestAnimationFrame(() => setFadeIn(true));
      }, 500);
    } else {
      setError('Invalid code. Please try again.');
      if (inputRef.current) {
        inputRef.current.style.animation = 'none';
        inputRef.current.offsetHeight; // reflow
        inputRef.current.style.animation = 'shake 0.4s ease';
      }
    }
  }, [code, onMarketSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  }, [handleSubmit]);

  // Gate / code entry screen (no history at all)
  if (showGate) {
    return (
      <div
        className="flex flex-col items-center justify-center w-full"
        style={{
          minHeight: '70vh',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {/* Banner image centered */}
        <ImageWithFallback
          src="https://raw.githubusercontent.com/chonshaman/riv_store/303f2ed7f576f788cda27e3f236c014f47c876bb/haluuimg/banner/gold.webp"
          alt="Private Markets Gold Banner"
          style={{
            height: '200px',
            objectFit: 'contain',
            borderRadius: 'var(--border-radius--0-5rem)',
            marginBottom: 'var(--gap--2rem)',
          }}
        />

        {/* Icon + Title + Caption centered */}
        <div
          className="flex flex-col items-center"
          style={{ gap: 'var(--gap--0-5rem)', marginBottom: 'var(--gap--2rem)' }}
        >
          <div
            className="flex items-center"
            style={{ gap: '10px' }}
          >
            <div
              className="flex items-center justify-center shrink-0"
              style={{ width: '40px', height: '40px' }}
            >
              <PrivateMarketsIcon className="w-5 h-5" style={{ transform: 'scale(1.6)' }} />
            </div>
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '40px',
                letterSpacing: '-0.225px',
                color: 'var(--card-foreground)',
                margin: 0,
                textAlign: 'center',
              }}
            >
              Private Markets
            </h1>
          </div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: '24px',
              color: 'var(--muted-foreground)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            Exclusive invite-only markets with limited access and higher stakes
          </p>
        </div>

        {/* Code input + Continue button */}
        <div
          className="flex flex-col items-center"
          style={{ gap: 'var(--gap--1rem)', width: '100%', maxWidth: '360px' }}
        >
          <input
            ref={inputRef}
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(''); }}
            onKeyDown={handleKeyDown}
            placeholder="Enter private code"
            style={{
              width: '100%',
              height: '44px',
              padding: '0 var(--gap--1rem)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-s)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--card-foreground)',
              background: 'var(--lum-01)',
              border: error ? '1px solid var(--red-9)' : '1px solid var(--black-a2)',
              borderRadius: 'var(--border-radius--0-5rem)',
              outline: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              boxShadow: 'var(--shadow-1)',
            }}
            onFocus={(e) => {
              if (!error) {
                e.currentTarget.style.borderColor = 'var(--gold-9)';
                e.currentTarget.style.boxShadow = '0 0 0 3px var(--gold-3)';
              }
            }}
            onBlur={(e) => {
              if (!error) {
                e.currentTarget.style.borderColor = 'var(--black-a2)';
                e.currentTarget.style.boxShadow = 'var(--shadow-1)';
              }
            }}
          />

          {error && (
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--red-9)',
                margin: 0,
              }}
            >
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              height: '44px',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-s)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--lum-01)',
              background: 'var(--gold-9)',
              border: 'none',
              borderRadius: 'var(--border-radius--0-5rem)',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-10)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--gold-9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
          >
            Continue
          </button>
        </div>

        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
          }
        `}</style>
      </div>
    );
  }

  // Unlocked view: show header + code input + market cards
  return (
    <div
      className="flex flex-col w-full max-w-[1296px] mx-auto"
      style={{
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
      }}
    >
      {/* Header Section */}
      <div
        className="flex items-end justify-between w-full overflow-hidden"
        style={{
          paddingTop: 'var(--gap--2rem)',
          paddingBottom: 'var(--gap--2rem)',
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <div
          className="flex flex-col shrink-0"
          style={{ gap: '10px' }}
        >
          {/* Title with Icon */}
          <div
            className="flex items-center"
            style={{ gap: '10px' }}
          >
            <div
              className="flex items-center justify-center shrink-0"
              style={{ width: '40px', height: '40px' }}
            >
              <PrivateMarketsIcon className="w-5 h-5" style={{ transform: 'scale(1.6)' }} />
            </div>
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '40px',
                letterSpacing: '-0.225px',
                color: 'var(--card-foreground)',
                margin: 0,
              }}
            >
              Private Markets
            </h1>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: '24px',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            {masterUnlocked
              ? 'Exclusive invite-only markets with limited access and higher stakes'
              : `You have access to ${visibleMarkets.length} market${visibleMarkets.length !== 1 ? 's' : ''} — enter another code to unlock more`}
          </p>
        </div>

        {/* Gold banner image */}
        <ImageWithFallback
          src="https://raw.githubusercontent.com/chonshaman/riv_store/303f2ed7f576f788cda27e3f236c014f47c876bb/haluuimg/banner/gold.webp"
          alt="Private Markets Gold Banner"
          style={{
            height: '200px',
            objectFit: 'contain',
            borderRadius: 'var(--border-radius--0-5rem)',
            flexShrink: 0,
            marginRight: '64px',
          }}
          className="hidden sm:block"
        />
      </div>

      {/* Category Cards Section - Separate from grid */}
      {categories.length > 0 && (
        <div
          style={{
            paddingBottom: 'var(--gap--2rem)',
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
            overflow: 'visible',
            position: 'relative',
            zIndex: isDropdownOpen ? 50 : 1,
          }}
        >
          {/* Section Title */}
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-m)',
              fontWeight: 'var(--font-weight-semi-bold)',
              lineHeight: '24px',
              color: 'var(--card-foreground)',
              margin: 0,
              marginBottom: 'calc(var(--gap--1rem) * 0.3)',
            }}
          >
            Categories
          </h2>

          {/* Mobile Category Select */}
          <div className="block sm:hidden mb-4 relative z-50">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full h-[52px] px-4 rounded-[var(--radius-xl)] shadow-[var(--shadow-1)] transition-colors hover:bg-[var(--lum-02)]"
              style={{
                background: 'var(--card-normal)',
                border: '1px solid var(--black-a1)',
              }}
            >
              <span className="font-sans text-[var(--text-s)] font-medium text-[var(--card-foreground)] truncate pr-4">
                {selectedMobileCategory
                  ? categories.find(c => c.slug === selectedMobileCategory)?.name || 'All Private Markets'
                  : 'All Private Markets'}
              </span>
              <ChevronRight
                className="w-5 h-5 text-[var(--gold-9)] shrink-0 transition-transform duration-200"
                style={{ transform: isDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-2 py-2 rounded-[var(--radius-xl)] shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                style={{
                  background: 'var(--card-normal)',
                  border: '1px solid var(--black-a1)',
                }}
              >
                <button
                  className="flex items-center justify-between w-full px-4 py-3 hover:bg-[var(--lum-02)] transition-colors text-left"
                  onClick={() => {
                    setSelectedMobileCategory('');
                    setIsDropdownOpen(false);
                    if (onCategorySelect) onCategorySelect('');
                  }}
                >
                  <span className="font-sans text-[var(--text-s)] font-medium text-[var(--card-foreground)]">
                    All Private Markets
                  </span>
                </button>
                {categories.map((category) => (
                  <button
                    key={`mobile-cat-${category.slug}`}
                    className="flex items-center justify-between w-full px-4 py-3 hover:bg-[var(--lum-02)] transition-colors text-left"
                    onClick={() => {
                      setSelectedMobileCategory(category.slug);
                      setIsDropdownOpen(false);
                      if (onCategorySelect) onCategorySelect(category.slug);
                    }}
                  >
                    <span className="font-sans text-[var(--text-s)] font-medium text-[var(--card-foreground)] pr-4">
                      {category.name}
                    </span>
                    <span className="font-sans text-[var(--text-xs)] font-medium text-[var(--gold-9)] shrink-0 px-2 py-0.5 rounded-full bg-[var(--gold-3)] border border-[var(--gold-6)]">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Horizontal Scrollable Category Cards (Desktop) */}
          <div
            className="hidden sm:flex flex-wrap"
            style={{
              gap: 'var(--gap--1rem)',
              paddingBottom: 'var(--gap--0-5rem)',
            }}
          >
            {categories.map((category, index) => (
              <div
                key={`category-${category.slug}`}
                style={{
                  opacity: fadeIn ? 1 : 0,
                  transform: fadeIn ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.5s ease ${0.15 + index * 0.08}s, transform 0.5s ease ${0.15 + index * 0.08}s`,
                  flexShrink: 0,
                }}
              >
                <CategoryCard
                  {...category}
                  onClick={() => onCategorySelect && onCategorySelect(category.slug)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Market Cards Grid */}
      <div
        className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          gap: 'var(--gap--1-5rem)',
          paddingBottom: 'var(--gap--2rem)',
        }}
      >
        {/* Access Code Card - always visible in grid view */}
        <div
          style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s',
            height: '100%',
          }}
        >
          <div
            className="rounded-[var(--radius-xl)] overflow-hidden flex flex-col"
            style={{
              background: 'var(--card-normal)',
              border: '1px solid var(--gold-6)',
              boxShadow: 'var(--shadow-1)',
              height: '100%',
            }}
          >
            <div className="p-3 sm:p-[16px] flex flex-col flex-1 justify-between">
              <div>
                {/* Category badge */}
                <div className="content-stretch flex gap-[8px] sm:gap-[10px] items-center mb-[10px] sm:mb-[12px]">
                  <div
                    className="flex items-center justify-center px-[10px] sm:px-[12px] py-[3px] sm:py-[4px] rounded-[var(--radius-input)] shrink-0"
                    style={{ background: 'var(--gold-3)' }}
                  >
                    <p
                      className="font-sans text-nowrap whitespace-pre"
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: '16px',
                        color: 'var(--gold-11)',
                      }}
                    >
                      Access Code
                    </p>
                  </div>
                </div>

                {/* Title */}
                <div className="content-stretch flex items-start justify-between mb-[10px] sm:mb-[12px]">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-[56px] sm:min-h-[60px] min-w-px">
                    <p
                      className="font-sans w-full line-clamp-3"
                      style={{
                        fontSize: 'var(--text-m)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: '20px',
                        color: 'var(--black-a11)',
                      }}
                    >
                      {masterUnlocked
                        ? 'All markets unlocked. You can still enter individual codes here.'
                        : 'Enter a private access code to unlock exclusive markets'}
                    </p>
                  </div>
                  <div className="relative self-stretch shrink-0 w-[56px] sm:w-[64px]">
                    <div
                      className="absolute h-[48px] sm:h-[56px] left-[16px] sm:left-[20px] rounded-[4px] top-0 w-[40px] sm:w-[44px] overflow-hidden flex items-center justify-center"
                      style={{ background: 'var(--gold-3)' }}
                    >
                      <PrivateMarketsIcon className="w-5 h-5" style={{ opacity: 0.7 }} />
                    </div>
                  </div>
                </div>

                {/* Input + Button */}
                <div className="flex flex-col mb-[10px] sm:mb-[12px]" style={{ gap: 'var(--gap--0-5rem)' }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={code}
                    onChange={(e) => { setCode(e.target.value); setError(''); }}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter access code"
                    style={{
                      width: '100%',
                      height: '36px',
                      padding: '0 var(--gap--0-75rem)',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--card-foreground)',
                      background: 'var(--lum-01)',
                      border: error ? '1px solid var(--red-9)' : '1px solid var(--black-a2)',
                      borderRadius: 'var(--radius-input)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      boxShadow: 'var(--shadow-4)',
                    }}
                    onFocus={(e) => {
                      if (!error) {
                        e.currentTarget.style.borderColor = 'var(--gold-9)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px var(--gold-3)';
                      }
                    }}
                    onBlur={(e) => {
                      if (!error) {
                        e.currentTarget.style.borderColor = 'var(--black-a2)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-4)';
                      }
                    }}
                  />
                  {error && (
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-weight-normal)',
                        color: 'var(--red-9)',
                        margin: 0,
                        lineHeight: '16px',
                      }}
                    >
                      {error}
                    </p>
                  )}
                  <button
                    onClick={handleSubmit}
                    style={{
                      width: '100%',
                      height: '36px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--text-s)',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      color: 'var(--lum-01)',
                      background: 'var(--gold-9)',
                      border: 'none',
                      borderRadius: 'var(--radius-input)',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease, transform 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--gold-10)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--gold-9)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = 'scale(0.98)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                  >
                    Unlock
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between relative min-h-[20px]">
                <p
                  className="font-sans text-nowrap whitespace-pre"
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: '20px',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Invite only
                </p>
                <p
                  className="font-sans text-nowrap whitespace-pre"
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: '20px',
                    color: 'var(--gold-9)',
                  }}
                >
                  Private
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Cards */}
        {visibleMarkets.map((market, index) => (
          <div
            key={`private-${market.id}`}
            style={{
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.5s ease ${0.15 + index * 0.08}s, transform 0.5s ease ${0.15 + index * 0.08}s`,
              height: '100%',
            }}
          >
            <div style={{ position: 'relative', height: '100%' }}>
              <MarketCard
                {...market}
                onClick={() => onMarketSelect && onMarketSelect(market)}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
});
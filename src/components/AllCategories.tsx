import { useState, useMemo } from 'react';
import { LayoutGrid, Bitcoin, TrendingUp, DollarSign, FileText, Trophy, Smile, Gamepad2, Zap, Search } from 'lucide-react';
import { MarketCard } from './MarketCard';
import { MixedMarketGrid } from './MixedMarketGrid';
import { CategoryTab } from './navigation/CategoryTab';
import { FilterButton } from './ui/FilterButton';
import type { Market } from '../data/markets';
import type { CategoryTabItem } from './navigation/CategoryTab';
import { getMatchesForCategory } from '../data/matches';

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface AllCategoriesProps {
  markets: Market[];
  onMarketClick?: (market: Market) => void;
}

const categories: Category[] = [
  { id: 'all', name: 'All', icon: LayoutGrid },
  { id: 'crypto', name: 'Crypto', icon: Bitcoin },
  { id: 'trending', name: 'Trending', icon: TrendingUp },
  { id: 'economy', name: 'Economy', icon: DollarSign },
  { id: 'politics', name: 'Politics', icon: FileText },
  { id: 'sports', name: 'Sports', icon: Trophy },
  { id: 'entertainment', name: 'Entertainment', icon: Smile },
  { id: 'e-sports', name: 'E-Sports', icon: Gamepad2 },
  { id: 'technology', name: 'Tech', icon: Zap },
];

const filterOptions = ['All', 'Ending Soon', 'Volume'];

export function AllCategories({ markets, onMarketClick }: AllCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  const filteredMarkets = useMemo(() => {
    let result = markets;

    // Filter by category
    if (activeCategory === 'all') {
      result = markets;
    } else if (activeCategory === 'trending') {
      result = markets.filter(m => m.trending);
    } else {
      result = markets.filter(m => 
        m.category.slug.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      result = result.filter(m =>
        m.question.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by additional filters
    if (activeFilter === 'Ending Soon') {
      result = result.sort((a, b) => a.endDate.getTime() - b.endDate.getTime());
    } else if (activeFilter === 'Volume') {
      result = result.sort((a, b) => b.stats.volume - a.stats.volume);
    }

    return result;
  }, [markets, activeCategory, searchQuery, activeFilter]);

  // Get matches for the active category
  const categoryMatches = useMemo(() => {
    return getMatchesForCategory(activeCategory);
  }, [activeCategory]);

  return (
    <div 
      className="w-full"
      style={{
        paddingTop: 'var(--gap--3rem)',
        paddingBottom: 'var(--gap--3rem)',
      }}
    >
      <div className="w-full">
        {/* Section Header */}
        <div 
          className="flex items-center mb-6"
          style={{
            gap: 'var(--gap--0-5rem)',
          }}
        >
          <div 
            className="rounded-full"
            style={{ 
              width: 'var(--gap--0-25rem)',
              height: 'var(--gap--1-5rem)',
              backgroundColor: 'var(--primary)' 
            }}
          />
          <h2 
            className="font-sans text-card-foreground"
            style={{ 
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: '1.2',
            }}
          >
            All Categories
          </h2>
        </div>

        {/* Category Tabs */}
        <CategoryTab 
          items={categories as CategoryTabItem[]} 
          activeId={activeCategory} 
          onTabChange={setActiveCategory} 
        />

        {/* Line Separator */}
        <div 
          className="w-full mb-6 mt-6"
          style={{
            height: '1px',
            backgroundColor: 'var(--black-a2)',
          }}
        />

        {/* Search and Filter Row */}
        <div 
          className="flex items-center justify-between flex-wrap mb-8"
          style={{
            gap: 'var(--gap--1rem)',
          }}
        >
          {/* Search Box */}
          <div 
            className="flex items-center cursor-text transition-all duration-200 ease-out"
            onMouseEnter={() => setIsSearchHovered(true)}
            onMouseLeave={() => setIsSearchHovered(false)}
            style={{
              width: '480px',
              gap: 'var(--gap--0-5rem)',
              backgroundColor: isSearchFocused || isSearchHovered ? 'var(--card-hover)' : 'var(--card-normal)',
              border: isSearchFocused ? '1px solid var(--primary-button-bg)' : isSearchHovered ? '1px solid var(--muted-foreground)' : '1px solid var(--black-a2)',
              borderRadius: 'var(--radius-card)',
              paddingTop: 'var(--gap--0-5rem)',
              paddingBottom: 'var(--gap--0-5rem)',
              paddingLeft: isSearchFocused ? 'var(--gap--1rem)' : isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
              paddingRight: isSearchFocused ? 'var(--gap--1rem)' : isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
              boxShadow: isSearchFocused ? '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)' : isSearchHovered ? '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)' : 'none',
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search markets..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>

          {/* Filter Buttons */}
          <div 
            className="flex items-center"
            style={{
              gap: 'var(--gap--0-5rem)',
            }}
          >
            {filterOptions.map((option) => {
              const isActive = activeFilter === option;
              return (
                <FilterButton
                  key={option}
                  active={isActive}
                  onClick={() => setActiveFilter(option)}
                >
                  {option}
                </FilterButton>
              );
            })}
          </div>
        </div>

        {/* Markets Grid */}
        <MixedMarketGrid
          markets={filteredMarkets}
          matches={categoryMatches}
          onMarketClick={onMarketClick}
        />

        {/* Empty State */}
        {filteredMarkets.length === 0 && categoryMatches.length === 0 && (
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              paddingTop: 'var(--gap--3rem)',
              paddingBottom: 'var(--gap--3rem)',
            }}
          >
            <p 
              className="font-sans text-muted-foreground"
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              No markets found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
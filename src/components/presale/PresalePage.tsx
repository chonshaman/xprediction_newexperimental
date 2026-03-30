import React, { useState } from 'react';
import { Rocket, ChevronDown } from 'lucide-react';
import { StakingCard } from '../portfolio/StakingCard';
import { PresaleMarketCard } from './PresaleMarketCard';
import { CreateMarketCard } from './CreateMarketCard';
import { StatisticsCard } from './StatisticsCard';
import { PayoutHistoryCard } from './PayoutHistoryCard';
import { MasterTab } from '../market-details/MasterTab';
import { PresaleSearchBox } from './PresaleSearchBox';
import { FilterButton } from '../ui/FilterButton';
import type { Market } from '../../data/markets';
import { presaleMarkets } from '../../data/presaleMarketsData';
import type { PresaleMarket } from '../../data/presaleMarketsData';

interface PresalePageProps {
  markets?: Market[];
  onMarketSelect?: (market: Market) => void;
  onPresaleMarketSelect?: (market: PresaleMarket) => void;
  activeTab?: 'explore' | 'my-markets';
  setActiveTab?: (tab: 'explore' | 'my-markets') => void;
}

export function PresalePage({ markets = [], onMarketSelect, onPresaleMarketSelect, activeTab: externalActiveTab, setActiveTab: externalSetActiveTab }: PresalePageProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<'explore' | 'my-markets'>('explore');
  
  // Use external state if provided, otherwise use internal state
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  const setActiveTab = externalSetActiveTab || setInternalActiveTab;
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [myMarketsFilter, setMyMarketsFilter] = useState<'all' | 'my-created' | 'my-invested'>('all');
  
  const categories = ['All', 'Politics', 'Sport', 'Crypto', 'Tech', 'Economy'];
  const statusOptions = [
    'All',
    'Presale Active',
    'Presale Unsuccessful',
    'Submission Rejected',
    'Market Live',
    'Payout in Progress',
    'Payout Completed'
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-status-dropdown]')) {
        setIsStatusDropdownOpen(false);
      }
    };

    if (isStatusDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isStatusDropdownOpen]);

  // Separate markets into created and invested for My Markets tab
  const myCreatedMarkets = presaleMarkets.filter(m => m.viewerRole === 'creator');
  const myInvestedMarkets = presaleMarkets.filter(m => m.viewerRole === 'investor-joined');

  // Filter markets based on active tab and filters
  const getDisplayMarkets = () => {
    if (activeTab === 'explore') {
      // Explore tab - filter by search, status, and category
      return presaleMarkets.filter((market) => {
        const matchesSearch = searchQuery === '' || 
          market.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          market.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          market.createdBy.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = selectedStatus === 'All' || 
          (selectedStatus === 'Presale Active' && market.status === 'Presale Live') ||
          market.status === selectedStatus;

        const matchesCategory = selectedCategory === 'All' || market.category === selectedCategory;

        return matchesSearch && matchesStatus && matchesCategory;
      });
    } else {
      // My Markets tab - filter by my markets filter AND search
      let markets: PresaleMarket[] = [];
      if (myMarketsFilter === 'my-created') {
        markets = myCreatedMarkets;
      } else if (myMarketsFilter === 'my-invested') {
        markets = myInvestedMarkets;
      } else {
        markets = [...myCreatedMarkets, ...myInvestedMarkets];
      }
      
      // Apply search filter to My Markets
      return markets.filter((market) => {
        const matchesSearch = searchQuery === '' || 
          market.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          market.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          market.createdBy.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesSearch;
      });
    }
  };

  const displayMarkets = getDisplayMarkets();
  
  // For My Markets tab, separate filtered results into created and invested
  const filteredCreatedMarkets = activeTab === 'my-markets' 
    ? displayMarkets.filter(m => m.viewerRole === 'creator')
    : [];
  const filteredInvestedMarkets = activeTab === 'my-markets'
    ? displayMarkets.filter(m => m.viewerRole === 'investor-joined')
    : [];

  const handleMarketClick = (market: Market) => {
    if (onMarketSelect) {
      onMarketSelect(market);
    }
  };

  const handlePresaleMarketClick = (market: PresaleMarket) => {
    if (onPresaleMarketSelect) {
      onPresaleMarketSelect(market);
    }
  };

  return (
    <div 
      className="presale-page-container"
      style={{
        display: 'flex',
        gap: 'var(--gap--1-5rem)',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--gap--1-5rem)',
        alignItems: 'flex-start',
      }}
    >
      {/* Left Column - Main Content */}
      <div 
        className="presale-left-column"
        style={{
          flex: '1 1 0',
          minWidth: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--gap--1rem)',
        }}
      >
        {/* Header */}
        <div 
          className="presale-header"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--gap--1rem)',
            paddingBottom: 'var(--gap--1rem)',
            borderBottom: '1px solid var(--black-a1)',
          }}
        >
          {/* Title Section */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--gap--0-75rem)',
            }}
          >
            <div 
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Rocket 
                style={{ 
                  width: '28px', 
                  height: '28px',
                  color: 'var(--card-foreground)',
                }} 
              />
            </div>
            <h1 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-semi-bold)',
                fontSize: 'var(--text-3xl)',
                lineHeight: '40px',
                letterSpacing: '-0.225px',
                color: 'var(--card-foreground)',
                margin: 0,
              }}
            >
              Pre-Sale Markets
            </h1>
          </div>

          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: 'var(--text-base)',
              lineHeight: '24px',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            A launchpad for creators and investors—get in early, grow together.
          </p>

          {/* Tabs */}
          <MasterTab activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Search and Filter Section */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--gap--1rem)',
            opacity: 0,
            animation: 'contentFadeIn 0.3s ease forwards',
            zIndex: 100,
            marginBottom: 'var(--gap--2rem)',
          }}
          key={activeTab} // Re-mount on tab change for smooth transition
        >
          {/* My Markets Filter Buttons - Only show on My Markets tab, above search */}
          {activeTab === 'my-markets' && (
            <div 
              className="presale-my-markets-filters"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {/* Filter Buttons - Left Side */}
              <div 
                style={{
                  display: 'flex',
                  gap: 'var(--gap--0-375rem)',
                  alignItems: 'center',
                }}
              >
                <button
                  onClick={() => setMyMarketsFilter('all')}
                  style={{
                    padding: '0 16px',
                    height: '40px',
                    borderRadius: '9999px',
                    background: myMarketsFilter === 'all' ? 'var(--iris-9)' : 'var(--sidebar-tab)',
                    border: '1px solid var(--black-a1)',
                    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: myMarketsFilter === 'all' ? '#FFFFFF' : 'var(--card-foreground)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (myMarketsFilter !== 'all') {
                      e.currentTarget.style.background = 'var(--black-a1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (myMarketsFilter !== 'all') {
                      e.currentTarget.style.background = 'var(--sidebar-tab)';
                    }
                  }}
                >
                  All
                </button>
                <button
                  onClick={() => setMyMarketsFilter('my-created')}
                  style={{
                    padding: '0 16px',
                    height: '40px',
                    borderRadius: '9999px',
                    background: myMarketsFilter === 'my-created' ? 'var(--iris-9)' : 'var(--sidebar-tab)',
                    border: '1px solid var(--black-a1)',
                    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: myMarketsFilter === 'my-created' ? '#FFFFFF' : 'var(--card-foreground)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (myMarketsFilter !== 'my-created') {
                      e.currentTarget.style.background = 'var(--black-a1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (myMarketsFilter !== 'my-created') {
                      e.currentTarget.style.background = 'var(--sidebar-tab)';
                    }
                  }}
                >
                  My Created
                </button>
                <button
                  onClick={() => setMyMarketsFilter('my-invested')}
                  style={{
                    padding: '0 16px',
                    height: '40px',
                    borderRadius: '9999px',
                    background: myMarketsFilter === 'my-invested' ? 'var(--iris-9)' : 'var(--sidebar-tab)',
                    border: '1px solid var(--black-a1)',
                    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: myMarketsFilter === 'my-invested' ? '#FFFFFF' : 'var(--card-foreground)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (myMarketsFilter !== 'my-invested') {
                      e.currentTarget.style.background = 'var(--black-a1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (myMarketsFilter !== 'my-invested') {
                      e.currentTarget.style.background = 'var(--sidebar-tab)';
                    }
                  }}
                >
                  My Investments
                </button>
              </div>

              {/* Status Filter - Right Side */}
              <div style={{ position: 'relative', zIndex: 9999 }} data-status-dropdown>
                <FilterButton
                  label="Status:"
                  showIcon
                  icon={
                    <ChevronDown 
                      style={{ 
                        width: '16px', 
                        height: '16px',
                        transform: isStatusDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }} 
                    />
                  }
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                >
                  {selectedStatus}
                </FilterButton>

                {/* Status Dropdown Menu */}
                {isStatusDropdownOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      right: '0',
                      width: '280px',
                      background: 'var(--card-normal)',
                      border: '1px solid var(--black-a2)',
                      borderRadius: 'var(--radius-card)',
                      boxShadow: 'var(--shadow-2)',
                      padding: 'var(--gap--0-5rem)',
                      zIndex: 9999,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--text-sm)',
                      opacity: 0,
                      transform: 'translateY(-8px)',
                      animation: 'dropdownFadeIn 0.2s ease forwards',
                    }}
                  >
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        className="w-full"
                        onClick={() => {
                          setSelectedStatus(status);
                          setIsStatusDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: 'var(--gap--0-5rem)',
                          borderRadius: 'var(--border-radius--0-375rem)',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 'var(--text-sm)',
                          color: 'var(--lum-12)',
                          cursor: 'pointer',
                          background: 'transparent',
                          border: 'none',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--lum-03)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Search and Status */}
          <div 
            className="presale-search-filter-row"
            style={{
              display: 'flex',
              gap: 'var(--gap--1rem)',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Local Search Input */}
            <PresaleSearchBox
              value={searchQuery}
              onChange={(value) => setSearchQuery(value)}
            />

            {/* Conditional Filter: Status (Explore) only */}
            {activeTab === 'explore' && (
              /* Status Filter with Dropdown for Explore Tab */
              <div style={{ position: 'relative', zIndex: 9999 }} data-status-dropdown>
                <FilterButton
                  label="Status:"
                  showIcon
                  icon={
                    <ChevronDown 
                      style={{ 
                        width: '16px', 
                        height: '16px',
                        transform: isStatusDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }} 
                    />
                  }
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                >
                  {selectedStatus}
                </FilterButton>

                {/* Status Dropdown Menu */}
                {isStatusDropdownOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      right: '0',
                      width: '280px',
                      background: 'var(--card-normal)',
                      border: '1px solid var(--black-a2)',
                      borderRadius: 'var(--radius-card)',
                      boxShadow: 'var(--shadow-2)',
                      padding: 'var(--gap--0-5rem)',
                      zIndex: 9999,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--text-sm)',
                      opacity: 0,
                      transform: 'translateY(-8px)',
                      animation: 'dropdownFadeIn 0.2s ease forwards',
                    }}
                  >
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        className="w-full"
                        onClick={() => {
                          setSelectedStatus(status);
                          setIsStatusDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: 'var(--gap--0-5rem)',
                          borderRadius: 'var(--border-radius--0-375rem)',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 'var(--text-sm)',
                          color: 'var(--lum-12)',
                          cursor: 'pointer',
                          background: 'transparent',
                          border: 'none',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--lum-03)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Categories - Only show on Explore tab */}
          {activeTab === 'explore' && (
            <div 
              className="presale-categories"
              style={{
                display: 'flex',
                gap: 'var(--gap--0-375rem)',
                flexWrap: 'wrap',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '6px',
                    background: selectedCategory === category 
                      ? 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-02)'
                      : 'transparent',
                    border: '1px solid var(--black-a1)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: '24px',
                    color: 'var(--card-foreground)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Market Cards - Different layouts for Explore vs My Markets */}
        {activeTab === 'explore' ? (
          /* Explore Tab - Simple Grid */
          <div 
            className="presale-market-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--gap--1rem)',
              alignContent: 'start',
              opacity: 0,
              animation: 'contentFadeIn 0.3s ease 0.1s forwards',
            }}
            key={`explore-${selectedCategory}-${selectedStatus}`}
          >
            {displayMarkets.map((market) => (
              <PresaleMarketCard 
                key={market.id} 
                image={market.image}
                category={market.category}
                participants={market.participants}
                question={market.question}
                softcapProgress={market.softcapProgress}
                raised={market.raised}
                total={market.total}
                endingDays={market.endingDays}
                endingHours={market.endingHours}
                endingMinutes={market.endingMinutes}
                createdBy={market.createdBy}
                status={market.status}
                statusColor={market.statusColor}
                viewerRole={market.viewerRole}
                createdDate={market.createdDate}
                joinedDate={market.joinedDate}
                onClick={() => handlePresaleMarketClick(market)}
              />
            ))}
          </div>
        ) : (
          /* My Markets Tab - Sectioned View */
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--gap--2rem)',
              opacity: 0,
              animation: 'contentFadeIn 0.3s ease 0.1s forwards',
            }}
            key={`my-markets-${myMarketsFilter}`}
          >
            {/* Show My Created Section */}
            {(myMarketsFilter === 'all' || myMarketsFilter === 'my-created') && filteredCreatedMarkets.length > 0 && (
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--gap--1rem)',
                }}
              >
                {(myMarketsFilter === 'all' || myMarketsFilter === 'my-created') && (
                  <h2 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      fontSize: 'var(--text-xl)',
                      lineHeight: '28px',
                      color: 'var(--card-foreground)',
                      margin: 0,
                    }}
                  >
                    My Created
                  </h2>
                )}
                <div 
                  className="presale-market-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 'var(--gap--1rem)',
                  }}
                >
                  {filteredCreatedMarkets.map((market) => (
                    <PresaleMarketCard 
                      key={market.id} 
                      image={market.image}
                      category={market.category}
                      participants={market.participants}
                      question={market.question}
                      softcapProgress={market.softcapProgress}
                      raised={market.raised}
                      total={market.total}
                      endingDays={market.endingDays}
                      endingHours={market.endingHours}
                      endingMinutes={market.endingMinutes}
                      createdBy={market.createdBy}
                      status={market.status}
                      statusColor={market.statusColor}
                      viewerRole={market.viewerRole}
                      createdDate={market.createdDate}
                      joinedDate={market.joinedDate}
                      onClick={() => handlePresaleMarketClick(market)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Show My Invested Section */}
            {(myMarketsFilter === 'all' || myMarketsFilter === 'my-invested') && filteredInvestedMarkets.length > 0 && (
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--gap--1rem)',
                }}
              >
                {(myMarketsFilter === 'all' || myMarketsFilter === 'my-invested') && (
                  <h2 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      fontSize: 'var(--text-xl)',
                      lineHeight: '28px',
                      color: 'var(--card-foreground)',
                      margin: 0,
                    }}
                  >
                    My Investments
                  </h2>
                )}
                <div 
                  className="presale-market-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 'var(--gap--1rem)',
                  }}
                >
                  {filteredInvestedMarkets.map((market) => (
                    <PresaleMarketCard 
                      key={market.id} 
                      image={market.image}
                      category={market.category}
                      participants={market.participants}
                      question={market.question}
                      softcapProgress={market.softcapProgress}
                      raised={market.raised}
                      total={market.total}
                      endingDays={market.endingDays}
                      endingHours={market.endingHours}
                      endingMinutes={market.endingMinutes}
                      createdBy={market.createdBy}
                      status={market.status}
                      statusColor={market.statusColor}
                      viewerRole={market.viewerRole}
                      createdDate={market.createdDate}
                      joinedDate={market.joinedDate}
                      onClick={() => handlePresaleMarketClick(market)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Column - Sidebar - Fixed 360px width */}
      <div 
        className="presale-right-column hide-scrollbar"
        style={{
          width: '360px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--gap--1-5rem)',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <CreateMarketCard />
        <StakingCard />
        <StatisticsCard />
        <PayoutHistoryCard />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contentFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .presale-page-container {
            flex-direction: column !important;
            padding: var(--gap--1rem) !important;
            gap: var(--gap--2rem) !important;
          }

          .presale-left-column {
            width: 100% !important;
          }

          .presale-right-column {
            width: 100% !important;
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .presale-page-container {
            padding: var(--gap--0-75rem) !important;
            gap: var(--gap--1-5rem) !important;
          }

          .presale-header h1 {
            font-size: var(--text-2xl) !important;
            line-height: 32px !important;
          }

          .presale-market-grid {
            grid-template-columns: 1fr !important;
          }

          .presale-search-filter-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .presale-my-markets-filters {
            flex-direction: column !important;
            gap: var(--gap--1rem) !important;
            align-items: stretch !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .presale-market-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
}
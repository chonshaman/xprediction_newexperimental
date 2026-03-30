import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { 
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { MasterTab } from './MasterTab';
import { ChildTab } from './ChildTab';
import { DynamicChildTab } from './DynamicChildTab';
import type { Outcome as MarketOutcome } from '../../data/markets';

interface OrderBookEntry {
  type: 'buy' | 'sell';
  price: number;
  shares: number;
  total: number;
  outcome: string; // Outcome ID (can be 'yes', 'no', or custom outcome IDs)
}

interface OrderBookChartProps {
  totalVolume: number;
  volumeFormatted: string;
  yesLabel: string;
  yesChance: string;
  yesPercentage: number;
  yesPrice: string;
  noPercentage: number;
  noPrice: string;
  buyOrders: OrderBookEntry[];
  sellOrders: OrderBookEntry[];
  lastPrice: number;
  spread: number;
  chartData: any[]; // Dynamic chart data based on outcomes
  outcomes?: MarketOutcome[]; // Optional: for multi-outcome markets
  selectedOutcome?: string; // External outcome selection to sync with
}

type TabType = 'explore' | 'my-markets';

export function OrderBookChart({
  totalVolume,
  volumeFormatted,
  yesLabel,
  yesChance,
  yesPercentage,
  yesPrice,
  noPercentage,
  noPrice,
  buyOrders,
  sellOrders,
  lastPrice,
  spread,
  chartData,
  outcomes,
  selectedOutcome
}: OrderBookChartProps) {
  const [activeTab, setActiveTab] = useState<TabType>('explore');
  
  // Detect if this is a multi-outcome market
  const isMultiOutcome = outcomes && outcomes.length > 2;
  
  // For multi-outcome: use first outcome ID, for binary: use 'yes'
  const initialOutcomeId = isMultiOutcome ? outcomes[0].id : 'yes';
  const [activeOutcomeId, setActiveOutcomeId] = useState<string>(selectedOutcome || initialOutcomeId);

  // Sync activeOutcomeId with selectedOutcome prop when it changes
  useEffect(() => {
    if (selectedOutcome) {
      setActiveOutcomeId(selectedOutcome);
    }
  }, [selectedOutcome]);

  const handleRefresh = () => {
    // Refresh orderbook data
    // In production, this would fetch fresh data from the API
  };

  // For now, use all orders without filtering since we don't have real transaction data
  // In production, these would be filtered by activeOutcomeId
  const filteredBuyOrders = buyOrders; // TODO: Filter when real data is available
  const filteredSellOrders = sellOrders; // TODO: Filter when real data is available

  // Calculate metrics for the active market
  const activeBestAsk = filteredSellOrders.length > 0 ? Math.min(...filteredSellOrders.map(o => o.price)) : null;
  const activeBestBid = filteredBuyOrders.length > 0 ? Math.max(...filteredBuyOrders.map(o => o.price)) : null;
  const activeSpread = activeBestAsk && activeBestBid ? activeBestAsk - activeBestBid : spread;
  const activeLastPrice = activeOutcomeId === 'yes' ? lastPrice : (100 - lastPrice);

  return (
    <div 
      className="rounded-[var(--radius-card)] overflow-hidden"
      style={{
        background: 'var(--card-gradient)',
        border: '1px solid var(--black-a1)',
        boxShadow: 'var(--shadow-1)'
      }}
    >
      {/* Content Container with 20px padding */}
      <div style={{ padding: '20px' }}>
        {/* Master Tab */}
        <MasterTab 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          firstTabLabel="Orderbook"
          secondTabLabel="Chart"
        />

        {/* Content */}
        {activeTab === 'explore' ? (
          <div>
            {/* Stats Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-3 relative w-full" style={{ paddingTop: 'var(--gap--1-5rem)', paddingBottom: 'var(--gap--0-5rem)', marginBottom: 'var(--gap--0-5rem)', gap: 'var(--gap--1rem)' }}>
              <div className="flex gap-9 items-center">
                <div className="flex flex-col gap-1 items-start">
                  <p 
                    style={{ 
                      fontSize: 'var(--text-sm)', 
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Total Trading Volume
                  </p>
                  <p 
                    style={{ 
                      fontSize: 'var(--text-xl)', 
                      fontWeight: 'var(--font-weight-semi-bold)',
                      letterSpacing: '-0.1px',
                      color: 'var(--card-foreground)'
                    }}
                  >
                    {volumeFormatted}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p 
                    style={{ 
                      fontSize: 'var(--text-sm)', 
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {yesLabel}
                  </p>
                  <p 
                    style={{ 
                      fontSize: 'var(--text-xl)', 
                      fontWeight: 'var(--font-weight-semi-bold)',
                      letterSpacing: '-0.1px',
                      color: 'var(--card-foreground)'
                    }}
                  >
                    {yesChance}
                  </p>
                </div>
              </div>
              <div className="flex items-start rounded-[var(--radius-card)] w-full md:w-auto" style={{ border: '1px solid var(--black-a1)' }}>
                <div 
                  className="flex flex-col items-start overflow-clip px-6 py-3 rounded-tl-[var(--radius-card)] rounded-bl-[var(--radius-card)]"
                  style={{ background: 'var(--green-4)' }}
                >
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', lineHeight: '20px', color: 'var(--chart-1)' }}>
                    YES
                  </p>
                  <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semi-bold)', lineHeight: '28px', color: 'var(--green-10)' }}>
                    <span>{yesPercentage}% </span>
                    <span style={{ color: 'var(--green-4)' }}>-</span>
                    <span> {yesPrice}</span>
                  </p>
                </div>
                <div 
                  className="flex flex-col items-start overflow-clip px-6 py-3 rounded-tr-[var(--radius-card)] rounded-br-[var(--radius-card)]"
                  style={{ background: 'var(--red-4)' }}
                >
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', lineHeight: '20px', color: 'var(--chart-2)' }}>
                    NO
                  </p>
                  <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semi-bold)', lineHeight: '28px', color: 'var(--red-10)' }}>
                    <span>{noPercentage}% </span>
                    <span style={{ color: 'var(--red-4)' }}>- </span>
                    <span>{noPrice}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Trade Tabs */}
            {isMultiOutcome ? (
              <DynamicChildTab 
                outcomes={outcomes} 
                activeTab={activeOutcomeId} 
                onTabChange={setActiveOutcomeId} 
              />
            ) : (
              <ChildTab 
                activeTab={activeOutcomeId as 'yes' | 'no'} 
                onTabChange={(tab) => setActiveOutcomeId(tab)} 
              />
            )}

            {/* Orderbook Table 
                Standard Prediction Market Orderbook Structure:
                1. Asks (Sell Orders) - Top, RED, sorted ascending (lowest price at bottom near spread)
                2. Spread Indicator - Middle, shows best ask, best bid, last price, spread
                3. Bids (Buy Orders) - Bottom, GREEN, sorted descending (highest price at top near spread)
                
                Terminology:
                - Ask = Someone offering to SELL shares (wants higher price)
                - Bid = Someone offering to BUY shares (wants lower price)
                - Best Ask = Lowest sell price (most competitive seller)
                - Best Bid = Highest buy price (most competitive buyer)
                - Spread = Best Ask - Best Bid (market liquidity indicator)
                
                The orderbook filters by outcome (YES/NO) based on active tab.
            */}
            <div className="relative">
              {/* Active Market Indicator */}
              <div className="flex items-center justify-center py-2" style={{ background: 'var(--lum-02)' }}>
                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)' }}>
                  {isMultiOutcome 
                    ? `${outcomes.find(o => o.id === activeOutcomeId)?.label || activeOutcomeId} Market Orderbook`
                    : `${activeOutcomeId.toUpperCase()} Market Orderbook`
                  }
                </p>
              </div>

              {/* Header */}
              <div 
                className="flex items-start justify-center w-full"
                style={{ borderBottom: '0.696px solid var(--black-a1)' }}
              >
                <div className="flex-1 min-w-0 pb-1.5 pt-5 px-4">
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', lineHeight: '24px', color: 'var(--muted-foreground)' }}>
                    Type
                  </p>
                </div>
                <div className="flex-1 min-w-0 text-right pb-1.5 pt-5 px-4">
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', lineHeight: '24px', color: 'var(--muted-foreground)' }}>
                    Price
                  </p>
                </div>
                <div className="flex-1 min-w-0 text-right pb-1.5 pt-5 px-4">
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', lineHeight: '24px', color: 'var(--muted-foreground)' }}>
                    Quantity
                  </p>
                </div>
                <div className="flex-1 min-w-0 text-right pb-1.5 pt-5 px-9">
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', lineHeight: '24px', color: 'var(--muted-foreground)' }}>
                    Total
                  </p>
                </div>
              </div>

              {/* Asks (Sell Orders) - Sorted ascending by price, best ask at bottom closest to spread */}
              <div 
                className="overflow-y-auto"
                style={{ 
                  maxHeight: `${7 * 28}px`, // 7 rows * 28px height per row
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'var(--muted-foreground) var(--lum-02)'
                }}
              >
                {filteredSellOrders.sort((a, b) => a.price - b.price).map((order, index) => {
                  const barWidth = (order.shares / Math.max(...sellOrders.map(o => o.shares), ...buyOrders.map(o => o.shares))) * 100;
                  return (
                    <div 
                      key={`ask-${index}`}
                      className="flex h-7 items-center justify-center relative w-full"
                      style={{ borderBottom: '0.696px solid var(--black-a1)' }}
                    >
                      <div 
                        className="absolute h-full top-0 left-0"
                        style={{ 
                          background: 'var(--red-5)',
                          width: `${barWidth}%`,
                          transition: 'width 0.3s ease'
                        }}
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-center px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--card-foreground)' }}>
                          Ask
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 flex items-center justify-end px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--red-10)' }}>
                          {order.price}
                          <span style={{ fontSize: 'var(--text-xs)' }}>¢</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 text-right flex flex-col items-end justify-center px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--card-foreground)' }}>
                          {order.shares.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 text-right flex flex-col items-end justify-center px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--card-foreground)' }}>
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Spread Indicator - Shows best ask, best bid, last price, and spread */}
              <div className="flex items-center justify-center py-2 gap-4" style={{ background: 'var(--lum-01)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--red-9)' }} />
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)', color: 'var(--muted-foreground)' }}>
                    Ask: <span style={{ color: 'var(--red-9)' }}>{activeBestAsk ? `${activeBestAsk}¢` : '-'}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--blue-9)' }} />
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)', color: 'var(--muted-foreground)' }}>
                    Last: <span style={{ color: 'var(--blue-9)' }}>{activeLastPrice}¢</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--green-9)' }} />
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)', color: 'var(--muted-foreground)' }}>
                    Bid: <span style={{ color: 'var(--green-9)' }}>{activeBestBid ? `${activeBestBid}¢` : '-'}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--amber-9)' }} />
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)', color: 'var(--muted-foreground)' }}>
                    Spread: <span style={{ color: 'var(--amber-9)' }}>{activeSpread ? `${activeSpread}¢` : '-'}</span>
                  </p>
                </div>
              </div>

              {/* Bids (Buy Orders) - Sorted descending by price, best bid at top closest to spread */}
              <div 
                className="overflow-y-auto"
                style={{ 
                  maxHeight: `${7 * 28}px`, // 7 rows * 28px height per row
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'var(--muted-foreground) var(--lum-02)'
                }}
              >
                {filteredBuyOrders.sort((a, b) => b.price - a.price).map((order, index) => {
                  const barWidth = (order.shares / Math.max(...sellOrders.map(o => o.shares), ...buyOrders.map(o => o.shares))) * 100;
                  return (
                    <div 
                      key={`bid-${index}`}
                      className="flex h-7 items-center justify-center relative w-full"
                      style={{ borderBottom: index === filteredBuyOrders.length - 1 ? 'none' : '0.696px solid var(--black-a1)' }}
                    >
                      <div 
                        className="absolute h-full top-0 left-0"
                        style={{ 
                          background: 'var(--green-4)',
                          width: `${barWidth}%`,
                          transition: 'width 0.3s ease'
                        }}
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-center px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--card-foreground)' }}>
                          Bid
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 flex items-center justify-end px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--green-11)' }}>
                          {order.price}
                          <span style={{ fontSize: 'var(--text-xs)' }}>¢</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 text-right flex flex-col items-end justify-center px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--card-foreground)' }}>
                          {order.shares.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 text-right flex flex-col items-end justify-center px-4 py-2 relative z-10">
                        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'var(--card-foreground)' }}>
                          ${order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Chart Legend - Dynamic based on outcomes */}
            <div className="flex items-center justify-center flex-wrap gap-6 mb-4">
              {isMultiOutcome ? (
                // Multi-outcome: show all outcomes
                outcomes.map((outcome) => (
                  <div key={outcome.id} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: outcome.color }} />
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--muted-foreground)' }}>
                      {outcome.label}
                    </p>
                  </div>
                ))
              ) : (
                // Binary: YES/NO
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'var(--green-9)' }} />
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--muted-foreground)' }}>
                      YES Probability
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'var(--red-9)' }} />
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--muted-foreground)' }}>
                      NO Probability
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Chart View - Dynamic based on outcomes */}
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    {isMultiOutcome ? (
                      // Multi-outcome: create gradient for each outcome
                      outcomes.map((outcome) => (
                        <linearGradient key={`gradient-${outcome.id}`} id={`color${outcome.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={outcome.color} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={outcome.color} stopOpacity={0}/>
                        </linearGradient>
                      ))
                    ) : (
                      // Binary: YES/NO gradients
                      <>
                        <linearGradient id="colorYes" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--green-9)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--green-9)" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorNo" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--red-9)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--red-9)" stopOpacity={0}/>
                        </linearGradient>
                      </>
                    )}
                  </defs>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="var(--black-a2)" 
                    vertical={false} 
                  />
                  <XAxis 
                    dataKey="time" 
                    stroke="var(--muted-foreground)" 
                    style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)' }}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="var(--muted-foreground)" 
                    style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)' }}
                    tickLine={false}
                    axisLine={false}
                    dx={-10}
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--card-normal)', 
                      borderColor: 'var(--black-a2)',
                      borderRadius: 'var(--radius-card)',
                      color: 'var(--card-foreground)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-weight-medium)',
                      padding: '8px 12px'
                    }}
                    formatter={(value: number, name: string) => {
                      // Find outcome label or use default
                      const outcomeLabel = isMultiOutcome 
                        ? outcomes.find(o => o.id === name)?.label || name
                        : name === 'yes' ? 'YES' : 'NO';
                      return [`${value}%`, outcomeLabel];
                    }}
                    labelStyle={{
                      color: 'var(--muted-foreground)',
                      marginBottom: '4px'
                    }}
                  />
                  {isMultiOutcome ? (
                    // Multi-outcome: render area for each outcome
                    outcomes.map((outcome) => (
                      <Area 
                        key={outcome.id}
                        type="monotone" 
                        dataKey={outcome.id}
                        stroke={outcome.color} 
                        strokeWidth={2.5}
                        fillOpacity={1} 
                        fill={`url(#color${outcome.id})`} 
                      />
                    ))
                  ) : (
                    // Binary: YES/NO areas
                    <>
                      <Area 
                        type="monotone" 
                        dataKey="yes" 
                        stroke="var(--green-9)" 
                        strokeWidth={2.5}
                        fillOpacity={1} 
                        fill="url(#colorYes)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="no" 
                        stroke="var(--red-9)" 
                        strokeWidth={2.5}
                        fillOpacity={1} 
                        fill="url(#colorNo)" 
                      />
                    </>
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
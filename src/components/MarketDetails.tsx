import React, { useState, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
// import { BuySellBlock } from './BuySellBlock'; // Old version - hidden
import { BuySellBlockNew } from './BuySellBlock/BuySellBlockNew';
import { ArrowLeft, Clock, Users, MessageCircle, Copy, Check } from 'lucide-react';
import type { Market } from '../data/markets';
import { OutcomeButton } from './BuySellBlock/OutcomeButton';
import { OrderBookChart } from './market-details/OrderBookChart';
import { MarketTimeline } from './market-details/MarketTimeline';

interface MarketDetailsProps {
  market: Market;
  onBack: () => void;
}

// Generate dynamic chart data based on market's current price
// Shows realistic price movement over 24 hours
function generateChartData(currentYesPrice: number) {
  const dataPoints = [];
  const numPoints = 7; // 24 hours / 4-hour intervals
  const volatility = 8; // Max price swing +/- 8%

  // Create realistic price movements that end at current price
  let previousPrice = currentYesPrice - (Math.random() * 10 - 5); // Start slightly different

  for (let i = 0; i < numPoints; i++) {
    const hour = i * 4;
    const timeStr = `${hour.toString().padStart(2, '0')}:00`;

    // For last point, use current market price
    if (i === numPoints - 1) {
      dataPoints.push({
        time: timeStr,
        yes: Math.round(currentYesPrice),
        no: Math.round(100 - currentYesPrice)
      });
    } else {
      // Random walk with mean reversion towards current price
      const drift = (currentYesPrice - previousPrice) * 0.2; // Pull towards current
      const randomChange = (Math.random() - 0.5) * volatility;
      let yesPrice = previousPrice + drift + randomChange;

      // Keep within realistic bounds
      yesPrice = Math.max(5, Math.min(95, yesPrice));

      dataPoints.push({
        time: timeStr,
        yes: Math.round(yesPrice),
        no: Math.round(100 - yesPrice)
      });

      previousPrice = yesPrice;
    }
  }

  return dataPoints;
}

// Generate dynamic orderbook data based on actual market prices
function generateOrderBookData(
  basePrice: number,
  side: 'buy' | 'sell',
  outcome: 'yes' | 'no',
  marketVolume: number
) {
  const orders: any[] = [];
  const numOrders = 7; // Show exactly 7 orders for each side

  // Calculate realistic price increments based on market price
  // Lower prices have smaller spreads, higher prices have larger spreads
  const priceIncrement = basePrice < 20 ? 0.5 : basePrice < 50 ? 1 : basePrice < 80 ? 1.5 : 2;

  // Calculate share sizes based on market volume (higher volume = more liquidity)
  const volumeMultiplier = Math.max(1, marketVolume / 100000);

  for (let i = 0; i < numOrders; i++) {
    // Asks (sells) go up from base, Bids (buys) go down from base
    const price = side === 'sell'
      ? basePrice + (i * priceIncrement)
      : basePrice - (i * priceIncrement);

    // Skip invalid prices (outside 0-100 range for prediction markets)
    if (price < 0.5 || price > 99.5) {
      // For invalid prices, adjust to stay within bounds
      const adjustedPrice = side === 'sell'
        ? Math.min(99.5, basePrice + (i * priceIncrement * 0.5))
        : Math.max(0.5, basePrice - (i * priceIncrement * 0.5));

      if ((side === 'sell' && adjustedPrice >= basePrice) || (side === 'buy' && adjustedPrice <= basePrice)) {
        // Larger orders closer to spread, smaller orders further away (realistic depth)
        const depthMultiplier = 1 + (numOrders - i) * 0.3;
        const shares = Math.floor((Math.random() * 10 + 8) * volumeMultiplier * depthMultiplier);
        const total = (adjustedPrice * shares) / 100;

        orders.push({
          type: side,
          price: Math.round(adjustedPrice * 10) / 10, // Round to 1 decimal
          shares,
          total: Math.round(total * 100) / 100, // Round to 2 decimals
          outcome
        });
      }
      continue;
    }

    // Larger orders closer to spread, smaller orders further away (realistic depth)
    const depthMultiplier = 1 + (numOrders - i) * 0.3;
    const shares = Math.floor((Math.random() * 10 + 8) * volumeMultiplier * depthMultiplier);
    const total = (price * shares) / 100;

    orders.push({
      type: side,
      price: Math.round(price * 10) / 10, // Round to 1 decimal
      shares,
      total: Math.round(total * 100) / 100, // Round to 2 decimals
      outcome
    });
  }

  // Ensure we always return exactly 7 orders
  while (orders.length < 7) {
    const lastOrder = orders[orders.length - 1];
    const price = side === 'sell'
      ? Math.min(99.5, lastOrder.price + priceIncrement)
      : Math.max(0.5, lastOrder.price - priceIncrement);

    const shares = Math.floor((Math.random() * 5 + 3) * volumeMultiplier);
    const total = (price * shares) / 100;

    orders.push({
      type: side,
      price: Math.round(price * 10) / 10,
      shares,
      total: Math.round(total * 100) / 100,
      outcome
    });
  }

  return orders.slice(0, 7); // Ensure exactly 7 orders
}

export function MarketDetails({ market, onBack }: MarketDetailsProps) {
  // Detect if this is a multi-outcome market (3+ outcomes)
  const isMultiOutcome = market.outcomes && market.outcomes.length > 2;

  // Start with no outcome selected - user must choose
  const [selectedOutcome, setSelectedOutcome] = useState<string>('');
  const [amount, setAmount] = useState<string>('100');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (market.accessCode) {
      navigator.clipboard.writeText(market.accessCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Calculate liquidity if not provided (use volume as a base)
  const liquidity = market.stats.liquidity || market.stats.volume * 0.15;
  const liquidityFormatted = market.stats.liquidityFormatted ||
    (liquidity >= 1000000 ? `$${(liquidity / 1000000).toFixed(1)}M` : `$${(liquidity / 1000).toFixed(1)}K`);

  // Use actual market prediction percentages
  const currentYesPercentage = market.prediction.yesPercentage;
  const currentYesPrice = (market.prediction.yesPercentage / 100).toFixed(2);
  const currentNoPrice = (market.prediction.noPercentage / 100).toFixed(2);
  const priceChange = '+12%'; // This would be calculated from historical data

  // Memoize orderbook and chart data to prevent regeneration on every render
  // Only regenerate when market ID or key stats change
  const orderBookData = useMemo(() => {
    // Generate orderbook data for both YES and NO markets
    // YES market orders
    const yesSellOrders = generateOrderBookData(currentYesPercentage + 2, 'sell', 'yes', market.stats.volume);
    const yesBuyOrders = generateOrderBookData(currentYesPercentage - 1, 'buy', 'yes', market.stats.volume);

    // NO market orders (complement of YES)
    const noSellOrders = generateOrderBookData(market.prediction.noPercentage + 2, 'sell', 'no', market.stats.volume);
    const noBuyOrders = generateOrderBookData(market.prediction.noPercentage - 1, 'buy', 'no', market.stats.volume);

    // Combine all orders to pass to OrderBookChart (it will filter based on active tab)
    const sellOrders = [...yesSellOrders, ...noSellOrders];
    const buyOrders = [...yesBuyOrders, ...noBuyOrders];

    // Calculate dynamic spread from YES market (most liquid)
    const yesBestAsk = yesSellOrders.length > 0 ? Math.min(...yesSellOrders.map(o => o.price)) : currentYesPercentage + 2;
    const yesBestBid = yesBuyOrders.length > 0 ? Math.max(...yesBuyOrders.map(o => o.price)) : currentYesPercentage - 1;
    const spread = Math.round((yesBestAsk - yesBestBid) * 10) / 10; // Round to 1 decimal

    return { sellOrders, buyOrders, spread };
  }, [market.id, currentYesPercentage, market.prediction.noPercentage, market.stats.volume]);

  // Memoize chart data
  const chartData = useMemo(() => {
    return generateChartData(currentYesPercentage);
  }, [market.id, currentYesPercentage]);

  const lastPrice = currentYesPercentage;

  return (
    <div
      className="animate-in fade-in duration-300"
      style={{ paddingBottom: 'var(--gap--4rem)' }}
    >
      {/* Navigation */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Markets</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Content (Left Column) */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Header Card */}
          <div
            className="overflow-hidden"
            style={{
              background: 'var(--card-gradient)',
              border: '1px solid var(--black-a1)',
              borderRadius: 'var(--radius-xl)',
              padding: '20px',
              boxShadow: 'var(--shadow-1)',
            }}
          >
            {/* Container with gap between rows */}
            <div
              className="flex flex-col"
              style={{ gap: 'var(--gap--1-5rem)' }}
            >
              {/* Row 1: Title/Tag/Date on left, Image on right */}
              <div className="flex gap-4">
                {/* Left - Title and Meta Info */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Category and Date */}
                  <div className="flex gap-2 items-center flex-wrap">
                    <div
                      className="flex items-center justify-center px-3 py-1 shrink-0"
                      style={{
                        backgroundColor: 'var(--accent)',
                        borderRadius: 'var(--radius-input)',
                      }}
                    >
                      <p
                        className="font-sans text-nowrap whitespace-pre"
                        style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-medium)',
                          lineHeight: '16px',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        {market.category.name}
                      </p>
                    </div>

                    {market.accessCode && (
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                        style={{
                          backgroundColor: 'var(--gold-3)',
                          border: '1px solid var(--gold-6)',
                          borderRadius: 'var(--radius-input)',
                        }}
                        onClick={handleCopyCode}
                        title="Copy Access Code"
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
                          Code: {market.accessCode}
                        </p>
                        {copied ? (
                          <Check className="w-3.5 h-3.5" style={{ color: 'var(--gold-11)' }} />
                        ) : (
                          <Copy className="w-3.5 h-3.5" style={{ color: 'var(--gold-11)' }} />
                        )}
                      </div>
                    )}

                    <div className="flex gap-1 items-center shrink-0">
                      <Clock
                        style={{
                          width: '14px',
                          height: '14px',
                          color: 'var(--muted-foreground)',
                        }}
                      />
                      <p
                        className="font-sans text-nowrap whitespace-pre"
                        style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-medium)',
                          lineHeight: '20px',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        {market.date}
                      </p>
                    </div>
                  </div>

                  {/* Market Question Title */}
                  <h3
                    className="font-sans"
                    style={{
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 'var(--font-weight-medium)',
                      lineHeight: '36px',
                      color: 'var(--black-a11)',
                    }}
                  >
                    {market.question}
                  </h3>
                </div>

                {/* Right - Market Image (Fixed ratio, centered vertically) */}
                <div
                  className="shrink-0 overflow-hidden self-center"
                  style={{
                    width: '78px',
                    height: '100px',
                    borderRadius: 'var(--border-radius--0-5rem)',
                  }}
                >
                  <ImageWithFallback
                    src={market.image}
                    alt={market.question}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 2: Outcome Selector */}
              {isMultiOutcome && market.outcomes ? (
                // Multi-outcome markets: Show all outcome buttons
                <div
                  className={market.outcomes.length <= 3 ? "flex gap-3" : "grid grid-cols-2 gap-3"}
                >
                  {market.outcomes.map((outcome) => (
                    <OutcomeButton
                      key={outcome.id}
                      type="Yes" // Dummy value, overridden by custom props
                      price={`${outcome.percentage}%`}
                      selected={selectedOutcome === outcome.id}
                      onClick={() => setSelectedOutcome(outcome.id)}
                      color={outcome.color}
                      icon={outcome.icon}
                      label={outcome.label}
                    />
                  ))}
                </div>
              ) : (
                // Binary markets: Show YES/NO buttons
                <div className="flex gap-3">
                  <OutcomeButton
                    type="Yes"
                    price={`${currentYesPercentage}%`}
                    selected={selectedOutcome === 'YES'}
                    onClick={() => setSelectedOutcome('YES')}
                  />
                  <OutcomeButton
                    type="No"
                    price={`${market.prediction.noPercentage}%`}
                    selected={selectedOutcome === 'NO'}
                    onClick={() => setSelectedOutcome('NO')}
                  />
                </div>
              )}
            </div>
          </div>

          {/* OrderBook / Chart Section */}
          <OrderBookChart
            totalVolume={market.stats.volume}
            volumeFormatted={market.stats.volumeFormatted}
            yesLabel="Yes"
            yesChance={`${currentYesPercentage}% Chance`}
            yesPercentage={currentYesPercentage}
            yesPrice={currentYesPrice}
            noPercentage={market.prediction.noPercentage}
            noPrice={currentNoPrice}
            sellOrders={orderBookData.sellOrders}
            buyOrders={orderBookData.buyOrders}
            lastPrice={lastPrice}
            spread={orderBookData.spread}
            chartData={chartData}
            outcomes={market.outcomes}
            selectedOutcome={selectedOutcome}
          />

          {/* Market Description */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-foreground">About this market</h3>
            <div
              className="rounded-[var(--radius-card)] text-muted-foreground space-y-4"
              style={{
                background: 'var(--card-gradient)',
                border: '1px solid var(--black-a1)',
                boxShadow: 'var(--shadow-1)',
                padding: '20px',
              }}
            >
              <p style={{ lineHeight: '1.6' }}>
                {market.description || 'This market will resolve to "Yes" if the event described in the title occurs by the resolution date. Resolution will be based on official reports and credible news sources.'}
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">Volume</span>
                  <span>{market.stats.volumeFormatted}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">Liquidity</span>
                  <span>{liquidityFormatted}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">Participants</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {market.stats.participantsFormatted}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">Comments</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {market.stats.commentsFormatted}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">Resolution Date</span>
                  <span>{market.date}</span>
                </div>
              </div>

              {/* Market Timeline */}
              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <MarketTimeline currentStatus="live-trading" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Right Column) - Trading Interface */}
        <div className="space-y-6">
          {/* Old BuySellBlock - Hidden */}
          {/* <BuySellBlock 
             selectedOutcome={selectedOutcome}
             onOutcomeChange={setSelectedOutcome}
             amount={amount}
             onAmountChange={setAmount}
             onBuy={() => {
               // Handle buy action
               // In production, this would call an API
             }}
             marketPrices={{
               yesPrice: market.prediction.yesPercentage / 100,
               noPrice: market.prediction.noPercentage / 100
             }}
             market={market}
          /> */}

          {/* New BuySellBlock Design */}
          <BuySellBlockNew
            selectedOutcome={selectedOutcome}
            onOutcomeChange={setSelectedOutcome}
            amount={amount}
            onAmountChange={setAmount}
            onBuy={() => {
              // Handle buy action
              // In production, this would call an API
            }}
            marketPrices={{
              yesPrice: market.prediction.yesPercentage / 100,
              noPrice: market.prediction.noPercentage / 100
            }}
            market={market}
          />
        </div>
      </div>
    </div>
  );
}
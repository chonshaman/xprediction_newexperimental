/**
 * Market OrderBook & Chart Preview Components
 * Displays orderbook and chart components from MarketDetails
 */
import React from 'react';
import { OrderBookChart } from '../../market-details/OrderBookChart';

// Sample orderbook data for previews
const sampleYesBuyOrders = [
  { type: 'buy' as const, price: 61, shares: 850, total: 518.50, outcome: 'yes' as const },
  { type: 'buy' as const, price: 60, shares: 920, total: 552.00, outcome: 'yes' as const },
  { type: 'buy' as const, price: 59, shares: 1100, total: 649.00, outcome: 'yes' as const },
  { type: 'buy' as const, price: 58, shares: 1250, total: 725.00, outcome: 'yes' as const },
];

const sampleYesSellOrders = [
  { type: 'sell' as const, price: 64, shares: 780, total: 499.20, outcome: 'yes' as const },
  { type: 'sell' as const, price: 65, shares: 650, total: 422.50, outcome: 'yes' as const },
  { type: 'sell' as const, price: 66, shares: 550, total: 363.00, outcome: 'yes' as const },
  { type: 'sell' as const, price: 67, shares: 420, total: 281.40, outcome: 'yes' as const },
];

const sampleNoBuyOrders = [
  { type: 'buy' as const, price: 36, shares: 650, total: 234.00, outcome: 'no' as const },
  { type: 'buy' as const, price: 35, shares: 820, total: 287.00, outcome: 'no' as const },
  { type: 'buy' as const, price: 34, shares: 950, total: 323.00, outcome: 'no' as const },
];

const sampleNoSellOrders = [
  { type: 'sell' as const, price: 38, shares: 580, total: 220.40, outcome: 'no' as const },
  { type: 'sell' as const, price: 39, shares: 480, total: 187.20, outcome: 'no' as const },
  { type: 'sell' as const, price: 40, shares: 390, total: 156.00, outcome: 'no' as const },
];

const sampleChartData = [
  { time: '00:00', yes: 55, no: 45 },
  { time: '04:00', yes: 58, no: 42 },
  { time: '08:00', yes: 60, no: 40 },
  { time: '12:00', yes: 62, no: 38 },
  { time: '16:00', yes: 64, no: 36 },
  { time: '20:00', yes: 63, no: 37 },
  { time: '24:00', yes: 62, no: 38 },
];

// OrderBook Tab View
export function OrderBookYesView() {
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <OrderBookChart
        totalVolume={2345678}
        volumeFormatted="$2.3M"
        yesLabel="YES"
        yesChance="62%"
        yesPercentage={62}
        yesPrice="62¢"
        noPercentage={38}
        noPrice="38¢"
        buyOrders={[...sampleYesBuyOrders, ...sampleNoBuyOrders]}
        sellOrders={[...sampleYesSellOrders, ...sampleNoSellOrders]}
        lastPrice={62}
        spread={3}
        chartData={sampleChartData}
      />
    </div>
  );
}

// Chart Tab View - Need a wrapper component to control the tab state
function ChartViewWrapper() {
  const [activeTab, setActiveTab] = React.useState<'orderbook' | 'chart'>('chart');
  
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <div
        style={{
          background: 'var(--card-gradient)',
          border: '1px solid var(--black-a1)',
          borderRadius: 'var(--radius-xl)',
          padding: '20px',
          boxShadow: 'var(--shadow-1)',
        }}
      >
        {/* Tab buttons */}
        <div style={{ display: 'flex', gap: 'var(--gap--0-5rem)', marginBottom: 'var(--gap--1rem)' }}>
          <button
            onClick={() => setActiveTab('orderbook')}
            style={{
              padding: '8px 16px',
              background: activeTab === 'orderbook' ? 'var(--lum-02)' : 'transparent',
              color: activeTab === 'orderbook' ? 'var(--card-foreground)' : 'var(--muted-foreground)',
              border: 'none',
              borderRadius: activeTab === 'orderbook' ? 'var(--radius-button)' : '0',
              cursor: 'pointer',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              transition: 'all 200ms ease-out',
            }}
          >
            OrderBook
          </button>
          <button
            onClick={() => setActiveTab('chart')}
            style={{
              padding: '8px 16px',
              background: activeTab === 'chart' ? 'var(--lum-02)' : 'transparent',
              color: activeTab === 'chart' ? 'var(--card-foreground)' : 'var(--muted-foreground)',
              border: 'none',
              borderRadius: activeTab === 'chart' ? 'var(--radius-button)' : '0',
              cursor: 'pointer',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              transition: 'all 200ms ease-out',
            }}
          >
            Chart
          </button>
        </div>

        {/* Chart Legend */}
        <div className="flex items-center justify-center gap-6 mb-4">
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
        </div>

        {/* Chart */}
        <div style={{ height: '400px', width: '100%' }}>
          <p style={{ 
            textAlign: 'center', 
            color: 'var(--muted-foreground)', 
            fontSize: 'var(--text-sm)',
            paddingTop: '180px'
          }}>
            [Interactive Recharts Probability Chart Would Render Here]<br/>
            <span style={{ fontSize: 'var(--text-xs)' }}>
              YES line (green) + NO line (red) with gradient fills
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChartDualLineView() {
  return <ChartViewWrapper />;
}

// Breakdown Details View
export function BreakdownDetailsView() {
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <div
        style={{
          background: 'var(--card-gradient)',
          border: '1px solid var(--black-a1)',
          borderRadius: 'var(--radius-xl)',
          padding: '20px',
          boxShadow: 'var(--shadow-1)',
        }}
      >
        {/* Total Volume */}
        <div style={{ marginBottom: 'var(--gap--1-5rem)' }}>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              marginBottom: 'var(--gap--0-5rem)',
            }}
          >
            Total Volume
          </p>
          <p
            style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-weight-extra-bold)',
              color: 'var(--card-foreground)',
            }}
          >
            $2.3M
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--gap--1rem)',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                marginBottom: '4px',
              }}
            >
              Last Price
            </p>
            <p
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--card-foreground)',
              }}
            >
              62¢
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                marginBottom: '4px',
              }}
            >
              Spread
            </p>
            <p
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--card-foreground)',
              }}
            >
              3.0¢
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                marginBottom: '4px',
              }}
            >
              YES Price
            </p>
            <p
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--green-9)',
              }}
            >
              62¢
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                marginBottom: '4px',
              }}
            >
              NO Price
            </p>
            <p
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--red-9)',
              }}
            >
              38¢
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

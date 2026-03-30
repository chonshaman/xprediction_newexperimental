import React from 'react';
import { ChevronRight, Info, TrendingUp } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import svgPaths from '../../imports/svg-7b0zc66n86';

interface PositionsCardProps {
  todayValue?: string;
  greenBadgeValue?: string;
  positionValue?: string;
  positionValueDecimals?: string;
  openOrdersValue?: string;
  openOrdersDecimals?: string;
  realizedPL?: string;
  activePositions?: number;
  openOrdersCount?: number;
  completedCount?: number;
  chartData?: Array<{ name: string; value: number }>;
}

const defaultChartData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 48 },
  { name: 'Jul', value: 60 },
  { name: 'Aug', value: 50 },
  { name: 'Sep', value: 75 },
  { name: 'Oct', value: 65 },
  { name: 'Nov', value: 80 },
  { name: 'Dec', value: 70 },
];

// USDX Icon Component
function UsdxIcon() {
  return (
    <div className="relative size-[20px] shrink-0">
      <div className="absolute inset-0 bg-[#6952fe] rounded-full overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-full">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
                <stop offset="0.1358" stopColor="#646464" />
                <stop offset="0.7046" stopColor="#484848" />
                <stop offset="0.7248" stopColor="#434343" />
                <stop offset="0.7498" stopColor="#333333" />
                <stop offset="0.7623" stopColor="#292929" />
                <stop offset="0.7778" stopColor="#4A4A4A" />
                <stop offset="0.8078" stopColor="#515151" />
                <stop offset="0.8125" stopColor="#515151" />
                <stop offset="0.9109" stopColor="#4A4A4A" />
                <stop offset="0.949" stopColor="#494949" />
                <stop offset="0.9599" stopColor="#535353" />
                <stop offset="0.9806" stopColor="#606060" />
                <stop offset="1" stopColor="#646464" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-[29.17%] right-[27.85%] top-1/2 -translate-y-1/2 aspect-[10.31601619720459/14]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g>
              <path d={svgPaths.p31b83100} fill="white" />
              <path d={svgPaths.p373feec0} fill="white" />
              <path d={svgPaths.p1b30c8c0} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Cash Icon
function CashIcon() {
  return (
    <div className="relative w-[20px] h-[14px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g clipPath="url(#clip0_608_2540)">
          <path d={svgPaths.p31717f32} fill="#21832D" />
          <path d={svgPaths.p6152c80} fill="#3AB549" />
          <path d={svgPaths.p10cf0840} fill="#92FF04" />
          <path d={svgPaths.p2aaebe80} fill="#3AB549" />
        </g>
        <defs>
          <clipPath id="clip0_608_2540">
            <rect fill="white" height="14" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// PnL Up Arrow Icon
function PnlUpIcon() {
  return (
    <div className="relative w-[14px] h-[9px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
        <g clipPath="url(#clip0_608_2633)">
          <path d="M7 0.125L14 8.875H0L7 0.125Z" fill="#218358" />
        </g>
        <defs>
          <clipPath id="clip0_608_2633">
            <rect fill="white" height="9" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function PositionsCard({
  todayValue = "$47.5",
  greenBadgeValue = "$34.8",
  positionValue = "1,000,000",
  positionValueDecimals = ".00",
  openOrdersValue = "1,000,000",
  openOrdersDecimals = ".00",
  realizedPL = "$-107.24",
  activePositions = 3,
  openOrdersCount = 5,
  completedCount = 12,
  chartData = defaultChartData
}: PositionsCardProps) {
  return (
    <div 
      className="flex flex-col gap-[24px] h-full"
      style={{
        background: 'var(--card-gradient)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        padding: '20px',
        boxShadow: 'var(--shadow-1)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-[8px]">
        <div className="p-[2px] size-[32px] flex items-center justify-center bg-[var(--black-a1)] rounded-full">
          <TrendingUp className="w-5 h-5 text-[var(--card-foreground)]" />
        </div>
        <h2 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-semi-bold)',
            fontSize: 'var(--text-2xl)',
            lineHeight: '32px',
            letterSpacing: '-0.144px',
            color: 'var(--card-foreground)'
          }}
        >
          Positions
        </h2>
      </div>

      {/* Main Content - Two Columns */}
      <div 
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}
      >
        {/* Left Column - Position Stats */}
        <div 
          style={{
            flex: '1 1 0px',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {/* Today Value Section */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                width: '84px'
              }}
            >
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-s)',
                  lineHeight: '20px',
                  color: 'var(--muted-foreground)'
                }}
              >
                Today Value
              </p>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  fontSize: 'var(--text-3xl)',
                  lineHeight: '40px',
                  letterSpacing: '-0.225px',
                  color: 'var(--card-foreground)'
                }}
              >
                {todayValue}
              </p>
            </div>
            
            {/* Green Badge */}
            <div className="bg-[rgba(34,197,94,0.2)] rounded-[9999px] px-[8px] py-[4px] flex items-center gap-[8px] w-[84px]">
              <CashIcon />
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  fontSize: 'var(--text-s)',
                  lineHeight: '20px',
                  color: 'var(--card-foreground)'
                }}
              >
                {greenBadgeValue}
              </p>
            </div>
          </div>

          {/* Position Details */}
          <div className="flex flex-col gap-[8px]">
            {/* Position Value Row */}
            <div 
              className="px-[14px] py-[6px] flex items-center justify-between"
              style={{
                borderRadius: '0.5rem',
                border: '1px solid var(--border)',
                background: 'var(--popover)',
              }}
            >
              <div className="flex items-center gap-[4px]">
                <div className="size-[16px] p-px flex items-center justify-center">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p1426c1f0} fill="#3358D4" />
                  </svg>
                </div>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-s)',
                    lineHeight: '20px',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Position value
                </p>
              </div>
              
              <div className="flex items-center gap-[2px]">
                <UsdxIcon />
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-s)',
                    lineHeight: '24px'
                  }}
                >
                  <span style={{ color: 'var(--card-foreground)' }}>{positionValue}</span>
                  <span style={{ color: 'var(--muted-foreground)' }}>{positionValueDecimals}</span>
                </div>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-normal)',
                    fontSize: 'var(--text-s)',
                    lineHeight: '24px',
                    color: 'var(--muted-foreground)',
                    marginLeft: '2px'
                  }}
                >
                  USDX
                </p>
              </div>
            </div>

            {/* Open Orders Row */}
            <div 
              className="px-[14px] py-[6px] flex items-center justify-between"
              style={{
                borderRadius: '0.5rem',
                border: '1px solid var(--border)',
                background: 'var(--popover)',
              }}
            >
              <div className="flex items-center gap-[4px]">
                <div className="size-[16px] p-px flex items-center justify-center">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p1426c1f0} fill="#D6409F" />
                  </svg>
                </div>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-s)',
                    lineHeight: '20px',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Open Orders
                </p>
              </div>
              
              <div className="flex items-center gap-[2px]">
                <UsdxIcon />
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-s)',
                    lineHeight: '24px'
                  }}
                >
                  <span style={{ color: 'var(--card-foreground)' }}>{openOrdersValue}</span>
                  <span style={{ color: 'var(--muted-foreground)' }}>{openOrdersDecimals}</span>
                </div>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-normal)',
                    fontSize: 'var(--text-s)',
                    lineHeight: '24px',
                    color: 'var(--muted-foreground)',
                    marginLeft: '2px'
                  }}
                >
                  USDX
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - P/L Chart */}
        <div 
          style={{
            flex: '1 1 0px',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {/* Header with Time Periods */}
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-[8px]">
              <PnlUpIcon />
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: '16px',
                  color: 'var(--muted-foreground)'
                }}
              >
                Realized PROFIT/LOSS
              </p>
              <Info className="size-[16px]" strokeWidth={1.33} style={{ color: 'var(--muted-foreground)' }} />
            </div>
            
            <div className="flex gap-[4px]">
              {['1D', '1W', '1M', '1Y'].map((period) => (
                <button
                  key={period}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-xs)',
                    lineHeight: '20px',
                    color: period === '1Y' ? 'white' : 'var(--card-foreground)',
                    background: period === '1Y' ? 'var(--violet-11)' : 'var(--lum-02)',
                    border: '1px solid var(--black-a1)',
                    borderRadius: '9999px',
                    padding: '4px 12px',
                    boxShadow: 'var(--shadow-4)',
                  }}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* P/L Value */}
          <div className="h-[36px]">
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-semi-bold)',
                fontSize: 'var(--text-3xl)',
                lineHeight: '40px',
                letterSpacing: '-0.225px',
                color: 'var(--card-foreground)'
              }}
            >
              {realizedPL}
            </p>
          </div>

          {/* Past Day Label */}
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--text-xs)',
              lineHeight: '20px',
              color: 'var(--lum-10)'
            }}
          >
            Past Day
          </p>

          {/* Chart */}
          <div className="w-full h-[131px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="16.5679" x2="0" y2="130" gradientUnits="userSpaceOnUse">
                    <stop offset="0.05" stopColor="#30A46C" />
                    <stop offset="0.95" stopColor="#E6F6EB" />
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#218358" 
                  fillOpacity={0.4} 
                  fill="url(#colorValue)" 
                  strokeWidth={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-start justify-between w-full">
        <p 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            fontSize: 'var(--text-s)',
            lineHeight: '24px',
            color: 'var(--muted-foreground)'
          }}
        >
          <span>{activePositions} Active Positions</span>
          <span style={{ color: 'var(--black-a2)' }}>  | </span>
          <span> {openOrdersCount} Open Orders  </span>
          <span style={{ color: 'var(--black-a2)' }}>| </span>
          <span> {completedCount} Completed</span>
        </p>
        
        <button className="flex items-center gap-[6px] px-[4px] py-0 rounded-[8px]">
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--text-s)',
              lineHeight: '24px',
              color: 'var(--iris-9)'
            }}
          >
            All Positions
          </p>
          <div className="size-[16px] p-px flex items-center justify-center">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p29167480} stroke="var(--iris-9)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import svgPaths from '../../imports/svg-xmhqcyrkl6';
import { Button } from '@/components/ui/button';

interface WalletCardProps {
  availableFunds?: string;
  withdrawableBalance?: string;
  walletAddress?: string;
  usdxBalance?: string;
  usdxDecimals?: string;
  xefBalance?: string;
  xefDecimals?: string;
}

// Wallet Icon Component
function WalletIcon() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g>
          <path d={svgPaths.p1cbf6000} stroke="var(--slate-950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p10779400} stroke="var(--slate-950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

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

// XEF Icon Component
function XefIcon() {
  return (
    <div className="relative size-[20px] shrink-0">
      <div className="absolute inset-0 bg-[#0d9b8a] rounded-full overflow-hidden">
        <div className="absolute inset-[30.83%_20.83%_30.43%_20.83%]">
          <div className="absolute inset-[46.1%_45.93%_45.77%_45.94%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46298 1.46255">
              <path d={svgPaths.p20f0e780} fill="#51CEB6" />
            </svg>
          </div>
          <div className="absolute inset-[30.83%_53.98%_37.49%_20.83%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53359 5.70108">
              <path d={svgPaths.p1c118b80} fill="#96EDE0" />
            </svg>
          </div>
          <div className="absolute inset-[37.9%_20.83%_30.43%_53.98%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53359 5.70108">
              <path d={svgPaths.p7177280} fill="#51CEB6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// External Link Icon
function ExternalLinkIcon() {
  return (
    <div className="relative w-[16px] h-[16px] shrink-0">
      <div className="absolute inset-[0_-53.57%_-53.57%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g>
            <path d="M15 3H21V9" stroke="var(--slate-950)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14L21 3" stroke="var(--slate-950)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1f4c3d00} stroke="var(--slate-950)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Plus Icon
function PlusIcon() {
  return (
    <div className="relative size-[20px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d="M3.75 9H14.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 3.75V14.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

// Circle Arrow Icon
function CircleArrowIcon() {
  return (
    <div className="relative size-[20px] shrink-0">
      <div className="absolute inset-[0_-25%_-25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
          <g>
            <path d={svgPaths.p20f3b6c0} stroke="var(--slate-900)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L12 12" stroke="var(--slate-900)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2H22V8" stroke="var(--slate-950)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Chevron Right Icon
function ChevronRightIcon() {
  return (
    <div className="relative size-[16px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.p29167480} stroke="#6952FE" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

export function WalletCard({
  availableFunds = "$1,240.50",
  withdrawableBalance = "$450.00",
  walletAddress = "0x4152...2oddea",
  usdxBalance = "26,210",
  usdxDecimals = ".020912",
  xefBalance = "26,210",
  xefDecimals = ".020912"
}: WalletCardProps) {
  return (
    <div 
      className="flex flex-col gap-[24px] h-full"
      style={{
        background: 'var(--lum-02)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-card)',
        padding: '24px',
        boxShadow: 'var(--shadow-1)',
        maxWidth: '360px',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-[4px]">
        <div className="p-[2px] size-[32px] flex items-center justify-center">
          <WalletIcon />
        </div>
        <h2 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-semi-bold)',
            fontSize: 'var(--text-2xl)',
            lineHeight: '32px',
            letterSpacing: '-0.144px',
            color: 'var(--foreground)'
          }}
        >
          Wallet
        </h2>
      </div>

      {/* Available Funds Section */}
      <div className="flex flex-col gap-[4px]">
        <p 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            fontSize: 'var(--text-s)',
            lineHeight: '20px',
            color: 'var(--gray-10)'
          }}
        >
          Available Funds
        </p>
        <p 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-semi-bold)',
            fontSize: 'var(--text-3xl)',
            lineHeight: '40px',
            letterSpacing: '-0.225px',
            color: 'var(--foreground)'
          }}
        >
          {availableFunds}
        </p>
        <p 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            fontSize: 'var(--text-s)',
            lineHeight: '20px',
            color: 'var(--gray-10)'
          }}
        >
          Withdrawable Balance: {withdrawableBalance}
        </p>
      </div>

      {/* Deposit and Withdraw Buttons - Mobile Friendly */}
      <div 
        style={{
          display: 'flex',
          gap: '12px',
          width: '100%',
          flexWrap: 'wrap'
        }}
      >
        {/* Deposit Button */}
        <Button 
          variant="primary" 
          size="sm"
          style={{
            flex: '1 1 140px',
            padding: '8px 14px',
            fontSize: 'var(--text-s)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '24px',
          }}
        >
          <PlusIcon />
          Deposit
        </Button>

        {/* Withdraw Button */}
        <Button 
          variant="secondary" 
          size="sm"
          style={{
            flex: '1 1 140px',
            padding: '8px 12px',
            fontSize: 'var(--text-s)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '24px',
          }}
        >
          <CircleArrowIcon />
          Withdraw
        </Button>
      </div>


      {/* Wallet Address and Balance Section */}
      <div className="flex gap-[14px] items-start w-full">
        <div className="flex-1 flex flex-col gap-[14px] min-w-0">
          {/* Wallet Address */}
          <div className="flex flex-col gap-[4px]">
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-medium)',
                fontSize: 'var(--text-s)',
                lineHeight: '20px',
                color: 'var(--gray-10)'
              }}
            >
              Wallet address:
            </p>
            <div className="flex items-center gap-[4px]">
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-s)',
                  lineHeight: '24px',
                  color: 'var(--card-foreground)'
                }}
              >
                {walletAddress}
              </p>
              <ExternalLinkIcon />
            </div>
          </div>

          {/* Balance */}
          <div className="flex flex-col gap-[4px]">
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-medium)',
                fontSize: 'var(--text-s)',
                lineHeight: '20px',
                color: 'var(--gray-10)'
              }}
            >
              Balance:
            </p>
            <div className="flex flex-col gap-[4px]">
              {/* USDX */}
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
                  <span style={{ color: 'var(--card-foreground)' }}>{usdxBalance}</span>
                  <span style={{ color: 'var(--lum-11)' }}>{usdxDecimals}</span>
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

              {/* XEF */}
              <div className="flex items-center gap-[2px]">
                <XefIcon />
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-s)',
                    lineHeight: '24px'
                  }}
                >
                  <span style={{ color: 'var(--card-foreground)' }}>{xefBalance}</span>
                  <span style={{ color: 'var(--lum-11)' }}>{xefDecimals}</span>
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
                  XEF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Link */}
      <button 
        className="flex items-center gap-[6px] justify-center px-[4px] py-0 rounded-[8px]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'var(--font-weight-medium)',
          fontSize: 'var(--text-s)',
          lineHeight: '24px',
          color: '#6952fe'
        }}
      >
        Transaction History
        <ChevronRightIcon />
      </button>
    </div>
  );
}
import React, { useState } from 'react';
import { Calendar, Flame } from 'lucide-react';
import { CopyLinkInput } from '../ui/CopyLinkInput';
import { VestingProgressCard } from './VestingProgressCard';
import { RefundCard } from './RefundCard';
import { StatusBadge } from './StatusBadge';
import { PresaleStateInfo } from './PresaleStateInfo';
import { PrimaryButton } from '../PrimaryButton';
import { RiveAnimation } from '../ui/rive-animation';
import type { PresaleState, VestingSchedule, ResolutionOutcome } from '../../data/presaleMarketsData';

interface PresaleDetailRightColumnProps {
  presaleState: PresaleState;
  viewerRole: 'creator' | 'investor-joined' | 'investor-not-joined';
  marketId: string;
  status: string;
  contractAddress: string;
  marketType: 'Yes/No' | 'Multi-Outcome';
  resolutionDate: string;
  createdDate: string;
  timeRemaining: { hours: number; minutes: number; seconds: number };
  vestingSchedule?: VestingSchedule;
  resolutionOutcome?: ResolutionOutcome;
  userInvestment?: number;
  refundClaimed?: boolean;
  onClaimRefund?: () => void;
  isDarkMode?: boolean;
}

export function PresaleDetailRightColumn({
  presaleState,
  viewerRole,
  marketId,
  status,
  contractAddress,
  marketType,
  resolutionDate,
  createdDate,
  timeRemaining,
  vestingSchedule,
  resolutionOutcome,
  userInvestment,
  refundClaimed,
  onClaimRefund,
  isDarkMode,
}: PresaleDetailRightColumnProps) {
  const [amount, setAmount] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const copyToClipboard = (text: string) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch(() => {
            fallbackCopyTextToClipboard(text);
          });
      } else {
        fallbackCopyTextToClipboard(text);
      }
    };

    const fallbackCopyTextToClipboard = (text: string) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '-999999px';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }

      document.body.removeChild(textArea);
    };

    copyToClipboard(`xmarket.app/presale/id${marketId}`);
  };

  const handleMaxClick = () => {
    setAmount('1000');
  };

  return (
    <div 
      className="lg:col-span-1"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--2rem)',
      }}
    >
      {/* Conditional Top Card based on state */}
      {presaleState === 'PRESALE_ACTIVE' && (
        <div
          style={{
            background: 'linear-gradient(180deg, var(--green-3, #E6F6EB) 0%, var(--green-5, #C4E8D1) 100%)',
            border: '1px solid var(--green-6)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--2rem)',
          }}
        >
          <div 
            className="flex"
            style={{ 
              marginBottom: 'var(--gap--1-5rem)',
              gap: 'var(--gap--0-75rem)',
            }}
          >
            {/* Left Column - Video (replacing Rive temporarily) */}
            <div 
              style={{ 
                width: '96px', 
                height: '96px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'visible',
                position: 'relative',
              }}
            >
              <video
                key={isDarkMode ? 'dark-video' : 'light-video'}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  mixBlendMode: isDarkMode ? 'lighten' : 'darken',
                  transform: 'scale(1.1)',
                }}
              >
                <source 
                  src={isDarkMode 
                    ? "https://github.com/chonshaman/riv_store/raw/8a71b9788efa94794f2733b962faaaaa45a6fdd2/rive/0126dark.webm"
                    : "https://github.com/chonshaman/riv_store/raw/94ebd6f746674d9885ed778a2dffa3fd123d1f16/rive/0126ax.webm"
                  } 
                  type="video/webm" 
                />
              </video>
            </div>

            {/* Right Column - Label and Time */}
            <div className="flex flex-col" style={{ justifyContent: 'center' }}>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--green-11)',
                  marginBottom: 'var(--gap--0-25rem)',
                }}
              >
                SALE ENDS IN
              </span>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--green-12)',
                }}
              >
                {String(timeRemaining.hours).padStart(2, '0')}:{String(timeRemaining.minutes).padStart(2, '0')}:{String(timeRemaining.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--gap--1rem)' }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 'var(--gap--0-5rem)' }}>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: '#2D5F3F',
                }}
              >
                Amount:
              </span>
              <button
                onClick={handleMaxClick}
                className="transition-colors duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: '#1A4027',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Max
              </button>
            </div>
            
            <div
              className="flex items-center"
              style={{
                gap: 'var(--gap--0-5rem)',
                padding: 'var(--gap--0-75rem)',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--green-6)',
                borderRadius: 'var(--radius-input)',
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#2D5F3F',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '12px', color: '#FFFFFF' }}>$</span>
              </div>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: '#1A4027',
                }}
              />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: '#6B9B7A',
                }}
              >
                USDX
              </span>
            </div>
          </div>

          <PrimaryButton
            style={{
              width: '100%',
            }}
          >
            BUY
          </PrimaryButton>
        </div>
      )}

      {/* Vesting Progress Card - only show for MARKET_LIVE and MARKET_RESOLVED states for investor-joined */}
      {(presaleState === 'MARKET_LIVE' || presaleState === 'MARKET_RESOLVED') && viewerRole === 'investor-joined' && vestingSchedule && (
        <VestingProgressCard
          vesting={vestingSchedule}
          onClaim={() => console.log('Claiming unlocked shares...')}
        />
      )}

      {/* Presale State Info Banner - hide if presale failed (refund card replaces it) */}
      {presaleState !== 'PRESALE_FAILED' && (
        <PresaleStateInfo
          state={presaleState}
          resolutionOutcome={resolutionOutcome}
          viewerRole={viewerRole}
        />
      )}

      {/* Refund Card - Shows instead of state info when presale failed */}
      {presaleState === 'PRESALE_FAILED' && (
        <RefundCard
          userRole={viewerRole}
          refundAmount={userInvestment || 500}
          onClaimRefund={onClaimRefund}
          refundClaimed={refundClaimed}
        />
      )}

      {/* Market Details Section */}
      <div
        style={{
          backgroundColor: 'var(--card-normal)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--2rem)',
        }}
      >
        <h3
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--card-foreground)',
            marginBottom: 'var(--gap--1-5rem)',
          }}
        >
          Market Details
        </h3>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--gap--1rem)',
          }}
        >
          {/* Status Badge */}
          <div>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                display: 'block',
                marginBottom: 'var(--gap--0-5rem)',
              }}
            >
              Status:
            </span>
            <StatusBadge status={status as any} />
          </div>

          {/* Contract Address */}
          <div>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                display: 'block',
                marginBottom: 'var(--gap--0-5rem)',
              }}
            >
              Market Contract Address:
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--card-foreground)',
                wordBreak: 'break-all',
              }}
            >
              {contractAddress}
            </span>
          </div>

          {/* Market Type */}
          <div>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                display: 'block',
                marginBottom: 'var(--gap--0-5rem)',
              }}
            >
              Market Type:
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--card-foreground)',
              }}
            >
              {marketType}
            </span>
          </div>

          {/* Presale End Date */}
          <div>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                display: 'block',
                marginBottom: 'var(--gap--0-5rem)',
              }}
            >
              Presale End Date:
            </span>
            <div className="flex items-center" style={{ gap: 'var(--gap--0-25rem)' }}>
              <Calendar 
                style={{
                  width: '14px',
                  height: '14px',
                  color: 'var(--muted-foreground)',
                }}
              />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--card-foreground)',
                }}
              >
                {resolutionDate}
              </span>
            </div>
          </div>

          {/* Created On */}
          <div>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
                display: 'block',
                marginBottom: 'var(--gap--0-5rem)',
              }}
            >
              Created On:
            </span>
            <div className="flex items-center" style={{ gap: 'var(--gap--0-25rem)' }}>
              <Calendar 
                style={{
                  width: '14px',
                  height: '14px',
                  color: 'var(--muted-foreground)',
                }}
              />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--card-foreground)',
                }}
              >
                {createdDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Share Presale Section */}
      <div
        style={{
          backgroundColor: 'var(--card-normal)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--2rem)',
        }}
      >
        <h3
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--card-foreground)',
            marginBottom: 'var(--gap--1-5rem)',
          }}
        >
          Share Presale
        </h3>

        {/* Copy Link */}
        <div style={{ marginBottom: 'var(--gap--1-5rem)' }}>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              display: 'block',
              marginBottom: 'var(--gap--0-5rem)',
            }}
          >
            Copy Link:
          </span>
          
          <CopyLinkInput
            link={`xmarket.app/presale/id${marketId}`}
            copied={copied}
            onCopy={handleCopyLink}
          />
        </div>

        {/* Social Share */}
        <div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              display: 'block',
              marginBottom: 'var(--gap--0-75rem)',
            }}
          >
            Share to social:
          </span>
          
          <div className="flex items-center" style={{ gap: 'var(--gap--0-75rem)' }}>
            <button
              className="transition-all duration-200"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--lum-02)',
                border: '1px solid var(--black-a2)',
                borderRadius: 'var(--radius-input)',
                cursor: 'pointer',
                color: 'var(--card-foreground)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--lum-03)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--lum-02)'}
            >
              <Flame 
                style={{
                  width: '20px',
                  height: '20px',
                  color: 'var(--orange-9)',
                }}
              />
            </button>
            
            <button
              className="transition-all duration-200"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--lum-02)',
                border: '1px solid var(--black-a2)',
                borderRadius: 'var(--radius-input)',
                cursor: 'pointer',
                color: 'var(--card-foreground)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--lum-03)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--lum-02)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </button>
            
            <button
              className="transition-all duration-200"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--lum-02)',
                border: '1px solid var(--black-a2)',
                borderRadius: 'var(--radius-input)',
                cursor: 'pointer',
                color: 'var(--card-foreground)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--lum-03)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--lum-02)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
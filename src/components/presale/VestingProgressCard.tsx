import React, { useState, useEffect } from 'react';
import { Clock, Unlock } from 'lucide-react';
import type { VestingSchedule } from '../../data/presaleMarketsData';

interface VestingProgressCardProps {
  vesting: VestingSchedule;
  onClaim?: () => void;
}

export function VestingProgressCard({ vesting, onClaim }: VestingProgressCardProps) {
  const [timeUntilNext, setTimeUntilNext] = useState('');
  
  // Calculate time until next unlock
  useEffect(() => {
    if (!vesting.nextUnlockTime) {
      setTimeUntilNext('Fully unlocked');
      return;
    }
    
    const updateTimer = () => {
      const now = new Date();
      const diff = vesting.nextUnlockTime!.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeUntilNext('Ready to claim');
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeUntilNext(`${hours}h ${minutes}m ${seconds}s`);
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [vesting.nextUnlockTime]);
  
  const vestingProgress = (vesting.unlockedShares / vesting.totalShares) * 100;
  const canClaim = vesting.unlockedShares > 0;
  
  return (
    <div
      style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: 'var(--gap--1-5rem)' }}>
        <h3
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--card-foreground)',
            margin: 0,
          }}
        >
          Your Presale Shares
        </h3>
        
        {vesting.lockedShares > 0 && (
          <div 
            className="flex items-center"
            style={{
              gap: 'var(--gap--0-5rem)',
              padding: '4px 12px',
              backgroundColor: 'var(--orange-3)',
              border: '1px solid var(--orange-6)',
              borderRadius: 'var(--radius-input)',
            }}
          >
            <Clock style={{ width: '14px', height: '14px', color: 'var(--orange-9)' }} />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--orange-9)',
              }}
            >
              Vesting
            </span>
          </div>
        )}
      </div>
      
      {/* Shares Summary */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--gap--1rem)',
          marginBottom: 'var(--gap--1-5rem)',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              display: 'block',
              marginBottom: 'var(--gap--0-25rem)',
            }}
          >
            Total Shares
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--card-foreground)',
            }}
          >
            {vesting.totalShares.toLocaleString()}
          </span>
        </div>
        
        <div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              display: 'block',
              marginBottom: 'var(--gap--0-25rem)',
            }}
          >
            Unlocked
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--green-9)',
            }}
          >
            {vesting.unlockedShares.toLocaleString()}
          </span>
        </div>
        
        <div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              display: 'block',
              marginBottom: 'var(--gap--0-25rem)',
            }}
          >
            Locked
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--orange-9)',
            }}
          >
            {vesting.lockedShares.toLocaleString()}
          </span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div style={{ marginBottom: 'var(--gap--1rem)' }}>
        <div 
          className="flex items-center justify-between"
          style={{ marginBottom: 'var(--gap--0-5rem)' }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
            }}
          >
            Vesting Progress
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--card-foreground)',
            }}
          >
            {vestingProgress.toFixed(1)}%
          </span>
        </div>
        
        <div
          style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'var(--gray-3)',
            borderRadius: '9999px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${vestingProgress}%`,
              height: '100%',
              backgroundColor: 'var(--green-9)',
              borderRadius: '9999px',
              transition: 'width 0.3s ease-out',
            }}
          />
        </div>
      </div>
      
      {/* Next Unlock Info */}
      {vesting.lockedShares > 0 && (
        <div
          style={{
            padding: 'var(--gap--1rem)',
            backgroundColor: 'var(--lum-02)',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--radius-input)',
            marginBottom: 'var(--gap--1rem)',
          }}
        >
          <div className="flex items-center justify-between">
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--muted-foreground)',
              }}
            >
              Next unlock in:
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--card-foreground)',
              }}
            >
              {timeUntilNext}
            </span>
          </div>
        </div>
      )}
      
      {/* Claim Button */}
      {canClaim && (
        <button
          onClick={onClaim}
          className="transition-all duration-200"
          style={{
            width: '100%',
            padding: 'var(--gap--0-75rem)',
            backgroundColor: vesting.lockedShares === 0 ? 'var(--green-9)' : 'var(--iris-9)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 'var(--radius-input)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semibold)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--gap--0-5rem)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = vesting.lockedShares === 0 ? 'var(--green-10)' : 'var(--iris-10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = vesting.lockedShares === 0 ? 'var(--green-9)' : 'var(--iris-9)';
          }}
        >
          <Unlock style={{ width: '18px', height: '18px' }} />
          <span>
            {vesting.lockedShares === 0 
              ? 'Claim All Shares' 
              : `Claim ${vesting.unlockedShares.toLocaleString()} Unlocked Shares`
            }
          </span>
        </button>
      )}
      
      {/* Vesting Info */}
      <div style={{ marginTop: 'var(--gap--1rem)' }}>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-normal)',
            color: 'var(--muted-foreground)',
            lineHeight: '1.5',
            margin: 0,
          }}
        >
          Your presale shares unlock gradually over {vesting.vestingDurationHours} hours to prevent market dumping. 
          Claimed shares become standard tradable shares.
        </p>
      </div>
    </div>
  );
}

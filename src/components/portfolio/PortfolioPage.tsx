import React from 'react';
import { PortfolioHeader } from './PortfolioHeader';
import { PositionsCard } from './PositionsCard';
import { WalletCard } from './WalletCard';
import { ReferralsCard } from './ReferralsCard';
import { StakingCard } from './StakingCard';

export function PortfolioPage() {
  return (
    <div className="flex flex-col gap-[var(--gap--2rem)] w-full max-w-[1280px] mx-auto p-[var(--gap--1-5rem)]">
      <PortfolioHeader />
      
      {/* Top Row: Positions & Wallet */}
      <div className="flex flex-col lg:flex-row gap-[var(--gap--1-5rem)]">
        <div className="flex-1 min-w-0">
          <PositionsCard />
        </div>
        <div className="w-full lg:w-[408px] shrink-0">
          <WalletCard />
        </div>
      </div>

      {/* Bottom Row: Referrals & Staking */}
      <div className="flex flex-col lg:flex-row gap-[var(--gap--1-5rem)]">
        <div className="flex-1 min-w-0">
          <ReferralsCard />
        </div>
        <div className="w-full lg:w-[408px] shrink-0">
          <StakingCard />
        </div>
      </div>
    </div>
  );
}

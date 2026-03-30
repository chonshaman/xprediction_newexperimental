import React from 'react';
import { Coins, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StakingCardProps {
  stakedAmount?: string;
  remainingQuestions?: number;
  totalQuota?: number;
  alreadyCreated?: number;
}

export function StakingCard({
  stakedAmount = "0",
  remainingQuestions = 2,
  totalQuota = 3,
  alreadyCreated = 1
}: StakingCardProps) {
  return (
    <div 
      className="flex flex-col h-full"
      style={{
        background: 'var(--card-gradient2)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-xl)',
        padding: '20px',
        boxShadow: 'var(--shadow-1)',
        maxWidth: '360px',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-[8px] mb-[var(--gap--1-5rem)]">
        <div className="p-[2px] size-[32px] flex items-center justify-center bg-[var(--black-a1)] rounded-full">
          <Coins className="w-5 h-5 text-[var(--card-foreground)]" />
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
          Staking
        </h2>
      </div>

      {/* Staked Amount & Actions */}
      <div className="flex items-center justify-between mb-[var(--gap--1-5rem)]">
        <div className="flex flex-col">
          <span className="text-[var(--text-sm)] text-[var(--muted-foreground)] mb-1">Staked</span>
          <div className="flex items-center gap-1">
             <div className="w-5 h-5 rounded-full bg-[#0D9B8A] flex items-center justify-center shrink-0">
                <span className="text-[8px] text-white font-bold">X</span>
             </div>
             <span className="text-[var(--text-lg)] font-semibold text-[var(--card-foreground)]">{stakedAmount}</span>
          </div>
        </div>
        <div className="flex gap-2">
           <Button variant="secondary" size="sm">
             Stake
           </Button>
           <Button variant="outline" size="sm">
             Unstake
           </Button>
        </div>
      </div>

      <div className="h-px bg-[var(--black-a1)] mb-[var(--gap--1-5rem)]" />

      {/* Info Text */}
      <div className="mb-[var(--gap--1-5rem)]">
        <p 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-normal)',
            fontSize: 'var(--text-s)',
            lineHeight: '20px',
            color: 'var(--gray-10)',
            marginBottom: '16px'
          }}
        >
          With XEF, you're not just a trader, you're a creator. Propose your own markets, bring your ideas to life, and earn rewards from trading fees and market revenue.
        </p>
        <ul 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-normal)',
            fontSize: 'var(--text-s)',
            lineHeight: '20px',
            color: 'var(--gray-10)',
            paddingLeft: '16px',
            listStyleType: 'disc',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <li>
            Stake <span className="font-medium text-[var(--card-foreground)]">100 XEF</span> to create 1 market.
          </li>
          <li>
            Stake <span className="font-medium text-[var(--card-foreground)]">10,000 XEF</span> to create unlimited markets.
          </li>
        </ul>
      </div>

      <div className="h-px bg-[var(--black-a1)] mb-[var(--gap--1-5rem)] mt-auto" />

      {/* Quota Status */}
      <div className="p-4 bg-[var(--popover)] border border-[var(--border)] rounded-[0.75rem] shadow-sm">
         <div className="flex flex-col gap-2">
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-medium)',
                fontSize: 'var(--text-s)',
                lineHeight: '20px',
                color: 'var(--gray-10)'
              }}
            >
              Your remaining questions:
            </span>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                 <span className="text-[var(--text-xl)] font-semibold text-[var(--card-foreground)]">{remainingQuestions}</span>
                 <span className="text-[var(--text-sm)] text-[var(--muted-foreground)]">/{totalQuota}</span>
              </div>
              
              <div className="group relative">
                 <HelpCircle className="w-5 h-5 text-[var(--muted-foreground)] cursor-help" />
                 {/* Tooltip */}
                 <div className="absolute bottom-full right-0 mb-2 w-48 p-3 bg-white border border-[var(--black-a1)] rounded-[var(--radius-card)] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 hidden group-hover:block">
                    <div className="space-y-2 text-[var(--text-sm)]">
                       <div className="flex justify-between">
                         <span className="text-[var(--muted-foreground)]">Total Quota:</span>
                         <span className="font-medium">{totalQuota}</span>
                       </div>
                       <div className="flex justify-between">
                         <span className="text-[var(--muted-foreground)]">Already Created:</span>
                         <span className="font-medium">{alreadyCreated}</span>
                       </div>
                       <div className="flex justify-between border-t border-[var(--black-a1)] pt-2 mt-1">
                         <span className="text-[var(--muted-foreground)]">Remaining:</span>
                         <span className="font-medium">{remainingQuestions}</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}
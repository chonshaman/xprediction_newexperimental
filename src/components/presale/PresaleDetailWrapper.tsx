import React from 'react';
import { PresaleDetailPage } from './PresaleDetailPage';
import type { PresaleMarket } from '../../data/presaleMarketsData';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

interface PresaleDetailWrapperProps {
  market: PresaleMarket;
  onBack?: () => void;
  isDarkMode?: boolean;
}

/**
 * Wrapper component that adapts PresaleMarket data structure
 * to PresaleDetailPage props
 */
export function PresaleDetailWrapper({ market, onBack, isDarkMode }: PresaleDetailWrapperProps) {
  // Calculate end date from days/hours/minutes
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + market.endingDays);
  endDate.setHours(endDate.getHours() + market.endingHours);
  endDate.setMinutes(endDate.getMinutes() + market.endingMinutes);

  return (
    <div>
      {/* Back Button */}
      {onBack && (
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            paddingLeft: 'var(--gap--2rem)',
            paddingRight: 'var(--gap--2rem)',
            paddingTop: 'var(--gap--1rem)',
          }}
        >
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--gap--0-5rem)',
            }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            <span>Back to Presales</span>
          </Button>
        </div>
      )}
      
      <PresaleDetailPage
        marketId={market.id.toString()}
        question={market.question}
        category={market.category}
        softcapProgress={market.softcapProgress}
        raised={market.raised}
        total={market.total}
        endDate={endDate}
        createdBy={market.createdBy}
        createdDate={market.createdDate}
        contractAddress={market.contractAddress}
        marketType={market.marketType}
        status={market.status}
        statusColor={market.statusColor}
        resolutionDate={market.resolutionDate}
        resolutionCriteria={market.resolutionCriteria}
        participants={market.participantsList}
        comments={market.comments}
        presaleState={market.state}
        viewerRole={market.viewerRole}
        vestingSchedule={market.viewerVesting}
        resolutionOutcome={market.resolutionOutcome}
        currentPrice={market.currentPrice}
        ammInitialPrice={market.ammInitialPrice}
        totalVolume={market.totalVolume}
        presaleSharePrice={market.presaleSharePrice}
        creatorStake={market.creatorStake}
        userInvestment={market.userInvestment}
        currentUserId={market.viewerRole === 'investor-joined' ? 'participant-1' : undefined}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
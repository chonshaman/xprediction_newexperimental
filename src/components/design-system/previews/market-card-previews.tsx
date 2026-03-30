/**
 * Market Card Preview Components
 */
import React, { useState } from 'react';
import { MarketCard } from '../../MarketCard';
import { EndingSoonMarketCard } from '../../EndingSoonMarketCard';
import { FeaturedMarketCard } from '../../hero/FeaturedMarketCard';
import { HomeMatchCard } from '../../sports/HomeMatchCard';
import { OutcomeButton } from '../../BuySellBlock/OutcomeButton';
import { AmountInput } from '../../BuySellBlock/AmountInput';
import { BuySellBlockNew } from '../../BuySellBlock/BuySellBlockNew';
import { featuredMarkets } from '../../../data/markets';
import { allMatches } from '../../../data/matches';

// ==================== Market Cards ====================
export function MarketCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
    }}>
      <MarketCard {...featuredMarkets[0]} />
    </div>
  );
}

export function EndingSoonCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
    }}>
      <EndingSoonMarketCard {...featuredMarkets[1]} />
    </div>
  );
}

export function FeaturedCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
      aspectRatio: '1 / 1.2',
    }}>
      <FeaturedMarketCard {...featuredMarkets[0]} />
    </div>
  );
}

export function HomeMatchCardDefault() {
  return (
    <div style={{ 
      width: '100%',
      maxWidth: '400px',
      minWidth: '280px',
    }}>
      <HomeMatchCard match={allMatches[0]} />
    </div>
  );
}

// ==================== Buy/Sell Components ====================
export function OutcomeButtonYesDefault() {
  return (
    <div style={{ width: '200px' }}>
      <OutcomeButton 
        outcome="yes" 
        percentage={67} 
        onClick={() => {}} 
      />
    </div>
  );
}

export function OutcomeButtonNoDefault() {
  return (
    <div style={{ width: '200px' }}>
      <OutcomeButton 
        outcome="no" 
        percentage={33} 
        onClick={() => {}} 
      />
    </div>
  );
}

export function AmountInputDefault() {
  return (
    <div style={{ width: '300px' }}>
      <AmountInput 
        value="100"
        onChange={() => {}}
        onBlur={() => {}}
        onFocus={() => {}}
      />
    </div>
  );
}

// ==================== Buy/Sell Block ====================
export function BuySellBlockBinaryDefault() {
  const [selectedOutcome, setSelectedOutcome] = useState('YES');
  const [amount, setAmount] = useState('');

  return (
    <div style={{ width: '100%', maxWidth: '460px' }}>
      <BuySellBlockNew
        selectedOutcome={selectedOutcome}
        onOutcomeChange={setSelectedOutcome}
        amount={amount}
        onAmountChange={setAmount}
        onBuy={() => console.log('Buy clicked')}
        marketPrices={{
          yesPrice: 0.67,
          noPrice: 0.33
        }}
        market={featuredMarkets[0]}
      />
    </div>
  );
}

export function BuySellBlockMultiOutcomeDefault() {
  const [selectedOutcome, setSelectedOutcome] = useState('TEAM_A');
  const [amount, setAmount] = useState('');

  // Create a multi-outcome market for preview
  const multiOutcomeMarket = {
    ...featuredMarkets[0],
    outcomes: [
      { id: 'TEAM_A', label: 'Team A Wins', percentage: 45, color: '#5b5bd6', icon: 'A' },
      { id: 'TEAM_B', label: 'Team B Wins', percentage: 35, color: '#e5484d', icon: 'B' },
      { id: 'DRAW', label: 'Draw', percentage: 20, color: '#f59e0b', icon: '=' }
    ]
  };

  return (
    <div style={{ width: '100%', maxWidth: '460px' }}>
      <BuySellBlockNew
        selectedOutcome={selectedOutcome}
        onOutcomeChange={setSelectedOutcome}
        amount={amount}
        onAmountChange={setAmount}
        onBuy={() => console.log('Buy clicked')}
        marketPrices={{
          yesPrice: 0.45,
          noPrice: 0.55
        }}
        market={multiOutcomeMarket}
      />
    </div>
  );
}

export function BuySellBlockSportsDefault() {
  const [selectedOutcome, setSelectedOutcome] = useState('MCI');
  const [amount, setAmount] = useState('');

  return (
    <div style={{ width: '100%', maxWidth: '460px' }}>
      <BuySellBlockNew
        selectedOutcome={selectedOutcome}
        onOutcomeChange={setSelectedOutcome}
        amount={amount}
        onAmountChange={setAmount}
        onBuy={() => console.log('Buy clicked')}
        marketPrices={{
          yesPrice: 0.58,
          noPrice: 0.42
        }}
        market={featuredMarkets[0]}
        matchInfo={{
          team1Name: 'Man City',
          team2Name: 'Liverpool',
          selectedTeamCode: 'MCI',
          selectedTeamName: 'Man City',
          teamIcon: '⚽',
          teamColor: '#5b5bd6'
        }}
      />
    </div>
  );
}
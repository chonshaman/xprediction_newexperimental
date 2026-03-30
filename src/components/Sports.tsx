import React, { useState } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import svgPaths from "../imports/svg-zzs9w3edlc";
import { MatchCard } from './sports/MatchCard';
import { BuySellBlockNew } from './BuySellBlock/BuySellBlockNew';
import type { Market, MarketOutcome } from '../data/markets';

// Sport icons as inline SVG components
function SoccerIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <g clipPath="url(#clip0_soccer)">
        <path d={svgPaths.p3c9100f0} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_soccer">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TennisIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <g clipPath="url(#clip0_tennis)">
        <path d={svgPaths.p1b3ef160} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_tennis">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BasketballIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <g clipPath="url(#clip0_basketball)">
        <path d={svgPaths.p29e7ce48} stroke="currentColor" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_basketball">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Mock match data
const mockMatches = [
  {
    league: 'Premier League',
    leagueIcon: '⚽',
    matches: [
      {
        id: 1,
        time: '23:00',
        date: 'Sat, Nov 22',
        volume: '308.59K',
        team1: { name: 'Arsenal', code: 'ARS', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#EF0107' },
        team2: { name: 'Chelsea', code: 'CHE', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#034694' },
        odds: { team1: '16', draw: '22', team2: '67' }
      },
      {
        id: 2,
        time: '23:00',
        date: 'Sat, Nov 22',
        volume: '308.59K',
        team1: { name: 'Chelsea', code: 'CHE', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#034694' },
        team2: { name: 'Crystal Palace', code: 'CRY', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#1B458F' },
        odds: { team1: '45', draw: '28', team2: '32' }
      },
      {
        id: 3,
        time: '20:30',
        date: 'Sat, Nov 22',
        volume: '256.43K',
        team1: { name: 'Brighton', code: 'BRI', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#0057B8' },
        team2: { name: 'Aston Villa', code: 'AST', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#670E36' },
        odds: { team1: '38', draw: '30', team2: '35' }
      },
      {
        id: 4,
        time: '18:00',
        date: 'Sat, Nov 22',
        volume: '192.78K',
        team1: { name: 'Leicester City', code: 'LEI', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#003090' },
        team2: { name: 'Wolverhampton', code: 'WOL', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#FDB913' },
        odds: { team1: '52', draw: '25', team2: '28' }
      }
    ]
  },
  {
    league: 'Ligue 1',
    leagueIcon: '⚽',
    matches: [
      {
        id: 5,
        time: '21:00',
        date: 'Sat, Nov 22',
        volume: '145.32K',
        team1: { name: 'PSG', code: 'PSG', flag: '🇫🇷', color: '#004170' },
        team2: { name: 'Marseille', code: 'MAR', flag: '🇫🇷', color: '#2FAEE0' },
        odds: { team1: '62', draw: '20', team2: '22' }
      }
    ]
  },
  {
    league: 'Bundesliga',
    leagueIcon: '⚽',
    matches: [
      {
        id: 6,
        time: '19:30',
        date: 'Sat, Nov 22',
        volume: '178.90K',
        team1: { name: 'Bayern Munich', code: 'BAY', flag: '🇩🇪', color: '#DC052D' },
        team2: { name: 'Dortmund', code: 'DOR', flag: '🇩🇪', color: '#FDE100' },
        odds: { team1: '55', draw: '24', team2: '26' }
      }
    ]
  },
  {
    league: 'Serie A',
    leagueIcon: '⚽',
    matches: []
  }
];

export function Sports() {
  const [activeTab, setActiveTab] = useState<'all' | 'live'>('all');
  const [selectedDate, setSelectedDate] = useState('13, Nov 2025');
  const [expandedLeagues, setExpandedLeagues] = useState<string[]>(['Premier League', 'Ligue 1', 'Bundesliga', 'Serie A']);
  
  // State for BuySellBlock
  const [selectedOutcome, setSelectedOutcome] = useState('');
  const [amount, setAmount] = useState('');
  
  // State for match selection - track which match + which button
  const [selectedMatchId, setSelectedMatchId] = useState<number | null>(null);
  const [selectedMatchOdds, setSelectedMatchOdds] = useState<'team1' | 'draw' | 'team2' | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<{
    team1Name: string;
    team2Name: string;
    selectedTeamCode: string;
    selectedTeamName?: string;
    teamIcon?: string;
    teamColor?: string;
  } | null>(null);

  const toggleLeague = (league: string) => {
    setExpandedLeagues(prev =>
      prev.includes(league)
        ? prev.filter(l => l !== league)
        : [...prev, league]
    );
  };

  const handleBuy = () => {
    // Handle buy action
    // In production, this would call an API
  };

  // Create a mock market for the BuySellBlock
  const mockSportsMarket: Market = {
    id: 'sports-match-1',
    image: '',
    category: { name: 'Sports', slug: 'sports' },
    date: 'Nov 22, 2025',
    endDate: new Date('2025-11-22'),
    question: 'Chelsea vs Crystal Palace - Who will win?',
    stats: {
      volume: 308590,
      volumeFormatted: '$308.59K',
      participants: 1234,
      participantsFormatted: '1.2K',
      comments: 89,
      commentsFormatted: '89',
    },
    prediction: {
      yesPercentage: 64,
      noPercentage: 36,
    },
    outcomes: [
      {
        id: 'CHE',
        label: 'Chelsea',
        percentage: 45,
        color: 'var(--blue-9)',
        icon: 'C'
      },
      {
        id: 'DRAW',
        label: 'Draw',
        percentage: 28,
        color: 'var(--gray-9)',
        icon: '⚖️'
      },
      {
        id: 'CRY',
        label: 'Crystal Palace',
        percentage: 32,
        color: 'var(--red-9)',
        icon: 'C'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}
      <div 
        className="sticky top-0 z-50"
        style={{ 
          background: 'var(--lum-01)',
          borderBottom: '1px solid var(--black-a2)'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div 
            className="flex items-center gap-6"
            style={{ padding: 'var(--gap--0-5rem) 0' }}
          >
            {/* Live */}
            <button 
              className="flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors"
              style={{
                color: 'var(--muted-foreground)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >
              <span>🔴</span>
              <span>Live</span>
            </button>

            <div style={{ width: '1px', height: '34px', background: 'var(--black-a2)' }} />

            {/* Football - Active */}
            <button 
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg"
              style={{
                background: 'var(--card-normal)',
                boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.04)',
                color: 'var(--card-foreground)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >
              <div style={{ width: '20px', height: '20px' }}>
                <SoccerIcon />
              </div>
              <span>Football</span>
              <ChevronDown style={{ width: '16px', height: '16px' }} />
            </button>

            {/* Other Sports */}
            {['Tennis', 'Basketball', 'Esports', 'Golf', 'Volleyball', 'Badminton', 'Racing', 'Boxing'].map((sport) => (
              <button
                key={sport}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors hover:bg-opacity-50"
                style={{
                  color: 'var(--muted-foreground)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                <span>{sport}</span>
              </button>
            ))}

            {/* More */}
            <button 
              className="flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors"
              style={{
                color: 'var(--muted-foreground)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >
              <span>More</span>
              <ChevronDown style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6" style={{ paddingTop: 'var(--gap--2rem)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Match List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              {/* Title */}
              <div className="flex items-center gap-3">
                <div style={{ width: '32px', height: '32px' }}>
                  <SoccerIcon />
                </div>
                <h1 
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    color: 'var(--card-foreground)'
                  }}
                >
                  Football
                </h1>
              </div>

              {/* Tabs and Date Picker */}
              <div className="flex items-center gap-4">
                {/* All/LIVE Tabs */}
                <div 
                  className="flex gap-1 p-1"
                  style={{ 
                    background: 'var(--black-a1)',
                    border: '1.4px solid var(--black-a2)',
                    borderRadius: 'var(--border-radius--0-5rem)'
                  }}
                >
                  <button
                    onClick={() => setActiveTab('all')}
                    className="px-3 py-2 transition-all"
                    style={{
                      background: activeTab === 'all' ? 'var(--lum-05)' : 'var(--white-a1)',
                      borderRadius: 'var(--border-radius--0-375rem)',
                      boxShadow: activeTab === 'all' ? '0px 3px 4px 0px rgba(0,0,0,0.04)' : 'none',
                      color: activeTab === 'all' ? 'var(--primary)' : 'var(--muted-foreground)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      lineHeight: '28px'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== 'all') {
                        e.currentTarget.style.background = 'var(--black-a1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== 'all') {
                        e.currentTarget.style.background = 'var(--white-a1)';
                      }
                    }}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveTab('live')}
                    className="px-3 py-2 transition-all"
                    style={{
                      background: activeTab === 'live' ? 'var(--lum-05)' : 'transparent',
                      borderRadius: 'var(--border-radius--0-375rem)',
                      boxShadow: activeTab === 'live' ? '0px 3px 4px 0px rgba(0,0,0,0.04)' : 'none',
                      color: activeTab === 'live' ? 'var(--primary)' : 'var(--muted-foreground)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      lineHeight: '28px'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== 'live') {
                        e.currentTarget.style.background = 'var(--black-a1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== 'live') {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    LIVE
                  </button>
                </div>

                {/* Date Picker */}
                <div 
                  className="flex items-center gap-1 p-1 rounded-lg"
                  style={{ 
                    background: 'var(--black-a1)',
                    border: '1.4px solid var(--black-a2)'
                  }}
                >
                  <button 
                    className="p-2 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <ChevronLeft style={{ width: '14px', height: '14px' }} />
                  </button>
                  <div 
                    className="flex items-center gap-1 px-2"
                    style={{
                      color: 'var(--muted-foreground)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-weight-semi-bold)'
                    }}
                  >
                    <Calendar style={{ width: '14px', height: '14px' }} />
                    <span>{selectedDate}</span>
                  </div>
                  <button 
                    className="p-2 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <ChevronRight style={{ width: '14px', height: '14px' }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Leagues and Matches */}
            <div className="space-y-8">
              {mockMatches.map((league) => {
                const isExpanded = expandedLeagues.includes(league.league);
                
                return (
                  <div key={league.league}>
                    {/* League Header - Full width, justify between */}
                    <button
                      onClick={() => toggleLeague(league.league)}
                      className="w-full flex items-center justify-between mb-3 transition-opacity hover:opacity-70"
                    >
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: '24px' }}>{league.leagueIcon}</span>
                        <span 
                          style={{
                            fontSize: 'var(--text-lg)',
                            fontWeight: 'var(--font-weight-semi-bold)',
                            color: 'var(--card-foreground)'
                          }}
                        >
                          {league.league}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp style={{ width: '20px', height: '20px', color: 'var(--muted-foreground)' }} />
                      ) : (
                        <ChevronDown style={{ width: '20px', height: '20px', color: 'var(--muted-foreground)' }} />
                      )}
                    </button>

                    {/* Match Cards */}
                    {isExpanded && league.matches.length > 0 && (
                      <div className="grid grid-cols-1 gap-4">
                        {league.matches.map((match) => (
                          <MatchCard 
                            key={match.id}
                            time={match.time}
                            date={match.date}
                            volume={match.volume}
                            team1={match.team1}
                            team2={match.team2}
                            odds={match.odds}
                            selectedOdds={selectedMatchId === match.id ? selectedMatchOdds : null}
                            onGameViewClick={() => {
                              // Handle game view click
                            }}
                            onOddsClick={(type) => {
                              // Update selected match info
                              let selectedTeamCode = '';
                              let teamColor = '';
                              let teamIcon = '';
                              let selectedTeamName = '';
                              
                              if (type === 'team1') {
                                selectedTeamCode = match.team1.code;
                                teamColor = match.team1.color || '';
                                teamIcon = match.team1.code.charAt(0);
                                selectedTeamName = match.team1.name;
                                setSelectedOutcome(match.team1.code);
                              } else if (type === 'team2') {
                                selectedTeamCode = match.team2.code;
                                teamColor = match.team2.color || '';
                                teamIcon = match.team2.code.charAt(0);
                                selectedTeamName = match.team2.name;
                                setSelectedOutcome(match.team2.code);
                              } else {
                                selectedTeamCode = 'DRAW';
                                teamColor = '#64748B'; // Gray color for draw
                                teamIcon = '⚖️'; // Balance icon for draw
                                selectedTeamName = 'Draw';
                                setSelectedOutcome('DRAW');
                              }
                              
                              setSelectedMatch({
                                team1Name: match.team1.name,
                                team2Name: match.team2.name,
                                selectedTeamCode,
                                selectedTeamName,
                                teamIcon,
                                teamColor
                              });
                              setSelectedMatchId(match.id);
                              setSelectedMatchOdds(type);
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Trading Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BuySellBlockNew
                selectedOutcome={selectedOutcome}
                onOutcomeChange={setSelectedOutcome}
                amount={amount}
                onAmountChange={setAmount}
                onBuy={handleBuy}
                market={mockSportsMarket}
                marketPrices={{
                  yesPrice: 0.64,
                  noPrice: 0.36
                }}
                matchInfo={selectedMatch || undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
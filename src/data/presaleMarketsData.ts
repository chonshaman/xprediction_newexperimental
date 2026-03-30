// Comprehensive Presale Market Data with Detail Page Fields

// Market States
export type PresaleState = 
  | 'PRESALE_ACTIVE'     // Market open for funding
  | 'PRESALE_FAILED'     // Time expired without reaching soft cap
  | 'MARKET_LIVE'        // Soft cap reached, market minted on AMM
  | 'MARKET_RESOLVED';   // Event occurred, outcome finalized

export type UserRole = 'creator' | 'investor' | 'viewer';

export type ResolutionOutcome = 'YES' | 'NO' | 'INVALID' | null;

export interface VestingSchedule {
  totalShares: number;
  unlockedShares: number;
  lockedShares: number;
  vestingDurationHours: number; // e.g., 24 hours
  vestingStartTime?: Date;
  nextUnlockTime?: Date;
  unlockPercentPerHour: number; // e.g., 10% per hour
}

export interface CreatorStake {
  amount: number; // e.g., 10,000 XEF
  isLocked: boolean;
  tradingFeesAccumulated: number; // Total trading fees earned
  tradingFeePercentage: number; // e.g., 2% of all trading fees
}

export interface PresaleParticipant {
  id: string;
  name: string;
  initials: string;
  avatar?: string;
  color: string;
  amount: string;
  shares?: number; // Number of presale shares purchased
  vestingInfo?: VestingSchedule; // Only for investors
  dateJoined?: string; // Date the participant joined the presale
  refundStatus?: 'refunded' | 'pending'; // Only for PRESALE_FAILED state
  refundClaimed?: boolean; // Only for PRESALE_FAILED state
}

export interface PresaleComment {
  id: string;
  author: string;
  authorInitials: string;
  authorColor: string;
  content: string;
  timestamp: string;
  date: string;
  likes: number;
  replies?: number;
  link?: string;
}

export interface PresaleMarket {
  id: number;
  image: string;
  category: string;
  participants: string;
  question: string;
  softcapProgress: number;
  raised: string;
  total: string;
  endingDays: number;
  endingHours: number;
  endingMinutes: number;
  createdBy: string;
  
  // New state system
  state: PresaleState;
  
  // Legacy status fields (for backward compatibility)
  status: 'Presale Live' | 'Presale Unsuccessful' | 'Market Live' | 'Pending Resolution' | 'Payout In Progress' | 'Payout Completed';
  statusColor: 'blue' | 'orange' | 'green' | 'teal' | 'red';
  
  viewerRole: 'creator' | 'investor-joined' | 'investor-not-joined';
  createdDate: string;
  joinedDate?: string;
  
  // Presale economics
  presaleSharePrice: number; // Fixed at $0.50
  softCapAmount: number; // in USDX
  raisedAmount: number; // in USDX
  
  // Viewer-specific investment amount (for refunds when presale fails)
  userInvestment?: number; // Amount the current user invested in USDX
  
  // Creator information
  creatorStake?: CreatorStake;
  
  // Market Live information (when state = MARKET_LIVE)
  ammInitialPrice?: { yes: number; no: number }; // e.g., { yes: 0.50, no: 0.50 }
  currentPrice?: { yes: number; no: number }; // Current AMM price
  totalVolume?: number; // Total trading volume
  
  // Resolution information (when state = MARKET_RESOLVED)
  resolutionOutcome?: ResolutionOutcome;
  resolutionTimestamp?: Date;
  
  // Viewer-specific vesting (if investor)
  viewerVesting?: VestingSchedule;
  
  // Detail page specific fields
  contractAddress: string;
  marketType: 'Yes/No' | 'Multi-Outcome';
  resolutionDate: string;
  resolutionCriteria: string;
  participantsList: PresaleParticipant[];
  comments: PresaleComment[];
}

// Mock participants data generator
const generateParticipants = (count: number): PresaleParticipant[] => {
  const names = ['John Doe', 'Jane Smith', 'Alex Johnson', 'Maria Garcia', 'Chen Wei'];
  const initials = ['JD', 'JS', 'AJ', 'MG', 'CW'];
  const colors = ['#8145b5', '#F4C430', '#16433c', '#FF6B6B', '#4A90E2'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `participant-${i + 1}`,
    name: names[i % names.length],
    initials: initials[i % initials.length],
    color: colors[i % colors.length],
    amount: `${Math.floor(Math.random() * 500 + 100)}`,
  }));
};

// Mock comments data generator
const generateComments = (count: number): PresaleComment[] => {
  const authors = ['John Doe', 'CryptoKing', 'MarketWatch', 'PredictorPro'];
  const authorInitials = ['JD', 'CK', 'MW', 'PP'];
  const colors = ['#8145b5', '#F4C430', '#16433c', '#FF6B6B'];
  
  const sampleComments = [
    'This market looks very promising! The fundamentals are strong.',
    'I think this will hit the softcap easily. Great project!',
    'Has anyone verified the resolution criteria? Seems solid to me.',
    'Interesting prediction. I\'m bullish on this one.',
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `comment-${i + 1}`,
    author: authors[i % authors.length],
    authorInitials: authorInitials[i % authorInitials.length],
    authorColor: colors[i % colors.length],
    content: sampleComments[i % sampleComments.length],
    timestamp: `${12 + (i % 6)}:${25 + (i % 35)}:${10 + (i % 50)}`,
    date: `${Math.floor(Math.random() * 28) + 1} Jan, 2025`,
    likes: Math.floor(Math.random() * 20),
    replies: Math.floor(Math.random() * 5),
  }));
};

export const presaleMarkets: PresaleMarket[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg4NDA4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Politics',
    participants: '9K',
    question: 'Will Jair Messias Bolsonaro be arrested in 2025?',
    softcapProgress: 36,
    raised: '6,250',
    total: '10,000',
    endingDays: 23,
    endingHours: 17,
    endingMinutes: 49,
    createdBy: '@CosmicRay7',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'creator',
    createdDate: '31 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 3600,
    creatorStake: {
      amount: 10000,
      isLocked: true,
      tradingFeesAccumulated: 0,
      tradingFeePercentage: 2,
    },
    contractAddress: '0x4BFC...D12A',
    marketType: 'Yes/No',
    resolutionDate: 'May 31, 2025 (3 days left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Jair Messias Bolsonaro is officially arrested by any Brazilian law enforcement agency in 2025. The arrest must be publicly documented by credible news sources. It will resolve to 'No' if he is not arrested by December 31, 2025.",
    participantsList: generateParticipants(5),
    comments: generateComments(3),
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1641580559176-d4b2b44863b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY4ODMyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Crypto',
    participants: '9K',
    question: 'Will Ethereum surpass Bitcoin in market cap by Q4 2025?',
    softcapProgress: 72,
    raised: '7,200',
    total: '10,000',
    endingDays: 23,
    endingHours: 17,
    endingMinutes: 49,
    createdBy: '@CryptoWhale',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '15 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 7200,
    contractAddress: '0x7A3E...8F2C',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Ethereum's market capitalization exceeds Bitcoin's market capitalization at any point during Q4 2025 (October 1 - December 31, 2025), based on data from CoinMarketCap or CoinGecko. Otherwise, it resolves to 'No'.",
    participantsList: generateParticipants(7),
    comments: generateComments(5),
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1637203727317-3cc1a557cdbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGN1cCUyMGZvb3RiYWxsfGVufDF8fHx8MTc2ODg5NjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sport',
    participants: '9K',
    question: 'Will South Korea advance to the Round of 16 at the FIFA World Cup 2025?',
    softcapProgress: 250,
    raised: '25,000',
    total: '10,000',
    endingDays: 23,
    endingHours: 17,
    endingMinutes: 49,
    createdBy: '@CosmicRay7',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'creator',
    createdDate: '31 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 25000,
    creatorStake: {
      amount: 10000,
      isLocked: true,
      tradingFeesAccumulated: 0,
      tradingFeePercentage: 2,
    },
    contractAddress: '0x9C1D...4E7B',
    marketType: 'Yes/No',
    resolutionDate: 'July 15, 2025 (5 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if South Korea's national football team qualifies for and advances to the Round of 16 (knockout stage) at the FIFA World Cup 2025. Resolution will be based on official FIFA tournament results.",
    participantsList: generateParticipants(10),
    comments: generateComments(8),
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1637203727317-3cc1a557cdbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGN1cCUyMGZvb3RiYWxsfGVufDF8fHx8MTc2ODg5NjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sport',
    participants: '5K',
    question: 'Will Argentina win the Copa America 2025?',
    softcapProgress: 28,
    raised: '2,800',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@SportsFan99',
    state: 'PRESALE_FAILED',
    status: 'Presale Unsuccessful',
    statusColor: 'red',
    viewerRole: 'investor-joined',
    userInvestment: 500,
    createdDate: '20 Jan, 2025',
    joinedDate: '21 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 2800,
    contractAddress: '0x2F8A...6D9E',
    marketType: 'Yes/No',
    resolutionDate: 'July 20, 2025 (5 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Argentina wins the Copa America 2025 tournament championship. Resolution will be based on the official tournament final match result.",
    participantsList: [
      {
        id: 'participant-1',
        name: 'Jane Smith',
        initials: 'JS',
        color: '#F4C430',
        amount: '500', // Current user - matches userInvestment
        dateJoined: '21 Jan, 2025',
        refundStatus: 'refunded',
        refundClaimed: true,
      },
      {
        id: 'participant-2',
        name: 'Alex Johnson',
        initials: 'AJ',
        color: '#16433c',
        amount: '1200',
        dateJoined: '22 Jan, 2025',
        refundStatus: 'refunded',
        refundClaimed: false,
      },
      {
        id: 'participant-3',
        name: 'John Doe',
        initials: 'JD',
        color: '#8145b5',
        amount: '1100',
        dateJoined: '20 Jan, 2025',
        refundStatus: 'refunded',
        refundClaimed: true,
      },
    ],
    comments: generateComments(2),
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1707075891510-960cc9ecfcd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwY29pbnxlbnwxfHx8fDE3Njg4OTY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Crypto',
    participants: '12K',
    question: "Will Bitcoin's market capitalization surpass $2 trillion at any point in 2025?",
    softcapProgress: 100,
    raised: '10,000',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@CryptoWhale',
    state: 'MARKET_LIVE',
    status: 'Market Live',
    statusColor: 'green',
    viewerRole: 'investor-joined',
    createdDate: '15 Jan, 2025',
    joinedDate: '16 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 10000,
    ammInitialPrice: { yes: 0.50, no: 0.50 },
    currentPrice: { yes: 0.62, no: 0.38 },
    totalVolume: 45000,
    viewerVesting: {
      totalShares: 1000,
      unlockedShares: 400,
      lockedShares: 600,
      vestingDurationHours: 24,
      vestingStartTime: new Date(Date.now() - 10 * 60 * 60 * 1000), // Started 10 hours ago
      nextUnlockTime: new Date(Date.now() + 1 * 60 * 60 * 1000), // Next unlock in 1 hour
      unlockPercentPerHour: 4.17, // ~10% every 2.4 hours (24h / 10 unlocks)
    },
    contractAddress: '0x5E6C...3A1F',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (11 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Bitcoin's total market capitalization reaches or exceeds $2 trillion USD at any point during 2025, based on data from CoinMarketCap or CoinGecko. Otherwise, it resolves to 'No'.",
    participantsList: generateParticipants(12),
    comments: generateComments(10),
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1707075891510-960cc9ecfcd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwY29pbnxlbnwxfHx8fDE3Njg4OTY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tech',
    participants: '8K',
    question: 'Will Apple release a foldable iPhone in 2025?',
    softcapProgress: 100,
    raised: '10,000',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@TechGuru',
    state: 'MARKET_LIVE',
    status: 'Pending Resolution',
    statusColor: 'orange',
    viewerRole: 'investor-joined',
    joinedDate: '10 Jan, 2025',
    createdDate: '8 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 10000,
    ammInitialPrice: { yes: 0.50, no: 0.50 },
    currentPrice: { yes: 0.35, no: 0.65 },
    totalVolume: 28000,
    viewerVesting: {
      totalShares: 800,
      unlockedShares: 800,
      lockedShares: 0,
      vestingDurationHours: 24,
      vestingStartTime: new Date(Date.now() - 30 * 60 * 60 * 1000), // Started 30 hours ago (fully unlocked)
      unlockPercentPerHour: 4.17,
    },
    contractAddress: '0x8B2F...9D4C',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (11 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Apple officially announces and releases a foldable iPhone for purchase in 2025. The device must be commercially available, not just announced or in pre-order. Resolution based on official Apple announcements and product availability.",
    participantsList: generateParticipants(8),
    comments: generateComments(6),
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub215JTIwZ3Jvd3RofGVufDF8fHx8MTc2ODg5NjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Economy',
    participants: '15K',
    question: 'Will the US Federal Reserve cut interest rates by more than 1% in 2025?',
    softcapProgress: 100,
    raised: '10,000',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@EconomistPro',
    state: 'MARKET_RESOLVED',
    status: 'Payout In Progress',
    statusColor: 'teal',
    viewerRole: 'investor-joined',
    joinedDate: '5 Jan, 2025',
    createdDate: '3 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 10000,
    ammInitialPrice: { yes: 0.50, no: 0.50 },
    currentPrice: { yes: 0.95, no: 0.05 },
    totalVolume: 125000,
    resolutionOutcome: 'YES',
    resolutionTimestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Resolved 2 days ago
    viewerVesting: {
      totalShares: 1200,
      unlockedShares: 1200, // Fully unlocked due to early resolution
      lockedShares: 0,
      vestingDurationHours: 24,
      unlockPercentPerHour: 4.17,
    },
    contractAddress: '0x1A7E...5B3C',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (11 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if the US Federal Reserve cumulatively cuts the federal funds rate by more than 1.00 percentage point (100 basis points) during 2025. Resolution based on official Federal Reserve announcements.",
    participantsList: generateParticipants(15),
    comments: generateComments(12),
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub215JTIwZ3Jvd3RofGVufDF8fHx8MTc2ODg5NjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Politics',
    participants: '20K',
    question: 'Will there be a general election in the UK in 2025?',
    softcapProgress: 200,
    raised: '20,000',
    total: '10,000',
    endingDays: 23,
    endingHours: 17,
    endingMinutes: 49,
    createdBy: '@CosmicRay7',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'creator',
    createdDate: '1 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 20000,
    creatorStake: {
      amount: 10000,
      isLocked: true,
      tradingFeesAccumulated: 0,
      tradingFeePercentage: 2,
    },
    contractAddress: '0x6D9B...2E4A',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (11 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if a general election for the UK Parliament takes place at any point during 2025. By-elections and local elections do not count. Resolution based on official UK Electoral Commission records.",
    participantsList: generateParticipants(20),
    comments: generateComments(15),
  },
  // Additional markets for Explore tab (investor-not-joined)
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3Njg4OTY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tech',
    participants: '6K',
    question: 'Will OpenAI release GPT-5 in 2025?',
    softcapProgress: 45,
    raised: '4,500',
    total: '10,000',
    endingDays: 15,
    endingHours: 8,
    endingMinutes: 30,
    createdBy: '@AIWatcher',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '18 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 4500,
    contractAddress: '0x3C8F...7E2D',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if OpenAI officially announces and releases GPT-5 to the public in 2025. Beta releases or limited access do not count unless widely available.",
    participantsList: generateParticipants(6),
    comments: generateComments(4),
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1569144157592-21cec6e0ff15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvY2tldHxlbnwxfHx8fDE3Njg4OTY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Science',
    participants: '4K',
    question: 'Will SpaceX successfully land humans on Mars in 2025?',
    softcapProgress: 18,
    raised: '1,800',
    total: '10,000',
    endingDays: 30,
    endingHours: 5,
    endingMinutes: 15,
    createdBy: '@SpaceEnthusiast',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '12 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 1800,
    contractAddress: '0x9A2B...4F1E',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if SpaceX successfully lands humans on the surface of Mars in 2025, confirmed by official SpaceX announcements and credible news sources.",
    participantsList: generateParticipants(4),
    comments: generateComments(3),
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3Njg4OTY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Business',
    participants: '7K',
    question: 'Will Amazon acquire Shopify in 2025?',
    softcapProgress: 55,
    raised: '5,500',
    total: '10,000',
    endingDays: 20,
    endingHours: 12,
    endingMinutes: 45,
    createdBy: '@MarketAnalyst',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '5 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 5500,
    contractAddress: '0x7E3D...8C9A',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Amazon announces and completes an acquisition of Shopify in 2025. Announcement alone is not sufficient; the deal must be finalized.",
    participantsList: generateParticipants(7),
    comments: generateComments(5),
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMGhlYWx0aHxlbnwxfHx8fDE3Njg4OTY5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Science',
    participants: '5K',
    question: 'Will a cure for Type 1 Diabetes be announced in 2025?',
    softcapProgress: 32,
    raised: '3,200',
    total: '10,000',
    endingDays: 18,
    endingHours: 9,
    endingMinutes: 20,
    createdBy: '@MedResearcher',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '25 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 3200,
    contractAddress: '0x4D7F...2A8B',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if a major pharmaceutical company or research institution announces a proven cure for Type 1 Diabetes in 2025, validated by peer-reviewed studies.",
    participantsList: generateParticipants(5),
    comments: generateComments(3),
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwbWVkaWF8ZW58MXx8fHwxNzY4ODk2OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Entertainment',
    participants: '11K',
    question: 'Will Taylor Swift win Album of the Year at the 2026 Grammys?',
    softcapProgress: 88,
    raised: '8,800',
    total: '10,000',
    endingDays: 12,
    endingHours: 16,
    endingMinutes: 50,
    createdBy: '@MusicFan2025',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '8 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 8800,
    contractAddress: '0x6F2C...9E5D',
    marketType: 'Yes/No',
    resolutionDate: 'February 8, 2026 (1 year left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Taylor Swift wins the Album of the Year award at the 68th Annual Grammy Awards in 2026. Resolution based on official Grammy Awards results.",
    participantsList: generateParticipants(11),
    comments: generateComments(8),
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1573496774426-fe5b7a5781ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlfGVufDF8fHx8MTc2ODg5NjkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Environment',
    participants: '3K',
    question: 'Will global CO2 emissions decrease by 5% in 2025 compared to 2024?',
    softcapProgress: 22,
    raised: '2,200',
    total: '10,000',
    endingDays: 25,
    endingHours: 14,
    endingMinutes: 35,
    createdBy: '@ClimateWatch',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '2 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 2200,
    contractAddress: '0x8E5A...3B7C',
    marketType: 'Yes/No',
    resolutionDate: 'January 31, 2026 (1 year left)',
    resolutionCriteria: "This market will resolve to 'Yes' if global CO2 emissions in 2025 are at least 5% lower than 2024 levels, based on data from the International Energy Agency or similar authoritative sources.",
    participantsList: generateParticipants(3),
    comments: generateComments(2),
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1560221328-12fe60f83ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbmR1c3RyeXxlbnwxfHx8fDE3Njg4OTY5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tech',
    participants: '9K',
    question: 'Will Tesla release a vehicle under $25,000 in 2025?',
    softcapProgress: 68,
    raised: '6,800',
    total: '10,000',
    endingDays: 14,
    endingHours: 11,
    endingMinutes: 25,
    createdBy: '@EVTracker',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '10 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 6800,
    contractAddress: '0x2C9D...6F4E',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Tesla officially releases a new vehicle model with a starting price under $25,000 USD for purchase in 2025. Pre-orders do not count; the vehicle must be available for delivery.",
    participantsList: generateParticipants(9),
    comments: generateComments(7),
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzfGVufDF8fHx8MTc2ODg5NjkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Gaming',
    participants: '13K',
    question: 'Will Grand Theft Auto VI be released in 2025?',
    softcapProgress: 95,
    raised: '9,500',
    total: '10,000',
    endingDays: 8,
    endingHours: 3,
    endingMinutes: 40,
    createdBy: '@GamingInsider',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'investor-not-joined',
    createdDate: '14 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 9500,
    contractAddress: '0x5B8E...1D3A',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Rockstar Games officially releases Grand Theft Auto VI for any gaming platform in 2025. Resolution based on official Rockstar announcements and actual release dates.",
    participantsList: generateParticipants(13),
    comments: generateComments(10),
  },
  // Additional markets for My Markets tab (showing different states)
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub215JTIwZ3Jvd3RofGVufDF8fHx8MTc2ODg5NjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Economy',
    participants: '10K',
    question: 'Will the S&P 500 reach 7000 points in 2025?',
    softcapProgress: 92,
    raised: '9,200',
    total: '10,000',
    endingDays: 10,
    endingHours: 6,
    endingMinutes: 15,
    createdBy: '@CosmicRay7',
    state: 'PRESALE_ACTIVE',
    status: 'Presale Live',
    statusColor: 'blue',
    viewerRole: 'creator',
    createdDate: '16 Feb, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 9200,
    creatorStake: {
      amount: 10000,
      isLocked: true,
      tradingFeesAccumulated: 0,
      tradingFeePercentage: 2,
    },
    contractAddress: '0x3F9C...7A2E',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if the S&P 500 index reaches or exceeds 7000 points at any point during 2025, based on official market data.",
    participantsList: generateParticipants(10),
    comments: generateComments(8),
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1560221328-12fe60f83ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbmR1c3RyeXxlbnwxfHx8fDE3Njg4OTY5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tech',
    participants: '2K',
    question: 'Will Meta release a consumer-friendly VR headset under $200 in 2025?',
    softcapProgress: 15,
    raised: '1,500',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@CosmicRay7',
    state: 'PRESALE_FAILED',
    status: 'Presale Unsuccessful',
    statusColor: 'red',
    viewerRole: 'creator',
    createdDate: '22 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 1500,
    creatorStake: {
      amount: 10000,
      isLocked: false, // Unlocked after presale failed
      tradingFeesAccumulated: 0,
      tradingFeePercentage: 2,
    },
    contractAddress: '0x9D4B...5E1C',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Meta releases a VR headset priced under $200 USD for consumer purchase in 2025.",
    participantsList: generateParticipants(2),
    comments: generateComments(1),
  },
  {
    id: 19,
    image: 'https://images.unsplash.com/photo-1641580559176-d4b2b44863b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY4ODMyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Crypto',
    participants: '18K',
    question: 'Will Solana surpass $500 in 2025?',
    softcapProgress: 100,
    raised: '10,000',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@CosmicRay7',
    state: 'MARKET_LIVE',
    status: 'Market Live',
    statusColor: 'green',
    viewerRole: 'creator',
    createdDate: '5 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 10000,
    ammInitialPrice: { yes: 0.50, no: 0.50 },
    currentPrice: { yes: 0.58, no: 0.42 },
    totalVolume: 68000,
    creatorStake: {
      amount: 10000,
      isLocked: true,
      tradingFeesAccumulated: 1360, // 2% of 68000 volume
      tradingFeePercentage: 2,
    },
    contractAddress: '0x7C2A...4F8B',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Solana (SOL) reaches or exceeds $500 USD at any point in 2025, based on CoinMarketCap or CoinGecko data.",
    participantsList: generateParticipants(18),
    comments: generateComments(14),
  },
  {
    id: 20,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3Njg4OTY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Business',
    participants: '22K',
    question: 'Will Twitter (X) be acquired by another company in 2025?',
    softcapProgress: 100,
    raised: '10,000',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@CosmicRay7',
    state: 'MARKET_RESOLVED',
    status: 'Payout Completed',
    statusColor: 'teal',
    viewerRole: 'creator',
    createdDate: '28 Dec, 2024',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 10000,
    ammInitialPrice: { yes: 0.50, no: 0.50 },
    currentPrice: { yes: 0.05, no: 0.95 },
    totalVolume: 185000,
    resolutionOutcome: 'NO',
    resolutionTimestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // Resolved 5 days ago
    creatorStake: {
      amount: 10000,
      isLocked: false, // Unlocked after resolution
      tradingFeesAccumulated: 3700, // 2% of 185000 volume
      tradingFeePercentage: 2,
    },
    contractAddress: '0x1E9B...6D3F',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Twitter (X) is acquired by another company in 2025, based on official announcements and completed transactions.",
    participantsList: generateParticipants(22),
    comments: generateComments(18),
  },
  {
    id: 21,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3Njg4OTY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Business',
    participants: '4K',
    question: 'Will Netflix subscriber count drop below 250M in 2025?',
    softcapProgress: 38,
    raised: '3,800',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@MediaAnalyst',
    state: 'PRESALE_FAILED',
    status: 'Presale Unsuccessful',
    statusColor: 'red',
    viewerRole: 'investor-joined',
    joinedDate: '28 Jan, 2025',
    userInvestment: 800,
    createdDate: '27 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 3800,
    contractAddress: '0x4E7A...9C2B',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Netflix's total subscriber count falls below 250 million at any point in 2025, based on official quarterly earnings reports.",
    participantsList: [
      {
        id: 'participant-1',
        name: 'Current User',
        initials: 'CU',
        color: '#8145b5',
        amount: '800',
        dateJoined: '28 Jan, 2025',
        refundStatus: 'refunded',
        refundClaimed: false,
      },
      {
        id: 'participant-2',
        name: 'Mike Chen',
        initials: 'MC',
        color: '#16433c',
        amount: '1500',
        dateJoined: '27 Jan, 2025',
        refundStatus: 'refunded',
        refundClaimed: true,
      },
      {
        id: 'participant-3',
        name: 'Sarah Johnson',
        initials: 'SJ',
        color: '#FF6B6B',
        amount: '1500',
        dateJoined: '29 Jan, 2025',
        refundStatus: 'refunded',
        refundClaimed: false,
      },
    ],
    comments: generateComments(2),
  },
  {
    id: 22,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwbWVkaWF8ZW58MXx8fHwxNzY4ODk2OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Entertainment',
    participants: '16K',
    question: 'Will Avatar 3 gross over $2 billion worldwide in 2025?',
    softcapProgress: 100,
    raised: '10,000',
    total: '10,000',
    endingDays: 0,
    endingHours: 0,
    endingMinutes: 0,
    createdBy: '@MovieBuff',
    state: 'MARKET_RESOLVED',
    status: 'Payout In Progress',
    statusColor: 'teal',
    viewerRole: 'investor-joined',
    joinedDate: '18 Jan, 2025',
    createdDate: '15 Jan, 2025',
    presaleSharePrice: 0.50,
    softCapAmount: 10000,
    raisedAmount: 10000,
    ammInitialPrice: { yes: 0.50, no: 0.50 },
    currentPrice: { yes: 0.88, no: 0.12 },
    totalVolume: 156000,
    resolutionOutcome: 'YES',
    resolutionTimestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // Resolved 3 days ago
    viewerVesting: {
      totalShares: 1500,
      unlockedShares: 1500,
      lockedShares: 0,
      vestingDurationHours: 24,
      unlockPercentPerHour: 4.17,
    },
    contractAddress: '0x8D3F...2B5E',
    marketType: 'Yes/No',
    resolutionDate: 'December 31, 2025 (10 months left)',
    resolutionCriteria: "This market will resolve to 'Yes' if Avatar 3 earns $2 billion or more in worldwide box office revenue in 2025, based on Box Office Mojo or similar authoritative sources.",
    participantsList: generateParticipants(16),
    comments: generateComments(12),
  },
];
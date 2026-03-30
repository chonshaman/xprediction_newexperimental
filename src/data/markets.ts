// Market data for the prediction market application

import { formatNumber as formatNum, formatComments } from '../utils/format';
import { USER_CONFIG } from '../config/app-config';

export interface MarketCategory {
  name: string;
  slug: string;
}

export interface MarketStats {
  volume: number;
  volumeFormatted: string;
  participants: number;
  participantsFormatted: string;
  comments: number;
  commentsFormatted: string;
  liquidity?: number;
  liquidityFormatted?: string;
}

export interface MarketPrediction {
  yesPercentage: number;
  noPercentage: number;
  lastUpdated?: Date;
}

export interface MarketOutcome {
  id: string;
  label: string;
  percentage: number;
  color: string; // CSS variable for the color
  icon: 'Y' | 'N' | string; // Letter to display in the circular icon
}

export interface MarketUser {
  id: string;
  name?: string;
  initials: string;
  avatar?: string;
  color?: string;
}

export interface Market {
  id: string;
  image: string;
  category: MarketCategory;
  date: string;
  endDate: Date;
  question: string;
  description?: string;
  stats: MarketStats;
  prediction: MarketPrediction;
  outcomes?: MarketOutcome[]; // New field for multi-outcome markets
  recentUsers?: MarketUser[];
  tags?: string[];
  featured?: boolean;
  trending?: boolean;
  verified?: boolean;
  createdAt?: Date;
  accessCode?: string;
}

// Re-export formatNumber for backward compatibility
export const formatNumber = formatNum;

// Generate random users for variety
function generateRandomUsers(count: number = 2): MarketUser[] {
  const { defaultInitials, defaultColors } = USER_CONFIG;
  
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i}`,
    initials: defaultInitials[i % defaultInitials.length],
    color: defaultColors[i % defaultColors.length],
  }));
}

// Helper to calculate days until end date
function getDaysUntil(endDate: Date): string {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  
  if (days < 0) return 'Ended';
  if (days === 0) return 'Today';
  if (days === 1) return '1 day';
  return `${days} days`;
}

// Hero Carousel Markets - Featured high-profile markets for the carousel
export const heroCarouselMarkets: Market[] = [
  {
    id: "hc-1",
    image: "https://images.unsplash.com/photo-1609193084914-8c454697fe90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcG9saWN5JTIwcG9saXRpY3N8ZW58MXx8fHwxNzY1NTQwOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: { name: "Politics", slug: "politics" },
    date: getDaysUntil(new Date("2025-12-25")),
    endDate: new Date("2025-12-25"),
    question: "Will there be a major policy announcement before 2026?",
    description: "This market resolves YES if any G7 country (United States, United Kingdom, Canada, France, Germany, Italy, or Japan) announces a significant policy shift affecting economic, healthcare, climate, or defense sectors before January 1st, 2026. The announcement must be made by a head of state or official government body and receive coverage in at least 3 major international news outlets (Reuters, AP, BBC, CNN, Bloomberg, or equivalent). Minor policy adjustments, proposals without official adoption, or regional/local government changes do not qualify.",
    stats: {
      volume: 1250000,
      volumeFormatted: formatNum(1250000),
      participants: 8432,
      participantsFormatted: formatNum(8432),
      comments: 234,
      commentsFormatted: formatComments(234),
      liquidity: 500000,
      liquidityFormatted: formatNum(500000),
    },
    prediction: { yesPercentage: 67, noPercentage: 33 },
    recentUsers: generateRandomUsers(3),
    tags: ["Politics", "Policy", "G7"],
    featured: true,
    trending: true,
    verified: true,
  },
  {
    id: "hc-2",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    category: { name: "Technology", slug: "technology" },
    date: getDaysUntil(new Date("2026-01-01")),
    endDate: new Date("2026-01-01"),
    question: "Will AI achieve AGI by end of 2025?",
    description: "This market resolves YES if a panel of at least 5 recognized AI researchers (from institutions like MIT, Stanford, DeepMind, OpenAI, or equivalent) publicly agree that an AI system has achieved Artificial General Intelligence (AGI) by December 31st, 2025. AGI is defined as a system capable of performing any intellectual task that a human can do, including understanding context, learning from minimal examples, transferring knowledge across domains, and demonstrating common sense reasoning. The system must pass established AGI benchmarks and demonstrate capabilities across at least 10 distinct cognitive domains. Narrow AI achievements or incremental improvements in specific tasks do not qualify.",
    stats: {
      volume: 2100000,
      volumeFormatted: formatNum(2100000),
      participants: 12543,
      participantsFormatted: formatNum(12543),
      comments: 567,
      commentsFormatted: formatComments(567),
      liquidity: 800000,
      liquidityFormatted: formatNum(800000),
    },
    prediction: { yesPercentage: 23, noPercentage: 77 },
    recentUsers: generateRandomUsers(3),
    tags: ["AI", "Technology", "AGI"],
    featured: true,
    trending: true,
    verified: true,
  },
  {
    id: "hc-3",
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&auto=format&fit=crop",
    category: { name: "Crypto", slug: "crypto" },
    date: getDaysUntil(new Date("2025-12-31")),
    endDate: new Date("2025-12-31"),
    question: "Will Bitcoin reach $150,000 in 2025?",
    description: "This market resolves YES if Bitcoin (BTC) reaches or exceeds $150,000 USD on any major cryptocurrency exchange (Coinbase, Binance, Kraken, Gemini, or Bitstamp) at any point during 2025, including intraday highs. The price must be sustained for at least 5 consecutive minutes and confirmed by at least 3 different exchanges simultaneously. Flash crashes, order book manipulation, or prices on minor exchanges do not qualify. Market closes at 11:59 PM UTC on December 31st, 2025. Price will be determined using CoinMarketCap or CoinGecko aggregated data as the official source.",
    stats: {
      volume: 3500000,
      volumeFormatted: formatNum(3500000),
      participants: 18234,
      participantsFormatted: formatNum(18234),
      comments: 892,
      commentsFormatted: formatComments(892),
      liquidity: 1200000,
      liquidityFormatted: formatNum(1200000),
    },
    prediction: { yesPercentage: 45, noPercentage: 55 },
    recentUsers: generateRandomUsers(3),
    tags: ["Bitcoin", "Crypto", "Price"],
    featured: true,
    trending: true,
    verified: true,
  },
  {
    id: "hc-4",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop",
    category: { name: "Sports", slug: "sports" },
    date: getDaysUntil(new Date("2025-12-20")),
    endDate: new Date("2025-12-20"),
    question: "Will any team go undefeated this season?",
    description: "This market resolves YES if any professional sports team in a major league (NFL, NBA, MLB, NHL, Premier League, La Liga, Bundesliga, or Serie A) completes their regular season schedule without a single loss or tie by December 20th, 2025. Playoff games, preseason games, and exhibition matches are excluded. The team must play a minimum of 16 games (NFL) or 38 games (soccer leagues) during the regular season. Forfeitures, postponed games that result in season completion, and games decided by penalties all count as official results. Historical context: Only the 1972 Miami Dolphins (NFL) have achieved a perfect season including playoffs.",
    stats: {
      volume: 890000,
      volumeFormatted: formatNum(890000),
      participants: 5621,
      participantsFormatted: formatNum(5621),
      comments: 178,
      commentsFormatted: formatComments(178),
      liquidity: 350000,
      liquidityFormatted: formatNum(350000),
    },
    prediction: { yesPercentage: 12, noPercentage: 88 },
    recentUsers: generateRandomUsers(3),
    tags: ["Sports", "Records"],
    featured: true,
    trending: false,
    verified: true,
  },
];

// Featured Markets - High-priority markets displayed prominently
export const featuredMarkets: Market[] = [
  {
    id: "fm-1",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop",
    category: { name: "Entertainment", slug: "entertainment" },
    date: getDaysUntil(new Date("2026-02-28")),
    endDate: new Date("2026-02-28"),
    question: "Will the next major film break box office records?",
    stats: {
      volume: 450000,
      volumeFormatted: formatNum(450000),
      participants: 3421,
      participantsFormatted: formatNum(3421),
      comments: 89,
      commentsFormatted: formatComments(89),
      liquidity: 180000,
      liquidityFormatted: formatNum(180000),
    },
    prediction: { yesPercentage: 56, noPercentage: 44 },
    recentUsers: generateRandomUsers(2),
    tags: ["Movies", "Box Office"],
    featured: true,
    verified: true,
  },
  {
    id: "fm-2",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
    category: { name: "Science", slug: "science" },
    date: getDaysUntil(new Date("2025-12-31")),
    endDate: new Date("2025-12-31"),
    question: "Will a major breakthrough in fusion energy be announced?",
    stats: {
      volume: 680000,
      volumeFormatted: formatNum(680000),
      participants: 4892,
      participantsFormatted: formatNum(4892),
      comments: 145,
      commentsFormatted: formatComments(145),
      liquidity: 280000,
      liquidityFormatted: formatNum(280000),
    },
    prediction: { yesPercentage: 34, noPercentage: 66 },
    recentUsers: generateRandomUsers(2),
    tags: ["Energy", "Science", "Fusion"],
    featured: true,
    verified: true,
  },
  {
    id: "fm-3",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop",
    category: { name: "Finance", slug: "finance" },
    date: getDaysUntil(new Date("2025-12-31")),
    endDate: new Date("2025-12-31"),
    question: "Will the Federal Reserve cut rates in 2025?",
    stats: {
      volume: 1800000,
      volumeFormatted: formatNum(1800000),
      participants: 9876,
      participantsFormatted: formatNum(9876),
      comments: 423,
      commentsFormatted: formatComments(423),
      liquidity: 650000,
      liquidityFormatted: formatNum(650000),
    },
    prediction: { yesPercentage: 72, noPercentage: 28 },
    recentUsers: generateRandomUsers(2),
    tags: ["Finance", "Fed", "Interest Rates"],
    featured: true,
    verified: true,
  },
  {
    id: "fm-4",
    image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&auto=format&fit=crop",
    category: { name: "Business", slug: "business" },
    date: getDaysUntil(new Date("2026-03-15")),
    endDate: new Date("2026-03-15"),
    question: "Will a major tech company announce layoffs?",
    stats: {
      volume: 520000,
      volumeFormatted: formatNum(520000),
      participants: 3987,
      participantsFormatted: formatNum(3987),
      comments: 167,
      commentsFormatted: formatComments(167),
      liquidity: 210000,
      liquidityFormatted: formatNum(210000),
    },
    prediction: { yesPercentage: 81, noPercentage: 19 },
    recentUsers: generateRandomUsers(2),
    tags: ["Business", "Tech", "Employment"],
    featured: true,
    verified: false,
  },
];

// Ending Soon Markets - Markets that are close to their end date
export const endingSoonMarkets: Market[] = [
  {
    id: "es-1",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop",
    category: { name: "Sports", slug: "sports" },
    date: getDaysUntil(new Date("2025-12-15")),
    endDate: new Date("2025-12-15"),
    question: "Will the championship game go to overtime?",
    stats: {
      volume: 320000,
      volumeFormatted: formatNum(320000),
      participants: 2341,
      participantsFormatted: formatNum(2341),
      comments: 67,
      commentsFormatted: formatComments(67),
      liquidity: 125000,
      liquidityFormatted: formatNum(125000),
    },
    prediction: { yesPercentage: 38, noPercentage: 62 },
    recentUsers: generateRandomUsers(2),
    tags: ["Sports", "Championship"],
    featured: false,
    verified: true,
  },
  {
    id: "es-2",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&auto=format&fit=crop",
    category: { name: "Weather", slug: "weather" },
    date: getDaysUntil(new Date("2025-12-14")),
    endDate: new Date("2025-12-14"),
    question: "Will it snow this weekend in major cities?",
    stats: {
      volume: 180000,
      volumeFormatted: formatNum(180000),
      participants: 1823,
      participantsFormatted: formatNum(1823),
      comments: 45,
      commentsFormatted: formatComments(45),
      liquidity: 75000,
      liquidityFormatted: formatNum(75000),
    },
    prediction: { yesPercentage: 62, noPercentage: 38 },
    recentUsers: generateRandomUsers(2),
    tags: ["Weather", "Snow"],
    featured: false,
    verified: false,
  },
  {
    id: "es-3",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    category: { name: "Politics", slug: "politics" },
    date: getDaysUntil(new Date("2025-12-16")),
    endDate: new Date("2025-12-16"),
    question: "Will the vote pass with majority support?",
    stats: {
      volume: 890000,
      volumeFormatted: formatNum(890000),
      participants: 5234,
      participantsFormatted: formatNum(5234),
      comments: 234,
      commentsFormatted: formatComments(234),
      liquidity: 340000,
      liquidityFormatted: formatNum(340000),
    },
    prediction: { yesPercentage: 58, noPercentage: 42 },
    recentUsers: generateRandomUsers(2),
    tags: ["Politics", "Vote"],
    featured: false,
    verified: true,
  },
  {
    id: "es-4",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
    category: { name: "Technology", slug: "technology" },
    date: getDaysUntil(new Date("2025-12-17")),
    endDate: new Date("2025-12-17"),
    question: "Will the new software release be delayed?",
    stats: {
      volume: 240000,
      volumeFormatted: formatNum(240000),
      participants: 1987,
      participantsFormatted: formatNum(1987),
      comments: 78,
      commentsFormatted: formatComments(78),
      liquidity: 95000,
      liquidityFormatted: formatNum(95000),
    },
    prediction: { yesPercentage: 71, noPercentage: 29 },
    recentUsers: generateRandomUsers(2),
    tags: ["Technology", "Software"],
    featured: false,
    verified: false,
  },
  {
    id: "es-5",
    image: "https://images.unsplash.com/photo-1634326080825-985cfc816db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub215JTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc2NTU0MTI2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: { name: "Economy", slug: "economy" },
    date: getDaysUntil(new Date("2025-12-18")),
    endDate: new Date("2025-12-18"),
    question: "Will inflation drop below 3% this quarter?",
    stats: {
      volume: 560000,
      volumeFormatted: formatNum(560000),
      participants: 4123,
      participantsFormatted: formatNum(4123),
      comments: 156,
      commentsFormatted: formatComments(156),
      liquidity: 220000,
      liquidityFormatted: formatNum(220000),
    },
    prediction: { yesPercentage: 48, noPercentage: 52 },
    recentUsers: generateRandomUsers(2),
    tags: ["Economy", "Inflation"],
    featured: false,
    verified: true,
  },
  {
    id: "es-6",
    image: "https://images.unsplash.com/photo-1616443586071-cd1f0a65ef5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwZW52aXJvbm1lbnQlMjBuYXR1cmV8ZW58MXx8fHwxNzY1NTM5NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: { name: "Climate", slug: "climate" },
    date: getDaysUntil(new Date("2025-12-19")),
    endDate: new Date("2025-12-19"),
    question: "Will renewable energy set a new record this month?",
    stats: {
      volume: 380000,
      volumeFormatted: formatNum(380000),
      participants: 2891,
      participantsFormatted: formatNum(2891),
      comments: 92,
      commentsFormatted: formatComments(92),
      liquidity: 150000,
      liquidityFormatted: formatNum(150000),
    },
    prediction: { yesPercentage: 64, noPercentage: 36 },
    recentUsers: generateRandomUsers(2),
    tags: ["Climate", "Energy", "Records"],
    featured: false,
    verified: true,
  },
];

// Multi-Outcome Markets - Example markets with multiple possible outcomes
export const multiOutcomeMarkets: Market[] = [
  {
    id: "mo-1",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop",
    category: { name: "Sports", slug: "sports" },
    date: getDaysUntil(new Date("2025-12-20")),
    endDate: new Date("2025-12-20"),
    question: "Who will win the Premier League match?",
    description: "Market resolves based on the final match result",
    stats: {
      volume: 450000,
      volumeFormatted: formatNum(450000),
      participants: 3200,
      participantsFormatted: formatNum(3200),
      comments: 112,
      commentsFormatted: formatComments(112),
      liquidity: 180000,
      liquidityFormatted: formatNum(180000),
    },
    prediction: { yesPercentage: 45, noPercentage: 55 }, // Legacy support
    outcomes: [
      { id: 'newcastle', label: 'Newcastle', percentage: 45, color: 'var(--chart-1)', icon: 'Y' },
      { id: 'draw', label: 'Draw', percentage: 30, color: 'var(--chart-3)', icon: 'D' },
      { id: 'opponent', label: 'Manchester', percentage: 25, color: 'var(--chart-2)', icon: 'N' },
    ],
    recentUsers: generateRandomUsers(2),
    tags: ["Sports", "Soccer", "Premier League"],
    featured: true,
    verified: true,
  },
  {
    id: "mo-2",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    category: { name: "Technology", slug: "technology" },
    date: getDaysUntil(new Date("2026-01-01")),
    endDate: new Date("2026-01-01"),
    question: "Which company will release a major AI product first?",
    description: "Market resolves when a major AI product is officially released",
    stats: {
      volume: 890000,
      volumeFormatted: formatNum(890000),
      participants: 5432,
      participantsFormatted: formatNum(5432),
      comments: 234,
      commentsFormatted: formatComments(234),
      liquidity: 350000,
      liquidityFormatted: formatNum(350000),
    },
    prediction: { yesPercentage: 35, noPercentage: 65 }, // Legacy support
    outcomes: [
      { id: 'google', label: 'Google', percentage: 35, color: 'var(--chart-1)', icon: 'G' },
      { id: 'openai', label: 'OpenAI', percentage: 40, color: 'var(--chart-4)', icon: 'O' },
      { id: 'meta', label: 'Meta', percentage: 15, color: 'var(--chart-2)', icon: 'M' },
      { id: 'other', label: 'Other', percentage: 10, color: 'var(--chart-3)', icon: '?' },
    ],
    recentUsers: generateRandomUsers(2),
    tags: ["AI", "Technology", "Product Launch"],
    featured: true,
    verified: true,
  },
  {
    id: "mo-3",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
    category: { name: "Entertainment", slug: "entertainment" },
    date: getDaysUntil(new Date("2026-02-28")),
    endDate: new Date("2026-02-28"),
    question: "Which movie will win Best Picture at the Oscars?",
    description: "Market resolves based on the Academy Awards ceremony results",
    stats: {
      volume: 720000,
      volumeFormatted: formatNum(720000),
      participants: 4521,
      participantsFormatted: formatNum(4521),
      comments: 189,
      commentsFormatted: formatComments(189),
      liquidity: 290000,
      liquidityFormatted: formatNum(290000),
    },
    prediction: { yesPercentage: 38, noPercentage: 62 }, // Legacy support
    outcomes: [
      { id: 'oppenheimer', label: 'Oppenheimer', percentage: 38, color: 'var(--chart-1)', icon: 'O' },
      { id: 'barbie', label: 'Barbie', percentage: 32, color: 'var(--chart-4)', icon: 'B' },
      { id: 'killers', label: 'Killers of the Flower Moon', percentage: 22, color: 'var(--chart-2)', icon: 'K' },
      { id: 'other', label: 'Other Nominee', percentage: 8, color: 'var(--chart-3)', icon: '?' },
    ],
    recentUsers: generateRandomUsers(2),
    tags: ["Entertainment", "Movies", "Oscars"],
    featured: true,
    verified: true,
  },
  {
    id: "mo-4",
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&auto=format&fit=crop",
    category: { name: "Finance", slug: "finance" },
    date: getDaysUntil(new Date("2025-12-31")),
    endDate: new Date("2025-12-31"),
    question: "Which cryptocurrency will have the highest gains in Q1 2026?",
    description: "Market resolves based on percentage gains from Jan 1 to Mar 31, 2026",
    stats: {
      volume: 980000,
      volumeFormatted: formatNum(980000),
      participants: 6234,
      participantsFormatted: formatNum(6234),
      comments: 312,
      commentsFormatted: formatComments(312),
      liquidity: 420000,
      liquidityFormatted: formatNum(420000),
    },
    prediction: { yesPercentage: 42, noPercentage: 58 }, // Legacy support
    outcomes: [
      { id: 'bitcoin', label: 'Bitcoin (BTC)', percentage: 28, color: 'var(--chart-1)', icon: '₿' },
      { id: 'ethereum', label: 'Ethereum (ETH)', percentage: 42, color: 'var(--chart-4)', icon: 'Ξ' },
      { id: 'solana', label: 'Solana (SOL)', percentage: 18, color: 'var(--chart-2)', icon: 'S' },
      { id: 'other', label: 'Other', percentage: 12, color: 'var(--chart-3)', icon: '?' },
    ],
    recentUsers: generateRandomUsers(2),
    tags: ["Finance", "Crypto", "Trading"],
    featured: true,
    verified: true,
  },
];
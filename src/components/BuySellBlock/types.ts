import type { Market } from '../../data/markets';

export type Outcome = string; // Changed from 'YES' | 'NO' to support multi-outcome markets
export type Tab = 'Buy' | 'Sell';

export interface MarketPrices {
  yesPrice: number; // Price as decimal (e.g., 0.59 for 59%)
  noPrice: number;  // Price as decimal (e.g., 0.41 for 41%)
}

export interface BuySellBlockProps {
  selectedOutcome: Outcome;
  onOutcomeChange: (outcome: Outcome) => void;
  amount: string;
  onAmountChange: (amount: string) => void;
  onBuy: () => void;
  marketPrices?: MarketPrices; // Optional market prices
  market?: Market; // Optional market data for multi-outcome support
  // Sports match data
  matchInfo?: {
    team1Name: string;
    team2Name: string;
    selectedTeamCode: string;
    selectedTeamName?: string;
    teamIcon?: string;
    teamColor?: string;
  };
}

export interface OutcomeButtonProps {
  type: 'Yes' | 'No';
  price: string;
  selected: boolean;
  onClick: () => void;
  // Optional props for multi-outcome markets
  color?: string;    // Hex color (e.g., "#30A46C")
  icon?: string;     // Icon text/emoji (e.g., "G", "🎯")
  label?: string;    // Display label (e.g., "Google", "Newcastle")
}

export interface AmountInputProps {
  amount: string;
  balance: number;
  isFocused: boolean;
  hasInsufficientBalance: boolean;
  onAmountChange: (amount: string) => void;
  onFocusChange: (focused: boolean) => void;
  onQuickAmount: (label: string) => void;
  activeTab: Tab;
  isLimitOrder: boolean;
  selectedOutcome: Outcome;
  availableShares: number;
}

export interface InfoCardProps {
  selectedOutcome: Outcome;
  shares: number;
  inputAmount: number;
  fee: number;
  feePercent: number;
  netPurchase: number;
  activeTab: Tab;
  isLimitOrder: boolean;
  amountValue: number;
  effectivePrice: number;
}

export interface ToWinCardProps {
  selectedOutcome: Outcome;
  toWinAmount: number;
}
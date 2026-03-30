/**
 * Global TypeScript Type Definitions
 * Shared types used across the application
 */

// Re-export market types
export type {
  Market,
  MarketCategory,
  MarketStats,
  MarketPrediction,
  MarketUser,
} from '../data/markets';

// Common component props
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Theme
export type Theme = 'light' | 'dark';

// Prediction types
export type PredictionOutcome = 'yes' | 'no';

// Order types
export type OrderType = 'market' | 'limit';

// Status types
export type TransactionStatus = 'pending' | 'completed' | 'failed';
export type MarketStatus = 'active' | 'ended' | 'cancelled';

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

// Event handler types
export type ClickHandler = (event: React.MouseEvent) => void;
export type ChangeHandler = (event: React.ChangeEvent) => void;
export type SubmitHandler = (event: React.FormEvent) => void;

// API response types (for future use)
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Modal props
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

// Card position (for animations)
export interface CardPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

// Filter options
export interface FilterOptions {
  category?: string;
  status?: MarketStatus;
  sortBy?: 'volume' | 'participants' | 'endDate' | 'created';
  sortOrder?: 'asc' | 'desc';
}

// Animation variants
export interface AnimationVariant {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

// Carousel settings
export interface CarouselSettings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

// Form field types
export interface FormField {
  name: string;
  value: string | number;
  error?: string;
  touched?: boolean;
}

// User balance
export interface UserBalance {
  total: number;
  available: number;
  locked: number;
}

// Trade details
export interface TradeDetails {
  marketId: string;
  outcome: PredictionOutcome;
  amount: number;
  price: number;
  orderType: OrderType;
  expiresAt?: Date;
}

// Notification
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

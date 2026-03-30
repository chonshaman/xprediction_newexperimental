/**
 * Application Constants
 * 
 * All application-level constants that don't change at runtime.
 * Prevents magic strings and numbers throughout the codebase.
 */

// ==================== MARKET CONSTANTS ====================

export const OUTCOME_TYPE = {
  YES: 'YES',
  NO: 'NO',
} as const;

export type OutcomeType = typeof OUTCOME_TYPE[keyof typeof OUTCOME_TYPE];

export const ORDER_TYPE = {
  MARKET: 'MARKET',
  LIMIT: 'LIMIT',
} as const;

export type OrderType = typeof ORDER_TYPE[keyof typeof ORDER_TYPE];

export const MARKET_STATUS = {
  ACTIVE: 'active',
  ENDED: 'ended',
  RESOLVED: 'resolved',
} as const;

export type MarketStatus = typeof MARKET_STATUS[keyof typeof MARKET_STATUS];

export const MARKET_CATEGORY = {
  ALL: 'all',
  POLITICS: 'politics',
  CRYPTO: 'crypto',
  SPORTS: 'sports',
  ENTERTAINMENT: 'entertainment',
  SCIENCE: 'science',
  ECONOMICS: 'economics',
} as const;

export type MarketCategory = typeof MARKET_CATEGORY[keyof typeof MARKET_CATEGORY];

// ==================== NAVIGATION CONSTANTS ====================

export const PAGE_TYPE = {
  HOME: 'home',
  MARKET: 'market',
  DESIGN_SYSTEM: 'design-system',
  PORTFOLIO: 'portfolio',
  ACTIVITY: 'activity',
  SETTINGS: 'settings',
} as const;

export type PageType = typeof PAGE_TYPE[keyof typeof PAGE_TYPE];

export const SIDEBAR_MENU_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: 'Home',
    page: PAGE_TYPE.HOME,
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    icon: 'Briefcase',
    page: PAGE_TYPE.PORTFOLIO,
  },
  {
    id: 'activity',
    label: 'Activity',
    icon: 'Activity',
    page: PAGE_TYPE.ACTIVITY,
  },
] as const;

export const SIDEBAR_BOTTOM_ITEMS = [
  {
    id: 'design-system',
    label: 'Design System',
    icon: 'Palette',
    page: PAGE_TYPE.DESIGN_SYSTEM,
  },
  {
    id: 'theme-toggle',
    label: 'Light Mode',
    icon: 'Sun',
    action: 'toggle-theme',
  },
] as const;

// ==================== UI CONSTANTS ====================

export const BUTTON_SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];

export const BUTTON_VARIANT = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  DESTRUCTIVE: 'destructive',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  SECONDARY: 'secondary',
  LINK: 'link',
} as const;

export type ButtonVariant = typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT];

// ==================== CAROUSEL CONSTANTS ====================

export const CAROUSEL_CONFIG = {
  // Hero Carousel
  HERO_ITEMS_DESKTOP: 4,
  HERO_ITEMS_TABLET: 3,
  HERO_ITEMS_MOBILE_L: 2,
  HERO_ITEMS_MOBILE: 1,

  // Ending Soon Carousel
  ENDING_SOON_ITEMS: 1,

  // Breakpoints
  BREAKPOINT_DESKTOP: 1280,
  BREAKPOINT_TABLET: 1024,
  BREAKPOINT_MOBILE_L: 768,
} as const;

// ==================== LAYOUT CONSTANTS ====================

export const LAYOUT = {
  MAX_WIDTH: '1280px',
  SIDEBAR_WIDTH: '280px',
  HEADER_HEIGHT: '64px',
  CONTENT_PADDING: '24px',
} as const;

// ==================== FORM CONSTANTS ====================

export const INPUT_TYPE = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  NUMBER: 'number',
  SEARCH: 'search',
} as const;

export type InputType = typeof INPUT_TYPE[keyof typeof INPUT_TYPE];

// ==================== FORMAT CONSTANTS ====================

export const CURRENCY_CONFIG = {
  SYMBOL: '$',
  DECIMAL_PLACES: 2,
  LOCALE: 'en-US',
} as const;

export const PERCENTAGE_CONFIG = {
  DECIMAL_PLACES: 1,
  SHOW_SIGN: true,
} as const;

// ==================== ANIMATION CONSTANTS ====================

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
  VERY_SLOW: 500,
} as const;

export const DEBOUNCE_DELAY = {
  SEARCH: 300,
  RESIZE: 150,
  SCROLL: 100,
} as const;

// ==================== VALIDATION CONSTANTS ====================

export const VALIDATION = {
  MIN_BET_AMOUNT: 1,
  MAX_BET_AMOUNT: 10000,
  MIN_LIMIT_PRICE: 0.01,
  MAX_LIMIT_PRICE: 0.99,
  EXPIRATION_OPTIONS: ['1 Day', '3 Days', '7 Days', '30 Days', 'Never'] as const,
} as const;

// ==================== API CONSTANTS ====================

export const API_CONFIG = {
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

// ==================== ERROR MESSAGES ====================

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_AMOUNT: 'Please enter a valid amount.',
  INSUFFICIENT_BALANCE: 'Insufficient balance.',
  MARKET_NOT_FOUND: 'Market not found.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
} as const;

// ==================== SUCCESS MESSAGES ====================

export const SUCCESS_MESSAGES = {
  ORDER_PLACED: 'Order placed successfully!',
  BALANCE_UPDATED: 'Balance updated.',
  PREFERENCES_SAVED: 'Preferences saved.',
} as const;

// ==================== FEATURE FLAGS ====================

export const FEATURES = {
  ENABLE_MULTI_OUTCOME: true,
  ENABLE_LIMIT_ORDERS: true,
  ENABLE_QUICK_BUY: true,
  ENABLE_NOTIFICATIONS: false,
  ENABLE_DARK_MODE: true,
} as const;

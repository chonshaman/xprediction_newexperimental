/**
 * Constants - Centralized Export
 * 
 * Single import point for all application constants
 */

// Design Tokens
export * from './design-tokens';

// Application Constants
export * from './app';

// Re-export for convenience
export { COLORS, SPACING, RADIUS, TYPOGRAPHY, SHADOWS, TRANSITIONS, Z_INDEX } from './design-tokens';
export { 
  OUTCOME_TYPE,
  ORDER_TYPE,
  MARKET_STATUS,
  MARKET_CATEGORY,
  PAGE_TYPE,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  CAROUSEL_CONFIG,
  LAYOUT,
  ANIMATION_DURATION,
  DEBOUNCE_DELAY,
  VALIDATION,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  FEATURES,
} from './app';

export type {
  OutcomeType,
  OrderType,
  MarketStatus,
  MarketCategory,
  PageType,
  ButtonSize,
  ButtonVariant,
  ColorToken,
  SpacingToken,
  RadiusToken,
  FontSizeToken,
  FontWeightToken,
  ShadowToken,
} from './design-tokens';

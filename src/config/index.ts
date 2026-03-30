/**
 * Configuration Index
 * Central export point for all configuration
 */

export * from './app-config';

// Re-export commonly used configs for convenience
export {
  APP_CONFIG,
  LAYOUT_CONFIG,
  CAROUSEL_CONFIG,
  ANIMATION_CONFIG,
  COMPONENT_SIZES,
  USER_CONFIG,
  API_CONFIG,
  FEATURE_FLAGS,
  THEME_CONFIG,
} from './app-config';

export type { AppConfig } from './app-config';

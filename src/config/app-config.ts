/**
 * Application Configuration
 * Central configuration file to reduce hardcoding across the application
 */

// Layout Configuration
export const LAYOUT_CONFIG = {
  maxContentWidth: 1280,
  sidebarWidth: {
    desktop: 280,
    collapsed: 64,
  },
  headerHeight: {
    desktop: 64,
    mobile: 56,
  },
} as const;

// Carousel Configuration
export const CAROUSEL_CONFIG = {
  autoplaySpeed: 7000,
  transitionSpeed: 500,
  slidesToShow: {
    desktop: 4, // >= 1280px
    large: 3, // >= 1024px and < 1280px
    tablet: 2, // >= 768px and < 1024px
    mobile: 1, // >= 640px and < 768px
    small: 1, // < 640px
  },
  breakpoints: {
    large: 1280, // Breakpoint for 3 cards
    desktop: 1024, // Breakpoint for 2 cards
    tablet: 768,
    mobile: 640,
  },
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    default: 'ease-out',
    bounce: [0.16, 1, 0.3, 1] as const,
    smooth: [0.4, 0, 0.2, 1] as const,
  },
  messageTimeout: 5000,
} as const;

// Component Sizing
export const COMPONENT_SIZES = {
  avatar: {
    small: 16,
    medium: 24,
    large: 32,
  },
  card: {
    height: {
      mobile: 394, // 16% increase from 340
      tablet: 380,
      desktop: 360,
    },
    padding: {
      mobile: 12,
      desktop: 16,
    },
  },
  button: {
    height: {
      mobile: 36,
      desktop: 40,
    },
    arrow: 40,
  },
} as const;

// User Generation Config
export const USER_CONFIG = {
  defaultInitials: ['CN', 'LA', 'MK', 'JS', 'RB', 'TW', 'AS', 'DK'],
  defaultColors: [
    '#8145b5',
    '#16433c',
    '#e54d2e',
    '#0091ff',
    '#30a46c',
    '#f76808',
  ],
} as const;

// API & External Services (placeholder for future use)
export const API_CONFIG = {
  baseUrl: '',
  timeout: 10000,
  retryAttempts: 3,
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  enableAnalytics: false,
  enableNotifications: false,
  enableDarkMode: true,
  enableQuickBuy: true,
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  defaultTheme: 'dark' as 'light' | 'dark',
  storageKey: 'app-theme',
} as const;

// Export all configs as a single object for convenience
export const APP_CONFIG = {
  layout: LAYOUT_CONFIG,
  carousel: CAROUSEL_CONFIG,
  animation: ANIMATION_CONFIG,
  sizes: COMPONENT_SIZES,
  users: USER_CONFIG,
  api: API_CONFIG,
  features: FEATURE_FLAGS,
  theme: THEME_CONFIG,
} as const;

export type AppConfig = typeof APP_CONFIG;
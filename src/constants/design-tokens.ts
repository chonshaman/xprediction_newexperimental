/**
 * Design Tokens - CSS Variable Constants
 * 
 * Type-safe access to design system CSS variables.
 * All values reference CSS custom properties defined in /styles/globals.css
 * 
 * Usage:
 *   import { COLORS, SPACING, RADIUS } from '@/constants/design-tokens';
 *   <div style={{ backgroundColor: COLORS.lum01, padding: SPACING.gap1rem }}>
 */

export const COLORS = {
  // Luminance (Light Mode Backgrounds)
  lum01: 'var(--lum-01)',
  lum02: 'var(--lum-02)',
  lum03: 'var(--lum-03)',
  lum04: 'var(--lum-04)',
  lum05: 'var(--lum-05)',
  lum06: 'var(--lum-06)',
  lum07: 'var(--lum-07)',
  lum08: 'var(--lum-08)',
  lum09: 'var(--lum-09)',
  lum10: 'var(--lum-10)',
  lum11: 'var(--lum-11)',
  lum12: 'var(--lum-12)',

  // Card Colors
  cardNormal: 'var(--card-normal)',
  cardHover: 'var(--card-hover)',
  cardForeground: 'var(--card-foreground)',

  // Primary Colors
  primary: 'var(--primary)',
  primaryForeground: 'var(--primary-foreground)',
  primaryButtonBg: 'var(--primary-button-bg)',
  primaryButtonBgHover: 'var(--primary-button-bg-hover)',

  // Alpha Colors
  blackA1: 'var(--black-a1)',
  blackA2: 'var(--black-a2)',
  blackA3: 'var(--black-a3)',
  blackA4: 'var(--black-a4)',
  blackA5: 'var(--black-a5)',
  whiteA1: 'var(--white-a1)',
  whiteA2: 'var(--white-a2)',
  whiteA3: 'var(--white-a3)',

  // Iris (Primary Purple)
  iris9: 'var(--iris-9)',
  iris10: 'var(--iris-10)',
  iris11: 'var(--iris-11)',

  // Red (Destructive)
  red8: 'var(--red-8)',
  red9: 'var(--red-9)',
  red10: 'var(--red-10)',
  red11: 'var(--red-11)',

  // Green (Success)
  green9: 'var(--green-9)',
  green10: 'var(--green-10)',
  green11: 'var(--green-11)',

  // Blue
  blue9: 'var(--blue-9)',
  blue10: 'var(--blue-10)',
  blue11: 'var(--blue-11)',

  // Muted
  mutedForeground: 'var(--muted-foreground)',
  
  // Slate
  slate50: 'var(--slate-50)',
  slate100: 'var(--slate-100)',
  slate200: 'var(--slate-200)',
  slate500: 'var(--slate-500)',
  slate900: 'var(--slate-900)',
  slate950: 'var(--slate-950)',
} as const;

export const SPACING = {
  // Gap Variables
  gap025rem: 'var(--gap--0-25rem)', // 4px
  gap05rem: 'var(--gap--0-5rem)',   // 8px
  gap075rem: 'var(--gap--0-75rem)', // 12px
  gap1rem: 'var(--gap--1rem)',      // 16px
  gap125rem: 'var(--gap--1-25rem)', // 20px
  gap15rem: 'var(--gap--1-5rem)',   // 24px
  gap2rem: 'var(--gap--2rem)',      // 32px
  gap25rem: 'var(--gap--2-5rem)',   // 40px
  gap3rem: 'var(--gap--3rem)',      // 48px
  gap4rem: 'var(--gap--4rem)',      // 64px
  gap5rem: 'var(--gap--5rem)',      // 80px
} as const;

export const RADIUS = {
  // Border Radius
  none: 'var(--border-radius--0px)',
  sm: 'var(--border-radius--0-125rem)',   // 2px
  base: 'var(--border-radius--0-25rem)',  // 4px
  md: 'var(--border-radius--0-375rem)',   // 6px
  lg: 'var(--border-radius--0-5rem)',     // 8px
  xl: 'var(--border-radius--0-75rem)',    // 12px
  '2xl': 'var(--border-radius--1rem)',    // 16px
  '3xl': 'var(--border-radius--1-5rem)',  // 24px
  full: 'var(--border-radius--9999px)',

  // Semantic Radius
  button: 'var(--radius-button)',
  card: 'var(--radius-card)',
  input: 'var(--radius-input)',
  badge: 'var(--radius-badge)',
} as const;

export const TYPOGRAPHY = {
  // Font Sizes
  fontSize: {
    xxs: 'var(--text-xxs)',   // 10px
    xs: 'var(--text-xs)',     // 12px
    s: 'var(--text-s)',       // 14px
    base: 'var(--text-base)', // 16px
    l: 'var(--text-l)',       // 18px
    xl: 'var(--text-xl)',     // 20px
    '2xl': 'var(--text-2xl)', // 24px
    '3xl': 'var(--text-3xl)', // 30px
    '4xl': 'var(--text-4xl)', // 48px
    '5xl': 'var(--text-5xl)', // 60px
  },

  // Font Weights
  fontWeight: {
    normal: 'var(--font-weight-normal)',       // 400
    medium: 'var(--font-weight-medium)',       // 500
    semiBold: 'var(--font-weight-semi-bold)',  // 600
    extraBold: 'var(--font-weight-extra-bold)', // 800
  },

  // Font Families
  fontFamily: {
    inter: 'Inter, system-ui, -apple-system, sans-serif',
    kanit: 'Kanit, Inter, system-ui, sans-serif',
  },
} as const;

export const SHADOWS = {
  card: 'var(--shadow-card)',
  cardHover: 'var(--shadow-card-hover)',
  dialog: 'var(--shadow-dialog)',
  dropdown: 'var(--shadow-dropdown)',
} as const;

export const TRANSITIONS = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1200,
  popover: 1300,
  tooltip: 1400,
} as const;

// Type exports for TypeScript
export type ColorToken = typeof COLORS[keyof typeof COLORS];
export type SpacingToken = typeof SPACING[keyof typeof SPACING];
export type RadiusToken = typeof RADIUS[keyof typeof RADIUS];
export type FontSizeToken = typeof TYPOGRAPHY.fontSize[keyof typeof TYPOGRAPHY.fontSize];
export type FontWeightToken = typeof TYPOGRAPHY.fontWeight[keyof typeof TYPOGRAPHY.fontWeight];
export type ShadowToken = typeof SHADOWS[keyof typeof SHADOWS];

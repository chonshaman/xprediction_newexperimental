/**
 * Shared Style Utilities for Design System
 * 
 * Centralized style configurations to eliminate duplication
 * and ensure consistency across all preview components.
 * 
 * ALL values use CSS variables from /styles/globals.css
 */

import React from 'react';

// ==================== TYPE DEFINITIONS ====================

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonState = 'default' | 'hover' | 'active' | 'focused' | 'disabled';
export type ButtonVariant = 'default' | 'primary' | 'destructive' | 'outline' | 'ghost' | 'secondary' | 'link';

// ==================== BUTTON SIZES ====================

/**
 * Standard button size configurations
 * Uses design system CSS variables
 */
export const buttonSizes: Record<ButtonSize, React.CSSProperties> = {
  xs: {
    height: '28px',
    padding: '0 var(--gap--0-5rem)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-semi-bold)',
    borderRadius: 'var(--radius-button)',
  },
  sm: {
    height: '32px',
    padding: '0 var(--gap--0-75rem)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-semi-bold)',
    borderRadius: 'var(--radius-button)',
  },
  md: {
    height: '40px',
    padding: '0 var(--gap--1rem)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-semi-bold)',
    borderRadius: 'var(--radius-button)',
  },
  lg: {
    height: '48px',
    padding: '0 var(--gap--1-5rem)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-semi-bold)',
    borderRadius: 'var(--radius-button)',
  },
} as const;

// ==================== BUTTON STATES ====================

/**
 * Standard button state configurations
 */
export const buttonStates: Record<ButtonState, React.CSSProperties> = {
  default: {},
  hover: {
    transform: 'translateY(-2px)',
  },
  active: {
    transform: 'scale(0.98)',
  },
  focused: {
    outline: '2px solid var(--iris-9)',
    outlineOffset: '2px',
  },
  disabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
} as const;

// ==================== BUTTON VARIANTS ====================

/**
 * Button variant base styles
 */
export const buttonVariants: Record<ButtonVariant, React.CSSProperties> = {
  default: {
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
  },
  primary: {
    backgroundColor: 'var(--primary-button-bg)',
    color: 'var(--primary-foreground)',
  },
  destructive: {
    background: 'var(--red-9)',
    color: 'white',
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--black-a2)',
    color: 'var(--card-foreground)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--card-foreground)',
  },
  secondary: {
    background: 'var(--lum-02)',
    color: 'var(--card-foreground)',
  },
  link: {
    background: 'transparent',
    color: 'var(--iris-11)',
    textDecoration: 'underline',
    padding: '0',
    height: 'auto',
  },
} as const;

// ==================== HOVER EFFECTS ====================

/**
 * Variant-specific hover effects
 */
export const buttonVariantHoverEffects: Record<ButtonVariant, React.CSSProperties> = {
  default: {
    background: 'var(--card-hover)',
  },
  primary: {
    backgroundColor: 'var(--primary-button-bg-hover)',
    boxShadow: '0 8px 24px rgba(91, 91, 214, 0.35), 0 4px 12px rgba(91, 91, 214, 0.25)',
  },
  destructive: {
    background: 'var(--red-8)',
    boxShadow: '0 6px 16px rgba(229, 72, 77, 0.35)',
  },
  outline: {
    background: 'var(--black-a1)',
    transform: 'translateY(-1px)',
  },
  ghost: {
    background: 'var(--black-a1)',
  },
  secondary: {
    background: 'var(--lum-03)',
    transform: 'translateY(-1px)',
  },
  link: {
    color: 'var(--iris-10)',
  },
} as const;

// ==================== FORM STYLES ====================

/**
 * Standard form input styles
 */
export const formInputStyles = {
  base: {
    background: 'var(--lum-01)',
    border: '1px solid var(--black-a2)',
    borderRadius: 'var(--border-radius--0-5rem)',
    padding: 'var(--gap--0-5rem) var(--gap--0-75rem)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--card-foreground)',
    fontFamily: 'Inter, sans-serif',
    width: '100%',
  },
  hover: {
    background: 'var(--card-hover)',
    borderColor: 'var(--black-a2)',
  },
  focused: {
    background: 'var(--card-hover)',
    border: '1px solid var(--primary-button-bg)',
    outline: 'none',
    boxShadow: '0 0 0 1px var(--primary-button-bg)',
  },
  error: {
    borderColor: 'var(--chart-2)',
    boxShadow: '0 0 0 1px var(--chart-2)',
  },
  disabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
} as const;

/**
 * Textarea-specific styles
 */
export const textareaStyles = {
  ...formInputStyles,
  base: {
    ...formInputStyles.base,
    minHeight: '80px',
    resize: 'vertical' as const,
  },
} as const;

// ==================== BADGE STYLES ====================

/**
 * Badge variant styles
 */
export const badgeVariants = {
  default: {
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
  },
  secondary: {
    background: 'var(--lum-02)',
    color: 'var(--card-foreground)',
  },
  destructive: {
    background: 'var(--red-9)',
    color: 'white',
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--black-a2)',
    color: 'var(--card-foreground)',
  },
} as const;

// ==================== HELPER FUNCTIONS ====================

/**
 * Combine multiple style objects
 */
export function combineStyles(...styles: React.CSSProperties[]): React.CSSProperties {
  return Object.assign({}, ...styles);
}

/**
 * Get complete button style for a configuration
 */
export function getButtonStyle(
  variant: ButtonVariant,
  size: ButtonSize,
  state: ButtonState,
  customStyles?: React.CSSProperties
): React.CSSProperties {
  const baseStyle = buttonSizes[size];
  const variantStyle = buttonVariants[variant];
  const stateStyle = buttonStates[state];
  
  // Add hover effect if in hover state
  const hoverEffect = state === 'hover' ? buttonVariantHoverEffects[variant] : {};
  
  return combineStyles(baseStyle, variantStyle, stateStyle, hoverEffect, customStyles || {});
}

/**
 * Check if a component should be wrapped in pointer-events: none
 */
export function shouldDisablePointerEvents(state: ButtonState): boolean {
  return ['hover', 'active', 'focused'].includes(state);
}

/**
 * Wrap component in div with pointer-events: none if needed
 */
export function wrapIfNeeded(
  component: React.ReactNode,
  state: ButtonState
): React.ReactNode {
  if (shouldDisablePointerEvents(state)) {
    return <div style={{ pointerEvents: 'none' }}>{component}</div>;
  }
  return component;
}

// ==================== CONSTANTS ====================

/**
 * Common box shadows
 */
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  primaryGlow: '0 8px 24px rgba(91, 91, 214, 0.35), 0 4px 12px rgba(91, 91, 214, 0.25)',
  destructiveGlow: '0 6px 16px rgba(229, 72, 77, 0.35)',
  focusRing: '0 0 0 2px var(--iris-9)',
} as const;

/**
 * Common transitions
 */
export const transitions = {
  fast: '150ms ease-out',
  normal: '200ms ease-out',
  slow: '300ms ease-out',
} as const;

/**
 * Z-index layers
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  modal: 2000,
  tooltip: 3000,
  toast: 4000,
} as const;

// ==================== EXPORT ====================

export default {
  buttonSizes,
  buttonStates,
  buttonVariants,
  buttonVariantHoverEffects,
  formInputStyles,
  textareaStyles,
  badgeVariants,
  shadows,
  transitions,
  zIndex,
  combineStyles,
  getButtonStyle,
  shouldDisablePointerEvents,
  wrapIfNeeded,
};

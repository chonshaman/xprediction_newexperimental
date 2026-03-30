/**
 * Type Definitions for Design System
 * 
 * Centralized type definitions to ensure type safety
 * and consistency across the design system.
 */

import React from 'react';

// ==================== BASIC TYPES ====================

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonState = 'default' | 'hover' | 'active' | 'focused' | 'disabled';
export type ButtonVariant = 
  | 'default' 
  | 'primary' 
  | 'destructive' 
  | 'outline' 
  | 'ghost' 
  | 'secondary' 
  | 'link';

export type ComponentCategory = 
  | 'Button' 
  | 'Form' 
  | 'Badge' 
  | 'Market Button' 
  | 'Dialog' 
  | 'Menu' 
  | 'Table' 
  | 'Advanced';

export type FormInputState = 'default' | 'hover' | 'focused' | 'error' | 'disabled';
export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

// ==================== CSS VARIABLE ====================

/**
 * Represents a CSS variable used in the design system
 */
export interface CSSVariable {
  /** The CSS property name (e.g., 'background', 'color') */
  name: string;
  /** The CSS variable value (e.g., 'var(--primary-button-bg)') */
  value: string;
  /** Optional actual resolved value (e.g., '#5b5bd6') for documentation */
  actualValue?: string;
}

// ==================== SIZE STATE ====================

/**
 * Represents a specific size/state combination of a component
 */
export interface SizeState {
  /** Size identifier (e.g., 'SM', 'MD', 'LG') */
  size: string;
  /** State identifier (e.g., 'Default', 'Hover', 'Disabled') */
  state: string;
  /** Human-readable description */
  description: string;
  /** React component to render the preview */
  renderComponent: React.ComponentType;
  /** CSS variables used in this configuration */
  cssVars: CSSVariable[];
}

// ==================== COMPONENT VARIANT ====================

/**
 * Represents a complete component variant with all size/state combinations
 */
export interface ComponentVariant {
  /** Unique identifier for the variant */
  id: string;
  /** Display label for the variant */
  label: string;
  /** Category the component belongs to */
  category: ComponentCategory;
  /** All size/state combinations for this variant */
  sizeStates: SizeState[];
}

// ==================== STYLE CONFIG ====================

/**
 * Configuration object for component styles
 */
export interface StyleConfig {
  /** Size-based styles */
  sizes: Record<ButtonSize, React.CSSProperties>;
  /** State-based styles */
  states: Record<ButtonState, React.CSSProperties>;
  /** Variant-based styles */
  variants: Record<ButtonVariant, React.CSSProperties>;
}

// ==================== PREVIEW CONFIG ====================

/**
 * Configuration for creating a preview component
 */
export interface PreviewConfig {
  /** Component variant */
  variant: ButtonVariant;
  /** Component size */
  size: ButtonSize;
  /** Component state */
  state: ButtonState;
  /** Optional custom text */
  text?: string;
  /** Optional custom styles */
  customStyles?: React.CSSProperties;
  /** Whether to use a specialized component */
  useSpecializedComponent?: boolean;
}

// ==================== COMPONENT PREVIEW PROPS ====================

/**
 * Props for the ComponentPreview component
 */
export interface ComponentPreviewProps {
  /** The component variant to preview */
  variant: ComponentVariant;
  /** Currently selected size */
  selectedSize: string;
  /** Currently selected state */
  selectedState: string;
  /** Callback when size changes */
  onSizeChange: (size: string) => void;
  /** Callback when state changes */
  onStateChange: (state: string) => void;
}

// ==================== DESIGN SYSTEM PAGE PROPS ====================

/**
 * Props for the DesignSystemPage component
 */
export interface DesignSystemPageProps {
  /** Optional initial category to display */
  initialCategory?: ComponentCategory;
  /** Optional initial variant to display */
  initialVariant?: string;
}

// ==================== FILTER OPTIONS ====================

/**
 * Filter options for the design system browser
 */
export interface FilterOptions {
  /** Category filter */
  category?: ComponentCategory | 'all';
  /** Search query */
  search?: string;
  /** Tag filters */
  tags?: string[];
}

// ==================== SEARCH RESULT ====================

/**
 * Search result item
 */
export interface SearchResult {
  /** Component variant */
  variant: ComponentVariant;
  /** Matching score (0-1) */
  score: number;
  /** Matched fields */
  matchedFields: string[];
}

// ==================== NAVIGATION ====================

/**
 * Navigation item for sidebar
 */
export interface NavigationItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional icon */
  icon?: React.ComponentType;
  /** Optional badge count */
  badgeCount?: number;
  /** Whether item is active */
  isActive?: boolean;
  /** Click handler */
  onClick: () => void;
}

/**
 * Navigation group
 */
export interface NavigationGroup {
  /** Group title */
  title: string;
  /** Items in this group */
  items: NavigationItem[];
}

// ==================== ANALYTICS ====================

/**
 * Analytics event for component usage
 */
export interface ComponentUsageEvent {
  /** Component variant ID */
  variantId: string;
  /** Component category */
  category: ComponentCategory;
  /** Selected size */
  size: string;
  /** Selected state */
  state: string;
  /** Timestamp */
  timestamp: number;
  /** User action */
  action: 'view' | 'copy' | 'export';
}

// ==================== EXPORT CONFIG ====================

/**
 * Configuration for exporting component code
 */
export interface ExportConfig {
  /** Format to export */
  format: 'tsx' | 'jsx' | 'css' | 'json';
  /** Whether to include comments */
  includeComments?: boolean;
  /** Whether to include CSS variables documentation */
  includeCSSVars?: boolean;
  /** Whether to minify output */
  minify?: boolean;
}

// ==================== PERFORMANCE METRICS ====================

/**
 * Performance metrics for a component
 */
export interface PerformanceMetrics {
  /** Component identifier */
  componentId: string;
  /** Render time in milliseconds */
  renderTime: number;
  /** Memory usage in KB */
  memoryUsage?: number;
  /** Bundle size impact in KB */
  bundleSize?: number;
  /** Number of re-renders */
  rerenderCount?: number;
}

// ==================== THEME ====================

/**
 * Theme configuration
 */
export interface ThemeConfig {
  /** Theme mode */
  mode: 'light' | 'dark' | 'system';
  /** Primary color */
  primaryColor?: string;
  /** Font family */
  fontFamily?: string;
  /** Custom CSS variables */
  customVariables?: Record<string, string>;
}

// ==================== ACCESSIBILITY ====================

/**
 * Accessibility information for a component
 */
export interface AccessibilityInfo {
  /** ARIA role */
  role?: string;
  /** Required ARIA attributes */
  ariaAttributes?: Record<string, string>;
  /** Keyboard shortcuts */
  keyboardShortcuts?: KeyboardShortcut[];
  /** Screen reader notes */
  screenReaderNotes?: string;
}

/**
 * Keyboard shortcut definition
 */
export interface KeyboardShortcut {
  /** Key combination (e.g., 'Ctrl+C') */
  key: string;
  /** Description of action */
  description: string;
  /** Function to execute */
  handler: () => void;
}

// ==================== VALIDATION ====================

/**
 * Validation result
 */
export interface ValidationResult {
  /** Whether validation passed */
  isValid: boolean;
  /** Validation errors */
  errors: ValidationError[];
  /** Validation warnings */
  warnings: ValidationWarning[];
}

/**
 * Validation error
 */
export interface ValidationError {
  /** Error code */
  code: string;
  /** Error message */
  message: string;
  /** Field that failed validation */
  field?: string;
}

/**
 * Validation warning
 */
export interface ValidationWarning {
  /** Warning code */
  code: string;
  /** Warning message */
  message: string;
  /** Field with warning */
  field?: string;
}

// ==================== TYPE GUARDS ====================

/**
 * Type guard for ButtonVariant
 */
export function isButtonVariant(value: unknown): value is ButtonVariant {
  return typeof value === 'string' && 
    ['default', 'primary', 'destructive', 'outline', 'ghost', 'secondary', 'link'].includes(value);
}

/**
 * Type guard for ButtonSize
 */
export function isButtonSize(value: unknown): value is ButtonSize {
  return typeof value === 'string' && ['xs', 'sm', 'md', 'lg'].includes(value);
}

/**
 * Type guard for ButtonState
 */
export function isButtonState(value: unknown): value is ButtonState {
  return typeof value === 'string' && 
    ['default', 'hover', 'active', 'focused', 'disabled'].includes(value);
}

/**
 * Type guard for ComponentCategory
 */
export function isComponentCategory(value: unknown): value is ComponentCategory {
  return typeof value === 'string' && 
    ['Button', 'Form', 'Badge', 'Market Button', 'Dialog', 'Menu', 'Table', 'Advanced'].includes(value);
}

// ==================== UTILITY TYPES ====================

/**
 * Make all properties in T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Make all properties in T required recursively
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * Extract keys from T where value extends U
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

/**
 * Omit keys from T recursively
 */
export type DeepOmit<T, K extends string> = {
  [P in keyof T]: P extends K 
    ? never 
    : T[P] extends object 
      ? DeepOmit<T[P], K> 
      : T[P];
};

// ==================== CONSTANTS ====================

/**
 * Available button sizes
 */
export const BUTTON_SIZES: readonly ButtonSize[] = ['xs', 'sm', 'md', 'lg'] as const;

/**
 * Available button states
 */
export const BUTTON_STATES: readonly ButtonState[] = [
  'default',
  'hover',
  'active',
  'focused',
  'disabled',
] as const;

/**
 * Available button variants
 */
export const BUTTON_VARIANTS: readonly ButtonVariant[] = [
  'default',
  'primary',
  'destructive',
  'outline',
  'ghost',
  'secondary',
  'link',
] as const;

/**
 * Available component categories
 */
export const COMPONENT_CATEGORIES: readonly ComponentCategory[] = [
  'Button',
  'Form',
  'Badge',
  'Market Button',
  'Dialog',
  'Menu',
  'Table',
  'Advanced',
] as const;

// ==================== EXPORT ====================

export default {
  // Type guards
  isButtonVariant,
  isButtonSize,
  isButtonState,
  isComponentCategory,
  // Constants
  BUTTON_SIZES,
  BUTTON_STATES,
  BUTTON_VARIANTS,
  COMPONENT_CATEGORIES,
};

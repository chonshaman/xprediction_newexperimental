/**
 * CSS Variable Utilities
 * 
 * Type-safe utilities for working with CSS custom properties at runtime.
 * Provides helpers for getting, setting, and manipulating CSS variables.
 */

/**
 * Get the computed value of a CSS variable
 * @param variableName - CSS variable name (with or without --)
 * @param element - Element to get the variable from (defaults to document root)
 * @returns The computed value of the CSS variable
 */
export function getCSSVariable(
  variableName: string,
  element: HTMLElement = document.documentElement
): string {
  const name = variableName.startsWith('--') ? variableName : `--${variableName}`;
  return getComputedStyle(element).getPropertyValue(name).trim();
}

/**
 * Set a CSS variable value
 * @param variableName - CSS variable name (with or without --)
 * @param value - Value to set
 * @param element - Element to set the variable on (defaults to document root)
 */
export function setCSSVariable(
  variableName: string,
  value: string,
  element: HTMLElement = document.documentElement
): void {
  const name = variableName.startsWith('--') ? variableName : `--${variableName}`;
  element.style.setProperty(name, value);
}

/**
 * Remove a CSS variable
 * @param variableName - CSS variable name (with or without --)
 * @param element - Element to remove the variable from (defaults to document root)
 */
export function removeCSSVariable(
  variableName: string,
  element: HTMLElement = document.documentElement
): void {
  const name = variableName.startsWith('--') ? variableName : `--${variableName}`;
  element.style.removeProperty(name);
}

/**
 * Check if a CSS variable exists
 * @param variableName - CSS variable name (with or without --)
 * @param element - Element to check the variable on (defaults to document root)
 * @returns True if the variable exists
 */
export function hasCSSVariable(
  variableName: string,
  element: HTMLElement = document.documentElement
): boolean {
  return getCSSVariable(variableName, element) !== '';
}

/**
 * Create a CSS variable reference string
 * @param variableName - CSS variable name (with or without --)
 * @param fallback - Optional fallback value
 * @returns CSS var() function string
 */
export function cssVar(variableName: string, fallback?: string): string {
  const name = variableName.startsWith('--') ? variableName : `--${variableName}`;
  return fallback ? `var(${name}, ${fallback})` : `var(${name})`;
}

/**
 * Create inline style object with CSS variables
 * @param styles - Object with CSS property names and values
 * @returns React style object
 */
export function createStyleWithVars(
  styles: Record<string, string | number>
): React.CSSProperties {
  return styles as React.CSSProperties;
}

/**
 * Parse a CSS value with units
 * @param value - CSS value string (e.g., "16px", "1rem")
 * @returns Object with numeric value and unit
 */
export function parseCSSValue(value: string): { value: number; unit: string } {
  const match = value.match(/^([-+]?[\d.]+)([a-z%]*)$/i);
  if (!match) {
    return { value: 0, unit: '' };
  }
  return {
    value: parseFloat(match[1]),
    unit: match[2] || '',
  };
}

/**
 * Convert rem to pixels (assumes 16px base)
 * @param rem - Rem value
 * @param baseFontSize - Base font size in pixels (default: 16)
 * @returns Pixel value
 */
export function remToPx(rem: number, baseFontSize: number = 16): number {
  return rem * baseFontSize;
}

/**
 * Convert pixels to rem (assumes 16px base)
 * @param px - Pixel value
 * @param baseFontSize - Base font size in pixels (default: 16)
 * @returns Rem value
 */
export function pxToRem(px: number, baseFontSize: number = 16): number {
  return px / baseFontSize;
}

/**
 * Get all CSS variables from an element
 * @param element - Element to get variables from (defaults to document root)
 * @returns Object with all CSS variables and their values
 */
export function getAllCSSVariables(
  element: HTMLElement = document.documentElement
): Record<string, string> {
  const styles = getComputedStyle(element);
  const variables: Record<string, string> = {};

  // Get inline variables
  for (let i = 0; i < element.style.length; i++) {
    const name = element.style[i];
    if (name.startsWith('--')) {
      variables[name] = element.style.getPropertyValue(name);
    }
  }

  // Get computed variables
  Array.from(styles).forEach((name) => {
    if (name.startsWith('--')) {
      variables[name] = styles.getPropertyValue(name);
    }
  });

  return variables;
}

/**
 * Batch set multiple CSS variables
 * @param variables - Object with variable names and values
 * @param element - Element to set the variables on (defaults to document root)
 */
export function setBatchCSSVariables(
  variables: Record<string, string>,
  element: HTMLElement = document.documentElement
): void {
  Object.entries(variables).forEach(([name, value]) => {
    setCSSVariable(name, value, element);
  });
}

/**
 * Create a CSS custom property string for inline styles
 * @param name - Property name
 * @param value - Property value
 * @returns Object suitable for React inline styles
 */
export function customProperty(
  name: string,
  value: string
): Record<string, string> {
  const propName = name.startsWith('--') ? name : `--${name}`;
  return { [propName]: value } as Record<string, string>;
}

/**
 * Pre-defined CSS variable styles for common components
 * Used for consistent styling across the application
 */
export const CSS_VAR_STYLES = {
  // Arrow button styles for carousels
  arrowButton: {
    backgroundColor: 'var(--card-normal)',
    border: '1px solid var(--black-a2)',
    boxShadow: 'var(--shadow-card)',
  } as React.CSSProperties,

  // Card styles
  card: {
    backgroundColor: 'var(--card-normal)',
    borderRadius: 'var(--radius-card)',
    border: '1px solid var(--black-a2)',
  } as React.CSSProperties,

  // Input styles
  input: {
    backgroundColor: 'var(--lum-01)',
    border: '1px solid var(--black-a2)',
    borderRadius: 'var(--radius-input)',
    color: 'var(--card-foreground)',
  } as React.CSSProperties,

  // Button styles
  primaryButton: {
    backgroundColor: 'var(--primary-button-bg)',
    color: 'var(--primary-foreground)',
    borderRadius: 'var(--radius-button)',
  } as React.CSSProperties,
} as const;
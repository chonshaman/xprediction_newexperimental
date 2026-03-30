/**
 * Utilities Index
 * Central export point for all utility functions
 * This makes imports cleaner and easier to manage
 */

// Export all formatting utilities
export * from './format';

// Export all performance utilities
export * from './performance';

// Export all SVG utilities
export * from './svg-loader';

// Export all CSS variable utilities
export * from './css-vars';

// Re-export commonly used functions for convenience
export {
  formatNumber,
  formatCurrency,
  formatPercentage,
  formatDate,
  formatComments,
  truncateText,
  getInitials,
  getRandomColor,
} from './format';

export {
  debounce,
  throttle,
  useDebounce,
  useIntersectionObserver,
  useElementSize,
  preloadImage,
  isMobileDevice,
  getOptimalImageSize,
} from './performance';

export {
  getSvgById,
  SVG_REGISTRY,
  SVG_PATH_IDS,
  SVG_GRADIENTS,
  createRadialGradient,
} from './svg-loader';

export {
  getCssVar,
  setCssVar,
  CSS_VARS,
  CSS_VAR_STYLES,
  getVar,
  createCssVarStyle,
} from './css-vars';

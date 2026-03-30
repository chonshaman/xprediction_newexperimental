/**
 * SVG Loader Utilities
 * Centralized SVG import and management to reduce code duplication
 */

// Import only the SVG files that exist and are used
import svg08dg7pjb6g from '../imports/svg-08dg7pjb6g';
import svg7hm0uy5lcw from '../imports/svg-7hm0uy5lcw';
import svgz7ak5s97a9 from '../imports/svg-z7ak5s97a9';
import svgzzs9w3edlc from '../imports/svg-zzs9w3edlc';

/**
 * SVG Registry - Maps SVG IDs to their imported paths
 * This allows components to access SVGs by ID instead of importing individually
 */
export const SVG_REGISTRY = {
  clock: svg08dg7pjb6g,        // Used by MarketCard, QuickBuyModal, etc.
  outcomeSelector: svg7hm0uy5lcw, // Used by BuySellBlock/OutcomeSelector
  banana: svgz7ak5s97a9,       // Used by BananaIcon
  sports: svgzzs9w3edlc,       // Used by Sports component
} as const;

/**
 * Get SVG paths by ID
 * @param id - SVG identifier
 * @returns SVG path object or null if not found
 */
export function getSvgById(id: keyof typeof SVG_REGISTRY) {
  return SVG_REGISTRY[id] || null;
}

/**
 * Common SVG path IDs used across the application
 * These reference specific paths within SVG files
 */
export const SVG_PATH_IDS = {
  // Clock icon paths
  CLOCK_CIRCLE: 'pc012c00',
  
  // Yes/No icon paths
  YES_NO_CIRCLE: 'p1f4c2700',
  YES_CHECK: 'p294227c0',
  NO_X: 'p2b92e400',
} as const;

/**
 * SVG Gradient Definitions
 * Centralized gradient definitions for consistency
 */
export const SVG_GRADIENTS = {
  yesGreen: {
    id: 'paint0_radial_yes_dark',
    stops: [
      { offset: '0.1358', color: '#2F7C57' },
      { offset: '0.7046', color: '#3DD68C' },
      { offset: '0.7778', color: '#28684A' },
      { offset: '0.8078', color: '#33B074' },
      { offset: '0.9109', color: '#30A46C' },
      { offset: '0.9623', color: '#2F7C57' },
      { offset: '0.9725', color: '#28684A' },
      { offset: '1', color: '#20573E' },
    ],
  },
  noRed: {
    id: 'paint0_radial_no_dark',
    stops: [
      { offset: '0.1358', color: '#B54548' },
      { offset: '0.7046', color: '#FF9592' },
      { offset: '0.7778', color: '#8C333A' },
      { offset: '0.8078', color: '#EC5D5E' },
      { offset: '0.9109', color: '#E5484D' },
      { offset: '0.9623', color: '#B54548' },
      { offset: '0.9725', color: '#8C333A' },
      { offset: '1', color: '#72232D' },
    ],
  },
} as const;

/**
 * Helper to create radial gradient element
 * @param gradient - Gradient configuration
 * @returns JSX element for radial gradient
 */
export function createRadialGradient(
  gradientConfig: typeof SVG_GRADIENTS.yesGreen | typeof SVG_GRADIENTS.noRed
) {
  return (
    <radialGradient
      id={gradientConfig.id}
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(9.16649 9.16721) scale(9.16667)"
    >
      {gradientConfig.stops.map((stop, index) => (
        <stop key={index} offset={stop.offset} stopColor={stop.color} />
      ))}
    </radialGradient>
  );
}

/**
 * Lazy load SVG function (for future optimization)
 * @param id - SVG identifier
 * @returns Promise resolving to SVG paths
 */
export async function loadSvgAsync(
  id: keyof typeof SVG_REGISTRY
): Promise<typeof SVG_REGISTRY[keyof typeof SVG_REGISTRY]> {
  // For now, return immediately
  // In the future, this could implement dynamic imports
  return SVG_REGISTRY[id];
}

export type SvgId = keyof typeof SVG_REGISTRY;
export type SvgPathId = typeof SVG_PATH_IDS[keyof typeof SVG_PATH_IDS];

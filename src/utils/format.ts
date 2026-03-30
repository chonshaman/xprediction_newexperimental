/**
 * Formatting Utilities
 * Centralized formatting functions for consistent display across the application
 */

/**
 * Format large numbers with K/M suffix
 * @param num - Number to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted string (e.g., "1.5K", "2.3M")
 */
export function formatNumber(num: number, decimals: number = 1): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(decimals)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(decimals)}K`;
  }
  return num.toString();
}

/**
 * Format currency values
 * @param value - Value to format
 * @param currency - Currency symbol (default: '$')
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency: string = '$'): string {
  return `${currency}${formatNumber(value)}`;
}

/**
 * Format percentage values
 * @param value - Value to format (0-100)
 * @param decimals - Number of decimal places (default: 0)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format date to readable string
 * @param date - Date to format
 * @param format - Format type ('short' | 'long' | 'time')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  format: 'short' | 'long' | 'time' = 'short'
): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (format === 'time') {
    // Return time countdown format like "16:54:15"
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  }

  if (format === 'long') {
    return d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  // Short format: "31 Jun, 2025"
  return d.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Format comments count with prefix
 * @param count - Number of comments
 * @returns Formatted string (e.g., "+100", "+1.2K")
 */
export function formatComments(count: number): string {
  return `+${formatNumber(count, count >= 1000 ? 1 : 0)}`;
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add when truncated (default: '...')
 * @returns Truncated text
 */
export function truncateText(
  text: string,
  maxLength: number,
  suffix: string = '...'
): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Get initials from name
 * @param name - Full name
 * @returns Initials (e.g., "John Doe" -> "JD")
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
}

/**
 * Generate a random color from predefined palette
 * @param seed - Optional seed for consistent color generation
 * @returns Hex color string
 */
export function getRandomColor(seed?: number): string {
  const colors = [
    '#8145b5',
    '#16433c',
    '#e54d2e',
    '#0091ff',
    '#30a46c',
    '#f76808',
  ];
  const index = seed !== undefined ? seed % colors.length : Math.floor(Math.random() * colors.length);
  return colors[index];
}

/**
 * Format volume with K/M suffix
 * @param volume - Volume to format
 * @returns Formatted string (e.g., "1.5K", "2.3M")
 */
export function formatVolume(volume: number): string {
  if (volume >= 1000000) {
    return `${(volume / 1000000).toFixed(1)}M`;
  }
  if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K`;
  }
  return volume.toString();
}

// Generate a random username for "By @username" display
const RANDOM_USERNAMES = [
  'cryptoking', 'moonshot', 'tradepro', 'marketguru', 'bullrun',
  'bearwatch', 'hodlmaster', 'whalewatch', 'alphatrader', 'diamondhands',
  'stonkslover', 'futurecast', 'prophecy', 'trendmaster', 'visionpro',
  'datawizard', 'chartking', 'insiderviews', 'smartmoney', 'edgefinder',
  'riskmaster', 'valuehunter', 'momentumking', 'patternseeker', 'oddschaser'
];

export function getRandomUsername(seed?: string): string {
  // Use seed to make it deterministic for a given market/card
  if (seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    const index = Math.abs(hash) % RANDOM_USERNAMES.length;
    return RANDOM_USERNAMES[index];
  }
  // Random if no seed provided
  return RANDOM_USERNAMES[Math.floor(Math.random() * RANDOM_USERNAMES.length)];
}
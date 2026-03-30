/**
 * Performance Optimization Utilities
 * Helper functions for improving application performance
 */

import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * Debounce function - delays execution until after wait time has elapsed
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function - ensures function is called at most once per wait period
 * @param func - Function to throttle
 * @param wait - Wait time in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
      lastResult = func(...args);
    }
    return lastResult;
  };
}

/**
 * Custom hook for debounced value
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for intersection observer (lazy loading)
 * @param options - IntersectionObserver options
 * @returns [ref, isIntersecting]
 */
export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
}

/**
 * Custom hook for measuring element size
 * @returns [ref, dimensions]
 */
export function useElementSize(): [
  React.RefObject<HTMLElement>,
  { width: number; height: number }
] {
  const ref = useRef<HTMLElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [ref, dimensions];
}

/**
 * Memoize expensive calculations
 * @param factory - Factory function that returns the value
 * @param deps - Dependencies array
 * @returns Memoized value
 */
export function useMemoizedValue<T>(
  factory: () => T,
  deps: React.DependencyList
): T {
  const ref = useRef<T>();
  const depsRef = useRef<React.DependencyList>();

  if (
    !depsRef.current ||
    deps.length !== depsRef.current.length ||
    deps.some((dep, i) => dep !== depsRef.current![i])
  ) {
    ref.current = factory();
    depsRef.current = deps;
  }

  return ref.current!;
}

/**
 * Preload an image
 * @param src - Image source URL
 * @returns Promise that resolves when image is loaded
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Batch multiple state updates into a single render
 * @param updates - Array of state update functions
 */
export function batchUpdates(updates: Array<() => void>): void {
  // In React 18+, updates are automatically batched
  // This is a placeholder for potential future optimizations
  updates.forEach((update) => update());
}

/**
 * Check if device is mobile
 * @returns Boolean indicating if device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Get optimal image size based on device
 * @param width - Base width
 * @param height - Base height
 * @returns Optimized dimensions
 */
export function getOptimalImageSize(
  width: number,
  height: number
): { width: number; height: number } {
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const mobile = isMobileDevice();

  const scale = mobile ? 0.5 : 1;

  return {
    width: Math.round(width * scale * dpr),
    height: Math.round(height * scale * dpr),
  };
}

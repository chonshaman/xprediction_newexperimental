// Animation configurations
export const ANIMATION_CONFIG = {
  spring: {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  },
  duration: {
    fast: 0.1,
    normal: 0.2,
    smooth: 0.25,
    slow: 0.3,
  },
  easing: {
    smooth: [0.25, 0.1, 0.25, 1] as const,
    bounce: [0.34, 1.56, 0.64, 1] as const,
    easeOut: [0.4, 0, 0.2, 1] as const,
  },
};

// Outcome prices
export const OUTCOME_PRICES = {
  YES: '36¢',
  NO: '64¢',
} as const;

// Calculation constants
export const SHARE_PRICES = {
  YES: 0.36,
  NO: 0.64,
} as const;

export const AVG_PRICES = {
  YES: '52',
  NO: '48',
} as const;

export const FEE_PERCENT = 0.2;
export const WIN_MULTIPLIER = 1.8;
export const MOCK_BALANCE = 3600.28;
export const MOCK_AVAILABLE_SHARES = 150;

// Quick amount buttons
export const QUICK_AMOUNTS = ['25%', '50%', 'Max'] as const;

// Quick share buttons (for sell limit orders)
export const QUICK_SHARES = ['25%', '50%', 'Max'] as const;
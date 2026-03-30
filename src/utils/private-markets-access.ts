// Shared utilities for managing private market access across components

const HISTORY_KEY = 'private-markets-history';
const MASTER_KEY = 'private-markets-master';

// Module-level flag: survives SPA navigation, resets on every browser reload
let sessionMasterUnlocked = false;

export function getAccessedMarketIds(): string[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addAccessedMarketId(id: string) {
  const ids = getAccessedMarketIds();
  if (!ids.includes(id)) {
    ids.unshift(id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(ids));
  }
}

export function isMasterStored(): boolean {
  try {
    return localStorage.getItem(MASTER_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setMasterStored() {
  try {
    localStorage.setItem(MASTER_KEY, 'true');
  } catch {}
}

export function getSessionMasterUnlocked(): boolean {
  return sessionMasterUnlocked;
}

export function setSessionMasterUnlocked(value: boolean) {
  sessionMasterUnlocked = value;
}

// Check if a market is unlocked (either via master code or individual access)
export function isMarketUnlocked(marketId: string): boolean {
  if (sessionMasterUnlocked || isMasterStored()) {
    return true;
  }
  return getAccessedMarketIds().includes(marketId);
}

// Get all unlocked market IDs
export function getUnlockedMarketIds(): string[] {
  if (sessionMasterUnlocked || isMasterStored()) {
    return []; // Empty array signals "all markets unlocked"
  }
  return getAccessedMarketIds();
}

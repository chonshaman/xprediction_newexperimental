import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

interface SavedMarketsContextType {
  savedMarkets: Set<string>;
  toggleSavedMarket: (marketId: string) => void;
  isSaved: (marketId: string) => boolean;
}

const SavedMarketsContext = createContext<SavedMarketsContextType | undefined>(undefined);

export function SavedMarketsProvider({ children }: { children: ReactNode }) {
  const [savedMarkets, setSavedMarkets] = useState<Set<string>>(new Set());

  const toggleSavedMarket = useCallback((marketId: string) => {
    setSavedMarkets(prev => {
      const newSet = new Set(prev);
      if (newSet.has(marketId)) {
        newSet.delete(marketId);
      } else {
        newSet.add(marketId);
      }
      return newSet;
    });
  }, []);

  const isSaved = useCallback((marketId: string) => {
    return savedMarkets.has(marketId);
  }, [savedMarkets]);

  const value = useMemo(() => ({ 
    savedMarkets, 
    toggleSavedMarket, 
    isSaved 
  }), [savedMarkets, toggleSavedMarket, isSaved]);

  return (
    <SavedMarketsContext.Provider value={value}>
      {children}
    </SavedMarketsContext.Provider>
  );
}

export function useSavedMarkets() {
  const context = useContext(SavedMarketsContext);
  if (context === undefined) {
    throw new Error('useSavedMarkets must be used within a SavedMarketsProvider');
  }
  return context;
}
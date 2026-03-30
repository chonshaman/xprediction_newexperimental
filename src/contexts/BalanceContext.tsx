import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

interface BalanceContextType {
  balance: number;
  setBalance: (balance: number) => void;
  decreaseBalance: (amount: number) => void;
  increaseBalance: (amount: number) => void;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export function BalanceProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(3600.28);

  const decreaseBalance = useCallback((amount: number) => {
    setBalance(prev => Math.max(0, prev - amount));
  }, []);

  const increaseBalance = useCallback((amount: number) => {
    setBalance(prev => prev + amount);
  }, []);

  const value = useMemo(() => ({ 
    balance, 
    setBalance, 
    decreaseBalance, 
    increaseBalance 
  }), [balance, decreaseBalance, increaseBalance]);

  return (
    <BalanceContext.Provider value={value}>
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalance() {
  const context = useContext(BalanceContext);
  if (context === undefined) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
}
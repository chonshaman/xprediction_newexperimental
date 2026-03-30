import React, { useCallback } from 'react';
import { motion } from 'motion/react';
import { Tab } from './types';
import { OrderTypeSelector, OrderType } from './OrderTypeSelector';

interface TabsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  orderType: OrderType;
  onOrderTypeChange: (type: OrderType) => void;
}

const TabButton = React.memo<{ 
  tab: Tab; 
  isActive: boolean; 
  onClick: () => void;
}>(({ tab, isActive, onClick }) => (
  <motion.div 
    onClick={onClick}
    className={`box-border flex items-center justify-center relative shrink-0 cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
    style={{
      width: '90px',
      height: '40px',
      maxHeight: '40px',
      minHeight: '40px',
      backgroundImage: isActive ? 'var(--card-normal)' : 'none',
      backgroundColor: isActive ? 'var(--lum-02)' : 'transparent',
      borderTop: isActive ? '1px solid var(--black-a1)' : 'none',
      borderLeft: isActive ? '1px solid var(--black-a1)' : 'none',
      borderRight: isActive ? '1px solid var(--black-a1)' : 'none',
      borderBottom: 'none',
      paddingTop: 'var(--gap--0-75rem)',
      paddingBottom: 'var(--gap--0-75rem)',
      paddingLeft: 'var(--gap--1rem)',
      paddingRight: 'var(--gap--1rem)',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px'
    }}
    animate={{
      paddingBottom: isActive ? "12px" : "12px",
      marginBottom: isActive ? "0px" : "0px"
    }}
    whileHover={!isActive ? { 
      paddingBottom: "14px", 
      marginBottom: "-2px",
      backgroundColor: 'var(--side-bar-outline)'
    } : {}}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    <motion.div
      style={{ 
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        right: 0,
        zIndex: 20,
        backgroundImage: 'var(--card-normal)',
        backgroundColor: 'var(--lum-02)',
        height: '4px'
      }}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scaleY: isActive ? 1 : 0
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
    <p 
      className="font-sans not-italic relative shrink-0 text-nowrap whitespace-pre"
      style={{
        lineHeight: '24px',
        fontSize: 'var(--text-s)',
        fontWeight: 'var(--font-weight-medium)',
        color: isActive ? 'var(--card-foreground)' : 'var(--muted-foreground)',
        transition: 'color 200ms'
      }}
    >
      {tab}
    </p>
  </motion.div>
));

TabButton.displayName = 'TabButton';

export const Tabs = React.memo<TabsProps>(({ activeTab, setActiveTab, orderType, onOrderTypeChange }) => {
  const handleBuyClick = useCallback(() => setActiveTab('Buy'), [setActiveTab]);
  const handleSellClick = useCallback(() => setActiveTab('Sell'), [setActiveTab]);

  return (
    <div 
      className="flex isolate items-start justify-between relative shrink-0"
      style={{
        height: '40px',
        width: '100%',
        zIndex: 2
      }}
    >
      <div 
        className="flex items-end relative shrink-0"
        style={{ 
          height: '100%',
          zIndex: 2 
        }}
      >
        <TabButton tab="Buy" isActive={activeTab === 'Buy'} onClick={handleBuyClick} />
        <TabButton tab="Sell" isActive={activeTab === 'Sell'} onClick={handleSellClick} />
      </div>
      <div 
        className="flex flex-col items-start relative shrink-0"
        style={{ zIndex: 1 }}
      >
        <OrderTypeSelector orderType={orderType} onOrderTypeChange={onOrderTypeChange} />
      </div>
    </div>
  );
});

Tabs.displayName = 'Tabs';

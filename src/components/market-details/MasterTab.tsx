import React from 'react';

interface MasterTabProps {
  activeTab: 'explore' | 'my-markets';
  onTabChange: (tab: 'explore' | 'my-markets') => void;
  firstTabLabel?: string;
  secondTabLabel?: string;
}

export function MasterTab({ activeTab, onTabChange, firstTabLabel = 'Explore', secondTabLabel = 'My Markets' }: MasterTabProps) {
  return (
    <div 
      className="flex gap-1 items-start p-1 relative w-fit"
      style={{
        background: 'var(--black-a1)',
        border: '1.4px solid var(--black-a2)',
        borderRadius: 'var(--border-radius--0-5rem)'
      }}
    >
      <button
        onClick={() => onTabChange('explore')}
        className="flex gap-1 items-center px-3 relative shrink-0 transition-all"
        style={{
          height: '40px',
          background: activeTab === 'explore' ? 'var(--sidebar-tab)' : 'var(--white-a1)',
          borderRadius: 'var(--border-radius--0-375rem)',
          boxShadow: '0px 3px 4px 0px rgba(0,0,0,0.04)',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: activeTab === 'explore' ? 'var(--primary)' : 'var(--muted-foreground)',
          lineHeight: '28px'
        }}
        onMouseEnter={(e) => {
          if (activeTab !== 'explore') {
            e.currentTarget.style.background = 'var(--black-a1)';
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== 'explore') {
            e.currentTarget.style.background = 'var(--white-a1)';
          }
        }}
      >
        {firstTabLabel}
      </button>
      <button
        onClick={() => onTabChange('my-markets')}
        className="flex gap-1 items-center px-3 relative shrink-0 transition-all"
        style={{
          height: '40px',
          background: activeTab === 'my-markets' ? 'var(--sidebar-tab)' : 'var(--white-a1)',
          borderRadius: 'var(--border-radius--0-375rem)',
          boxShadow: activeTab === 'my-markets' ? '0px 3px 4px 0px rgba(0,0,0,0.04)' : 'none',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: activeTab === 'my-markets' ? 'var(--primary)' : 'var(--muted-foreground)',
          lineHeight: '28px'
        }}
        onMouseEnter={(e) => {
          if (activeTab !== 'my-markets') {
            e.currentTarget.style.background = 'var(--black-a1)';
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== 'my-markets') {
            e.currentTarget.style.background = 'transparent';
          }
        }}
      >
        {secondTabLabel}
      </button>
    </div>
  );
}
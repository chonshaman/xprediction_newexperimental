import React, { useState } from 'react';

interface ChildTabProps {
  activeTab: 'yes' | 'no';
  onTabChange: (tab: 'yes' | 'no') => void;
}

export function ChildTab({ activeTab, onTabChange }: ChildTabProps) {
  const [hoverTab, setHoverTab] = useState<'yes' | 'no' | null>(null);

  return (
    <div className="w-full" style={{ paddingTop: 'var(--gap--0-5rem)' }}>
      <div className="flex gap-2 items-center" style={{ width: '60%', maxWidth: '294px' }}>
        <button
          onClick={() => onTabChange('yes')}
          onMouseEnter={() => setHoverTab('yes')}
          onMouseLeave={() => setHoverTab(null)}
          className="flex flex-col items-center relative rounded-tl-[var(--radius-input)] rounded-tr-[var(--radius-input)]"
          style={{ 
            flex: 1,
            background: hoverTab === 'yes' && activeTab !== 'yes' ? 'var(--black-a1)' : 'transparent',
            transition: 'background 0.2s ease'
          }}
        >
          <div className="flex flex-col items-center overflow-clip px-2 relative rounded-[var(--radius-input)]" style={{ paddingTop: 'var(--gap--0-5rem)', paddingBottom: 'var(--gap--0-5rem)' }}>
            <p 
              style={{ 
                fontSize: 'var(--text-lg)', 
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '28px',
                color: activeTab === 'yes' ? 'var(--green-11)' : 'var(--muted-foreground)',
                transition: 'color 0.2s ease'
              }}
            >
              Trade Yes
            </p>
          </div>
          {(activeTab === 'yes' || hoverTab === 'yes') && (
            <div 
              className="h-[3px] rounded-tl-[4px] rounded-tr-[4px]"
              style={{ 
                background: activeTab === 'yes' ? 'var(--green-11)' : 'var(--muted-foreground)',
                width: '85.96%',
                transition: 'background 0.2s ease, opacity 0.2s ease',
                opacity: 1
              }}
            />
          )}
        </button>
        <button
          onClick={() => onTabChange('no')}
          onMouseEnter={() => setHoverTab('no')}
          onMouseLeave={() => setHoverTab(null)}
          className="flex flex-col items-center relative rounded-tl-[var(--radius-input)] rounded-tr-[var(--radius-input)]"
          style={{ 
            flex: 1,
            background: hoverTab === 'no' && activeTab !== 'no' ? 'var(--black-a1)' : 'transparent',
            transition: 'background 0.2s ease'
          }}
        >
          <div className="flex flex-col items-center overflow-clip px-2 relative rounded-[var(--radius-input)]" style={{ paddingTop: 'var(--gap--0-5rem)', paddingBottom: 'var(--gap--0-5rem)' }}>
            <p 
              style={{ 
                fontSize: 'var(--text-lg)', 
                fontWeight: 'var(--font-weight-semi-bold)',
                lineHeight: '28px',
                color: activeTab === 'no' ? 'var(--red-10)' : 'var(--muted-foreground)',
                transition: 'color 0.2s ease'
              }}
            >
              Trade No
            </p>
          </div>
          {(activeTab === 'no' || hoverTab === 'no') && (
            <div 
              className="h-[3px] rounded-tl-[4px] rounded-tr-[4px]"
              style={{ 
                background: activeTab === 'no' ? 'var(--red-10)' : 'var(--muted-foreground)',
                width: '85.96%',
                transition: 'background 0.2s ease, opacity 0.2s ease',
                opacity: 1
              }}
            />
          )}
        </button>
      </div>
      {/* Full-width separator line */}
      <div 
        className="w-full h-[1px]"
        style={{ 
          background: 'var(--black-a1)',
          marginTop: '0'
        }}
      />
    </div>
  );
}
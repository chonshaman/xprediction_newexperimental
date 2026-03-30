import React from 'react';

export type MarketStatus = 'market-start' | 'live-trading' | 'prediction-closed' | 'resolution';

interface MarketTimelineProps {
  currentStatus: MarketStatus;
}

const statusSteps: Array<{ id: MarketStatus; label: string }> = [
  { id: 'market-start', label: 'Market Start' },
  { id: 'live-trading', label: 'Live Trading' },
  { id: 'prediction-closed', label: 'Prediction Closed' },
  { id: 'resolution', label: 'Resolution' },
];

export function MarketTimeline({ currentStatus }: MarketTimelineProps) {
  const currentIndex = statusSteps.findIndex(step => step.id === currentStatus);

  return (
    <div 
      className="w-full"
      style={{
        paddingTop: 'var(--gap--1rem)',
      }}
    >
      {/* Timeline Container */}
      <div className="relative" style={{ marginTop: '2px', paddingBottom: '16px' }}>
        {/* Progress Line Container with Padding */}
        <div 
          className="relative"
          style={{
            height: '4px',
            background: 'var(--black-a2)',
            borderRadius: '2px',
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          {/* Active Progress Line */}
          <div 
            className="absolute top-0 left-0 h-full transition-all duration-500"
            style={{
              width: `${(currentIndex / (statusSteps.length - 1)) * 100}%`,
              background: 'linear-gradient(90deg, var(--iris-9) 0%, var(--iris-10) 100%)',
              borderRadius: '2px',
            }}
          />

          {/* Status Dots */}
          {statusSteps.map((step, index) => {
            const isActive = index === currentIndex;
            const isPassed = index < currentIndex;
            
            return (
              <div
                key={step.id}
                className="absolute"
                style={{
                  top: '50%',
                  left: `${(index / (statusSteps.length - 1)) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Dot */}
                <div 
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? '12px' : '10px',
                    height: isActive ? '12px' : '10px',
                    background: isActive 
                      ? 'var(--iris-10)' 
                      : isPassed 
                        ? 'var(--iris-9)' 
                        : 'var(--black-a4)',
                    border: isActive 
                      ? '2px solid var(--iris-10)' 
                      : isPassed
                        ? '2px solid var(--iris-9)'
                        : '2px solid var(--black-a4)',
                    boxShadow: isActive ? '0 0 0 4px rgba(99, 102, 241, 0.1)' : 'none',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* All Labels Below Dots */}
        <div className="relative" style={{ marginTop: '12px' }}>
          {statusSteps.map((step, index) => {
            const isActive = index === currentIndex;
            const isFirst = index === 0;
            const isLast = index === statusSteps.length - 1;
            
            return (
              <div
                key={step.id}
                className="absolute"
                style={{
                  left: isFirst ? '0px' : isLast ? 'auto' : `${(index / (statusSteps.length - 1)) * 100}%`,
                  right: isLast ? '0px' : 'auto',
                  transform: isFirst || isLast ? 'none' : 'translateX(-50%)',
                }}
              >
                <p 
                  className="font-sans whitespace-nowrap"
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: '16px',
                    color: isActive ? 'var(--iris-10)' : 'var(--muted-foreground)',
                    textAlign: isFirst ? 'left' : isLast ? 'right' : 'center',
                  }}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
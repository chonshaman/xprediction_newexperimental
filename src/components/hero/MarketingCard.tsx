import React, { useState } from "react";
import { RiveAnimation } from "../ui/rive-animation";
import { RiveErrorBoundary } from "../ui/RiveErrorBoundary";

export function MarketingCard() {
  const [riveError, setRiveError] = useState(false);

  return (
    <div 
      className="flex flex-col h-full w-full overflow-hidden relative group"
      style={{ 
        background: 'radial-gradient(5% 80% at 100% 100%, rgba(159, 209, 249, 0.5) 0%, rgba(38, 142, 247, 0.28) 26%, rgba(21, 94, 191, 0.13) 48%, rgba(21, 94, 191, 0.05) 72%, rgba(21, 94, 191, 0) 92%), radial-gradient(5% 80% at 0% 100%, rgba(168, 218, 253, 0.5) 0%, rgba(38, 142, 247, 0.34) 26%, rgba(21, 94, 191, 0.13) 48%, rgba(21, 94, 191, 0.05) 72%, rgba(21, 94, 191, 0) 92%), linear-gradient(rgba(6, 27, 55, 0) 70%, rgba(0, 26, 52, 0.35) 50%, rgba(1, 31, 59, 0.44) 80%, rgb(5 54 117 / 57%) 90%, rgb(10 78 181 / 66%) 93.5%, rgb(25 111 225 / 82%) 96%, rgb(35 121 236 / 75%) 96%, rgba(103, 166, 247, 0.78) 97.6%, rgba(118, 180, 255, 0.88) 98.6%, rgba(170, 220, 254, 0.88) 100%), radial-gradient(80% 64% at 96% 4%, rgb(58, 95, 163) 0%, rgb(55, 89, 158) 4%, rgb(44, 67, 138) 24%, rgb(19, 31, 60) 72%, rgb(11, 19, 34) 100%)',
        borderRadius: 'var(--radius-card)'
      }}
    >
      {/* Content Container - Aligned to bottom */}
      <div className="flex-1 p-6 md:p-6 flex flex-col justify-end relative z-10 w-full pb-12">
        {/* Rive Animation with Error Boundary */}
        <div className="w-[180px] h-[180px] flex items-center justify-center -ml-4 relative -mt-4">
          {!riveError ? (
            <RiveErrorBoundary 
              onError={() => setRiveError(true)}
              fallback={
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                  <div className="text-[100px] leading-none relative z-10 animate-bounce">🎁</div>
                </div>
              }
            >
              <RiveAnimation 
                src="https://cdn.jsdelivr.net/gh/chonshaman/riv_store@85b8ec333c4ced02c9a29372931278c79d4bd99a/rive/giftbox.riv" 
                className="min-h-0"
                onError={() => {
                  console.warn("Rive load failed");
                  setRiveError(true);
                }}
              />
            </RiveErrorBoundary>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
              <div className="text-[100px] leading-none relative z-10 animate-bounce">🎁</div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col" style={{ gap: 'var(--gap--0-25rem)', marginBottom: 'var(--gap--1rem)' }}>
          <p style={{ 
            fontSize: 'var(--text-xl)', 
            fontWeight: 'var(--font-weight-semi-bold)',
            lineHeight: '1.5',
            letterSpacing: '-0.14px',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif'
          }}>
            BETA IS NOW LIVE!
          </p>
          <p style={{ 
            fontSize: 'var(--text-xl)', 
            fontWeight: 'var(--font-weight-semi-bold)',
            lineHeight: '1.2',
            letterSpacing: '-0.14px',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif'
          }}>
            Dual value for traders and creators.
          </p>
          <p style={{ 
            fontSize: 'var(--text-s)', 
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: '1.43',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.8,
            marginTop: 'var(--gap--0-5rem)'
          }}>
            The future has a price.
          </p>
          <p style={{ 
            fontSize: 'var(--text-s)', 
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: '1.43',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.8
          }}>
            Choose how you profit.
          </p>
        </div>
      </div>

      {/* Progress Bar - Countdown Indicator */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[2px] z-20 progress-bar-container transition-opacity duration-300"
        style={{
          backgroundColor: 'var(--black-a2)',
        }}
      >
        <div 
          className="h-full progress-bar-animation"
          style={{
            backgroundColor: 'var(--muted-foreground)',
            opacity: 0.3,
            width: '0%',
          }}
        />
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { RiveAnimation } from "../ui/rive-animation";
import { RiveErrorBoundary } from "../ui/RiveErrorBoundary";

export function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const [riveError, setRiveError] = useState(false);
  const referralLink = "https://xmarket.app/ref/USER123ABC";

  const handleCopy = () => {
    // Fallback copy method for when Clipboard API is blocked
    const copyToClipboard = (text: string) => {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          },
          () => {
            // Fallback to execCommand if Clipboard API fails
            fallbackCopy(text);
          }
        );
      } else {
        // Use fallback method
        fallbackCopy(text);
      }
    };

    const fallbackCopy = (text: string) => {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      textarea.style.top = '-999999px';
      document.body.appendChild(textarea);
      
      // Select and copy the text
      textarea.focus();
      textarea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        // Fallback: Could not copy text silently
      }
      
      document.body.removeChild(textarea);
    };

    copyToClipboard(referralLink);
  };

  return (
    <div 
      className="flex flex-col h-full w-full overflow-hidden relative group"
      style={{ 
        background: 'radial-gradient(5% 80% at 100% 100%, rgba(159, 249, 178, 0.5) 0%, rgba(133, 247, 245, 0.28) 26%, rgba(133, 94, 191, 0.13) 48%, rgba(130, 94, 191, 0.05) 72%, rgba(21, 94, 191, 0) 92%), radial-gradient(5% 80% at 0% 100%, rgba(168, 253, 240, 0.5) 0%, rgba(38, 247, 197, 0.34) 26%, rgba(21, 94, 191, 0.13) 48%, rgba(21, 94, 191, 0.05) 72%, rgba(21, 94, 191, 0) 92%), linear-gradient(rgba(6, 27, 55, 0) 70%, rgb(0 26 52 / 3%) 50%, rgba(17, 24, 22, 0.5) 80%, rgba(0, 118, 103, 0.64) 90%, rgba(10, 181, 140, 0.66) 93.5%, rgba(31, 226, 181, 0.79) 96%, rgba(33, 234, 192, 0.75) 96%, rgba(103, 247, 194, 0.78) 97.6%, rgba(104, 248, 195, 0.88) 98.6%, rgba(255, 255, 255, 0.88) 100%), radial-gradient(80% 64% at 96% 4%, rgb(58, 140, 163) 0%, rgb(55, 132, 158) 4%, rgb(44, 117, 138) 24%, rgb(19, 52, 60) 72%, rgb(11, 34, 34) 100%)',
        borderRadius: 'var(--radius-card)'
      }}
    >
      {/* Content Container - Aligned to bottom */}
      <div className="flex-1 p-6 md:p-6 flex flex-col justify-end relative z-10 w-full" style={{ gap: 'var(--gap--1-5rem)' }}>
        {/* Rive Animation with Error Boundary */}
        <div className="w-[120px] h-[120px] flex items-center justify-center -ml-4 relative -mt-4">
          {!riveError ? (
            <RiveErrorBoundary 
              onError={() => setRiveError(true)}
              fallback={
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                  <div className="text-[67px] leading-none relative z-10 animate-bounce">🎁</div>
                </div>
              }
            >
              <RiveAnimation 
                src="https://cdn.jsdelivr.net/gh/chonshaman/riv_store@85b8ec333c4ced02c9a29372931278c79d4bd99a/rive/jumpinggift.riv" 
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
              <div className="text-[67px] leading-none relative z-10 animate-bounce">🎁</div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col" style={{ gap: 'var(--gap--0-25rem)' }}>
          <h1 style={{ 
            fontSize: 'var(--text-xl)', 
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5',
            letterSpacing: '-0.14px',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif'
          }}>
            Invite friends
          </h1>
          <p style={{ 
            fontSize: 'var(--text-s)', 
            fontWeight: 'var(--font-weight-light)',
            lineHeight: '1.43',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.8
          }}>
            Get $25 for every friend who joins
          </p>
        </div>

        {/* Share your referral link */}
        <div className="flex flex-col" style={{ gap: 'var(--gap--0-5rem)' }}>
          <p style={{ 
            fontSize: 'var(--text-s)', 
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--side-bar-hold-white)',
            fontFamily: '"Kanit", sans-serif',
            opacity: 0.85
          }}>
            Share your referral link
          </p>
          
          {/* Copy Link Input */}
          <div 
            className="flex items-center justify-between overflow-hidden transition-all duration-200 hover:shadow-md"
            style={{ 
              backgroundColor: 'var(--lum-01)',
              border: '1px solid var(--black-a3)',
              borderRadius: 'var(--radius-input)',
              padding: 'var(--padding--0-75rem) var(--padding--1rem)',
            }}
          >
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-transparent outline-none select-all cursor-pointer text-xs px-2"
              style={{ 
                color: 'var(--foreground)',
                fontFamily: 'var(--font-mono, monospace)',
              }}
            />
            
            <button
              onClick={handleCopy}
              className="flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ml-2 shrink-0"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: copied ? 'var(--chart-1)' : 'var(--accent)',
                borderRadius: 'var(--radius-input)',
                border: '1px solid var(--black-a2)',
              }}
              aria-label={copied ? "Copied!" : "Copy link"}
            >
              {copied ? (
                <Check className="w-4 h-4" style={{ color: 'var(--primary)' }} />
              ) : (
                <Copy className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
              )}
            </button>
          </div>
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
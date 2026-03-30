import React, { useState } from 'react';
import { Gift, Copy, Check, Users, ExternalLink, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '@/components/ui/button';

interface ReferralsCardProps {
  referralLink?: string;
  totalReferrals?: number;
  totalEarnings?: string;
  availableToClaim?: string;
  referredBy?: string;
}

const SOCIALS = [
  { name: 'Telegram', color: 'bg-[#229ED9]', icon: 'T' },
  { name: 'YouTube', color: 'bg-[#FF0000]', icon: 'Y' },
  { name: 'Discord', color: 'bg-[#5865F2]', icon: 'D' },
  { name: 'X', color: 'bg-[#000000]', icon: 'X' },
];

export function ReferralsCard({
  referralLink = "xmarket.app/8912code210925643283",
  totalReferrals = 4,
  totalEarnings = "10,000",
  availableToClaim = "500",
  referredBy = "[maximus12]"
}: ReferralsCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try using the modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch (err) {
      // Fallback for environments where Clipboard API is blocked or unavailable
      try {
        const textArea = document.createElement("textarea");
        textArea.value = referralLink;
        
        // Ensure the textarea is not visible but is part of the DOM
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
           console.error('Fallback copy failed.');
        }
      } catch (fallbackErr) {
        console.error('Failed to copy via fallback:', fallbackErr);
      }
    }
  };

  return (
    <div 
      className="flex flex-col h-full"
      style={{
        background: 'var(--card-gradient2)',
        border: '1px solid var(--black-a1)',
        borderRadius: '0.75rem',
        padding: '20px',
        boxShadow: 'var(--shadow-1)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-[8px] mb-[var(--gap--1rem)]">
        <div className="p-[2px] size-[32px] flex items-center justify-center bg-[var(--black-a1)] rounded-full">
          <Gift className="w-5 h-5 text-[var(--card-foreground)]" />
        </div>
        <h2 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-semi-bold)',
            fontSize: 'var(--text-2xl)',
            lineHeight: '32px',
            letterSpacing: '-0.144px',
            color: 'var(--card-foreground)'
          }}
        >
          Referrals
        </h2>
      </div>

      <p 
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'var(--font-weight-normal)',
          fontSize: 'var(--text-s)',
          lineHeight: '20px',
          color: 'var(--gray-10)',
          marginBottom: 'var(--gap--1-5rem)'
        }}
      >
        Invite friends to join and get rewarded when they trade. Build your network of predictors!
      </p>

      {/* Referral Link & Share */}
      <div className="flex flex-col mb-[var(--gap--1-5rem)]">
        <div className="flex flex-col gap-1">
          <span 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--text-s)',
              lineHeight: '20px',
              color: 'var(--gray-10)'
            }}
          >
            Your referral link:
          </span>
          <div 
            className="flex items-center gap-2 p-1 pl-3 bg-[var(--popover)] shadow-sm"
            style={{
              border: '1px solid var(--border)',
              borderBottom: 'none',
              borderRadius: '0.75rem 0.75rem 0 0'
            }}
          >
            <span className="text-[var(--text-sm)] text-[var(--card-foreground)] truncate flex-1 font-[family-name:var(--font-inter)]">
              {referralLink}
            </span>
            <Button 
              onClick={handleCopy}
              variant="primary"
              size="xs"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied' : 'Copy link'}
            </Button>
          </div>
        </div>

        <div 
          className="flex items-center p-2 bg-[var(--popover)] shadow-sm"
          style={{
            border: '1px solid var(--border)',
            borderRadius: '0 0 0.75rem 0.75rem',
            gap: 'var(--gap--0-5rem)'
          }}
        >
           <span 
             style={{
               fontFamily: 'Inter, sans-serif',
               fontWeight: 'var(--font-weight-medium)',
               fontSize: 'var(--text-s)',
               lineHeight: '20px',
               color: 'var(--gray-10)',
               marginLeft: '8px'
             }}
           >
             Share to socials:
           </span>
           <div className="flex gap-2">
             {SOCIALS.map((social) => (
               <button 
                 key={social.name}
                 className={`w-8 h-8 rounded-lg ${social.color} text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition-opacity`}
                 title={`Share to ${social.name}`}
               >
                 {social.icon}
               </button>
             ))}
           </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Total Referrals */}
        <div 
          className="p-3 bg-[var(--popover)] shadow-sm flex items-center gap-3"
          style={{
            border: '1px solid var(--border)',
            borderRight: 'none',
            borderBottom: 'none',
            borderRadius: '0.75rem 0 0 0'
          }}
        >
          <div className="flex -space-x-2 overflow-hidden">
             {/* Avatars placeholder */}
             <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] text-blue-600 font-bold">A</div>
             <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] text-green-600 font-bold">B</div>
             <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] text-purple-600 font-bold">+2</div>
          </div>
          <div className="flex flex-col">
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-normal)',
                fontSize: 'var(--text-s)',
                lineHeight: '20px',
                color: 'var(--gray-10)'
              }}
            >
              Total Referrals
            </span>
            <span className="text-[var(--text-lg)] font-semibold text-[var(--card-foreground)]">{totalReferrals}</span>
          </div>
        </div>

        {/* Total Earnings */}
        <div 
          className="p-3 bg-[var(--popover)] shadow-sm flex items-center gap-3"
          style={{
            border: '1px solid var(--border)',
            borderBottom: 'none',
            borderRadius: '0 0.75rem 0 0'
          }}
        >
           <div className="w-8 h-8 rounded-full bg-[#6952FE]/10 flex items-center justify-center">
             <span className="text-[#6952FE] font-bold text-xs">$</span>
           </div>
           <div className="flex flex-col">
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-normal)',
                fontSize: 'var(--text-s)',
                lineHeight: '20px',
                color: 'var(--gray-10)'
              }}
            >
              Total Earnings
            </span>
            <span className="text-[var(--text-lg)] font-semibold text-[var(--card-foreground)] flex items-center gap-1">
              {totalEarnings} <span className="text-[var(--text-xs)] text-[var(--muted-foreground)] font-normal">USDX</span>
            </span>
          </div>
        </div>
      </div>

      {/* Claim Section */}
      <div 
        className="p-3 bg-[var(--popover)] shadow-sm flex items-center justify-between mb-[var(--gap--1rem)]"
        style={{
          border: '1px solid var(--border)',
          borderRadius: '0 0 0.75rem 0.75rem'
        }}
      >
         <div className="flex flex-col">
           <span 
             style={{
               fontFamily: 'Inter, sans-serif',
               fontWeight: 'var(--font-weight-normal)',
               fontSize: 'var(--text-s)',
               lineHeight: '20px',
               color: 'var(--gray-10)'
             }}
           >
             Available to claim
           </span>
           <span className="text-[var(--text-base)] font-semibold text-[var(--card-foreground)] flex items-center gap-1">
              {availableToClaim} <span className="text-[var(--text-xs)] text-[var(--muted-foreground)] font-normal">USDX</span>
           </span>
         </div>
         <Button variant="primary" size="sm">
           Claim
         </Button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-[var(--gap--0-5rem)] border-t border-[var(--black-a1)]">
        <div 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-normal)',
            fontSize: 'var(--text-s)',
            lineHeight: '20px',
            color: 'var(--gray-10)'
          }}
        >
          You were referred by: <span className="underline">{referredBy}</span>
        </div>
        <button className="flex items-center gap-1 text-[var(--primary-button-bg)] text-[var(--text-sm)] font-medium hover:text-[var(--primary-button-bg-hover)] transition-colors">
          View Referral History
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
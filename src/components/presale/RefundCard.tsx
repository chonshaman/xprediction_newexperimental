import React, { useState } from 'react';
import { AlertCircle, DollarSign } from 'lucide-react';

interface RefundCardProps {
  userRole: 'creator' | 'investor-joined' | 'investor-not-joined';
  refundAmount?: number;
  creatorStakeAmount?: number;
  onClaimRefund?: () => void;
  refundClaimed?: boolean;
}

export function RefundCard({ userRole, refundAmount = 0, creatorStakeAmount = 10000, onClaimRefund, refundClaimed = false }: RefundCardProps) {
  
  if (userRole === 'investor-not-joined') {
    return null; // Don't show refund card to viewers who didn't participate
  }
  
  const handleClaim = () => {
    onClaimRefund?.();
  };
  
  const isCreator = userRole === 'creator';
  const displayAmount = isCreator ? creatorStakeAmount : refundAmount;
  const currency = isCreator ? 'XEF' : 'USDX';
  
  return (
    <div
      style={{
        backgroundColor: 'var(--red-12)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}
    >
      {/* Header with Icon and Title */}
      <div 
        className="flex items-start" 
        style={{ 
          gap: 'var(--gap--1rem)', 
          marginBottom: 'var(--gap--1-5rem)' 
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--red-9)',
            flexShrink: 0,
          }}
        >
          <AlertCircle 
            style={{ 
              width: '24px', 
              height: '24px', 
              color: '#FFFFFF' 
            }} 
          />
        </div>
        
        <div>
          <h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--red-9)',
              marginBottom: 'var(--gap--0-5rem)',
            }}
          >
            Presale Unsuccessful
          </h3>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-s)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--white-a11)',
              margin: 0,
            }}
          >
            {isCreator 
              ? 'Your creation stake is available for refund' 
              : 'Your investment is available for refund'
            }
          </p>
        </div>
      </div>
      
      {/* Refund Amount Card */}
      <div
        style={{
          padding: 'var(--gap--1-5rem)',
          backgroundColor: 'var(--lum-01)',
          borderRadius: 'var(--radius-card)',
          marginBottom: 'var(--gap--1-5rem)',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--gray-11)',
            display: 'block',
            marginBottom: 'var(--gap--1rem)',
          }}
        >
          Refund Amount
        </span>
        
        <div className="flex items-center" style={{ gap: 'var(--gap--0-5rem)' }}>
          <DollarSign 
            style={{ 
              width: '32px', 
              height: '32px', 
              color: 'var(--red-9)' 
            }} 
          />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--lum-12)',
            }}
          >
            {displayAmount.toLocaleString()}
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--lum-12)',
            }}
          >
            {currency}
          </span>
        </div>
      </div>
      
      {/* Claim Button */}
      <button
        onClick={handleClaim}
        disabled={refundClaimed}
        className="transition-all duration-200"
        style={{
          width: '100%',
          padding: 'var(--gap--1rem)',
          background: refundClaimed ? 'var(--red-11)' : 'var(--red-9)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-button)',
          fontSize: 'var(--text-s)',
          fontWeight: 'var(--font-weight-semi-bold)',
          cursor: refundClaimed ? 'not-allowed' : 'pointer',
          opacity: refundClaimed ? 0.5 : 1,
          fontFamily: 'Inter, sans-serif',
        }}
        onMouseEnter={(e) => {
          if (!refundClaimed) {
            e.currentTarget.style.background = 'var(--red-8)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(229, 72, 77, 0.35)';
          }
        }}
        onMouseLeave={(e) => {
          if (!refundClaimed) {
            e.currentTarget.style.background = 'var(--red-9)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }
        }}
      >
        {refundClaimed ? 'Refund Claimed' : 'Claim Refund'}
      </button>
      
      {/* Info Text */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'var(--text-s)',
          fontWeight: 'var(--font-weight-normal)',
          color: 'var(--white-a9)',
          lineHeight: '1.5',
          marginTop: 'var(--gap--1rem)',
          marginBottom: 0,
        }}
      >
        {isCreator 
          ? 'The presale did not reach its funding goal. You will receive a 100% refund of your creation stake.'
          : 'The presale did not reach its funding goal. You will receive a 100% refund of your investment.'
        }
      </p>
    </div>
  );
}
/**
 * Button Preview Components - Complete Set
 * Includes all button variants + Market Outcome Buttons
 */
import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { PrimaryButton } from '../../PrimaryButton';
import { motion } from 'motion/react';

// ==================== Button - Default ====================
// XS Size
export function ButtonDefaultXSDefault() {
  return (
    <Button 
      variant="default" 
      size="xs"
      style={{
        background: 'var(--primary)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-5rem)',
        height: '28px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--primary-foreground)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonDefaultXSHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="xs" 
        style={{ 
          background: 'var(--card-hover)',
          transform: 'translateY(-2px)',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultXSActive() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="xs" 
        style={{ 
          transform: 'scale(0.98)',
          background: 'var(--card-normal)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultXSFocused() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="xs" 
        style={{ 
          outline: '2px solid var(--iris-9)', 
          outlineOffset: '2px'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultXSDisabled() {
  return (
    <Button 
      variant="default" 
      size="xs" 
      disabled
      style={{
        opacity: '0.5',
        cursor: 'not-allowed'
      }}
    >
      Button
    </Button>
  );
}

// SM Size
export function ButtonDefaultSMDefault() {
  return (
    <Button 
      variant="default" 
      size="sm"
      style={{
        background: 'var(--primary)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-75rem)',
        height: '32px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--primary-foreground)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonDefaultSMHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="sm" 
        style={{ 
          background: 'var(--card-hover)',
          transform: 'translateY(-2px)',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultSMActive() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="sm" 
        style={{ 
          transform: 'scale(0.98)',
          background: 'var(--card-normal)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultSMFocused() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="sm" 
        style={{ 
          outline: '2px solid var(--iris-9)', 
          outlineOffset: '2px'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultSMDisabled() {
  return (
    <Button 
      variant="default" 
      size="sm" 
      disabled
      style={{
        opacity: '0.5',
        cursor: 'not-allowed'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonDefaultMDDefault() {
  return (
    <Button 
      variant="default" 
      size="default"
      style={{
        background: 'var(--primary)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1rem)',
        height: '40px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonDefaultMDHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="default" 
        style={{ 
          background: 'var(--card-hover)',
          transform: 'translateY(-2px)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultMDActive() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="default" 
        style={{ 
          transform: 'scale(0.98)',
          background: 'var(--card-normal)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultMDFocused() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="default" 
        style={{ 
          outline: '2px solid var(--iris-9)', 
          outlineOffset: '2px'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultMDDisabled() {
  return (
    <Button 
      variant="default" 
      size="default" 
      disabled
      style={{
        opacity: '0.5',
        cursor: 'not-allowed'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonDefaultLGDefault() {
  return (
    <Button 
      variant="default" 
      size="lg"
      style={{
        background: 'var(--primary)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1-5rem)',
        height: '48px',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-semi-bold)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonDefaultLGHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="lg" 
        style={{ 
          background: 'var(--card-hover)',
          transform: 'translateY(-2px)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultLGActive() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="lg" 
        style={{ 
          transform: 'scale(0.98)',
          background: 'var(--card-normal)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultLGFocused() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="default" 
        size="lg" 
        style={{ 
          outline: '2px solid var(--iris-9)', 
          outlineOffset: '2px'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonDefaultLGDisabled() {
  return (
    <Button 
      variant="default" 
      size="lg" 
      disabled
      style={{
        opacity: '0.5',
        cursor: 'not-allowed'
      }}
    >
      Button
    </Button>
  );
}

// ==================== Button - Primary ====================
export function ButtonPrimaryXSDefault() {
  return (
    <PrimaryButton 
      size="xs"
      style={{
        backgroundColor: 'var(--primary-button-bg)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-5rem)',
        height: '28px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--side-bar-hold-white)'
      }}
    >
      Button
    </PrimaryButton>
  );
}

export function ButtonPrimaryXSHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <PrimaryButton 
        size="xs" 
        style={{ 
          backgroundColor: 'var(--primary-button-bg-hover)',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(91, 91, 214, 0.3)',
          color: 'var(--side-bar-hold-white)'
        }}
      >
        Button
      </PrimaryButton>
    </div>
  );
}

export function ButtonPrimarySMDefault() {
  return (
    <PrimaryButton 
      size="sm"
      style={{
        backgroundColor: 'var(--primary-button-bg)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-75rem)',
        height: '32px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--side-bar-hold-white)'
      }}
    >
      Button
    </PrimaryButton>
  );
}

export function ButtonPrimarySMHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <PrimaryButton 
        size="sm" 
        style={{ 
          backgroundColor: 'var(--primary-button-bg-hover)',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 16px rgba(91, 91, 214, 0.35)',
          color: 'var(--side-bar-hold-white)'
        }}
      >
        Button
      </PrimaryButton>
    </div>
  );
}

export function ButtonPrimaryMDDefault() {
  return (
    <PrimaryButton 
      size="md"
      style={{
        backgroundColor: 'var(--primary-button-bg)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1rem)',
        height: '40px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--side-bar-hold-white)'
      }}
    >
      Button
    </PrimaryButton>
  );
}

export function ButtonPrimaryMDHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <PrimaryButton 
        size="md" 
        style={{ 
          backgroundColor: 'var(--primary-button-bg-hover)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(91, 91, 214, 0.4)',
          color: 'var(--side-bar-hold-white)'
        }}
      >
        Button
      </PrimaryButton>
    </div>
  );
}

export function ButtonPrimaryLGDefault() {
  return (
    <PrimaryButton 
      size="lg"
      style={{
        backgroundColor: 'var(--primary-button-bg)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1-5rem)',
        height: '48px',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--side-bar-hold-white)'
      }}
    >
      Button
    </PrimaryButton>
  );
}

export function ButtonPrimaryLGHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <PrimaryButton 
        size="lg" 
        style={{ 
          backgroundColor: 'var(--primary-button-bg-hover)',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 24px rgba(91, 91, 214, 0.45)',
          color: 'var(--side-bar-hold-white)'
        }}
      >
        Button
      </PrimaryButton>
    </div>
  );
}

// ==================== Button - Destructive ====================
export function ButtonDestructiveSMDefault() {
  return (
    <Button 
      variant="destructive" 
      size="sm"
      style={{
        background: 'var(--red-9)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-75rem)',
        height: '32px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'white'
      }}
    >
      Delete
    </Button>
  );
}

export function ButtonDestructiveSMHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="destructive" 
        size="sm" 
        style={{ 
          background: 'var(--red-8)',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 16px rgba(229, 72, 77, 0.35)'
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export function ButtonDestructiveSMDisabled() {
  return (
    <Button 
      variant="destructive" 
      size="sm" 
      disabled
      style={{
        opacity: '0.5',
        cursor: 'not-allowed'
      }}
    >
      Delete
    </Button>
  );
}

export function ButtonDestructiveMDDefault() {
  return (
    <Button 
      variant="destructive" 
      size="default"
      style={{
        background: 'var(--red-9)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1rem)',
        height: '40px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'white'
      }}
    >
      Delete
    </Button>
  );
}

export function ButtonDestructiveMDHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="destructive" 
        size="default" 
        style={{ 
          background: 'var(--red-8)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(229, 72, 77, 0.4)'
        }}
      >
        Delete
      </Button>
    </div>
  );
}

// ==================== Button - Outline ====================
export function ButtonOutlineSMDefault() {
  return (
    <Button 
      variant="outline" 
      size="sm"
      style={{
        background: 'radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-75rem)',
        height: '32px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--card-foreground)',
        boxShadow: 'var(--shadow-1)',
        transition: 'all 200ms ease-out'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonOutlineSMHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="outline" 
        size="sm" 
        style={{ 
          background: 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-button)',
          padding: '0 var(--gap--0-75rem)',
          height: '32px',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
          boxShadow: 'var(--shadow-2)',
          transform: 'translateY(-2px)',
          transition: 'all 200ms ease-out'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonOutlineMDDefault() {
  return (
    <Button 
      variant="outline" 
      size="default"
      style={{
        background: 'radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1rem)',
        height: '40px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--card-foreground)',
        boxShadow: 'var(--shadow-1)',
        transition: 'all 200ms ease-out'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonOutlineMDHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="outline" 
        size="default" 
        style={{ 
          background: 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-button)',
          padding: '0 var(--gap--1rem)',
          height: '40px',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
          boxShadow: 'var(--shadow-2)',
          transform: 'translateY(-2px)',
          transition: 'all 200ms ease-out'
        }}
      >
        Button
      </Button>
    </div>
  );
}

// ==================== Button - Ghost ====================
export function ButtonGhostSMDefault() {
  return (
    <Button 
      variant="ghost" 
      size="sm"
      style={{
        background: 'transparent',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-75rem)',
        height: '32px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--card-foreground)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonGhostSMHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="ghost" 
        size="sm" 
        style={{ 
          background: 'var(--black-a1)',
          borderRadius: 'var(--radius-button)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonGhostMDDefault() {
  return (
    <Button 
      variant="ghost" 
      size="default"
      style={{
        background: 'transparent',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1rem)',
        height: '40px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--card-foreground)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonGhostMDHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="ghost" 
        size="default" 
        style={{ 
          background: 'var(--black-a1)',
          borderRadius: 'var(--radius-button)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

// ==================== Button - Secondary ====================
export function ButtonSecondarySMDefault() {
  return (
    <Button 
      variant="secondary" 
      size="sm"
      style={{
        background: 'var(--lum-02)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-75rem)',
        height: '32px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--card-foreground)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonSecondarySMHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="secondary" 
        size="sm" 
        style={{ 
          background: 'var(--lum-03)',
          transform: 'translateY(-1px)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

export function ButtonSecondaryMDDefault() {
  return (
    <Button 
      variant="secondary" 
      size="default"
      style={{
        background: 'var(--lum-02)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--1rem)',
        height: '40px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--card-foreground)'
      }}
    >
      Button
    </Button>
  );
}

export function ButtonSecondaryMDHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="secondary" 
        size="default" 
        style={{ 
          background: 'var(--lum-03)',
          transform: 'translateY(-1px)'
        }}
      >
        Button
      </Button>
    </div>
  );
}

// ==================== Button - Link ====================
export function ButtonLinkDefault() {
  return (
    <Button 
      variant="link" 
      size="default"
      style={{
        background: 'transparent',
        padding: '0',
        height: 'auto',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--iris-11)',
        textDecoration: 'underline'
      }}
    >
      Link Button
    </Button>
  );
}

export function ButtonLinkHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button 
        variant="link" 
        size="default" 
        style={{ 
          color: 'var(--iris-10)',
          textDecoration: 'underline'
        }}
      >
        Link Button
      </Button>
    </div>
  );
}

// ==================== Market Outcome Buttons ====================

// Helper for gradient configuration
const useOutcomeGradient = (isYes: boolean, selected: boolean) => {
  const baseColor = isYes ? '48, 164, 108' : '229, 72, 77';
  const opacity = selected ? '0.35, 0.17' : '0.30, 0.15';
  const [opacityStart, opacityEnd] = opacity.split(',').map(v => v.trim());
  
  return {
    background: `linear-gradient(135deg, rgba(${baseColor}, ${opacityStart}) 0%, rgba(${baseColor}, ${opacityEnd}) 100%)`,
    boxShadow: `0 8px 25px rgba(${baseColor}, ${selected ? '0.25' : '0.2'}), 0 4px 10px rgba(${baseColor}, 0.15)`,
  };
};

export function OutcomeButtonYesDefault() {
  return (
    <div 
      style={{
        minWidth: '160px',
        height: '72px',
        borderRadius: 'var(--border-radius--0-75rem)',
        background: 'linear-gradient(135deg, rgba(90, 115, 120, 0.15) 0%, rgba(45, 58, 60, 0.08) 100%)',
        border: '1px solid var(--black-a1)',
        padding: 'var(--gap--1rem) var(--gap--0-875rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.04), 0px 2px 12px 0px rgba(0,0,0,0.08)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-25rem)' }}>
        <div 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--chart-1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'white'
          }}
        >
          Y
        </div>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--muted-foreground)' }}>
          Yes
        </span>
      </div>
      <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', fontVariantNumeric: 'tabular-nums' }}>
        64¢
      </span>
    </div>
  );
}

export function OutcomeButtonYesSelected() {
  const config = useOutcomeGradient(true, true);
  
  return (
    <div 
      style={{
        minWidth: '160px',
        height: '72px',
        borderRadius: 'var(--border-radius--0-75rem)',
        background: config.background,
        border: '1.6px solid rgba(48, 164, 108, 0.3)',
        padding: 'var(--gap--1rem) var(--gap--0-875rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: config.boxShadow
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-25rem)' }}>
        <div 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--chart-1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'white',
            boxShadow: '0 0 10px 2px rgba(48, 164, 108, 0.4), 0 0 20px 4px rgba(48, 164, 108, 0.2)',
            transform: 'scale(1.05)'
          }}
        >
          Y
        </div>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--muted-foreground)' }}>
          Yes
        </span>
      </div>
      <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', fontVariantNumeric: 'tabular-nums' }}>
        64¢
      </span>
    </div>
  );
}

export function OutcomeButtonYesHover() {
  return (
    <div 
      style={{
        minWidth: '160px',
        height: '72px',
        borderRadius: 'var(--border-radius--0-75rem)',
        background: 'linear-gradient(135deg, rgba(90, 115, 120, 0.25) 0%, rgba(45, 58, 60, 0.15) 100%)',
        border: '1px solid var(--black-a1)',
        padding: 'var(--gap--1rem) var(--gap--0-875rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.08)',
        transform: 'translateY(-3px)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-25rem)' }}>
        <div 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--chart-1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'white'
          }}
        >
          Y
        </div>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--muted-foreground)' }}>
          Yes
        </span>
      </div>
      <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', fontVariantNumeric: 'tabular-nums' }}>
        64¢
      </span>
    </div>
  );
}

export function OutcomeButtonNoDefault() {
  return (
    <div 
      style={{
        minWidth: '160px',
        height: '72px',
        borderRadius: 'var(--border-radius--0-75rem)',
        background: 'linear-gradient(135deg, rgba(90, 115, 120, 0.15) 0%, rgba(45, 58, 60, 0.08) 100%)',
        border: '1px solid var(--black-a1)',
        padding: 'var(--gap--1rem) var(--gap--0-875rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.04), 0px 2px 12px 0px rgba(0,0,0,0.08)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-25rem)' }}>
        <div 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--chart-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'white'
          }}
        >
          N
        </div>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--muted-foreground)' }}>
          No
        </span>
      </div>
      <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', fontVariantNumeric: 'tabular-nums' }}>
        36¢
      </span>
    </div>
  );
}

export function OutcomeButtonNoSelected() {
  const config = useOutcomeGradient(false, true);
  
  return (
    <div 
      style={{
        minWidth: '160px',
        height: '72px',
        borderRadius: 'var(--border-radius--0-75rem)',
        background: config.background,
        border: '1.6px solid rgba(229, 72, 77, 0.3)',
        padding: 'var(--gap--1rem) var(--gap--0-875rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: config.boxShadow
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-25rem)' }}>
        <div 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--chart-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'white',
            boxShadow: '0 0 10px 2px rgba(229, 72, 77, 0.4), 0 0 20px 4px rgba(229, 72, 77, 0.2)',
            transform: 'scale(1.05)'
          }}
        >
          N
        </div>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--muted-foreground)' }}>
          No
        </span>
      </div>
      <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', fontVariantNumeric: 'tabular-nums' }}>
        36¢
      </span>
    </div>
  );
}

export function OutcomeButtonNoHover() {
  return (
    <div 
      style={{
        minWidth: '160px',
        height: '72px',
        borderRadius: 'var(--border-radius--0-75rem)',
        background: 'linear-gradient(135deg, rgba(90, 115, 120, 0.25) 0%, rgba(45, 58, 60, 0.15) 100%)',
        border: '1px solid var(--black-a1)',
        padding: 'var(--gap--1rem) var(--gap--0-875rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.08)',
        transform: 'translateY(-3px)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-25rem)' }}>
        <div 
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--chart-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'white'
          }}
        >
          N
        </div>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--muted-foreground)' }}>
          No
        </span>
      </div>
      <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', fontVariantNumeric: 'tabular-nums' }}>
        36¢
      </span>
    </div>
  );
}
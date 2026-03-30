/**
 * Form Field Preview Components (Input, Textarea)
 */
import React from 'react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';

// ==================== Input ====================
export function InputDefault() {
  return <Input placeholder="Enter text..." style={{ width: '300px' }} />;
}

export function InputHover() {
  return (
    <div 
      style={{ 
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--gap--0-5rem)',
        backgroundColor: 'var(--card-hover)',
        border: '1px solid var(--muted-foreground)',
        borderRadius: 'var(--radius-card)',
        paddingTop: 'var(--gap--0-5rem)',
        paddingBottom: 'var(--gap--0-5rem)',
        paddingLeft: 'var(--gap--0-75rem)',
        paddingRight: 'var(--gap--0-75rem)',
        boxShadow: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)',
        width: '300px',
      }}
    >
      <input
        placeholder="Enter text..."
        readOnly
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'var(--card-foreground)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
        }}
        className="placeholder:text-muted-foreground"
      />
    </div>
  );
}

export function InputFocused() {
  return (
    <div 
      style={{ 
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--gap--0-5rem)',
        backgroundColor: 'var(--card-hover)',
        border: '1px solid var(--primary-button-bg)',
        borderRadius: 'var(--radius-card)',
        paddingTop: 'var(--gap--0-5rem)',
        paddingBottom: 'var(--gap--0-5rem)',
        paddingLeft: 'var(--gap--1rem)',
        paddingRight: 'var(--gap--1rem)',
        boxShadow: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)',
        width: '300px',
      }}
    >
      <input
        placeholder="Enter text..."
        value="Focused input"
        readOnly
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'var(--card-foreground)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
        }}
        className="placeholder:text-muted-foreground"
      />
    </div>
  );
}

export function InputError() {
  return (
    <div style={{ width: '300px' }}>
      <Input placeholder="Enter text..." style={{ borderColor: 'var(--chart-2)' }} />
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--chart-2)', marginTop: 'var(--gap--0-25rem)' }}>This field is required</p>
    </div>
  );
}

export function InputDisabled() {
  return <Input placeholder="Disabled input" disabled style={{ width: '300px' }} />;
}

// ==================== Textarea ====================
export function TextareaDefault() {
  return <Textarea placeholder="Enter your message..." style={{ width: '300px' }} />;
}

export function TextareaHover() {
  return (
    <div style={{ pointerEvents: 'none', width: '300px' }}>
      <div 
        className="flex cursor-text transition-all duration-200 ease-out"
        style={{
          gap: 'var(--gap--0-5rem)',
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--muted-foreground)',
          borderRadius: 'var(--radius-card)',
          paddingTop: 'var(--gap--0-5rem)',
          paddingBottom: 'var(--gap--0-5rem)',
          paddingLeft: 'var(--gap--0-75rem)',
          paddingRight: 'var(--gap--0-75rem)',
          boxShadow: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)',
        }}
      >
        <textarea
          className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground resize-none"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            minHeight: '80px',
          }}
          placeholder="Enter your message..."
          readOnly
        />
      </div>
    </div>
  );
}

export function TextareaFocused() {
  return (
    <div style={{ pointerEvents: 'none', width: '300px' }}>
      <div 
        className="flex cursor-text transition-all duration-200 ease-out"
        style={{
          gap: 'var(--gap--0-5rem)',
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--primary-button-bg)',
          borderRadius: 'var(--radius-card)',
          paddingTop: 'var(--gap--0-5rem)',
          paddingBottom: 'var(--gap--0-5rem)',
          paddingLeft: 'var(--gap--1rem)',
          paddingRight: 'var(--gap--1rem)',
          boxShadow: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)',
        }}
      >
        <textarea
          className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground resize-none"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            minHeight: '80px',
          }}
          value="Focused textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export function TextareaError() {
  return (
    <div style={{ width: '300px' }}>
      <Textarea placeholder="Enter your message..." style={{ borderColor: 'var(--chart-2)' }} />
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--chart-2)', marginTop: 'var(--gap--0-25rem)' }}>Message cannot be empty</p>
    </div>
  );
}

export function TextareaDisabled() {
  return <Textarea disabled placeholder="Disabled textarea..." style={{ opacity: '0.5', cursor: 'not-allowed' }} />;
}

import { AmountInput } from '../../BuySellBlock/AmountInput';

// ==================== Amount Input (Market Trading) ====================
export function AmountInputDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <AmountInput 
        amount=""
        balance={1234.56}
        isFocused={false}
        hasInsufficientBalance={false}
        onAmountChange={() => {}}
        onFocusChange={() => {}}
        onQuickAmount={() => {}}
        activeTab="Buy"
        isLimitOrder={false}
        selectedOutcome="YES"
        availableShares={100}
      />
    </div>
  );
}

export function AmountInputFocused() {
  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <AmountInput 
        amount="50"
        balance={1234.56}
        isFocused={true}
        hasInsufficientBalance={false}
        onAmountChange={() => {}}
        onFocusChange={() => {}}
        onQuickAmount={() => {}}
        activeTab="Buy"
        isLimitOrder={false}
        selectedOutcome="YES"
        availableShares={100}
      />
    </div>
  );
}

export function AmountInputError() {
  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <AmountInput 
        amount="2500"
        balance={1234.56}
        isFocused={false}
        hasInsufficientBalance={true}
        onAmountChange={() => {}}
        onFocusChange={() => {}}
        onQuickAmount={() => {}}
        activeTab="Buy"
        isLimitOrder={false}
        selectedOutcome="YES"
        availableShares={100}
      />
    </div>
  );
}
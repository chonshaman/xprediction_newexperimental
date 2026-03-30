import React from 'react';
import { FilterButton } from '../../ui/FilterButton';
import { Rocket, ChevronRight } from 'lucide-react';

// ==================== FILTER BUTTON ====================

// Default State
export function FilterButtonDefault() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <FilterButton>All</FilterButton>
      <FilterButton active>Active</FilterButton>
    </div>
  );
}

// With Label
export function FilterButtonWithLabel() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <FilterButton label="Status:">All</FilterButton>
      <FilterButton label="Status:" active>Active</FilterButton>
    </div>
  );
}

// With Label (White Text)
export function FilterButtonWithLabelWhite() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px', background: 'var(--iris-9)', borderRadius: '8px' }}>
      <FilterButton label="Status:" labelWhite>All</FilterButton>
      <FilterButton label="Status:" labelWhite active>Active</FilterButton>
    </div>
  );
}

// With Icon
export function FilterButtonWithIcon() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <FilterButton showIcon icon={<Rocket style={{ width: '16px', height: '16px' }} />}>Launch</FilterButton>
      <FilterButton showIcon icon={<Rocket style={{ width: '16px', height: '16px' }} />} active>Active Launch</FilterButton>
    </div>
  );
}

// With Label and Icon
export function FilterButtonWithLabelAndIcon() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <FilterButton label="Status:" showIcon icon={<Rocket style={{ width: '16px', height: '16px' }} />}>Live</FilterButton>
      <FilterButton label="Status:" showIcon icon={<Rocket style={{ width: '16px', height: '16px' }} />} active>Active</FilterButton>
    </div>
  );
}

// With Label and ChevronRight Icon
export function FilterButtonWithLabelAndChevronRight() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <FilterButton label="Status:" showIcon icon={<ChevronRight style={{ width: '16px', height: '16px' }} />}>All</FilterButton>
      <FilterButton label="Status:" showIcon icon={<ChevronRight style={{ width: '16px', height: '16px' }} />} active>Presale Live</FilterButton>
      <FilterButton label="Category:" showIcon icon={<ChevronRight style={{ width: '16px', height: '16px' }} />}>Sports</FilterButton>
    </div>
  );
}

// All States Together
export function FilterButtonAllStates() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--1-5rem)', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600, color: 'var(--card-foreground)' }}>Default (Text Only)</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <FilterButton>All</FilterButton>
          <FilterButton active>My Created</FilterButton>
          <FilterButton>My Invested</FilterButton>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600, color: 'var(--card-foreground)' }}>With Label</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <FilterButton label="Status:">All</FilterButton>
          <FilterButton label="Status:" active>Presale Live</FilterButton>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600, color: 'var(--card-foreground)' }}>With Icon</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <FilterButton showIcon icon={<Rocket style={{ width: '16px', height: '16px' }} />}>Launch</FilterButton>
          <FilterButton showIcon icon={<Rocket style={{ width: '16px', height: '16px' }} />} active>Active</FilterButton>
        </div>
      </div>
      
      <div style={{ background: 'var(--iris-9)', borderRadius: '8px', padding: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontWeight: 600, color: '#FFFFFF' }}>Label with White Text (Dark BG)</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <FilterButton label="Status:" labelWhite>All</FilterButton>
          <FilterButton label="Status:" labelWhite active>Active</FilterButton>
        </div>
      </div>
    </div>
  );
}
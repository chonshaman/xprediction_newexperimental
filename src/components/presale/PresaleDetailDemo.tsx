import React from 'react';
import { PresaleDetailPage } from './PresaleDetailPage';
import { mockPresaleDetail } from '../../data/presaleDetailData';

/**
 * Demo wrapper for Presale Detail Page
 * This component can be accessed through the Design System or as a standalone route
 */
export function PresaleDetailDemo() {
  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'var(--lum-01)',
      }}
    >
      <PresaleDetailPage {...mockPresaleDetail} />
    </div>
  );
}

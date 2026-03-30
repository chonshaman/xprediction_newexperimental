import React from 'react';
import { RiveAnimation } from '../../ui/rive-animation';

export function RiveDefaultPreview() {
  return (
    <div className="w-full h-[400px] bg-[var(--lum-02)] rounded-[var(--radius-card)] overflow-hidden flex items-center justify-center p-4 border border-[var(--border)]">
      <RiveAnimation
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        autoplay={true}
      />
    </div>
  );
}

export function RiveCleanPreview() {
   return (
    <div className="w-full h-[300px] bg-[var(--lum-01)] rounded-[var(--radius-card)] overflow-hidden flex items-center justify-center border border-[var(--border)]">
      <RiveAnimation
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
}

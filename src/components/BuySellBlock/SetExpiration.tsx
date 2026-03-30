import React from 'react';
import { motion } from 'motion/react';
import { ANIMATION_CONFIG } from './constants';

interface SetExpirationProps {
  enabled: boolean;
  onToggle: () => void;
}

export const SetExpiration = React.memo<SetExpirationProps>(({ enabled, onToggle }) => {
  return (
    <div 
      className="flex items-center justify-between relative shrink-0"
      style={{
        width: '100%',
        paddingTop: 'var(--gap--0-25rem)',
        paddingBottom: 'var(--gap--0-25rem)'
      }}
    >
      <p 
        className="font-sans leading-[24px] not-italic relative shrink-0 text-nowrap text-card-foreground whitespace-pre"
        style={{
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        Set Expiration
      </p>
      
      <div 
        onClick={onToggle}
        className="relative w-[48px] h-[28px] cursor-pointer"
      >
        <motion.div 
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: enabled ? 'var(--primary-button-bg)' : 'rgba(255, 255, 255, 0.1)'
          }}
          transition={{ duration: ANIMATION_CONFIG.duration.normal }}
        />
        <motion.div 
          className="absolute shadow-md"
          style={{
            top: '2px',
            width: '24px',
            height: '24px',
            backgroundColor: 'var(--side-bar-hold-white)',
            borderRadius: '50%'
          }}
          animate={{
            left: enabled ? '22px' : '2px'
          }}
          transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
        />
      </div>
    </div>
  );
});

SetExpiration.displayName = 'SetExpiration';
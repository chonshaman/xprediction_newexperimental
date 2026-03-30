import React from 'react';
import { motion } from 'motion/react';

// Animation configuration for grid-based collapse/expand
const SEPARATOR_ANIMATION = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};

export const Separator = React.memo(() => {
  return (
    <motion.div 
      initial={{ opacity: 0, gridTemplateRows: '0fr' }}
      animate={{ opacity: 1, gridTemplateRows: '1fr' }}
      exit={{ opacity: 0, gridTemplateRows: '0fr' }}
      transition={SEPARATOR_ANIMATION}
      className="grid"
      style={{ width: '100%' }}
    >
      <div className="overflow-hidden">
        <div 
          style={{ 
            width: '100%',
            height: '1px',
            background: 'var(--black-a1)' 
          }} 
        />
      </div>
    </motion.div>
  );
});

Separator.displayName = 'Separator';
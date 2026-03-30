import { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { motion } from 'motion/react';

interface SaveIconProps {
  isSaved: boolean;
  isHovered: boolean;
  onToggle: () => void;
  rightOffset?: number; // Optional right offset in pixels (default: 12px which is the default right-3)
}

export function SaveIcon({ isSaved, isHovered, onToggle, rightOffset = 12 }: SaveIconProps) {
  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <motion.button
      animate={
        isSaved 
          ? (isHovered 
              ? { 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  rotate: -12,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }
              : { 
                  opacity: 1, 
                  x: 8, 
                  y: -8,
                  rotate: 0,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }
            )
          : (isHovered 
              ? { 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  rotate: -12,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                } 
              : { 
                  opacity: 0, 
                  x: 8, 
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                }
            )
      }
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      onMouseEnter={() => setIsIconHovered(true)}
      onMouseLeave={() => setIsIconHovered(false)}
      className="absolute top-3 z-50 p-1.5 rounded-[var(--border-radius--0-375rem)] transition-all duration-300 ease-out"
      style={{
        right: `${rightOffset}px`,
        backgroundColor: isIconHovered ? 'var(--black-a2)' : 'transparent',
      }}
    >
      <Bookmark 
        className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ease-out"
        style={{
          stroke: isSaved ? 'var(--iris-9)' : 'var(--foreground)',
          fill: isSaved ? 'var(--iris-9)' : 'none',
          strokeWidth: 2
        }}
      />
    </motion.button>
  );
}
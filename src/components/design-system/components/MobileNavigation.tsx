/**
 * Mobile Navigation Component
 * Floating bottom bar that expands into a full-screen menu
 */
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { NavigationTree } from './NavigationTree';
import type { ComponentVariant } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface MobileNavigationProps {
  activeVariant: string;
  onNavigate: (id: string) => void;
  componentVariants: ComponentVariant[];
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

export function MobileNavigation({
  activeVariant,
  onNavigate,
  componentVariants,
  scrollContainerRef,
}: MobileNavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Find current label
  const currentLabel = componentVariants.find(v => v.id === activeVariant)?.label || 'Menu';

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;
      const scrollDifference = currentScrollY - lastScrollY.current;

      // Determine visibility based on scroll direction
      // Threshold of 10px to avoid jitter
      if (Math.abs(scrollDifference) > 10) {
        if (scrollDifference > 0) {
          // Scrolling down - hide
          setIsVisible(false);
        } else {
          // Scrolling up - show
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Bottom Bar */}
      <motion.div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-[var(--gap--1rem)] pb-[env(safe-area-inset-bottom)]"
        initial={{ y: 0 }}
        animate={{ y: isVisible && !isOpen ? 0 : 100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
           background: 'transparent',
           pointerEvents: 'none', // Allow clicks to pass through wrapper
        }}
      >
        <div 
           className="w-full flex items-center justify-between cursor-pointer pointer-events-auto"
           onClick={() => setIsOpen(true)}
           style={{
             height: '56px',
             background: 'var(--card-normal)',
             borderTop: '1px solid var(--black-a2)',
             borderLeft: '1px solid var(--black-a2)',
             borderRight: '1px solid var(--black-a2)',
             borderTopLeftRadius: 'var(--radius-xl)',
             borderTopRightRadius: 'var(--radius-xl)',
             paddingLeft: 'var(--gap--1-5rem)',
             paddingRight: 'var(--gap--1-5rem)',
             marginBottom: '-1px', // Fix for gaps
             boxShadow: 'var(--shadow-3)',
           }}
        >
          <span 
            className="font-sans"
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)',
            }}
          >
            {currentLabel}
          </span>
          <div 
            className="flex items-center justify-center rounded-full"
            style={{
              width: '32px',
              height: '32px',
              background: 'var(--lum-03)',
            }}
          >
            <ChevronUp size={20} style={{ color: 'var(--muted-foreground)' }} />
          </div>
        </div>
      </motion.div>

      {/* Full Screen Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden flex flex-col"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              background: 'var(--lum-01)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between shrink-0"
              style={{
                height: '56px',
                paddingLeft: 'var(--gap--1-5rem)',
                paddingRight: 'var(--gap--1-5rem)',
                borderBottom: '1px solid var(--black-a2)',
                background: 'var(--card-normal)',
              }}
            >
              <span
                className="font-sans"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  color: 'var(--card-foreground)',
                }}
              >
                Components
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-full p-2"
                style={{
                  background: 'transparent',
                  color: 'var(--muted-foreground)',
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-[var(--gap--1rem)] py-[var(--gap--1-5rem)]">
               <NavigationTree
                 activeVariant={activeVariant}
                 onNavigate={handleNavigate}
                 componentVariants={componentVariants}
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
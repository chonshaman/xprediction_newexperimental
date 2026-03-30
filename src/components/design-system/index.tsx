/**
 * Design System Page - Main Component
 * Refactored into modular structure
 */
import React, { useState, useRef } from 'react';
import { NavigationTree } from './components/NavigationTree';
import { ComponentPreview } from './components/ComponentPreview';
import { MobileNavigation } from './components/MobileNavigation';
import { componentVariants } from './data/variants';

export function DesignSystemPage() {
  const [activeVariant, setActiveVariant] = useState(componentVariants[0].id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (id: string) => {
    setActiveVariant(id);
    const variant = componentVariants.find((v) => v.id === id);
    if (variant) {
      // Get unique sizes from this variant
      const uniqueSizes = Array.from(new Set(variant.sizeStates.map(ss => ss.size)));
      setSelectedSize(uniqueSizes[0] || 'Default');
      setSelectedStateIndex(0);
    }
  };

  const currentVariant = componentVariants.find((v) => v.id === activeVariant);

  // Initialize selectedSize on first render
  React.useEffect(() => {
    if (currentVariant && !selectedSize) {
      const uniqueSizes = Array.from(new Set(currentVariant.sizeStates.map(ss => ss.size)));
      setSelectedSize(uniqueSizes[0] || 'Default');
    }
  }, [currentVariant, selectedSize]);

  if (!currentVariant) {
    return <div>Component not found</div>;
  }

  return (
    <div
      className="flex flex-col md:flex-row h-full text-card-foreground font-sans relative"
    >
      {/* Mobile Navigation */}
      <MobileNavigation 
        activeVariant={activeVariant}
        onNavigate={handleNavigate}
        componentVariants={componentVariants}
        scrollContainerRef={scrollContainerRef}
      />

      {/* Left Sidebar - Desktop Navigation */}
      <div
        style={{
          padding: 'var(--gap--1-5rem)',
        }}
        className="hidden md:block w-[280px] border-r border-[var(--black-a2)] overflow-y-auto minimal-scrollbar shrink-0 h-full"
      >
        <div style={{ marginBottom: 'var(--gap--2rem)' }}>
          <h1
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-extra-bold)',
              color: 'var(--card-foreground)',
              marginBottom: 'var(--gap--0-5rem)',
            }}
          >
            Design System
          </h1>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
            }}
          >
            Component library and style guide
          </p>
        </div>

        <NavigationTree
          activeVariant={activeVariant}
          onNavigate={handleNavigate}
          componentVariants={componentVariants}
        />
      </div>

      {/* Main Content Area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 p-[var(--gap--1rem)] md:p-[var(--gap--2rem)] overflow-y-auto minimal-scrollbar"
      >
        <ComponentPreview
          variant={currentVariant}
          selectedSize={selectedSize}
          selectedStateIndex={selectedStateIndex}
          onSizeChange={setSelectedSize}
          onStateChange={setSelectedStateIndex}
        />
      </div>
    </div>
  );
}

export default DesignSystemPage;
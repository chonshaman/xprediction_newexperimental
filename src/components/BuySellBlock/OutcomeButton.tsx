import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { OutcomeButtonProps } from './types';
import { ANIMATION_CONFIG } from './constants';

// Memoize gradient configuration - supports both binary and multi-outcome
const useGradientConfig = (color: string, selected: boolean) => {
  return useMemo(() => {
    let baseColor: string;
    
    // Handle CSS variables (e.g., var(--chart-1))
    if (color.startsWith('var(')) {
      // For CSS variables, we can't extract RGB at build time
      // Use the variable directly with opacity
      const varName = color.match(/var\((--[^)]+)\)/)?.[1];
      if (varName) {
        // Return config using CSS custom property with opacity
        const opacity = selected ? '0.45, 0.25' : '0.30, 0.15';
        const [opacityStart, opacityEnd] = opacity.split(',').map(v => v.trim());
        
        return {
          background: `linear-gradient(135deg, color-mix(in srgb, ${color} ${parseFloat(opacityStart) * 100}%, transparent) 0%, color-mix(in srgb, ${color} ${parseFloat(opacityEnd) * 100}%, transparent) 100%)`,
          boxShadow: `0 8px 25px color-mix(in srgb, ${color} ${selected ? '30%' : '20%'}, transparent), 0 4px 10px color-mix(in srgb, ${color} 15%, transparent)`,
          baseColor: color, // Keep as CSS var for border
          isCSSVar: true,
        };
      }
    }
    
    // Handle hex colors (e.g., #30A46C)
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    baseColor = `${r}, ${g}, ${b}`;
    
    // Selected state has much higher opacity for darker, more visible background
    const opacity = selected ? '0.45, 0.25' : '0.30, 0.15';
    const [opacityStart, opacityEnd] = opacity.split(',').map(v => v.trim());
    
    return {
      background: `linear-gradient(135deg, rgba(${baseColor}, ${opacityStart}) 0%, rgba(${baseColor}, ${opacityEnd}) 100%)`,
      boxShadow: `0 8px 25px rgba(${baseColor}, ${selected ? '0.3' : '0.2'}), 0 4px 10px rgba(${baseColor}, 0.15)`,
      baseColor,
      isCSSVar: false,
    };
  }, [color, selected]);
};

export const OutcomeButton = React.memo<OutcomeButtonProps>(({ 
  type, 
  price, 
  selected, 
  onClick,
  // Optional props for multi-outcome markets
  color,
  icon,
  label
}) => {
  const isYes = type === 'Yes';
  // Use custom color if provided, otherwise use YES/NO defaults
  const buttonColor = color || (isYes ? '#30A46C' : '#E5484D');
  const buttonLabel = icon || (isYes ? 'Y' : 'N');
  const displayText = label || type;
  
  const [isHovered, setIsHovered] = useState(false);

  const selectedConfig = useGradientConfig(buttonColor, true);
  const tapConfig = useGradientConfig(buttonColor, false);

  return (
    <motion.div 
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-pointer" 
      initial={{
        y: 0,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
      }}
      style={{
        background: selected 
          ? selectedConfig.background 
          : 'linear-gradient(135deg, rgba(90, 115, 120, 0.15) 0%, rgba(45, 58, 60, 0.08) 100%)',
        borderRadius: 'var(--radius-card)',
        height: '48px',
        maxHeight: '48px',
        minHeight: '48px',
        flex: '1 1 0px',
        minWidth: '0px',
        alignSelf: 'stretch'
      }}
      whileHover={!selected ? { 
        y: -3,
        background: 'linear-gradient(135deg, rgba(90, 115, 120, 0.25) 0%, rgba(45, 58, 60, 0.15) 100%)',
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.08)"
      } : {}}
      whileTap={selected ? undefined : { background: tapConfig.background, boxShadow: tapConfig.boxShadow }}
      animate={selected ? {
        background: selectedConfig.background,
        boxShadow: selectedConfig.boxShadow,
      } : {
        y: 0,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
      }}
      transition={{ 
        duration: ANIMATION_CONFIG.duration.smooth,
        ease: ANIMATION_CONFIG.easing.smooth,
        y: { duration: ANIMATION_CONFIG.duration.smooth, ease: ANIMATION_CONFIG.easing.bounce },
        background: { duration: ANIMATION_CONFIG.duration.smooth, ease: ANIMATION_CONFIG.easing.smooth },
        boxShadow: { duration: ANIMATION_CONFIG.duration.slow, ease: ANIMATION_CONFIG.easing.smooth }
      }}
    >
      <motion.div 
        aria-hidden="true" 
        className="absolute border-solid inset-0 pointer-events-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]"
        style={{
          borderColor: selected 
            ? (selectedConfig.isCSSVar 
                ? `color-mix(in srgb, ${selectedConfig.baseColor} 30%, transparent)` 
                : `rgba(${selectedConfig.baseColor}, 0.3)`)
            : 'var(--black-a1)',
          borderWidth: selected ? "1.6px" : "1px",
          borderRadius: 'var(--radius-card)'
        }}
        transition={{ duration: ANIMATION_CONFIG.duration.slow, ease: ANIMATION_CONFIG.easing.easeOut }}
      />
      <div 
        className="flex flex-row items-center" 
        style={{ 
          width: '100%',
          height: '48px',
          paddingLeft: 'var(--gap--0-875rem)',
          paddingRight: 'var(--gap--0-875rem)'
        }}
      >
        <div 
          className="flex items-center justify-between relative"
          style={{ width: '100%' }}
        >
          <div 
            className="flex items-center relative shrink-0"
            style={{ 
              gap: '2px',
              zIndex: 3 
            }}
          >
            <div 
              className="box-border flex items-center justify-center relative shrink-0"
              style={{ 
                padding: '2px',
                width: '24px',
                height: '24px'
              }}
            >
              <motion.div 
                className="flex items-center justify-center"
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: buttonColor
                }}
                animate={{ 
                  boxShadow: (isHovered || selected)
                    ? (selectedConfig.isCSSVar
                        ? `0 0 10px 2px color-mix(in srgb, ${buttonColor} 40%, transparent), 0 0 20px 4px color-mix(in srgb, ${buttonColor} 20%, transparent), 0 0 30px 6px color-mix(in srgb, ${buttonColor} 10%, transparent)`
                        : `0 0 10px 2px rgba(${selectedConfig.baseColor}, 0.4), 0 0 20px 4px rgba(${selectedConfig.baseColor}, 0.2), 0 0 30px 6px rgba(${selectedConfig.baseColor}, 0.1)`) 
                    : '0 0 0 rgba(0, 0, 0, 0)',
                  scale: (isHovered || selected) ? 1.05 : 1
                }}
                transition={{ duration: ANIMATION_CONFIG.duration.normal }}
              >
                <span 
                  className="font-semibold"
                  style={{ fontSize: 'var(--text-xxs)', color: 'var(--side-bar-hold-white)' }}
                >
                  {buttonLabel}
                </span>
              </motion.div>
            </div>
            <p 
              className="font-sans leading-[24px] not-italic relative shrink-0 text-nowrap whitespace-pre"
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--primary)'
              }}
            >
              {displayText}
            </p>
          </div>
          <p 
            className="font-sans not-italic relative shrink-0 text-right tabular-nums"
            style={{
              zIndex: 2,
              width: '36px',
              lineHeight: '24px',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--primary)'
            }}
          >
            {price}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

OutcomeButton.displayName = 'OutcomeButton';
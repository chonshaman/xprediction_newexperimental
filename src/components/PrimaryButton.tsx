import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function PrimaryButton({ 
  children, 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button',
  style,
  size = 'md'
}: PrimaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Separate backgroundColor from other styles
  const { backgroundColor: customBgColor, ...otherStyles } = style || {};
  
  // Determine the background color: custom > hover state > default
  const bgColor = customBgColor || 
    (!disabled && isHovered ? 'var(--primary-button-bg-hover)' : 'var(--primary-button-bg)');

  // Size configurations using CSS variables
  const sizeStyles = {
    xs: {
      height: '36px',
      padding: '0 var(--gap--0-875rem)', // 14px
      fontSize: 'var(--text-sm)',
      borderRadius: 'var(--border-radius--0-5rem)', // 8px
    },
    sm: {
      height: '40px',
      padding: '0 var(--gap--1rem)', // 16px
      fontSize: 'var(--text-sm)',
      borderRadius: 'var(--border-radius--0-5rem)', // 8px
    },
    md: {
      height: '48px',
      padding: '0 var(--gap--1-5rem)', // 24px
      fontSize: 'var(--text-base)',
      borderRadius: 'var(--radius-button)', // 8px
    },
    lg: {
      height: '56px',
      padding: '0 var(--gap--2rem)', // 32px
      fontSize: 'var(--text-lg)',
      borderRadius: 'var(--radius-button)', // 8px
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative transition-all duration-200 ${className}`}
      style={{
        backgroundColor: bgColor,
        color: 'var(--side-bar-hold-white)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        height: currentSize.height,
        padding: currentSize.padding,
        fontSize: currentSize.fontSize,
        borderRadius: currentSize.borderRadius,
        fontWeight: 'var(--font-weight-semi-bold)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...otherStyles
      }}
      whileHover={!disabled ? {
        y: -2,
        boxShadow: '0 8px 24px rgba(91, 91, 214, 0.35), 0 4px 12px rgba(91, 91, 214, 0.25), 0 2px 6px rgba(0, 0, 0, 0.1)',
      } : undefined}
      whileTap={!disabled ? {
        y: 0,
        boxShadow: '0 4px 12px rgba(91, 91, 214, 0.25), 0 2px 6px rgba(91, 91, 214, 0.15)',
      } : undefined}
      transition={{ 
        duration: 0.2,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.button>
  );
}
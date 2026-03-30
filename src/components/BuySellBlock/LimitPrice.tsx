import React from 'react';
import { motion } from 'motion/react';
import { ANIMATION_CONFIG } from './constants';

interface LimitPriceProps {
  price: number;
  onPriceChange: (price: number) => void;
  selectedOutcome: 'YES' | 'NO';
}

export const LimitPrice = React.memo<LimitPriceProps>(({ price, onPriceChange, selectedOutcome }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(price.toString());
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setInputValue(price.toString());
  }, [price]);

  const handleIncrement = () => {
    const newPrice = Math.min(99, price + 1);
    onPriceChange(newPrice);
  };

  const handleDecrement = () => {
    const newPrice = Math.max(1, price - 1);
    onPriceChange(newPrice);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty string or numbers only
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    setIsFocused(false);
    const numValue = parseInt(inputValue);
    if (!isNaN(numValue)) {
      const clampedValue = Math.max(1, Math.min(99, numValue));
      onPriceChange(clampedValue);
      setInputValue(clampedValue.toString());
    } else {
      setInputValue(price.toString());
    }
  };

  const handleInputFocus = () => {
    setIsEditing(true);
    setIsFocused(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="flex flex-col items-start relative shrink-0"
      style={{
        width: '100%',
        gap: 'var(--gap--0-25rem)',
        paddingTop: 'var(--gap--0-25rem)',
        paddingBottom: 'var(--gap--0-25rem)'
      }}
    >
      <motion.div 
        className="box-border flex items-center justify-between relative shrink-0 border border-transparent cursor-text"
        style={{ width: '100%' }}
        onClick={handleContainerClick}
        animate={isFocused ? "focused" : "default"}
        whileHover={!isFocused ? "hover" : undefined}
        variants={{
          default: {
            paddingLeft: "4px",
            paddingRight: "4px",
            paddingTop: "var(--gap--0-25rem)",
            paddingBottom: "var(--gap--0-25rem)",
            borderColor: "rgba(255,255,255,0)",
            backgroundColor: "rgba(0,0,0,0)",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            borderRadius: "var(--radius-xl)"
          },
          hover: {
            paddingLeft: "var(--gap--0-75rem)",
            paddingRight: "var(--gap--0-75rem)",
            paddingTop: "var(--gap--0-25rem)",
            paddingBottom: "var(--gap--0-25rem)",
            borderColor: "rgba(255,255,255,0.1)",
            backgroundColor: "rgba(0,0,0,0.1)",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            borderRadius: "var(--radius-xl)"
          },
          focused: {
            paddingLeft: "var(--gap--1rem)",
            paddingRight: "var(--gap--1rem)",
            paddingTop: "var(--gap--0-25rem)",
            paddingBottom: "var(--gap--0-25rem)",
            borderColor: "var(--primary-button-bg)",
            backgroundColor: "rgba(0,0,0,0.1)",
            boxShadow: "0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)",
            borderRadius: "var(--radius-xl)"
          }
        }}
        style={{ gap: 'var(--gap--1rem)' }}
        transition={{ duration: ANIMATION_CONFIG.duration.normal, ease: "easeOut" }}
      >
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
          <p 
            className="font-sans font-normal leading-[24px] not-italic relative shrink-0 text-nowrap text-card-foreground whitespace-pre"
            style={{ fontSize: 'var(--text-base)' }}
          >
            Limit Price
          </p>
        </div>
        
        <div 
          className="flex items-center relative shrink-0"
          style={{ gap: 'var(--gap--0-375rem)' }}
        >
          {/* Minus Button */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              handleDecrement();
            }}
            className="flex items-center justify-center relative shrink-0 cursor-pointer transition-colors"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg className="block size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d="M5.83333 14H22.1667" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
          </div>

          {/* Price Input with Scale Effect */}
          <motion.div 
            className="flex items-center justify-center h-[40px]"
            animate={{ scale: isFocused ? 1.1 : 1 }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow, type: "spring", stiffness: 300, damping: 20 }}
          >
            <div 
              className="relative flex items-center justify-center"
              style={{ 
                height: '100%',
                width: '80px' 
              }}
            >
              <span className="invisible font-sans font-semibold text-[24px] leading-[40px] tracking-[-0.144px] whitespace-pre tabular-nums">
                {isEditing ? inputValue : `${price}¢`}
              </span>
              
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                value={isEditing ? inputValue : `${price}¢`}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 w-full h-full bg-transparent text-center focus:outline-none font-sans font-semibold text-[24px] leading-[40px] tracking-[-0.144px] text-card-foreground tabular-nums border-none p-0 m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none flex items-center justify-center"
              />
            </div>
          </motion.div>

          {/* Plus Button */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement();
            }}
            className="flex items-center justify-center relative shrink-0 cursor-pointer transition-colors"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg className="block size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d="M5.83333 14H22.1667" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              <path d="M14 5.83333V22.1667" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

LimitPrice.displayName = 'LimitPrice';
import * as React from "react";

function Textarea({ className, placeholder, ...props }: React.ComponentProps<"textarea">) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="flex cursor-text transition-all duration-200 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        gap: 'var(--gap--0-5rem)',
        backgroundColor: isFocused || isHovered ? 'var(--card-hover)' : 'var(--card-normal)',
        border: isFocused ? '1px solid var(--primary-button-bg)' : isHovered ? '1px solid var(--muted-foreground)' : '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        paddingTop: 'var(--gap--0-5rem)',
        paddingBottom: 'var(--gap--0-5rem)',
        paddingLeft: isFocused ? 'var(--gap--1rem)' : isHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
        paddingRight: isFocused ? 'var(--gap--1rem)' : isHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
        boxShadow: isFocused ? '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)' : isHovered ? '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)' : 'none',
      }}
    >
      <textarea
        className={`font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground resize-none ${className || ''}`}
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
          minHeight: '80px',
        }}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
}

export { Textarea };
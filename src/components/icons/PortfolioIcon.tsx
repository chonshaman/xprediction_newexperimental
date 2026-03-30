interface PortfolioIconProps {
  className?: string;
  isActive?: boolean;
}

export function PortfolioIcon({ className, isActive = false }: PortfolioIconProps) {
  const strokeColor = isActive ? 'var(--iris-9)' : 'var(--muted-foreground)';
  
  return (
    <svg 
      width="18" 
      height="18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M3 9.75c2.625-1.5 6-1.5 7.5 1.5a4.124 4.124 0 016 3.75" 
        stroke={strokeColor}
        strokeWidth="1.4"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M3.862 13.418c4.14-1.14 6.488-5.168 5.25-9C8.663 3 8.626 1.5 9.75 1.5c2.415 0 3.75 4.125 3.75 6 0 4.875-3.15 9-7.867 9-1.8 0-4.133 0-4.133-1.5 0-1.125.855-1.162 2.362-1.582z" 
        stroke={strokeColor}
        strokeWidth="1.4"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
/**
 * Search Input Preview Components
 * 
 * Search input used in AllCategories and Header
 */

import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchInputDefault() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  return (
    <div 
      className="flex items-center cursor-text transition-all duration-200 ease-out"
      onMouseEnter={() => setIsSearchHovered(false)}
      onMouseLeave={() => setIsSearchHovered(false)}
      style={{
        width: '480px',
        gap: 'var(--gap--0-5rem)',
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        paddingTop: 'var(--gap--0-5rem)',
        paddingBottom: 'var(--gap--0-5rem)',
        paddingLeft: 'var(--gap--0-5rem)',
        paddingRight: 'var(--gap--0-5rem)',
      }}
    >
      <Search 
        style={{
          width: '20px',
          height: '20px',
          color: 'var(--muted-foreground)',
          strokeWidth: 2,
          flexShrink: 0,
        }}
      />
      <input
        type="text"
        className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground"
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search markets..."
        onFocus={() => setIsSearchFocused(false)}
        onBlur={() => setIsSearchFocused(false)}
      />
    </div>
  );
}

export function SearchInputHover() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(true);

  return (
    <div 
      className="flex items-center cursor-text transition-all duration-200 ease-out"
      onMouseEnter={() => setIsSearchHovered(true)}
      onMouseLeave={() => setIsSearchHovered(false)}
      style={{
        width: '480px',
        gap: 'var(--gap--0-5rem)',
        backgroundColor: isSearchFocused || isSearchHovered ? 'var(--card-hover)' : 'var(--card-normal)',
        border: isSearchFocused ? '1px solid var(--primary-button-bg)' : isSearchHovered ? '1px solid var(--muted-foreground)' : '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        paddingTop: 'var(--gap--0-5rem)',
        paddingBottom: 'var(--gap--0-5rem)',
        paddingLeft: isSearchFocused ? 'var(--gap--1rem)' : isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
        paddingRight: isSearchFocused ? 'var(--gap--1rem)' : isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
        boxShadow: isSearchFocused ? '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)' : isSearchHovered ? '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)' : 'none',
      }}
    >
      <Search 
        style={{
          width: '20px',
          height: '20px',
          color: 'var(--muted-foreground)',
          strokeWidth: 2,
          flexShrink: 0,
        }}
      />
      <input
        type="text"
        className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground"
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search markets..."
        onFocus={() => setIsSearchFocused(false)}
        onBlur={() => setIsSearchFocused(false)}
      />
    </div>
  );
}

export function SearchInputFocused() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(true);
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  return (
    <div 
      className="flex items-center cursor-text transition-all duration-200 ease-out"
      onMouseEnter={() => setIsSearchHovered(false)}
      onMouseLeave={() => setIsSearchHovered(false)}
      style={{
        width: '480px',
        gap: 'var(--gap--0-5rem)',
        backgroundColor: isSearchFocused || isSearchHovered ? 'var(--card-hover)' : 'var(--card-normal)',
        border: isSearchFocused ? '1px solid var(--primary-button-bg)' : isSearchHovered ? '1px solid var(--muted-foreground)' : '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        paddingTop: 'var(--gap--0-5rem)',
        paddingBottom: 'var(--gap--0-5rem)',
        paddingLeft: isSearchFocused ? 'var(--gap--1rem)' : isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
        paddingRight: isSearchFocused ? 'var(--gap--1rem)' : isSearchHovered ? 'var(--gap--0-75rem)' : 'var(--gap--0-5rem)',
        boxShadow: isSearchFocused ? '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)' : isSearchHovered ? '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)' : 'none',
      }}
    >
      <Search 
        style={{
          width: '20px',
          height: '20px',
          color: 'var(--muted-foreground)',
          strokeWidth: 2,
          flexShrink: 0,
        }}
      />
      <input
        type="text"
        className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground"
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search markets..."
        autoFocus
      />
    </div>
  );
}

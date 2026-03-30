/**
 * Menu & Navigation Preview Components
 */
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../ui/dropdown-menu';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '../../ui/context-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../ui/hover-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../../ui/command';
import { Button } from '../../ui/button';

// ==================== Dropdown Menu ====================
export function DropdownMenuDefault() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        style={{ 
          background: 'var(--card-normal)', 
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--0-5rem)',
          minWidth: '200px',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        <DropdownMenuLabel style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)' }}>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator style={{ background: 'var(--black-a2)', height: '1px', margin: 'var(--gap--0-25rem) 0' }} />
        <DropdownMenuItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)', borderRadius: 'var(--border-radius--0-375rem)' }}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)', borderRadius: 'var(--border-radius--0-375rem)' }}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)', borderRadius: 'var(--border-radius--0-375rem)' }}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// ==================== Context Menu ====================
export function ContextMenuDefault() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div 
          style={{ 
            width: '300px', 
            height: '150px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'var(--lum-02)',
            border: '1px dashed var(--black-a2)',
            borderRadius: 'var(--radius-card)',
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)'
          }}
        >
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent 
        style={{ 
          background: 'var(--card-normal)', 
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--0-5rem)',
          minWidth: '200px',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        <ContextMenuItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)' }}>
          Copy
        </ContextMenuItem>
        <ContextMenuItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)' }}>
          Paste
        </ContextMenuItem>
        <ContextMenuItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)' }}>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

// ==================== Popover ====================
export function PopoverDefault() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent 
        style={{ 
          background: 'var(--card-normal)', 
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1rem)',
          width: '300px',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        <div>
          <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', marginBottom: 'var(--gap--0-5rem)' }}>
            Popover Title
          </h4>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
            This is popover content with some information.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ==================== Hover Card ====================
export function HoverCardDefault() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" style={{ color: 'var(--iris-11)', fontSize: 'var(--text-sm)' }}>@username</Button>
      </HoverCardTrigger>
      <HoverCardContent 
        style={{ 
          background: 'var(--card-normal)', 
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1rem)',
          width: '320px',
          boxShadow: 'var(--shadow-2)'
        }}
      >
        <div style={{ display: 'flex', gap: 'var(--gap--1rem)' }}>
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              background: 'var(--iris-9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)'
            }}
          >
            U
          </div>
          <div>
            <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)' }}>
              @username
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', marginTop: 'var(--gap--0-25rem)' }}>
              User bio and description appears here.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

// ==================== Tooltip ====================
export function TooltipDefault() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent 
          style={{ 
            background: 'var(--card-normal)', 
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--border-radius--0-375rem)',
            padding: 'var(--gap--0-5rem) var(--gap--0-75rem)',
            fontSize: 'var(--text-sm)',
            color: 'var(--card-foreground)',
            boxShadow: 'var(--shadow-2)'
          }}
        >
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// ==================== Command ====================
export function CommandDefault() {
  return (
    <Command 
      style={{ 
        background: 'var(--card-normal)', 
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        width: '400px',
        boxShadow: 'var(--shadow-2)'
      }}
    >
      <CommandInput 
        placeholder="Type a command..." 
        style={{ 
          border: 'none',
          borderBottom: '1px solid var(--black-a2)',
          fontSize: 'var(--text-sm)',
          padding: 'var(--gap--0-75rem)',
          color: 'var(--card-foreground)'
        }}
      />
      <CommandList>
        <CommandEmpty style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', padding: 'var(--gap--1rem)', textAlign: 'center' }}>
          No results found.
        </CommandEmpty>
        <CommandGroup heading="Suggestions" style={{ padding: 'var(--gap--0-5rem)' }}>
          <CommandItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)', borderRadius: 'var(--border-radius--0-375rem)' }}>
            Calendar
          </CommandItem>
          <CommandItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)', borderRadius: 'var(--border-radius--0-375rem)' }}>
            Search Emoji
          </CommandItem>
          <CommandItem style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-5rem)', borderRadius: 'var(--border-radius--0-375rem)' }}>
            Calculator
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

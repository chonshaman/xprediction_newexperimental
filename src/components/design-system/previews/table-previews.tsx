/**
 * Table & Data Display Preview Components
 */
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../ui/collapsible';
import { ScrollArea } from '../../ui/scroll-area';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../ui/breadcrumb';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../../ui/pagination';
import { AspectRatio } from '../../ui/aspect-ratio';
import { Button } from '../../ui/button';
import { ChevronDown } from 'lucide-react';

// ==================== Table ====================
export function TableDefault() {
  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Table>
        <TableCaption style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
          A list of recent transactions
        </TableCaption>
        <TableHeader>
          <TableRow style={{ borderBottom: '1px solid var(--black-a2)' }}>
            <TableHead style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)' }}>
              Invoice
            </TableHead>
            <TableHead style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)' }}>
              Status
            </TableHead>
            <TableHead style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)', textAlign: 'right' }}>
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow style={{ borderBottom: '1px solid var(--black-a1)' }}>
            <TableCell style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)' }}>
              INV001
            </TableCell>
            <TableCell style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)' }}>
              Paid
            </TableCell>
            <TableCell style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)', textAlign: 'right' }}>
              $250.00
            </TableCell>
          </TableRow>
          <TableRow style={{ borderBottom: '1px solid var(--black-a1)' }}>
            <TableCell style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)' }}>
              INV002
            </TableCell>
            <TableCell style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)' }}>
              Pending
            </TableCell>
            <TableCell style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', padding: 'var(--gap--0-75rem)', textAlign: 'right' }}>
              $150.00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

// ==================== Collapsible ====================
export function CollapsibleDefault() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} style={{ width: '350px' }}>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          style={{ 
            width: '100%', 
            justifyContent: 'space-between',
            padding: 'var(--gap--0-75rem)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-semi-bold)'
          }}
        >
          Can I use this component?
          <ChevronDown 
            className="h-4 w-4" 
            style={{ 
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent style={{ padding: 'var(--gap--1rem)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
        Yes! This component is available for use in your project.
      </CollapsibleContent>
    </Collapsible>
  );
}

// ==================== Scroll Area ====================
export function ScrollAreaDefault() {
  return (
    <ScrollArea 
      style={{ 
        height: '200px', 
        width: '350px', 
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--1rem)',
        background: 'var(--lum-01)'
      }}
    >
      <div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--card-foreground)',
              padding: 'var(--gap--0-5rem) 0',
              borderBottom: i < 19 ? '1px solid var(--black-a1)' : 'none'
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

// ==================== Breadcrumb ====================
export function BreadcrumbDefault() {
  return (
    <Breadcrumb>
      <BreadcrumbList style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
        <BreadcrumbItem>
          <BreadcrumbLink 
            href="#" 
            style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--muted-foreground)',
              textDecoration: 'none'
            }}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator style={{ color: 'var(--muted-foreground)' }}>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink 
            href="#" 
            style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--muted-foreground)',
              textDecoration: 'none'
            }}
          >
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator style={{ color: 'var(--muted-foreground)' }}>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage style={{ fontSize: 'var(--text-sm)', color: 'var(--card-foreground)', fontWeight: 'var(--font-weight-medium)' }}>
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// ==================== Pagination ====================
export function PaginationDefault() {
  return (
    <Pagination>
      <PaginationContent style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
        <PaginationItem>
          <PaginationPrevious 
            href="#" 
            style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--card-foreground)',
              padding: 'var(--gap--0-5rem) var(--gap--0-75rem)',
              borderRadius: 'var(--border-radius--0-375rem)',
              border: '1px solid var(--black-a2)'
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink 
            href="#" 
            style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--card-foreground)',
              padding: 'var(--gap--0-5rem) var(--gap--0-75rem)',
              borderRadius: 'var(--border-radius--0-375rem)',
              background: 'var(--card-normal)'
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink 
            href="#" 
            style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--card-foreground)',
              padding: 'var(--gap--0-5rem) var(--gap--0-75rem)',
              borderRadius: 'var(--border-radius--0-375rem)'
            }}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext 
            href="#" 
            style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--card-foreground)',
              padding: 'var(--gap--0-5rem) var(--gap--0-75rem)',
              borderRadius: 'var(--border-radius--0-375rem)',
              border: '1px solid var(--black-a2)'
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

// ==================== Aspect Ratio ====================
export function AspectRatioDefault() {
  return (
    <div style={{ width: '300px' }}>
      <AspectRatio ratio={16 / 9}>
        <div 
          style={{ 
            width: '100%', 
            height: '100%', 
            background: 'var(--lum-02)',
            borderRadius: 'var(--radius-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)',
            border: '1px solid var(--black-a2)'
          }}
        >
          16:9 Aspect Ratio
        </div>
      </AspectRatio>
    </div>
  );
}

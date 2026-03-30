/**
 * Component Variants Data
 * 
 * This file contains all the component variant definitions with their CSS properties.
 * Each variant includes size/state combinations and detailed CSS property breakdowns.
 * 
 * To add more components: Import the preview component and add a variant object below.
 */

import type { ComponentVariant } from '../types';

// Import all preview components
import * as ButtonPreviews from '../previews/button-previews';
import * as FormFieldPreviews from '../previews/form-field-previews';
import * as SearchInputPreviews from '../previews/search-input-previews';
import * as OtherPreviews from '../previews/other-previews';
import * as MarketCardPreviews from '../previews/market-card-previews';
import * as OutcomeButtonPreviews from '../previews/outcome-button-previews';
import * as DialogPreviews from '../previews/dialog-previews';
import * as MenuPreviews from '../previews/menu-previews';
import * as TablePreviews from '../previews/table-previews';
import * as AdvancedPreviews from '../previews/advanced-previews';
import * as LayoutPreviews from '../previews/layout-previews';
import { GuidelinesPreview } from '../previews/guidelines-preview';
import * as TabPreviews from '../previews/tab-previews';
import * as MarketTimelinePreviews from '../previews/market-timeline-previews';
import * as MarketOrderBookPreviews from '../previews/market-orderbook-previews';
import * as AtomicPreviews from '../previews/atomic-previews';
import * as RivePreviews from '../previews/rive-previews';
import * as FilterButtonPreviews from '../previews/filter-button-previews';
import { PresaleStateDocumentation } from '../previews/presale-state-documentation';

/**
 * All component variants organized by category
 * 
 * Categories:
 * - Button: All button variants (Default, Primary, Destructive, etc.)
 * - Form: Input, Textarea, Checkbox, Switch, Select, etc.
 * - Badge: Badge variants
 * - Market Card: MarketCard, EndingSoonCard, FeaturedCard
 * - Layout: Card, Separator, Accordion
 * - Feedback: Alert, Skeleton, Progress
 * - Navigation: Tabs
 */
export const componentVariants: ComponentVariant[] = [
  // ==================== GUIDELINES ====================
  {
    id: 'guidelines',
    label: 'Guidelines',
    category: 'Documentation',
    sizeStates: [
      {
        size: 'Default',
        state: 'Default',
        description: 'Design system guidelines and best practices',
        renderComponent: GuidelinesPreview,
        cssVars: [],
      },
    ],
  },
  {
    id: 'presale-state-management',
    label: 'Presale State Management',
    category: 'Documentation',
    sizeStates: [
      {
        size: 'Default',
        state: 'Default',
        description: 'Complete presale market lifecycle and state transitions documentation',
        renderComponent: PresaleStateDocumentation,
        cssVars: [],
      },
    ],
  },

  // ==================== FOUNDATIONS ====================
  {
    id: 'foundations-typography',
    label: 'Typography',
    category: 'Foundations',
    sizeStates: [
      { size: 'Default', state: 'Default', description: 'Typography scale and weights', renderComponent: AtomicPreviews.TypographyPreview, cssVars: [] }
    ]
  },
  {
    id: 'foundations-radius',
    label: 'Radius',
    category: 'Foundations',
    sizeStates: [
      { size: 'Default', state: 'Default', description: 'Border radius tokens', renderComponent: AtomicPreviews.RadiusPreview, cssVars: [] }
    ]
  },
  {
    id: 'foundations-shadow',
    label: 'Shadows',
    category: 'Foundations',
    sizeStates: [
      { size: 'Default', state: 'Default', description: 'Shadow depth tokens', renderComponent: AtomicPreviews.ShadowPreview, cssVars: [] }
    ]
  },
  {
    id: 'foundations-gap',
    label: 'Spacing / Gap',
    category: 'Foundations',
    sizeStates: [
      { size: 'Default', state: 'Default', description: 'Spacing and gap tokens', renderComponent: AtomicPreviews.GapPreview, cssVars: [] }
    ]
  },
  {
    id: 'foundations-variables',
    label: 'All Variables',
    category: 'Foundations',
    sizeStates: [
      { size: 'Default', state: 'Default', description: 'Complete list of CSS variables', renderComponent: AtomicPreviews.VariablesPreview, cssVars: [] }
    ]
  },

  // ==================== BUTTONS ====================
  {
    id: 'button-default',
    label: 'Default',
    category: 'Button',
    sizeStates: [
      // XS Size
      { 
        size: 'XS', 
        state: 'Default', 
        description: 'Extra small button in default state', 
        renderComponent: ButtonPreviews.ButtonDefaultXSDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary)', actualValue: '#0f172aff (slate-900)' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '28px', actualValue: '28px' },
          { name: 'padding-x', value: '8px', actualValue: '8px left + 8px right' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
        ] 
      },
      { size: 'XS', state: 'Hover', description: 'Extra small button hover', renderComponent: ButtonPreviews.ButtonDefaultXSHover, cssVars: [{ name: 'background', value: 'var(--card-hover)', actualValue: 'Gradient hover' }] },
      { size: 'XS', state: 'Active', description: 'Extra small button active', renderComponent: ButtonPreviews.ButtonDefaultXSActive, cssVars: [{ name: 'transform', value: 'scale(0.98)', actualValue: '98%' }] },
      { size: 'XS', state: 'Focused', description: 'Extra small button focused', renderComponent: ButtonPreviews.ButtonDefaultXSFocused, cssVars: [{ name: 'outline', value: '2px solid var(--iris-9)', actualValue: '#5b5bd6' }] },
      { size: 'XS', state: 'Disabled', description: 'Extra small button disabled', renderComponent: ButtonPreviews.ButtonDefaultXSDisabled, cssVars: [{ name: 'opacity', value: '0.5', actualValue: '50%' }] },
      // SM Size
      { 
        size: 'SM', 
        state: 'Default', 
        description: 'Small button in default state', 
        renderComponent: ButtonPreviews.ButtonDefaultSMDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary)', actualValue: '#0f172aff (slate-900)' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '32px', actualValue: '32px' },
          { name: 'padding-x', value: '12px', actualValue: '12px left + 12px right' },
          { name: 'gap', value: '6px', actualValue: '6px between icon and text' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'text-color', value: 'var(--primary-foreground)', actualValue: '#f8fafcff (slate-50)' },
          { name: 'border', value: 'none', actualValue: '0px' },
          { name: 'box-shadow', value: 'none', actualValue: 'none' }
        ],
        codeExample: `import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export function ButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button size="sm">Button</Button>
      <Button size="sm">
        <PlusIcon />
        With Icon
      </Button>
    </div>
  )
}`
      },
      { 
        size: 'SM', 
        state: 'Hover', 
        description: 'Small button in hover state', 
        renderComponent: ButtonPreviews.ButtonDefaultSMHover, 
        cssVars: [
          { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, #ffffff -80%, #e6eff2 100%)' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
          { name: 'opacity', value: '0.8', actualValue: '80%' }
        ] 
      },
      { 
        size: 'SM', 
        state: 'Active', 
        description: 'Small button when pressed/clicked', 
        renderComponent: ButtonPreviews.ButtonDefaultSMActive, 
        cssVars: [
          { name: 'transform', value: 'scale(0.98)', actualValue: 'Scale down to 98%' }
        ] 
      },
      { 
        size: 'SM', 
        state: 'Focused', 
        description: 'Small button with keyboard focus', 
        renderComponent: ButtonPreviews.ButtonDefaultSMFocused, 
        cssVars: [
          { name: 'outline', value: '2px solid var(--iris-9)', actualValue: '2px solid #5b5bd6' },
          { name: 'outline-offset', value: '2px', actualValue: '2px space between button and outline' }
        ] 
      },
      { 
        size: 'SM', 
        state: 'Disabled', 
        description: 'Small button in disabled state', 
        renderComponent: ButtonPreviews.ButtonDefaultSMDisabled, 
        cssVars: [
          { name: 'opacity', value: '0.5', actualValue: '50% opacity to indicate disabled state' },
          { name: 'pointer-events', value: 'none', actualValue: 'No interaction allowed' }
        ] 
      },
      // MD Size
      { 
        size: 'MD', 
        state: 'Default', 
        description: 'Medium button in default state', 
        renderComponent: ButtonPreviews.ButtonDefaultMDDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary)', actualValue: '#0f172aff (slate-900)' },
          { name: 'height', value: '36px', actualValue: '36px' },
          { name: 'padding-x', value: '16px', actualValue: '16px left + 16px right' },
          { name: 'padding-y', value: '8px', actualValue: '8px top + 8px bottom' },
          { name: 'gap', value: '8px', actualValue: '8px between icon and text' }
        ] 
      },
      { size: 'MD', state: 'Hover', description: 'Medium button in hover state', renderComponent: ButtonPreviews.ButtonDefaultMDHover, cssVars: [{ name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, #ffffff -80%, #e6eff2 100%)' }] },
      { size: 'MD', state: 'Active', description: 'Medium button when pressed', renderComponent: ButtonPreviews.ButtonDefaultMDActive, cssVars: [{ name: 'transform', value: 'scale(0.98)', actualValue: 'Scale to 98%' }] },
      { size: 'MD', state: 'Focused', description: 'Medium button with focus', renderComponent: ButtonPreviews.ButtonDefaultMDFocused, cssVars: [{ name: 'outline', value: '2px solid var(--iris-9)', actualValue: '2px solid #5b5bd6' }] },
      { size: 'MD', state: 'Disabled', description: 'Medium button disabled', renderComponent: ButtonPreviews.ButtonDefaultMDDisabled, cssVars: [{ name: 'opacity', value: '0.5', actualValue: '50%' }] },
      // LG Size
      { 
        size: 'LG', 
        state: 'Default', 
        description: 'Large button in default state', 
        renderComponent: ButtonPreviews.ButtonDefaultLGDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary)', actualValue: '#0f172aff (slate-900)' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: '24px', actualValue: '24px left + 24px right' },
          { name: 'gap', value: '8px', actualValue: '8px between icon and text' }
        ] 
      },
      { size: 'LG', state: 'Hover', description: 'Large button in hover state', renderComponent: ButtonPreviews.ButtonDefaultLGHover, cssVars: [{ name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, #ffffff -80%, #e6eff2 100%)' }] },
      { size: 'LG', state: 'Active', description: 'Large button when pressed', renderComponent: ButtonPreviews.ButtonDefaultLGActive, cssVars: [{ name: 'transform', value: 'scale(0.98)', actualValue: 'Scale to 98%' }] },
      { size: 'LG', state: 'Focused', description: 'Large button with focus', renderComponent: ButtonPreviews.ButtonDefaultLGFocused, cssVars: [{ name: 'outline', value: '2px solid var(--iris-9)', actualValue: '2px solid #5b5bd6' }] },
      { size: 'LG', state: 'Disabled', description: 'Large button disabled', renderComponent: ButtonPreviews.ButtonDefaultLGDisabled, cssVars: [{ name: 'opacity', value: '0.5', actualValue: '50%' }] },
    ],
  },

  // Primary Button
  {
    id: 'button-primary',
    label: 'Primary',
    category: 'Button',
    sizeStates: [
      // XS Size
      { 
        size: 'XS', 
        state: 'Default', 
        description: 'Extra small primary button', 
        renderComponent: ButtonPreviews.ButtonPrimaryXSDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg)', actualValue: '#5b5bd6 (iris-9)' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '28px', actualValue: '28px' },
          { name: 'padding-x', value: 'var(--gap--0-5rem)', actualValue: '8px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'var(--primary-foreground)', actualValue: '#ffffff' },
        ] 
      },
      { 
        size: 'XS', 
        state: 'Hover', 
        description: 'Extra small primary button on hover', 
        renderComponent: ButtonPreviews.ButtonPrimaryXSHover, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg-hover)', actualValue: '#5151cd (iris-10)' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
          { name: 'box-shadow', value: '0 4px 12px rgba(91, 91, 214, 0.3)', actualValue: 'Purple glow shadow' },
        ] 
      },
      // SM Size
      { 
        size: 'SM', 
        state: 'Default', 
        description: 'Small primary button', 
        renderComponent: ButtonPreviews.ButtonPrimarySMDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg)', actualValue: '#5b5bd6 (iris-9)' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '32px', actualValue: '32px' },
          { name: 'padding-x', value: 'var(--gap--0-75rem)', actualValue: '12px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
        ] 
      },
      { 
        size: 'SM', 
        state: 'Hover', 
        description: 'Small primary button on hover', 
        renderComponent: ButtonPreviews.ButtonPrimarySMHover, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg-hover)', actualValue: '#5151cd (iris-10)' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
          { name: 'box-shadow', value: '0 6px 16px rgba(91, 91, 214, 0.35)', actualValue: 'Purple glow shadow' },
        ] 
      },
      // MD Size
      { 
        size: 'MD', 
        state: 'Default', 
        description: 'Medium primary button', 
        renderComponent: ButtonPreviews.ButtonPrimaryMDDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg)', actualValue: '#5b5bd6 (iris-9)' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
        ],
        codeExample: `import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"

export function PrimaryButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button variant="primary">Submit</Button>
      <Button variant="primary">
        <SendIcon />
        Send
      </Button>
    </div>
  )
}`
      },
      { 
        size: 'MD', 
        state: 'Hover', 
        description: 'Medium primary button on hover', 
        renderComponent: ButtonPreviews.ButtonPrimaryMDHover, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg-hover)', actualValue: '#5151cd (iris-10)' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
          { name: 'box-shadow', value: '0 8px 20px rgba(91, 91, 214, 0.4)', actualValue: 'Purple glow shadow' },
        ] 
      },
      // LG Size
      { 
        size: 'LG', 
        state: 'Default', 
        description: 'Large primary button', 
        renderComponent: ButtonPreviews.ButtonPrimaryLGDefault, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg)', actualValue: '#5b5bd6 (iris-9)' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '48px', actualValue: '48px' },
          { name: 'padding-x', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
        ] 
      },
      { 
        size: 'LG', 
        state: 'Hover', 
        description: 'Large primary button on hover', 
        renderComponent: ButtonPreviews.ButtonPrimaryLGHover, 
        cssVars: [
          { name: 'background', value: 'var(--primary-button-bg-hover)', actualValue: '#5151cd (iris-10)' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
          { name: 'box-shadow', value: '0 10px 24px rgba(91, 91, 214, 0.45)', actualValue: 'Purple glow shadow' },
        ] 
      },
    ],
  },

  // Destructive Button
  {
    id: 'button-destructive',
    label: 'Destructive',
    category: 'Button',
    sizeStates: [
      // XS Size
      { size: 'XS', state: 'Default', description: 'Extra small destructive button', renderComponent: ButtonPreviews.ButtonDestructiveSMDefault, cssVars: [{ name: 'background', value: 'var(--red-9)', actualValue: '#e5484d' }, { name: 'height', value: '28px', actualValue: '28px' }] },
      { size: 'XS', state: 'Hover', description: 'Extra small destructive hover', renderComponent: ButtonPreviews.ButtonDestructiveSMHover, cssVars: [{ name: 'background', value: 'var(--red-8)', actualValue: '#eb8e90' }] },
      { size: 'XS', state: 'Disabled', description: 'Extra small destructive disabled', renderComponent: ButtonPreviews.ButtonDestructiveSMDisabled, cssVars: [{ name: 'opacity', value: '0.5', actualValue: '50%' }] },
      // SM Size
      { 
        size: 'SM', 
        state: 'Default', 
        description: 'Small destructive button', 
        renderComponent: ButtonPreviews.ButtonDestructiveSMDefault, 
        cssVars: [
          { name: 'background', value: 'var(--red-9)', actualValue: '#e5484d' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '32px', actualValue: '32px' },
          { name: 'padding-x', value: 'var(--gap--0-75rem)', actualValue: '12px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'white', actualValue: '#ffffff' },
        ] 
      },
      { 
        size: 'SM', 
        state: 'Hover', 
        description: 'Small destructive button on hover', 
        renderComponent: ButtonPreviews.ButtonDestructiveSMHover, 
        cssVars: [
          { name: 'background', value: 'var(--red-8)', actualValue: '#eb8e90' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
          { name: 'box-shadow', value: '0 6px 16px rgba(229, 72, 77, 0.35)', actualValue: 'Red glow shadow' },
        ] 
      },
      { 
        size: 'SM', 
        state: 'Disabled', 
        description: 'Small destructive button disabled', 
        renderComponent: ButtonPreviews.ButtonDestructiveSMDisabled, 
        cssVars: [
          { name: 'opacity', value: '0.5', actualValue: '50%' },
          { name: 'cursor', value: 'not-allowed', actualValue: 'not-allowed' },
        ] 
      },
      // MD Size
      { 
        size: 'MD', 
        state: 'Default', 
        description: 'Medium destructive button', 
        renderComponent: ButtonPreviews.ButtonDestructiveMDDefault, 
        cssVars: [
          { name: 'background', value: 'var(--red-9)', actualValue: '#e5484d' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'white', actualValue: '#ffffff' },
        ],
        codeExample: `import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"

export function DestructiveButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button variant="destructive">Delete</Button>
      <Button variant="destructive">
        <TrashIcon />
        Remove
      </Button>
    </div>
  )
}`
      },
      { 
        size: 'MD', 
        state: 'Hover', 
        description: 'Medium destructive button on hover', 
        renderComponent: ButtonPreviews.ButtonDestructiveMDHover, 
        cssVars: [
          { name: 'background', value: 'var(--red-8)', actualValue: '#eb8e90' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
          { name: 'box-shadow', value: '0 8px 20px rgba(229, 72, 77, 0.4)', actualValue: 'Red glow shadow' },
        ] 
      },
      // LG Size
      { size: 'LG', state: 'Default', description: 'Large destructive button', renderComponent: ButtonPreviews.ButtonDestructiveMDDefault, cssVars: [{ name: 'background', value: 'var(--red-9)', actualValue: '#e5484d' }, { name: 'height', value: '48px', actualValue: '48px' }] },
      { size: 'LG', state: 'Hover', description: 'Large destructive hover', renderComponent: ButtonPreviews.ButtonDestructiveMDHover, cssVars: [{ name: 'background', value: 'var(--red-8)', actualValue: '#eb8e90' }] },
    ],
  },

  // Outline Button
  {
    id: 'button-outline',
    label: 'Outline',
    category: 'Button',
    sizeStates: [
      // XS Size
      { size: 'XS', state: 'Default', description: 'Extra small outline button', renderComponent: ButtonPreviews.ButtonOutlineSMDefault, cssVars: [{ name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)', actualValue: 'Subtle radial gradient' }, { name: 'border', value: '1px solid var(--black-a2)', actualValue: '#0000001a' }, { name: 'height', value: '28px', actualValue: '28px' }] },
      { size: 'XS', state: 'Hover', description: 'Extra small outline hover', renderComponent: ButtonPreviews.ButtonOutlineSMHover, cssVars: [{ name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)', actualValue: 'Enhanced radial gradient' }, { name: 'box-shadow', value: 'var(--shadow-2)', actualValue: 'Shadow on hover' }, { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' }] },
      // SM Size
      { 
        size: 'SM', 
        state: 'Default', 
        description: 'Small outline button', 
        renderComponent: ButtonPreviews.ButtonOutlineSMDefault, 
        cssVars: [
          { name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)', actualValue: 'Subtle radial gradient from lum-04 to white-a1, over lum-02 base' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '32px', actualValue: '32px' },
          { name: 'padding-x', value: 'var(--gap--0-75rem)', actualValue: '12px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
        ],
        codeExample: `import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"

export function OutlineButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm">Cancel</Button>
      <Button variant="outline" size="sm">
        <DownloadIcon />
        Download
      </Button>
    </div>
  )
}`
      },
      { 
        size: 'SM', 
        state: 'Hover', 
        description: 'Small outline button on hover', 
        renderComponent: ButtonPreviews.ButtonOutlineSMHover, 
        cssVars: [
          { name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)', actualValue: 'Enhanced radial gradient from lum-05 to white-a1, over lum-03 base' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'box-shadow', value: 'var(--shadow-2)', actualValue: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
        ] 
      },
      // MD Size
      { 
        size: 'MD', 
        state: 'Default', 
        description: 'Medium outline button', 
        renderComponent: ButtonPreviews.ButtonOutlineMDDefault, 
        cssVars: [
          { name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)', actualValue: 'Subtle radial gradient from lum-04 to white-a1, over lum-02 base' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
        ] 
      },
      { 
        size: 'MD', 
        state: 'Hover', 
        description: 'Medium outline button on hover', 
        renderComponent: ButtonPreviews.ButtonOutlineMDHover, 
        cssVars: [
          { name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)', actualValue: 'Enhanced radial gradient from lum-05 to white-a1, over lum-03 base' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'box-shadow', value: 'var(--shadow-2)', actualValue: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)' },
          { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' },
        ] 
      },
      // LG Size
      { size: 'LG', state: 'Default', description: 'Large outline button', renderComponent: ButtonPreviews.ButtonOutlineMDDefault, cssVars: [{ name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)', actualValue: 'Subtle radial gradient' }, { name: 'border', value: '1px solid var(--black-a2)', actualValue: '#0000001a' }, { name: 'height', value: '48px', actualValue: '48px' }] },
      { size: 'LG', state: 'Hover', description: 'Large outline hover', renderComponent: ButtonPreviews.ButtonOutlineMDHover, cssVars: [{ name: 'background', value: 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)', actualValue: 'Enhanced radial gradient' }, { name: 'box-shadow', value: 'var(--shadow-2)', actualValue: 'Shadow on hover' }, { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift up 2px' }] },
    ],
  },

  // Ghost Button
  {
    id: 'button-ghost',
    label: 'Ghost',
    category: 'Button',
    sizeStates: [
      // XS Size
      { size: 'XS', state: 'Default', description: 'Extra small ghost button', renderComponent: ButtonPreviews.ButtonGhostSMDefault, cssVars: [{ name: 'background', value: 'transparent', actualValue: 'transparent' }, { name: 'height', value: '28px', actualValue: '28px' }] },
      { size: 'XS', state: 'Hover', description: 'Extra small ghost hover', renderComponent: ButtonPreviews.ButtonGhostSMHover, cssVars: [{ name: 'background', value: 'var(--black-a1)', actualValue: '#0000000d' }] },
      // SM Size
      { 
        size: 'SM', 
        state: 'Default', 
        description: 'Small ghost button', 
        renderComponent: ButtonPreviews.ButtonGhostSMDefault, 
        cssVars: [
          { name: 'background', value: 'transparent', actualValue: 'transparent' },
          { name: 'border', value: 'none', actualValue: 'none' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '32px', actualValue: '32px' },
          { name: 'padding-x', value: 'var(--gap--0-75rem)', actualValue: '12px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
        ] 
      },
      { 
        size: 'SM', 
        state: 'Hover', 
        description: 'Small ghost button on hover', 
        renderComponent: ButtonPreviews.ButtonGhostSMHover, 
        cssVars: [
          { name: 'background', value: 'var(--black-a1)', actualValue: '#0000000d' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
        ] 
      },
      // MD Size
      { 
        size: 'MD', 
        state: 'Default', 
        description: 'Medium ghost button', 
        renderComponent: ButtonPreviews.ButtonGhostMDDefault, 
        cssVars: [
          { name: 'background', value: 'transparent', actualValue: 'transparent' },
          { name: 'border', value: 'none', actualValue: 'none' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
        ],
        codeExample: `import { Button } from "@/components/ui/button"
import { MoreHorizontalIcon } from "lucide-react"

export function GhostButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost">View More</Button>
      <Button variant="ghost" size="icon">
        <MoreHorizontalIcon />
      </Button>
    </div>
  )
}`
      },
      { 
        size: 'MD', 
        state: 'Hover', 
        description: 'Medium ghost button on hover', 
        renderComponent: ButtonPreviews.ButtonGhostMDHover, 
        cssVars: [
          { name: 'background', value: 'var(--black-a1)', actualValue: '#0000000d' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
        ] 
      },
      // LG Size
      { size: 'LG', state: 'Default', description: 'Large ghost button', renderComponent: ButtonPreviews.ButtonGhostMDDefault, cssVars: [{ name: 'background', value: 'transparent', actualValue: 'transparent' }, { name: 'height', value: '48px', actualValue: '48px' }] },
      { size: 'LG', state: 'Hover', description: 'Large ghost hover', renderComponent: ButtonPreviews.ButtonGhostMDHover, cssVars: [{ name: 'background', value: 'var(--black-a1)', actualValue: '#0000000d' }] },
    ],
  },

  // Secondary Button
  {
    id: 'button-secondary',
    label: 'Secondary',
    category: 'Button',
    sizeStates: [
      // XS Size
      { size: 'XS', state: 'Default', description: 'Extra small secondary button', renderComponent: ButtonPreviews.ButtonSecondarySMDefault, cssVars: [{ name: 'background', value: 'var(--lum-02)', actualValue: '#fffefc' }, { name: 'height', value: '28px', actualValue: '28px' }] },
      { size: 'XS', state: 'Hover', description: 'Extra small secondary hover', renderComponent: ButtonPreviews.ButtonSecondarySMHover, cssVars: [{ name: 'background', value: 'var(--lum-03)', actualValue: '#fff8f3' }] },
      // SM Size
      { 
        size: 'SM', 
        state: 'Default', 
        description: 'Small secondary button', 
        renderComponent: ButtonPreviews.ButtonSecondarySMDefault, 
        cssVars: [
          { name: 'background', value: 'var(--lum-02)', actualValue: '#fffefc' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '32px', actualValue: '32px' },
          { name: 'padding-x', value: 'var(--gap--0-75rem)', actualValue: '12px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
        ] 
      },
      { 
        size: 'SM', 
        state: 'Hover', 
        description: 'Small secondary button on hover', 
        renderComponent: ButtonPreviews.ButtonSecondarySMHover, 
        cssVars: [
          { name: 'background', value: 'var(--lum-03)', actualValue: '#e6eff2' },
          { name: 'transform', value: 'translateY(-1px)', actualValue: 'Lift up 1px' },
        ] 
      },
      // MD Size
      { 
        size: 'MD', 
        state: 'Default', 
        description: 'Medium secondary button', 
        renderComponent: ButtonPreviews.ButtonSecondaryMDDefault, 
        cssVars: [
          { name: 'background', value: 'var(--lum-02)', actualValue: '#fffefc' },
          { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
        ],
        codeExample: `import { Button } from "@/components/ui/button"
import { SettingsIcon } from "lucide-react"

export function SecondaryButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button variant="secondary">Options</Button>
      <Button variant="secondary">
        <SettingsIcon />
        Settings
      </Button>
    </div>
  )
}`
      },
      { 
        size: 'MD', 
        state: 'Hover', 
        description: 'Medium secondary button on hover', 
        renderComponent: ButtonPreviews.ButtonSecondaryMDHover, 
        cssVars: [
          { name: 'background', value: 'var(--lum-03)', actualValue: '#e6eff2' },
          { name: 'transform', value: 'translateY(-1px)', actualValue: 'Lift up 1px' },
        ] 
      },
      // LG Size
      { size: 'LG', state: 'Default', description: 'Large secondary button', renderComponent: ButtonPreviews.ButtonSecondaryMDDefault, cssVars: [{ name: 'background', value: 'var(--lum-02)', actualValue: '#fffefc' }, { name: 'height', value: '48px', actualValue: '48px' }] },
      { size: 'LG', state: 'Hover', description: 'Large secondary hover', renderComponent: ButtonPreviews.ButtonSecondaryMDHover, cssVars: [{ name: 'background', value: 'var(--lum-03)', actualValue: '#fff8f3' }] },
    ],
  },

  // Link Button
  {
    id: 'button-link',
    label: 'Link',
    category: 'Button',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Link button - no background', 
        renderComponent: ButtonPreviews.ButtonLinkDefault, 
        cssVars: [
          { name: 'background', value: 'transparent', actualValue: 'transparent' },
          { name: 'color', value: 'var(--iris-11)', actualValue: '#5753c6' },
          { name: 'text-decoration', value: 'underline', actualValue: 'underline' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Hover', 
        description: 'Link button on hover', 
        renderComponent: ButtonPreviews.ButtonLinkHover, 
        cssVars: [
          { name: 'color', value: 'var(--iris-10)', actualValue: '#5151cd' },
        ] 
      },
    ],
  },

  // ==================== FILTER BUTTON ====================
  {
    id: 'filter-button-default',
    label: 'Filter Button',
    category: 'Button',
    sizeStates: [
      {
        size: 'Default',
        state: 'All Variants',
        description: 'Filter button with all variants: text only, with label, with icon, and white label',
        renderComponent: FilterButtonPreviews.FilterButtonAllStates,
        cssVars: [
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: '16px', actualValue: '16px left + 16px right' },
          { name: 'background (inactive)', value: 'var(--sidebar-tab)', actualValue: 'See globals.css' },
          { name: 'background (active)', value: 'var(--iris-9)', actualValue: '#5b5bd6' },
          { name: 'background (hover)', value: 'var(--black-a1)', actualValue: 'rgba(0,0,0,0.05)' },
          { name: 'border-radius', value: '9999px', actualValue: 'Fully rounded pill' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid rgba(0,0,0,0.05)' },
          { name: 'font-size', value: '14px', actualValue: '14px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'text-color (inactive)', value: 'var(--card-foreground)', actualValue: 'var(--slate-950)' },
          { name: 'text-color (active)', value: '#FFFFFF', actualValue: 'White' },
        ],
        codeExample: `import { FilterButton } from "@/components/ui/FilterButton"
import { Rocket } from "lucide-react"

export function FilterButtonDemo() {
  const [active, setActive] = useState('all')
  
  return (
    <div className="flex gap-2">
      {/* Text Only */}
      <FilterButton 
        active={active === 'all'}
        onClick={() => setActive('all')}
      >
        All
      </FilterButton>
      
      {/* With Label */}
      <FilterButton 
        label="Status:"
        active={active === 'live'}
        onClick={() => setActive('live')}
      >
        Live
      </FilterButton>
      
      {/* With Icon */}
      <FilterButton 
        showIcon
        icon={<Rocket style={{ width: '16px', height: '16px' }} />}
        active={active === 'launch'}
        onClick={() => setActive('launch')}
      >
        Launch
      </FilterButton>
      
      {/* Label with White Text (for dark backgrounds) */}
      <FilterButton 
        label="Status:"
        labelWhite
        active={active === 'dark'}
        onClick={() => setActive('dark')}
      >
        Option
      </FilterButton>
    </div>
  )
}`
      },
      {
        size: 'Default',
        state: 'Label + ChevronRight',
        description: 'Filter button with label and ChevronRight icon for navigation/dropdown indicators',
        renderComponent: FilterButtonPreviews.FilterButtonWithLabelAndChevronRight,
        cssVars: [
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding-x', value: '16px', actualValue: '16px left + 16px right' },
          { name: 'background (inactive)', value: 'var(--sidebar-tab)', actualValue: 'See globals.css' },
          { name: 'background (active)', value: 'var(--iris-9)', actualValue: '#5b5bd6' },
          { name: 'background (hover)', value: 'var(--black-a1)', actualValue: 'rgba(0,0,0,0.05)' },
          { name: 'border-radius', value: '9999px', actualValue: 'Fully rounded pill' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid rgba(0,0,0,0.05)' },
          { name: 'gap (label + text)', value: 'var(--gap--0-5rem)', actualValue: '8px' },
          { name: 'gap (text + icon)', value: 'var(--gap--0-375rem)', actualValue: '6px' },
          { name: 'icon-size', value: '16px', actualValue: '16px × 16px' },
          { name: 'font-size', value: '14px', actualValue: '14px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'text-color (inactive)', value: 'var(--card-foreground)', actualValue: 'var(--slate-950)' },
          { name: 'text-color (active)', value: '#FFFFFF', actualValue: 'White' },
        ],
        codeExample: `import { FilterButton } from "@/components/ui/FilterButton"
import { ChevronRight } from "lucide-react"

export function FilterButtonChevronDemo() {
  const [active, setActive] = useState('all')
  
  return (
    <div className="flex gap-2">
      {/* With Label and ChevronRight */}
      <FilterButton 
        label="Status:"
        showIcon
        icon={<ChevronRight style={{ width: '16px', height: '16px' }} />}
        active={active === 'all'}
        onClick={() => setActive('all')}
      >
        All
      </FilterButton>
      
      <FilterButton 
        label="Category:"
        showIcon
        icon={<ChevronRight style={{ width: '16px', height: '16px' }} />}
        active={active === 'sports'}
        onClick={() => setActive('sports')}
      >
        Sports
      </FilterButton>
    </div>
  )
}`
      }
    ]
  },

  // ==================== FORM FIELDS ====================
  {
    id: 'input-default',
    label: 'Input',
    category: 'Form',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Text input in default state', 
        renderComponent: FormFieldPreviews.InputDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a (10% opacity)' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'padding', value: 'var(--gap--0-5rem)', actualValue: '8px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'text-color', value: 'var(--card-foreground)', actualValue: 'var(--slate-950) = #020617ff' },
          { name: 'box-shadow', value: 'none', actualValue: 'none' },
        ],
        codeExample: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input 
        id="email" 
        type="email" 
        placeholder="Enter your email" 
      />
    </div>
  )
}` 
      },
      { 
        size: 'Default', 
        state: 'Hover', 
        description: 'Text input on hover', 
        renderComponent: FormFieldPreviews.InputHover, 
        cssVars: [
          { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)' },
          { name: 'border', value: '1px solid var(--muted-foreground)', actualValue: '1px solid var(--slate-500) = #64748bff' },
          { name: 'padding', value: 'var(--gap--0-75rem)', actualValue: '12px (8px base + 4px hover increase)' },
          { name: 'box-shadow', value: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)', actualValue: 'Outer ring + subtle glow' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Focused', 
        description: 'Text input when focused', 
        renderComponent: FormFieldPreviews.InputFocused, 
        cssVars: [
          { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)' },
          { name: 'border', value: '1px solid var(--primary-button-bg)', actualValue: '1px solid var(--iris-9) = #5b5bd6' },
          { name: 'padding', value: 'var(--gap--1rem)', actualValue: '16px (8px base + 8px focus increase)' },
          { name: 'box-shadow', value: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)', actualValue: 'Outer ring + strong glow (40px blur)' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Error', 
        description: 'Text input with error', 
        renderComponent: FormFieldPreviews.InputError, 
        cssVars: [
          { name: 'border-color', value: 'var(--chart-2)', actualValue: 'var(--red-8)' },
          { name: 'outline', value: '2px solid var(--chart-2)' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Disabled', 
        description: 'Text input disabled state', 
        renderComponent: FormFieldPreviews.InputDisabled, 
        cssVars: [
          { name: 'opacity', value: '0.5' },
          { name: 'cursor', value: 'not-allowed' },
          { name: 'background', value: 'var(--lum-02)', actualValue: '#fffefc' },
        ] 
      },
    ],
  },

  // ==================== TEXTAREA ====================
  {
    id: 'textarea',
    label: 'Textarea',
    category: 'Form',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Textarea in default state', 
        renderComponent: FormFieldPreviews.TextareaDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'padding', value: 'var(--gap--0-5rem)', actualValue: '8px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
          { name: 'min-height', value: '80px' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Hover', 
        description: 'Textarea on hover', 
        renderComponent: FormFieldPreviews.TextareaHover, 
        cssVars: [
          { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)' },
          { name: 'border', value: '1px solid var(--muted-foreground)', actualValue: '1px solid var(--slate-500) = #64748bff' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: 'var(--border-radius--0-5rem) = 8px' },
          { name: 'padding', value: 'var(--gap--0-75rem)', actualValue: '12px (8px base + 4px hover increase)' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'text-color', value: 'var(--card-foreground)', actualValue: 'var(--slate-950) = #020617ff' },
          { name: 'box-shadow', value: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)', actualValue: 'Outer ring + subtle glow' },
          { name: 'min-height', value: '80px', actualValue: '80px' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Focused', 
        description: 'Textarea when focused', 
        renderComponent: FormFieldPreviews.TextareaFocused, 
        cssVars: [
          { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)' },
          { name: 'border', value: '1px solid var(--primary-button-bg)', actualValue: '1px solid var(--iris-9) = #5b5bd6' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: 'var(--border-radius--0-5rem) = 8px' },
          { name: 'padding', value: 'var(--gap--1rem)', actualValue: '16px (8px base + 8px focus increase)' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'text-color', value: 'var(--card-foreground)', actualValue: 'var(--slate-950) = #020617ff' },
          { name: 'box-shadow', value: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)', actualValue: 'Outer ring + strong glow (40px blur)' },
          { name: 'min-height', value: '80px', actualValue: '80px' },
        ] 
      },
      { size: 'Default', state: 'Error', description: 'Textarea with error', renderComponent: FormFieldPreviews.TextareaError, cssVars: [{ name: 'border-color', value: 'var(--chart-2)' }] },
      { size: 'Default', state: 'Disabled', description: 'Textarea disabled', renderComponent: FormFieldPreviews.TextareaDisabled, cssVars: [{ name: 'opacity', value: '0.5' }] },
    ],
  },

  // ==================== AMOUNT INPUT ====================
  {
    id: 'amount-input',
    label: 'Amount Input',
    category: 'Form',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Amount input for market trading', 
        renderComponent: FormFieldPreviews.AmountInputDefault, 
        cssVars: [
          { name: 'container-background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)' },
          { name: 'container-border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'container-border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'container-padding', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'input-background', value: 'var(--lum-01)', actualValue: '#ffffff' },
          { name: 'input-border', value: '1px solid var(--black-a2)' },
          { name: 'input-border-radius', value: 'var(--border-radius--0-5rem)', actualValue: '8px' },
          { name: 'input-padding', value: 'var(--gap--0-75rem) var(--gap--1rem)', actualValue: '12px 16px' },
          { name: 'input-font-size', value: 'var(--text-xl)', actualValue: '20px' },
          { name: 'input-font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'currency-symbol-color', value: 'var(--muted-foreground)' },
          { name: 'quick-button-background', value: 'var(--side-bar-outline)' },
          { name: 'quick-button-border', value: '1px solid var(--black-a2)' },
          { name: 'quick-button-border-radius', value: '9999px', actualValue: 'Fully rounded pill' },
          { name: 'quick-button-padding', value: 'var(--gap--0-25rem) var(--gap--0-5rem)', actualValue: '4px 8px' },
          { name: 'quick-button-font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'label-font-size', value: 'var(--text-sm)' },
          { name: 'label-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Focused', 
        description: 'Amount input when focused', 
        renderComponent: FormFieldPreviews.AmountInputFocused, 
        cssVars: [
          { name: 'input-background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)' },
          { name: 'input-border', value: '1px solid var(--primary-button-bg)', actualValue: '1px solid var(--iris-9)' },
          { name: 'box-shadow', value: '0 0 0 1px var(--primary-button-bg), 0 0 20px rgba(91, 91, 214, 0.25)', actualValue: 'Purple glow ring' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Error', 
        description: 'Amount input with insufficient balance error', 
        renderComponent: FormFieldPreviews.AmountInputError, 
        cssVars: [
          { name: 'input-border', value: '1px solid var(--chart-2)', actualValue: '1px solid var(--red-9)' },
          { name: 'box-shadow', value: '0 0 0 1px var(--chart-2)', actualValue: 'Red error ring' },
          { name: 'input-text-color', value: 'var(--chart-2)', actualValue: 'Red text for error amount' },
          { name: 'error-message-color', value: 'var(--chart-2)' },
        ] 
      },
    ],
  },

  // ==================== SEARCH INPUT ====================
  {
    id: 'search-input',
    label: 'Search',
    category: 'Form',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Search input with icon - default state', 
        renderComponent: SearchInputPreviews.SearchInputDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'padding', value: 'var(--gap--0-5rem)', actualValue: '8px' },
          { name: 'gap', value: 'var(--gap--0-5rem)', actualValue: '8px between icon and input' },
          { name: 'icon-size', value: '20px', actualValue: '20px' },
          { name: 'icon-color', value: 'var(--muted-foreground)', actualValue: '#64748bff (slate-500)' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'placeholder-color', value: 'var(--muted-foreground)', actualValue: '#64748bff (slate-500)' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Hover', 
        description: 'Search input on hover - expands padding and shows subtle glow', 
        renderComponent: SearchInputPreviews.SearchInputHover, 
        cssVars: [
          { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, #ffffff -80%, #e6eff2 100%)' },
          { name: 'border', value: '1px solid var(--muted-foreground)', actualValue: '1px solid #64748bff' },
          { name: 'padding', value: 'var(--gap--0-75rem)', actualValue: '12px' },
          { name: 'box-shadow', value: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)', actualValue: 'Outer ring + subtle glow' },
          { name: 'transition', value: 'all 200ms ease-out', actualValue: '200ms ease-out' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Focused', 
        description: 'Search input when focused - purple border and strong glow', 
        renderComponent: SearchInputPreviews.SearchInputFocused, 
        cssVars: [
          { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, #ffffff -80%, #e6eff2 100%)' },
          { name: 'border', value: '1px solid var(--primary-button-bg)', actualValue: '1px solid #5b5bd6' },
          { name: 'padding', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'box-shadow', value: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)', actualValue: 'Outer ring + purple glow' },
          { name: 'transition', value: 'all 200ms ease-out', actualValue: '200ms ease-out' },
        ] 
      },
    ],
  },

  // ==================== BADGES ====================
  {
    id: 'badge-default',
    label: 'Default',
    category: 'Badge',
    sizeStates: [
      { size: 'Default', state: 'Default', description: 'Default badge', renderComponent: OtherPreviews.BadgeDefault, cssVars: [{ name: 'background', value: 'var(--primary)', actualValue: '#0f172aff (slate-900)' }, { name: 'text-color', value: 'var(--primary-foreground)', actualValue: '#f8fafcff (slate-50)' }] },
    ],
  },
  {
    id: 'badge-secondary',
    label: 'Secondary',
    category: 'Badge',
    sizeStates: [
      { size: 'Default', state: 'Default', description: 'Secondary badge', renderComponent: OtherPreviews.BadgeSecondary, cssVars: [{ name: 'background', value: 'var(--secondary)', actualValue: '#f1f5f9ff (slate-100)' }, { name: 'text-color', value: 'var(--secondary-foreground)', actualValue: '#334155ff (slate-700)' }] },
    ],
  },

  // ==================== MARKET CARDS ====================
  {
    id: 'market-card',
    label: 'Default',
    category: 'Market Card',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Standard market card for listings', 
        renderComponent: MarketCardPreviews.MarketCardDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'padding', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'box-shadow', value: 'var(--shadow-1)', actualValue: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)' },
          { name: 'title-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'title-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'title-color', value: 'var(--black-a11)', actualValue: 'rgba(0, 0, 0, 0.9) - High contrast subtle black' },
          { name: 'title-line-height', value: '20px', actualValue: '20px' },
        ],
        codeExample: `import { MarketCard } from "@/components/MarketCard"
import type { Market } from "@/data/markets"

export function MarketCardDemo() {
  const market: Market = {
    id: "1",
    title: "Will Bitcoin reach $100,000 in 2024?",
    category: "Crypto",
    yesPercentage: 67,
    noPercentage: 33,
    volume: "$1.2M",
    endsAt: "Dec 31, 2024",
    outcomes: []
  };

  return <MarketCard {...market} />
}` 
      },
    ],
  },
  {
    id: 'ending-soon-card',
    label: 'Ending Soon',
    category: 'Market Card',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Ending soon variant with countdown', 
        renderComponent: MarketCardPreviews.EndingSoonCardDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'title-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'title-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'title-color', value: 'var(--black-a11)', actualValue: 'rgba(0, 0, 0, 0.9) - High contrast subtle black' },
          { name: 'title-line-height', value: '20px', actualValue: '20px' },
        ] 
      },
    ],
  },
  {
    id: 'featured-card',
    label: 'Featured',
    category: 'Market Card',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Featured market card for hero carousel with full-bleed image background', 
        renderComponent: MarketCardPreviews.FeaturedCardDefault, 
        cssVars: [
          { name: 'aspect-ratio', value: '1 / 1.2', actualValue: '1 / 1.2' },
          { name: 'background-image', value: 'Full-bleed image', actualValue: 'object-fit: cover' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'box-shadow', value: 'var(--shadow-2)', actualValue: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)' },
          { name: 'content-background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'content-backdrop-filter', value: 'blur(8px)', actualValue: 'blur(8px)' },
          { name: 'title-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'title-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'title-color', value: 'var(--black-a11)', actualValue: 'rgba(0, 0, 0, 0.9) - High contrast subtle black' },
          { name: 'title-line-height', value: '24px', actualValue: '24px' },
        ],
        codeExample: `import { FeaturedMarketCard } from "@/components/hero/FeaturedMarketCard"
import type { Market } from "@/data/markets"

export function FeaturedCardDemo() {
  const market: Market = {
    id: "1",
    title: "Will Bitcoin reach $100,000 in 2024?",
    category: "Crypto",
    image: "/path/to/image.jpg",
    yesPercentage: 67,
    noPercentage: 33,
    volume: "$1.2M",
    endsAt: "Dec 31, 2024",
    outcomes: []
  };

  return (
    <div style={{ aspectRatio: '1 / 1.2', maxWidth: '400px' }}>
      <FeaturedMarketCard {...market} />
    </div>
  )
}`
      },
    ],
  },
  {
    id: 'home-match-card',
    label: 'Sports Match',
    category: 'Market Card',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Sports match card for home page with team details and odds buttons', 
        renderComponent: MarketCardPreviews.HomeMatchCardDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'background-hover', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, #ffffff -80%, #e6eff2 100%)' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'border-radius', value: 'var(--radius-xl)', actualValue: '12px' },
          { name: 'min-height', value: '216px', actualValue: '216px' },
          { name: 'padding', value: '16px', actualValue: '16px (3 or 16px depending on breakpoint)' },
          { name: 'box-shadow', value: '0_1px_2px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)', actualValue: 'Light shadow default' },
          { name: 'box-shadow-hover', value: '0_8px_32px_rgba(0,0,0,0.28)', actualValue: 'Elevated shadow on hover' },
          { name: 'transform-hover', value: 'translateY(-4px)', actualValue: 'Lift up 4px on hover' },
          { name: 'category-background', value: 'var(--accent)', actualValue: 'Accent color background' },
          { name: 'category-text-color', value: 'var(--muted-foreground)', actualValue: '#64748bff (slate-500)' },
          { name: 'category-font-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'category-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'team-name-font-size', value: 'var(--text-sm)', actualValue: '14px' },
          { name: 'team-name-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'team-name-color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
          { name: 'team-icon-size', value: '24px', actualValue: '24px' },
          { name: 'button-background', value: 'var(--side-bar-outline)', actualValue: '#ffffff' },
          { name: 'button-border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'button-box-shadow', value: 'var(--shadow-4)', actualValue: '0 3px 4px 0 rgba(0, 0, 0, 0.04)' },
          { name: 'button-height', value: '40px', actualValue: '40px' },
          { name: 'button-border-radius', value: 'var(--radius-input)', actualValue: '6px' },
          { name: 'button-text-color', value: 'var(--card-foreground)', actualValue: '#020617ff (slate-950)' },
          { name: 'button-text-font-size', value: 'var(--text-sm)', actualValue: '14px' },
          { name: 'button-text-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        ],
        codeExample: `import { HomeMatchCard } from "@/components/sports/HomeMatchCard"
import type { Match } from "@/data/matches"

export function HomeMatchCardDemo() {
  const match: Match = {
    id: 1,
    time: '18:00',
    date: 'Sat, Nov 22',
    volume: '192.78K',
    team1: { 
      name: 'Leicester City', 
      code: 'LEI', 
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 
      color: '#003090' 
    },
    team2: { 
      name: 'Wolverhampton', 
      code: 'WOL', 
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 
      color: '#FDB913' 
    },
    odds: { 
      team1: 52, 
      draw: 25, 
      team2: 28 
    },
    category: 'Premier League'
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <HomeMatchCard 
        match={match}
        onOddsClick={(match, oddsType) => {
          console.log(\`Clicked \${oddsType} for match \${match.id}\`);
        }}
        onClick={() => {
          console.log('Card clicked');
        }}
      />
    </div>
  )
}`
      },
    ],
  },

  // ==================== BUY/SELL BLOCK ====================
  {
    id: 'buysell-block-binary',
    label: 'Binary Market',
    category: 'Market Card',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Buy/Sell block for binary (YES/NO) markets with outcome selection, amount input, and order configuration', 
        renderComponent: MarketCardPreviews.BuySellBlockBinaryDefault, 
        cssVars: [
          { name: 'outer-background', value: 'var(--lum-02)', actualValue: '#fffefc' },
          { name: 'outer-padding', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'outer-border-radius', value: '12px', actualValue: '12px' },
          { name: 'card-background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'card-border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'card-box-shadow', value: 'var(--shadow-1)', actualValue: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' },
          { name: 'card-padding', value: '20px', actualValue: '20px horizontal, 24px vertical' },
          { name: 'gap', value: 'var(--gap--1-5rem)', actualValue: '24px between elements' },
          { name: 'tab-height', value: '40px', actualValue: '40px' },
          { name: 'tab-padding', value: '20px 11px', actualValue: '20px horizontal, 11px vertical' },
          { name: 'tab-border-radius', value: '12px 12px 0 0', actualValue: 'Rounded top corners' },
          { name: 'tab-active-background', value: 'var(--card-normal)', actualValue: 'Matches inner card' },
          { name: 'button-background', value: 'var(--primary-button-bg)', actualValue: '#5b5bd6 (iris-9)' },
          { name: 'button-background-hover', value: 'var(--primary-button-bg-hover)', actualValue: '#5151cd (iris-10)' },
          { name: 'button-height', value: '48px', actualValue: '48px' },
          { name: 'button-border-radius', value: '8px', actualValue: '8px' },
        ],
        codeExample: `import { BuySellBlock } from "@/components/BuySellBlock"
import { useState } from "react"

export function BuySellDemo() {
  const [selectedOutcome, setSelectedOutcome] = useState('YES');
  const [amount, setAmount] = useState('');

  return (
    <BuySellBlock
      selectedOutcome={selectedOutcome}
      onOutcomeChange={setSelectedOutcome}
      amount={amount}
      onAmountChange={setAmount}
      onBuy={() => console.log('Buy clicked')}
      marketPrices={{
        yesPrice: 0.67,
        noPrice: 0.33
      }}
    />
  )
}`
      },
    ],
  },
  {
    id: 'buysell-block-multi',
    label: 'Multi-Outcome',
    category: 'Market Card',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Buy/Sell block for multi-outcome markets with selected outcome display', 
        renderComponent: MarketCardPreviews.BuySellBlockMultiOutcomeDefault, 
        cssVars: [
          { name: 'outcome-display-background', value: 'var(--lum-02)', actualValue: '#fffefc' },
          { name: 'outcome-display-border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'outcome-display-padding', value: '16px', actualValue: '16px' },
          { name: 'outcome-display-border-radius', value: '12px', actualValue: '12px' },
          { name: 'outcome-icon-size', value: '48px', actualValue: '48px' },
          { name: 'outcome-icon-border-radius', value: '50%', actualValue: 'Full circle' },
          { name: 'outcome-label-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'outcome-label-font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
        ],
        codeExample: `import { BuySellBlock } from "@/components/BuySellBlock"
import { useState } from "react"

export function MultiOutcomeBuySellDemo() {
  const [selectedOutcome, setSelectedOutcome] = useState('TEAM_A');
  const [amount, setAmount] = useState('');

  const multiOutcomeMarket = {
    outcomes: [
      { id: 'TEAM_A', label: 'Team A Wins', percentage: 45, color: '#5b5bd6', icon: 'A' },
      { id: 'TEAM_B', label: 'Team B Wins', percentage: 35, color: '#e5484d', icon: 'B' },
      { id: 'DRAW', label: 'Draw', percentage: 20, color: '#f59e0b', icon: '=' }
    ]
  };

  return (
    <BuySellBlock
      selectedOutcome={selectedOutcome}
      onOutcomeChange={setSelectedOutcome}
      amount={amount}
      onAmountChange={setAmount}
      onBuy={() => console.log('Buy clicked')}
      market={multiOutcomeMarket}
    />
  )
}`
      },
    ],
  },
  {
    id: 'buysell-block-sports',
    label: 'Sports Match',
    category: 'Market Card',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Buy/Sell block for sports matches with team branding and match information', 
        renderComponent: MarketCardPreviews.BuySellBlockSportsDefault, 
        cssVars: [
          { name: 'match-title-height', value: '82px', actualValue: '82px' },
          { name: 'team-icon-size', value: '48px', actualValue: '48px' },
          { name: 'team-name-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'team-name-font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'vs-font-size', value: 'var(--text-sm)', actualValue: '14px' },
          { name: 'vs-color', value: 'var(--muted-foreground)', actualValue: '#64748bff (slate-500)' },
        ],
        codeExample: `import { BuySellBlock } from "@/components/BuySellBlock"
import { useState } from "react"

export function SportsBuySellDemo() {
  const [selectedOutcome, setSelectedOutcome] = useState('MCI');
  const [amount, setAmount] = useState('');

  return (
    <BuySellBlock
      selectedOutcome={selectedOutcome}
      onOutcomeChange={setSelectedOutcome}
      amount={amount}
      onAmountChange={setAmount}
      onBuy={() => console.log('Buy clicked')}
      matchInfo={{
        team1Name: 'Man City',
        team2Name: 'Liverpool',
        selectedTeamCode: 'MCI',
        selectedTeamName: 'Man City',
        teamIcon: '⚽',
        teamColor: '#5b5bd6'
      }}
    />
  )
}`
      },
    ],
  },

  // ==================== OUTCOME BUTTONS ====================
  {
    id: 'outcome-button-market',
    label: 'Market Card',
    category: 'Market Button',
    sizeStates: [
      { 
        size: 'Yes', 
        state: 'Default', 
        description: 'Yes button for market cards - compact style with icon and percentage', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonMarketYesDefault, 
        cssVars: [
          { name: 'background', value: 'var(--side-bar-outline)', actualValue: '#f8f9faff' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'border-radius', value: 'var(--radius-input)', actualValue: '6px' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding', value: '0 var(--gap--0-5rem)', actualValue: '0 8px' },
          { name: 'box-shadow', value: 'var(--shadow-4)', actualValue: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' },
          { name: 'icon-size', value: '20px', actualValue: '20px (5x5 container with 0.5 padding)' },
          { name: 'icon-fill', value: 'Radial gradient (Green)', actualValue: '#30A46C base' },
          { name: 'text-font-size', value: 'var(--text-s)', actualValue: '14px' },
          { name: 'text-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'text-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
          { name: 'percentage-font-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'percentage-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'percentage-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
        ],
        codeExample: `import { OutcomeButtons } from "@/components/OutcomeButtons"
import type { MarketOutcome } from "@/data/markets"

export function OutcomeButtonsDemo() {
  const outcomes: MarketOutcome[] = [
    { id: "1", label: "Bitcoin", yesPercentage: 67, noPercentage: 33 },
    { id: "2", label: "Ethereum", yesPercentage: 45, noPercentage: 55 }
  ];

  const handleOutcomeClick = (outcomeId: string, prediction: 'yes' | 'no') => {
    console.log(\`Clicked \${prediction} for \${outcomeId}\`);
  };

  return <OutcomeButtons outcomes={outcomes} onOutcomeClick={handleOutcomeClick} />
}` 
      },
      { 
        size: 'Yes', 
        state: 'Hover', 
        description: 'Yes button hover state - animated circle expands from right', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonMarketYesHover, 
        cssVars: [
          { name: 'hover-circle-background', value: 'var(--chart-1-hover)', actualValue: '#3dd68c33 (Green with opacity)' },
          { name: 'hover-animation', value: 'scale(6) translateX(-50%)', actualValue: 'Circle scales from right edge' },
          { name: 'transition-duration', value: '500ms', actualValue: '500ms' },
          { name: 'transition-timing', value: 'ease-out', actualValue: 'ease-out' },
        ] 
      },
      { 
        size: 'No', 
        state: 'Default', 
        description: 'No button for market cards - compact style with icon and percentage', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonMarketNoDefault, 
        cssVars: [
          { name: 'background', value: 'var(--side-bar-outline)', actualValue: '#f8f9faff' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'border-radius', value: 'var(--radius-input)', actualValue: '6px' },
          { name: 'height', value: '40px', actualValue: '40px' },
          { name: 'padding', value: '0 var(--gap--0-5rem)', actualValue: '0 8px' },
          { name: 'box-shadow', value: 'var(--shadow-4)', actualValue: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' },
          { name: 'icon-size', value: '20px', actualValue: '20px (5x5 container with 0.5 padding)' },
          { name: 'icon-fill', value: 'Radial gradient (Red)', actualValue: '#E5484D base' },
          { name: 'text-font-size', value: 'var(--text-s)', actualValue: '14px' },
          { name: 'text-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'text-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
          { name: 'percentage-font-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'percentage-font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'percentage-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
        ] 
      },
      { 
        size: 'No', 
        state: 'Hover', 
        description: 'No button hover state - animated circle expands from right', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonMarketNoHover, 
        cssVars: [
          { name: 'hover-circle-background', value: 'var(--chart-2-hover)', actualValue: '#ff959233 (Red with opacity)' },
          { name: 'hover-animation', value: 'scale(6) translateX(-50%)', actualValue: 'Circle scales from right edge' },
          { name: 'transition-duration', value: '500ms', actualValue: '500ms' },
          { name: 'transition-timing', value: 'ease-out', actualValue: 'ease-out' },
        ] 
      },
    ],
  },
  {
    id: 'outcome-button-buysell',
    label: 'BuySell Block',
    category: 'Market Button',
    sizeStates: [
      { 
        size: 'Yes', 
        state: 'Default', 
        description: 'Yes button for buy/sell interface - large button with gradient background and price', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonBuySellYesDefault, 
        cssVars: [
          { name: 'background', value: 'linear-gradient(135deg, rgba(90, 115, 120, 0.15) 0%, rgba(45, 58, 60, 0.08) 100%)', actualValue: 'Neutral gradient (unselected)' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'border-radius', value: '12px', actualValue: '12px' },
          { name: 'padding', value: '16px 14px', actualValue: '16px vertical, 14px horizontal' },
          { name: 'box-shadow', value: '0px 4px 6px -1px rgba(0,0,0,0.04), 0px 2px 12px 0px rgba(0,0,0,0.08)', actualValue: 'Subtle depth shadow' },
          { name: 'icon-size', value: '24px', actualValue: '24px (with 2px padding)' },
          { name: 'icon-background', value: '#30A46C', actualValue: 'Green solid' },
          { name: 'icon-glow', value: '0 0 0 rgba(0, 0, 0, 0)', actualValue: 'No glow when not selected' },
          { name: 'label-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'label-font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'label-color', value: 'var(--muted-foreground)', actualValue: '#64748bff' },
          { name: 'price-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'price-font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'price-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
          { name: 'price-width', value: '36px', actualValue: '36px (tabular-nums)' },
        ],
        codeExample: `import { OutcomeButton } from "@/components/BuySellBlock/OutcomeButton"

export function BuySellExample() {
  const [selectedOutcome, setSelectedOutcome] = useState<'Yes' | 'No' | null>(null);

  return (
    <div className="flex gap-3">
      <OutcomeButton 
        type="Yes" 
        price="67¢" 
        selected={selectedOutcome === 'Yes'} 
        onClick={() => setSelectedOutcome('Yes')} 
      />
      <OutcomeButton 
        type="No" 
        price="33¢" 
        selected={selectedOutcome === 'No'} 
        onClick={() => setSelectedOutcome('No')} 
      />
    </div>
  )
}`
      },
      { 
        size: 'Yes', 
        state: 'Hover', 
        description: 'Yes button on hover - lifts up and shows subtle highlight', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonBuySellYesHover, 
        cssVars: [
          { name: 'transform', value: 'translateY(-3px)', actualValue: 'Lifts up 3px' },
          { name: 'background', value: 'linear-gradient(135deg, rgba(90, 115, 120, 0.25) 0%, rgba(45, 58, 60, 0.15) 100%)', actualValue: 'Lighter neutral gradient' },
          { name: 'box-shadow', value: '0 6px 20px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.08)', actualValue: 'Enhanced shadow on hover' },
        ] 
      },
      { 
        size: 'Yes', 
        state: 'Selected', 
        description: 'Yes button when selected - green gradient background with border and glow', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonBuySellYesSelected, 
        cssVars: [
          { name: 'background', value: 'linear-gradient(135deg, rgba(48, 164, 108, 0.35) 0%, rgba(48, 164, 108, 0.17) 100%)', actualValue: 'Green gradient (selected)' },
          { name: 'border', value: '1.6px solid rgba(48, 164, 108, 0.3)', actualValue: 'Green border (thicker)' },
          { name: 'box-shadow', value: '0 8px 25px rgba(48, 164, 108, 0.25), 0 4px 10px rgba(48, 164, 108, 0.15)', actualValue: 'Green glow shadow' },
          { name: 'icon-scale', value: '1.05', actualValue: '5% larger' },
          { name: 'icon-glow', value: '0 0 10px 2px rgba(48, 164, 108, 0.4), 0 0 20px 4px rgba(48, 164, 108, 0.2), 0 0 30px 6px rgba(48, 164, 108, 0.1)', actualValue: 'Multi-layer green glow' },
        ] 
      },
      { 
        size: 'No', 
        state: 'Default', 
        description: 'No button for buy/sell interface - large button with gradient background and price', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonBuySellNoDefault, 
        cssVars: [
          { name: 'background', value: 'linear-gradient(135deg, rgba(90, 115, 120, 0.15) 0%, rgba(45, 58, 60, 0.08) 100%)', actualValue: 'Neutral gradient (unselected)' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'border-radius', value: '12px', actualValue: '12px' },
          { name: 'padding', value: '16px 14px', actualValue: '16px vertical, 14px horizontal' },
          { name: 'box-shadow', value: '0px 4px 6px -1px rgba(0,0,0,0.04), 0px 2px 12px 0px rgba(0,0,0,0.08)', actualValue: 'Subtle depth shadow' },
          { name: 'icon-size', value: '24px', actualValue: '24px (with 2px padding)' },
          { name: 'icon-background', value: '#E5484D', actualValue: 'Red solid' },
          { name: 'icon-glow', value: '0 0 0 rgba(0, 0, 0, 0)', actualValue: 'No glow when not selected' },
          { name: 'label-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'label-font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'label-color', value: 'var(--muted-foreground)', actualValue: '#64748bff' },
          { name: 'price-font-size', value: 'var(--text-base)', actualValue: '16px' },
          { name: 'price-font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'price-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
          { name: 'price-width', value: '36px', actualValue: '36px (tabular-nums)' },
        ] 
      },
      { 
        size: 'No', 
        state: 'Hover', 
        description: 'No button on hover - lifts up and shows subtle highlight', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonBuySellNoHover, 
        cssVars: [
          { name: 'transform', value: 'translateY(-3px)', actualValue: 'Lifts up 3px' },
          { name: 'background', value: 'linear-gradient(135deg, rgba(90, 115, 120, 0.25) 0%, rgba(45, 58, 60, 0.15) 100%)', actualValue: 'Lighter neutral gradient' },
          { name: 'box-shadow', value: '0 6px 20px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.08)', actualValue: 'Enhanced shadow on hover' },
        ] 
      },
      { 
        size: 'No', 
        state: 'Selected', 
        description: 'No button when selected - red gradient background with border and glow', 
        renderComponent: OutcomeButtonPreviews.OutcomeButtonBuySellNoSelected, 
        cssVars: [
          { name: 'background', value: 'linear-gradient(135deg, rgba(229, 72, 77, 0.35) 0%, rgba(229, 72, 77, 0.17) 100%)', actualValue: 'Red gradient (selected)' },
          { name: 'border', value: '1.6px solid rgba(229, 72, 77, 0.3)', actualValue: 'Red border (thicker)' },
          { name: 'box-shadow', value: '0 8px 25px rgba(229, 72, 77, 0.25), 0 4px 10px rgba(229, 72, 77, 0.15)', actualValue: 'Red glow shadow' },
          { name: 'icon-scale', value: '1.05', actualValue: '5% larger' },
          { name: 'icon-glow', value: '0 0 10px 2px rgba(229, 72, 77, 0.4), 0 0 20px 4px rgba(229, 72, 77, 0.2), 0 0 30px 6px rgba(229, 72, 77, 0.1)', actualValue: 'Multi-layer red glow' },
        ] 
      },
    ],
  },

  // ==================== DIALOGS & MODALS ====================
  {
    id: 'dialog',
    label: 'Dialog',
    category: 'Overlay',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Modal dialog overlay', 
        renderComponent: DialogPreviews.DialogDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)' },
          { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'padding', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'box-shadow', value: 'var(--shadow-2)', actualValue: '0px 1px 2px 0px rgba(0, 0, 0, 0.1)' },
        ] 
      },
    ],
  },
  {
    id: 'alert-dialog',
    label: 'Alert Dialog',
    category: 'Overlay',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Alert dialog for confirmations', 
        renderComponent: DialogPreviews.AlertDialogDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--1-5rem)' },
        ] 
      },
    ],
  },
  {
    id: 'sheet',
    label: 'Sheet',
    category: 'Overlay',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Slide-in sheet from side', 
        renderComponent: DialogPreviews.SheetDefault, 
        cssVars: [
          { name: 'background', value: 'var(--lum-01)' },
          { name: 'border-left', value: '1px solid var(--black-a2)' },
          { name: 'padding', value: 'var(--gap--1-5rem)' },
        ] 
      },
    ],
  },
  {
    id: 'drawer',
    label: 'Drawer',
    category: 'Overlay',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Bottom drawer component', 
        renderComponent: DialogPreviews.DrawerDefault, 
        cssVars: [
          { name: 'background', value: 'var(--lum-01)' },
          { name: 'border-top', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card) var(--radius-card) 0 0' },
          { name: 'padding', value: 'var(--gap--1-5rem)' },
        ] 
      },
    ],
  },

  // ==================== MENUS & NAVIGATION ====================
  {
    id: 'dropdown-menu',
    label: 'Dropdown Menu',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Dropdown menu with items', 
        renderComponent: MenuPreviews.DropdownMenuDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--0-5rem)' },
          { name: 'min-width', value: '200px' },
          { name: 'box-shadow', value: 'var(--shadow-2)' },
        ] 
      },
    ],
  },
  {
    id: 'context-menu',
    label: 'Context Menu',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Right-click context menu', 
        renderComponent: MenuPreviews.ContextMenuDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--0-5rem)' },
        ] 
      },
    ],
  },
  {
    id: 'popover',
    label: 'Popover',
    category: 'Overlay',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Popover with content', 
        renderComponent: MenuPreviews.PopoverDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--1rem)' },
          { name: 'width', value: '300px' },
        ] 
      },
    ],
  },
  {
    id: 'hover-card',
    label: 'Hover Card',
    category: 'Overlay',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Card shown on hover', 
        renderComponent: MenuPreviews.HoverCardDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--1rem)' },
          { name: 'width', value: '320px' },
        ] 
      },
    ],
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    category: 'Overlay',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Small tooltip overlay', 
        renderComponent: MenuPreviews.TooltipDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--border-radius--0-375rem)', actualValue: '6px' },
          { name: 'padding', value: 'var(--gap--0-5rem) var(--gap--0-75rem)', actualValue: '8px 12px' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
        ] 
      },
    ],
  },
  {
    id: 'command',
    label: 'Command',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Command palette/search', 
        renderComponent: MenuPreviews.CommandDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'width', value: '400px' },
          { name: 'box-shadow', value: 'var(--shadow-2)' },
        ] 
      },
    ],
  },

  // ==================== TABLES & DATA DISPLAY ====================
  {
    id: 'table',
    label: 'Table',
    category: 'Data Display',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Data table component', 
        renderComponent: TablePreviews.TableDefault, 
        cssVars: [
          { name: 'border-bottom', value: '1px solid var(--black-a2)', actualValue: 'Header row border' },
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'padding', value: 'var(--gap--0-75rem)', actualValue: '12px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600 (headers)' },
        ] 
      },
    ],
  },
  {
    id: 'collapsible',
    label: 'Collapsible',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Collapsible content section', 
        renderComponent: TablePreviews.CollapsibleDefault, 
        cssVars: [
          { name: 'padding', value: 'var(--gap--0-75rem)' },
          { name: 'font-size', value: 'var(--text-sm)' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)' },
        ] 
      },
    ],
  },
  {
    id: 'scroll-area',
    label: 'Scroll Area',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Scrollable content area', 
        renderComponent: TablePreviews.ScrollAreaDefault, 
        cssVars: [
          { name: 'height', value: '200px' },
          { name: 'width', value: '350px' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--1rem)' },
          { name: 'background', value: 'var(--lum-01)' },
        ] 
      },
    ],
  },
  {
    id: 'breadcrumb',
    label: 'Breadcrumb',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Breadcrumb navigation', 
        renderComponent: TablePreviews.BreadcrumbDefault, 
        cssVars: [
          { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
          { name: 'color', value: 'var(--muted-foreground)', actualValue: 'Links' },
          { name: 'gap', value: 'var(--gap--0-5rem)', actualValue: '8px' },
        ] 
      },
    ],
  },
  {
    id: 'pagination',
    label: 'Pagination',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Pagination controls', 
        renderComponent: TablePreviews.PaginationDefault, 
        cssVars: [
          { name: 'font-size', value: 'var(--text-sm)' },
          { name: 'padding', value: 'var(--gap--0-5rem) var(--gap--0-75rem)', actualValue: '8px 12px' },
          { name: 'border-radius', value: 'var(--border-radius--0-375rem)', actualValue: '6px' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'gap', value: 'var(--gap--0-5rem)' },
        ] 
      },
    ],
  },

  // ==================== TABS ====================
  {
    id: 'master-tab',
    label: 'Master Tab',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Orderbook Selected', 
        description: 'Master tab component with Orderbook tab active', 
        renderComponent: TabPreviews.MasterTabOrderbookDefault, 
        cssVars: [
          { name: 'background', value: 'var(--white-a1)', actualValue: 'Semi-transparent white' },
          { name: 'border', value: '1.4px solid var(--black-a1)', actualValue: 'Semi-transparent black border' },
          { name: 'border-radius', value: 'var(--border-radius--0-5rem)', actualValue: '8px' },
          { name: 'padding', value: '4px', actualValue: '4px all sides' },
          { name: 'gap', value: '4px', actualValue: '4px between buttons' },
          { name: 'active-bg', value: 'var(--lum-05)', actualValue: 'Light background for active tab' },
          { name: 'hover-bg', value: 'var(--black-a1)', actualValue: 'Hover background' },
          { name: 'active-text', value: 'var(--primary)', actualValue: 'Primary color for active text' },
          { name: 'inactive-text', value: 'var(--muted-foreground)', actualValue: 'Muted text color' },
          { name: 'font-size', value: 'var(--text-base)', actualValue: '14px' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'Chart Selected', 
        description: 'Master tab with Chart tab active', 
        renderComponent: TabPreviews.MasterTabChartSelected, 
        cssVars: [
          { name: 'active-bg', value: 'var(--lum-05)' },
          { name: 'active-text', value: 'var(--primary)' },
        ] 
      },
    ],
  },
  {
    id: 'child-tab',
    label: 'Child Tab',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Yes Selected', 
        description: 'Child tab component with Yes tab active', 
        renderComponent: TabPreviews.ChildTabYesDefault, 
        cssVars: [
          { name: 'width', value: '60% max-width: 294px', actualValue: 'Reduced width (40% smaller)' },
          { name: 'gap', value: '8px', actualValue: '8px between tabs' },
          { name: 'padding-top', value: 'var(--gap--1-5rem)', actualValue: '24px top spacing (outer)' },
          { name: 'padding-inner', value: 'var(--gap--0-5rem)', actualValue: '8px padding inside button' },
          { name: 'yes-active-line', value: 'var(--green-11)', actualValue: 'Green line for Yes tab' },
          { name: 'no-active-line', value: 'var(--red-10)', actualValue: 'Red line for No tab' },
          { name: 'hover-line', value: 'var(--muted-foreground)', actualValue: 'Muted line for hover' },
          { name: 'hover-bg', value: 'var(--black-a1)', actualValue: 'Hover background' },
          { name: 'line-height', value: '3px', actualValue: 'Underline indicator height' },
          { name: 'separator', value: '1px solid var(--black-a1)', actualValue: 'Full-width separator line' },
          { name: 'font-size', value: 'var(--text-lg)', actualValue: '16px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'transition', value: '0.2s ease', actualValue: 'Smooth transitions' },
        ] 
      },
      { 
        size: 'Default', 
        state: 'No Selected', 
        description: 'Child tab with No tab active', 
        renderComponent: TabPreviews.ChildTabNoSelected, 
        cssVars: [
          { name: 'active-line', value: 'var(--red-10)' },
          { name: 'active-text', value: 'var(--red-10)' },
        ] 
      },
    ],
  },

  {
    id: 'category-tab',
    label: 'Category Tab',
    category: 'Navigation',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Category tab in its default resting state', 
        renderComponent: TabPreviews.CategoryTabDefault, 
        cssVars: [
          { name: 'background', value: 'transparent', actualValue: 'No background in default state' },
          { name: 'border', value: '1px solid transparent', actualValue: 'Invisible border' },
          { name: 'color', value: 'var(--muted-foreground)', actualValue: 'Muted text/icon color' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'stroke-width', value: '2', actualValue: 'Icon stroke width' },
          { name: 'opacity', value: '1', actualValue: 'Full opacity' },
          { name: 'cursor', value: 'pointer', actualValue: 'Clickable cursor' },
        ],
        codeExample: `<CategoryTab
  items={[
    { id: 'crypto', name: 'Crypto', icon: Bitcoin }
  ]}
  activeId=""
  onTabChange={(id) => console.log(id)}
/>`
      },
      { 
        size: 'Default', 
        state: 'Hover', 
        description: 'Category tab when user hovers over it', 
        renderComponent: TabPreviews.CategoryTabHover, 
        cssVars: [
          { name: 'background', value: 'var(--black-a1)', actualValue: 'Subtle background highlight' },
          { name: 'border', value: '1px solid transparent', actualValue: 'No border on hover' },
          { name: 'color', value: 'var(--primary)', actualValue: 'Primary brand color' },
          { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'stroke-width', value: '2', actualValue: 'Icon stroke width' },
          { name: 'icon-scale', value: 'scale(1.1)', actualValue: 'Icon scales up 10%' },
          { name: 'transition', value: '0.2s ease', actualValue: 'Smooth animation' },
        ],
        codeExample: `// Hover state is handled automatically
// Customize colors via CSS variables:
// --black-a1 for hover background
// --primary for hover text/icon color`
      },
      { 
        size: 'Default', 
        state: 'Selected', 
        description: 'Category tab when it is the active/selected tab', 
        renderComponent: TabPreviews.CategoryTabSelected, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)', actualValue: 'Card background' },
          { name: 'border', value: '1px solid var(--black-a1)', actualValue: 'Subtle border' },
          { name: 'box-shadow', value: 'var(--shadow-2)', actualValue: 'Medium elevation shadow' },
          { name: 'color', value: 'var(--iris-10)', actualValue: 'Primary accent color' },
          { name: 'font-weight', value: 'var(--font-weight-semibold)', actualValue: '600' },
          { name: 'stroke-width', value: '2.5', actualValue: 'Thicker icon stroke' },
        ],
        codeExample: `<CategoryTab
  items={[
    { id: 'crypto', name: 'Crypto', icon: Bitcoin }
  ]}
  activeId="crypto" // Matches item id
  onTabChange={(id) => setActiveTab(id)}
/>`
      },
      { 
        size: 'Default', 
        state: 'Disabled', 
        description: 'Category tab when it is disabled and not interactive', 
        renderComponent: TabPreviews.CategoryTabDisabled, 
        cssVars: [
          { name: 'background', value: 'transparent', actualValue: 'No background' },
          { name: 'border', value: '1px solid transparent', actualValue: 'No border' },
          { name: 'color', value: 'var(--muted-foreground)', actualValue: 'Muted color' },
          { name: 'opacity', value: '0.4', actualValue: '40% opacity for disabled look' },
          { name: 'cursor', value: 'not-allowed', actualValue: 'Shows not-allowed cursor' },
          { name: 'pointer-events', value: 'none (via disabled)', actualValue: 'No interactions' },
        ],
        codeExample: `<CategoryTab
  items={[
    { 
      id: 'crypto', 
      name: 'Crypto', 
      icon: Bitcoin,
      disabled: true // Add disabled property
    }
  ]}
  activeId=""
  onTabChange={(id) => console.log(id)}
/>`
      },
    ],
  },

  {
    id: 'aspect-ratio',
    label: 'Aspect Ratio',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Aspect ratio container', 
        renderComponent: TablePreviews.AspectRatioDefault, 
        cssVars: [
          { name: 'aspect-ratio', value: '16 / 9', actualValue: 'Maintains 16:9 ratio' },
          { name: 'background', value: 'var(--lum-02)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
        ] 
      },
    ],
  },

  {
    id: 'market-timeline',
    label: 'Market Timeline',
    category: 'Market',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Market Start', 
        description: 'Minimal timeline with active status centered above progress line', 
        renderComponent: MarketTimelinePreviews.MarketTimelineMarketStart, 
        cssVars: [
          { name: 'padding-top', value: 'var(--gap--1rem)', actualValue: '16px top spacing' },
          { name: 'progress-line-height', value: '4px', actualValue: 'Progress bar thickness' },
          { name: 'progress-line-bg', value: 'var(--black-a2)', actualValue: 'Inactive line color' },
          { name: 'progress-line-active', value: 'linear-gradient(90deg, var(--iris-9) 0%, var(--iris-10) 100%)', actualValue: 'Active gradient' },
          { name: 'dot-active-size', value: '12px', actualValue: 'Active dot diameter' },
          { name: 'dot-inactive-size', value: '10px', actualValue: 'Inactive dot diameter' },
          { name: 'dot-active', value: 'var(--iris-10)', actualValue: 'Active dot fill' },
          { name: 'dot-passed', value: 'var(--iris-9)', actualValue: 'Passed dot fill' },
          { name: 'dot-future', value: 'var(--black-a4)', actualValue: 'Future dot fill' },
          { name: 'dot-glow', value: '0 0 0 4px rgba(99, 102, 241, 0.1)', actualValue: 'Active dot shadow' },
          { name: 'label-active', value: 'var(--iris-10)', actualValue: 'Active label color' },
          { name: 'label-inactive', value: 'var(--muted-foreground)', actualValue: 'Inactive label color' },
          { name: 'label-size', value: 'var(--text-xs)', actualValue: '12px - all status labels' },
          { name: 'label-gap-below', value: '12px', actualValue: 'Gap from progress line to labels below' },
          { name: 'label-first-align', value: 'left', actualValue: 'Market Start aligns to timeline left edge' },
          { name: 'label-last-align', value: 'right', actualValue: 'Resolution aligns to timeline right edge' },
          { name: 'timeline-margin-top', value: '2px', actualValue: 'Timeline container top margin' },
          { name: 'timeline-padding-bottom', value: '16px', actualValue: 'Timeline container bottom padding' },
          { name: 'timeline-padding', value: '8px', actualValue: 'Horizontal padding for progress line (not labels)' },
        ],
        codeExample: `import { MarketTimeline } from '@/components/market-details/MarketTimeline';

// Use inside market header card
<MarketTimeline currentStatus="market-start" />`
      },
      { 
        size: 'Default', 
        state: 'Live Trading', 
        description: 'Active status "Live Trading" displayed above its dot (at 33.33%)', 
        renderComponent: MarketTimelinePreviews.MarketTimelineLiveTrading, 
        cssVars: [
          { name: 'progress-width', value: '33.33%', actualValue: 'Progress at step 2 of 4' },
          { name: 'active-label-position', value: '33.33%', actualValue: 'Label above active dot (step 2)' },
          { name: 'dot-positions', value: '0%, 33.33%, 66.67%, 100%', actualValue: '4 dots across line' },
        ],
        codeExample: `<MarketTimeline currentStatus="live-trading" />`
      },
      { 
        size: 'Default', 
        state: 'Prediction Closed', 
        description: 'Progress bar 66% complete, third dot active', 
        renderComponent: MarketTimelinePreviews.MarketTimelinePredictionClosed, 
        cssVars: [
          { name: 'progress-width', value: '66.67%', actualValue: 'Progress at step 3 of 4' },
        ],
        codeExample: `<MarketTimeline currentStatus="prediction-closed" />`
      },
      { 
        size: 'Default', 
        state: 'Resolution', 
        description: 'Timeline complete, all dots passed, fourth dot active', 
        renderComponent: MarketTimelinePreviews.MarketTimelineResolution, 
        cssVars: [
          { name: 'progress-width', value: '100%', actualValue: 'Full progress' },
        ],
        codeExample: `<MarketTimeline currentStatus="resolution" />`
      },
    ],
  },

  // OrderBook Component
  {
    id: 'market-orderbook',
    label: 'OrderBook',
    category: 'Market',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'YES Market', 
        description: 'OrderBook view filtered for YES market with asks/bids and spread indicator', 
        renderComponent: MarketOrderBookPreviews.OrderBookYesView, 
        cssVars: [
          { name: 'container-background', value: 'var(--card-gradient)', actualValue: 'radial-gradient(135% 96% at 49.96% 100%, #fffefc -140%, #ffffff0d 100%), linear-gradient(180deg, #fffefc -120%, #ffffff 100%)' },
          { name: 'container-border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'container-border-radius', value: 'var(--radius-xl)', actualValue: 'calc(8px + 4px) = 12px' },
          { name: 'container-padding', value: '20px', actualValue: '20px' },
          { name: 'container-box-shadow', value: 'var(--shadow-1)', actualValue: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)' },
          { name: 'tabs-gap', value: 'var(--gap--0-5rem)', actualValue: '8px' },
          { name: 'tab-padding', value: '8px 16px', actualValue: '8px 16px' },
          { name: 'tab-border-radius-active', value: 'var(--radius-button)', actualValue: '8px' },
          { name: 'tab-bg-active', value: 'var(--lum-02)', actualValue: '#fffefc' },
          { name: 'tab-color-active', value: 'var(--card-foreground)', actualValue: '#0f172a' },
          { name: 'tab-color-inactive', value: 'var(--muted-foreground)', actualValue: '#64748b' },
          { name: 'orderbook-header-size', value: 'var(--text-sm)', actualValue: '14px' },
          { name: 'orderbook-header-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'orderbook-header-color', value: 'var(--muted-foreground)', actualValue: '#64748b' },
          { name: 'ask-section-bg', value: 'transparent', actualValue: 'transparent' },
          { name: 'bid-section-bg', value: 'transparent', actualValue: 'transparent' },
          { name: 'ask-price-color', value: 'var(--red-9)', actualValue: '#e5484d' },
          { name: 'bid-price-color', value: 'var(--green-9)', actualValue: '#30a46c' },
          { name: 'order-row-padding', value: '8px 0', actualValue: '8px 0' },
          { name: 'order-text-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'order-text-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'spread-bg', value: 'var(--lum-02)', actualValue: '#fffefc' },
          { name: 'spread-border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'spread-padding', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'spread-text-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'spread-value-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
        ],
        codeExample: `import { OrderBookChart } from '@/components/market-details/OrderBookChart';

<OrderBookChart
  buyOrders={buyOrders}
  sellOrders={sellOrders}
  lastPrice={62}
  spread={3}
  chartData={chartData}
  // ... other props
/>`
      },
    ],
  },

  // Chart Component
  {
    id: 'market-chart',
    label: 'Probability Chart',
    category: 'Market',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Dual Line', 
        description: 'Chart showing both YES (green) and NO (red) probability lines with legend', 
        renderComponent: MarketOrderBookPreviews.ChartDualLineView, 
        cssVars: [
          { name: 'container-background', value: 'var(--card-gradient)', actualValue: 'radial-gradient(135% 96% at 49.96% 100%, #fffefc -140%, #ffffff0d 100%), linear-gradient(180deg, #fffefc -120%, #ffffff 100%)' },
          { name: 'container-border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'container-border-radius', value: 'var(--radius-xl)', actualValue: 'calc(8px + 4px) = 12px' },
          { name: 'container-padding', value: '20px', actualValue: '20px' },
          { name: 'container-box-shadow', value: 'var(--shadow-1)', actualValue: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)' },
          { name: 'chart-height', value: '400px', actualValue: '400px' },
          { name: 'legend-gap', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'legend-margin-bottom', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'legend-dot-size', value: '12px', actualValue: '12px' },
          { name: 'legend-text-size', value: 'var(--text-sm)', actualValue: '14px' },
          { name: 'legend-text-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'legend-text-color', value: 'var(--muted-foreground)', actualValue: '#64748b' },
          { name: 'yes-line-stroke', value: 'var(--green-9)', actualValue: '#30a46c' },
          { name: 'yes-line-width', value: '2.5px', actualValue: '2.5px' },
          { name: 'yes-gradient-start', value: 'rgba(48, 164, 108, 0.3)', actualValue: 'rgba(48, 164, 108, 0.3)' },
          { name: 'yes-gradient-end', value: 'rgba(48, 164, 108, 0)', actualValue: 'rgba(48, 164, 108, 0)' },
          { name: 'no-line-stroke', value: 'var(--red-9)', actualValue: '#e5484d' },
          { name: 'no-line-width', value: '2.5px', actualValue: '2.5px' },
          { name: 'no-gradient-start', value: 'rgba(229, 72, 77, 0.3)', actualValue: 'rgba(229, 72, 77, 0.3)' },
          { name: 'no-gradient-end', value: 'rgba(229, 72, 77, 0)', actualValue: 'rgba(229, 72, 77, 0)' },
          { name: 'grid-stroke', value: 'var(--black-a2)', actualValue: '#0000001a' },
          { name: 'grid-dash', value: '3 3', actualValue: '3 3' },
          { name: 'axis-stroke', value: 'var(--muted-foreground)', actualValue: '#64748b' },
          { name: 'axis-text-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'axis-text-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'tooltip-background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'tooltip-border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'tooltip-border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'tooltip-padding', value: '8px 12px', actualValue: '8px 12px' },
          { name: 'tooltip-text-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'tooltip-text-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        ],
        codeExample: `// Chart data structure
const chartData = [
  { time: '00:00', yes: 45, no: 55 },
  { time: '04:00', yes: 48, no: 52 },
  // ... more data points
];

// YES% + NO% = 100% at all times
// Generated dynamically per market`
      },
    ],
  },

  // Breakdown Details
  {
    id: 'market-breakdown',
    label: 'Breakdown Details',
    category: 'Market',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Stats', 
        description: 'Market statistics breakdown showing volume, last price, spread, and YES/NO prices', 
        renderComponent: MarketOrderBookPreviews.BreakdownDetailsView, 
        cssVars: [
          { name: 'container-background', value: 'var(--card-gradient)', actualValue: 'radial-gradient(135% 96% at 49.96% 100%, #fffefc -140%, #ffffff0d 100%), linear-gradient(180deg, #fffefc -120%, #ffffff 100%)' },
          { name: 'container-border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'container-border-radius', value: 'var(--radius-xl)', actualValue: 'calc(8px + 4px) = 12px' },
          { name: 'container-padding', value: '20px', actualValue: '20px' },
          { name: 'container-box-shadow', value: 'var(--shadow-1)', actualValue: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)' },
          { name: 'main-stat-label-size', value: 'var(--text-sm)', actualValue: '14px' },
          { name: 'main-stat-label-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'main-stat-label-color', value: 'var(--muted-foreground)', actualValue: '#64748b' },
          { name: 'main-stat-value-size', value: 'var(--text-3xl)', actualValue: '30px' },
          { name: 'main-stat-value-weight', value: 'var(--font-weight-extra-bold)', actualValue: '800' },
          { name: 'main-stat-value-color', value: 'var(--card-foreground)', actualValue: '#0f172a' },
          { name: 'main-stat-margin-bottom', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'grid-columns', value: 'repeat(2, 1fr)', actualValue: 'repeat(2, 1fr)' },
          { name: 'grid-gap', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'stat-label-size', value: 'var(--text-xs)', actualValue: '12px' },
          { name: 'stat-label-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
          { name: 'stat-label-color', value: 'var(--muted-foreground)', actualValue: '#64748b' },
          { name: 'stat-label-margin-bottom', value: '4px', actualValue: '4px' },
          { name: 'stat-value-size', value: 'var(--text-xl)', actualValue: '20px' },
          { name: 'stat-value-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'stat-value-color-default', value: 'var(--card-foreground)', actualValue: '#0f172a' },
          { name: 'stat-value-color-yes', value: 'var(--green-9)', actualValue: '#30a46c' },
          { name: 'stat-value-color-no', value: 'var(--red-9)', actualValue: '#e5484d' },
        ],
        codeExample: `// Display key market metrics
<div className="stats-breakdown">
  <StatItem label="Total Volume" value="$2.3M" large />
  <StatItem label="Last Price" value="62¢" />
  <StatItem label="Spread" value="3.0¢" />
  <StatItem label="YES Price" value="62¢" color="green" />
  <StatItem label="NO Price" value="38¢" color="red" />
</div>`
      },
    ],
  },

  // ==================== ADVANCED COMPONENTS ====================
  {
    id: 'calendar',
    label: 'Calendar',
    category: 'Form',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Date picker calendar', 
        renderComponent: AdvancedPreviews.CalendarDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--1rem)' },
          { name: 'font-family', value: 'Inter, sans-serif' },
        ] 
      },
    ],
  },
  {
    id: 'carousel',
    label: 'Carousel',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Image/content carousel', 
        renderComponent: AdvancedPreviews.CarouselDefault, 
        cssVars: [
          { name: 'background', value: 'var(--card-normal)' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'padding', value: 'var(--gap--1rem)' },
        ] 
      },
    ],
  },
  {
    id: 'resizable',
    label: 'Resizable',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Resizable panel layout', 
        renderComponent: AdvancedPreviews.ResizableDefault, 
        cssVars: [
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--radius-card)' },
          { name: 'handle-width', value: '4px' },
          { name: 'handle-background', value: 'var(--black-a2)' },
        ] 
      },
    ],
  },

  // ==================== CARD SECTION CONTENT ====================
  {
    id: 'card-section-title-only',
    label: 'Card Section - Title Only',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Card section with title and 4-column grid layout', 
        renderComponent: LayoutPreviews.CardSectionTitleOnly, 
        cssVars: [
          { name: 'section-padding', value: 'var(--gap--2rem)', actualValue: '32px' },
          { name: 'title-size', value: 'var(--text-2xl)', actualValue: '24px' },
          { name: 'title-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'title-margin-bottom', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'grid-gap', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'card-background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'card-padding', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'card-border-radius', value: 'var(--radius-card)', actualValue: '8px' },
          { name: 'card-border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d' },
          { name: 'card-shadow', value: 'var(--shadow-1)', actualValue: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)' },
        ] 
      },
    ],
  },
  {
    id: 'card-section-title-caption',
    label: 'Card Section - Title & Caption',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Card section with title, caption, and 3-column grid layout', 
        renderComponent: LayoutPreviews.CardSectionTitleCaption, 
        cssVars: [
          { name: 'section-padding', value: 'var(--gap--2rem)', actualValue: '32px' },
          { name: 'title-size', value: 'var(--text-2xl)', actualValue: '24px' },
          { name: 'title-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'title-margin-bottom', value: 'var(--gap--0-5rem)', actualValue: '8px' },
          { name: 'caption-size', value: 'var(--text-s)', actualValue: '14px' },
          { name: 'caption-color', value: 'var(--muted-foreground)', actualValue: '#64748bff (slate-500)' },
          { name: 'header-margin-bottom', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'grid-gap', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'card-background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'card-padding', value: 'var(--gap--1-5rem)', actualValue: '24px' },
        ] 
      },
    ],
  },
  {
    id: 'card-section-detailed',
    label: 'Card Section - Detailed Content',
    category: 'Layout',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'Card section with detailed content blocks, metrics, and hover effects', 
        renderComponent: LayoutPreviews.CardSectionDetailedContent, 
        cssVars: [
          { name: 'section-padding', value: 'var(--gap--2rem)', actualValue: '32px' },
          { name: 'header-border-bottom', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
          { name: 'header-padding-bottom', value: 'var(--gap--1rem)', actualValue: '16px' },
          { name: 'header-margin-bottom', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'grid-gap', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'card-background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, #ffffff -240%, #fffefc 160%)' },
          { name: 'card-padding', value: 'var(--gap--1-5rem)', actualValue: '24px' },
          { name: 'card-hover-transform', value: 'translateY(-4px)', actualValue: 'Lift up 4px on hover' },
          { name: 'card-hover-shadow', value: 'var(--shadow-3)', actualValue: '0px 8px 16px 0px rgba(0, 0, 0, 0.12)' },
          { name: 'card-content-spacing', value: 'var(--gap--0-75rem)', actualValue: '12px between content blocks' },
          { name: 'divider-color', value: 'var(--black-a1)', actualValue: '#0000000d' },
        ] 
      },
    ],
  },
  {
    id: 'input-otp',
    label: 'Input OTP',
    category: 'Form',
    sizeStates: [
      { 
        size: 'Default', 
        state: 'Default', 
        description: 'One-time password input', 
        renderComponent: AdvancedPreviews.InputOTPDefault, 
        cssVars: [
          { name: 'width', value: '48px' },
          { name: 'height', value: '48px' },
          { name: 'border', value: '1px solid var(--black-a2)' },
          { name: 'border-radius', value: 'var(--border-radius--0-375rem)', actualValue: '6px' },
          { name: 'font-size', value: 'var(--text-xl)', actualValue: '20px' },
          { name: 'font-weight', value: 'var(--font-weight-semi-bold)', actualValue: '600' },
          { name: 'background', value: 'var(--card-normal)' },
        ] 
      },
    ],
  },

  // ==================== MEDIA ====================
  {
    id: 'media-rive',
    label: 'Rive Animation',
    category: 'Media',
    sizeStates: [
      {
        size: 'Default',
        state: 'Default',
        description: 'Rive animation integration',
        renderComponent: RivePreviews.RiveDefaultPreview,
        cssVars: [],
        codeExample: `import { RiveAnimation } from "@/components/ui/rive-animation"

export function RiveDemo() {
  return (
    <div className="h-[400px]">
      <RiveAnimation
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
      />
    </div>
  )
}`
      }
    ]
  },
];
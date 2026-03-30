# CSS Property Breakdown Template for Design System Components

## Complete Property List Template

For EVERY component state, document ALL these properties (even if unchanged from default):

```typescript
cssVars: [
  { name: 'background', value: 'CSS variable', actualValue: 'resolved value with hex/px' },
  { name: 'border-radius', value: 'CSS variable', actualValue: 'resolved px value' },
  { name: 'height', value: 'Tailwind class', actualValue: 'exact px' },
  { name: 'width', value: 'Tailwind class or auto', actualValue: 'exact px or auto' },
  { name: 'padding-x', value: 'Tailwind class', actualValue: 'exact px left + right' },
  { name: 'padding-y', value: 'Tailwind class', actualValue: 'exact px top + bottom' },
  { name: 'gap', value: 'Tailwind class', actualValue: 'exact px between elements' },
  { name: 'font-size', value: 'from globals.css', actualValue: 'var(--text-*) = px' },
  { name: 'font-weight', value: 'Tailwind class', actualValue: 'var(--font-weight-*) = number' },
  { name: 'text-color', value: 'CSS variable', actualValue: 'var(--*) = hex' },
  { name: 'border', value: 'border spec', actualValue: 'width style color with hex' },
  { name: 'box-shadow', value: 'CSS variable or none', actualValue: 'x y blur spread rgba OR none' },
  { name: 'transform', value: 'transform function', actualValue: 'exact values (translate, scale, rotate)' },
  { name: 'opacity', value: 'decimal', actualValue: 'percentage' },
  { name: 'outline', value: 'outline spec', actualValue: 'width style color with hex' },
  { name: 'outline-offset', value: 'px', actualValue: 'exact px' },
  { name: 'pointer-events', value: 'none or auto', actualValue: 'interaction state' },
]
```

## Button Component Property Reference

### Size-specific Properties

**SM (Small) Button:**
- height: 32px (h-8)
- padding-x: 12px (px-3)
- gap: 6px (gap-1.5)
- has-svg padding: 10px (px-2.5)

**MD (Medium/Default) Button:**
- height: 36px (h-9)
- padding-x: 16px (px-4)
- padding-y: 8px (py-2)
- gap: 8px (gap-2)
- has-svg padding: 12px (px-3)

**LG (Large) Button:**
- height: 40px (h-10)
- padding-x: 24px (px-6)
- gap: 8px (gap-2)
- has-svg padding: 16px (px-4)

**Icon Button:**
- size: 36px × 36px (size-9)

### Typography (ALL button sizes)
- font-size: var(--text-sm) = 12px
- font-weight: var(--font-weight-semi-bold) = 600

### Variant-specific Colors

**Default Variant:**
- background: var(--primary) = var(--slate-900) = #0f172aff
- text-color: var(--primary-foreground) = var(--slate-50) = #f8fafcff

**Primary Variant:**
- background: var(--primary-button-bg) = var(--iris-9) = #5b5bd6
- text-color: var(--primary-button-fg) = white = #ffffff
- hover-bg: var(--primary-button-bg-hover) = var(--iris-10) = #5151cd

**Destructive Variant:**
- background: var(--destructive) = var(--red-9) = #e5484d (NOT red-01)
- text-color: white = #ffffff
- focus-ring: var(--chart-2) = var(--red-8) = #eb8e90

**Outline Variant:**
- background: var(--lum-01) = #ffffff
- border: 1px solid var(--border) = 1px solid var(--black-a1) = 1px solid #0000000d
- text-color: var(--foreground) = var(--slate-950)
- hover-border: var(--iris-9) = #5b5bd6

**Ghost Variant:**
- background: transparent
- hover-bg: var(--black-a1) = #0000000d
- active-bg: var(--black-a2) = #0000001a

**Secondary Variant:**
- background: var(--secondary) = var(--slate-100) = #f1f5f9ff
- text-color: var(--secondary-foreground) = var(--slate-700) = #334155ff

### Common Interactive States

**Hover State Properties:**
- transform: translateY(-2px) - Lift effect
- opacity: 0.8 - 80% opacity (for most variants)
- box-shadow: varies by variant
  - Primary: 0 4px 12px rgba(105, 82, 254, 0.25)
  - Default: none

**Active State Properties:**
- transform: scale(0.98) - Scale down to 98%

**Focused State Properties:**
- outline: 2px solid var(--iris-9) = 2px solid #5b5bd6
- outline-offset: 2px
- ring: 3px ring-ring/50 (focus-visible)

**Disabled State Properties:**
- opacity: 0.5 - 50% opacity
- pointer-events: none - Not clickable

### Border Radius
- All buttons: var(--radius-button) = var(--border-radius--0-5rem) = 8px

### Shadows Breakdown

**var(--shadow-1):**
- x: 0px
- y: 1px
- blur: 2px
- spread: 0px
- color: rgba(0, 0, 0, 0.05)

**var(--shadow-2):**
- x: 0px
- y: 1px
- blur: 2px
- spread: 0px
- color: rgba(0, 0, 0, 0.1)

**var(--shadow-3):**
- x: 0px
- y: 8px
- blur: 16px
- spread: 0px
- color: rgba(0, 0, 0, 0.12)

**var(--shadow-4):**
- x: 0px
- y: 3px
- blur: 4px
- spread: 0px
- color: rgba(0, 0, 0, 0.04)

**Primary Button Hover Shadow:**
- x: 0px
- y: 4px
- blur: 12px
- spread: 0px
- color: rgba(105, 82, 254, 0.25)

## Step-by-Step Breakdown Process

### 1. Identify Component Variants
List all variants (Default, Primary, Outline, Ghost, Destructive, etc.)

### 2. Identify Size States
List all sizes (XS, SM, MD, LG, Icon, etc.)

### 3. Identify Interactive States
For EACH size:
- Default
- Hover
- Active
- Focused
- Disabled
- Error (if applicable)
- Loading (if applicable)

### 4. Document Complete Properties for EACH State

**CRITICAL: List ALL properties for EVERY state, not just what changes!**

Example for Button SM Hover:
```typescript
{ 
  size: 'SM', 
  state: 'Hover', 
  description: 'Small button in hover state', 
  renderComponent: ButtonDefaultSMHover, 
  cssVars: [
    // ✅ Include ALL properties, even if same as Default
    { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(...)' },
    { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
    { name: 'height', value: '32px (h-8)', actualValue: '32px' },
    { name: 'padding-x', value: '12px (px-3)', actualValue: '12px' },
    { name: 'gap', value: '6px (gap-1.5)', actualValue: '6px' },
    { name: 'font-size', value: 'text-sm', actualValue: '12px' },
    { name: 'font-weight', value: 'font-semibold', actualValue: '600' },
    { name: 'text-color', value: 'var(--primary-foreground)', actualValue: '#f8fafcff' },
    { name: 'border', value: 'none', actualValue: '0px' },
    { name: 'box-shadow', value: 'none', actualValue: 'none' },
    { name: 'transform', value: 'translateY(-2px)', actualValue: '-2px lift' }, // ← Changed
    { name: 'opacity', value: '0.8', actualValue: '80%' }, // ← Changed
  ] 
},
```

### 5. Resolve All CSS Variables to Actual Values

**Colors:**
- var(--iris-9) → #5b5bd6
- var(--red-9) → #e5484d
- var(--lum-01) → #ffffff (light) or #0f1112 (dark)

**Spacing:**
- var(--gap--0-5rem) → 8px
- var(--gap--0-75rem) → 12px
- var(--gap--1rem) → 16px

**Radius:**
- var(--border-radius--0-5rem) → 8px
- var(--border-radius--0-375rem) → 6px

**Typography:**
- var(--text-sm) → 12px
- var(--text-base) → 16px
- var(--text-xl) → 20px
- var(--font-weight-semi-bold) → 600
- var(--font-weight-medium) → 500

### 6. Document Shadow Properties in Detail

Always break down shadows as:
```
box-shadow: X Y BLUR SPREAD COLOR
Example: 0 4px 12px 0 rgba(105, 82, 254, 0.25)
- x: 0px
- y: 4px  
- blur: 12px
- spread: 0px (or omitted)
- color: rgba(105, 82, 254, 0.25)
```

### 7. Document Border Properties in Detail

Always specify:
```
border: WIDTH STYLE COLOR
Example: 1px solid var(--border)
- width: 1px
- style: solid
- color: var(--border) = var(--black-a1) = #0000000d
```

## Quick Reference: Common CSS Variables

### Colors (Light Mode)
```
--lum-01: #ffffff
--lum-02: #fffefc
--lum-03: #e6eff2
--black-a1: #0000000d (5% black)
--black-a2: #0000001a (10% black)
--iris-9: #5b5bd6 (Primary blue)
--iris-10: #5151cd (Primary blue hover)
--red-9: #e5484d (Destructive red)
--red-8: #eb8e90 (Destructive hover/focus)
--slate-900: #0f172aff (Dark text/bg)
--slate-50: #f8fafcff (Light text)
```

### Spacing
```
--gap--0-25rem: 4px
--gap--0-375rem: 6px
--gap--0-5rem: 8px
--gap--0-75rem: 12px
--gap--1rem: 16px
--gap--1-5rem: 24px
```

### Border Radius
```
--border-radius--0-375rem: 6px (inputs)
--border-radius--0-5rem: 8px (buttons, cards)
--border-radius--0-75rem: 12px
--border-radius--9999px: 9999px (fully rounded)
```

### Typography
```
--text-sm: 12px
--text-base: 16px
--text-xl: 20px
--text-2xl: 24px
--text-3xl: 30px
--font-weight-medium: 500
--font-weight-semi-bold: 600
--font-weight-extra-bold: 800
```

## Example: Complete Button Breakdown

```typescript
// Button - Default Variant, SM Size, ALL States
{
  id: 'button-default',
  label: 'Default',
  category: 'Button',
  sizeStates: [
    // SM - Default State
    { 
      size: 'SM', 
      state: 'Default',
      renderComponent: ButtonDefaultSMDefault, 
      cssVars: [
        { name: 'background', value: 'var(--primary)', actualValue: '#0f172aff' },
        { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
        { name: 'height', value: 'h-8', actualValue: '32px' },
        { name: 'padding-x', value: 'px-3', actualValue: '12px' },
        { name: 'gap', value: 'gap-1.5', actualValue: '6px' },
        { name: 'font-size', value: 'text-sm', actualValue: '12px' },
        { name: 'font-weight', value: 'font-semibold', actualValue: '600' },
        { name: 'text-color', value: 'var(--primary-foreground)', actualValue: '#f8fafcff' },
        { name: 'border', value: 'none', actualValue: '0px' },
        { name: 'box-shadow', value: 'none', actualValue: 'none' },
        { name: 'transform', value: 'none', actualValue: 'none' },
      ] 
    },
    // SM - Hover State (ALL properties repeated)
    { 
      size: 'SM', 
      state: 'Hover',
      renderComponent: ButtonDefaultSMHover, 
      cssVars: [
        { name: 'background', value: 'var(--primary)', actualValue: '#0f172aff' },
        { name: 'border-radius', value: 'var(--radius-button)', actualValue: '8px' },
        { name: 'height', value: 'h-8', actualValue: '32px' },
        { name: 'padding-x', value: 'px-3', actualValue: '12px' },
        { name: 'gap', value: 'gap-1.5', actualValue: '6px' },
        { name: 'font-size', value: 'text-sm', actualValue: '12px' },
        { name: 'font-weight', value: 'font-semibold', actualValue: '600' },
        { name: 'text-color', value: 'var(--primary-foreground)', actualValue: '#f8fafcff' },
        { name: 'border', value: 'none', actualValue: '0px' },
        { name: 'box-shadow', value: 'none', actualValue: 'none' },
        { name: 'transform', value: 'translateY(-2px)', actualValue: 'Lift -2px' },
        { name: 'opacity', value: '0.8', actualValue: '80%' },
      ] 
    },
    // ... continue for Active, Focused, Disabled
  ]
}
```

## Checklist for Each Component

- [ ] All variants identified
- [ ] All sizes identified
- [ ] All interactive states identified
- [ ] EVERY state has COMPLETE property list
- [ ] All CSS variables resolved to actual values
- [ ] All colors include hex codes
- [ ] All spacing includes px values
- [ ] All shadows broken down (x, y, blur, spread, color)
- [ ] All borders broken down (width, style, color)
- [ ] All typography includes font-size in px and font-weight as number
- [ ] Transform values specified exactly
- [ ] Opacity values shown as both decimal and percentage

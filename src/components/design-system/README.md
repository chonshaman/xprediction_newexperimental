# 🎨 Design System - Modular Architecture

## Overview

The Design System has been refactored from a single 2700+ line file into a modular, maintainable folder structure.

## 📁 Folder Structure

```
/components/design-system/
├── index.tsx                    # Main Design System Page component
├── types.ts                     # TypeScript interfaces and types
├── README.md                    # This file
│
├── components/                  # Reusable UI components for the design system
│   ├── NavigationTree.tsx      # Left sidebar navigation
│   └── ComponentPreview.tsx    # Component display and CSS table
│
├── previews/                    # Preview component functions
│   ├── index.ts                # Central export
│   ├── button-previews.tsx     # All button preview components
│   ├── form-field-previews.tsx # Input, Textarea previews
│   ├── other-previews.tsx      # Badge, Checkbox, Switch, etc.
│   └── market-card-previews.tsx # Market card previews
│
└── data/                        # Data and configuration
    └── variants.ts              # Component variant definitions with CSS docs
```

## 🚀 Benefits

### Before (DesignSystemPageNew.tsx)
- ❌ Single file with 2700+ lines
- ❌ Difficult to navigate and maintain
- ❌ Hard to add new components
- ❌ Git conflicts frequent
- ❌ Slow file loading in editors

### After (Modular Structure)
- ✅ Multiple small, focused files
- ✅ Easy to navigate and understand
- ✅ Simple to add new components
- ✅ Reduced merge conflicts
- ✅ Fast editor performance
- ✅ Better code organization

## 📝 How to Add a New Component

### Step 1: Create Preview Components

Create a new file in `/components/design-system/previews/` for your component:

```tsx
// /components/design-system/previews/my-component-previews.tsx

import React from 'react';
import { MyComponent } from '../../ui/my-component';

export function MyComponentDefault() {
  return <MyComponent>Default State</MyComponent>;
}

export function MyComponentHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <MyComponent style={{ opacity: 0.8 }}>Hover State</MyComponent>
    </div>
  );
}

// ... more states
```

### Step 2: Export from Index

Add to `/components/design-system/previews/index.ts`:

```ts
export * from './my-component-previews';
```

### Step 3: Add Variant Definition

In `/components/design-system/data/variants.ts`:

```ts
// Import your previews
import * as MyComponentPreviews from '../previews/my-component-previews';

// Add to componentVariants array:
{
  id: 'my-component-default',
  label: 'Default',
  category: 'My Category',
  sizeStates: [
    { 
      size: 'Default', 
      state: 'Default', 
      description: 'My component in default state', 
      renderComponent: MyComponentPreviews.MyComponentDefault, 
      cssVars: [
        { 
          name: 'background', 
          value: 'var(--card-normal)', 
          actualValue: 'linear-gradient(...)' 
        },
        { 
          name: 'border-radius', 
          value: 'var(--radius-card)', 
          actualValue: '8px' 
        },
        // ... all CSS properties
      ] 
    },
    { 
      size: 'Default', 
      state: 'Hover', 
      description: 'My component on hover', 
      renderComponent: MyComponentPreviews.MyComponentHover, 
      cssVars: [
        { name: 'opacity', value: '0.8', actualValue: '80%' },
      ] 
    },
  ],
},
```

### Step 4: Done! 🎉

The component will automatically appear in the navigation tree.

## 🔧 Migration from DesignSystemPageNew.tsx

To migrate remaining components from the old file:

### 1. Identify Component Previews

In `DesignSystemPageNew.tsx`, find preview functions:

```tsx
// Old location
function CheckboxDefault() {
  return <Checkbox />;
}
```

### 2. Move to Appropriate Preview File

Copy to `/components/design-system/previews/other-previews.tsx`:

```tsx
// New location
export function CheckboxDefault() {
  return <Checkbox />;
}
```

### 3. Find Variant Definition

In `DesignSystemPageNew.tsx`, find in `componentVariants` array:

```tsx
{
  id: 'checkbox',
  label: 'Checkbox',
  category: 'Form',
  sizeStates: [...]
}
```

### 4. Copy to variants.ts

Paste into `/components/design-system/data/variants.ts`:

```tsx
import * as OtherPreviews from '../previews/other-previews';

// In componentVariants array:
{
  id: 'checkbox',
  label: 'Checkbox',
  category: 'Form',
  sizeStates: [
    { 
      size: 'Default', 
      state: 'Unchecked', 
      renderComponent: OtherPreviews.CheckboxDefault, // Update reference
      cssVars: [...]
    }
  ]
}
```

### 5. Update Component References

Change function names to imported references:

```diff
- renderComponent: CheckboxDefault,
+ renderComponent: OtherPreviews.CheckboxDefault,
```

## 📊 Current Migration Status

### ✅ Completed Components
- **Buttons**: Default, Primary (all sizes/states)
- **Form Fields**: Input, Textarea (all states)
- **Badges**: Default, Secondary
- **Market Cards**: Default, EndingSoon, Featured

### 🔄 To Migrate (from DesignSystemPageNew.tsx)
- Button variants: Destructive, Outline, Ghost, Secondary (more states)
- Primary Button: All sizes
- Checkbox: All states
- Switch: All states
- Select, Slider, Radio Group
- Avatar, Progress, Tabs
- Card, Alert, Separator
- Accordion, Skeleton
- Toggle, ToggleGroup
- Dialog, Popover, AlertDialog
- Table, Tooltip
- OutcomeButton, AmountInput

### Migration Script

To speed up migration, you can use this pattern:

```bash
# 1. Extract preview functions
grep -A 5 "^function.*Default()" DesignSystemPageNew.tsx > temp_previews.txt

# 2. Extract variant definitions
grep -A 20 "id: 'component-name'" DesignSystemPageNew.tsx > temp_variants.txt

# 3. Manually organize into appropriate files
```

## 🎯 Design System Variables

All components MUST use design system variables from `/styles/globals.css`:

### Colors (Lum-based)
```css
var(--lum-01)          # Primary background
var(--lum-02)          # Secondary background
var(--lum-03)          # Tertiary background
var(--card-normal)     # Card default background
var(--card-hover)      # Card hover background
var(--black-a1)        # 5% opacity black
var(--black-a2)        # 10% opacity black
var(--iris-9)          # Primary blue
var(--muted-foreground)# Muted text
var(--card-foreground) # Primary text
```

### Spacing
```css
var(--gap--0-25rem)    # 4px
var(--gap--0-5rem)     # 8px
var(--gap--0-75rem)    # 12px
var(--gap--1rem)       # 16px
var(--gap--1-5rem)     # 24px
var(--gap--2rem)       # 32px
```

### Border Radius
```css
var(--border-radius--0-375rem)  # 6px
var(--border-radius--0-5rem)    # 8px
var(--border-radius--0-75rem)   # 12px
var(--radius-card)              # 8px
var(--radius-button)            # 8px
var(--radius-input)             # 6px
```

### Typography
```css
var(--text-sm)                  # 12px
var(--text-base)                # 16px
var(--text-xl)                  # 20px
var(--text-2xl)                 # 24px
var(--text-3xl)                 # 30px
var(--font-weight-medium)       # 500
var(--font-weight-semi-bold)    # 600
var(--font-weight-extra-bold)   # 800
```

**Font Family**: Always use `Inter, sans-serif` (defined in globals.css)

## 🏗️ Architecture Principles

### 1. Separation of Concerns
- **Previews**: Visual component representations
- **Data**: CSS property documentation
- **Components**: Reusable UI elements
- **Types**: Type definitions

### 2. Single Responsibility
- Each file has one clear purpose
- Preview files only contain preview functions
- Variant data is separate from UI logic

### 3. Maintainability
- Small files are easier to understand
- Clear naming conventions
- Consistent structure across all files

### 4. Scalability
- Easy to add new components
- No file size limits
- Parallel development friendly

## 🔍 File Size Comparison

| File | Before | After |
|------|--------|-------|
| DesignSystemPageNew.tsx | 2730 lines | - |
| index.tsx | - | 105 lines |
| types.ts | - | 28 lines |
| NavigationTree.tsx | - | 135 lines |
| ComponentPreview.tsx | - | 245 lines |
| button-previews.tsx | - | 310 lines |
| form-field-previews.tsx | - | 170 lines |
| other-previews.tsx | - | 280 lines |
| market-card-previews.tsx | - | 70 lines |
| variants.ts | - | 450 lines (starter) |
| **Total** | **2730** | **~1800 (current), expandable** |

## 📚 Additional Resources

- `/components/MARKET_CARDS_GUIDE.md` - Market card documentation
- `/scripts/PREVIEW_SYNC_GUIDE.md` - Preview component sync guide
- `/Guidelines.md` - Design system guidelines

## ✨ Best Practices

1. **Always use design system variables** - Never hardcode colors/sizes
2. **Document all CSS properties** - Include actual values in cssVars
3. **Keep preview functions simple** - Just render the component
4. **Test in design system page** - Verify previews match actual components
5. **Update both preview and data** - Keep them in sync

## 🎓 Tips for Developers

- Use VS Code's "Go to Definition" to navigate between files
- Use "Find All References" to see where components are used
- Split terminal to edit preview and variant files simultaneously
- Use Git blame to track changes per component
- Create feature branches for adding new components

---

**Status**: ✅ Initial refactoring complete, ready for migration of remaining components

**Next Steps**: Migrate remaining components from DesignSystemPageNew.tsx following the guide above

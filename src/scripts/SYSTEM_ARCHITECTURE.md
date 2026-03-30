# 🏗️ System Architecture - Design System Auto-Documentation

## 📊 High-Level Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     Developer Workflow                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Components Directory (/components/ui)                          │
│  ├── button.tsx                                                 │
│  ├── input.tsx                                                  │
│  ├── badge.tsx                                                  │
│  └── ... more components                                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              File Watcher (watch-and-update.js)                 │
│  - Monitors file changes                                        │
│  - Queues updates                                               │
│  - Triggers after 10 changes OR 2 seconds                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│           Component Scanner (component-scanner.js)              │
│  - Extracts variants from cva()                                 │
│  - Detects sizes and states                                     │
│  - Parses Tailwind classes                                      │
│  - Generates analysis report                                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│      Auto Generator (auto-breakdown-generator.js)               │
│  - Loads component templates                                    │
│  - Resolves CSS variables                                       │
│  - Generates property lists                                     │
│  - Formats as TypeScript                                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│         Design System Page (DesignSystemPageNew.tsx)            │
│  const componentVariants = [                                    │
│    { /* Generated component breakdowns */ }                     │
│  ];                                                             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Visual Design System                         │
│  - Interactive component previews                               │
│  - Complete CSS property documentation                          │
│  - Live state demonstrations                                    │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Data Flow

### 1. Component Change Detection

```
Component File Modified
         │
         ▼
   File Watcher
    (debounce)
         │
         ▼
  Queue Update
    (batch: 10)
         │
         ▼
  Trigger Update
```

### 2. Component Analysis

```
component-scanner.js
         │
         ├─► Extract cva() definitions
         │   └─► variants: { default, primary, ... }
         │
         ├─► Parse variant options
         │   └─► size: { sm, md, lg }
         │
         ├─► Detect Tailwind classes
         │   └─► "h-8 px-3 gap-1.5" → { height: 32px, ... }
         │
         └─► Generate Analysis Report
             └─► component-analysis.json
```

### 3. Breakdown Generation

```
auto-breakdown-generator.js
         │
         ├─► Load Component Templates
         │   └─► PROPERTY_TEMPLATES[componentType]
         │
         ├─► For each: Variant × Size × State
         │   │
         │   ├─► Merge Properties
         │   │   ├─ Base properties
         │   │   ├─ Variant-specific
         │   │   ├─ Size-specific
         │   │   └─ State-specific
         │   │
         │   └─► Resolve CSS Variables
         │       └─► var(--primary) → #0f172aff
         │
         └─► Format as TypeScript
             └─► cssVars: [{ name, value, actualValue }]
```

### 4. File Update

```
Update Process
         │
         ├─► Read DesignSystemPageNew.tsx
         │
         ├─► Find componentVariants array
         │
         ├─► Replace with new code
         │
         └─► Write file
             └─► Success! ✓
```

## 🎨 Component Template Structure

```javascript
PROPERTY_TEMPLATES = {
  button: {
    
    // What CSS properties to document
    baseProperties: [
      'background',
      'border-radius',
      'height',
      'padding-x',
      'gap',
      'font-size',
      'font-weight',
      'text-color',
      'border',
      'box-shadow',
      'transform',
    ],
    
    // Variant-specific values
    variants: {
      default: {
        background: 'var(--primary)',
        'text-color': 'var(--primary-foreground)',
      },
      primary: {
        background: 'var(--primary-button-bg)',
        'text-color': 'white',
      },
      destructive: {
        background: 'var(--destructive)',
        'text-color': 'white',
      },
    },
    
    // Size-specific values
    sizes: {
      sm: {
        height: '32px',
        'padding-x': '12px',
        gap: '6px',
      },
      md: {
        height: '36px',
        'padding-x': '16px',
        gap: '8px',
      },
    },
    
    // State-specific values
    states: {
      default: {
        transform: 'none',
        opacity: '1',
      },
      hover: {
        transform: 'translateY(-2px)',
        opacity: '0.8',
      },
      active: {
        transform: 'scale(0.98)',
      },
    },
  },
}
```

## 🧮 Property Resolution Algorithm

```
For component[type][variant][size][state]:

Step 1: Initialize with base properties
   └─► background, border-radius, height, padding-x, ...

Step 2: Apply common defaults
   └─► font-size: var(--text-sm), font-weight: 600

Step 3: Merge variant values
   └─► If variant=primary: background: var(--primary-button-bg)

Step 4: Merge size values
   └─► If size=sm: height: 32px, padding-x: 12px

Step 5: Merge state values
   └─► If state=hover: transform: translateY(-2px), opacity: 0.8

Step 6: Resolve CSS variables
   └─► var(--primary-button-bg) → var(--iris-9) → #5b5bd6

Result: Complete property object
   └─► { name: 'background', value: 'var(--primary-button-bg)', actualValue: '#5b5bd6' }
```

## 📦 Module Dependencies

```
┌─────────────────────┐
│   run.sh (entry)    │
└──────────┬──────────┘
           │
           ├─► watch-and-update.js
           │   └─► auto-breakdown-generator.js
           │       ├─► component-scanner.js
           │       └─► CSS_VARIABLES (static)
           │
           ├─► auto-breakdown-generator.js
           │   └─► [same as above]
           │
           └─► component-scanner.js
               └─► (standalone)
```

## 🔍 CSS Variable Resolution Map

```
Input: var(--primary)
  │
  ├─► Look up in CSS_VARIABLES
  │   └─► Found: 'var(--slate-900) = #0f172aff'
  │
  └─► Output: { 
        value: 'var(--primary)',
        actualValue: 'var(--slate-900) = #0f172aff'
      }

Input: var(--text-sm)
  │
  ├─► Look up in CSS_VARIABLES
  │   └─► Found: '12px'
  │
  └─► Output: { 
        value: 'var(--text-sm)',
        actualValue: '12px'
      }
```

## 🎯 State Combination Matrix

For a component with:
- 3 variants (default, primary, destructive)
- 3 sizes (sm, md, lg)
- 5 states (default, hover, active, focused, disabled)

```
Total combinations: 3 × 3 × 5 = 45

┌──────────────┬──────┬──────┬──────┬──────┬──────┐
│              │ Def  │ Hover│Active│Focus │Disab │
├──────────────┼──────┼──────┼──────┼──────┼──────┤
│ default-sm   │  ✓   │  ✓   │  ✓   │  ✓   │  ✓   │
│ default-md   │  ✓   │  ✓   │  ✓   │  ✓   │  ✓   │
│ default-lg   │  ✓   │  ✓   │  ✓   │  ✓   │  ✓   │
├──────────────┼──────┼──────┼──────┼──────┼──────┤
│ primary-sm   │  ✓   │  ✓   │  ✓   │  ✓   │  ✓   │
│ primary-md   │  ✓   │  ✓   │  ✓   │  ✓   │  ✓   │
│ primary-lg   │  ✓   │  ✓   │  ✓   │  ✓   │  ✓   │
├──────────────┼──────┼──────┼──────┼──────┼──────┤
│ destructive-sm│  ✓  │  ✓   │  ✓   │  ✓   │  ✓   │
│ destructive-md│  ✓  │  ✓   │  ✓   │  ✓   │  ✓   │
│ destructive-lg│  ✓  │  ✓   │  ✓   │  ✓   │  ✓   │
└──────────────┴──────┴──────┴──────┴──────┴──────┘

Each ✓ = Complete property list (10-15 properties)
```

## 🔄 Watch Mode State Machine

```
┌─────────────┐
│   Idle      │
│  (watching) │
└──────┬──────┘
       │
       │ File Change Event
       ▼
┌─────────────┐
│  Queuing    │
│ (debounce)  │
└──────┬──────┘
       │
       ├─► If batch size reached (10 components)
       │   └─► Immediate Update
       │
       └─► If timeout (2 seconds)
           └─► Debounced Update
                    │
                    ▼
             ┌─────────────┐
             │  Processing │
             │ (generating)│
             └──────┬──────┘
                    │
                    ▼
             ┌─────────────┐
             │   Success   │
             └──────┬──────┘
                    │
                    └─► Back to Idle
```

## 💾 Output Format

```typescript
// Generated output structure
const componentVariants: ComponentVariant[] = [
  {
    id: 'button-default',
    label: 'Default',
    category: 'Button',
    sizeStates: [
      {
        size: 'SM',
        state: 'Default',
        description: 'Small default button in default state',
        renderComponent: ButtonDefaultSMDefault,
        cssVars: [
          { 
            name: 'background',
            value: 'var(--primary)',
            actualValue: 'var(--slate-900) = #0f172aff'
          },
          { 
            name: 'height',
            value: '32px (h-8)',
            actualValue: '32px'
          },
          // ... 8-12 more properties
        ]
      },
      // ... 14 more size/state combinations for this variant
    ]
  },
  // ... more variants
];
```

## 🎛️ Configuration Hierarchy

```
1. Script Arguments (highest priority)
   └─► --batch 5 --debounce 3000

2. CONFIG Object
   └─► componentsToScan: ['button.tsx', ...]
       batchSize: 10
       debounceDelay: 2000

3. Component Templates
   └─► PROPERTY_TEMPLATES[componentType]

4. CSS Variables
   └─► CSS_VARIABLES mapping

5. Defaults (lowest priority)
   └─► Hardcoded fallbacks
```

## 🚀 Execution Paths

### Path A: Watch Mode
```
User runs: node scripts/watch-and-update.js
  │
  ├─► Start file watcher
  ├─► Monitor /components/ui
  ├─► Queue changes (batch: 10)
  ├─► Debounce (2 seconds)
  ├─► Trigger generator
  └─► Loop forever (until Ctrl+C)
```

### Path B: One-Time Generation
```
User runs: node scripts/auto-breakdown-generator.js
  │
  ├─► Scan all components
  ├─► Generate breakdowns
  ├─► Update design system file
  └─► Exit
```

### Path C: Analysis Only
```
User runs: node scripts/component-scanner.js
  │
  ├─► Scan component files
  ├─► Extract structure
  ├─► Generate report
  ├─► Save component-analysis.json
  └─► Exit (no file updates)
```

## 📊 Performance Characteristics

```
Component Scanning:    ~50ms per component
Property Generation:   ~10ms per variant
CSS Variable Lookup:   ~1ms per property
File Update:          ~100ms
───────────────────────────────────────
Total (10 components): ~1 second
```

## 🛠️ Extension Points

### Add New Component Type
1. Create template in PROPERTY_TEMPLATES
2. Add to componentsToScan
3. Run generator

### Add New CSS Variable
1. Add to CSS_VARIABLES mapping
2. Run generator to apply

### Add New Property
1. Add to component's baseProperties
2. Define in variants/sizes/states
3. Run generator

### Custom State Logic
1. Add state to component template
2. Define state-specific properties
3. Run generator

---

**🏗️ Architecture designed for:**
- ✅ Extensibility (easy to add components/properties)
- ✅ Maintainability (clear separation of concerns)
- ✅ Performance (fast generation, smart batching)
- ✅ Reliability (type-safe, validated output)

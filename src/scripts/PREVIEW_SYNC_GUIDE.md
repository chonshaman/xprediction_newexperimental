# 📸 Preview Component Sync Guide

## Problem Solved

**Issue**: Preview components in the Design System page were not accurately reflecting the actual component styling in different states (hover, focused, etc.).

**Solution**: Created a system to ensure preview components match the exact styling of the real components.

## ✅ What Was Fixed

### Textarea Component
- ✅ **Hover State** - Now shows exact hover styling with proper gradient, border, padding, and shadow
- ✅ **Focused State** - Now shows exact focused styling with iris blue border and glow effect
- ✅ **Complete CSS Documentation** - All CSS properties documented with actual values

### Input Component  
- ✅ **Already Correct** - Input preview functions were already properly styled
- ✅ **Maintained** - Ensured consistency across both form field components

## 🎨 How Preview Components Work

### Structure

Form field components (Input, Textarea) use a **wrapper div pattern**:

```tsx
// Actual Component Structure
<div className="wrapper" style={{
  backgroundColor: isFocused ? 'var(--card-hover)' : 'var(--card-normal)',
  border: isFocused ? '1px solid var(--primary-button-bg)' : '...',
  padding: isFocused ? 'var(--gap--1rem)' : '...',
  boxShadow: isFocused ? '0 0 0 1px var(--primary-button-bg), ...' : '...',
}}>
  <input/textarea />
</div>
```

### Preview State Simulation

To show different states, preview components **manually recreate the wrapper div** with the exact styles:

```tsx
// Preview for Hover State
function TextareaHover() {
  return (
    <div style={{ pointerEvents: 'none', width: '300px' }}>
      <div 
        className="flex cursor-text transition-all duration-200 ease-out"
        style={{
          gap: 'var(--gap--0-5rem)',
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--muted-foreground)',
          borderRadius: 'var(--radius-card)',
          paddingTop: 'var(--gap--0-5rem)',
          paddingBottom: 'var(--gap--0-5rem)',
          paddingLeft: 'var(--gap--0-75rem)',
          paddingRight: 'var(--gap--0-75rem)',
          boxShadow: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)',
        }}
      >
        <textarea
          className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground resize-none"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            minHeight: '80px',
          }}
          placeholder="Enter your message..."
          readOnly
        />
      </div>
    </div>
  );
}
```

## 📊 Complete State Styling

### Input & Textarea - Default State
```css
background: var(--card-normal)
border: 1px solid var(--black-a2)
padding: 8px (var(--gap--0-5rem))
box-shadow: none
```

### Input & Textarea - Hover State
```css
background: var(--card-hover)
border: 1px solid var(--muted-foreground)
padding: 12px (var(--gap--0-75rem))
box-shadow: 0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)
```

### Input & Textarea - Focused State
```css
background: var(--card-hover)
border: 1px solid var(--primary-button-bg)
padding: 16px (var(--gap--1rem))
box-shadow: 0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)
```

### Input & Textarea - Disabled State
```css
opacity: 0.5
pointer-events: none
```

## 🔧 Scripts Created

### 1. `/scripts/generate-preview-components.js`
Generates preview component templates for different component types.

**Features:**
- Template-based preview generation
- State-specific styling
- Component type detection

### 2. `/scripts/sync-preview-components.js`
Syncs preview components with actual component styling.

**Features:**
- Generates accurate Input/Textarea previews
- Creates complete CSS breakdowns
- Outputs ready-to-use code

**Usage:**
```bash
node scripts/sync-preview-components.js
```

**Output:**
- `form-field-previews.tsx` - React preview components
- `form-field-variants.ts` - CSS variable documentation

## 🎯 Ensuring Accuracy

### Checklist for New Components

When adding a new component to the design system:

1. **Identify State Management**
   - Does it use wrapper divs?
   - Does it have state-based styling (hover, focus)?

2. **Copy Exact Styles**
   - Use the same CSS variables
   - Match padding, borders, shadows
   - Include all transform/opacity effects

3. **Test Each State**
   - Default: Base styling
   - Hover: Interactive feedback
   - Focused: Active state
   - Disabled: Non-interactive state
   - Error (if applicable): Validation state

4. **Document CSS Properties**
   - List ALL properties (not just changes)
   - Include actual resolved values
   - Specify units (px, rem, %, etc.)

### Example: Adding a New Form Component

```tsx
// 1. Create preview functions
function NewComponentDefault() {
  return <NewComponent placeholder="Enter..." />;
}

function NewComponentHover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <div 
        className="wrapper-classes"
        style={{
          // Copy EXACT hover styles from actual component
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--muted-foreground)',
          // ... all hover properties
        }}
      >
        <input/textarea/select />
      </div>
    </div>
  );
}

// 2. Document CSS properties
{
  size: 'DEFAULT',
  state: 'Hover',
  renderComponent: NewComponentHover,
  cssVars: [
    { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(...)' },
    { name: 'border', value: '1px solid var(--muted-foreground)', actualValue: '1px solid #64748bff' },
    // ... all properties for this state
  ]
}
```

## 📝 CSS Variable Documentation Format

Each state should document:

```typescript
{
  size: 'DEFAULT',
  state: 'Hover',
  description: 'Component in hover state',
  renderComponent: ComponentHover,
  cssVars: [
    // Layout
    { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(...)' },
    { name: 'border', value: '1px solid var(--muted-foreground)', actualValue: '1px solid #64748bff' },
    { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
    { name: 'padding', value: 'var(--gap--0-75rem)', actualValue: '12px' },
    
    // Typography
    { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
    { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
    { name: 'text-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
    
    // Effects
    { name: 'box-shadow', value: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)', actualValue: 'Outer ring + glow' },
    
    // Additional
    { name: 'min-height', value: '80px', actualValue: '80px' },
  ]
}
```

## 🚀 Automation Integration

The preview sync system integrates with the auto-breakdown generator:

```bash
# 1. Update component styling
# Edit /components/ui/textarea.tsx

# 2. Sync preview components
node scripts/sync-preview-components.js

# 3. Update design system page
# Copy generated code to DesignSystemPageNew.tsx

# Or use the auto-generator (when configured)
node scripts/auto-breakdown-generator.js
```

## ✨ Benefits

### Before
- ❌ Previews showed incorrect styles
- ❌ Hover/focus states didn't match
- ❌ Incomplete CSS documentation
- ❌ Manual updates required

### After
- ✅ Previews exactly match actual components
- ✅ All states accurately represented
- ✅ Complete CSS property documentation
- ✅ Automated sync tools available

## 🎓 Best Practices

1. **Always Test Visually**
   - Compare preview with actual component
   - Check all states side-by-side

2. **Use Design System Variables**
   - Never hardcode colors/sizes
   - Always use CSS variables from globals.css

3. **Document Everything**
   - Include all CSS properties per state
   - Show actual resolved values

4. **Keep Previews Static**
   - Use `readOnly` for inputs
   - Use `pointerEvents: 'none'` for wrappers
   - Prevent interaction in preview

5. **Match Typography**
   - Use same font family (Inter)
   - Use same font size/weight
   - Apply same placeholder styling

## 🔍 Debugging Preview Mismatches

If a preview doesn't match the actual component:

1. **Inspect Both Elements**
   ```
   DevTools → Inspect actual component
   DevTools → Inspect preview component
   Compare computed styles
   ```

2. **Check Wrapper Structure**
   - Does actual use wrapper div?
   - Are all wrapper styles copied?

3. **Verify State Logic**
   - What styles change on hover?
   - What styles change on focus?
   - Are transitions/animations included?

4. **Compare CSS Variables**
   - Are you using the same variables?
   - Do they resolve to same values?

5. **Test Interactivity**
   - Is preview properly non-interactive?
   - Does actual component show hover on mouseover?

## 📚 Related Documentation

- `/scripts/README.md` - Full automation system docs
- `/scripts/css-breakdown-template.md` - CSS property template
- `/AUTOMATION_COMPLETE.md` - System overview

---

**Result**: Design system previews now accurately reflect actual component styling across all states! 🎉

# 🛠️ Design System Scripts (Modular Structure)

## Overview

Automated scripts for maintaining the modular Design System. These scripts scan preview components, extract CSS properties, and keep the design system documentation accurate.

## 📦 Available Scripts

### 1. **scan-preview-components.js** 🔍

Scans all preview component files and extracts CSS properties.

```bash
node scripts/scan-preview-components.js
```

**What it does:**
- Scans `/components/design-system/previews/*.tsx`
- Extracts all inline `style={{ }}` properties
- Resolves CSS variables to actual values
- Generates detailed report
- Saves results to `preview-scan-results.json`

**Output:**
```
🔍 Scanning preview components...

📄 Scanning button-previews.tsx...
  ✓ ButtonDefaultSMDefault: 10 properties
  ✓ ButtonDefaultSMHover: 3 properties
  ✓ ButtonDefaultSMActive: 1 properties
  ...

📊 Scan Complete!
   Components scanned: 45
   CSS properties found: 180
```

---

### 2. **update-variants.js** 🔄

Automatically updates `variants.ts` with accurate CSS documentation.

```bash
# Update all variants
node scripts/update-variants.js

# Update specific variant
node scripts/update-variants.js button-default
node scripts/update-variants.js featured-card
```

**What it does:**
- Reads current `variants.ts` file
- Scans corresponding preview components
- Extracts CSS properties
- Updates `cssVars` arrays automatically
- Preserves all other data (labels, descriptions, etc.)

**Example Update:**

*Before:*
```typescript
cssVars: [
  { name: 'background', value: 'var(--card-normal)' }
]
```

*After:*
```typescript
cssVars: [
  { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)' },
  { name: 'border', value: '1px solid var(--black-a1)', actualValue: '1px solid #0000000d (5% opacity)' },
  { name: 'border-radius', value: 'var(--radius-card)', actualValue: 'var(--border-radius--0-5rem) = 8px' },
  { name: 'padding', value: 'var(--gap--1rem)', actualValue: '16px' }
]
```

---

### 3. **watch-previews.js** 👀

Watches preview files and auto-updates on changes.

```bash
node scripts/watch-previews.js
```

**What it does:**
- Monitors `/components/design-system/previews/*.tsx`
- Detects file changes
- Automatically runs updates for affected variants
- Debounces changes (1 second)
- Runs until you press Ctrl+C

**Output:**
```
👀 Starting Preview Component Watcher

Watching directory: /components/design-system/previews/

Mapped files:
  • button-previews.tsx
  • form-field-previews.tsx
  • other-previews.tsx
  • market-card-previews.tsx

✅ Watcher started! Edit preview files to trigger updates.

📝 File changed: button-previews.tsx
  🔄 Updating 6 variant(s)...
  ✅ Updates complete!
```

---

### 4. **sync-design-system-new.js** 🎨

Master script that runs everything.

```bash
# One-time sync
node scripts/sync-design-system-new.js

# Continuous sync (with watcher)
node scripts/sync-design-system-new.js --watch
```

**What it does:**
- Runs full scan of all preview components
- Updates all variants in `variants.ts`
- Generates comprehensive report
- Optionally starts file watcher

**Full Process:**
1. Scan all preview components
2. Extract CSS properties
3. Update variants.ts
4. Generate report
5. (Optional) Start watching for changes

---

## 🚀 Quick Start Guide

### First Time Setup

1. **Run initial sync:**
   ```bash
   node scripts/sync-design-system-new.js
   ```

2. **Verify results:**
   - Check `variants.ts` for updated CSS docs
   - Review `preview-scan-results.json`

### Daily Development

**Option 1: Auto-update (Recommended)**
```bash
node scripts/sync-design-system-new.js --watch
```
Then edit preview components and updates happen automatically!

**Option 2: Manual updates**
```bash
# After editing preview components
node scripts/update-variants.js
```

### Adding New Components

1. Create preview file (e.g., `new-component-previews.tsx`)
2. Add mapping to `update-variants.js`:
   ```javascript
   const VARIANT_TO_PREVIEW_MAP = {
     // ... existing mappings
     'new-component': 'new-component-previews.tsx',
   };
   ```
3. Run sync:
   ```bash
   node scripts/update-variants.js new-component
   ```

---

## 📋 File Mappings

Scripts map preview files to variant IDs:

```javascript
{
  'button-previews.tsx': [
    'button-default',
    'button-primary',
    'button-destructive',
    'button-outline',
    'button-ghost',
    'button-secondary'
  ],
  
  'form-field-previews.tsx': [
    'input-default',
    'textarea'
  ],
  
  'other-previews.tsx': [
    'badge-default',
    'badge-secondary',
    'badge-destructive',
    'badge-outline',
    'checkbox',
    'switch'
  ],
  
  'market-card-previews.tsx': [
    'market-card',
    'ending-soon-card',
    'featured-card'
  ]
}
```

---

## 🎯 What Gets Extracted

### CSS Properties Detected

**Colors:**
- `background`, `backgroundColor`
- `color`, `borderColor`

**Borders:**
- `border`, `borderRadius`

**Spacing:**
- `padding`, `paddingTop/Bottom/Left/Right`
- `margin`, `gap`

**Typography:**
- `fontSize`, `fontWeight`, `fontFamily`, `lineHeight`

**Layout:**
- `width`, `height`, `minWidth`, `maxWidth`, `minHeight`
- `aspectRatio`

**Effects:**
- `boxShadow`, `opacity`, `transform`
- `backdropFilter`

**Other:**
- `outline`, `outlineOffset`, `cursor`

### CSS Variable Resolution

Variables are automatically resolved to actual values:

```javascript
'var(--card-normal)' → 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)'
'var(--gap--1rem)' → '16px'
'var(--radius-card)' → 'var(--border-radius--0-5rem) = 8px'
'var(--iris-9)' → '#5b5bd6'
```

All mappings are in `scan-preview-components.js` and match `/styles/globals.css`.

---

## 🔧 Configuration

### Adding New CSS Properties

Edit `scan-preview-components.js`:

```javascript
const CSS_VAR_PATTERNS = {
  // ... existing patterns
  newProperty: /newProperty:\s*['"`]([^'"`]+)['"`]/g,
};
```

### Adding New CSS Variable Mappings

Edit `scan-preview-components.js`:

```javascript
const cssVariables = {
  // ... existing mappings
  'new-variable': 'actual value',
};
```

### Adding New Preview File Mappings

Edit `update-variants.js` and `watch-previews.js`:

```javascript
const VARIANT_TO_PREVIEW_MAP = {
  // ... existing mappings
  'new-variant-id': 'new-preview-file.tsx',
};

const FILE_TO_VARIANTS_MAP = {
  // ... existing mappings
  'new-preview-file.tsx': ['new-variant-id'],
};
```

---

## 📊 Output Files

### preview-scan-results.json

Detailed JSON of all scanned components:

```json
{
  "button-previews.tsx": {
    "ButtonDefaultSMDefault": [
      {
        "name": "background",
        "value": "var(--primary)",
        "actualValue": "var(--slate-900) = #0f172aff"
      },
      {
        "name": "borderRadius",
        "value": "var(--radius-button)",
        "actualValue": "var(--border-radius--0-5rem) = 8px"
      }
    ]
  }
}
```

### Updated variants.ts

CSS documentation automatically added:

```typescript
{
  id: 'button-default',
  label: 'Default',
  category: 'Button',
  sizeStates: [
    { 
      size: 'SM', 
      state: 'Default', 
      renderComponent: ButtonPreviews.ButtonDefaultSMDefault, 
      cssVars: [
        // Auto-generated from preview component
        { name: 'background', value: 'var(--primary)', actualValue: '...' },
        { name: 'borderRadius', value: 'var(--radius-card)', actualValue: '8px' },
        // ... all properties extracted
      ] 
    }
  ]
}
```

---

## ⚙️ How It Works

### 1. Scanning Process

```
Preview Component File (.tsx)
    ↓
Extract function code
    ↓
Find style={{ }} blocks
    ↓
Match CSS property patterns
    ↓
Extract property name + value
    ↓
Resolve CSS variables
    ↓
Return property objects
```

### 2. Update Process

```
variants.ts
    ↓
Parse to find variant by ID
    ↓
Extract size states
    ↓
Find renderComponent reference
    ↓
Map to preview file
    ↓
Scan preview component
    ↓
Generate new cssVars array
    ↓
Replace in variants.ts
    ↓
Write updated file
```

### 3. Watch Process

```
File System Event (preview file changed)
    ↓
Debounce (1 second)
    ↓
Map file to variant IDs
    ↓
For each variant:
  - Scan preview component
  - Update cssVars in variants.ts
    ↓
Report completion
    ↓
Continue watching...
```

---

## 🐛 Troubleshooting

### "No CSS properties found"

**Cause:** Preview component doesn't use inline styles.

**Solution:** Use `style={{ }}` syntax in preview components:
```tsx
// ❌ Won't be detected
<Button className="custom-class">

// ✅ Will be detected
<Button style={{ background: 'var(--card-normal)' }}>
```

### "Variant not found in variants.ts"

**Cause:** Variant ID mismatch or not added to mapping.

**Solution:** 
1. Check variant ID in `variants.ts`
2. Add to `VARIANT_TO_PREVIEW_MAP` in `update-variants.js`

### "CSS variable not resolved"

**Cause:** Variable not in resolution map.

**Solution:** Add to `cssVariables` object in `scan-preview-components.js`:
```javascript
const cssVariables = {
  'new-var': 'actual value',
};
```

### Watcher not detecting changes

**Cause:** File system events not firing.

**Solution:**
- Save file explicitly (Cmd+S / Ctrl+S)
- Check file permissions
- Try manual update: `node scripts/update-variants.js`

---

## 📈 Performance

- **Scan Time**: ~500ms for all preview files
- **Update Time**: ~200ms per variant
- **Watch Debounce**: 1 second (prevents duplicate updates)
- **Memory**: Minimal (processes files sequentially)

---

## 🎓 Best Practices

1. **Use inline styles in previews** - Enables automatic extraction
2. **Use design system variables** - Gets resolved to actual values
3. **Keep preview simple** - Focus on the component state
4. **Run sync after bulk changes** - Use `--watch` for incremental
5. **Commit generated files** - Include updated `variants.ts` in git

---

## 🔄 Migration from Old Scripts

### Old Structure
```
/scripts/sync-design-system.js
  → Updated DesignSystemPageNew.tsx (monolithic file)
```

### New Structure
```
/scripts/sync-design-system-new.js
  → Updates /components/design-system/data/variants.ts (modular)
```

### Migration Steps

1. Delete old generated data (if any)
2. Run new sync: `node scripts/sync-design-system-new.js`
3. Verify results in `variants.ts`
4. Start watcher for continuous updates

---

## 📝 Example Workflow

### Scenario: Adding a new button variant

1. **Create preview component:**
   ```tsx
   // /components/design-system/previews/button-previews.tsx
   export function ButtonNewDefault() {
     return (
       <Button 
         style={{ 
           background: 'var(--iris-9)',
           padding: 'var(--gap--1rem)',
           borderRadius: 'var(--radius-button)'
         }}
       >
         New Button
       </Button>
     );
   }
   ```

2. **Add to variants.ts:**
   ```typescript
   {
     id: 'button-new',
     label: 'New',
     category: 'Button',
     sizeStates: [
       { 
         size: 'Default', 
         state: 'Default', 
         renderComponent: ButtonPreviews.ButtonNewDefault,
         cssVars: [] // Will be auto-filled
       }
     ]
   }
   ```

3. **Add mapping:**
   ```javascript
   // update-variants.js
   const VARIANT_TO_PREVIEW_MAP = {
     'button-new': 'button-previews.tsx',
   };
   ```

4. **Run update:**
   ```bash
   node scripts/update-variants.js button-new
   ```

5. **Done!** CSS documentation is now complete.

---

## ✨ Summary

These scripts provide:
- ✅ **Automated CSS documentation** - No manual copying
- ✅ **Accurate property values** - Extracted from actual code
- ✅ **CSS variable resolution** - Shows what they actually are
- ✅ **Live updates** - Watch mode for development
- ✅ **Error prevention** - Keeps preview and docs in sync

**Result**: Design system always has accurate, up-to-date CSS documentation! 🎨

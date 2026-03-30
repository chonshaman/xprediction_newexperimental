# 🔄 Script Migration Guide

## Overview

This guide helps you migrate from the old script system (targeting monolithic `DesignSystemPageNew.tsx`) to the new modular script system (targeting `/components/design-system/` structure).

## Changes Summary

| Aspect | Old Scripts | New Scripts |
|--------|------------|-------------|
| **Target File** | `DesignSystemPageNew.tsx` (2730 lines) | `data/variants.ts` (modular) |
| **Scans** | Single file | Multiple preview files |
| **Updates** | Monolithic object | Focused component data |
| **Structure** | All-in-one | Separated concerns |
| **Watch Target** | One file | Preview directory |

---

## Script Mapping

### Old Scripts → New Scripts

| Old Script | New Script | Purpose |
|-----------|------------|---------|
| `sync-design-system.js` | `sync-design-system-new.js` | Master sync script |
| `sync-preview-components.js` | `scan-preview-components.js` | Scan components |
| `watch-and-update.js` | `watch-previews.js` | File watcher |
| `component-scanner.js` | *(integrated)* | CSS extraction |

### Deprecated Scripts

These scripts are no longer needed with the modular structure:

- ❌ `generate-preview-components.js` - Preview components now hand-crafted
- ❌ `auto-breakdown-generator.js` - Replaced by scan-preview-components.js
- ⚠️ `component-scanner.js` - Still useful for scanning UI components

---

## Step-by-Step Migration

### Step 1: Understand New Structure

**Old:**
```
/components/
  └── DesignSystemPageNew.tsx  (everything in one file)
```

**New:**
```
/components/design-system/
  ├── index.tsx                 (main page)
  ├── types.ts                  (types)
  ├── components/               (UI components)
  ├── previews/                 (preview components)
  └── data/
      └── variants.ts           (component data)
```

### Step 2: Stop Old Watchers

If you have old watchers running, stop them:

```bash
# Press Ctrl+C on any running watch-and-update.js
```

### Step 3: Run New Initial Sync

```bash
node scripts/sync-design-system-new.js
```

This will:
- Scan new preview structure
- Update new variants.ts
- Generate new reports

### Step 4: Verify Migration

Check that variants.ts has CSS documentation:

```bash
# Should show detailed cssVars arrays
cat components/design-system/data/variants.ts | grep cssVars -A 5
```

### Step 5: Start New Watcher

```bash
node scripts/sync-design-system-new.js --watch
```

---

## Key Differences

### 1. File Targets

**Old:**
```javascript
// Scanned this
/components/DesignSystemPageNew.tsx

// Updated this
const componentVariants: ComponentVariant[] = [
  // inside DesignSystemPageNew.tsx
];
```

**New:**
```javascript
// Scans these
/components/design-system/previews/button-previews.tsx
/components/design-system/previews/form-field-previews.tsx
// ... etc

// Updates this
/components/design-system/data/variants.ts
```

### 2. Preview Component Detection

**Old:**
```javascript
// Found functions like this
function ButtonDefaultSMDefault() { ... }

// Inside DesignSystemPageNew.tsx
```

**New:**
```javascript
// Finds exported functions
export function ButtonDefaultSMDefault() { ... }

// In separate preview files
```

### 3. Variant Mapping

**Old:**
```javascript
// Direct function references
renderComponent: ButtonDefaultSMDefault
```

**New:**
```javascript
// Namespaced imports
import * as ButtonPreviews from '../previews/button-previews';

renderComponent: ButtonPreviews.ButtonDefaultSMDefault
```

### 4. Update Granularity

**Old:**
```javascript
// Updated entire DesignSystemPageNew.tsx
// Risk of conflicts, large diffs
```

**New:**
```javascript
// Updates only variants.ts
// Smaller, focused changes
```

---

## Configuration Changes

### Adding New Component Mappings

**Old (`sync-design-system.js`):**
```javascript
// No explicit mapping needed
// Scanned entire file
```

**New (`update-variants.js`):**
```javascript
const VARIANT_TO_PREVIEW_MAP = {
  'button-default': 'button-previews.tsx',
  'new-component': 'new-component-previews.tsx', // Add here
};
```

**New (`watch-previews.js`):**
```javascript
const FILE_TO_VARIANTS_MAP = {
  'button-previews.tsx': ['button-default', ...],
  'new-component-previews.tsx': ['new-component'], // Add here
};
```

---

## Command Equivalents

### Old Commands → New Commands

**Full Sync:**
```bash
# Old
node scripts/sync-design-system.js

# New
node scripts/sync-design-system-new.js
```

**Watch Mode:**
```bash
# Old
node scripts/watch-and-update.js

# New
node scripts/watch-previews.js
# or
node scripts/sync-design-system-new.js --watch
```

**Scan Only:**
```bash
# Old
node scripts/auto-breakdown-generator.js

# New
node scripts/scan-preview-components.js
```

**Update Specific Component:**
```bash
# Old
# Not supported

# New
node scripts/update-variants.js button-default
```

---

## Breaking Changes

### 1. Function Export Pattern

**Old (not detected):**
```tsx
function ButtonDefault() { ... }  // Not exported
```

**New (required):**
```tsx
export function ButtonDefault() { ... }  // Must export
```

### 2. File Location

**Old:**
```tsx
// Everything in DesignSystemPageNew.tsx
```

**New:**
```tsx
// Separated into preview files
/components/design-system/previews/button-previews.tsx
```

### 3. Import Statements

**Old:**
```typescript
// No imports needed (same file)
renderComponent: ButtonDefault
```

**New:**
```typescript
// Must import from preview files
import * as ButtonPreviews from '../previews/button-previews';
renderComponent: ButtonPreviews.ButtonDefault
```

---

## Benefits of New System

### ✅ Smaller File Sizes
- Old: 2730 line file
- New: Largest file ~450 lines

### ✅ Faster Updates
- Old: Parse entire 2730 line file
- New: Parse only relevant preview file

### ✅ Parallel Development
- Old: Conflicts on single file
- New: Multiple developers, multiple files

### ✅ Easier Debugging
- Old: Find function in massive file
- New: Know exact file location

### ✅ Better Git History
- Old: Large, complex diffs
- New: Small, focused changes

### ✅ Selective Updates
- Old: All or nothing
- New: Update specific components

---

## Troubleshooting Migration

### Issue: "Cannot find preview file"

**Cause:** Preview component not moved to new structure.

**Fix:**
1. Find preview function in old `DesignSystemPageNew.tsx`
2. Move to appropriate file in `/previews/`
3. Export the function
4. Add to mappings

**Example:**
```tsx
// Old location: DesignSystemPageNew.tsx
function BadgeDefault() {
  return <Badge variant="default">Default</Badge>;
}

// New location: /previews/other-previews.tsx
export function BadgeDefault() {
  return <Badge variant="default">Default</Badge>;
}
```

### Issue: "Variant not found in variants.ts"

**Cause:** Component definition not migrated yet.

**Fix:**
1. Find component in old file
2. Copy to `variants.ts`
3. Update import references
4. Run sync script

### Issue: "CSS properties not detected"

**Cause:** Component using Tailwind classes instead of inline styles.

**Fix:** Convert to inline styles:

```tsx
// ❌ Not detected
<Button className="bg-primary px-4">

// ✅ Detected
<Button style={{ 
  background: 'var(--primary)',
  padding: 'var(--gap--1rem)'
}}>
```

### Issue: Old and new scripts conflicting

**Cause:** Both running simultaneously.

**Fix:**
1. Stop all old watchers (Ctrl+C)
2. Only use new scripts
3. Delete old output files if needed

---

## Checklist

Use this to track your migration:

- [ ] Understand new folder structure
- [ ] Stop old watcher scripts
- [ ] Run initial sync with new scripts
- [ ] Verify variants.ts updated correctly
- [ ] Test design system page loads
- [ ] Update package.json scripts (if any)
- [ ] Update documentation references
- [ ] Train team on new commands
- [ ] Delete old output files
- [ ] Start using new watcher

---

## Package.json Updates

Update your npm scripts:

**Before:**
```json
{
  "scripts": {
    "sync-design": "node scripts/sync-design-system.js",
    "watch-design": "node scripts/watch-and-update.js"
  }
}
```

**After:**
```json
{
  "scripts": {
    "sync-design": "node scripts/sync-design-system-new.js",
    "watch-design": "node scripts/sync-design-system-new.js --watch"
  }
}
```

Then use:
```bash
npm run sync-design
npm run watch-design
```

---

## Timeline

Recommended migration timeline:

**Day 1:**
- Read migration guide
- Understand new structure
- Run test sync

**Day 2:**
- Migrate scripts
- Update mappings
- Test all components

**Day 3:**
- Team training
- Update documentation
- Full production sync

**Ongoing:**
- Use new watcher during development
- Add new components to mappings
- Keep variants.ts updated

---

## Support

If you encounter issues:

1. Check **SCRIPTS_README_NEW.md** for detailed docs
2. Review **QUICK_START_NEW.md** for examples
3. Check **preview-scan-results.json** for scan output
4. Verify mappings in `update-variants.js`

---

## Rollback Plan

If needed, you can rollback:

1. **Keep old file as backup:**
   ```bash
   cp components/DesignSystemPageNew.tsx components/DesignSystemPageNew.backup.tsx
   ```

2. **Use old scripts temporarily:**
   ```bash
   node scripts/sync-design-system.js  # Old script
   ```

3. **Restore if needed:**
   ```bash
   cp components/DesignSystemPageNew.backup.tsx components/DesignSystemPageNew.tsx
   ```

But the new system is better in every way! 🚀

---

## Success Criteria

Migration is successful when:

- ✅ New scripts run without errors
- ✅ variants.ts has complete CSS documentation
- ✅ Design system page displays all components
- ✅ Watcher detects file changes
- ✅ Team understands new commands
- ✅ No references to old monolithic file

**Congratulations on migrating to the modular design system!** 🎉

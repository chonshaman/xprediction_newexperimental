# 🚀 Quick Start - Design System Scripts (Modular)

## TL;DR

```bash
# One command to sync everything
node scripts/sync-design-system-new.js

# Or with auto-watch
node scripts/sync-design-system-new.js --watch
```

---

## First Time Setup

### 1. Run Initial Sync

```bash
cd /path/to/your/project
node scripts/sync-design-system-new.js
```

**What happens:**
- ✅ Scans all preview components
- ✅ Extracts CSS properties
- ✅ Updates variants.ts with accurate docs
- ✅ Generates preview-scan-results.json

**Expected output:**
```
🎨 Design System Sync (Modular Structure)

🔍 STEP 1: Scanning preview components...
  📄 button-previews.tsx...
  ✓ ButtonDefaultSMDefault: 10 properties
  ...

🔄 STEP 2: Updating variants.ts...
  ✅ Updated button-default
  ✅ Updated featured-card
  ...

✨ Sync Complete!
   ✅ Success: 12
   ❌ Failed: 0
```

### 2. Verify Results

Check that `variants.ts` has been updated:

```bash
# View the file
cat components/design-system/data/variants.ts

# Or open in editor
code components/design-system/data/variants.ts
```

You should see detailed `cssVars` arrays with actual values!

---

## Daily Development

### Option 1: Auto-Update (Recommended) 👍

Start the watcher once:

```bash
node scripts/sync-design-system-new.js --watch
```

Now every time you edit a preview component, it auto-updates!

```
👀 Watching for changes...

📝 File changed: button-previews.tsx
  🔄 Updating 6 variant(s)...
  ✅ Updates complete!
```

**Keep this running in a terminal while you work.**

### Option 2: Manual Updates

After editing preview components:

```bash
node scripts/update-variants.js
```

Or update just one component:

```bash
node scripts/update-variants.js featured-card
```

---

## Common Tasks

### Just Scan (Don't Update)

See what properties would be extracted:

```bash
node scripts/scan-preview-components.js
```

Creates `preview-scan-results.json` for review.

### Update Specific Component

```bash
node scripts/update-variants.js button-default
node scripts/update-variants.js input-default
node scripts/update-variants.js featured-card
```

### Watch Specific Files

The watcher monitors all preview files automatically. Just run:

```bash
node scripts/watch-previews.js
```

---

## Workflow Examples

### 🎨 Example 1: Updating Button Styles

**You want to change the button hover effect.**

1. **Start watcher:**
   ```bash
   node scripts/watch-previews.js
   ```

2. **Edit preview:**
   ```tsx
   // components/design-system/previews/button-previews.tsx
   export function ButtonDefaultSMHover() {
     return (
       <Button 
         style={{ 
           background: 'var(--card-hover)',
           transform: 'translateY(-4px)',  // Changed from -2px
           boxShadow: 'var(--shadow-2)'    // Added
         }}
       >
         Button
       </Button>
     );
   }
   ```

3. **Save file** → Watcher auto-updates variants.ts!

4. **Refresh design system page** → See updated docs

**Done!** No manual copying of CSS properties.

---

### 📦 Example 2: Adding New Component

**You created a new Tooltip component.**

1. **Create preview file:**
   ```tsx
   // components/design-system/previews/tooltip-previews.tsx
   import { Tooltip } from '../../ui/tooltip';
   
   export function TooltipDefault() {
     return (
       <Tooltip 
         style={{
           background: 'var(--card-normal)',
           padding: 'var(--gap--0-5rem)',
           borderRadius: 'var(--radius-card)',
           boxShadow: 'var(--shadow-2)'
         }}
       >
         Tooltip text
       </Tooltip>
     );
   }
   ```

2. **Export from index:**
   ```tsx
   // components/design-system/previews/index.ts
   export * from './tooltip-previews';
   ```

3. **Add to variants.ts:**
   ```typescript
   // components/design-system/data/variants.ts
   import * as TooltipPreviews from '../previews/tooltip-previews';
   
   // In componentVariants array:
   {
     id: 'tooltip',
     label: 'Tooltip',
     category: 'Overlay',
     sizeStates: [
       { 
         size: 'Default', 
         state: 'Default', 
         renderComponent: TooltipPreviews.TooltipDefault,
         cssVars: [] // Will be auto-filled
       }
     ]
   }
   ```

4. **Add mappings:**
   ```javascript
   // scripts/update-variants.js
   const VARIANT_TO_PREVIEW_MAP = {
     // ... existing
     'tooltip': 'tooltip-previews.tsx',
   };
   
   // scripts/watch-previews.js
   const FILE_TO_VARIANTS_MAP = {
     // ... existing
     'tooltip-previews.tsx': ['tooltip'],
   };
   ```

5. **Run update:**
   ```bash
   node scripts/update-variants.js tooltip
   ```

6. **Done!** Component appears in design system with full docs.

---

### 🔧 Example 3: Bulk Update After Changes

**You updated multiple components at once.**

```bash
# Sync everything
node scripts/sync-design-system-new.js

# See summary
✨ Sync Complete!
   ✅ Success: 12
   ❌ Failed: 0
```

---

## Troubleshooting

### ❌ "No CSS properties found"

**Problem:** Preview doesn't use inline styles.

**Fix:** Use `style={{ }}` syntax:

```tsx
// ❌ Bad
<Button className="bg-primary">

// ✅ Good
<Button style={{ background: 'var(--primary)' }}>
```

### ❌ "Variant not found"

**Problem:** Mapping not added.

**Fix:** Add to `VARIANT_TO_PREVIEW_MAP` in `update-variants.js`.

### ❌ Watcher not working

**Problem:** File system events not firing.

**Fix:** 
- Explicitly save file (Cmd+S / Ctrl+S)
- Use manual update instead
- Check file permissions

---

## Pro Tips 💡

### 1. Use Watch Mode During Development

Always have the watcher running:

```bash
# Terminal 1: Dev server
npm run dev

# Terminal 2: Design system watcher
node scripts/sync-design-system-new.js --watch
```

### 2. Commit Generated Files

Always commit the updated `variants.ts`:

```bash
git add components/design-system/data/variants.ts
git commit -m "Update design system CSS documentation"
```

### 3. Review Scan Results

Before bulk updates, check what will change:

```bash
node scripts/scan-preview-components.js
cat scripts/preview-scan-results.json
```

### 4. Use Specific Updates for Speed

Update only what you changed:

```bash
# Instead of updating all
node scripts/update-variants.js button-default
```

### 5. Design System Variables Only

Always use CSS variables from `/styles/globals.css`:

```tsx
// ✅ Good
style={{ background: 'var(--card-normal)' }}

// ❌ Bad
style={{ background: '#ffffff' }}
```

---

## Available Commands

```bash
# Full sync (one time)
node scripts/sync-design-system-new.js

# Full sync + watch
node scripts/sync-design-system-new.js --watch

# Scan only
node scripts/scan-preview-components.js

# Update all
node scripts/update-variants.js

# Update specific
node scripts/update-variants.js [variant-id]

# Watch only
node scripts/watch-previews.js
```

---

## File Locations

```
/scripts/
  ├── scan-preview-components.js  # Scanner
  ├── update-variants.js          # Updater
  ├── watch-previews.js           # Watcher
  └── sync-design-system-new.js   # Master script

/components/design-system/
  ├── previews/                   # Preview components (scanned)
  └── data/
      └── variants.ts             # Component data (updated)

/scripts/
  └── preview-scan-results.json   # Generated report
```

---

## Next Steps

1. ✅ Run initial sync
2. ✅ Verify variants.ts was updated
3. ✅ Start watcher for development
4. ✅ Edit preview components
5. ✅ See automatic updates!

**You're all set!** The design system will now maintain accurate CSS documentation automatically. 🎉

---

## Need Help?

- **Full documentation**: `/scripts/SCRIPTS_README_NEW.md`
- **Architecture guide**: `/components/design-system/README.md`
- **Design guidelines**: `/Guidelines.md`

**Happy coding!** 🚀

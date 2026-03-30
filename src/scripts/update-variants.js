#!/usr/bin/env node

/**
 * Auto-Update Variants File
 * 
 * Scans preview components and automatically updates the variants.ts file
 * with accurate CSS property documentation.
 * 
 * Usage:
 *   node scripts/update-variants.js [component-name]
 *   
 *   Without args: Updates all components
 *   With args: Updates specific component only
 */

const fs = require('fs');
const path = require('path');
const { extractCSSProperties, resolveCSSVariable } = require('./scan-preview-components');

// Paths
const PREVIEWS_DIR = path.join(__dirname, '../components/design-system/previews');
const VARIANTS_FILE = path.join(__dirname, '../components/design-system/data/variants.ts');

/**
 * Parse variants.ts to extract component definitions
 */
function parseVariantsFile() {
  const content = fs.readFileSync(VARIANTS_FILE, 'utf-8');
  
  // Extract the componentVariants array
  const arrayMatch = content.match(/export const componentVariants: ComponentVariant\[\] = \[([\s\S]+)\];/);
  
  if (!arrayMatch) {
    throw new Error('Could not find componentVariants array in variants.ts');
  }
  
  return {
    fullContent: content,
    arrayContent: arrayMatch[0],
    beforeArray: content.substring(0, content.indexOf('export const componentVariants')),
  };
}

/**
 * Extract component variant object from variants.ts
 */
function findVariantInFile(content, variantId) {
  // Match the variant object by id
  const variantRegex = new RegExp(
    `{\\s*id:\\s*['"\`]${variantId}['"\`][^}]*sizeStates:[\\s\\S]*?(?=(?:{\\s*id:|\\]\\s*;))`,
    's'
  );
  
  const match = content.match(variantRegex);
  return match ? match[0] : null;
}

/**
 * Find the preview component name from renderComponent reference
 */
function extractPreviewComponentName(sizeStateBlock) {
  const match = sizeStateBlock.match(/renderComponent:\s*(\w+Previews\.)(\w+)/);
  return match ? match[2] : null;
}

/**
 * Update CSS vars for a specific size state
 */
function updateSizeStateCSSVars(sizeStateBlock, previewFile, componentName) {
  const filePath = path.join(PREVIEWS_DIR, previewFile);
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  Preview file not found: ${previewFile}`);
    return sizeStateBlock;
  }
  
  const code = fs.readFileSync(filePath, 'utf-8');
  const properties = extractCSSProperties(code, componentName);
  
  if (properties.length === 0) {
    console.log(`  ⚠️  No CSS properties found for ${componentName}`);
    return sizeStateBlock;
  }
  
  console.log(`  ✓ Found ${properties.length} CSS properties for ${componentName}`);
  
  // Generate new cssVars array
  const cssVarsArray = properties.map(prop => {
    const parts = [`name: '${prop.name}'`, `value: '${prop.value}'`];
    if (prop.actualValue) {
      parts.push(`actualValue: '${prop.actualValue}'`);
    }
    return `          { ${parts.join(', ')} }`;
  }).join(',\n');
  
  // Replace the cssVars array
  const cssVarsRegex = /cssVars:\s*\[[^\]]*\]/s;
  const newCssVars = `cssVars: [\n${cssVarsArray}\n        ]`;
  
  return sizeStateBlock.replace(cssVarsRegex, newCssVars);
}

/**
 * Map variant IDs to their preview files
 */
const VARIANT_TO_PREVIEW_MAP = {
  // Buttons
  'button-default': 'button-previews.tsx',
  'button-primary': 'button-previews.tsx',
  'button-destructive': 'button-previews.tsx',
  'button-outline': 'button-previews.tsx',
  'button-ghost': 'button-previews.tsx',
  'button-secondary': 'button-previews.tsx',
  'button-link': 'button-previews.tsx',
  
  // Market Outcome Buttons
  'outcome-button-yes': 'button-previews.tsx',
  'outcome-button-no': 'button-previews.tsx',
  
  // Form fields
  'input-default': 'form-field-previews.tsx',
  'textarea': 'form-field-previews.tsx',
  'amount-input': 'form-field-previews.tsx',
  
  // Badges
  'badge-default': 'other-previews.tsx',
  'badge-secondary': 'other-previews.tsx',
  'badge-destructive': 'other-previews.tsx',
  'badge-outline': 'other-previews.tsx',
  'checkbox': 'other-previews.tsx',
  'switch': 'other-previews.tsx',
  
  // Market cards
  'market-card': 'market-card-previews.tsx',
  'ending-soon-card': 'market-card-previews.tsx',
  'featured-card': 'market-card-previews.tsx',
  
  // Dialogs & Modals
  'dialog': 'dialog-previews.tsx',
  'alert-dialog': 'dialog-previews.tsx',
  'sheet': 'dialog-previews.tsx',
  'drawer': 'dialog-previews.tsx',
  
  // Menus & Navigation
  'dropdown-menu': 'menu-previews.tsx',
  'context-menu': 'menu-previews.tsx',
  'popover': 'menu-previews.tsx',
  'hover-card': 'menu-previews.tsx',
  'tooltip': 'menu-previews.tsx',
  'command': 'menu-previews.tsx',
  
  // Tables & Data Display
  'table': 'table-previews.tsx',
  'collapsible': 'table-previews.tsx',
  'scroll-area': 'table-previews.tsx',
  'breadcrumb': 'table-previews.tsx',
  'pagination': 'table-previews.tsx',
  'aspect-ratio': 'table-previews.tsx',
  
  // Advanced components
  'calendar': 'advanced-previews.tsx',
  'carousel': 'advanced-previews.tsx',
  'resizable': 'advanced-previews.tsx',
  'input-otp': 'advanced-previews.tsx',
};

/**
 * Update a specific variant
 */
function updateVariant(variantId) {
  console.log(`\n🔄 Updating variant: ${variantId}`);
  
  const { fullContent, beforeArray } = parseVariantsFile();
  const previewFile = VARIANT_TO_PREVIEW_MAP[variantId];
  
  if (!previewFile) {
    console.log(`  ⚠️  No preview file mapping for ${variantId}`);
    return false;
  }
  
  // Find the variant in the file
  const variantBlock = findVariantInFile(fullContent, variantId);
  
  if (!variantBlock) {
    console.log(`  ⚠️  Variant ${variantId} not found in variants.ts`);
    return false;
  }
  
  // Extract size states
  const sizeStatesRegex = /sizeStates:\s*\[([\s\S]*?)\]/;
  const sizeStatesMatch = variantBlock.match(sizeStatesRegex);
  
  if (!sizeStatesMatch) {
    console.log(`  ⚠️  No sizeStates found for ${variantId}`);
    return false;
  }
  
  let updatedVariantBlock = variantBlock;
  
  // Find each size state block and update it
  const sizeStateBlockRegex = /{\s*size:[\s\S]*?cssVars:\s*\[[^\]]*\]\s*}/g;
  const sizeStateBlocks = variantBlock.match(sizeStateBlockRegex);
  
  if (sizeStateBlocks) {
    for (const sizeStateBlock of sizeStateBlocks) {
      const componentName = extractPreviewComponentName(sizeStateBlock);
      
      if (componentName) {
        const updatedBlock = updateSizeStateCSSVars(sizeStateBlock, previewFile, componentName);
        updatedVariantBlock = updatedVariantBlock.replace(sizeStateBlock, updatedBlock);
      }
    }
  }
  
  // Replace in full content
  const updatedContent = fullContent.replace(variantBlock, updatedVariantBlock);
  
  // Write back to file
  fs.writeFileSync(VARIANTS_FILE, updatedContent, 'utf-8');
  console.log(`  ✅ Updated ${variantId}`);
  
  return true;
}

/**
 * Update all variants
 */
function updateAllVariants() {
  console.log('🚀 Updating all variants in variants.ts\n');
  
  const variantIds = Object.keys(VARIANT_TO_PREVIEW_MAP);
  let successCount = 0;
  let failCount = 0;
  
  for (const variantId of variantIds) {
    const success = updateVariant(variantId);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`\n✨ Update Complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log('');
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    // Update all
    updateAllVariants();
  } else {
    // Update specific component
    const variantId = args[0];
    
    if (!VARIANT_TO_PREVIEW_MAP[variantId]) {
      console.error(`❌ Unknown variant: ${variantId}`);
      console.log('\nAvailable variants:');
      Object.keys(VARIANT_TO_PREVIEW_MAP).forEach(id => {
        console.log(`  - ${id}`);
      });
      process.exit(1);
    }
    
    updateVariant(variantId);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { updateVariant, updateAllVariants };
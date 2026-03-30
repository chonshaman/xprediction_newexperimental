#!/usr/bin/env node

/**
 * Sync Design System (Modular Version)
 * 
 * Master script to scan preview components and update the design system
 * with accurate CSS documentation.
 * 
 * Features:
 * - Scans all preview component files
 * - Extracts CSS properties
 * - Updates variants.ts automatically
 * - Generates reports
 * 
 * Usage:
 *   node scripts/sync-design-system-new.js [--watch]
 *   
 *   --watch: Start file watcher for automatic updates
 */

const { scanPreviewFiles } = require('./scan-preview-components');
const { updateAllVariants } = require('./update-variants');
const { startWatching } = require('./watch-previews');

/**
 * Main sync process
 */
function syncDesignSystem() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║                                                            ║');
  console.log('║        🎨 Design System Sync (Modular Structure)          ║');
  console.log('║                                                            ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');
  
  console.log('📋 Process:');
  console.log('   1. Scan preview components');
  console.log('   2. Extract CSS properties');
  console.log('   3. Update variants.ts');
  console.log('   4. Generate report');
  console.log('');
  console.log('='.repeat(60));
  
  // Step 1: Scan preview files
  console.log('\n🔍 STEP 1: Scanning preview components...\n');
  const scanResults = scanPreviewFiles();
  
  // Step 2: Update variants.ts
  console.log('\n🔄 STEP 2: Updating variants.ts...\n');
  updateAllVariants();
  
  console.log('\n' + '='.repeat(60));
  console.log('\n✨ Sync Complete!\n');
  console.log('Your design system is now up to date with:');
  console.log('  ✓ Accurate CSS property documentation');
  console.log('  ✓ All design system variables resolved');
  console.log('  ✓ Preview components synchronized');
  console.log('');
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--watch') || args.includes('-w')) {
    // Watch mode
    console.log('Starting in watch mode...\n');
    syncDesignSystem();
    console.log('\n' + '='.repeat(60));
    console.log('\nNow starting file watcher...\n');
    startWatching();
  } else {
    // One-time sync
    syncDesignSystem();
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { syncDesignSystem };

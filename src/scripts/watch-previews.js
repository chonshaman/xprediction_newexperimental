#!/usr/bin/env node

/**
 * Watch Preview Components
 * 
 * Watches preview component files for changes and automatically updates
 * the variants.ts file with accurate CSS documentation.
 * 
 * Usage:
 *   node scripts/watch-previews.js
 */

const fs = require('fs');
const path = require('path');
const { updateVariant } = require('./update-variants');

// Paths
const PREVIEWS_DIR = path.join(__dirname, '../components/design-system/previews');

// Map preview files to variant IDs
const FILE_TO_VARIANTS_MAP = {
  'button-previews.tsx': ['button-default', 'button-primary', 'button-destructive', 'button-outline', 'button-ghost', 'button-secondary', 'button-link', 'outcome-button-yes', 'outcome-button-no'],
  'form-field-previews.tsx': ['input-default', 'textarea', 'amount-input'],
  'other-previews.tsx': ['badge-default', 'badge-secondary', 'badge-destructive', 'badge-outline', 'checkbox', 'switch'],
  'market-card-previews.tsx': ['market-card', 'ending-soon-card', 'featured-card'],
  'dialog-previews.tsx': ['dialog', 'alert-dialog', 'sheet', 'drawer'],
  'menu-previews.tsx': ['dropdown-menu', 'context-menu', 'popover', 'hover-card', 'tooltip', 'command'],
  'table-previews.tsx': ['table', 'collapsible', 'scroll-area', 'breadcrumb', 'pagination', 'aspect-ratio'],
  'advanced-previews.tsx': ['calendar', 'carousel', 'resizable', 'input-otp'],
};

// Debounce helper
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Handle file change
 */
const handleFileChange = debounce((filename) => {
  console.log(`\n📝 File changed: ${filename}`);
  
  const variantIds = FILE_TO_VARIANTS_MAP[filename];
  
  if (!variantIds) {
    console.log('  ℹ️  No variant mappings for this file');
    return;
  }
  
  console.log(`  🔄 Updating ${variantIds.length} variant(s)...`);
  
  for (const variantId of variantIds) {
    updateVariant(variantId);
  }
  
  console.log('  ✅ Updates complete!\n');
  console.log('👀 Watching for changes... (Press Ctrl+C to stop)');
}, 1000); // 1 second debounce

/**
 * Start watching
 */
function startWatching() {
  console.log('👀 Starting Preview Component Watcher\n');
  console.log('Watching directory: /components/design-system/previews/\n');
  console.log('Mapped files:');
  Object.keys(FILE_TO_VARIANTS_MAP).forEach(file => {
    console.log(`  • ${file}`);
  });
  console.log('\n' + '='.repeat(60));
  console.log('\n✅ Watcher started! Edit preview files to trigger updates.');
  console.log('   Press Ctrl+C to stop.\n');
  
  // Watch the previews directory
  const watcher = fs.watch(PREVIEWS_DIR, { recursive: false }, (eventType, filename) => {
    if (!filename || !filename.endsWith('.tsx')) {
      return;
    }
    
    if (eventType === 'change') {
      handleFileChange(filename);
    }
  });
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Stopping watcher...');
    watcher.close();
    console.log('✅ Watcher stopped.\n');
    process.exit(0);
  });
}

/**
 * Main execution
 */
function main() {
  try {
    // Check if directories exist
    if (!fs.existsSync(PREVIEWS_DIR)) {
      console.error('❌ Previews directory not found:', PREVIEWS_DIR);
      process.exit(1);
    }
    
    startWatching();
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { startWatching };
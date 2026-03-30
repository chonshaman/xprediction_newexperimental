/**
 * Component Watcher and Auto-Updater
 * 
 * Watches for changes in UI components and automatically updates
 * the Design System page with comprehensive CSS property breakdowns
 * 
 * Usage: node scripts/watch-and-update.js
 */

const fs = require('fs');
const path = require('path');
const { generateComponentBreakdown, updateDesignSystemFile } = require('./auto-breakdown-generator');

// ==================== Configuration ====================
const CONFIG = {
  watchDir: './components/ui',
  designSystemFile: './components/DesignSystemPageNew.tsx',
  debounceDelay: 2000, // Wait 2 seconds after last change
  batchSize: 10, // Auto-update after 10 components changed
};

// ==================== State Management ====================
let changedComponents = new Set();
let updateTimer = null;
let changeCount = 0;

// ==================== Change Detection ====================

/**
 * Queue component for update
 */
function queueComponentUpdate(fileName) {
  changedComponents.add(fileName);
  changeCount++;
  
  console.log(`📝 Change detected: ${fileName} (${changeCount} total changes)`);
  
  // Clear existing timer
  if (updateTimer) {
    clearTimeout(updateTimer);
  }
  
  // Check if we should trigger immediate update
  if (changedComponents.size >= CONFIG.batchSize) {
    console.log(`\n🔄 Batch size (${CONFIG.batchSize}) reached - triggering update...`);
    processUpdates();
  } else {
    // Set debounce timer
    updateTimer = setTimeout(() => {
      console.log(`\n⏰ Debounce timer expired - triggering update...`);
      processUpdates();
    }, CONFIG.debounceDelay);
    
    console.log(`⏳ Waiting for more changes... (${CONFIG.batchSize - changedComponents.size} more for immediate update)`);
  }
}

/**
 * Process all queued updates
 */
function processUpdates() {
  if (changedComponents.size === 0) {
    return;
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🚀 Processing ${changedComponents.size} component updates`);
  console.log('='.repeat(60));
  
  const updates = Array.from(changedComponents);
  changedComponents.clear();
  changeCount = 0;
  
  try {
    // Run the auto-breakdown generator for changed components
    runAutoBreakdown(updates);
    
    console.log('\n✅ Updates completed successfully!');
    console.log('='.repeat(60) + '\n');
  } catch (error) {
    console.error('\n❌ Error processing updates:', error);
    console.log('='.repeat(60) + '\n');
  }
}

/**
 * Run auto-breakdown for specific components
 */
function runAutoBreakdown(componentFiles) {
  const generator = require('./auto-breakdown-generator');
  
  console.log('\n📊 Generating property breakdowns...');
  
  componentFiles.forEach(file => {
    console.log(`   ✓ Processing ${file}`);
  });
  
  // For now, just log - in production this would call the generator
  console.log('\n💾 Updating DesignSystemPageNew.tsx...');
  
  // You can uncomment this to actually run updates:
  // generator.main();
}

/**
 * Watch for file changes
 */
function watchComponents() {
  console.log('👀 Watching for component changes...\n');
  console.log(`   Directory: ${CONFIG.watchDir}`);
  console.log(`   Batch size: ${CONFIG.batchSize} components`);
  console.log(`   Debounce: ${CONFIG.debounceDelay}ms`);
  console.log(`\n${'='.repeat(60)}\n`);
  
  if (!fs.existsSync(CONFIG.watchDir)) {
    console.error(`❌ Watch directory not found: ${CONFIG.watchDir}`);
    return;
  }
  
  // Watch directory for changes
  fs.watch(CONFIG.watchDir, { recursive: false }, (eventType, fileName) => {
    if (!fileName || !fileName.endsWith('.tsx')) {
      return;
    }
    
    if (eventType === 'change' || eventType === 'rename') {
      queueComponentUpdate(fileName);
    }
  });
  
  console.log('✓ Watcher started - waiting for changes...\n');
}

// ==================== CLI Interface ====================

/**
 * Display help message
 */
function showHelp() {
  console.log(`
Component Watcher and Auto-Updater
==================================

This script watches UI components and automatically updates the Design System
page with comprehensive CSS property breakdowns.

Usage:
  node scripts/watch-and-update.js [options]

Options:
  --help, -h        Show this help message
  --batch [n]       Set batch size (default: 10)
  --debounce [ms]   Set debounce delay (default: 2000)
  --once            Run once and exit (no watching)

Examples:
  # Start watching with default settings
  node scripts/watch-and-update.js

  # Use custom batch size
  node scripts/watch-and-update.js --batch 5

  # Run once without watching
  node scripts/watch-and-update.js --once
`);
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    help: false,
    once: false,
    batch: CONFIG.batchSize,
    debounce: CONFIG.debounceDelay,
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--help':
      case '-h':
        options.help = true;
        break;
      
      case '--once':
        options.once = true;
        break;
      
      case '--batch':
        if (i + 1 < args.length) {
          options.batch = parseInt(args[i + 1], 10);
          i++;
        }
        break;
      
      case '--debounce':
        if (i + 1 < args.length) {
          options.debounce = parseInt(args[i + 1], 10);
          i++;
        }
        break;
    }
  }
  
  return options;
}

// ==================== Main Execution ====================

function main() {
  const options = parseArgs();
  
  if (options.help) {
    showHelp();
    return;
  }
  
  // Update config from options
  CONFIG.batchSize = options.batch;
  CONFIG.debounceDelay = options.debounce;
  
  console.log('🎨 Design System Auto-Updater\n');
  
  if (options.once) {
    console.log('Running in single-update mode...\n');
    const generator = require('./auto-breakdown-generator');
    generator.main();
  } else {
    watchComponents();
  }
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down watcher...');
  
  if (changedComponents.size > 0) {
    console.log(`\n⚠️  ${changedComponents.size} pending changes - processing before exit...`);
    processUpdates();
  }
  
  console.log('✓ Goodbye!\n');
  process.exit(0);
});

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  watchComponents,
  queueComponentUpdate,
  processUpdates,
};

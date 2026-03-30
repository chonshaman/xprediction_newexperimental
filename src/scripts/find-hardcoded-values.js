#!/usr/bin/env node

/**
 * Find Hardcoded Values Script
 * 
 * Scans the codebase for hardcoded colors, spacing, and other values
 * that should be replaced with design system tokens.
 */

const fs = require('fs');
const path = require('path');

// Patterns to search for
const patterns = {
  hexColors: /#[0-9a-fA-F]{3,8}\b/g,
  rgbaColors: /rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g,
  pixelValues: /:\s*['"]?\d+px['"]?/g,
  remValues: /:\s*['"]?\d+(\.\d+)?rem['"]?/g,
  fontWeights: /fontWeight:\s*\d{3}/g,
  borderRadius: /borderRadius:\s*['"]?\d+/g,
};

// Directories to scan
const dirsToScan = ['components', 'pages'];

// Files to exclude
const excludePatterns = [
  /node_modules/,
  /\.git/,
  /dist/,
  /build/,
  /design-system/,  // Design system is intentionally documenting values
  /\.refactored\./,  // Already refactored files
];

const results = {
  hexColors: [],
  rgbaColors: [],
  pixelValues: [],
  remValues: [],
  fontWeights: [],
  borderRadius: [],
};

let totalFiles = 0;
let filesWithIssues = 0;

/**
 * Check if file should be excluded
 */
function shouldExclude(filePath) {
  return excludePatterns.some(pattern => pattern.test(filePath));
}

/**
 * Scan a single file
 */
function scanFile(filePath) {
  if (shouldExclude(filePath)) return;
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  totalFiles++;
  const content = fs.readFileSync(filePath, 'utf8');
  let hasIssues = false;

  Object.entries(patterns).forEach(([key, pattern]) => {
    const matches = content.match(pattern);
    if (matches && matches.length > 0) {
      hasIssues = true;
      results[key].push({
        file: filePath,
        count: matches.length,
        examples: matches.slice(0, 3), // Show first 3 examples
      });
    }
  });

  if (hasIssues) filesWithIssues++;
}

/**
 * Recursively scan directory
 */
function scanDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else {
      scanFile(filePath);
    }
  });
}

/**
 * Print results
 */
function printResults() {
  console.log('\n' + '='.repeat(70));
  console.log('HARDCODED VALUES DETECTION REPORT');
  console.log('='.repeat(70) + '\n');

  console.log(`📊 Scanned ${totalFiles} files`);
  console.log(`⚠️  Found issues in ${filesWithIssues} files\n`);

  Object.entries(results).forEach(([category, items]) => {
    if (items.length === 0) {
      console.log(`✅ ${category}: No issues found`);
      return;
    }

    const totalMatches = items.reduce((sum, item) => sum + item.count, 0);
    console.log(`\n${'='.repeat(70)}`);
    console.log(`❌ ${category.toUpperCase()}: ${totalMatches} instances in ${items.length} files`);
    console.log('='.repeat(70));

    // Group by count and show top offenders
    const sorted = items.sort((a, b) => b.count - a.count).slice(0, 10);
    
    sorted.forEach((item, index) => {
      console.log(`\n${index + 1}. ${item.file}`);
      console.log(`   Count: ${item.count}`);
      console.log(`   Examples: ${item.examples.join(', ')}`);
    });
  });

  // Print recommendations
  console.log('\n' + '='.repeat(70));
  console.log('RECOMMENDATIONS');
  console.log('='.repeat(70));
  console.log(`
1. Replace hex colors with COLORS.* constants from @/constants/design-tokens
   Example: #5b5bd6 → COLORS.iris9

2. Replace pixel/rem values with SPACING.* constants
   Example: 16px → SPACING.gap1rem

3. Replace font weights with TYPOGRAPHY.fontWeight.* constants
   Example: fontWeight: 600 → fontWeight: TYPOGRAPHY.fontWeight.semiBold

4. Replace border radius with RADIUS.* constants
   Example: borderRadius: 8px → borderRadius: RADIUS.lg

5. See REFACTOR_IMPLEMENTATION_GUIDE.md for detailed migration guide
  `);

  // Priority files
  console.log('\n' + '='.repeat(70));
  console.log('HIGH PRIORITY FILES (Most Hardcoded Values)');
  console.log('='.repeat(70));

  const allFiles = [];
  Object.values(results).forEach(items => {
    items.forEach(item => {
      const existing = allFiles.find(f => f.file === item.file);
      if (existing) {
        existing.count += item.count;
      } else {
        allFiles.push({ file: item.file, count: item.count });
      }
    });
  });

  allFiles
    .sort((a, b) => b.count - a.count)
    .slice(0, 15)
    .forEach((item, index) => {
      console.log(`${index + 1}. ${item.file} (${item.count} issues)`);
    });

  console.log('\n' + '='.repeat(70) + '\n');
}

// Run the scanner
console.log('🔍 Scanning codebase for hardcoded values...\n');

dirsToScan.forEach(dir => {
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
});

printResults();

// Exit with error code if issues found
process.exit(filesWithIssues > 0 ? 1 : 0);

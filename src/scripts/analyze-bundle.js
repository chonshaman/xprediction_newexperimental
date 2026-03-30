#!/usr/bin/env node

/**
 * Bundle Size Analyzer
 * Analyzes the production build and provides insights on chunk sizes
 * Run after: npm run build
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[36m',
  magenta: '\x1b[35m',
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function getColor(size) {
  const kb = size / 1024;
  if (kb < 100) return colors.green;
  if (kb < 300) return colors.yellow;
  return colors.red;
}

function analyzeDistFolder() {
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.log(`${colors.red}Error: dist folder not found. Run 'npm run build' first.${colors.reset}`);
    process.exit(1);
  }

  console.log(`\n${colors.bright}${colors.blue}📦 Bundle Size Analysis${colors.reset}\n`);

  // Analyze assets folder
  const assetsPath = path.join(distPath, 'assets');
  
  if (!fs.existsSync(assetsPath)) {
    console.log(`${colors.red}Error: assets folder not found in dist.${colors.reset}`);
    return;
  }

  const files = fs.readdirSync(assetsPath);
  
  const chunks = {
    vendor: [],
    page: [],
    css: [],
    other: [],
  };

  let totalSize = 0;

  // Categorize files
  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;

    const fileInfo = { name: file, size };

    if (file.startsWith('vendor-')) {
      chunks.vendor.push(fileInfo);
    } else if (file.startsWith('page-') || file.startsWith('design-system') || file.includes('Sports') || file.includes('MarketDetails')) {
      chunks.page.push(fileInfo);
    } else if (file.endsWith('.css')) {
      chunks.css.push(fileInfo);
    } else {
      chunks.other.push(fileInfo);
    }
  });

  // Sort by size (largest first)
  Object.keys(chunks).forEach(key => {
    chunks[key].sort((a, b) => b.size - a.size);
  });

  // Display Vendor Chunks
  console.log(`${colors.bright}Vendor Chunks:${colors.reset}`);
  let vendorTotal = 0;
  chunks.vendor.forEach(file => {
    vendorTotal += file.size;
    const color = getColor(file.size);
    console.log(`  ${color}${file.name.padEnd(50)} ${formatBytes(file.size).padStart(12)}${colors.reset}`);
  });
  console.log(`  ${colors.bright}Total: ${formatBytes(vendorTotal)}${colors.reset}\n`);

  // Display Page Chunks
  console.log(`${colors.bright}Page Chunks (Lazy Loaded):${colors.reset}`);
  let pageTotal = 0;
  chunks.page.forEach(file => {
    pageTotal += file.size;
    const color = getColor(file.size);
    console.log(`  ${color}${file.name.padEnd(50)} ${formatBytes(file.size).padStart(12)}${colors.reset}`);
  });
  console.log(`  ${colors.bright}Total: ${formatBytes(pageTotal)}${colors.reset}\n`);

  // Display CSS Files
  console.log(`${colors.bright}CSS Files:${colors.reset}`);
  let cssTotal = 0;
  chunks.css.forEach(file => {
    cssTotal += file.size;
    const color = getColor(file.size);
    console.log(`  ${color}${file.name.padEnd(50)} ${formatBytes(file.size).padStart(12)}${colors.reset}`);
  });
  console.log(`  ${colors.bright}Total: ${formatBytes(cssTotal)}${colors.reset}\n`);

  // Display Other Files
  console.log(`${colors.bright}Other Files:${colors.reset}`);
  let otherTotal = 0;
  chunks.other.forEach(file => {
    otherTotal += file.size;
    const color = getColor(file.size);
    console.log(`  ${color}${file.name.padEnd(50)} ${formatBytes(file.size).padStart(12)}${colors.reset}`);
  });
  console.log(`  ${colors.bright}Total: ${formatBytes(otherTotal)}${colors.reset}\n`);

  // Summary
  console.log(`${colors.bright}${colors.magenta}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}Summary:${colors.reset}`);
  console.log(`  Total Bundle Size (uncompressed): ${colors.bright}${formatBytes(totalSize)}${colors.reset}`);
  
  // Estimate gzipped size (rough approximation: ~30% of original)
  const estimatedGzip = totalSize * 0.3;
  console.log(`  Estimated Gzipped Size: ${colors.bright}${formatBytes(estimatedGzip)}${colors.reset}`);
  
  // Initial load estimate (vendor + other - lazy loaded pages)
  const initialLoad = vendorTotal + otherTotal + cssTotal;
  console.log(`  Initial Load (excl. lazy pages): ${colors.bright}${formatBytes(initialLoad)}${colors.reset}`);
  console.log(`  Lazy Loaded Pages: ${colors.bright}${formatBytes(pageTotal)}${colors.reset}`);
  
  console.log(`${colors.bright}${colors.magenta}═══════════════════════════════════════════════════════════════${colors.reset}\n`);

  // Warnings
  const largeChunks = [...chunks.vendor, ...chunks.page, ...chunks.other].filter(f => f.size > 500 * 1024);
  if (largeChunks.length > 0) {
    console.log(`${colors.yellow}⚠️  Warning: Large chunks detected (>500KB):${colors.reset}`);
    largeChunks.forEach(file => {
      console.log(`  ${colors.yellow}${file.name} - ${formatBytes(file.size)}${colors.reset}`);
    });
    console.log('');
  }

  // Recommendations
  console.log(`${colors.bright}${colors.green}✅ Optimization Status:${colors.reset}`);
  
  if (chunks.page.length > 0) {
    console.log(`  ${colors.green}✓${colors.reset} Code splitting enabled (${chunks.page.length} lazy-loaded chunks)`);
  }
  
  if (chunks.vendor.length > 3) {
    console.log(`  ${colors.green}✓${colors.reset} Vendor code split into ${chunks.vendor.length} chunks for better caching`);
  }
  
  if (initialLoad < 1.5 * 1024 * 1024) {
    console.log(`  ${colors.green}✓${colors.reset} Initial load under 1.5MB (good for performance)`);
  } else {
    console.log(`  ${colors.yellow}⚠${colors.reset} Initial load over 1.5MB (consider more aggressive splitting)`);
  }
  
  if (estimatedGzip < 400 * 1024) {
    console.log(`  ${colors.green}✓${colors.reset} Estimated gzipped size under 400KB (excellent)`);
  }

  console.log('\n');

  // Check for stats.html
  const statsPath = path.join(distPath, 'stats.html');
  if (fs.existsSync(statsPath)) {
    console.log(`${colors.blue}📊 Bundle visualization available at: ${colors.bright}dist/stats.html${colors.reset}`);
    console.log(`${colors.blue}   Open it in your browser for detailed analysis.${colors.reset}\n`);
  }
}

// Run analysis
try {
  analyzeDistFolder();
} catch (error) {
  console.error(`${colors.red}Error analyzing bundle:${colors.reset}`, error.message);
  process.exit(1);
}

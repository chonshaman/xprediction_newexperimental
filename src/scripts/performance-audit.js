#!/usr/bin/env node

/**
 * Performance Audit Script for Design System
 * 
 * Analyzes:
 * - Bundle size impact
 * - Unused files
 * - Duplicate code
 * - Import optimization
 * - Hardcoded values
 * - Missing memoization
 * - TypeScript issues
 */

const fs = require('fs');
const path = require('path');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m',
};

const log = {
  error: (msg) => console.log(`${colors.red}${colors.bold}❌ ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}${colors.bold}✅ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}${colors.bold}⚠️  ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}${colors.bold}ℹ️  ${msg}${colors.reset}`),
  section: (msg) => console.log(`\n${colors.cyan}${colors.bold}${'='.repeat(60)}\n${msg}\n${'='.repeat(60)}${colors.reset}\n`),
};

// Analysis results
const results = {
  unusedFiles: [],
  duplicateCode: [],
  hardcodedValues: [],
  missingMemoization: [],
  largeFiles: [],
  inefficientImports: [],
  documentationFiles: [],
  totalFiles: 0,
  totalSize: 0,
};

// File size threshold (in KB)
const LARGE_FILE_THRESHOLD = 50;

// Patterns to detect
const patterns = {
  hardcodedColors: /#[0-9a-fA-F]{3,6}|rgb\(|rgba\(/g,
  hardcodedSizes: /\d+px(?!.*var\()/g,
  missingMemo: /export\s+(function|const)\s+\w+.*=.*\(.*\)\s*=>/g,
  inefficientImport: /import\s+\*\s+as/g,
};

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Skip node_modules
      if (file !== 'node_modules' && file !== '.git') {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Get file size in KB
 */
function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

/**
 * Analyze file for issues
 */
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const sizeKB = parseFloat(getFileSizeInKB(filePath));
  const ext = path.extname(filePath);

  results.totalFiles++;
  results.totalSize += sizeKB;

  // Check for documentation files
  if (ext === '.md') {
    results.documentationFiles.push({
      path: filePath,
      size: sizeKB,
    });
    return;
  }

  // Only analyze code files
  if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
    return;
  }

  // Check for large files
  if (sizeKB > LARGE_FILE_THRESHOLD) {
    results.largeFiles.push({
      path: filePath,
      size: sizeKB,
    });
  }

  // Check for hardcoded colors (excluding var() usage)
  const hardcodedColors = content.match(patterns.hardcodedColors);
  if (hardcodedColors) {
    const filtered = hardcodedColors.filter(color => {
      // Check if it's in actualValue or a comment
      const lines = content.split('\n');
      for (const line of lines) {
        if (line.includes(color)) {
          if (line.includes('actualValue') || line.includes('//') || line.includes('/*')) {
            return false;
          }
        }
      }
      return true;
    });
    
    if (filtered.length > 0) {
      results.hardcodedValues.push({
        path: filePath,
        type: 'colors',
        count: filtered.length,
        examples: filtered.slice(0, 3),
      });
    }
  }

  // Check for inefficient imports
  if (patterns.inefficientImport.test(content)) {
    results.inefficientImports.push({
      path: filePath,
      issue: 'Using import * as instead of named imports',
    });
  }

  // Check for missing React.memo on exported components
  if (filePath.includes('previews/') && ext === '.tsx') {
    const exportedFunctions = content.match(/export function \w+/g);
    const memoizedFunctions = content.match(/React\.memo/g);
    
    if (exportedFunctions && exportedFunctions.length > 0) {
      const memoCount = memoizedFunctions ? memoizedFunctions.length : 0;
      if (memoCount === 0) {
        results.missingMemoization.push({
          path: filePath,
          exportCount: exportedFunctions.length,
          memoCount: memoCount,
        });
      }
    }
  }
}

/**
 * Find duplicate code
 */
function findDuplicates() {
  // This is a simplified duplicate detection
  // In a real scenario, you'd use AST parsing
  log.info('Duplicate detection is simplified - manual review recommended');
}

/**
 * Find unused files
 */
function findUnusedFiles(allFiles) {
  const projectFiles = allFiles.filter(f => 
    ['.ts', '.tsx', '.js', '.jsx'].includes(path.extname(f)) &&
    !f.includes('node_modules')
  );

  // Check which files are imported
  const importedFiles = new Set();
  
  projectFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const importMatches = content.matchAll(/from ['"]([^'"]+)['"]/g);
    
    for (const match of importMatches) {
      const importPath = match[1];
      // Resolve relative imports
      if (importPath.startsWith('.')) {
        const resolvedPath = path.resolve(path.dirname(file), importPath);
        importedFiles.add(resolvedPath);
        importedFiles.add(resolvedPath + '.ts');
        importedFiles.add(resolvedPath + '.tsx');
        importedFiles.add(resolvedPath + '.js');
        importedFiles.add(resolvedPath + '.jsx');
      }
    }
  });

  // Find files that are never imported
  projectFiles.forEach(file => {
    // Skip entry points
    if (file.includes('App.tsx') || file.includes('main.tsx') || file.includes('index.tsx')) {
      return;
    }
    
    if (!importedFiles.has(file)) {
      results.unusedFiles.push(file);
    }
  });
}

/**
 * Generate report
 */
function generateReport() {
  log.section('PERFORMANCE AUDIT REPORT');

  // Summary
  console.log(`${colors.bold}📊 Summary${colors.reset}`);
  console.log(`Total Files Analyzed: ${results.totalFiles}`);
  console.log(`Total Size: ${results.totalSize.toFixed(2)} KB`);
  console.log('');

  // Large Files
  if (results.largeFiles.length > 0) {
    log.warning(`Found ${results.largeFiles.length} large files (>${LARGE_FILE_THRESHOLD}KB)`);
    results.largeFiles
      .sort((a, b) => b.size - a.size)
      .slice(0, 10)
      .forEach(file => {
        console.log(`  ${file.size} KB - ${file.path}`);
      });
    console.log('');
  } else {
    log.success('No large files found');
  }

  // Documentation Files
  if (results.documentationFiles.length > 0) {
    const docSize = results.documentationFiles.reduce((sum, f) => sum + f.size, 0);
    log.info(`Found ${results.documentationFiles.length} documentation files (${docSize.toFixed(2)} KB)`);
    console.log('  These should be excluded from production builds');
    console.log('');
  }

  // Hardcoded Values
  if (results.hardcodedValues.length > 0) {
    log.warning(`Found ${results.hardcodedValues.length} files with hardcoded values`);
    results.hardcodedValues.slice(0, 5).forEach(item => {
      console.log(`  ${item.path}`);
      console.log(`    Type: ${item.type}, Count: ${item.count}`);
      console.log(`    Examples: ${item.examples.join(', ')}`);
    });
    console.log('');
  } else {
    log.success('No hardcoded values found');
  }

  // Inefficient Imports
  if (results.inefficientImports.length > 0) {
    log.warning(`Found ${results.inefficientImports.length} files with inefficient imports`);
    results.inefficientImports.slice(0, 5).forEach(item => {
      console.log(`  ${item.path}`);
      console.log(`    ${item.issue}`);
    });
    console.log('');
  } else {
    log.success('All imports are optimized');
  }

  // Missing Memoization
  if (results.missingMemoization.length > 0) {
    log.warning(`Found ${results.missingMemoization.length} preview files without memoization`);
    results.missingMemoization.forEach(item => {
      console.log(`  ${item.path}`);
      console.log(`    ${item.exportCount} exported functions, ${item.memoCount} memoized`);
    });
    console.log('');
  } else {
    log.success('All components are properly memoized');
  }

  // Unused Files
  if (results.unusedFiles.length > 0) {
    log.warning(`Found ${results.unusedFiles.length} potentially unused files`);
    results.unusedFiles.slice(0, 10).forEach(file => {
      console.log(`  ${file}`);
    });
    console.log('');
  } else {
    log.success('No unused files detected');
  }

  // Recommendations
  log.section('🎯 OPTIMIZATION RECOMMENDATIONS');

  const recommendations = [];

  if (results.largeFiles.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      title: 'Split Large Files',
      description: `${results.largeFiles.length} files exceed ${LARGE_FILE_THRESHOLD}KB. Consider code-splitting.`,
    });
  }

  if (results.hardcodedValues.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      title: 'Replace Hardcoded Values',
      description: `${results.hardcodedValues.length} files contain hardcoded values. Use CSS variables instead.`,
    });
  }

  if (results.missingMemoization.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      title: 'Add Memoization',
      description: `${results.missingMemoization.length} preview components need React.memo for better performance.`,
    });
  }

  if (results.documentationFiles.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      title: 'Exclude Documentation from Build',
      description: `${results.documentationFiles.length} .md files should be excluded from production.`,
    });
  }

  if (results.inefficientImports.length > 0) {
    recommendations.push({
      priority: 'LOW',
      title: 'Optimize Imports',
      description: `${results.inefficientImports.length} files use wildcard imports. Use named imports for better tree-shaking.`,
    });
  }

  if (results.unusedFiles.length > 0) {
    recommendations.push({
      priority: 'LOW',
      title: 'Remove Unused Files',
      description: `${results.unusedFiles.length} files appear to be unused and can be safely removed.`,
    });
  }

  if (recommendations.length === 0) {
    log.success('No major optimization opportunities found! 🎉');
  } else {
    recommendations.forEach((rec, index) => {
      const priorityColor = rec.priority === 'HIGH' ? colors.red : 
                            rec.priority === 'MEDIUM' ? colors.yellow : 
                            colors.blue;
      console.log(`${index + 1}. ${priorityColor}[${rec.priority}]${colors.reset} ${colors.bold}${rec.title}${colors.reset}`);
      console.log(`   ${rec.description}`);
      console.log('');
    });
  }

  // Score
  log.section('📈 PERFORMANCE SCORE');
  let score = 100;
  
  score -= results.largeFiles.length * 5;
  score -= results.hardcodedValues.length * 3;
  score -= results.missingMemoization.length * 2;
  score -= results.inefficientImports.length * 1;
  score -= Math.min(results.unusedFiles.length * 1, 10);
  
  score = Math.max(0, score);
  
  const scoreColor = score >= 80 ? colors.green : 
                     score >= 60 ? colors.yellow : 
                     colors.red;
  
  console.log(`${scoreColor}${colors.bold}${score}/100${colors.reset}`);
  console.log('');
  
  if (score >= 80) {
    log.success('Excellent! Your codebase is well optimized.');
  } else if (score >= 60) {
    log.warning('Good, but there\'s room for improvement.');
  } else {
    log.error('Needs optimization. Follow the recommendations above.');
  }
}

/**
 * Main execution
 */
function main() {
  log.section('🚀 STARTING PERFORMANCE AUDIT');

  const rootDir = path.resolve(__dirname, '..');
  
  log.info('Scanning files...');
  const allFiles = getAllFiles(rootDir);
  
  log.info(`Found ${allFiles.length} total files`);
  log.info('Analyzing...');
  
  allFiles.forEach(file => {
    if (!file.includes('node_modules')) {
      analyzeFile(file);
    }
  });
  
  log.info('Finding unused files...');
  findUnusedFiles(allFiles);
  
  log.info('Checking for duplicates...');
  findDuplicates();
  
  generateReport();
}

// Run the audit
main();

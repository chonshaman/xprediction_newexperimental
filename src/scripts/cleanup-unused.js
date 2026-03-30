#!/usr/bin/env node

/**
 * Cleanup Unused Files Script
 * 
 * Identifies and optionally removes unused files from the project.
 * RUNS IN DRY-RUN MODE BY DEFAULT - use --execute to actually delete files.
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

// Get command line arguments
const args = process.argv.slice(2);
const isDryRun = !args.includes('--execute');
const isVerbose = args.includes('--verbose');

console.log(`\n${colors.blue}${colors.bold}🧹 Cleanup Unused Files${colors.reset}`);
console.log(`${colors.yellow}Mode: ${isDryRun ? 'DRY RUN (no files will be deleted)' : 'EXECUTE (files will be deleted)'}${colors.reset}\n`);

// Files/patterns to potentially remove
const unusedFiles = {
  redundantScripts: [
    '/scripts/sync-design-system.js', // Keep only the new version
    '/scripts/auto-breakdown-generator.js', // If not used
    '/scripts/generate-preview-components.js', // If not used
  ],
  backupFiles: [
    // Add any .bak, .old, .backup files
  ],
  tempFiles: [
    // Add any .tmp, .temp files
  ],
};

// Directories to check
const dirsToCheck = [
  path.resolve(__dirname, '../components/design-system'),
  path.resolve(__dirname, '../scripts'),
];

let totalFound = 0;
let totalSize = 0;

/**
 * Check if file exists and get its size
 */
function checkFile(filePath) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    return { exists: true, size: parseFloat(sizeKB) };
  }
  return { exists: false, size: 0 };
}

/**
 * Find files matching patterns
 */
function findFilesByPattern(dir, patterns) {
  const found = [];
  
  if (!fs.existsSync(dir)) {
    return found;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Recursively check subdirectories
      found.push(...findFilesByPattern(filePath, patterns));
    } else {
      // Check if file matches any pattern
      patterns.forEach(pattern => {
        if (file.match(pattern)) {
          const sizeKB = (stats.size / 1024).toFixed(2);
          found.push({ path: filePath, size: parseFloat(sizeKB) });
        }
      });
    }
  });
  
  return found;
}

/**
 * Delete file
 */
function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    return true;
  } catch (error) {
    console.error(`  ${colors.red}✗ Error deleting ${filePath}: ${error.message}${colors.reset}`);
    return false;
  }
}

// Check redundant scripts
console.log(`${colors.bold}Checking Redundant Scripts:${colors.reset}`);
unusedFiles.redundantScripts.forEach(file => {
  const fullPath = path.resolve(__dirname, '..', file);
  const result = checkFile(fullPath);
  
  if (result.exists) {
    totalFound++;
    totalSize += result.size;
    console.log(`  ${colors.yellow}⊗${colors.reset} ${file} (${result.size} KB)`);
    
    if (!isDryRun) {
      if (deleteFile(fullPath)) {
        console.log(`    ${colors.green}✓ Deleted${colors.reset}`);
      }
    }
  } else if (isVerbose) {
    console.log(`  ${colors.green}✓${colors.reset} ${file} (already removed)`);
  }
});

// Check for backup files
console.log(`\n${colors.bold}Checking for Backup Files:${colors.reset}`);
const backupPatterns = [/\.bak$/, /\.old$/, /\.backup$/, /~$/];
dirsToCheck.forEach(dir => {
  const backups = findFilesByPattern(dir, backupPatterns);
  
  if (backups.length > 0) {
    backups.forEach(file => {
      totalFound++;
      totalSize += file.size;
      console.log(`  ${colors.yellow}⊗${colors.reset} ${file.path} (${file.size} KB)`);
      
      if (!isDryRun) {
        if (deleteFile(file.path)) {
          console.log(`    ${colors.green}✓ Deleted${colors.reset}`);
        }
      }
    });
  } else {
    console.log(`  ${colors.green}✓ No backup files found${colors.reset}`);
  }
});

// Check for temp files
console.log(`\n${colors.bold}Checking for Temp Files:${colors.reset}`);
const tempPatterns = [/\.tmp$/, /\.temp$/, /^~/, /\.swp$/];
dirsToCheck.forEach(dir => {
  const temps = findFilesByPattern(dir, tempPatterns);
  
  if (temps.length > 0) {
    temps.forEach(file => {
      totalFound++;
      totalSize += file.size;
      console.log(`  ${colors.yellow}⊗${colors.reset} ${file.path} (${file.size} KB)`);
      
      if (!isDryRun) {
        if (deleteFile(file.path)) {
          console.log(`    ${colors.green}✓ Deleted${colors.reset}`);
        }
      }
    });
  } else {
    console.log(`  ${colors.green}✓ No temp files found${colors.reset}`);
  }
});

// Check for large log files
console.log(`\n${colors.bold}Checking for Large Log Files:${colors.reset}`);
const logPatterns = [/\.log$/];
dirsToCheck.forEach(dir => {
  const logs = findFilesByPattern(dir, logPatterns);
  
  if (logs.length > 0) {
    logs.forEach(file => {
      if (file.size > 100) { // Only flag logs > 100KB
        totalFound++;
        totalSize += file.size;
        console.log(`  ${colors.yellow}⊗${colors.reset} ${file.path} (${file.size} KB)`);
        
        if (!isDryRun) {
          if (deleteFile(file.path)) {
            console.log(`    ${colors.green}✓ Deleted${colors.reset}`);
          }
        }
      }
    });
  } else {
    console.log(`  ${colors.green}✓ No large log files found${colors.reset}`);
  }
});

// Summary
console.log(`\n${colors.bold}Summary:${colors.reset}`);
console.log(`  Files identified: ${totalFound}`);
console.log(`  Total size: ${totalSize.toFixed(2)} KB`);

if (isDryRun && totalFound > 0) {
  console.log(`\n${colors.yellow}ℹ️  This was a dry run. No files were deleted.${colors.reset}`);
  console.log(`${colors.yellow}   To delete these files, run: node scripts/cleanup-unused.js --execute${colors.reset}`);
} else if (!isDryRun) {
  console.log(`\n${colors.green}✅ Cleanup complete!${colors.reset}`);
} else {
  console.log(`\n${colors.green}✅ No unused files found!${colors.reset}`);
}

console.log('');

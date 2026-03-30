#!/usr/bin/env node

/**
 * Design System Sync Script
 * 
 * This script ensures consistency across all components when core atomic variables change.
 * It validates and syncs design system properties across button components and other UI elements.
 * 
 * Usage:
 *   node scripts/sync-design-system.js [--check|--fix|--verbose]
 * 
 * Options:
 *   --check    Check for inconsistencies without making changes
 *   --fix      Automatically fix inconsistencies
 *   --verbose  Show detailed logging
 */

const fs = require('fs');
const path = require('path');

// Design system rules based on /styles/globals.css
const DESIGN_SYSTEM_RULES = {
  buttons: {
    // All button variants should have font-semibold
    fontWeight: 'font-semibold',
    // All buttons should use CSS variables for styling
    requiredCSSVars: [
      '--primary-button-bg',
      '--primary-button-fg',
      '--radius-button',
      '--secondary',
      '--border'
    ],
    // Button components to check
    components: [
      'components/PrimaryButton.tsx',
      'components/ui/button.tsx',
      'components/BuySellBlock/BuyButton.tsx',
      'components/BuySellBlock/OutcomeButton.tsx'
    ]
  },
  typography: {
    // Only use Inter and Kanit font families
    allowedFonts: ['Inter', 'Kanit'],
    disallowedClasses: [
      'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl',
      'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-bold', 'font-extrabold', 'font-black',
      'leading-3', 'leading-4', 'leading-5', 'leading-6', 'leading-7', 'leading-8', 'leading-9', 'leading-10'
    ]
  },
  colors: {
    // All colors should use CSS variables
    requiredCSSVars: [
      '--background',
      '--foreground',
      '--card-normal',
      '--card-hover',
      '--primary',
      '--secondary',
      '--accent',
      '--muted-foreground',
      '--border'
    ]
  },
  spacing: {
    // All spacing should use CSS variables or standard Tailwind
    requiredCSSVars: [
      '--spacing-4',
      '--spacing-8',
      '--spacing-12',
      '--spacing-16'
    ]
  },
  radius: {
    // All border radius should use CSS variables
    requiredCSSVars: [
      '--radius-button',
      '--radius-card',
      '--radius-input'
    ]
  }
};

// Parse command line arguments
const args = process.argv.slice(2);
const mode = args.includes('--fix') ? 'fix' : 'check';
const verbose = args.includes('--verbose');

let issues = [];
let fixedCount = 0;

function log(message, level = 'info') {
  if (level === 'error') {
    console.error(`❌ ${message}`);
  } else if (level === 'warn') {
    console.warn(`⚠️  ${message}`);
  } else if (level === 'success') {
    console.log(`✅ ${message}`);
  } else if (verbose || level === 'important') {
    console.log(`ℹ️  ${message}`);
  }
}

function checkFileExists(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  return fs.existsSync(fullPath);
}

function readFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  try {
    return fs.readFileSync(fullPath, 'utf-8');
  } catch (error) {
    log(`Failed to read ${filePath}: ${error.message}`, 'error');
    return null;
  }
}

function writeFile(filePath, content) {
  const fullPath = path.join(process.cwd(), filePath);
  try {
    fs.writeFileSync(fullPath, content, 'utf-8');
    return true;
  } catch (error) {
    log(`Failed to write ${filePath}: ${error.message}`, 'error');
    return false;
  }
}

function checkButtonFontWeight(filePath, content) {
  const componentIssues = [];
  
  // Check if font-semibold is present in className strings
  const classNamePattern = /className\s*=\s*[`"']([^`"']*)[`"']/g;
  const matches = [...content.matchAll(classNamePattern)];
  
  let hasButtonElement = false;
  let hasFontSemibold = false;
  
  // Check if this is a button component
  if (content.includes('button') || content.includes('Button')) {
    hasButtonElement = true;
  }
  
  // Check if font-semibold is used
  matches.forEach(match => {
    if (match[1].includes('font-semibold')) {
      hasFontSemibold = true;
    }
  });
  
  if (hasButtonElement && !hasFontSemibold) {
    componentIssues.push({
      file: filePath,
      type: 'button-font-weight',
      message: 'Button component missing font-semibold class',
      severity: 'warn'
    });
  }
  
  return componentIssues;
}

function checkCSSVariableUsage(filePath, content) {
  const componentIssues = [];
  
  // Check for hardcoded colors (hex codes)
  const hexColorPattern = /#[0-9a-fA-F]{3,8}(?![0-9a-fA-F])/g;
  const hexMatches = [...content.matchAll(hexColorPattern)];
  
  // Exclude gradient definitions and SVG paths
  const validHexUsages = [
    'paint0_radial',
    'paint1_linear',
    'paint2_linear',
    'stopColor',
    'url(#'
  ];
  
  hexMatches.forEach(match => {
    const index = match.index;
    const context = content.substring(Math.max(0, index - 50), index + 50);
    const isValidUsage = validHexUsages.some(usage => context.includes(usage));
    
    if (!isValidUsage) {
      componentIssues.push({
        file: filePath,
        type: 'hardcoded-color',
        message: `Found hardcoded color: ${match[0]}`,
        severity: 'warn',
        line: content.substring(0, index).split('\n').length
      });
    }
  });
  
  return componentIssues;
}

function checkTypographyClasses(filePath, content) {
  const componentIssues = [];
  const disallowedClasses = DESIGN_SYSTEM_RULES.typography.disallowedClasses;
  
  // Check for disallowed typography classes
  const classNamePattern = /className\s*=\s*[`"']([^`"']*)[`"']/g;
  const matches = [...content.matchAll(classNamePattern)];
  
  matches.forEach(match => {
    const classes = match[1].split(/\s+/);
    classes.forEach(cls => {
      if (disallowedClasses.includes(cls)) {
        const index = match.index;
        componentIssues.push({
          file: filePath,
          type: 'typography-class',
          message: `Found disallowed typography class: ${cls}. Use CSS variables from globals.css instead.`,
          severity: 'warn',
          line: content.substring(0, index).split('\n').length
        });
      }
    });
  });
  
  return componentIssues;
}

function fixButtonFontWeight(filePath, content) {
  let fixed = false;
  
  // Add font-semibold to button className if missing
  const classNamePattern = /className\s*=\s*([`"'])([^`"']*)\1/g;
  const newContent = content.replace(classNamePattern, (match, quote, classes) => {
    // Check if this is a button-related className
    if ((classes.includes('button') || classes.includes('cursor-pointer')) && 
        !classes.includes('font-semibold') &&
        !classes.includes('font-medium') &&
        !classes.includes('font-')) {
      fixed = true;
      return `className=${quote}${classes} font-semibold${quote}`;
    }
    return match;
  });
  
  if (fixed) {
    writeFile(filePath, newContent);
    fixedCount++;
    log(`Fixed font weight in ${filePath}`, 'success');
  }
  
  return fixed;
}

function checkComponent(filePath) {
  if (!checkFileExists(filePath)) {
    log(`File not found: ${filePath}`, 'warn');
    return;
  }
  
  const content = readFile(filePath);
  if (!content) return;
  
  log(`Checking ${filePath}`, 'info');
  
  // Run all checks
  const buttonIssues = checkButtonFontWeight(filePath, content);
  const cssVarIssues = checkCSSVariableUsage(filePath, content);
  const typographyIssues = checkTypographyClasses(filePath, content);
  
  const allIssues = [...buttonIssues, ...cssVarIssues, ...typographyIssues];
  
  if (allIssues.length > 0) {
    issues.push(...allIssues);
    
    // Try to fix if in fix mode
    if (mode === 'fix') {
      fixButtonFontWeight(filePath, content);
    }
  } else {
    log(`No issues found in ${filePath}`, 'success');
  }
}

function scanDirectory(dirPath, pattern = /\.tsx?$/) {
  const fullPath = path.join(process.cwd(), dirPath);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  const files = [];
  
  function scanRecursive(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanRecursive(itemPath);
      } else if (stat.isFile() && pattern.test(item)) {
        files.push(path.relative(process.cwd(), itemPath));
      }
    });
  }
  
  scanRecursive(fullPath);
  return files;
}

function main() {
  console.log('\n🎨 Design System Sync Script\n');
  console.log(`Mode: ${mode === 'fix' ? 'FIX' : 'CHECK'}`);
  console.log(`Verbose: ${verbose ? 'ON' : 'OFF'}\n`);
  
  // Check button components
  log('Checking button components...', 'important');
  DESIGN_SYSTEM_RULES.buttons.components.forEach(filePath => {
    checkComponent(filePath);
  });
  
  // Scan all components for issues
  log('\nScanning all components...', 'important');
  const allComponents = scanDirectory('components');
  allComponents.forEach(filePath => {
    if (!DESIGN_SYSTEM_RULES.buttons.components.includes(filePath)) {
      checkComponent(filePath);
    }
  });
  
  // Report results
  console.log('\n' + '='.repeat(60));
  
  if (issues.length === 0) {
    console.log('✅ No issues found! Design system is consistent.');
  } else {
    console.log(`\nFound ${issues.length} issue(s):\n`);
    
    const groupedIssues = issues.reduce((acc, issue) => {
      if (!acc[issue.file]) {
        acc[issue.file] = [];
      }
      acc[issue.file].push(issue);
      return acc;
    }, {});
    
    Object.entries(groupedIssues).forEach(([file, fileIssues]) => {
      console.log(`\n📄 ${file}`);
      fileIssues.forEach(issue => {
        const prefix = issue.severity === 'error' ? '  ❌' : '  ⚠️ ';
        const lineInfo = issue.line ? ` (line ${issue.line})` : '';
        console.log(`${prefix} ${issue.type}: ${issue.message}${lineInfo}`);
      });
    });
    
    if (mode === 'fix') {
      console.log(`\n✅ Fixed ${fixedCount} issue(s) automatically.`);
      console.log('⚠️  Some issues may require manual fixing.');
    } else {
      console.log('\n💡 Run with --fix to automatically fix some issues.');
    }
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  // Exit with error code if issues found and in check mode
  if (mode === 'check' && issues.length > 0) {
    process.exit(1);
  }
}

// Run the script
main();

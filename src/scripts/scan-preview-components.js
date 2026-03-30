#!/usr/bin/env node

/**
 * Preview Component Scanner for Modular Design System
 * 
 * Scans preview component files to extract CSS properties and updates
 * the variants.ts file with accurate CSS documentation.
 * 
 * Works with:
 * - /components/design-system/previews/*.tsx
 * - /components/design-system/data/variants.ts
 */

const fs = require('fs');
const path = require('path');

// Paths
const PREVIEWS_DIR = path.join(__dirname, '../components/design-system/previews');
const VARIANTS_FILE = path.join(__dirname, '../components/design-system/data/variants.ts');
const COMPONENTS_DIR = path.join(__dirname, '../components');

// CSS Variable patterns to extract
const CSS_VAR_PATTERNS = {
  // Colors
  background: /background:\s*['"`]([^'"`]+)['"`]/g,
  backgroundColor: /backgroundColor:\s*['"`]([^'"`]+)['"`]/g,
  color: /color:\s*['"`]([^'"`]+)['"`]/g,
  borderColor: /borderColor:\s*['"`]([^'"`]+)['"`]/g,
  
  // Borders
  border: /border:\s*['"`]([^'"`]+)['"`]/g,
  borderRadius: /borderRadius:\s*['"`]([^'"`]+)['"`]/g,
  
  // Spacing
  padding: /padding:\s*['"`]([^'"`]+)['"`]/g,
  paddingTop: /paddingTop:\s*['"`]([^'"`]+)['"`]/g,
  paddingBottom: /paddingBottom:\s*['"`]([^'"`]+)['"`]/g,
  paddingLeft: /paddingLeft:\s*['"`]([^'"`]+)['"`]/g,
  paddingRight: /paddingRight:\s*['"`]([^'"`]+)['"`]/g,
  margin: /margin:\s*['"`]([^'"`]+)['"`]/g,
  gap: /gap:\s*['"`]([^'"`]+)['"`]/g,
  
  // Typography
  fontSize: /fontSize:\s*['"`]([^'"`]+)['"`]/g,
  fontWeight: /fontWeight:\s*['"`]([^'"`]+)['"`]/g,
  fontFamily: /fontFamily:\s*['"`]([^'"`]+)['"`]/g,
  lineHeight: /lineHeight:\s*['"`]([^'"`]+)['"`]/g,
  
  // Layout
  width: /width:\s*['"`]([^'"`]+)['"`]/g,
  height: /height:\s*['"`]([^'"`]+)['"`]/g,
  minWidth: /minWidth:\s*['"`]([^'"`]+)['"`]/g,
  maxWidth: /maxWidth:\s*['"`]([^'"`]+)['"`]/g,
  minHeight: /minHeight:\s*['"`]([^'"`]+)['"`]/g,
  aspectRatio: /aspectRatio:\s*['"`]([^'"`]+)['"`]/g,
  
  // Effects
  boxShadow: /boxShadow:\s*['"`]([^'"`]+)['"`]/g,
  opacity: /opacity:\s*['"`]?([^'"`\s,}]+)['"`]?/g,
  transform: /transform:\s*['"`]([^'"`]+)['"`]/g,
  backdropFilter: /backdropFilter:\s*['"`]([^'"`]+)['"`]/g,
  
  // Other
  outline: /outline:\s*['"`]([^'"`]+)['"`]/g,
  outlineOffset: /outlineOffset:\s*['"`]([^'"`]+)['"`]/g,
  cursor: /cursor:\s*['"`]([^'"`]+)['"`]/g,
};

/**
 * Extract CSS properties from preview component code
 */
function extractCSSProperties(code, functionName) {
  const properties = [];
  const seen = new Set();
  
  // Find the function body
  const funcRegex = new RegExp(`export\\s+function\\s+${functionName}\\s*\\([^)]*\\)\\s*{([^]+?)}\\s*(?:export|$)`, 's');
  const funcMatch = code.match(funcRegex);
  
  if (!funcMatch) {
    return properties;
  }
  
  const functionBody = funcMatch[1];
  
  // Extract inline style objects
  const styleRegex = /style\s*=\s*\{\s*{([^}]+(?:{[^}]*}[^}]*)*)}\s*}/gs;
  let styleMatch;
  
  while ((styleMatch = styleRegex.exec(functionBody)) !== null) {
    const styleBlock = styleMatch[1];
    
    // Extract each CSS property
    for (const [propName, pattern] of Object.entries(CSS_VAR_PATTERNS)) {
      pattern.lastIndex = 0;
      let match;
      
      while ((match = pattern.exec(styleBlock)) !== null) {
        const value = match[1];
        const key = `${propName}:${value}`;
        
        if (!seen.has(key)) {
          seen.add(key);
          
          // Resolve CSS variable to actual value
          const actualValue = resolveCSSVariable(value);
          
          properties.push({
            name: propName,
            value: value,
            actualValue: actualValue !== value ? actualValue : undefined
          });
        }
      }
    }
  }
  
  return properties;
}

/**
 * Resolve CSS variable to its actual value from globals.css
 */
function resolveCSSVariable(value) {
  if (!value.includes('var(--')) {
    return value;
  }
  
  // Extract variable name
  const varMatch = value.match(/var\(--([^)]+)\)/);
  if (!varMatch) return value;
  
  const varName = varMatch[1];
  
  // Known mappings from globals.css
  const cssVariables = {
    // Lum colors
    'lum-01': '#ffffff (light) / #0f1112 (dark)',
    'lum-02': '#fffefc (light) / #232b30 (dark)',
    'lum-03': '#e6eff2 (light) / #293336 (dark)',
    
    // Gradients
    'card-normal': 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)',
    'card-hover': 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)',
    
    // Black alpha
    'black-a1': '#0000000d (5% opacity)',
    'black-a2': '#0000001a (10% opacity)',
    'black-a3': '#00000026 (15% opacity)',
    
    // Spacing
    'gap--0-25rem': '4px',
    'gap--0-5rem': '8px',
    'gap--0-75rem': '12px',
    'gap--1rem': '16px',
    'gap--1-25rem': '20px',
    'gap--1-5rem': '24px',
    'gap--2rem': '32px',
    
    // Border radius
    'border-radius--0-375rem': '6px',
    'border-radius--0-5rem': '8px',
    'border-radius--0-75rem': '12px',
    'border-radius--1rem': '16px',
    'radius-card': 'var(--border-radius--0-5rem) = 8px',
    'radius-button': 'var(--border-radius--0-5rem) = 8px',
    'radius-input': 'var(--border-radius--0-375rem) = 6px',
    
    // Typography
    'text-sm': '12px',
    'text-base': '16px',
    'text-lg': '18px',
    'text-xl': '20px',
    'text-2xl': '24px',
    'text-3xl': '30px',
    'font-weight-medium': '500',
    'font-weight-semi-bold': '600',
    'font-weight-bold': '700',
    'font-weight-extra-bold': '800',
    
    // Colors
    'iris-9': '#5b5bd6',
    'iris-10': '#5151cd',
    'iris-11': '#5b5bd6',
    'red-8': '#e5484d',
    'red-9': '#dc3d43',
    'chart-1': '#30a46c',
    'chart-2': '#e5484d',
    'chart-1-hover': '#2b9a66',
    'chart-2-hover': '#dc3d43',
    
    // Text colors
    'card-foreground': 'var(--slate-950) = #020617ff',
    'muted-foreground': 'var(--slate-500) = #64748bff',
    'primary-foreground': 'var(--slate-50) = #f8fafcff',
    
    // Shadows
    'shadow-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    'shadow-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.1)',
    
    // Primary button
    'primary-button-bg': 'var(--iris-9)',
    'primary-button-bg-hover': 'var(--iris-10)',
  };
  
  const resolved = cssVariables[varName];
  return resolved ? resolved : value;
}

/**
 * Scan all preview files
 */
function scanPreviewFiles() {
  console.log('🔍 Scanning preview components...\n');
  
  const results = {};
  
  const previewFiles = fs.readdirSync(PREVIEWS_DIR)
    .filter(file => file.endsWith('.tsx') && file !== 'index.ts');
  
  for (const file of previewFiles) {
    const filePath = path.join(PREVIEWS_DIR, file);
    const code = fs.readFileSync(filePath, 'utf-8');
    
    console.log(`📄 Scanning ${file}...`);
    
    // Extract all exported function names
    const exportRegex = /export\s+function\s+(\w+)\s*\(/g;
    let match;
    
    const fileResults = {};
    
    while ((match = exportRegex.exec(code)) !== null) {
      const functionName = match[1];
      const properties = extractCSSProperties(code, functionName);
      
      if (properties.length > 0) {
        fileResults[functionName] = properties;
        console.log(`  ✓ ${functionName}: ${properties.length} properties`);
      }
    }
    
    results[file] = fileResults;
  }
  
  return results;
}

/**
 * Generate CSS vars array for a component
 */
function generateCSSVarsArray(properties) {
  if (!properties || properties.length === 0) {
    return '[{ name: "background", value: "var(--card-normal)" }]';
  }
  
  const cssVars = properties.map(prop => {
    const obj = {
      name: prop.name,
      value: prop.value
    };
    
    if (prop.actualValue) {
      obj.actualValue = prop.actualValue;
    }
    
    return obj;
  });
  
  return JSON.stringify(cssVars, null, 2)
    .replace(/"([^"]+)":/g, '$1:')  // Remove quotes from keys
    .replace(/: "([^"]+)"/g, ': \'$1\'');  // Use single quotes for values
}

/**
 * Generate report
 */
function generateReport(results) {
  console.log('\n📊 Scan Complete!\n');
  console.log('=' .repeat(60));
  
  let totalComponents = 0;
  let totalProperties = 0;
  
  for (const [file, fileResults] of Object.entries(results)) {
    console.log(`\n📦 ${file}`);
    
    for (const [funcName, properties] of Object.entries(fileResults)) {
      totalComponents++;
      totalProperties += properties.length;
      
      console.log(`\n  🎨 ${funcName}`);
      console.log('  ' + '-'.repeat(50));
      
      properties.forEach(prop => {
        console.log(`  • ${prop.name}: ${prop.value}`);
        if (prop.actualValue) {
          console.log(`    → ${prop.actualValue}`);
        }
      });
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`\n✨ Summary:`);
  console.log(`   Components scanned: ${totalComponents}`);
  console.log(`   CSS properties found: ${totalProperties}`);
  console.log(`   Average properties per component: ${(totalProperties / totalComponents).toFixed(1)}`);
  console.log('');
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting Preview Component Scanner\n');
  console.log('Target: /components/design-system/previews/\n');
  
  try {
    const results = scanPreviewFiles();
    generateReport(results);
    
    // Save results to JSON for reference
    const outputPath = path.join(__dirname, 'preview-scan-results.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`💾 Results saved to: ${outputPath}\n`);
    
    console.log('✅ Scan complete! Use these results to update variants.ts\n');
    
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

module.exports = { 
  extractCSSProperties, 
  resolveCSSVariable,
  scanPreviewFiles,
  generateCSSVarsArray
};

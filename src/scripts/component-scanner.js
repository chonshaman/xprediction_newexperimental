/**
 * Advanced Component Scanner
 * 
 * Scans component files to extract:
 * - All variants (from cva definitions)
 * - All sizes  
 * - All props and default values
 * - CSS class mappings
 * - Component render functions
 */

const fs = require('fs');
const path = require('path');

/**
 * Extract variants from component file
 */
function extractVariants(content) {
  const variants = {};
  
  // Match cva() variant definitions
  const cvaRegex = /cva\([^,]+,\s*{[^}]*variants:\s*{([^}]+(?:{[^}]*}[^}]*)*)}[^}]*}/s;
  const match = content.match(cvaRegex);
  
  if (!match) return variants;
  
  const variantsBlock = match[1];
  
  // Extract each variant type (variant, size, etc.)
  const variantTypeRegex = /(\w+):\s*{([^}]+(?:{[^}]*}[^}]*)*)}/g;
  let typeMatch;
  
  while ((typeMatch = variantTypeRegex.exec(variantsBlock)) !== null) {
    const [, typeName, typeContent] = typeMatch;
    variants[typeName] = {};
    
    // Extract variant options
    const optionRegex = /(\w+):\s*["']([^"']+)["']/g;
    let optionMatch;
    
    while ((optionMatch = optionRegex.exec(typeContent)) !== null) {
      const [, optionName, classes] = optionMatch;
      variants[typeName][optionName] = classes;
    }
  }
  
  return variants;
}

/**
 * Extract default variants
 */
function extractDefaultVariants(content) {
  const defaults = {};
  
  const defaultsRegex = /defaultVariants:\s*{([^}]+)}/;
  const match = content.match(defaultsRegex);
  
  if (!match) return defaults;
  
  const defaultsBlock = match[1];
  const pairRegex = /(\w+):\s*["'](\w+)["']/g;
  let pairMatch;
  
  while ((pairMatch = pairRegex.exec(defaultsBlock)) !== null) {
    const [, key, value] = pairMatch;
    defaults[key] = value;
  }
  
  return defaults;
}

/**
 * Extract Tailwind classes and convert to CSS properties
 */
function parseTailwindClasses(classString) {
  const properties = {};
  const classes = classString.split(/\s+/);
  
  const tailwindMap = {
    // Heights
    'h-8': { height: '32px' },
    'h-9': { height: '36px' },
    'h-10': { height: '40px' },
    'h-11': { height: '44px' },
    'h-12': { height: '48px' },
    
    // Padding X
    'px-2': { 'padding-x': '8px' },
    'px-2.5': { 'padding-x': '10px' },
    'px-3': { 'padding-x': '12px' },
    'px-4': { 'padding-x': '16px' },
    'px-5': { 'padding-x': '20px' },
    'px-6': { 'padding-x': '24px' },
    
    // Padding Y
    'py-1': { 'padding-y': '4px' },
    'py-2': { 'padding-y': '8px' },
    'py-3': { 'padding-y': '12px' },
    
    // Gap
    'gap-1': { gap: '4px' },
    'gap-1.5': { gap: '6px' },
    'gap-2': { gap: '8px' },
    'gap-3': { gap: '12px' },
    'gap-4': { gap: '16px' },
    
    // Font
    'text-xs': { 'font-size': '12px' },
    'text-sm': { 'font-size': '14px' },
    'text-base': { 'font-size': '16px' },
    'text-lg': { 'font-size': '18px' },
    'font-medium': { 'font-weight': '500' },
    'font-semibold': { 'font-weight': '600' },
    'font-bold': { 'font-weight': '700' },
    
    // Border Radius
    'rounded': { 'border-radius': '4px' },
    'rounded-md': { 'border-radius': '6px' },
    'rounded-lg': { 'border-radius': '8px' },
    'rounded-full': { 'border-radius': '9999px' },
  };
  
  classes.forEach(cls => {
    if (tailwindMap[cls]) {
      Object.assign(properties, tailwindMap[cls]);
    }
  });
  
  return properties;
}

/**
 * Detect component type from file content
 */
function detectComponentType(fileName, content) {
  const name = fileName.replace('.tsx', '').toLowerCase();
  
  // Direct matches
  const typeMap = {
    'button': 'button',
    'input': 'input',
    'select': 'select',
    'checkbox': 'checkbox',
    'switch': 'switch',
    'badge': 'badge',
    'avatar': 'avatar',
    'card': 'card',
    'tabs': 'tabs',
    'alert': 'alert',
    'slider': 'slider',
    'progress': 'progress',
    'separator': 'separator',
  };
  
  return typeMap[name] || 'unknown';
}

/**
 * Full component analysis
 */
function analyzeComponent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  const componentType = detectComponentType(fileName, content);
  
  // Extract data
  const variants = extractVariants(content);
  const defaults = extractDefaultVariants(content);
  
  // Parse variant classes to CSS
  const parsedVariants = {};
  
  Object.keys(variants).forEach(variantType => {
    parsedVariants[variantType] = {};
    
    Object.keys(variants[variantType]).forEach(variantName => {
      const classes = variants[variantType][variantName];
      parsedVariants[variantType][variantName] = {
        classes: classes,
        css: parseTailwindClasses(classes),
      };
    });
  });
  
  return {
    fileName,
    componentType,
    variants: parsedVariants,
    defaults,
    raw: variants,
  };
}

/**
 * Scan all components in directory
 */
function scanAllComponents(directory) {
  const components = [];
  
  if (!fs.existsSync(directory)) {
    console.error(`Directory not found: ${directory}`);
    return components;
  }
  
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    
    const filePath = path.join(directory, file);
    
    try {
      const analysis = analyzeComponent(filePath);
      components.push(analysis);
    } catch (error) {
      console.error(`Error analyzing ${file}:`, error.message);
    }
  });
  
  return components;
}

/**
 * Generate summary report
 */
function generateReport(components) {
  console.log('\n' + '='.repeat(70));
  console.log('📊 COMPONENT ANALYSIS REPORT');
  console.log('='.repeat(70) + '\n');
  
  components.forEach(comp => {
    console.log(`📦 ${comp.fileName} (${comp.componentType})`);
    
    Object.keys(comp.variants).forEach(variantType => {
      const variantCount = Object.keys(comp.variants[variantType]).length;
      console.log(`   ├─ ${variantType}: ${variantCount} options`);
      
      Object.keys(comp.variants[variantType]).forEach((name, idx, arr) => {
        const isLast = idx === arr.length - 1;
        const prefix = isLast ? '   └──' : '   ├──';
        console.log(`${prefix} ${name}`);
      });
    });
    
    if (Object.keys(comp.defaults).length > 0) {
      console.log(`   └─ defaults: ${JSON.stringify(comp.defaults)}`);
    }
    
    console.log('');
  });
  
  console.log('='.repeat(70));
  console.log(`Total components analyzed: ${components.length}`);
  console.log('='.repeat(70) + '\n');
}

// ==================== Main ====================

function main() {
  const directory = process.argv[2] || './components/ui';
  
  console.log('🔍 Component Scanner v1.0\n');
  console.log(`Scanning directory: ${directory}\n`);
  
  const components = scanAllComponents(directory);
  
  if (components.length === 0) {
    console.log('No components found.');
    return;
  }
  
  generateReport(components);
  
  // Optionally save to JSON
  const outputPath = './component-analysis.json';
  fs.writeFileSync(outputPath, JSON.stringify(components, null, 2));
  console.log(`💾 Full analysis saved to: ${outputPath}\n`);
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeComponent,
  scanAllComponents,
  extractVariants,
  parseTailwindClasses,
  detectComponentType,
};

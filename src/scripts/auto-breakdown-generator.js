/**
 * Automated CSS Property Breakdown Generator
 * 
 * This script automatically scans UI components and generates comprehensive
 * CSS property breakdowns for the Design System page.
 * 
 * Usage: node scripts/auto-breakdown-generator.js
 */

const fs = require('fs');
const path = require('path');

// ==================== Configuration ====================
const CONFIG = {
  componentsDir: './components/ui',
  designSystemFile: './components/DesignSystemPageNew.tsx',
  globalsCSS: './styles/globals.css',
  outputFile: './components/DesignSystemPageNew.tsx',
  componentsToScan: [
    'button.tsx',
    'input.tsx',
    'textarea.tsx',
    'select.tsx',
    'checkbox.tsx',
    'switch.tsx',
    'badge.tsx',
    'avatar.tsx',
    'tabs.tsx',
    'card.tsx',
    'alert.tsx',
  ],
};

// ==================== CSS Variable Resolution ====================
const CSS_VARIABLES = {
  // Colors
  '--primary': '#0f172aff (var(--slate-900))',
  '--primary-foreground': '#f8fafcff (var(--slate-50))',
  '--primary-button-bg': '#5b5bd6 (var(--iris-9))',
  '--primary-button-bg-hover': '#5151cd (var(--iris-10))',
  '--primary-button-fg': '#ffffff',
  '--destructive': '#e5484d (var(--red-9))',
  '--destructive-foreground': '#f8fafcff',
  '--secondary': '#f1f5f9ff (var(--slate-100))',
  '--secondary-foreground': '#334155ff (var(--slate-700))',
  '--lum-01': '#ffffff (light) / #0f1112 (dark)',
  '--lum-02': '#fffefc (light) / #232b30 (dark)',
  '--lum-03': '#e6eff2 (light) / #293336 (dark)',
  '--black-a1': '#0000000d (5% opacity)',
  '--black-a2': '#0000001a (10% opacity)',
  '--black-a3': '#00000026 (15% opacity)',
  '--iris-9': '#5b5bd6',
  '--iris-10': '#5151cd',
  '--iris-11': '#5753c6',
  '--red-8': '#eb8e90',
  '--red-9': '#e5484d',
  '--green-8': '#5bb98b',
  '--border': '#0000000d (var(--black-a1))',
  '--card-normal': 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)',
  '--card-hover': 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)',
  '--card-foreground': '#0f172aff (var(--slate-950))',
  '--muted-foreground': '#64748bff (var(--slate-500))',
  '--foreground': '#0f172aff (var(--slate-950))',
  
  // Spacing
  '--gap--0-25rem': '4px',
  '--gap--0-375rem': '6px',
  '--gap--0-5rem': '8px',
  '--gap--0-75rem': '12px',
  '--gap--1rem': '16px',
  '--gap--1-5rem': '24px',
  '--gap--2rem': '32px',
  
  // Border Radius
  '--border-radius--0-375rem': '6px',
  '--border-radius--0-5rem': '8px',
  '--border-radius--0-75rem': '12px',
  '--border-radius--9999px': '9999px',
  '--radius-button': '8px (var(--border-radius--0-5rem))',
  '--radius-card': '8px (var(--border-radius--0-5rem))',
  '--radius-input': '6px (var(--border-radius--0-375rem))',
  
  // Typography
  '--text-xs': '12px',
  '--text-sm': '12px',
  '--text-base': '16px',
  '--text-lg': '18px',
  '--text-xl': '20px',
  '--text-2xl': '24px',
  '--text-3xl': '30px',
  '--font-weight-normal': '400',
  '--font-weight-medium': '500',
  '--font-weight-semi-bold': '600',
  '--font-weight-extra-bold': '800',
  
  // Shadows
  '--shadow-1': '0px 1px 2px 0px rgba(0,0,0,0.05)',
  '--shadow-2': '0px 1px 2px 0px rgba(0,0,0,0.1)',
  '--shadow-3': '0px 8px 16px 0px rgba(0,0,0,0.12)',
  '--shadow-4': '0 3px 4px 0 rgba(0,0,0,0.04)',
};

// ==================== Component Property Templates ====================
const PROPERTY_TEMPLATES = {
  button: {
    baseProperties: [
      'background',
      'border-radius',
      'height',
      'padding-x',
      'gap',
      'font-size',
      'font-weight',
      'text-color',
      'border',
      'box-shadow',
      'transform',
    ],
    variants: {
      default: {
        background: 'var(--primary)',
        'text-color': 'var(--primary-foreground)',
        border: 'none',
      },
      primary: {
        background: 'var(--primary-button-bg)',
        'text-color': 'var(--primary-button-fg)',
        border: 'none',
      },
      destructive: {
        background: 'var(--destructive)',
        'text-color': 'white',
        border: 'none',
      },
      outline: {
        background: 'var(--lum-01)',
        'text-color': 'var(--foreground)',
        border: '1px solid var(--border)',
      },
      ghost: {
        background: 'transparent',
        'text-color': 'var(--foreground)',
        border: 'none',
      },
      secondary: {
        background: 'var(--secondary)',
        'text-color': 'var(--secondary-foreground)',
        border: 'none',
      },
    },
    sizes: {
      sm: {
        height: '32px (h-8)',
        'padding-x': '12px (px-3)',
        gap: '6px (gap-1.5)',
      },
      md: {
        height: '36px (h-9)',
        'padding-x': '16px (px-4)',
        'padding-y': '8px (py-2)',
        gap: '8px (gap-2)',
      },
      lg: {
        height: '40px (h-10)',
        'padding-x': '24px (px-6)',
        gap: '8px (gap-2)',
      },
      icon: {
        size: '36px × 36px (size-9)',
      },
    },
    states: {
      default: {
        transform: 'none',
        opacity: '1',
        'box-shadow': 'none',
      },
      hover: {
        transform: 'translateY(-2px)',
        opacity: '0.8',
      },
      active: {
        transform: 'scale(0.98)',
      },
      focused: {
        outline: '2px solid var(--iris-9)',
        'outline-offset': '2px',
        ring: '3px ring-ring/50',
      },
      disabled: {
        opacity: '0.5',
        'pointer-events': 'none',
      },
    },
  },
  
  input: {
    baseProperties: [
      'background',
      'border',
      'border-radius',
      'padding',
      'font-size',
      'color',
      'height',
      'outline',
    ],
    variants: {
      default: {
        background: 'var(--lum-01)',
        border: '1px solid var(--border)',
        'border-radius': 'var(--radius-input)',
        color: 'var(--card-foreground)',
      },
    },
    states: {
      default: {
        'border-color': 'var(--border)',
      },
      hover: {
        'border-color': 'var(--iris-9)',
      },
      focused: {
        outline: '2px solid var(--iris-9)',
        'outline-offset': '2px',
        'border-color': 'var(--iris-9)',
      },
      error: {
        'border-color': 'var(--red-9)',
        outline: '2px solid var(--red-9)',
      },
      disabled: {
        opacity: '0.5',
        'pointer-events': 'none',
      },
    },
  },
  
  textarea: {
    baseProperties: [
      'background',
      'border',
      'border-radius',
      'padding',
      'font-size',
      'color',
      'height',
      'outline',
    ],
    variants: {
      default: {
        background: 'var(--lum-01)',
        border: '1px solid var(--border)',
        'border-radius': 'var(--radius-input)',
        color: 'var(--card-foreground)',
      },
    },
    states: {
      default: {
        'border-color': 'var(--border)',
      },
      hover: {
        'border-color': 'var(--iris-9)',
      },
      focused: {
        outline: '2px solid var(--iris-9)',
        'outline-offset': '2px',
        'border-color': 'var(--iris-9)',
      },
      error: {
        'border-color': 'var(--red-9)',
        outline: '2px solid var(--red-9)',
      },
      disabled: {
        opacity: '0.5',
        'pointer-events': 'none',
      },
    },
  },
  
  badge: {
    baseProperties: [
      'background',
      'border-radius',
      'padding-x',
      'padding-y',
      'font-size',
      'font-weight',
      'text-color',
      'border',
    ],
    variants: {
      default: {
        background: 'var(--primary)',
        'text-color': 'var(--primary-foreground)',
      },
      secondary: {
        background: 'var(--secondary)',
        'text-color': 'var(--secondary-foreground)',
      },
      destructive: {
        background: 'var(--destructive)',
        'text-color': 'white',
      },
      outline: {
        background: 'transparent',
        border: '1px solid var(--border)',
        'text-color': 'var(--foreground)',
      },
    },
  },
  
  checkbox: {
    baseProperties: [
      'width',
      'height',
      'border-radius',
      'border',
      'background',
    ],
    states: {
      default: {
        background: 'transparent',
        border: '1px solid var(--border)',
      },
      checked: {
        background: 'var(--primary)',
        border: '1px solid var(--primary)',
      },
      disabled: {
        opacity: '0.5',
        'pointer-events': 'none',
      },
    },
  },
  
  switch: {
    baseProperties: [
      'width',
      'height',
      'border-radius',
      'background',
    ],
    states: {
      default: {
        background: 'var(--lum-03)',
      },
      checked: {
        background: 'var(--primary)',
      },
      disabled: {
        opacity: '0.5',
      },
    },
  },
};

// ==================== Generator Functions ====================

/**
 * Resolve CSS variable to actual value
 */
function resolveVariable(varName) {
  return CSS_VARIABLES[varName] || varName;
}

/**
 * Generate complete property list for a component state
 */
function generatePropertyList(componentType, variant, size, state) {
  const template = PROPERTY_TEMPLATES[componentType];
  if (!template) return [];
  
  const properties = [];
  const baseProps = template.baseProperties || [];
  
  // Get variant-specific values
  const variantData = template.variants?.[variant] || {};
  const sizeData = template.sizes?.[size] || {};
  const stateData = template.states?.[state] || {};
  
  // Common properties for all components
  const commonProps = {
    'font-size': 'var(--text-sm)',
    'font-weight': 'var(--font-weight-semi-bold)',
    'border-radius': 'var(--radius-button)',
  };
  
  // Merge all data
  const allProps = {
    ...commonProps,
    ...variantData,
    ...sizeData,
    ...stateData,
  };
  
  // Generate property objects
  baseProps.forEach(propName => {
    const value = allProps[propName] || 'auto';
    const actualValue = resolveVariable(value);
    
    properties.push({
      name: propName,
      value: value,
      actualValue: actualValue,
    });
  });
  
  return properties;
}

/**
 * Generate complete component breakdown
 */
function generateComponentBreakdown(componentType, componentName) {
  const template = PROPERTY_TEMPLATES[componentType];
  if (!template) return null;
  
  const variants = Object.keys(template.variants || { default: {} });
  const sizes = Object.keys(template.sizes || { default: {} });
  const states = Object.keys(template.states || {});
  
  const breakdowns = [];
  
  variants.forEach(variant => {
    const variantBreakdown = {
      id: `${componentType}-${variant}`,
      label: variant.charAt(0).toUpperCase() + variant.slice(1),
      category: componentName,
      sizeStates: [],
    };
    
    sizes.forEach(size => {
      states.forEach(state => {
        const properties = generatePropertyList(componentType, variant, size, state);
        
        variantBreakdown.sizeStates.push({
          size: size.toUpperCase(),
          state: state.charAt(0).toUpperCase() + state.slice(1),
          description: `${size} ${variant} ${componentType} in ${state} state`,
          cssVars: properties,
        });
      });
    });
    
    breakdowns.push(variantBreakdown);
  });
  
  return breakdowns;
}

/**
 * Format property as TypeScript object
 */
function formatPropertyObject(prop) {
  return `{ name: '${prop.name}', value: '${prop.value}', actualValue: '${prop.actualValue}' }`;
}

/**
 * Format size state as TypeScript object
 */
function formatSizeState(sizeState) {
  const props = sizeState.cssVars.map(formatPropertyObject).join(',\n          ');
  
  return `      { 
        size: '${sizeState.size}', 
        state: '${sizeState.state}', 
        description: '${sizeState.description}', 
        renderComponent: ${sizeState.renderComponent || 'undefined'}, 
        cssVars: [
          ${props}
        ] 
      }`;
}

/**
 * Format complete component variant as TypeScript
 */
function formatComponentVariant(variant) {
  const sizeStates = variant.sizeStates.map(formatSizeState).join(',\n');
  
  return `  {
    id: '${variant.id}',
    label: '${variant.label}',
    category: '${variant.category}',
    sizeStates: [
${sizeStates}
    ],
  }`;
}

/**
 * Scan component file to detect variants, sizes, and states
 */
function scanComponentFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const componentName = path.basename(filePath, '.tsx');
  
  const variants = new Set();
  const sizes = new Set();
  
  // Extract variants from cva() calls
  const variantRegex = /variant:\s*{([^}]+)}/g;
  const variantMatch = content.match(variantRegex);
  if (variantMatch) {
    const variantContent = variantMatch[0];
    const variantNames = variantContent.match(/(\w+):/g);
    if (variantNames) {
      variantNames.forEach(v => variants.add(v.replace(':', '')));
    }
  }
  
  // Extract sizes from cva() calls
  const sizeRegex = /size:\s*{([^}]+)}/g;
  const sizeMatch = content.match(sizeRegex);
  if (sizeMatch) {
    const sizeContent = sizeMatch[0];
    const sizeNames = sizeContent.match(/(\w+):/g);
    if (sizeNames) {
      sizeNames.forEach(s => sizes.add(s.replace(':', '')));
    }
  }
  
  return {
    componentName,
    variants: Array.from(variants),
    sizes: Array.from(sizes),
  };
}

/**
 * Generate TypeScript code for componentVariants array
 */
function generateComponentVariantsCode(components) {
  const variantStrings = components.map(formatComponentVariant);
  
  return `const componentVariants: ComponentVariant[] = [
${variantStrings.join(',\n')}
];`;
}

/**
 * Update DesignSystemPageNew.tsx with new breakdowns
 */
function updateDesignSystemFile(newCode) {
  const filePath = CONFIG.designSystemFile;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find and replace componentVariants array
  const startMarker = 'const componentVariants: ComponentVariant[] = [';
  const endMarker = '];';
  
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    console.error('Could not find componentVariants array in design system file');
    return false;
  }
  
  // Find the matching closing bracket
  let bracketCount = 0;
  let endIndex = startIndex;
  let inArray = false;
  
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '[') {
      bracketCount++;
      inArray = true;
    } else if (content[i] === ']') {
      bracketCount--;
      if (inArray && bracketCount === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }
  
  // Replace the array
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex + 1);
  
  const newContent = before + newCode + after;
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
  return true;
}

// ==================== Main Execution ====================

function main() {
  console.log('🚀 Auto CSS Property Breakdown Generator\n');
  
  // Scan components
  console.log('📁 Scanning components...');
  const componentBreakdowns = [];
  
  CONFIG.componentsToScan.forEach(fileName => {
    const filePath = path.join(CONFIG.componentsDir, fileName);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Skipping ${fileName} - file not found`);
      return;
    }
    
    const componentType = fileName.replace('.tsx', '');
    const scanResult = scanComponentFile(filePath);
    
    console.log(`✓ ${componentType}: ${scanResult.variants.length} variants, ${scanResult.sizes.length} sizes`);
    
    // Generate breakdown if template exists
    if (PROPERTY_TEMPLATES[componentType]) {
      const breakdown = generateComponentBreakdown(componentType, scanResult.componentName);
      if (breakdown) {
        componentBreakdowns.push(...breakdown);
      }
    }
  });
  
  console.log(`\n📊 Generated ${componentBreakdowns.length} component variants\n`);
  
  // Generate TypeScript code
  console.log('💻 Generating TypeScript code...');
  const code = generateComponentVariantsCode(componentBreakdowns);
  
  // Update design system file
  console.log('📝 Updating DesignSystemPageNew.tsx...');
  const success = updateDesignSystemFile(code);
  
  if (success) {
    console.log('✅ Design system file updated successfully!\n');
    console.log('📋 Summary:');
    console.log(`   - Components processed: ${CONFIG.componentsToScan.length}`);
    console.log(`   - Variants generated: ${componentBreakdowns.length}`);
    console.log(`   - Total states: ${componentBreakdowns.reduce((sum, v) => sum + v.sizeStates.length, 0)}`);
  } else {
    console.log('❌ Failed to update design system file\n');
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  generateComponentBreakdown,
  generatePropertyList,
  resolveVariable,
  updateDesignSystemFile,
};
/**
 * Sync Preview Components with Actual Component Styling
 * 
 * This script ensures that preview components in the Design System page
 * accurately reflect the actual styling of components in different states
 */

const fs = require('fs');
const path = require('path');

// ==================== Preview Component Generators ====================

/**
 * Generate accurate preview components for Input/Textarea
 * These components have wrapper divs with state management
 */
function generateFormFieldPreviews(componentName) {
  const ComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  
  return {
    import: `import { ${ComponentName} } from './ui/${componentName}';`,
    
    components: `
// ==================== ${ComponentName} Previews ====================
function ${ComponentName}Default() {
  return <${ComponentName} placeholder="Enter text..." />;
}

function ${ComponentName}Hover() {
  const [forceHover, setForceHover] = React.useState(false);
  
  React.useEffect(() => {
    setForceHover(true);
  }, []);
  
  return (
    <div 
      style={{ pointerEvents: 'none' }}
      onMouseEnter={() => {}}
    >
      <div 
        className="flex cursor-text transition-all duration-200 ease-out"
        style={{
          gap: 'var(--gap--0-5rem)',
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--muted-foreground)',
          borderRadius: 'var(--radius-card)',
          paddingTop: 'var(--gap--0-5rem)',
          paddingBottom: 'var(--gap--0-5rem)',
          paddingLeft: 'var(--gap--0-75rem)',
          paddingRight: 'var(--gap--0-75rem)',
          boxShadow: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)',
        }}
      >
        <${componentName}
          className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground ${componentName === 'textarea' ? 'resize-none' : ''}"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            ${componentName === 'textarea' ? "minHeight: '80px'," : ''}
          }}
          placeholder="Enter text..."
        />
      </div>
    </div>
  );
}

function ${ComponentName}Focused() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <div 
        className="flex cursor-text transition-all duration-200 ease-out"
        style={{
          gap: 'var(--gap--0-5rem)',
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--primary-button-bg)',
          borderRadius: 'var(--radius-card)',
          paddingTop: 'var(--gap--0-5rem)',
          paddingBottom: 'var(--gap--0-5rem)',
          paddingLeft: 'var(--gap--1rem)',
          paddingRight: 'var(--gap--1rem)',
          boxShadow: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)',
        }}
      >
        <${componentName}
          className="font-sans flex-1 bg-transparent border-none outline-none text-card-foreground placeholder:text-muted-foreground ${componentName === 'textarea' ? 'resize-none' : ''}"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            ${componentName === 'textarea' ? "minHeight: '80px'," : ''}
          }}
          placeholder="Enter text..."
        />
      </div>
    </div>
  );
}

function ${ComponentName}Disabled() {
  return (
    <div style={{ opacity: '0.5', pointerEvents: 'none' }}>
      <${ComponentName} placeholder="Enter text..." disabled />
    </div>
  );
}
`.trim(),
  };
}

/**
 * Generate CSS variable documentation for Input/Textarea states
 */
function generateFormFieldCSS(componentType) {
  return [
    // Default State
    {
      size: 'DEFAULT',
      state: 'Default',
      description: `${componentType} in default state`,
      renderComponent: `${componentType.charAt(0).toUpperCase() + componentType.slice(1)}Default`,
      cssVars: [
        { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)' },
        { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a (10% opacity)' },
        { name: 'border-radius', value: 'var(--radius-card)', actualValue: 'var(--border-radius--0-5rem) = 8px' },
        { name: 'padding', value: 'var(--gap--0-5rem)', actualValue: '8px' },
        { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
        { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        { name: 'text-color', value: 'var(--card-foreground)', actualValue: 'var(--slate-950) = #020617ff' },
        { name: 'box-shadow', value: 'none', actualValue: 'none' },
      ],
    },
    // Hover State
    {
      size: 'DEFAULT',
      state: 'Hover',
      description: `${componentType} in hover state`,
      renderComponent: `${componentType.charAt(0).toUpperCase() + componentType.slice(1)}Hover`,
      cssVars: [
        { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)' },
        { name: 'border', value: '1px solid var(--muted-foreground)', actualValue: '1px solid var(--slate-500) = #64748bff' },
        { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
        { name: 'padding', value: 'var(--gap--0-75rem)', actualValue: '12px' },
        { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
        { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        { name: 'text-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
        { name: 'box-shadow', value: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)', actualValue: 'x:0 y:0 blur:0 spread:1px + x:0 y:2px blur:8px spread:0' },
      ],
    },
    // Focused State
    {
      size: 'DEFAULT',
      state: 'Focused',
      description: `${componentType} in focused state`,
      renderComponent: `${componentType.charAt(0).toUpperCase() + componentType.slice(1)}Focused`,
      cssVars: [
        { name: 'background', value: 'var(--card-hover)', actualValue: 'linear-gradient(180deg, var(--lum-01) -80%, var(--lum-03) 100%)' },
        { name: 'border', value: '1px solid var(--primary-button-bg)', actualValue: '1px solid var(--iris-9) = #5b5bd6' },
        { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
        { name: 'padding', value: 'var(--gap--1rem)', actualValue: '16px' },
        { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
        { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        { name: 'text-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
        { name: 'box-shadow', value: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)', actualValue: 'x:0 y:0 blur:0 spread:1px + x:0 y:0 blur:40px spread:0' },
      ],
    },
    // Disabled State
    {
      size: 'DEFAULT',
      state: 'Disabled',
      description: `${componentType} in disabled state`,
      renderComponent: `${componentType.charAt(0).toUpperCase() + componentType.slice(1)}Disabled`,
      cssVars: [
        { name: 'background', value: 'var(--card-normal)', actualValue: 'linear-gradient(180deg, var(--lum-01) -240%, var(--lum-02) 160%)' },
        { name: 'border', value: '1px solid var(--black-a2)', actualValue: '1px solid #0000001a' },
        { name: 'border-radius', value: 'var(--radius-card)', actualValue: '8px' },
        { name: 'padding', value: 'var(--gap--0-5rem)', actualValue: '8px' },
        { name: 'font-size', value: 'var(--text-sm)', actualValue: '12px' },
        { name: 'font-weight', value: 'var(--font-weight-medium)', actualValue: '500' },
        { name: 'text-color', value: 'var(--card-foreground)', actualValue: '#020617ff' },
        { name: 'box-shadow', value: 'none', actualValue: 'none' },
        { name: 'opacity', value: '0.5', actualValue: '50%' },
        { name: 'pointer-events', value: 'none', actualValue: 'Not interactive' },
      ],
    },
  ];
}

/**
 * Generate complete variant object for DesignSystemPageNew.tsx
 */
function generateVariantObject(componentType, sizeStates) {
  const componentName = componentType.charAt(0).toUpperCase() + componentType.slice(1);
  
  const formatCSS = (cssVars) => {
    return cssVars.map(v => 
      `          { name: '${v.name}', value: '${v.value}', actualValue: '${v.actualValue}' }`
    ).join(',\n');
  };
  
  const formatStates = (states) => {
    return states.map(s => `      { 
        size: '${s.size}', 
        state: '${s.state}', 
        description: '${s.description}', 
        renderComponent: ${s.renderComponent}, 
        cssVars: [
${formatCSS(s.cssVars)}
        ] 
      }`).join(',\n');
  };
  
  return `  {
    id: '${componentType}-default',
    label: 'Default',
    category: '${componentName}',
    sizeStates: [
${formatStates(sizeStates)}
    ],
  }`;
}

/**
 * Main sync function
 */
function syncPreviewComponents() {
  console.log('🔄 Syncing Preview Components with Actual Styling\n');
  
  // Generate Input previews
  console.log('📝 Generating Input previews...');
  const inputPreviews = generateFormFieldPreviews('input');
  const inputCSS = generateFormFieldCSS('input');
  const inputVariant = generateVariantObject('input', inputCSS);
  
  // Generate Textarea previews
  console.log('📝 Generating Textarea previews...');
  const textareaPreviews = generateFormFieldPreviews('textarea');
  const textareaCSS = generateFormFieldCSS('textarea');
  const textareaVariant = generateVariantObject('textarea', textareaCSS);
  
  // Combine all
  const allImports = [inputPreviews.import, textareaPreviews.import].join('\n');
  const allComponents = [inputPreviews.components, textareaPreviews.components].join('\n\n');
  const allVariants = [inputVariant, textareaVariant].join(',\n');
  
  // Save preview components
  const previewCode = `${allImports}\n\n${allComponents}`;
  fs.writeFileSync('./form-field-previews.tsx', previewCode);
  
  // Save variant definitions
  const variantCode = `const formFieldVariants: ComponentVariant[] = [\n${allVariants}\n];`;
  fs.writeFileSync('./form-field-variants.ts', variantCode);
  
  console.log('\n✅ Preview components synced successfully!\n');
  console.log('📊 Generated:');
  console.log('   - Input: 4 states (Default, Hover, Focused, Disabled)');
  console.log('   - Textarea: 4 states (Default, Hover, Focused, Disabled)');
  console.log('\n📁 Files created:');
  console.log('   - form-field-previews.tsx (React components)');
  console.log('   - form-field-variants.ts (CSS breakdowns)');
  console.log('\n💡 Next step: Copy these to DesignSystemPageNew.tsx\n');
}

// Run
if (require.main === module) {
  syncPreviewComponents();
}

module.exports = {
  generateFormFieldPreviews,
  generateFormFieldCSS,
  generateVariantObject,
  syncPreviewComponents,
};

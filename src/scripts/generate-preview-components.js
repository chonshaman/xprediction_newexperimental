/**
 * Preview Component Generator
 * 
 * Generates proper preview components that match actual component styling
 * for all states (default, hover, active, focused, disabled)
 */

const fs = require('fs');
const path = require('path');

// ==================== Component State Styling ====================

const COMPONENT_STATE_STYLES = {
  input: {
    default: {},
    hover: {
      wrapper: {
        // Input uses wrapper div with state management
        backgroundColor: 'var(--card-hover)',
        border: '1px solid var(--muted-foreground)',
        paddingLeft: 'var(--gap--0-75rem)',
        paddingRight: 'var(--gap--0-75rem)',
        boxShadow: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)',
      },
    },
    focused: {
      wrapper: {
        backgroundColor: 'var(--card-hover)',
        border: '1px solid var(--primary-button-bg)',
        paddingLeft: 'var(--gap--1rem)',
        paddingRight: 'var(--gap--1rem)',
        boxShadow: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)',
      },
    },
    disabled: {
      wrapper: {
        opacity: '0.5',
        pointerEvents: 'none',
      },
    },
  },
  
  textarea: {
    default: {},
    hover: {
      wrapper: {
        backgroundColor: 'var(--card-hover)',
        border: '1px solid var(--muted-foreground)',
        paddingLeft: 'var(--gap--0-75rem)',
        paddingRight: 'var(--gap--0-75rem)',
        boxShadow: '0 0 0 1px var(--muted-foreground), 0 2px 8px rgba(105, 82, 254, 0.12)',
      },
    },
    focused: {
      wrapper: {
        backgroundColor: 'var(--card-hover)',
        border: '1px solid var(--primary-button-bg)',
        paddingLeft: 'var(--gap--1rem)',
        paddingRight: 'var(--gap--1rem)',
        boxShadow: '0 0 0 1px var(--primary-button-bg), 0 0 40px rgba(105, 82, 254, 0.35)',
      },
    },
    disabled: {
      wrapper: {
        opacity: '0.5',
        pointerEvents: 'none',
      },
    },
  },
  
  button: {
    default: {},
    hover: {
      background: 'var(--card-hover)',
      opacity: '0.8',
      transform: 'translateY(-2px)',
    },
    active: {
      transform: 'scale(0.98)',
    },
    focused: {
      outline: '2px solid var(--iris-9)',
      outlineOffset: '2px',
    },
    disabled: {
      // handled by disabled prop
    },
  },
  
  badge: {
    default: {},
    hover: {
      opacity: '0.8',
    },
  },
  
  checkbox: {
    default: {},
    checked: {
      // handled by checked prop
    },
    disabled: {
      // handled by disabled prop
    },
  },
  
  switch: {
    default: {},
    checked: {
      // handled by checked prop
    },
    disabled: {
      // handled by disabled prop
    },
  },
};

// ==================== Preview Component Templates ====================

const PREVIEW_TEMPLATES = {
  input: {
    import: "import { Input } from './ui/input';",
    
    default: (size) => `
function InputDefault${size}() {
  return <Input placeholder="Enter text..." />;
}`,
    
    hover: (size) => `
function InputHover${size}() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Input 
        placeholder="Enter text..." 
        style={{
          // Force hover state styling
          '--force-hover': 'true',
        }}
        className="[&>div]:bg-[var(--card-hover)] [&>div]:border-[var(--muted-foreground)] [&>div]:shadow-[0_0_0_1px_var(--muted-foreground),0_2px_8px_rgba(105,82,254,0.12)]"
      />
    </div>
  );
}`,
    
    focused: (size) => `
function InputFocused${size}() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Input 
        placeholder="Enter text..." 
        className="[&>div]:bg-[var(--card-hover)] [&>div]:border-[var(--primary-button-bg)] [&>div]:shadow-[0_0_0_1px_var(--primary-button-bg),0_0_40px_rgba(105,82,254,0.35)] [&>div]:px-4"
      />
    </div>
  );
}`,
    
    disabled: (size) => `
function InputDisabled${size}() {
  return (
    <div style={{ opacity: '0.5', pointerEvents: 'none' }}>
      <Input placeholder="Enter text..." disabled />
    </div>
  );
}`,
  },
  
  textarea: {
    import: "import { Textarea } from './ui/textarea';",
    
    default: (size) => `
function TextareaDefault${size}() {
  return <Textarea placeholder="Enter text..." />;
}`,
    
    hover: (size) => `
function TextareaHover${size}() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Textarea 
        placeholder="Enter text..." 
        className="[&>div]:bg-[var(--card-hover)] [&>div]:border-[var(--muted-foreground)] [&>div]:shadow-[0_0_0_1px_var(--muted-foreground),0_2px_8px_rgba(105,82,254,0.12)]"
      />
    </div>
  );
}`,
    
    focused: (size) => `
function TextareaFocused${size}() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Textarea 
        placeholder="Enter text..." 
        className="[&>div]:bg-[var(--card-hover)] [&>div]:border-[var(--primary-button-bg)] [&>div]:shadow-[0_0_0_1px_var(--primary-button-bg),0_0_40px_rgba(105,82,254,0.35)] [&>div]:px-4"
      />
    </div>
  );
}`,
    
    disabled: (size) => `
function TextareaDisabled${size}() {
  return (
    <div style={{ opacity: '0.5', pointerEvents: 'none' }}>
      <Textarea placeholder="Enter text..." disabled />
    </div>
  );
}`,
  },
  
  button: {
    import: "import { Button } from './ui/button';",
    
    default: (variant, size) => `
function Button${variant}${size}Default() {
  return <Button variant="${variant.toLowerCase()}" size="${size.toLowerCase()}">Button</Button>;
}`,
    
    hover: (variant, size) => `
function Button${variant}${size}Hover() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button variant="${variant.toLowerCase()}" size="${size.toLowerCase()}" style={{ background: 'var(--card-hover)', opacity: '0.8', transform: 'translateY(-2px)' }}>Button</Button>
    </div>
  );
}`,
    
    active: (variant, size) => `
function Button${variant}${size}Active() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button variant="${variant.toLowerCase()}" size="${size.toLowerCase()}" style={{ transform: 'scale(0.98)' }}>Button</Button>
    </div>
  );
}`,
    
    focused: (variant, size) => `
function Button${variant}${size}Focused() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <Button variant="${variant.toLowerCase()}" size="${size.toLowerCase()}" style={{ outline: '2px solid var(--iris-9)', outlineOffset: '2px' }}>Button</Button>
    </div>
  );
}`,
    
    disabled: (variant, size) => `
function Button${variant}${size}Disabled() {
  return <Button variant="${variant.toLowerCase()}" size="${size.toLowerCase()}" disabled>Button</Button>;
}`,
  },
};

// ==================== Generator Functions ====================

/**
 * Generate preview component code for a specific state
 */
function generatePreviewComponent(componentType, variant, size, state) {
  const template = PREVIEW_TEMPLATES[componentType];
  if (!template) return null;
  
  const stateTemplate = template[state];
  if (!stateTemplate) return null;
  
  if (componentType === 'button') {
    return stateTemplate(variant, size);
  } else {
    return stateTemplate(size);
  }
}

/**
 * Generate all preview components for a component type
 */
function generateAllPreviews(componentType, variants, sizes, states) {
  const previews = [];
  const template = PREVIEW_TEMPLATES[componentType];
  
  if (!template) return previews;
  
  variants.forEach(variant => {
    sizes.forEach(size => {
      states.forEach(state => {
        const code = generatePreviewComponent(componentType, variant, size, state);
        if (code) {
          previews.push({
            componentType,
            variant,
            size,
            state,
            functionName: `${componentType}${variant}${size}${state}`,
            code: code.trim(),
          });
        }
      });
    });
  });
  
  return previews;
}

/**
 * Generate import statements
 */
function generateImports(componentTypes) {
  const imports = new Set();
  
  componentTypes.forEach(type => {
    const template = PREVIEW_TEMPLATES[type];
    if (template && template.import) {
      imports.add(template.import);
    }
  });
  
  return Array.from(imports).join('\n');
}

/**
 * Format preview components as TypeScript code
 */
function formatPreviewCode(previews) {
  return previews.map(p => p.code).join('\n\n');
}

// ==================== Main ====================

function main() {
  console.log('🎨 Preview Component Generator\n');
  
  // Generate Input previews
  console.log('Generating Input previews...');
  const inputPreviews = generateAllPreviews(
    'input',
    ['Default'], // Input doesn't have variants
    ['Default'], // Input doesn't have sizes
    ['default', 'hover', 'focused', 'disabled']
  );
  
  // Generate Textarea previews
  console.log('Generating Textarea previews...');
  const textareaPreviews = generateAllPreviews(
    'textarea',
    ['Default'],
    ['Default'],
    ['default', 'hover', 'focused', 'disabled']
  );
  
  // Generate Button previews
  console.log('Generating Button previews...');
  const buttonPreviews = generateAllPreviews(
    'button',
    ['Default', 'Primary', 'Destructive', 'Outline', 'Ghost', 'Secondary'],
    ['SM', 'MD', 'LG'],
    ['default', 'hover', 'active', 'focused', 'disabled']
  );
  
  const allPreviews = [...inputPreviews, ...textareaPreviews, ...buttonPreviews];
  
  console.log(`\n✅ Generated ${allPreviews.length} preview components\n`);
  
  // Generate code
  const imports = generateImports(['input', 'textarea', 'button']);
  const code = formatPreviewCode(allPreviews);
  
  const output = `// ==================== Auto-Generated Preview Components ====================\n${imports}\n\n${code}`;
  
  // Save to file
  const outputPath = './preview-components.tsx';
  fs.writeFileSync(outputPath, output);
  
  console.log(`💾 Saved to: ${outputPath}\n`);
  
  // Print summary
  console.log('📊 Summary:');
  console.log(`   Input: ${inputPreviews.length} components`);
  console.log(`   Textarea: ${textareaPreviews.length} components`);
  console.log(`   Button: ${buttonPreviews.length} components`);
  console.log(`   Total: ${allPreviews.length} components\n`);
}

if (require.main === module) {
  main();
}

module.exports = {
  generatePreviewComponent,
  generateAllPreviews,
  PREVIEW_TEMPLATES,
  COMPONENT_STATE_STYLES,
};

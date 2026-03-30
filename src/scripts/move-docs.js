#!/usr/bin/env node

/**
 * Move Documentation Files Script
 * 
 * Moves all .md files from source folders to /docs/
 * to reduce bundle size and improve build performance.
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
};

console.log(`\n${colors.blue}${colors.bold}📦 Moving Documentation Files${colors.reset}\n`);

// Files to move from /components/design-system/
const designSystemDocs = [
  'ALL_BUTTON_TYPES_ADDED.md',
  'ALL_COMPONENTS_ADDED.md',
  'ARCHITECTURE.md',
  'COMPLETE_BUTTON_AND_FORM_UPDATE.md',
  'MIGRATION_COMPLETE.md',
  'README.md',
];

// Files to move from /scripts/
const scriptsDocs = [
  'MIGRATION_GUIDE.md',
  'PREVIEW_SYNC_GUIDE.md',
  'QUICK_START.md',
  'QUICK_START_NEW.md',
  'README.md',
  'SCRIPTS_README.md',
  'SCRIPTS_README_NEW.md',
  'SYSTEM_ARCHITECTURE.md',
];

// Create /docs directory structure
const docsDir = path.resolve(__dirname, '../docs');
const designSystemDocsDir = path.join(docsDir, 'design-system');
const scriptsDocsDir = path.join(docsDir, 'scripts');

[docsDir, designSystemDocsDir, scriptsDocsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`${colors.green}✅ Created directory: ${dir}${colors.reset}`);
  }
});

// Move design system docs
console.log(`\n${colors.bold}Moving Design System Documentation:${colors.reset}`);
let movedCount = 0;

designSystemDocs.forEach(file => {
  const source = path.resolve(__dirname, '../components/design-system', file);
  const dest = path.join(designSystemDocsDir, file);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    fs.unlinkSync(source);
    console.log(`  ${colors.green}✓${colors.reset} ${file}`);
    movedCount++;
  } else {
    console.log(`  ${colors.yellow}⊘${colors.reset} ${file} (not found)`);
  }
});

// Move scripts docs
console.log(`\n${colors.bold}Moving Scripts Documentation:${colors.reset}`);

scriptsDocs.forEach(file => {
  const source = path.resolve(__dirname, file);
  const dest = path.join(scriptsDocsDir, file);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    fs.unlinkSync(source);
    console.log(`  ${colors.green}✓${colors.reset} ${file}`);
    movedCount++;
  } else {
    console.log(`  ${colors.yellow}⊘${colors.reset} ${file} (not found)`);
  }
});

// Create a new README in /docs
const mainReadme = `# Documentation

## Overview
This folder contains all documentation for the project, organized by topic.

## Structure

### Design System Documentation
\`/docs/design-system/\` - All design system related documentation
- Component specifications
- Migration guides
- Architecture documentation
- Update logs

### Scripts Documentation
\`/docs/scripts/\` - All scripts and tooling documentation
- Script usage guides
- System architecture
- Quick start guides
- Migration guides

## Build Configuration
Documentation files (.md) are excluded from production builds to reduce bundle size.

## Contributing
When adding new documentation:
1. Place it in the appropriate subfolder
2. Update this README with a link
3. Ensure it's excluded from builds

## Links

### Design System
- [Architecture](./design-system/ARCHITECTURE.md)
- [Component List](./design-system/ALL_COMPONENTS_ADDED.md)
- [Button Types](./design-system/ALL_BUTTON_TYPES_ADDED.md)
- [Migration Complete](./design-system/MIGRATION_COMPLETE.md)
- [Latest Updates](./design-system/COMPLETE_BUTTON_AND_FORM_UPDATE.md)

### Scripts
- [Scripts Overview](./scripts/SCRIPTS_README_NEW.md)
- [Quick Start](./scripts/QUICK_START_NEW.md)
- [System Architecture](./scripts/SYSTEM_ARCHITECTURE.md)
- [Migration Guide](./scripts/MIGRATION_GUIDE.md)
- [Preview Sync Guide](./scripts/PREVIEW_SYNC_GUIDE.md)
`;

fs.writeFileSync(path.join(docsDir, 'README.md'), mainReadme);
console.log(`\n${colors.green}✅ Created main documentation README${colors.reset}`);

console.log(`\n${colors.bold}Summary:${colors.reset}`);
console.log(`  Total files moved: ${movedCount}`);
console.log(`  Documentation now at: /docs/`);
console.log(`\n${colors.green}✅ Documentation migration complete!${colors.reset}\n`);

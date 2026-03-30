#!/usr/bin/env node

/**
 * Master Optimization Script
 * 
 * Runs all optimization steps in the correct order.
 * This is the main entry point for performance optimization.
 */

const { execSync } = require('child_process');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

console.log(`
${colors.cyan}${colors.bold}╔════════════════════════════════════════════════════════════╗
║                                                            ║
║            🚀 DESIGN SYSTEM OPTIMIZATION SUITE            ║
║                                                            ║
║  Complete performance optimization, code cleanup, and      ║
║  restructuring for the design system.                      ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝${colors.reset}
`);

const steps = [
  {
    name: 'Performance Audit',
    script: 'performance-audit.js',
    description: 'Analyze current state and identify issues',
    required: true,
  },
  {
    name: 'Move Documentation',
    script: 'move-docs.js',
    description: 'Move .md files to /docs/ folder',
    required: false,
    confirm: true,
  },
  {
    name: 'Cleanup Unused Files',
    script: 'cleanup-unused.js',
    description: 'Remove backup and temp files (dry-run first)',
    required: false,
    confirm: true,
  },
];

let currentStep = 0;

function runCommand(command, description) {
  try {
    console.log(`\n${colors.blue}${colors.bold}Running: ${description}${colors.reset}`);
    console.log(`${colors.yellow}Command: ${command}${colors.reset}\n`);
    
    execSync(command, { 
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '..'),
    });
    
    console.log(`\n${colors.green}✅ Completed: ${description}${colors.reset}`);
    return true;
  } catch (error) {
    console.error(`\n${colors.red}❌ Failed: ${description}${colors.reset}`);
    console.error(error.message);
    return false;
  }
}

function printProgress() {
  const total = steps.length;
  const progress = Math.round((currentStep / total) * 100);
  const bar = '█'.repeat(Math.floor(progress / 5)) + '░'.repeat(20 - Math.floor(progress / 5));
  
  console.log(`\n${colors.bold}Progress: ${colors.cyan}${bar}${colors.reset} ${progress}% (${currentStep}/${total})${colors.reset}\n`);
}

async function main() {
  console.log(`${colors.bold}Starting optimization...${colors.reset}\n`);
  
  const startTime = Date.now();
  let successCount = 0;
  let skipCount = 0;
  
  for (const step of steps) {
    printProgress();
    currentStep++;
    
    console.log(`${colors.magenta}${colors.bold}[${ currentStep}/${steps.length}] ${step.name}${colors.reset}`);
    console.log(`${colors.yellow}${step.description}${colors.reset}`);
    
    if (step.confirm) {
      console.log(`\n${colors.yellow}⚠️  This step requires confirmation.${colors.reset}`);
      console.log(`${colors.yellow}   Review the output, then run manually if needed:${colors.reset}`);
      console.log(`${colors.cyan}   node scripts/${step.script}${colors.reset}\n`);
      skipCount++;
      continue;
    }
    
    const scriptPath = path.join(__dirname, step.script);
    const success = runCommand(`node "${scriptPath}"`, step.name);
    
    if (success) {
      successCount++;
    } else if (!step.required) {
      console.log(`${colors.yellow}⚠️  Step failed but is optional, continuing...${colors.reset}`);
      skipCount++;
    } else {
      console.log(`${colors.red}❌ Required step failed, aborting.${colors.reset}`);
      process.exit(1);
    }
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`
${colors.cyan}${colors.bold}╔════════════════════════════════════════════════════════════╗
║                     OPTIMIZATION COMPLETE                  ║
╚════════════════════════════════════════════════════════════╝${colors.reset}

${colors.bold}Summary:${colors.reset}
  ✅ Completed: ${successCount}/${steps.length}
  ⊘  Skipped: ${skipCount}/${steps.length}
  ⏱️  Duration: ${duration}s

${colors.bold}Next Steps:${colors.reset}

${colors.cyan}1. Review Performance Audit Results${colors.reset}
   Check the recommendations above and prioritize fixes.

${colors.cyan}2. Move Documentation (Optional)${colors.reset}
   ${colors.yellow}node scripts/move-docs.js${colors.reset}
   This will move all .md files to /docs/ folder.

${colors.cyan}3. Cleanup Unused Files (Optional)${colors.reset}
   ${colors.yellow}node scripts/cleanup-unused.js${colors.reset}
   First run in dry-run mode to preview.
   Then run with --execute to actually delete.

${colors.cyan}4. Implement Refactoring (Manual)${colors.reset}
   - Review /components/design-system/OPTIMIZATION_PLAN.md
   - Use the new utilities in /utils/styles.ts
   - See /previews/buttons/primary-optimized.tsx for example
   - Gradually migrate existing preview files

${colors.cyan}5. Test Everything${colors.reset}
   - Run the design system page
   - Verify all components render correctly
   - Check bundle size with: npm run build
   - Run TypeScript checks: npx tsc --noEmit

${colors.cyan}6. Commit Changes${colors.reset}
   git add .
   git commit -m "feat: optimize design system performance"

${colors.green}${colors.bold}✨ Optimization suite completed!${colors.reset}

${colors.yellow}For detailed information, see:${colors.reset}
  📄 /components/design-system/OPTIMIZATION_PLAN.md
  📄 /docs/ (after running move-docs.js)
`);
}

// Run the optimization suite
main().catch(error => {
  console.error(`\n${colors.red}${colors.bold}❌ Fatal error:${colors.reset}`, error);
  process.exit(1);
});

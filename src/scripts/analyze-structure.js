#!/usr/bin/env node

/**
 * Code Structure Analyzer
 * Generates a visual representation of the project structure
 * Helps understand dependencies and component relationships
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  magenta: '\x1b[35m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

const CONFIG = {
  rootDir: process.cwd(),
  maxDepth: 3,
  excludeDirs: ['node_modules', '.git', 'build', 'dist', 'coverage'],
};

/**
 * Build directory tree
 */
function buildTree(dirPath, depth = 0, prefix = '') {
  if (depth > CONFIG.maxDepth) return;

  try {
    const files = fs.readdirSync(dirPath);
    const items = files
      .filter(file => !CONFIG.excludeDirs.includes(file))
      .filter(file => !file.startsWith('.'))
      .sort((a, b) => {
        const aIsDir = fs.statSync(path.join(dirPath, a)).isDirectory();
        const bIsDir = fs.statSync(path.join(dirPath, b)).isDirectory();
        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return a.localeCompare(b);
      });

    items.forEach((file, index) => {
      const filePath = path.join(dirPath, file);
      const isLast = index === items.length - 1;
      const connector = isLast ? '└── ' : '├── ';
      const extension = prefix + connector;

      const stats = fs.statSync(filePath);
      const isDirectory = stats.isDirectory();

      if (isDirectory) {
        log(`${extension}📁 ${file}/`, 'blue');
        const newPrefix = prefix + (isLast ? '    ' : '│   ');
        buildTree(filePath, depth + 1, newPrefix);
      } else {
        const ext = path.extname(file);
        const icon = getFileIcon(ext);
        const size = (stats.size / 1024).toFixed(1) + 'KB';
        log(`${extension}${icon} ${file} ${colors.reset}(${size})`, getFileColor(ext));
      }
    });
  } catch (error) {
    log(`Error reading ${dirPath}: ${error.message}`, 'yellow');
  }
}

/**
 * Get icon for file type
 */
function getFileIcon(ext) {
  const icons = {
    '.tsx': '⚛️ ',
    '.ts': '📘',
    '.jsx': '⚛️ ',
    '.js': '📜',
    '.css': '🎨',
    '.json': '📋',
    '.md': '📝',
    '.svg': '🖼️ ',
    '.png': '🖼️ ',
    '.jpg': '🖼️ ',
  };
  return icons[ext] || '📄';
}

/**
 * Get color for file type
 */
function getFileColor(ext) {
  const colors = {
    '.tsx': 'blue',
    '.ts': 'blue',
    '.jsx': 'blue',
    '.js': 'yellow',
    '.css': 'magenta',
    '.json': 'green',
    '.md': 'green',
  };
  return colors[ext] || 'reset';
}

/**
 * Analyze imports and dependencies
 */
function analyzeImports(dirPath) {
  const dependencies = {};
  const files = getAllFiles(dirPath);

  files.forEach(file => {
    if (!['.ts', '.tsx', '.js', '.jsx'].includes(path.extname(file))) return;

    const content = fs.readFileSync(file, 'utf-8');
    const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
    let match;

    const fileImports = [];
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      if (!importPath.startsWith('.')) {
        // External dependency
        fileImports.push({ type: 'external', path: importPath });
      } else {
        // Internal dependency
        fileImports.push({ type: 'internal', path: importPath });
      }
    }

    const relativePath = path.relative(CONFIG.rootDir, file);
    dependencies[relativePath] = fileImports;
  });

  return dependencies;
}

/**
 * Get all files recursively
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    
    if (CONFIG.excludeDirs.some(exclude => filePath.includes(exclude))) {
      return;
    }

    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Count file types
 */
function countFileTypes() {
  const files = getAllFiles(CONFIG.rootDir);
  const counts = {};

  files.forEach(file => {
    const ext = path.extname(file);
    counts[ext] = (counts[ext] || 0) + 1;
  });

  return counts;
}

/**
 * Main execution
 */
function main() {
  log('\n' + '='.repeat(60), 'blue');
  log('  📊 PROJECT STRUCTURE ANALYZER', 'bright');
  log('='.repeat(60) + '\n', 'blue');

  // Display directory tree
  log('📂 Directory Structure:', 'bright');
  log('');
  buildTree(CONFIG.rootDir);

  // File type statistics
  log('\n' + '='.repeat(60), 'blue');
  log('  📈 FILE TYPE STATISTICS', 'bright');
  log('='.repeat(60) + '\n', 'blue');

  const fileTypes = countFileTypes();
  Object.entries(fileTypes)
    .sort((a, b) => b[1] - a[1])
    .forEach(([ext, count]) => {
      const icon = getFileIcon(ext);
      log(`  ${icon} ${ext.padEnd(10)} : ${count} files`, getFileColor(ext));
    });

  // Dependency analysis
  log('\n' + '='.repeat(60), 'blue');
  log('  🔗 DEPENDENCY ANALYSIS', 'bright');
  log('='.repeat(60) + '\n', 'blue');

  const dependencies = analyzeImports(CONFIG.rootDir);
  const externalDeps = new Set();
  const internalDeps = {};

  Object.entries(dependencies).forEach(([file, imports]) => {
    imports.forEach(imp => {
      if (imp.type === 'external') {
        const pkg = imp.path.split('/')[0];
        externalDeps.add(pkg);
      } else {
        internalDeps[file] = (internalDeps[file] || 0) + 1;
      }
    });
  });

  log('📦 External Dependencies:', 'green');
  Array.from(externalDeps).sort().forEach(dep => {
    log(`  • ${dep}`, 'green');
  });

  log('\n🔗 Top Internal Dependencies:', 'blue');
  Object.entries(internalDeps)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([file, count]) => {
      log(`  • ${file}: ${count} imports`, 'blue');
    });

  log('\n' + '='.repeat(60), 'blue');
  log('  ✅ ANALYSIS COMPLETE', 'bright');
  log('='.repeat(60) + '\n', 'blue');
}

if (require.main === module) {
  main();
}

module.exports = { buildTree, analyzeImports, countFileTypes };

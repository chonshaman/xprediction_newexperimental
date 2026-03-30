#!/bin/bash

# Quick run script for design system sync

echo "🎨 Design System Sync"
echo ""
echo "Choose an option:"
echo "  1) One-time sync"
echo "  2) Sync + Watch (recommended for development)"
echo "  3) Scan only (no updates)"
echo "  4) Watch only"
echo ""
read -p "Enter choice [1-4]: " choice

case $choice in
  1)
    echo ""
    echo "Running one-time sync..."
    node scripts/sync-design-system-new.js
    ;;
  2)
    echo ""
    echo "Running sync + watch..."
    node scripts/sync-design-system-new.js --watch
    ;;
  3)
    echo ""
    echo "Running scan only..."
    node scripts/scan-preview-components.js
    ;;
  4)
    echo ""
    echo "Starting watcher..."
    node scripts/watch-previews.js
    ;;
  *)
    echo ""
    echo "Invalid choice. Please run again and choose 1-4."
    exit 1
    ;;
esac

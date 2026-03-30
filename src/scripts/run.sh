#!/bin/bash

# Design System Auto-Documentation Runner
# Usage: ./scripts/run.sh [command]

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Banner
echo -e "${BLUE}"
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║   🎨 Design System Auto-Documentation                        ║"
echo "║   Automated CSS Property Breakdown Generator                  ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo -e "${NC}\n"

# Parse command
COMMAND=${1:-help}

case $COMMAND in
  watch)
    echo -e "${GREEN}🔄 Starting file watcher...${NC}\n"
    node scripts/watch-and-update.js
    ;;
    
  generate)
    echo -e "${GREEN}⚡ Generating component breakdowns...${NC}\n"
    node scripts/auto-breakdown-generator.js
    ;;
    
  scan)
    echo -e "${GREEN}🔍 Scanning components...${NC}\n"
    node scripts/component-scanner.js
    ;;
    
  once)
    echo -e "${GREEN}🚀 Running single update...${NC}\n"
    node scripts/watch-and-update.js --once
    ;;
    
  help)
    echo -e "${YELLOW}Available commands:${NC}\n"
    echo "  watch      Start file watcher (auto-update on changes)"
    echo "  generate   Generate breakdowns for all components"
    echo "  scan       Analyze component structure (no changes)"
    echo "  once       Run generator once and exit"
    echo "  help       Show this help message"
    echo ""
    echo -e "${YELLOW}Examples:${NC}"
    echo "  ./scripts/run.sh watch"
    echo "  ./scripts/run.sh generate"
    echo "  ./scripts/run.sh scan"
    echo ""
    echo -e "${YELLOW}For more info:${NC}"
    echo "  Read: scripts/README.md"
    echo "  Quick start: scripts/QUICK_START.md"
    echo ""
    ;;
    
  *)
    echo -e "${RED}❌ Unknown command: $COMMAND${NC}\n"
    echo "Run './scripts/run.sh help' for available commands"
    exit 1
    ;;
esac

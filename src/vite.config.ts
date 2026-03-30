import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Bundle analyzer - generates stats.html after build
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  
  build: {
    // Target modern browsers for smaller bundle
    target: 'esnext',
    
    // Sourcemaps for production debugging (optional - remove if not needed)
    sourcemap: false,
    
    // Chunk size warnings - more aggressive for better optimization
    chunkSizeWarningLimit: 400, // Warn if chunk > 400kb (reduced from 500kb)
    
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal caching
        manualChunks: (id) => {
          // React core (most stable, best for caching)
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')) {
            return 'vendor-react';
          }
          
          // React ecosystem libraries
          if (id.includes('node_modules/react-hook-form')) {
            return 'vendor-react-forms';
          }
          
          // Animation libraries (motion, react-slick)
          if (id.includes('node_modules/motion') || 
              id.includes('node_modules/react-slick') ||
              id.includes('node_modules/slick-carousel')) {
            return 'vendor-animation';
          }
          
          // Chart libraries (recharts is large)
          if (id.includes('node_modules/recharts') ||
              id.includes('node_modules/d3-')) {
            return 'vendor-charts';
          }
          
          // Lucide icons (large icon set)
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          
          // UI component libraries
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-radix';
          }
          
          // Utility libraries
          if (id.includes('node_modules/date-fns') ||
              id.includes('node_modules/clsx') ||
              id.includes('node_modules/class-variance-authority')) {
            return 'vendor-utils';
          }
          
          // Toast notifications
          if (id.includes('node_modules/sonner')) {
            return 'vendor-toast';
          }
          
          // All other node_modules as shared vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor-other';
          }
          
          // Design system code splitting (large component)
          if (id.includes('/components/design-system/')) {
            return 'design-system';
          }
          
          // Sports page code splitting
          if (id.includes('/components/Sports') || 
              id.includes('/components/sports/') ||
              id.includes('/data/matches')) {
            return 'page-sports';
          }
          
          // Market details page code splitting
          if (id.includes('/components/MarketDetails') ||
              id.includes('/components/market-details/')) {
            return 'page-market-details';
          }
          
          // Home page components
          if (id.includes('/components/home/') ||
              id.includes('/components/hero/')) {
            return 'page-home';
          }
          
          // Presale page code splitting
          if (id.includes('/components/presale/PresalePage')) {
            return 'page-presale';
          }
          
          // Presale detail page code splitting
          if (id.includes('/components/presale/PresaleDetail') ||
              id.includes('/components/presale/PresaleStateInfo') ||
              id.includes('/components/presale/VestingProgressCard') ||
              id.includes('/components/presale/RefundCard')) {
            return 'page-presale-detail';
          }
          
          // Presale shared components
          if (id.includes('/components/presale/') ||
              id.includes('/data/presaleMarketsData')) {
            return 'presale-components';
          }
          
          // Portfolio page code splitting
          if (id.includes('/components/portfolio/')) {
            return 'page-portfolio';
          }
          
          // Watchlist page code splitting
          if (id.includes('/components/Watchlist')) {
            return 'page-watchlist';
          }
          
          // Shared UI components
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
          
          // QuickBuyModal - separate chunk since lazy loaded
          if (id.includes('/components/QuickBuyModal')) {
            return 'modal-quickbuy';
          }
          
          // BuySellBlock - separate chunk (used in sports and market details)
          if (id.includes('/components/BuySellBlock/')) {
            return 'component-buysell';
          }
        },
        
        // Naming pattern for chunks
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/[name]-[hash].js`;
        },
        
        // Naming pattern for entry files
        entryFileNames: 'assets/[name]-[hash].js',
        
        // Naming pattern for assets
        assetFileNames: (assetInfo) => {
          // Organize assets by type
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
      
      // Optimize dependencies
      external: [],
    },
    
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console.log in production
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        // Advanced optimizations
        passes: 3, // Increased from 2 for better compression
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_comps: true, // More aggressive comparisons
        keep_fargs: false, // Remove unused function arguments
        reduce_vars: true, // Collapse single-use variables
        collapse_vars: true, // Collapse multiple var declarations
        inline: 2, // Aggressive inline functions
        toplevel: true, // Mangle top-level variable names
        dead_code: true, // Remove unreachable code
      },
      mangle: {
        // Mangle property names for smaller output
        properties: false, // Be careful with this - can break code
        toplevel: true, // Mangle top-level names
        safari10: true, // Safari 10 bug workaround
      },
      format: {
        // Remove comments
        comments: false,
        ecma: 2020, // Target modern JS
      },
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Asset inline limit (files smaller than this will be inlined as base64)
    assetsInlineLimit: 2048, // Reduced from 4kb to 2kb for more aggressive optimization
    
    // Report compressed size (slower but useful)
    reportCompressedSize: true,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
    ],
    exclude: [
      // Large libraries that should be code-split
      'recharts',
      'motion/react',
      'lucide-react', // Lazy load icons
    ],
  },
  
  // Performance hints
  server: {
    hmr: {
      overlay: true,
    },
  },
});
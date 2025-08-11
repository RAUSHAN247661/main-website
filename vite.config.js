import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import vitePluginInjectDataLocator from './plugins/vite-plugin-inject-data-locator.js';
import compression from 'vite-plugin-compression';

export default defineConfig({
  // Remove base: './' to fix asset loading on Vercel
  define: {
    // Only define specific environment variables instead of entire process.env
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  plugins: [react(), vitePluginInjectDataLocator(), tailwindcss(), compression()],
  build: {
    target: 'es2020', // Update to more modern target
    minify: 'terser',
    cssMinify: true,
    reportCompressedSize: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('@heroui')) {
              return 'ui-vendor';
            }
            if (id.includes('@iconify')) {
              return 'icons';
            }
            return 'vendor';
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    allowedHosts: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});



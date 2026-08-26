import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@animations': path.resolve(__dirname, 'src/animations'),
    },
  },
  optimizeDeps: {
    // Add libraries here that need pre-bundling
  },
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message?.includes('eval')) return;
        warn(warning);
      },
      output: {
        manualChunks: {
          // Vendor chunks — split heavy libs so they cache independently
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-charts': ['recharts'],
        },
      },
    },
    // Increase warning limit since we're properly splitting now
    chunkSizeWarningLimit: 450,
  },
})

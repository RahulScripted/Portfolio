import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  optimizeDeps: {
    include: ['lottie-web'],
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message?.includes('eval')) return;
        warn(warning);
      },
    },
  },
})

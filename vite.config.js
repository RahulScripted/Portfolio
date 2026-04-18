import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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

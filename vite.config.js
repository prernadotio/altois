import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    // Vite 8 uses oxc by default — do NOT set minify: 'esbuild'
    rollupOptions: {
      output: {
        // Vite 8 requires manualChunks as a function
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'icons';
          }
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
})
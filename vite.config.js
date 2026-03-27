import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk warning limit (icons library is large)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor chunks so React + icons load separately
        // This helps browser cache them independently
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons'],
        },
      },
    },
    // Enable CSS code splitting — each component's CSS loads only when needed
    cssCodeSplit: true,
    // Minify with esbuild (default, fastest)
    minify: 'esbuild',
    // Generate source maps for debugging (remove in prod if not needed)
    sourcemap: false,
    // Inline assets smaller than 4kb
    assetsInlineLimit: 4096,
  },
})
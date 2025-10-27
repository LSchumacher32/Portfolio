import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpeg: { quality: 90 },  // Höhere Qualität für JPEG
      png: { quality: 90 },
      webp: { quality: 90 }
    })
  ],
})

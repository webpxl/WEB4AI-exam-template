import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    port: 4242,
    watch: {
      usePolling: true, // Enable polling
      interval: 1000, // Poll every 1000 milliseconds (1 second)
      ignored: ['**/node_modules/**'], // Ignore node_modules directory
    }
  }
})

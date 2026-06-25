import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Exclude the public/images folder from the file watcher.
      // Vite crashes on Windows when image files with spaces in their names
      // are locked by another process (EBUSY error).
      ignored: [
        '**/public/images/**',
      ],
    },
  },
})

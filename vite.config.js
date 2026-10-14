import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Netlify serves from the site root; GitHub Pages serves from /almutlee-new/
  base: process.env.NETLIFY ? '/' : '/almutlee-new/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

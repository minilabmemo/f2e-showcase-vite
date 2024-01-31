import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/f2e-showcase-vite/' : './',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }, 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        meow: resolve(__dirname, 'meow/index.html'),
      },
    },
  },
})

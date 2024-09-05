/// <reference types="vitest" />
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: [
      {
        find: '@goede/motion',
        replacement: resolve(__dirname, '../../src/index.ts'),
      },
    ],
  },
})

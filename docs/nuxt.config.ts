import { resolve } from 'node:path'

export default defineNuxtConfig({
  theme: '@nuxt-themes/docus',
  alias: {
    '@goede/motion': resolve(__dirname, '../src/index.ts'),
    '@goede/motion/nuxt': resolve(__dirname, '../src/nuxt/src/module.ts'),
  },
  modules: ['@goede/motion/nuxt'],
  features: {
    devLogs: false,
  },
  typescript: {
    includeWorkspace: true,
  },
  pinceau: {
    followSymbolicLinks: false,
  },
})

import { MotionPlugin } from '@goede/motion'
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(
  (nuxtApp) => {
    const config = useRuntimeConfig()

    nuxtApp.vueApp.use(MotionPlugin, config.public.motion)
  },
)

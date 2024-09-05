import { ViteSSG } from 'vite-ssg/single-page'
import { MotionPlugin } from '@goede/motion'
import App from './App.vue'

export const createApp = ViteSSG(App, ({ app }: any) => {
  app.use(MotionPlugin)

  if (import.meta.env.SSR) {
    //
  }
})

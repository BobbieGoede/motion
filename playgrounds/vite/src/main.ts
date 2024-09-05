import { MotionPlugin } from '@goede/motion'
import 'prism-theme-vars/base.css'
import { createApp } from 'vue'
import 'windi.css'
import App from './App.vue'
import Block from './components/Block.vue'
import './index.css'

const app = createApp(App)

app.use(MotionPlugin)

app.component('Block', Block)

app.mount('#app')

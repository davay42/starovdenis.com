import 'virtual:windi.css'
import { MotionPlugin } from '@vueuse/motion'

import './styles/vars.css'
import './styles/layout.postcss'
import './styles/custom-blocks.css'
import './styles/sidebar-links.postcss'

import { Theme } from 'vitepress'
import Layout from './layout.vue'
import NotFound from './not-found.vue'



const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
  },
}

export default theme
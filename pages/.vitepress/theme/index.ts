import 'virtual:windi.css'
import { MotionPlugin } from '@vueuse/motion'

import './styles/vars.css'
import './styles/layout.postcss'
import './styles/custom-blocks.css'
import './styles/sidebar-links.postcss'

import { Theme } from 'vitepress'
//@ts-ignore
import Layout from './layout.vue'
//@ts-ignore
import NotFound from './not-found.vue'


import TimeAgo from 'javascript-time-ago'
import ru from 'javascript-time-ago/locale/ru'
//@ts-ignore
TimeAgo.addDefaultLocale(ru)


const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
  },
}

export default theme

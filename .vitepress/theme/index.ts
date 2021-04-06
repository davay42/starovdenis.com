import 'virtual:windi.css'

import './styles/vars.css'
import './styles/layout.postcss'
import './styles/custom-blocks.css'
import './styles/sidebar-links.postcss'

import { Theme } from 'vitepress'
import Layout from './layout.vue'
import NotFound from './not-found.vue'

import { TroisJSVuePlugin } from 'troisjs';

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(TroisJSVuePlugin)
  },
}

export default theme

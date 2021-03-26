import type { DefaultTheme } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'

const themeConfig: DefaultTheme.Config = {
  repo: 'DeFUCC/starovdenis.com',
  logo: '/assets/s-exp.svg',
  docsDir: '.',
  docsBranch: 'master',
  docsRepo: 'DeFUCC/starovdenis.com',
  editLinks: false,
  editLinkText: 'Нашли ошибку?',
  nav,
  sidebar,
  
}

export default themeConfig

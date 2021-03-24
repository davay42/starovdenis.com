import type { DefaultTheme } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'

const themeConfig: DefaultTheme.Config = {
  repo: 'DeFUCC/psyfield.ru',
  logo: '/assets/s-exp.svg',
  docsDir: '.',
  docsBranch: 'master',
  docsRepo: 'DeFUCC/psyfield.ru',
  editLinks: true,
  editLinkText: 'Дополнить / поправить',
  nav,
  sidebar,
}

export default themeConfig

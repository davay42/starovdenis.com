import { UserConfig } from 'vitepress'
import { DefaultTheme } from '../theme/config'
import { metaData } from './constants'
import head from './head'
import getTags from '../utils/getTags'

const pages = getTags('../../pages')

const config: UserConfig<DefaultTheme.Config> = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig: {
    repo: 'DeFUCC/starovdenis.com',
    logo: '/img/davay.svg',
    docsDir: '.',
    docsBranch: 'master',
    docsRepo: 'DeFUCC/starovdenis.com',
    editLinks: false,
    editLinkText: 'Нашли ошибку?',
    nav: [
      {
        text: 'Философия',
        link: '/philosophy',
        //@ts-ignore
        items: pages.philosophy
      },
      {
        text: 'Творчество',
        link: '/creativity',
        //@ts-ignore
        items: pages.art
      },
      {
        text: 'Сотрудничество',
        //@ts-ignore
        items: pages.collab
      },
      {
        text: 'Контакты',
        link: '/contact',
        //@ts-ignore
        items: pages.contact
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Философия',
          link: '/philosophy',
          //@ts-ignore
          children: pages.philosophy
        },
        {
          text: 'Творчество',
          link: '/creativity',
          //@ts-ignore
          children: pages.art
        },
        {
          text: 'Сотрудничество',
          //@ts-ignore
          children: pages.collab
        },
        {
          text: 'Контакты',
          link: '/contact',
          //@ts-ignore
          children: pages.contact
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'));
      md.use(require('markdown-it-container'), 'card')
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost','starovdenis.com']
      })
    }
  },
  customData: {
    pages: pages
  }
}

export default config

import { UserConfig } from 'vitepress'
import { DefaultTheme } from '../theme/config'
import { metaData } from './constants'
import head from './head'
import getTags from '../utils/getTags'

const areas = getTags('../../areas')

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
        text: 'Направления',
        //@ts-ignore
        items: areas.area
      },
    
    ],
    sidebar: {
      '/': [
        {
          text: 'Направления',
          //@ts-ignore
          children: areas.main
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
    areas: areas
  }
}

export default config

import { UserConfig } from 'vitepress'
import { DefaultTheme } from '../theme/config'
import { metaData } from './constants'
import head from './head'
import getTags from '../utils/getTags'

const tags = getTags('../../skills')

const config: UserConfig<DefaultTheme.Config> = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig: {
    repo: 'DeFUCC/starovdenis.com',
    logo: '/assets/s-exp.svg',
    docsDir: '.',
    docsBranch: 'master',
    docsRepo: 'DeFUCC/starovdenis.com',
    editLinks: false,
    editLinkText: 'Нашли ошибку?',
    nav: [
      {
        text: 'Умения',
        //@ts-ignore
        items: tags.skill
      },
    
    ],
    sidebar: {
      '/': [
        {
          text: 'Умения',
          //@ts-ignore
          children: tags.skill
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
    skills: tags
  }
}

export default config

import { UserConfig } from 'vitepress'
import { DefaultTheme } from '../theme/config'
import { metaData } from './constants'
import head from './head'
import themeConfig from './theme'
import getPages from './getPages'


const config: UserConfig<DefaultTheme.Config> = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig,
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'));
      md.use(require('markdown-it-container'), 'card')
    }
  },
  customData: {
    pages: getPages('../../pages'),
  }
}

export default config

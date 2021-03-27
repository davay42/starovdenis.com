import { defineConfig } from 'vite'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'
import yaml from '@rollup/plugin-yaml';
import {resolve} from 'path'


export default defineConfig({
  plugins: [
    // @ts-ignore
    yaml(),
    Components({
      dirs: [
        '.vitepress/theme/components',
        'components',
      ],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      customLoaderMatcher: id => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    WindiCSS({
      scan: {
        dirs: ['.vitepress', 'components', 'cards'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts'],
      },
    }),
    // ViteRestart({
    //   restart: ['.vitepress/config/*.*', 'posts/*.md'],
    // }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
    ],
  },
})


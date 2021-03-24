import { defineConfig } from 'vite'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig({
  plugins: [
    Components({
      dirs: [
        '.vitepress/theme/components',
        'components',
        'cards',
      ],
      extensions: ['vue', 'ts'],
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
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'json5',
      '@vueuse/core',
      'change-case',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})

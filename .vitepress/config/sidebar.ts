import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: 'Умения',
      children: [
        { text: 'Список', link: '/' },
      ],
    },
  ],
}

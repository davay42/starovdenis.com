import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: 'Умения',
      children: [
        { text: 'Музыка', link: '/skills/music' },
        { text: 'Фото и видео', link: '/skills/photovideo' },
      ],
    },
  ],
}

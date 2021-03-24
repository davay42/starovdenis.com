import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: 'Поле',
      children: [
        { text: 'Приветствие', link: '/field/' },
        { text: 'Направления', link: '/field/areas' },
      ],
    },

    {
      text: 'Карточки',
      children: [
        { text: 'Психотипическая адаптация личности', link: '/cards/types/'},
        { text: 'Транзактный анализ', link: '/cards/transact/'},
        { text: 'Нейролингвистическое программирование', link: '/cards/nlp/'},
        { text: 'Спиральная динамика', link: '/cards/spiral/'},
        { text: 'Психоалхимия', link: '/cards/alchemy/'},
      ],
    },

    {
      text: 'Конспекты',
      children: [
        { text: 'Транзактный анализ', link: '/synopsis/transact/'},
        { text: 'Нейролингвистическое программирование', link: '/synopsis/nlp/'},
      ],
    },

    {
      text: 'О проекте',
      children: [
        { text: 'Авторы', link: '/authors' },
        { text: 'Благодарность', link: '/support' },
      ],
    },
  ],
}

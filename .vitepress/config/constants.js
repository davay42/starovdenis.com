const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://www.starovdenis.com' : 'http://localhost:3000'

export const metaData = {
  title: 'Денис К Старов',
  description: 'Мой цифровой сад',
  site,
  locale: 'ru-RU',
  image: ``,
  icon: '/media/davay.svg',
  author: 'Денис Старов',
  tags: 'денис, старов, старов денис, сайт, страничка, умения, блог',
}

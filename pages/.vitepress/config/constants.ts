const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://www.starovdenis.com' : 'http://localhost:3000'

export const metaData = {
  title: 'Денис К Старов',
  description: 'Персональный сайт',
  site,
  locale: 'ru-RU',
  image: `${site}/assets/logo-color.png`,
  icon: '/img/davay.svg',
  author: 'Денис Старов',
  tags: 'денис, старов, старов денис, сайт, страничка, умения, блог',
}

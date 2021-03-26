const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://www.psyfield.ru' : 'http://localhost:3000'

export const metaData = {
  title: 'Денис К Старов',
  description: 'Персональный сайт',
  site,
  locale: 'ru-RU',
  image: `${site}/assets/logo-color.png`,
  icon: '/assets/s-exp.svg',
  author: 'Денис Старов',
  tags: 'психология, сознание, карта, схема, график, чертеж, иллюстрации, презентации, ментальная модель, модель, нлп, транзактный анализ',
}

const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://www.psyfield.ru' : 'http://localhost:3000'

export const metaData = {
  title: 'Психологическое поле',
  description: 'Собрание карт сознания',
  site,
  image: `${site}/assets/logo-color.png`,
}

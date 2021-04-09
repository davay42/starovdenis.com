const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const glob = require('glob')

module.exports = function (dir = '../../pages', pattern = '/**/*.md') {
  const pageDir = path.resolve(__dirname, dir)

  const filesList = glob.sync(pageDir + pattern, { nodir: true })

  const tags = {}

  const all = filesList.map((file) => {
    let pathToFile = path.resolve(pageDir, file)
    let stats = fs.statSync(pathToFile)
    let fileContent = fs.readFileSync(pathToFile, 'utf8')
    let info = matter(fileContent)
    let data = {
      title: info.data?.title,
      text: info.data?.title,
      lastModified: stats.mtime,
      link:
        '/' +
        dir.split('/').pop() +
        '/' +
        path.relative(pageDir, file).split('.').shift(),
      data: info?.data,
    }

    if (typeof info?.data?.tags == 'string') {
      let tag = info?.data?.tags
      tags[tag] = tags[tag] || []
      tags[tag].push(data)
    }

    if (Array.isArray(info.data?.tags) && info?.data?.tags.length > 0) {
      info.data.tags.forEach((tag) => {
        tags[tag] = tags[tag] || []
        tags[tag].push(data)
      })
    }
    return data
  })

  return { all, ...tags }
}

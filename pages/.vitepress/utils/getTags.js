const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const glob = require('glob')
const { url } = require('inspector')

module.exports = function (dir = '../../pages', pattern = '/**/*.md') {
  const pageDir = path.resolve(__dirname, dir)

  const filesList = glob.sync(pageDir + pattern, { nodir: true })
  const tags = {}

  const all = filesList.map((file) => {
    let pathToFile = path.resolve(pageDir, file)
    let stats = fs.statSync(pathToFile)
    let fileContent = fs.readFileSync(pathToFile, 'utf8')
    let info = matter(fileContent)
    let relLink = path.relative(pageDir, file)
    let url = relLink.includes('index.md')
      ? relLink.slice(0, -8)
      : relLink.slice(0, -3)
    let data = {
      title: info.data?.title,
      subtitle: info.data?.subtitle,
      text: info.data?.title,
      lastModified: stats.mtime,
      link: '/' + url,
      data: info?.data,
      more: !!info.content,
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

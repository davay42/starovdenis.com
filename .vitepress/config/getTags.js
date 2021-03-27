import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { glob } from 'glob'

export function getTags(dir = '../../pages', pattern = '/**/*.md') {
  const pageDir = path.resolve(__dirname, dir)

  const filesList = glob.sync(pageDir + pattern, { nodir: true })

  const tags = {}

  const all = filesList.map((file) => {
    let info = matter(fs.readFileSync(path.resolve(pageDir, file), 'utf8'))
    let data = {
      title: info.data?.title,
      url:
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

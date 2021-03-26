import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { glob } from 'glob'

export default function (dir = '../pages', pattern = '/**/*') {
  const pageDir = path.resolve(__dirname, dir)

  const filesList = glob.sync(pageDir + pattern, { nodir: true })

  console.info(`Found ${filesList.length} pages`)

  const filesContent = filesList.map((file) => {
    let info = matter(fs.readFileSync(path.resolve(pageDir, file), 'utf8'))

    info.url = path.relative(pageDir, file).split('.').shift()

    return info
  })

  return filesContent
}

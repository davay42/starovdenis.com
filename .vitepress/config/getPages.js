import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
//@ts-ignore
import { glob } from 'glob'

export default function (dir = '../pages', pattern = '/**/*.md') {
  const pageDir = path.resolve(__dirname, dir)

  const filesList = glob.sync(pageDir + pattern, { nodir: true })

  console.info(`Found ${filesList.length} pages`)
  //@ts-ignore
  const filesContent = filesList.map((file) => {
    let info = matter(fs.readFileSync(path.resolve(pageDir, file), 'utf8'))
    //@ts-ignore
    info.url = path.relative(pageDir, file).split('.').shift()

    return info
  })

  return filesContent
}

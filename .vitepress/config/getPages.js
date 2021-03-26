const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const glob = require('glob')

exports.getPages = function getPages(dir = '../pages', pattern = '/**/*') {
  const pageDir = path.resolve(__dirname, dir)

  const fileList = glob.sync(pageDir + pattern, { nodir: true })

  console.info(`Found ${fileList.length} pages`)

  const fileContent = fileList.map((file) => {
    let info = matter(fs.readFileSync(path.resolve(pageDir, file), 'utf8'))

    info.url = path.relative(pageDir, file).split('.').shift()

    return info
  })

  return fileContent
}

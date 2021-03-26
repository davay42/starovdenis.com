const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

exports.getPosts = function getPosts() {
  console.log('reading posts...')
  const postDir = path.resolve(__dirname, '../../posts')
  const fileList = fs.readdirSync(postDir)
  const fileContent = fileList.map((file) =>
    matter(fs.readFileSync(path.resolve(postDir, file), 'utf8')),
  )
  return fileContent
}

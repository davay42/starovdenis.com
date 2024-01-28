import download from 'image-downloader'

import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from 'node:fs'

import { server } from './directus.js'


export async function downloadImages({
  records = [],
  field = 'cover',
  folder = 'media',
  format = 'webp',
  quality,
  width,
} = options) {

  const query = Object.entries({ quality, width, format }).filter(([key, value]) => value).map(([key, value]) => `${key}=${value}`).join('&')

  const dirname = path.dirname(fileURLToPath(import.meta.url));
  let dest = path.resolve(dirname, '../content/public/', folder)
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const urls = []

  for (let r of records) {
    if (!r?.[field]) continue
    let fileName = `${(r.slug || r.id)}-${field}.${format}`;
    let filePath = path.resolve(dest, fileName)
    let url = `${server}/assets/${r[field]}?${query}&download`
    urls.push({ url, exists: fs.existsSync(filePath), slug: (r.slug || r.id), dest: filePath, fileName, path: `${folder}/${fileName}` })
  }

  downloadList(urls)

  return urls
}

export async function downloadFiles({
  records = [],
  folder = 'files',
  field = 'files',
} = options) {

  const dirname = path.dirname(fileURLToPath(import.meta.url));
  let dest = path.resolve(dirname, '../content/public/', folder)
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const urls = []

  for (let r of records) {
    if (!r?.[field] || r?.[field].length == 0) continue

    for (let file of r[field]) {
      let info = file.directus_files_id
      let fileName = info.filename_download;
      let filePath = path.resolve(dest, fileName)
      let url = `${server}/assets/${info.id}&download`
      urls.push({ url, exists: fs.existsSync(filePath), slug: info.filename_disk, dest: filePath, fileName, path: `${folder}/${fileName}` })
    }
  }

  downloadList(urls)

  return urls
}

async function downloadList(urls, chunkSize = 5) {
  for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    await Promise.all(chunk.map(rec => {
      if (rec.exists) return
      console.log('downloading file:', rec.path)
      return download.image(rec)
    }));
  }
}
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ViteYaml from '@modyfi/vite-plugin-yaml';

import path from "node:path";
import { fileURLToPath } from "node:url";
const dirname = path.dirname(fileURLToPath(import.meta.url));

import meta from '../meta.json'

export default defineConfig(async (ctx) => {

  return {
    srcDir: "content",
    outDir: "dist",
    logo: meta.logo,
    title: meta.title,
    titleTemplate: meta.title_template,
    description: meta.description,
    sitemap: {
      hostname: meta.public_url,
    },
    markdown: {
      headers: {
        level: [0, 0],
      },
    },
    vite: {
      resolve: {
        alias: {
          "#/": path.resolve(dirname, "../"),
        },
      },
      plugins: [
        ViteYaml(),
        Unocss(),
        AutoImport({
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/, /\.vue\?vue/, // .vue
            /\.md$/, // .md
          ],
          imports: [
            // presets
            'vue',
            'vitepress'
          ],
          dirs: [
            './composables'
          ]
        }),
        Components({
          dirs: ['../components'],
          extensions: ['vue'],
          directoryAsNamespace: true,
          collapseSamePrefixes: true,
          globalNamespaces: ['global'],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          exclude: [/node_modules/, /\.git/],
        }),
      ],
    },
    head: [

    ],
    async transformPageData(pageData) {
      if (pageData.frontmatter?.dynamic) {
        pageData.title = pageData.params?.title
        pageData.description = pageData.params?.description

        pageData.frontmatter = {
          ...pageData.frontmatter,
          ...pageData.params,
        }
      }
    },
    //@ts-ignore
    transformHead({ pageData }) {
      const url = pageData.relativePath.split('index.md')[0]

      const head = [

        ['link', { rel: 'icon', href: meta.logo }],

        process.env.NODE_ENV === "production" && meta.stat_script && meta.stat_data_id ? ["script", { async: true, defer: true, [meta.stat_data_tag || "data-website-id"]: meta.stat_data_id, src: meta.stat_script }] : null,

        meta.icon ? ["link", { rel: "icon", type: "image/svg+xml", href: meta.icon }] : null,

        meta?.author ? ["meta", { name: "author", content: meta?.author }] : null,

        meta?.keywords ? ["meta", { name: "keywords", content: meta?.keywords?.join(', ') }] : null,

        meta.color ? ["meta", { name: "theme-color", content: meta.color }] : null,

        ["meta", { property: "og:type", content: "website" }],

        meta.site ? ["meta", { property: "og:site", content: meta.site }] : null,

        meta.title ? ["meta", { property: "og:site_name", content: meta.title }] : null,

        ['meta', { property: 'og:title', content: `${pageData.title} | ${meta.title}` }],
        ['meta', { property: 'og:description', content: pageData.description }],

        meta.public_url ? ['meta', { property: 'og:url', content: meta.public_url + url }] : null,
        ['meta', { property: 'og:image', content: pageData.frontmatter?.cover || meta?.cover }],

        meta.locale ? ["meta", { property: "og:locale", content: meta.locale }] : null,

        meta.title ? ['meta', { name: 'twitter:title', content: `${pageData.title} | ${meta.title}` }] : null,

        meta?.author ? ['meta', { name: 'twitter:site', content: `@${meta.author}` }] : null,

        meta?.author ? ['meta', { name: 'twitter:creator', content: `@${meta.author}` }] : null,
        ['meta', { name: 'twitter:image', content: pageData.frontmatter?.cover || meta?.cover }],

        ['meta', { name: 'twitter:description', content: pageData.description }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "white-translucent", },],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "HandheldFriendly", content: "True" }],
        ["meta", { name: "MobileOptimized", content: "320" }],
      ]
      return head.filter(Boolean)
    }
  }
})
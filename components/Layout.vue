<script setup>
import { useData, useRoute } from 'vitepress'

import meta from '../.vitepress/meta.json'

import { data as pages } from '../data/pages.data.js'

import '../styles/markdown.postcss'
import '../styles/main.postcss'
import '../styles/transitions.postcss'

const { frontmatter: f, page, params } = useData()

const route = useRoute()

</script>

<template lang='pug'>
main
  header.main
    img.logo(:src="`${meta.logo}`")
    .flex.flex-col
      h1.title
        a(href="/") {{ meta.title }}
      h2.description {{ meta.description }}
  nav
    a.p-4.bg-light-700.flex-1.text-center(
      v-for="main in pages.main" :key="main"
      :href="`/${main.slug}/`"
      :aria-current="page.relativePath.includes(main.slug)"
    ) {{ main.title }} 

  transition(name="fade" mode="out-in")
    article.flex-auto(:key="route.path")
      header.page.relative
        .cover.h-80.bg-center.bg-cover(
          :style="{backgroundImage: `url(${f?.cover})`}")

        .flex.flex-col.gap-2.p-4.absolute.bottom-0.bg-warm-gray-200.w-full.bg-opacity-70.backdrop-blur(v-if="f.title")


      .p-4.flex.flex-col.gap-4(
        v-if="f.layout == 'home'"
        )
        .text-6xl {{ meta.slogan }}
        .text-xl.opacity-60 {{  meta.company }}
        .text-lg {{ meta.description }}

      content.markdown-body

      aside.files.px-4.flex.flex-wrap(v-if="f?.files?.length>0")
        //- pre {{ f.files }}
        a.p-4.flex.items-center.gap-2.bg-light-700.shadow-sm.hover-shadow.rounded(
          v-for="file in f.files" :key="file"
          download
          :href="`${server}/assets/${file.directus_files_id.id}`"
          ) 
          .i-la-file.text-4xl
          .flex.flex-col
            .text-xl {{ file.directus_files_id.title }}
            .font-mono.text-xs {{ file.directus_files_id.filename_download }} - {{ (file.directus_files_id.filesize/1024).toFixed() }} kB

      aside.gallery(v-if="f.gallery")
        .text-lg Gallery
        .p-0(v-for="image in f.gallery") {{ image.directus_files_id }}

      .flex.flex-wrap.gap-4.flex-1.items-end.p-4
        a.bg-light-100.flex-1.relative(
          style="flex: 1 1 200px"
          v-for="page in f.pages" :key="page"
          :href="'/' + [page?.root?.root?.slug, page?.root?.slug, page.slug].filter(Boolean).join('/') + '/'"
          ) 
          .h-60.bg-cover.bg-center(
            :style="{backgroundImage:`url(${server}/assets/${page.cover})`}")
          .p-4.text-xl.absolute.bottom-0.bg-light-300.bg-opacity-70.w-full.backdrop-blur {{ page.title }}

  footer
    .p-0 ©️ 2024
    .flex-1 
    .p-0 {{ meta.company }} 

</template>


<script setup>
import { useData, useRoute } from 'vitepress'

import PhysicsCanvas from '../components/PhysicsCanvas.vue'

import meta from "../meta.json"


import { data as pages } from '../data/pages.data.js'


const { frontmatter: f, page, params } = useData()

const route = useRoute()

</script>

<template lang='pug'>
main.site-grid.dark-text-light-300.min-h-100vh.flex.flex-col
  .site-grid.grid.dark-text-light-300.flex-1
    a.p-0.bg-yellow-500.shadow.row-span-2.min-h-80(href="/")
      img.logo(:src="`${meta?.logo}`")

    .text-8xl.p-4.flex.items-end.bg-light-500.dark-bg-dark-400.shadow

      a(href="/") {{ f?.title }}

    .p-4.flex.items-end.bg-light-500.dark-bg-dark-400.shadow.text-2xl {{ f?.description }}

    a.row-span-2.p-8.bg-yellow-200.dark-bg-yellow-600.font-bold.text-10vw.flex.items-center(href="/cv/") CV

    a.p-8.bg-blue-200.dark-bg-blue-600.font-bold.text-lg.flex.items-center(href="/web-dev/") Web Development 

    a.p-8.bg-purple-200.dark-bg-purple-600.font-bold.text-lg.flex.items-center(href="/music/") Music 

    a.p-8.bg-green-200.dark-bg-green-600.font-bold.text-lg.flex.items-center(href="/philosophy/") Philosophy

    PhysicsCanvas

    content.markdown-body.md-col-span-2.dark-bg-dark-400

    .py-4.px-2.flex.flex-col.bg-gray-200.dark-bg-dark-700.shadow.gap-2
      a.flex.items-center.gap-2(
        href="https://www.github.com/davay42"
        target="_blank"
        )
        .i-la-github
        .p-0 davay42
      a.flex.items-center.gap-2(
        href="https://t.me/starov"
        target="_blank"
        )
        .i-la-telegram
        .p-0 starov 
      a.flex.items-center.gap-2(
        href="https://instagram.com/starov"
        target="_blank"
        )
        .i-la-instagram
        .p-0 starov 
      a.flex.items-center.gap-2(
        href="https://www.facebook.com/d.starov"
        target="_blank"
        )
        .i-la-facebook
        .p-0 d.starov 
      a.flex.items-center.gap-2(
        href="mailto:me@starovdenis.com"
        )
        .i-la-at.min-w-5
        .p-0 me@starovdenis.com



  .p-8.bg-dark-200.flex.items-center.text-light-300
    a.text-lg.flex-1(href="/") Denis Starov
    .text-sm 2024
</template>

<style lang="postcss" scoped>
ul {
  @apply font-normal;
}

.site-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
}
</style>
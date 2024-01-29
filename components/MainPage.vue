<script setup>
import { useData, useRoute } from 'vitepress'

import meta from "../meta.json"


import { data as pages } from '../data/pages.data.js'


const { frontmatter: f, page, params } = useData()

const route = useRoute()

</script>

<template lang='pug'>
main.grid.grid-cols-2.md-grid-cols-3.lg-grid-cols-4.p-4.xl-grid-cols-6.gap-4

  a.p-0.bg-yellow-500.shadow.row-span-2(href="/")
    img.logo(:src="`${meta.logo}`")

  .p-4.flex.flex-col.bg-light-500.shadow
    .text-4xl
      a(href="/") {{ f.title }}
    .flex-1
    .description {{ f.description }}


  .py-4.px-2.flex.flex-col.bg-gray-200.shadow.gap-2
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



  a.row-span-2.p-8.bg-yellow-200.font-bold.text-lg.flex.items-center(href="/cv/") CV

  a.p-8.bg-blue-200.font-bold.text-lg.flex.items-center(href="/web-dev/") Web Development 

  a.p-8.bg-purple-200.font-bold.text-lg.flex.items-center(href="/music/") Music 

  a.p-8.bg-green-200.font-bold.text-lg.flex.items-center(href="/philosophy/") Philosophy 



  content.markdown-body.col-span-2
</template>

<style lang="postcss" scoped>
ul {
  @apply font-normal;
}
</style>
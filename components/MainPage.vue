<script setup>
import { useData, useRoute } from 'vitepress'

import PhysicsCanvas from '../components/PhysicsCanvas.vue'

import meta from "../meta.json"


import { data as pages } from '../data/pages.data.js'


const { frontmatter: f, page, params } = useData()

const route = useRoute()

import { useMouseInElement } from '@vueuse/core'

const logo = ref(null)
const { elementX: logoX, elementY: logoY, isOutside: logoOut } = useMouseInElement(logo)


const titleBox = ref(null)
const { elementX: titleX, elementY: titleY, isOutside: titleOut } = useMouseInElement(titleBox)

const descBox = ref(null)
const { elementX: descX, elementY: descY, isOutside: descOut } = useMouseInElement(descBox)

const cv = ref(null)
const { elementX: cvX, elementY: cvY, isOutside: cvOut } = useMouseInElement(cv)

const web = ref(null)
const { elementX: webX, elementY: webY } = useMouseInElement(web)


</script>

<template lang='pug'>
main.site-grid.dark-text-light-300.min-h-100vh.flex.flex-col 
  .site-grid.grid.dark-text-light-300.flex-1
    a.p-0.bg-yellow-500.shadow.row-span-2.min-h-80.relative.overflow-clip(href="/" ref="logo")

      .p-40.bg-yellow-300.absolute.-top-20.-left-20.rounded-full.filter.blur-2xl.z-0.op-40.transition-none(:style="{transform:`translate(${logoX}px, ${logoY}px)`}")

      img.logo(:src="`${meta?.logo}`")

    .text-8xl.p-4.flex.items-end.bg-light-500.dark-bg-dark-400.shadow.relative.overflow-clip(ref="titleBox")



      svg.w-120.absolute.-top-60.-left-60.filter.z-0.transition-none.op-50(:style="{transform:`translate(${titleX}px, ${titleY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        circle.stroke-dark-300(:r="c*3" stroke-width=".25" v-for="c in 15")

      a.z-20(href="/") {{ f?.title }}


    .p-4.flex.items-end.bg-light-500.dark-bg-dark-400.shadow.text-2xl.relative.overflow-clip(ref="descBox")

      svg.w-80.absolute.-top-40.-left-40.filter.z-0.transition-none.op-50(:style="{transform:`translate(${descX}px, ${descY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        circle.fill-red-300(:r="50")

      .z-4 {{ f?.description }}

    a.row-span-2.p-8.bg-yellow-200.dark-bg-yellow-600.font-bold.text-10vw.flex.items-center.relative.overflow-clip(href="/cv/" ref="cv")

      svg.w-120.absolute.-top-60.-left-60.filter.z-0.transition-none.op-50(:style="{transform:`translate(${cvX}px, ${cvY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        rect.fill-green-300(:width="40" :x="-20" :y="-20" :height="40")

      .z-4 CV

    a.p-8.bg-blue-200.dark-bg-blue-600.font-bold.text-2xl.flex.items-center.relative.overflow-clip(href="/web-dev/" ref="web") 

      svg.w-120.absolute.-top-60.-left-60.filter.z-0.transition-none.op-50(:style="{transform:` translate(${webX}px, ${webY}px) rotate(45deg)`}" viewBox="-50 -50 100 100" fill="none" )
        rect.fill-purple-400(:width="20" :x="-10" :y="-10" :height="20")

      .z-4 Web Development 

    a.p-8.bg-purple-200.dark-bg-purple-600.font-bold.text-2xl.flex.items-center(href="/music/") Music 

    a.p-8.bg-green-200.dark-bg-green-600.font-bold.text-2xl.flex.items-center(href="/philosophy/") Philosophy

    //- PhysicsCanvas

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
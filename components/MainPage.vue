<script setup>
import { useData, useRoute } from 'vitepress'


import meta from "../meta.json"


import { data as pages } from '../data/pages.data.js'


const { frontmatter: f, page, params } = useData()

const route = useRoute()

import { useMouseInElement } from '@vueuse/core'

const body = ref(null)
const { elementX: bodyX, elementY: bodyY } = useMouseInElement(body)

const logo = ref(null)
const { elementX: logoX, elementY: logoY, } = useMouseInElement(logo)

const titleBox = ref(null)
const { elementX: titleX, elementY: titleY } = useMouseInElement(titleBox)

const descBox = ref(null)
const { elementX: descX, elementY: descY } = useMouseInElement(descBox)

const cv = ref(null)
const { elementX: cvX, elementY: cvY } = useMouseInElement(cv)

const web = ref(null)
const { elementX: webX, elementY: webY } = useMouseInElement(web)

const ph = ref(null)
const { elementX: phX, elementY: phY } = useMouseInElement(ph)

const music = ref(null)
const { elementX: musX, elementY: musY } = useMouseInElement(music)

const cont = ref(null)
const { elementX: contX, elementY: contY } = useMouseInElement(cont)

const contacts = ref(null)
const { elementX: contactsX, elementY: contactsY } = useMouseInElement(contacts)

</script>

<template lang='pug'>
main.w-full.site-grid.dark-text-light-300.min-h-100vh.flex.flex-col(
  ref="body"
  :style="{background: `radial-gradient(circle at ${bodyX}px ${bodyY}px, hsla(40deg,100%,50%,.4) 10%, hsla(40deg,100%,10%,0) 20%`}")

  .site-grid.grid.dark-text-light-300.flex-1.overflow-hidden

    a.p-0.bg-yellow-500.shadow.row-span-2.min-h-80.relative.overflow-clip(href="/" ref="logo")

      .p-40.bg-yellow-300.absolute.-top-20.-left-20.rounded-full.filter.blur-2xl.z-0.op-40.transition-none(:style="{transform:`translate(${logoX}px, ${logoY}px)`}")

      img.logo(:src="`${meta?.logo}`")

    .text-8xl.p-4.flex.items-end.bg-light-500.dark-bg-dark-400.shadow.relative.overflow-clip(ref="titleBox")


      svg.w-120.absolute.-top-60.-left-60.filter.z-0.transition-none.op-50(:style="{transform:`translate(${titleX}px, ${titleY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        circle.stroke-dark-300.dark-stroke-light-300(:r="c*3" stroke-width=".25" v-for="c in 15")

      .z-20 {{ f?.title }}


    .p-4.flex.items-end.bg-light-500.dark-bg-dark-400.shadow.text-2xl.relative.overflow-clip(ref="descBox")

      svg.w-80.absolute.-top-40.-left-40.filter.z-0.transition-none.op-50(:style="{transform:`translate(${descX}px, ${descY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        circle.fill-red-300(:r="50")

      .z-4 {{ f?.description }}

    a.p-8.row-span-2.bg-yellow-200.dark-bg-yellow-600.font-bold.text-10vw.flex.items-center.relative.overflow-clip(href="/cv/" ref="cv")

      svg.w-120.absolute.-top-60.-left-60.filter.z-0.transition-none(:style="{transform:`translate(${cvX}px, ${cvY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        rect.fill-green-300(:width="40" :x="-20" :y="-20" :height="40")

      .z-4 CV

    a.p-8.bg-blue-200.dark-bg-blue-600.font-bold.text-2xl.flex.items-center.relative.overflow-clip(href="/web-dev/" ref="web") 

      svg.w-120.absolute.-top-60.-left-60.filter.z-0.transition-none(:style="{transform:` translate(${webX}px, ${webY}px) rotate(45deg)`}" viewBox="-50 -50 100 100" fill="none" )
        rect.fill-purple-400(:width="20" :x="-10" :y="-10" :height="20")

      .z-4 Web Development 


    a.p-8.bg-purple-200.dark-bg-purple-600.font-bold.text-2xl.flex.items-center.relative.overflow-clip(href="/music/" ref="music") 

      .i-ic-round-pentagon.text-200px.text-light-blue-200.dark-text-light-blue-500.absolute.transition-none.-left-30.-top-30(:style="{transform:`translate(${musX}px, ${musY}px)`}")
      .z-4 Music 

    a.p-8.bg-green-200.dark-bg-green-600.font-bold.text-2xl.flex.items-center.relative.overflow-clip(href="/philosophy/" ref="ph")

      .i-uis-triangle.text-200px.text-yellow-200.dark-text-yellow-500.absolute.transition-none.-left-30.-top-30(:style="{transform:`translate(${phX}px, ${phY}px)`}")

      .z-4 Philosophy

    .p-8.markdown-body.md-col-span-2.dark-bg-dark-400.relative.overflow-clip.bg-light-200.dark-bg-dark-300(ref="cont")

      svg.w-100.absolute.-top-50.-left-50.filter.blur-xl.z-0.transition-none.op-70(:style="{transform:`translate(${contX}px, ${contY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        circle.fill-orange-300(:r="40" )

      content.markdown-body.md-col-span-2

    MyContacts.p-8.relative.overflow-clip(ref="contacts")
      svg.w-80.absolute.-top-40.-left-40.filter.z-0.transition-none.op-50(:style="{transform:`translate(${contactsX}px, ${contactsY}px)`}" viewBox="-50 -50 100 100" fill="none" )
        circle.fill-orange-300.dark-fill-orange-500(:r="30")

    //- PhysicsCanvas

  .p-8.bg-dark-200.flex.items-center.text-light-300(
    :style="{background: `radial-gradient(circle at ${bodyX}px ${bodyY}px, hsla(270deg,0%,50%,1), hsla(270deg,0%,20%,1)`}"
  )
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
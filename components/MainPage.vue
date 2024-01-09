<script setup>
import { useData, useRoute } from 'vitepress'

import meta from "../meta.json"


import { data as pages } from '../data/pages.data.js'


const { frontmatter: f, page, params } = useData()

const route = useRoute()

</script>

<template lang='pug'>
main.grid.grid-cols-2.md-grid-cols-3.lg-grid-cols-4.p-4.xl-grid-cols-6.gap-4


  .p-0.bg-yellow-500.shadow
    img.logo(:src="`${meta.logo}`")



  .p-4.flex.flex-col.bg-light-500.shadow
    .text-4xl
      a(href="/") {{ meta.title }}
    .flex-1
    .description {{ meta.description }}



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


  .p-4.flex.flex-col.gap-1.relative
    a.absolute.top-2.right-2.text-2xl(
      target="_blank"
      href="https://en.wikipedia.org/wiki/Practical_philosophy")
      .i-la-link
    font-bold.text-lg.font-bold Practical philosophy
    .p-0 I persue radical consistency of my values and practices of all scales. And I constantly refine my values by reflecting on all the experience I get along this life-long research. 



  .p-4.flex.flex-col.gap-2.bg-yellow-100
    .text-sm.opacity-60 VALUE #1
    .text-4xl Universal unity. 
    .text-2xl Every living being is a sacred vessel of the same One Consciousness.



  .p-6.bg-light-500
    .text-2xl.font-italic "Looking deep into others' eyes, I find myself. Going deep within myself, I find common good."



  a.p-4.bg-green-200.relative.gap-2.flex.flex-col.gap-2(
    href="/vegan/"
    )


    absolute.top-2.right-2.text-6xl 🌱
    .text-sm.opacity-60 PRACTICE #1
    .text-4xl.font-bold VEGAN 
    .p-0.flex-1 Killing animals for food is superfluous. I eat only plants, mushrooms, mictobial and mineral products and it's quite a pleasant way of life for a human being.



  .p-4
    .p-0  socio-cultural designer. Interface artist in broad sense. I love learning new skills and once decided to try everything I can get access to find things I'm really into. Flow state and skill transfer along with wonderful people of arts and crafts are the drivers of this life long research.



  ul.p-4
    li 



  .p-4.col-span-2
    web-sites and web-apps for the best ideas and projects I get into. Eventually some projects grow beyond just code and text and I'm happy to grow with them further.
    I could be a designer, a frontend developer, or an engineer, but I combine all that and more into broad range self-guided web development. I'm building my dream interfaces, web sites and apps for more than 10 years. And yet barely started! I'm deep into the modern frontend development, and this page is home for all of the code I've been contributing to the global community since 2012. And I welcome you here! 🌊
</template>

<style lang="postcss" scoped>
ul {
  @apply font-normal;
}
</style>
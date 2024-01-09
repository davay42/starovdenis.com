<script setup>
import '../styles/markdown.postcss'
import '../styles/transitions.postcss'

import { useData, useRoute } from 'vitepress'

import meta from "../meta.json"

const { frontmatter: f, page, params } = useData()

</script>

<template lang='pug'>
MainPage(v-if="f?.layout == 'home'")
template(v-else)  
  .grid.grid-cols-2.md-grid-cols-3.lg-grid-cols-4.p-4.xl-grid-cols-6.gap-4
    a.p-0.bg-yellow-500.shadow(href="/")
      img.logo(:src="`${meta.logo}`")

    .p-4.flex.flex-col.bg-light-500.shadow(
      :style="{background:f.color || ''}"
      )
      .text-4xl
        a(href="/") {{ f.title }}
      .flex-1
      .description {{ f.description }}
    main.col-span-2
      content.markdown-body
</template>

<style lang="postcss">
html {
  @apply bg-light-300;
}

html * {
  @apply transition duration-100;
}
</style>
<template lang="pug">
.flex.flex-wrap.max-w-60ch.mx-auto
  a.card(
    v-for="page in site.customData.pages[frontmatter.list]"
    :key= "page.link"
    :href="page.link"
  ) 
    img.rounded(
      style="margin:  1rem 0"
      v-if="page.data.cover"
      :src="page.data.cover"
    )
    .p-2.my-auto
      .text-xl.font-bold {{ page.title }}
      .text-2xl.my-4.font-bold {{ page.data.sans }}
      .text-xl.my-4.opacity-70 {{ page.data.trans }}
      .text-sm {{ page.subtitle }}
</template>

<script setup>
import { useData } from 'vitepress'
const { site, frontmatter } = useData();
</script>

<style scoped>
.card {
  scroll-snap-align: start;
  @apply flex flex-col rounded-lg bg-light-400 dark:(bg-dark-100) transition-all duration-300 p-4 m-4 shadow-lg no-underline hover:shadow-2xl items-center;
  flex: 1 1 45%;
}
</style>
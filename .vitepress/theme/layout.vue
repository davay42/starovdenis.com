<template lang="pug">
.page 
  .header
    page-header
    nav-bar

  transition(name="fade" mode="out-in" )
    .content(:key="route.path")
      header.mb-8
        h1.text-4xl.font-bold.mb-8.text-center {{ frontmatter.title }}
        .max-w-xl.mx-auto.sans.font-bold.mb-4.text-center {{ frontmatter.sans }}
        .max-w-xl.mx-auto.text-2xl.mb-4.text-center {{ frontmatter.trans }}
        .max-w-xl.mx-auto.text-xl.text-center {{ frontmatter.subtitle }}
      content
      page-list(
        v-if="frontmatter.list"
      )
      page-parents
  page-footer
  panel-dock
</template>

<script setup>
import { useData, useRoute } from 'vitepress'
const { site, frontmatter } = useData();
const route = useRoute();
</script>

<style scoped>
.page {
  @apply text-center;
}
.header {
  @apply bg-light-100 dark:bg-dark-600 pt-8 pb-4 mb-12 shadow-xl;
}
.content {
  @apply px-3 sm:px-4 pb-16;
}
</style>
<template lang="pug">
.page
  .panels
    page-header.header
    .content
      transition(name="fade" mode="out-in" )
        div(:key="route.path")
          page-parents
          header.my-8.px-8
            h1.text-4xl.font-bold.mb-8 {{ frontmatter.title }}
            .text-xl {{ frontmatter.subtitle }}
          content.px-8.mb-16

          page-list.panel(
          :key="route.path"
          v-if="frontmatter.list"
            )
          page-siblings
  page-footer
</template>

<script setup>
import { useData, useRoute } from 'vitepress'
const { site, frontmatter } = useData();
const route = useRoute();
</script>

<style scoped>
.page {
  @apply min-h-100vh flex flex-col;
}
.panels {
  @apply flex overflow-x-scroll overflow-y-scroll;
  scroll-snap-type: x mandatory;
  flex: 1 1 100%;
  & > * {
    flex: 1 1 100%;
    @apply max-w-65ch min-w-25ch sticky left-0;
    scroll-snap-align: start;
  }
}
.panel {
  @apply bg-light-800 dark:bg-dark-300;
  flex: 1 1 320px;
}
.content {
  @apply min-w-full flex flex-col justify-between sm:min-w-320px bg-light-400 dark:bg-dark-500 shadow-2xl;
  flex: 100 1 65ch;
}
.header {
  @apply bg-true-gray-200 dark:bg-true-gray-800 p-8 shadow-xl;
  scroll-snap-align: end;
  flex: 0 1 300px;
}
</style>
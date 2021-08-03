<template lang="pug">
.layout
  .panels
    page-header.header
    .content
      transition(name="fade" mode="out-in" )
        .flex.flex-col.h-full(:key="route.path")
          page-parents
          header.my-8.px-8
            h1.text-4xl.font-bold.mb-8 {{ frontmatter.title }}
            .text-xl {{ frontmatter.subtitle }}
          content.px-8.mb-16.markdown

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
.layout {
  @apply min-h-100vh flex flex-col;
  background: url(/img/gora.jpg);
  background-size: cover;
  background-attachment: fixed;
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
  @apply bg-light-800/90 dark:bg-dark-300;
  flex: 1 1 clamp(320, 100%, 65ch);
}
.content {
  @apply min-w-full flex flex-col justify-between sm:min-w-320px bg-light-400/95 dark:bg-dark-500/95 shadow-2xl;
  flex: 1 1 clamp(320, 100%, 65ch);
  backdrop-filter: blur(30px);
}
.markdown {
  flex: 1 1 100%;
}
.header {
  @apply bg-true-gray-200/50 dark:bg-true-gray-800/50 p-8 shadow-xl;
  scroll-snap-align: end;
  flex: 0 1 300px;
  backdrop-filter: blur(20px);
}
</style>
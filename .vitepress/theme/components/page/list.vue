<template lang="pug">
.cards
  a.card(
    v-for="page in pages"
    :key= "page.link"
    :href="page.link"
  ) 
    img.rounded(
      style="margin:  1rem 0"
      v-if="page.data.cover"
      :src="page.data.cover"
    )
    .p-2
      .title {{ page.title }}
      .text-md.mt-2(v-if="page.subtitle") {{ page.subtitle }}
    .time
      ic-round-update.mr-1
      .p-0 {{ getDate(page.lastModified) }}
</template>

<script setup>
import { useData } from 'vitepress'
const { theme, frontmatter } = useData();

const pages = theme.value.pages[frontmatter.value.list];

function getDate(timestamp) {
  let date = new Date(timestamp)
  return date.toLocaleString('default', { month: 'short', year: '2-digit' });
}

</script>

<style scoped>
.cards {
  @apply flex flex-wrap p-4;
}
.card {
  scroll-snap-align: start;
  @apply text-left flex min-w-250px flex-col relative rounded-md bg-light-400 dark:(bg-dark-100) shadow-md transition-all duration-200 p-4 m-2 no-underline hover:(bg-light-100 shadow-lg dark:(bg-dark-400));
  flex: 1 1 45%;
  & .title {
    @apply text-xl font-bold md:text-2xl;
  }
  & .time {
    @apply absolute right-8px bottom-4px opacity-10 text-xs flex items-center transition-all duration-400;
  }
  &:hover .time {
    @apply opacity-80;
  }
}
</style>
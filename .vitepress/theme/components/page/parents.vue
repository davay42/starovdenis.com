<template lang="pug">
.flex.flex-wrap.items-center.my-8.max-w-60ch.mx-auto.items-stretch
  a.link(v-if="previous" :href="previous.link") 
    carbon-arrow-left.mr-1
    span {{ previous.title }}
  a.link(v-for="page in parents", :key="page.title" :href="page.link") 
    carbon-arrow-up.mr-1
    span {{ page.title }}
  a.link(v-if="next" :href="next.link") 
    carbon-arrow-right.mr-1
    span {{ next.title }}
</template>

<script setup>
import { useData } from 'vitepress'
const { site, frontmatter, page } = useData()

const tags = frontmatter.value.tags
const pages = site.value.customData.pages


const parents = computed(() => getParents(frontmatter.value.tags, pages.all))
const previous = computed(() => {
  let index = findIndex()
  if (index > 0) {
    return pages[frontmatter.value.tags][index - 1]
  }
  return null
})
const next = computed(() => {
  let index = findIndex()
  if (index >= 0 && index <= pages[frontmatter.value.tags].length) {
    return pages[frontmatter.value.tags][index + 1]
  }
  return null
})

function findIndex() {
  let tags = frontmatter.value.tags
  if (tags && typeof tags == 'string' && pages[tags]) {
    return pages[tags].findIndex(el => el.title == page.value.title)
  }
  return -1
}

function getParents(tag, all) {
  let parents = [];
  all.forEach(page => {
    if (tag && typeof tag == 'string' && tag == page.data?.list) {
      parents.push(page)
    }
  })
  return parents
}
</script>

<style  scoped>
.link {
  @apply transition-all duration-500 no-underline text-sm flex-1 flex flex-col items-center p-4 m-2 bg-light-100/10 max-w-60ch mx-auto hover:(bg-light-100);
}
</style>
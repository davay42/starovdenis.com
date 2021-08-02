<template lang="pug">
.flex.flex-col
  a.p-4.no-underline.transition-all.duration-300.text-xl(
    v-for="page in site.customData.pages.main"
    :key= "page.link"
    :href="page.link"
    :class="{ active: route.path.includes(page.link) }"
  ) {{ page.title }} 
</template>

<script setup>
import { useData, useRoute } from 'vitepress'
const { site, frontmatter } = useData();

const route = useRoute();
</script>
  
<style scoped>
.active {
  @apply bg-light-900/50 rounded;
}
</style>
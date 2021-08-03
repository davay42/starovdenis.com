<template lang="pug">
.inline-flex.flex-wrap.items-stretch.justify-start
  a.link(v-for="page in parents", :key="page.title" :href="page.link") 
    carbon-chevron-right.mr-1
    span {{ page.title }}
</template>

<script setup>
import { useParents } from '../../composables/links.js'

const parents = useParents();

</script>

<style  scoped>
.link {
  @apply transition-all duration-500 no-underline text-lg flex items-center p-4 bg-light-800/60 dark:(bg-dark-100/10) hover:(bg-light-100 dark:bg-dark-100);
  flex: 0 1 auto;
}
</style>
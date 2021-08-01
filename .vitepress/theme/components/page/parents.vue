<template lang="pug">
.flex.flex-wrap.items-center
  a.link(v-for="page in parents", :key="page.title" :href="page.link") 
    carbon-arrow-up.mr-1
    span {{ page.title }}
</template>

<script setup>
import { useParents } from '../../composables/links.js'

const parents = useParents();

</script>

<style  scoped>
.link {
  @apply transition-all duration-500 no-underline text-lg flex-1 flex items-center p-8 bg-light-100/10 hover:(bg-light-100);
}
</style>
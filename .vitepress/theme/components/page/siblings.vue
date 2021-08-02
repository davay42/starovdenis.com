<template lang="pug">
.flex.flex-wrap.items-center
  a.link(v-if="prev" :href="prev.link") 
    carbon-arrow-left.mr-1
    span {{ prev.title }}
  a.link(v-if="next" :href="next.link") 
    carbon-arrow-right.mr-1
    span {{ next.title }}
</template>

<script setup>
import { useSiblings } from '../../composables/links.js'

const { next, prev } = useSiblings();

</script>

<style  scoped>
.link {
  @apply transition-all duration-500 no-underline  flex-1 flex flex-col items-center p-4 bg-light-100/10 mx-auto hover:(bg-light-100 text-dark-600);
}
</style>
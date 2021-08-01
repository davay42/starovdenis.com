<template lang="pug">
footer
  a.flex.flex-col.items-center.no-underline(href="/") 
    .font-bold.text-2xl.p-2 {{ site.title }}
</template>

<script setup>
import { useData } from 'vitepress'

const { site } = useData();
</script>

<style scoped>
footer {
  scroll-snap-align: end;
  @apply transition-all duration-600 bg-dark-100 text-light-300/80 py-4 px-4 sm:px-8 md:px-16 flex flex-col items-center dark:(bg-dark-900);
}
</style>
<template lang="pug">
footer
  .flex.flex-wrap.justify-center
    nav-links
  a.flex.flex-col.items-center.no-underline(href="/") 
    .mt-4.font-bold.text-2xl.p-2 {{ site.title }}
    img.w-6rem.my-4(src="/img/sadvidya.svg")
</template>

<script setup>
import { useData } from 'vitepress'

const { site } = useData();
</script>

<style scoped>
footer {
  scroll-snap-align: end;
  @apply transition-all duration-600 mt-8 bg-dark-100 text-light-300/80 py-16 px-4 sm:px-8 md:px-16 flex flex-col items-center dark:(bg-dark-900);
}
</style>
<template lang="pug">
header
  a.no-underline.mt-4.mb-4.text-center(href="/")
    img.w-12rem.mb-8(:src="theme.logo")
    .text-3xl.font-bold {{ site.title }}
</template>

<script setup>
import { useData } from 'vitepress'
const { site, theme } = useData();
</script>

<style scoped>
header {
  @apply flex flex-col items-center;
  scroll-snap-align: start;
}
</style>
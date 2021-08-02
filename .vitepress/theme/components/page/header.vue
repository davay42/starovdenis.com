<template lang="pug">
header
  .sticky.top-0
    a.no-underline.mt-4.mb-4(href="/")
      img.w-12rem.mb-8(:src="theme.logo")
      .text-3xl.font-bold {{ site.title }}
    .flex.flex-col
      nav-links.my-4
      .flex.p-2
        nav-dark
  .flex-1
</template>

<script setup>
import { useData } from 'vitepress'
const { site, theme } = useData();
</script>

<style scoped>
</style>
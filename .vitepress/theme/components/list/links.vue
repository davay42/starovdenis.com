<template lang="pug">
ul
  li(v-for="link in links", :key="link.url")
    a.font-bold(:href="link.url", target="_blank") {{ link.title }} 
    .opacity-60.text-md {{ link.url }}
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>
</style>
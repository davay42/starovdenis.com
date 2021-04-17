<template lang="pug">
a.p-4.my-2.flex.flex-col.rounded(
  style="background-color: var(--c-bg-secondary);"
  :href="item.link", 
  :title="item.lastModified",
  v-motion,
  :initial="{ opacity: 0, y: 40 }",
  :enter="{ opacity: 0, y: 0, scale: 1 }",
  :visible="{ opacity: 1, y: 0, scale: 1 }",
  :tapped="{ scale: 0.99, opacity: 0 }",
  :delay="i * 80",
  )
  .flex.flex-1.items-center
    h3.text-2xl {{ item.title }}
    .flex-1 
    card-date(:date="item.lastModified")
  .text-md.mt-4(v-if="item.subtitle") {{ item.subtitle }}
  
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: Object,
  i: Number
});
</script>

<style lang="stylus" scoped>
a:hover {
  text-decoration: none;
}
</style>
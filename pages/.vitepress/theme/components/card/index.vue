<template lang="pug">
a(
  class="hover:shadow-md",
  style="background-color: var(--c-bg-secondary);"
  :href="item.link", 
  :title="item.lastModified",
  v-motion,
  :initial="{ opacity: 0, y: 40 }",
  :enter="{ opacity: 0, y: 0, scale: 1 }",
  :visible="{ opacity: 1, y: 0, scale: 1 }",
  :tapped="{ scale: 0.99, opacity: 0.8 }",
  :delay="i * 80",
  )
  .flex.flex-1.items-center.self-stretch
    h3.text-2xl {{ item.title }}
    .flex-1 
    card-date(:date="item.lastModified")
  .text-md.mt-4.mb-2.font-normal(v-if="item.subtitle") {{ item.subtitle }}
  .text-xl.font-bold.rounded-xl.bg-orange-200.p-2.mt-4(v-if="item.data.price") {{ item.data.price }}
  
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: Object,
  i: Number
});
</script>

<style lang="postcss" scoped>
a {
  @apply p-4 my-4 flex flex-col items-start rounded shadow-sm;
}

a:hover {
  text-decoration: none;
}
</style>
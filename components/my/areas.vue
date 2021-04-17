<template lang="pug">
.flex.flex-col
  a.p-4.my-2.bg-gray-100.flex.items-center(
    v-for="(area,i) in sorted", 
    :key="area.title", 
    :href="area.link", 
    :title="area.lastModified",
    v-motion,
    :initial="{ opacity: 0, y: 100 }",
    :enter="{ opacity: 1, y: 0, scale: 1 }",
    :visible="{ opacity: 1, y: 0, scale: 1 }",
    :delay="i * 80"
    )  
    .text-2xl {{ area.title }}
    .flex-1 
    .text-sm {{ area.lastModified.slice(0, 10) }}
</template>

<script setup>
import { computed, defineProps, reactive } from "vue";

const props = defineProps({
  areas: Object,
});

const sorted = computed(() => {
  if (!props.areas && typeof props.areas != 'array') { return }
  return [...props.areas].sort((a, b) => {
    if (a?.lastModified > b?.lastModified) {
      return -1
    } else {
      return 1
    }
  })
});




</script>

<style lang="postcss" scoped>
</style>

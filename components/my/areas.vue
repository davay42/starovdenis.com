<template lang="pug">
.flex.flex-col
  a.p-4.my-2.bg-gray-100.flex.items-center(v-for="area in sorted", :key="area.title", :href="area.link", :title="area.lastModified" )  
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

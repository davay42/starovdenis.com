<template lang="pug">
.flex.flex-col
  a.text-2xl.p-4.my-2.bg-gray-100(v-for="area in sorted", :key="area.title", :href="area.link", :title="area.lastModified" )  {{ area.title }}
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

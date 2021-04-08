<template lang="pug">
.flex.flex-col
  a.text-2xl.p-4.my-2.bg-gray-100(v-for="area in areas", :key="area.title", :href="area.link", :title="area.lastModified" )  {{ area.title }}
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  areas: Object,
});


</script>

<style lang="postcss" scoped>
</style>

<template lang="pug">
.flex.flex-col.items-center.my-8
  .box
    .text-xl.pb-4 {{ title }}
    audio.rounded-xl.mx-auto(
      controls
      :src="file"
    )
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  file: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.box {
  @apply shadow-xl p-4 rounded-xl bg-light-300 dark:bg-dark-200;
}
</style>
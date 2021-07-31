<template lang="pug">
iframe.shadow-2xl.rounded-lg.mx-auto.py-4(
  loading="lazy"
  width="420", 
  height="300", 
  :src="`https://www.youtube-nocookie.com/embed/${id}`", 
  title="YouTube video player", 
  frameborder="0", 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 
  allowfullscreen
  )
</template>
  
<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ''
  }
});
</script>
  
<style scoped>
.row {
  @apply flex flex-wrap py-8 sm:py-32 shadow-2xl;
}
</style>
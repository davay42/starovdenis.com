<template lang="pug">
main(aria-labelledby="main-title")
  HomeHero
  Content
  HomeFooter
  
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.home-content {
  @apply max-w-62rem mx-auto py-6 md:(p-0);
}
</style>

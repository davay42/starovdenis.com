<template lang="pug">
main.pb-12(aria-labelledby="main-title")
  home-hero.text-warm-gray-100
  content.content
  home-footer
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.content {
  @apply max-w-65ch mx-auto p-6 md:(p-12)  bg-gray-50 bg-opacity-96 dark:(bg-warm-gray-900 bg-opacity-96);
}
</style>

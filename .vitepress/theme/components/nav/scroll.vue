<template lang="pug">
button(@click="scroll()")
  la-arrow-up
</template>

<script setup>
function scroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
</style>
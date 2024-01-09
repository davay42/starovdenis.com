<script setup>
import '../styles/markdown.postcss'
import '../styles/transitions.postcss'

</script>

<template lang='pug'>
main
  content.markdown-body
</template>

<style lang="postcss">
html {
  @apply bg-light-300;
}

html * {
  @apply transition duration-100;
}
</style>
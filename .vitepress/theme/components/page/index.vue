<template lang="pug">
main
  .content
    .text-4xl.font-bold.mb-12(v-if="$frontmatter.title") {{ $frontmatter.title }}
    content
  page-footer
  page-next-prev
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
main {
  @apply px-4 pb-16 pt-$header-height container max-w-sm mx-auto 
  md:(px-8);
}

.content {
  padding-bottom: 1.5rem;
  @apply p-8 max-w-55ch mx-auto;
}

.content.cards {
  @apply max-w-65ch mx-auto;
}

.content tbody tr td:nth-child(1) {
  white-space: nowrap;
}
</style>

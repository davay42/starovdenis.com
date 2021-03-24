<template lang="pug">
main.main
  slot(name="top")
  Content.content(:class="{ cards: !!$frontmatter.cards }")
  PageFooter
  NextAndPrevLinks
  slot(name="bottom")
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.main {
  @apply px-4 pb-16 pt-1 container max-w-sm mx-auto
  md:(px-8);
}

.content {
  padding-bottom: 1.5rem;
  @apply max-w-55ch mx-auto;
}

.content.cards {
  @apply max-w-65ch mx-auto;
}


.content tbody tr td:nth-child(1) {
  white-space: nowrap;
}

</style>

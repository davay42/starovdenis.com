<template lang="pug">
main
  .content
    page-parents

    .text-4xl.font-bold.mb-6.flex.items-center(v-if="$frontmatter.title", v-motion-fade, :key="$frontmatter.title") 
      .mr-2 {{ $frontmatter.title }}
      .flex-1
      .mx-2.text-6xl {{ $frontmatter.emoji }}
    .flex.items-center(v-if="$frontmatter.price")
      .text-xl.font-bold.rounded-xl.bg-orange-200.p-2.mr-2 {{ $frontmatter.price }}
      a.text-xl.font-bold.rounded-xl.border-orange-200.border-8.px-2(href="/contact") Заказать
    content
  my-areas.max-w-55ch.mx-auto(
    v-if="$frontmatter.list", 
    :areas="$site.customData.pages?.[$frontmatter.list]"
    )
  page-footer
  page-next-prev
</template>

<script setup lang="ts">


</script>

<style lang="postcss" scoped>
main {
  @apply px-4 max-w-55ch pb-16 pt-$header-height container mx-auto 
  md:(px-8);
}

.content {
  padding-bottom: 1.5rem;
  @apply p-8 max-w-55ch mx-auto relative flex flex-col;
}

.content.cards {
  @apply max-w-65ch mx-auto;
}
</style>

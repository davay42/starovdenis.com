<template lang="pug">
a(
  class="hover:shadow",
  style="background-color: var(--c-bg-secondary);"
  :href="item.link", 
  :title="item.lastModified",
  v-motion,
  :initial="{ opacity: 0, y: 40 }",
  :enter="{ opacity: 0, y: 0, scale: 1 }",
  :visible="{ opacity: 1, y: 0, scale: 1 }",
  :tapped="{ scale: 0.99, opacity: 0.8 }",
  :delay="i * 80",
  )
  .art.w-full.h-16em.bg-cover.bg-center(v-if="item.data.art", :style="{ backgroundImage: 'url(' + '/art/' + item.data.art + ')' }", v-motion-fade)
  .flex.flex-col.p-4.w-full
    .flex.flex-1.items-center.self-stretch.flex-wrap

      h3.text-2xl {{ item.title }}
      .ml-4.text-4xl(v-if="item.data.emoji") {{ item.data.emoji}}
      .flex-auto
      card-date(:date="item.lastModified")
    .text-md.mt-4.mb-2.font-normal(v-if="item.subtitle") {{ item.subtitle }}
    .text-xl.font-bold.rounded-xl.text-orange-800.p-2.mt-4(class="dark:text-orange-300",v-if="item.data.price") {{ item.data.price }}
  
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: Object,
  i: Number
});
</script>

<style lang="postcss" scoped>
a {
  @apply my-4 flex flex-col items-start rounded shadow-sm;
  transition: box-shadow color 100ms ease-in-out;
}

.art {
  filter: saturate(10%);
  transition: all 200ms ease-in-out;
}

a:hover .art {
  filter: saturate(50%);
}

a:hover {
  text-decoration: none;
}
</style>
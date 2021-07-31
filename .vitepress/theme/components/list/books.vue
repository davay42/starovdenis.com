<template lang="pug">
ul
  li(v-for="book in books", :key="book.title")
    a.font-bold(
      :href="book.book", 
      target="_blank"
      ) {{ book.title }}
    span.px-2 {{ book.subtitle }} 
    a(
      :href="book.link", 
      target="_blank", 
      v-if="book.ISBN && book.link"
      ) ISBN {{ book.ISBN }} 
    span &nbsp; {{ book.year }}

</template>

<script setup>
const props = defineProps({
  books: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>
</style>
<template lang="pug">
.flex.flex-wrap.mx-auto.max-w-md.justify-center
  button(
    v-for="(lang,key) in langs" 
    :key="key"
    :class="{ active: lang }"
    @click="langs[key] = !langs[key]"
    ) {{ langNames[key] }}
</template>

<script setup>
import { langs } from '../composables/langs.js'
const props = defineProps({

});

const langNames = {
  sans: 'Санскрит',
  trans: 'Транскрипция',
  words: 'Слова',
  text: 'Перевод',
  eng: 'Комментарий'
};


</script>

<style scoped>
button {
  @apply outline-none opacity-50 text-sm m-1 py-1 px-2 shadow bg-light-900 rounded-xl dark:bg-dark-800;
  &.active {
    @apply opacity-100 bg-light-500 dark:bg-dark-900;
  }
}
</style>
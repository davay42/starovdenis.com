<template lang="pug">
.panel.in-place
  client-only
    .shower(v-if="show")
      button.btn.toggler.text-xl.font-bold(
        @click="langs.sans = !langs.sans"
        :class="{ active: langs.sans }"
        title="Отображение санскрита"
        ) ॐ
      button.btn.toggler.text-sm.font-bold(
        @click="langs.trans = !langs.trans"
        :class="{ active: langs.trans }"
        title="Отображение транскрипции"
        ) oṁ
      button.btn.toggler.text-sm.font-bold(
        @click="langs.words = !langs.words"
        :class="{ active: langs.words }"
        title="Отображение слов в пословном переводе"
        ) ( )
      button.btn.toggler.text-sm.font-bold(
        @click="langs.text = !langs.text"
        :class="{ active: langs.text }"
        title="Отображение перевода"
        ) ом
      button.btn.toggler.text-sm.font-bold(
        @click="langs.eng = !langs.eng"
        :class="{ active: langs.eng }"
        title="Отображение комментариев"
        ) [ ]
    .flex-1
    button.btn(
      @click="show = !show"
    )
      la-eye(v-if="!show")
      la-eye-slash(v-if="show")
    panel-fav.btn
    panel-dark.btn
    panel-scroll.btn
</template>

<script setup>
import { langs } from '../../composables/langs.js'

const show = ref(false);


</script>

<style scoped>
.in-place {
  @apply fixed right-2 bottom-2;
}
.panel {
  @apply flex flex-wrap p-1 gap-4 md:gap-2 sm:flex-col shadow items-center duration-300 rounded-xl transition-all opacity-50 bg-dark-900/30 dark:bg-dark-900 hover:(shadow-xl opacity-100);
}
.btn {
  @apply cursor-pointer leading-tight outline-none duration-100 p-2 md:(p-4) rounded-full transition-all transform  bg-light-100/10  hover:(bg-opacity-40);
}
.shower {
  @apply flex sm:flex-col gap-2;
}

.toggler {
  @apply border-dark-100 border-2 opacity-40;
  &.active {
    @apply opacity-100 border-light-100;
  }
}
</style>
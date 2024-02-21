<script setup>
const props = defineProps({
  list: { type: Array, default: () => ([]) }
})

</script>

<template lang='pug'>
.flex.flex-col.gap-4
  .p-4.shadow-md.bg-light-500.dark-bg-dark-400.flex.flex-col.gap-2(v-for="exp in list" :key="exp")
    .flex.op-60 {{ exp?.start }} &mdash; {{ exp?.end }}
    .text-2xl.mr-2.font-bold {{ exp?.position }}

    .text-lg {{ exp?.company }}

    .text-lg.italic.op-80 {{ exp?.title }}
    .text-md {{ exp?.description }}
    .font-bold.text-lg Skillset:
    ul
      li(v-for="skill in exp?.skills" :key="skill") {{ skill }}
</template>